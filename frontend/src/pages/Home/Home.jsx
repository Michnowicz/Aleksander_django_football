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

    
    return(
        <>
            <Navbar/>

            <div className="Home">
                <Hero/>
                {
                    
                }
                <PlayerTeamless />
                <PlayerTeam />
                <European/>
                <NonEuropean/>
                <FemaleRandom/>
                <MaleRandom/>
            </div>
        </>
    )
}