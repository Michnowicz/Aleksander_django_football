import { useEffect, useState } from "react"
import "./MaleRandom.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function MaleRandom({players, teams}) {

    const [male, setMale] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if (players != null) {
            const malePlayers = players.filter(p => (p.gender == "M"))
            console.log(malePlayers);
            const randomPlayers = []
            for (let i = 1; i < 5; i++) {
                randomPlayers.push(malePlayers[randomNum(0, malePlayers.length)])
            }
            setMale(randomPlayers)
        }
    },[players])

    return(
        <section className="PlayerTeamless bd-w sec">
            <div className="sTitle t-b b-b">
                <h2>Male players</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    male && teams && players ?
                    male.map((t,i)=>(
                    <div className="sBodyCard s-w" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+t.image} alt="" />
                        </div>
                        <div className="cardBody t-b">
                            <Link to={`../players/${t.id}`} className="t-b">
                                <h2>{t.firstname} {t.lastname}</h2>
                            </Link>
                            {
                                t.team == null ?
                                <h4 className="t-b">No team</h4>
                                :
                                <Link to={`../teams/${teams[t.team-1].name}`} className="t-b">
                                    <h4>{teams[t.team-1].name}</h4>
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
    )
}