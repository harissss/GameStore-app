import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCard from './components/GameCard'
import SearchBar from './components/SearchBar'

// man bruger classes eller functions for components. Normalt bruges function-based components. 

function App() {
  //const [count, setCount] = useState(0)

  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      image: "/images/cyberpunk.jpg",
      tags: ["RPG", "Open World", "Action"],
      description: "A futuristic open-world RPG.",
      price: "$59.99"
    },
    {
      id: 2,
      title: "Stardew Valley",
      image: "/images/stardew.jpg",
      tags: ["Farming", "Indie", "Relaxing"],
      description: "Build the farm of your dreams.",
      price: "$14.99"
    }, 
    {
      id: 3,
      title: "Counter-Strike 2",
      image: "/images/cs2.jpg",
      tags: ["FPS", "Competitive Shooter", "Action", "Test Layering TODO"],
      description: "Defeat the opposing team in a 5v5 competitive first-person shooter.",
      price: "$4.99"
    }
  ];

  return (
    <>
      <div className='search-bar-container'>
        <SearchBar/>
      </div>
      <div className='panel-and-games-container'>
        <div className='side-panel-container'></div>
        <div className='games-container'> {games.map(game => <GameCard GameObj={game}/>)} </div>
      </div>
    </>
  )
}

export default App

/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/