// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [dogs, setDogs] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dogsData => {
            setDogs(dogsData.message)
            setLoaded(dogsData.status)
        })
    }, [])

    if(!loaded) return <p>Loading...</p>

    return <img src = {dogs} alt = "A Random Dog."/>
}

export default App
