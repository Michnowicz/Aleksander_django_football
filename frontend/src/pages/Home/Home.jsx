import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import PlayerTeamless from "../../components/PlayerTeamless/PlayerTeamless"
import PlayerTeam from "../../components/PlayerTeam/PlayerTeam"
import European from "../../components/European/European"
import NonEuropean from "../../components/NonEuropean/NonEuropean"
import FemaleRandom from "../../components/FemaleRandom/FemaleRandom"
import MaleRandom from "../../components/MaleRandom/MaleRandom"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

    const [players, setPlayers] = useState(null)
    const [teams, setTeams] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get("http://localhost:8000/api/data")
        setPlayers(response.data.data.players)
        setTeams(response.data.data.teams)
    }

    useEffect(()=>{
        console.log(teams);
    },[teams])
    
    return(
        <>
            <Navbar/>

            <div className="Home">
                <Hero/>
                {
                    players && teams ?
                    <>
                        <PlayerTeamless players={players}/>
                        <PlayerTeam players={players} teams={teams}/>
                        <European teams={teams}/>
                        <NonEuropean teams={teams}/>
                        <FemaleRandom players={players} teams={teams}/>
                        <MaleRandom players={players} teams={teams}/>
                    </>
                    :
                    <p>loading data</p>
                
                }
            </div>
        </>
    )
}