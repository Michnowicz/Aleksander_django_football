import "./Teams.css"
import Navbar from "../../components/Navbar/Navbar"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Teams() {

    const [players, setPlayers] = useState(null)
    const [teams, setTeams] = useState(null)
    const [countries, setCountries] = useState(null)
    const [roles, setRoles] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")
        setPlayers(response.data.data.players)
        setTeams(response.data.data.teams)
        setCountries(response.data.data.countries)
        setRoles(response.data.data.roles)
    }

    useEffect(()=>{
        if (players != null) {
            console.log(players);
            console.log(teams);
        }
    },[players,teams])
    
    return(
        <>
            <Navbar/>

            <section className="Teams bg-ddb">
                <h1  className="pTitle">TEAMS</h1>
                <div className="sBody">
                    {
                        players && teams && countries && roles ?
                        teams.map((t,i)=>(
                            <div key={i} className="sBodyCard s-db bg-db">
                                <div className="CardTitle t-w">
                                    <Link to={`../teams/${t.id}`} className="t-w">
                                        <h2>{t.name}</h2>
                                    </Link>
                                    <b className="t-g">{t.city}</b>
                                </div>
                                <div className="CardBody t-w">
                                    {
                                        players.filter(p => p.team == t.id).map((p,i)=>(
                                            <div key={i} className="TeamPlayer s-db">
                                                <Link to={`../players/${p.id}`} className="t-w">
                                                    <h3>{p.firstname} {p.lastname}</h3>
                                                </Link>
                                                <h4 className="t-g">{roles[p.role-1].name}</h4>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        :
                        ""
                    }
                </div>
            </section>
        </>
    )
}