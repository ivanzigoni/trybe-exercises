// import React from 'react';
// import './App.css';
// import Image from './Image';

// const link = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'

// class App extends React.Component {
//   constructor() {
//     super()
//     // A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
//     Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
//     e tudo o mais daqui de dentro */
//     console.log(this)
//     console.log('Clicou!')
//   }

//   render() {
//     return (
//       <>
//       <button onClick={this.handleClick}>Meu botão</button>
//       <h1>teste</h1>
//       <Image src={link} alt='gatíneo'/>
//       </>

//     )
    
//   }
// }

// export default App;



// arquivo App.js, criado pelo create-react-app, modificado
// import React from 'react';
// import './App.css';
// import Order from './Order';

// class App extends React.Component {
//   render() {
//     const headphone = {
//       id: 102,
//       user: "cena@gmail.com",
//       product: "Razer Headphone",
//       price: {
//         value: 99.99,
//         currency: "dollars"
//       }
//     };

//     const energyDrink = {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     };

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//          <Order {...energyDrink}/>
//          <Order {...headphone}/>
//       </div>
//     );
//   }
// }

// export default App;


// arquivo App.js, criado pelo create-react-app, modificado
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map((user, i) => <UserProfile key={i} user={user} />)}
      </div>
    );
  }
}

export default App;