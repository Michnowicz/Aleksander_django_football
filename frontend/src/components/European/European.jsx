import "./European.css"

import { useEffect, useState } from "react"
import axios from "axios"


export default function European() {

    const [european, setEuropean] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data/teams")

        const filtered = response.data.data.filter(e => e.continent == 3)
        console.log(filtered);
        setEuropean(filtered)
    }

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
                        <h2 className="t-w">{e.name}</h2>
                    </div>
                    ))
                    :
                    ""
                }
            </div>
        </section>
    )
}