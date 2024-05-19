import { useEffect, useState } from "react"
import "./CreateTeam.css"
import axios from "axios"

export default function CreateTeam({continents, setTeams,}) {

    const [show, setShow] = useState(false)
    
    const [teamForm, setTeamForm] = useState({
        name: "",
        city: "",
        continent: 0,
    })

    const getContinent = async () => {
        const response = await axios.get("http://localhost:8000/api/data/continents")
        setTeams(response.data.data);
    }

    const createForm = async () => {
        try {
            const formData = new FormData();
            formData.append('name', teamForm.name);
            formData.append('city', teamForm.city);
            formData.append('continent', teamForm.continent);
            await fetch('http://127.0.0.1:8000/api/data/team_create', {
                method: 'POST',
                body: formData,
            });
        } catch (error) {
            console.log(error);
        }}

        const handleChange = (e) => {
            const { name, value } = e.target;
            setTeamForm({ ...teamForm, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            createForm();
            getContinent()
        };

        const showForm = () => {
            setShow(!show)
        }

        useEffect(()=>{
            console.log(teamForm);
        },[teamForm])



    return(
        <div className="CreateTeam">
            <form onSubmit={handleSubmit} className={show===false?"disabled":"cpForm"}>
                <div className="cInput">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name_id' value={teamForm.name} onChange={handleChange}/>
                </div>
                <div className="cInput">
                    <label htmlFor="city">City</label>
                    <input type="text" name='city' id='city_id' value={teamForm.city} onChange={handleChange}/>
                </div>
                <div className="cInput">
                    <label htmlFor="continent">Continent</label>
                    <select name="continent" id="continents_id" onChange={handleChange}>
                        <option value="">-----</option>
                        {
                            continents ?
                            continents.map((c,i)=>(
                                <option key={i} value={c.id}>{c.name}</option>
                            ))
                            :
                            ""
                        }
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-light">Save</button>
                </div>
            </form>

            <div className="create">
                <button className="cb" onClick={showForm} type="submit">New player</button>
            </div>
        </div>
    )
}