import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
    render() {
        return (
            <div className='pokemon'>
                <img src={this.props.image} alt ='pokemao'/>
                <p>{this.props.name}</p>
                <p>{this.props.type}</p>
                <p>{this.props.averageWeight.value}{this.props.averageWeight.measurementUnit}</p>
            </div>
        )
    }
}

export default Pokemon;