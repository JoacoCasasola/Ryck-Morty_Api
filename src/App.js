import { useState } from 'react';
import './App.css';
import logo from "./assets/rick-morty.png";
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const req_api = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();

    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        {characters ? (
          <Characters characters = {characters} setCharacters = {setCharacters} />
        ) : (<>
          <h1>Rick & Morty</h1>
          <img src={logo} className='img-home'></img>
          <button onClick={req_api} className='btn-home'>Serch Character</button>
          </>)}
      </header>
      <footer className='foot'>
        <p>JoaquinCasasola<date>2024</date>&copy;</p>
      </footer>
    </div>
    
  );
}

export default App;
