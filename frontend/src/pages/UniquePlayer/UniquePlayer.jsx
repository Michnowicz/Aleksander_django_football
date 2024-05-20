import "./UniquePlayer.css"
import Navbar from "../../components/Navbar/Navbar"

import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

export default function UniquePlayer() {

    const {id} = useParams()

    const [player, setPlayer] = useState(null)
    const [team, setTeam] = useState(null)
    const [role, setRole] = useState(null)
    const [country, setCountry] = useState(null)

    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/data/get_unique_player/${id}`)

        const uniqueplayer = response.data.data.player
        setPlayer(uniqueplayer)

        const uniqueTeam = response.data.data.teams.filter(t => t.id == uniqueplayer.team)
        setTeam(uniqueTeam[0]);

        const uniqueRole = response.data.data.roles.filter(t => t.id == uniqueplayer.role)
        setRole(uniqueRole[0]);

        const uniqueCountry = response.data.data.countries.filter(t => t.id == uniqueplayer.country)
        setCountry(uniqueCountry[0]);
    }

    useEffect(()=>{
        console.log(player);
        console.log(team);
    },[player,team])
    
    return(
        <>
            <Navbar/>

            <section className="UniquePlayer bg-ddb">
                {
                    player && team && role && country ?
                        <div className="Player s-db bg-db">
                            <div className="PlayerImg">
                                <img src={"http://localhost:8000"+player.image} alt="" />
                            </div>
                            <div className="PlayerBody">
                                <div className="bodyInfo t-w">
                                    <h2>Name :</h2>
                                    <h2>{player.firstname} {player.lastname}</h2>
                                </div>
                                <div className="bodyInfo t-w">
                                    <b>Age :</b>
                                    <p>{player.age}</p>
                                </div>
                                <div className="bodyInfo t-w">
                                    <b>Gender :</b>
                                    {
                                        player.gender == "M" ?
                                        <p>Male</p>
                                        :
                                        <p>Female</p>
                                    }
                                    
                                </div>
                                <div className="bodyInfo t-w">
                                    <b>Role :</b>
                                    <p>{role.name}</p>
                                </div>
                                <div className="bodyInfo t-w">
                                    <b>Country :</b>
                                    <p>{country.name}</p>
                                </div>
                                <div className="bodyInfo t-w">
                                    <b>Team :</b>
                                    <Link className="t-g" to={`../teams/${team.id}`}><p>{team.name}</p></Link>
                                </div>
                            </div>
                        </div>
                    :
                    ""
                }
            </section>
        </>
    )
}