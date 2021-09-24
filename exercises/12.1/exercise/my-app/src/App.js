import Pokemon from './Pokemon'
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div className='container'>
    {pokemons.map((e, i) => {
      return <Pokemon {...e} key={i}/>
    })}
    </div>
  );
}

export default App;
