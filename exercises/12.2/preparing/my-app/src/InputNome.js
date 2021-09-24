import React from 'react';

class InputNome extends React.Component {

  render() {
    const { handleError, handleValues, value, error } = this.props;
    console.log(`${value} => value do input`)
    let erro = 0;
    console.log(` erro input ${erro}`)
    // if (value.length === 4) erro = true;

  
  
    for (let i = 1; i < value.length; i += 1 ) {
      if (!/[a-zA-Z\s]/ig.test(value[i])) {
        erro = 1;
        } else {
          erro = 0;
        }
    }

    
    return (
      <>
      <label>Nome
        <input
          type='text'
          name='nome'
          value={value}
          onChange={(e) => {
            console.log(`${erro}  => erro do input`)
            handleValues(e, erro);

          }}>
        </input>
      </label>

      </>
    )
  }
}

export default InputNome;