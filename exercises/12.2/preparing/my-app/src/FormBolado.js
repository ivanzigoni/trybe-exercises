import React from 'react';
import InputNome from './InputNome';
import InputSobrenome from './InputSobrenome';

class FormBolado extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      sobrenome: '',
      texto: '',
      option: '',
      checkbox: false,
      error: false
    }

    this.handleValues = this.handleValues.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleValues({ target }, erro) {
    const { name } = target;
   
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((prev, _props) => ({
      [name]: value,
    
    }))

    if (erro === 1) {
      this.setState({
        error: true
      })
    }
  }

  handleError(erro) {
    console.log(`erro didUpdate ${erro}`)
  }

  // componentDidMount() {
  //   console.log(this.state.nome)
  // }
  
  componentDidUpdate() {
    this.handleError(this.state.error);
  }

  render() {
    return (
      <form>

        <select
        name='option'
        value={this.state.option}
        onChange={this.handleValues}
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </select>

      <InputNome handleValues={this.handleValues} handleError={this.handleError} value={ this.state.nome } error={ this.state.error }/>

      <InputSobrenome handleValues={this.handleValues} handleError={this.handleError} value={ this.state.sobrenome } error={ this.state.error }/>

        <label>Texto
          <input
          name='texto' 
          type='textarea' 
          value={this.state.texto} 
          onChange={this.handleValues}>
          </input>
        </label>

        <label>Checkbox
          <input
          type='checkbox'
          name='checkbox'
          checked={this.state.checkbox}
          onChange={this.handleValues}>
          </input>
        </label>

        <label>Upload
        <input type="file" />

        </label>
      </form>
    )
  }
}

export default FormBolado;