import "./Players.css"
import Navbar from "../../components/Navbar/Navbar"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Players() {

    const [players, setPlayers] = useState(null)
    const [teams, setTeams] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")
        setPlayers(response.data.data.players)
        setTeams(response.data.data.teams)
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

            <section className="Players bg-ddb">
                <div className="sBody">
                    {
                        players && teams ?
                        players.map((p,i)=>(
                            <div className="sBodyCard s-db bg-db">
                                <div className="cardImg">
                                    <img src={"http://localhost:8000"+p.image} alt="" />
                                </div>
                                <div className="cardBody t-w">
                                    <Link to={`../players/${p.id}`} className="t-w">
                                        <h2>{p.firstname} {p.lastname}</h2>
                                    </Link>
                                    {
                                        p.team == null  ?
                                        <h3>No Team</h3>
                                        :
                                        <Link to={`../teams/${teams[p.team-1].id}`} className="t-g">
                                            <h4>{teams[p.team-1].name}</h4>
                                        </Link>
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