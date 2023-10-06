import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const SinglePlayer = () => {
    const [player, setPlayer] = useState({})
    const { id } = useParams();
    useEffect(()=>{
      const GetPuppies = async () => {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`)
        const data = await response.json();
        setPlayer(data.data.player)
      }
      GetPuppies();
    },[])

    
    
    return (
    <div className="title">
        <h1 className="title">{ player.name }</h1>

        <img src={`${player.imageUrl}`} />
 
        <h4 id="breed">Breed : {player.breed}</h4>
        <h4 id="status"> Current Status : [{player.status}]<p/></h4>
        <h4> ID : {player.id}</h4>

    </div>
    )
                
}
export default SinglePlayer;