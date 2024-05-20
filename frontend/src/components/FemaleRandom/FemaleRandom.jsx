import { useEffect, useState } from "react"
import "./FemaleRandom.css"
import axios from "axios"


export default function FemaleRandom() {

    const [female, setFemale] = useState(null)
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

        // random female players
        const players = response.data.data.players.filter(p => (p.gender == "F"))
        const randomPlayers = []
        for (let i = 1; i < 6; i++) {
            randomPlayers.push(players[randomNum(0, players.length)])
        }
        setFemale(randomPlayers)
        setTeams(response.data.data.teams)
    }

    return(
        <section className="PlayerTeamless bg-db sec">
            <div className="sTitle t-w b-w">
                <h2>Female players</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    female && teams ?
                    female.map((t,i)=>(
                    <div className="sBodyCard s-db" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+t.image} alt="" />
                        </div>
                        <div className="cardBody t-w">
                            <h2>{t.firstname} {t.lastname}</h2>
                            {
                                t.team == null ?
                                <h4>No team</h4>
                                :
                                <h4>{teams[t.team-1].name}</h4>
                            }
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