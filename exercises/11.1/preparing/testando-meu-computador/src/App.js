import './App.css';
import Teste from './Component';

const textJSX = `Hello, JSX`;



function App() {
  return (
    <div>
    <p className='testing'>{textJSX}</p>
    <Teste />
    </div>
    );
}

export default App;
