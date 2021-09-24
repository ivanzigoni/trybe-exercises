  // App.js
  import React, { Component } from 'react';
  import './App.css';
  import ValidEmail from './ValidEmail';
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        saveEmail: '',
        ok: false,
      };
    }
  
    changeEmail(value) {
      this.setState({ email: value });
    }
  
    changeSaveEmail(value) {
      this.setState({ saveEmail: value, email: '' });
    }
  
    render() {
      const { email, saveEmail, ok } = this.state;
      if (ok) return <h1>OK, RAPAZ</h1>
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
          <input
            id="btn-enviar"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={() => this.changeSaveEmail(email)}
          />
          <button
          type="button"
          data-testid="btn-ok"
          onClick={ () => {
            this.setState({ ok: true })
          }}
          >OK BUTTON</button>
          <input id="btn-id" type="button" value="Voltar" />
          <ValidEmail email={saveEmail}/>
        </div>
      );
    }
  }
  
  export default App;