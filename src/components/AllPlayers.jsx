//todos : create search bar
//add button to each player


import { Link } from "react-router-dom"
import SinglePlayer from "./SinglePlayer"


const AllPlayers = ({players}) =>{

    return (
        
        <div className="allPlayers">
            <h1>All Players</h1>
            <div>
        {
            players?.map((player)=>{
                return (
                    <div className="playerInfo">
                        <img src={`${player.imageUrl}`} />
                        <div>                        
                        <h4 id="name">{player.name}</h4>
                        <h4 id="breed">the {player.breed}</h4>
                        <h4 id="status">[{player.status}]</h4>
                        <button onClick={<SinglePlayer/>} >Details</button>
                        </div>

                     
                    </div>
                    
                )
            })
        }
    </div>
        </div>
        
    )
}

export default AllPlayers