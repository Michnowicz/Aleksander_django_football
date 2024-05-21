import { useEffect, useState } from "react"
import "./FemaleRandom.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function FemaleRandom({players, teams}) {

    const [female, setFemale] = useState(null)

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    useEffect(()=>{
        if (players != null) {
            const femalePlayers = players.filter(p => (p.gender == "F"))
            const randomPlayers = []
            for (let i = 1; i < 6; i++) {
                randomPlayers.push(femalePlayers[randomNum(0, femalePlayers.length)])
            }
            setFemale(randomPlayers)
        }
    },[players])

    return(
        <section className="PlayerTeamless bg-ddb sec">
            <div className="sTitle t-w b-w">
                <h2>Female players</h2>
                <div className="space"></div>
            </div>
            <div className="sBody">
                {
                    female && female[0] != undefined && teams && players ?
                    female.map((f,i)=>(
                    <div className="sBodyCard s-db bg-db" key={i}>
                        <div className="cardImg">
                            <img src={"http://localhost:8000"+f.image} alt="" />
                        </div>
                        <div className="cardBody">
                            <Link to={`../players/${f.id}`} className="t-w">
                                <h2>{f.firstname} {f.lastname}</h2>
                            </Link>
                            {
                                f.team == null ?
                                <h4 className="t-g">No team</h4>
                                :
                                <Link to={`../players/${teams[f.team-1].name}`} className="t-g">
                                <h4>{teams[f.team-1].name}</h4>
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