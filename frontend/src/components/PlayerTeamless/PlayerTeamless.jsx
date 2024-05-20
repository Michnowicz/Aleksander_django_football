import { useEffect, useState } from "react"
import "./PlayerTeamless.css"
import axios from "axios"


export default function PlayerTeamless() {

    const [teamless, setTeamless] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")

        // random teamless players
        const players = response.data.data.players.filter(p => p.team === null)
        const randomPlayers = []
        for (let i = 1; i < 5; i++) {
            randomPlayers.push(players[randomNum(0, players.length)])
        }
        setTeamless(randomPlayers)
    }

    return(
        <section className="PlayerTeamless bg-ddb sec">
            <div className="sTitle t-w b-w">
                <h2>Teamless Players</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    teamless ?
                    teamless.map((t,i)=>(
                    <div className="sBodyCard s-db bg-db" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+t.image} alt="" />
                        </div>
                        <div className="cardBody t-w">
                            <h2>{t.firstname} {t.lastname}</h2>
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