import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import AllPlayers from "./AllPlayers"

const SearchResults = ({players}) => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        if (player.trim() !== '') {
            navigate(`/single/${encodeURIComponent(searchInput)}`)
        }
    }


    const filteredPlayers = players.filter((player)=>{
        //will return true and wont filter out
        console.log(player);                                                    //coercing string into number 
        return player.name.toUpperCase().includes(searchInput.toUpperCase()) || player.id === (+searchInput)
    })

    return (
        
        <div>
            <div id="searchDiv">
                <h1 id="search">
                    Player Search
                </h1>
            <input
                id="searchbox"
                type="text"
                placeholder='Search for a player'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <div>
                {/* players is the prop name */}
                {searchInput ? <AllPlayers players={filteredPlayers}/> : null}
            </div>
            <button onClick={handleSearch}>Search</button>
            </div>
        </div>
          
    )
}

export default SearchResults;