import "./PlayersGet.css"
import NavLeft from "../../../components/NavLeft/NavLeft"
import CreatePlayer from "../../../components/CreatePlayer/CreatePlayer"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function PlayersGet() {

    const [players, setPlayers] = useState([])
    const [roles, setRoles] = useState([])
    const [teams, setTeams] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")
        setPlayers(response.data.data.players);
        setRoles(response.data.data.roles)
        setTeams(response.data.data.teams)
        setCountries(response.data.data.countries)
    }

    
    return(
        <section className="PlayersGet">
            
            <NavLeft/>

            <div className="Infos">
                <CreatePlayer roles={roles} teams={teams} countries={countries} setPlayers={setPlayers}/>
                <div className="players">
                    <div className="playersTitle">
                        <h3 className="c1">Firstname</h3>
                        <h3 className="c2">Lastname</h3>
                        <h3 className="c3">Role</h3>
                        <h3 className="c4">Team</h3>
                        <h3 className="c5">Actions</h3>
                    </div>
                    <div className="playersInfo">
                        {
                        ( players && roles) ?
                            players.map((p,i)=>(
                                <div key={i} className="player">
                                    <p className="c1">{p.firstname}</p>
                                    <p className="c2">{p.lastname}</p>
                                    <p className="c3">{roles[p.role-1].name}</p>
                                    {
                                        p.team == null ?
                                        <p className="c4">No Team</p>
                                        :
                                        <p className="c4">{teams[p.team-1].name}</p>
                                    }
                                    <div className="c5">
                                        <Link className="c5a">Update</Link>
                                        <Link className="c5b">Delete</Link>
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