import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
// import { GetPuppies } from "./API/PuppyBowlApi";
import Home from "./components/Home";
import { useState, useEffect } from "react";




function App() {
const [players, setPlayers] = useState([])

useEffect(()=>{
  const GetPuppies = async () => {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players")
    const data = await response.json();
    setPlayers(data.data.players)
  }
  GetPuppies();
},[])



  return (
    <>
  
    <div id="container">
          <div id="navbar">
            
          <Link to='/home'>
              Home
            </Link>
            <Link to='/new'>
              Create New Player
            </Link>
            <Link to='/all'>
              All Players
            </Link>
            <Link to='/single'>
              Single Player
            </Link>
          </div>
          <div id="main-section">
            <Routes>
              <Route path='/all' element={<AllPlayers players={players}/>} />
              <Route path='/new' element={<NewPlayerForm/>} />
              <Route path='/single' element={<SinglePlayer/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
            </Routes>
          </div>
      </div>
    </>
  )
}


export default App;
