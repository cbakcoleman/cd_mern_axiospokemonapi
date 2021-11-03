import axios from 'axios';
import {useState} from 'react';
import './App.css';

function App() {
  // CREATE STATE VARIABLE
  const [pokemons, setPokemons] = useState([])

  // FUNCTION FOR ONCLICK EVENT, FETCH API?
  const catchEmAll = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(jsonResult => {
      //AXIOS RETURNS RESULTS WRAPPED IN 'DATA'
      console.log(jsonResult.data.results)
      setPokemons(jsonResult.data.results)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <h4>Catch Pokemon</h4>
      <button onClick={catchEmAll}>Throw the Pokeballs</button>
      {/* <hr/>
      {JSON.stringify(pokemons)} */}
      <hr/>
      <ul>
        {
          pokemons.map( (pokemon, idx) => {
            return (
            <li key={idx}>{pokemon.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
