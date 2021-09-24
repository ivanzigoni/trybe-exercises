import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input data-testid="btn-send" type="button" value="Enviar" />
      <input data-testid="btn-back" type="button" value="Voltar" />
    </div>
  );
}


export default App;
