//todos : create search bar


import { Link } from "react-router-dom"



const AllPlayers = ({players}) =>{


    return (
        
        <div className="allPlayers" key={players}>

            <div>
        {
            players?.map((player)=>{
                return (
                    <div className="playerInfo" key={player.id}>
                        <img src={`${player.imageUrl}`} />
                        <div>                        
                        <h4 id="name">{player.name}</h4>
                        <h4 id="breed">the {player.breed}</h4>
                        <h4 id="status">[{player.status}]</h4>
                        <Link to={`/single/${player.id}`}>
                        <button>
                            Details
                        </button>
                        </Link>        
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