import React from 'react';

class InputSobrenome extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    const { handleValues, value } = this.props;

    return (
      <label>Sobrenome
        <input
          name='sobrenome'
          type='text'
          value={value}
          onChange={handleValues}>
        </input>
      </label>
    )

  }
}

export default InputSobrenome;