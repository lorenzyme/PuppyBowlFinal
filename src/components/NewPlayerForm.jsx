import { useState } from "react"

const NewPlayerForm = () =>{
const [puppyName, setPuppyName] = useState("")
const [puppyBreed, setPuppyBreed] = useState("")

        //POST INPUTS TO API
        const createPuppy = async () => {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players",             {   
                method: "POST",
                body: JSON.stringify({
                    name: puppyName,
                    breed: puppyBreed
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }

        )}

    return (
        <div className="allPlayers">
            <h1 id="title">Let's Get Started!</h1>
            <form onSubmit={
                (e)=>{
                    //prevent default always happens first, just resets form
                    e.preventDefault()
                    createPuppy()
                    setPuppyBreed("")
                    setPuppyName("")
                } 
                
                
                } id="form">
                <div id="field">
                   <h1 id="title">🐾  Enter Puppy Details Below  🐕</h1>
                   Puppy Name 
                   <input value={puppyName} onChange={(e) => setPuppyName(e.target.value)} id="input-field" type="text" />
                   Breed 
                   <input value={puppyBreed} onChange={(e) => setPuppyBreed(e.target.value)} id="input-field" type="text" />
                   Agree To Terms & Conditions
                   <div>
                   <input id="checkbox" type="checkbox"/>
                     <button>Submit</button>

                    </div>
                </div>
            </form>
        </div>
        
    )
}

export default NewPlayerForm