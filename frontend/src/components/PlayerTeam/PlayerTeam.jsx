import { useEffect, useState } from "react"
import "./PlayerTeam.css"
import axios from "axios"
import { Link } from "react-router-dom"


export default function PlayerTeam({players,teams,}) {

    const [teamPlayer, setTeamPlayer] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if (players != null) {
            const TeamPlayers = players.filter(p => p.team != null)
            const randomPlayers = []
            for (let i = 0; i < 4; i++) {
                randomPlayers.push(TeamPlayers[randomNum(0, TeamPlayers.length)])
            }
            setTeamPlayer(randomPlayers)
        }  
    },[players])

    return(
        <section className="PlayerTeam bg-w sec">
            <div className="sTitle t-b b-b">
                <h2>Players with Teams</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    teamPlayer && teams ?
                    teamPlayer.map((t,i)=>(
                    <div className="sBodyCard s-w" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+t.image} alt="" />
                        </div>
                        <div className="cardBody t-b">
                            <Link to={`../players/${t.id}`} className="t-b">
                                <h2>{t.firstname} {t.lastname}</h2>
                            </Link>
                            <Link to={`../teams/${teams[t.team-1].id}`} className="t-b">
                                <h4>{teams[t.team-1].name}</h4>
                            </Link>
                        </div>
                    </div>
                    ))
                    :
                    ""
                }
            </div>
        </section>
    )
}