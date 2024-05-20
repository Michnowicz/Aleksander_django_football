import "./European.css"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function European({teams}) {

    const [european, setEuropean] = useState(null)

    useEffect(()=>{
        if (teams != null) {
            const filtered = teams.filter(e => e.continent == 3)
            setEuropean(filtered)
        }
    },[teams])

    return(
        <section className="European bg-ddb sec">
            <div className="sTitle t-w b-w">
                <h2>European Teams</h2>
                <div className="space"></div>
            </div>
            <div className="sBodyTeam ">
                {
                    european ?
                    european.map((e,i)=>(
                    <div className="banner s-db bg-db" key={i}>
                        <Link to={`../teams/${e.id}`} className="t-w">
                            <h2 className="t-w">{e.name}</h2>
                        </Link>
                    </div>
                    ))
                    :
                    ""
                }
            </div>
        </section>
    )
}