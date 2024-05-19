import "./TeamUpdate.css"
import NavLeft from "../../../components/NavLeft/NavLeft"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export default function TeamUpdate() {
    const {id} = useParams()

    const [team, setTeam] = useState(null)
    const [continents, setContinents] = useState(null)

    useEffect(()=>{
        getPlayer()
        getContinents()
    },[])
    const getPlayer = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/teams/${id}`)
        setTeam(response.data.data)
    }
    const getContinents = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/continents`)
        setContinents(response.data.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeam({ ...team, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/data/team_update/${id}`, team);
            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
        window.location.reload();
    }


    return(
        <section className="TeamUpdate">
            <NavLeft/>
            
            <div className="Infos">
                { 
                team && continents ?
                <form onSubmit={handleSubmit}>
                    <div className="cInput">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name_id' value={team.name} onChange={handleChange}/>
                    </div>
                    <div className="cInput">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' id='city_id' value={team.city} onChange={handleChange}/>
                    </div>
                    <div className="cInput">
                        <label htmlFor="continent">Continent</label>
                            <select name="continent" id="continent_id" onChange={handleChange} value={team.continent}>
                            <option value="">-----</option>
                            {
                                continents.map((c,i)=>(
                                    <option key={i} value={c.id}>{c.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-light">Save</button>
                    </div>
                </form>
                :
                ""
                }
            </div>
        </section>
    )
}