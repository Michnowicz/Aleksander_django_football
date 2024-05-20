import "./UniqueTeam.css"
import Navbar from "../../components/Navbar/Navbar"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

export default function UniqueTeam() {
    const {id} = useParams()
    const [players, setPlayers] = useState(null)
    const [team, setTeam] = useState(null)
    const [continent, setContinent] = useState(null)
    const [roles, setRoles] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get(`http://localhost:8000/api/data/get_unique_team/${id}`)

        const uniqueTeam = response.data.data.team
        setTeam(uniqueTeam);
        
        const uniqueContinent = response.data.data.continents.filter(c => c.id == uniqueTeam.continent)
        setContinent(uniqueContinent[0]);

        setRoles(response.data.data.roles)

        const TeamPlayers = response.data.data.players.filter(p => p.team == id)
        setPlayers(TeamPlayers);
    }

    useEffect(()=>{
        if (team != null) {
            console.log(team);
        }
    },[team,continent])
    
    return(
        <>
            <Navbar/>

            <section className="UniqueTeam bg-ddb">
                <div className="sBody">
                    {
                        players && team && roles && continent ?
                            <div className="sBodyCard s-db bg-db">
                                <div className="CardTitle t-w">
                                    <h2>{team.name}</h2>
                                    <b className="t-g">{continent.name} , {team.city}</b>
                                </div>
                                <div className="CardBody t-w">
                                    {
                                        players.filter(p => p.team == team.id).map((p,i)=>(
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
                        :
                        ""
                    }
                </div>
            </section>
        </>
    )
}