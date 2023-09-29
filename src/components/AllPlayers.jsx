import { GetPuppies } from "../API/PuppyBowlApi"

const AllPlayers = ({players}) =>{
    return (
        <div className="allPlayers">
            <h1>All Players</h1>
            <div>
        {
            players?.map((player)=>{
                return (
                    <div>
                        <h4>{player.name}</h4>
                        ...whatever you want to display
                    </div>
                )
            })
        }
    </div>
        </div>
        
    )
}

export default AllPlayers