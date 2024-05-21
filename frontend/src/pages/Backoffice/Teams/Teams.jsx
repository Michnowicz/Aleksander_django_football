import "./Teams.css"
import NavLeft from "../../../components/NavLeft/NavLeft"
import CreateTeam from "../../../components/CreateTeam/CreateTeam"

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function TeamsGet() {

    const [teams, setTeams] = useState([])
    const [continents, setContinents] = useState([])

    useEffect(()=>{
        getTeams()
        getContinent()
    },[])
    const getTeams = async () => {
        const response = await axios.get("http://localhost:8000/api/data/teams")
        setTeams(response.data.data);
    }
    const getContinent = async () => {
        const response = await axios.get("http://localhost:8000/api/data/continents")
        setContinents(response.data.data);
    }

    const deletePlayer = async (id) => {
        await axios.delete(`http://localhost:8000/api/data/team_delete/${id}`);
        getTeams();
    }

    useEffect(()=>{
        console.log(teams);
        console.log(continents);
    },[teams, continents])
    
    return(
        <section className="TeamsGet">

            <NavLeft/>

            <div className="Infos bg-ddb">
                <CreateTeam continents={continents} setTeams={setTeams}/>
                
                <div className="teams bg-db t-w s-db">
                    <div className="teamsTitle">
                        <h3 className="c1">Name</h3>
                        <h3 className="c2">city</h3>
                        <h3 className="c4">Continent</h3>
                        <h3 className="c3">Actions</h3>
                    </div>
                    <div className="teamsInfo">
                        {
                            (teams && continents) ?
                            teams.map((t,i)=>(
                                <div key={i} className="team">
                                    <p className="c1">{t.name}</p>
                                    <p className="c2">{t.city}</p>
                                    <p className="c4">{continents[t.continent-1].name}</p>
                                    <div className="c3">
                                        <Link className="c3a" to={`../backoffice/teams/${t.id}`}>Update</Link>
                                        <button className="c3b" onClick={()=>deletePlayer(t.id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}