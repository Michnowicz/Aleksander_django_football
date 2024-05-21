import { useEffect, useState } from "react"
import "./CreatePlayer.css"
import axios from "axios"

export default function CreatePlayer({teams, roles,countries,setPlayers,players}) {
    
    const [show, setShow] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false)

    const [playerForm, setPlayerForm] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        phone: "",
        mail: "",
        gender: "",
        country: 0,
        team: 0,
        role: 0,
    })
    const [imageFile, setImageFile] = useState(null);

    // const countPlayers = () => {
    //     const filter = players.filter(p => p.team == playerForm.team)
    //     if (filter.length == 5) {
    //         return(false)
    //     } else {
    //         return(true)
    //     }
    // }
    const countPlayers = () => {
        const filter = players.filter(p => p.team == playerForm.team)
        if (filter.length == 5) {
            setErr(true)
            setSuccess(false)
            setErrMessage("Team already full")
            return(false);
        } else {
            const formRole = playerForm.role
            const roleFilter = players.filter(p => (p.role == formRole && p.team == playerForm.team)).length
            if (formRole == "4" && roleFilter <= 1) {
                setErr(false)
                setSuccess(true)
                return(true);
            } else if (roleFilter <= 0) {
                setErr(false)
                setSuccess(true)
                return(true);
            } else {
                setErr(true)
                setSuccess(false)
                setErrMessage("This role is already taken")
                return(false);
            }
        }
    }

    const createForm = async () => {
        try {
            const formData = new FormData();
            formData.append('firstname', playerForm.firstname);
            formData.append('lastname', playerForm.lastname);
            formData.append('age', playerForm.age);
            formData.append('phone', playerForm.phone);
            formData.append('mail', playerForm.mail);
            formData.append('gender', playerForm.gender);
            formData.append('country', playerForm.country);
            formData.append('team', playerForm.team);
            formData.append('role', playerForm.role);
            formData.append('image', imageFile);

            const flag = countPlayers()

            if (flag == true) {
                await fetch('http://127.0.0.1:8000/api/data/player_create', {
                    method: 'POST',
                    body: formData,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setImageFile(files[0]);
        } else {
            setPlayerForm({ ...playerForm, [name]: value });
        }
    };

    const getPlayer = async () => {
        const response = await axios.get("http://localhost:8000/api/data")
        setPlayers(response.data.data.players);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createForm();
        getPlayer()
    };


    const showForm = () => {
        setShow(!show)
    }



    return(
        <div className="CreatePlayer">
            <div className={err == true ? "popErr" : "disable"}>{errMessage}</div>
            <div className={success == true ? "popOK" : "disable"}>Player successfully created</div>
            <form onSubmit={handleSubmit} className={show===false?"disabled":"cpForm"}>
                <div className="imgForm">
                    <img src="" alt="" />
                    <input id="image_id" type="file" name="image" onChange={handleChange}/>
                </div>
                <div className="inputForm">
                    <div className="c1">
                        <div className="cInput">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" name='firstname' id='firstname_id' value={playerForm.firstname} onChange={handleChange}/>
                        </div>
                        <div className="cInput">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" name='lastname' id='lastname_id' value={playerForm.lastname} onChange={handleChange}/>
                        </div>
                        <div className="cInput">
                            <label htmlFor="age">Age</label>
                            <input type="number" name='age' id='age_id' value={playerForm.age} onChange={handleChange}/>
                        </div>
                        <div className="cInput">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name='phone' id='phone_id' value={playerForm.phone} onChange={handleChange}/>
                        </div>
                        <div className="cInput">
                            <label htmlFor="mail">Email</label>
                            <input type="email" name='mail' id='mail_id' value={playerForm.mail} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="c2">
                        <div className="cInput">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender_id" onChange={handleChange}>
                                <option value="">-----</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div className="cInput">
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country_id" onChange={handleChange}>
                            <option value="">-----</option>
                                {
                                    countries ?
                                    countries.map((c,i)=>(
                                        <option key={i} value={c.id}>{c.name}</option>
                                    ))
                                    :
                                    ""
                                }
                            </select>
                        </div>
                        <div className="cInput">
                            <label htmlFor="team">Team</label>
                            <select name="team" id="team_id" onChange={handleChange}>
                                <option value="">-----</option>
                                {
                                    teams ?
                                    teams.map((t,i)=>(
                                        <option key={i} value={t.id}>{t.name}</option>
                                    ))
                                    :
                                    ""
                                }
                            </select>
                        </div>
                        <div className="cInput">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role_id" onChange={handleChange}>
                            <option value="">-----</option>
                                {
                                    roles ?
                                    roles.map((r,i)=>(
                                        <option key={i} value={r.id}>{r.name}</option>
                                    ))
                                    :
                                    ""
                                }
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-light">Save</button>
                        </div>
                        
                    </div>
                </div>
            </form>

            <div className="create">
                <button className="cb" onClick={showForm} type="submit">New player</button>
            </div>
        </div>
    )
}