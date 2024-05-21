import "./NonEuropean.css"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function NonEuropean({teams}) {

    const [NonEuropean, setNonEuropean] = useState(null)

    useEffect(()=>{
        if (teams != null) {
            const filtered = teams.filter(e => e.continent != 3)
            setNonEuropean(filtered)
        }
    },[teams])

    return(
        <section className="European bd-w sec">
            <div className="sTitle t-wb b-b">
                <h2>Non European Teams</h2>
                <div className="space"></div>
            </div>
            <div className="sBodyTeam">
                {
                    NonEuropean ?
                    NonEuropean.map((e,i)=>(
                    <div className="banner s-w" key={i}>
                        <Link to={`../teams/${e.id}`} className="t-b">
                            <h2>{e.name}</h2>
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