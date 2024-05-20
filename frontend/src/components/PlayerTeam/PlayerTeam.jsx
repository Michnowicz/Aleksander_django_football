import { useEffect, useState } from "react"
import "./PlayerTeam.css"
import axios from "axios"


export default function PlayerTeam() {

    const [teamPlayer, setTeamPlayer] = useState(null)
    const [teams, setTeams] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")

        const players = response.data.data.players.filter(p => p.team != null)
        const randomPlayers = []
        for (let i = 0; i < 4; i++) {
            randomPlayers.push(players[randomNum(0, players.length)])
        }
        setTeamPlayer(randomPlayers)
        setTeams(response.data.data.teams)
    }

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
                            <h2>{t.firstname} {t.lastname}</h2>
                            <h4>{teams[t.team-1].name}</h4>
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