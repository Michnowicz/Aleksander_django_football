import "./PlayersUpdate.css"
import NavLeft from "../../../components/NavLeft/NavLeft"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function PlayersUpdate() {
    
    const {id} = useParams()

    const [player, setPlayer] = useState()
    const [countries, setCountries] = useState()
    const [roles, setRoles] = useState()
    const [teams, setTeams] = useState()

    useEffect(()=>{
        getPlayer()
        getCountries()
        getRoles()
        getTeams()
    },[])
    const getPlayer = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/players/${id}`)
        setPlayer(response.data.data)
    }
    const getCountries = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/countries`)
        setCountries(response.data.data)
    }
    const getRoles = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/roles`)
        setRoles(response.data.data)
    }
    const getTeams = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/teams`)
        setTeams(response.data.data)
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setPlayer({ ...player, [name]: files[0] });
        } else {
            setPlayer({ ...player, [name]: value });
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/data/player_update/${id}`, player, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
        window.location.reload();
    }

    useEffect(()=>{
        console.log(player);
        // console.log(roles);
        // console.log(countries);
        // console.log(teams);
    },[player, roles, countries,teams])

    return(
        <section className="PlayersUpdate">
            <NavLeft/>

            <div className="Infos">
                {
                    player && countries && roles && teams ?
                    <form onSubmit={handleSubmit}>
                        <div className="playerImage">
                            <img src={"http://localhost:8000"+player.image} alt={player.image} />
                            <input id="image_id" type="file" name="image" onChange={handleChange}/>
                        </div>
                        <div className="FormInput">
                            <div className="cInput">
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" name='firstname' id='firstname_id' value={player.firstname} onChange={handleChange}/>
                            </div>
                            <div className="cInput">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" name='lastname' id='lastname_id' value={player.lastname} onChange={handleChange}/>
                            </div>
                            <div className="cInput">
                                <label htmlFor="age">Age</label>
                                <input type="number" name='age' id='age_id' value={player.age} onChange={handleChange}/>
                            </div>
                            <div className="cInput">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name='phone' id='phone_id' value={player.phone} onChange={handleChange}/>
                            </div>
                            <div className="cInput">
                                <label htmlFor="mail">Email</label>
                                <input type="email" name='mail' id='mail_id' value={player.mail} onChange={handleChange}/>
                            </div>
                            <div className="cInput">
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" id="gender_id" onChange={handleChange}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div className="cInput">
                                <label htmlFor="country">Country</label>
                                    <select name="country" id="country_id" onChange={handleChange} value={player.country}>
                                    <option value="">-----</option>
                                    {
                                        countries.map((c,i)=>(
                                            <option key={i} value={c.id}>{c.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="cInput">
                                <label htmlFor="team">Team</label>
                                <select name="team" id="team_id" onChange={handleChange} value={player.team}>
                                    <option value="">-----</option>
                                    {
                                        teams.map((t,i)=>(
                                            <option key={i} value={t.id}>{t.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="cInput">
                                <label htmlFor="role">Role</label>
                                <select name="role" id="role_id" onChange={handleChange} value={player.role}>
                                <option value="">-----</option>
                                    {
                                        roles.map((r,i)=>(
                                            <option key={i} value={r.id}>{r.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-light">Save</button>
                            </div>
                        </div>
                    </form>
                    :
                    ""
                }
            </div>
        </section>
    )
}