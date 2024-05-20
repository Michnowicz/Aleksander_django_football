import "./NonEuropean.css"

import { useEffect, useState } from "react"
import axios from "axios"


export default function NonEuropean() {

    const [NonEuropean, setNonEuropean] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data/teams")

        const filtered = response.data.data.filter(e => e.continent != 3)
        console.log(filtered);
        setNonEuropean(filtered)
    }

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
                        <h2 className="t-b">{e.name}</h2>
                    </div>
                    ))
                    :
                    ""
                }
            </div>
        </section>
    )
}