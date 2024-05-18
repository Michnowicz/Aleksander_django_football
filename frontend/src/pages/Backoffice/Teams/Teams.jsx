import "./Teams.css"

import { useState, useEffect } from "react"
import axios from "axios"

export default function TeamsGet() {

    const [teams, setTeams] = useState([])

    useEffect(()=>{
        getTeams()
    },[])
    const getTeams = async () => {
        const response = await axios.get("http://localhost:8000/api/teams")
        setTeams(response.data.data);
    }

    useEffect(()=>{
        console.log(teams);
    },[teams])
    
    return(
        <section className="TeamsGet">

            <div className="teams">
                <div className="teamsTitle">
                    <h3>Firstname</h3>
                    <h3>Lastname</h3>
                    <h3>Role</h3>
                    <h3>Team</h3>
                </div>
                <div className="teamsInfo">
                    {
                        teams ?
                        teams.map((p,i)=>(
                            <div key={i} className="player">
                                <p>{p.firstname}</p>
                                <p>{p.lastname}</p>
                                <p>{p.role}</p>
                            </div>
                        ))
                        :
                        ""
                    }
                </div>
            </div>
        </section>
    )
}