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

    const deletePlayer = async (id) => {
        await axios.delete(`http://localhost:8000/api/data/player_delete/${id}`);
        getData();
    }

    
    return(
        <section className="PlayersGet">
            
            <NavLeft/>

            <div className="Infos bg-ddb">
                <CreatePlayer roles={roles} teams={teams} countries={countries} setPlayers={setPlayers} players={players}/>
                
                <div className="players bg-db t-w s-db">
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
                                        <Link className="c5a" to={`../backoffice/players/${p.id}`}>Update</Link>
                                        <button className="c5b" onClick={()=>deletePlayer(p.id)}>Delete</button>
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