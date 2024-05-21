import { useEffect, useState } from "react"
import "./PlayerTeamless.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function PlayerTeamless({players}) {

    const [teamless, setTeamless] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if (players != null) {
            const teamlessPlayers = players.filter(p => p.team === null)
            console.log(teamlessPlayers);
            const randomPlayers = []
            for (let i = 1; i < 5; i++) {
                randomPlayers.push(teamlessPlayers[randomNum(0, teamlessPlayers.length)])
            }
            setTeamless(randomPlayers)
        }
    },[players])

    return(
        <section className="PlayerTeamless bg-ddb sec">
            <div className="sTitle t-w b-w">
                <h2>Teamless Players</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    teamless && teamless[0] != undefined ?
                    teamless.map((t,i)=>(
                    <div className="sBodyCard s-db bg-db" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+t.image} alt="" />
                        </div>
                        <div className="cardBody t-w">
                            <Link to={`../players/${t.id}`} className="t-w">
                                <h2>{t.firstname} {t.lastname}</h2>
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