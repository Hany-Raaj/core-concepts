import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jashim', 'Alomgir', 'Salman', 'Rubel'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
  ];

  const productNames = products.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
      <p>My First Paragraph</p>
      <Counter></Counter>
      <Users></Users>
      {/* <Product name={products[0].name} price={products[0].price} />
      <Product name={products[1].name} price={products[1].price}/>
      <Product name={products[2].name} price={products[2].price}/> */}
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {/* <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li> */}
      </ul>
      <Product product={products[0]}/>
      <Product product={products[1]}/>
      <Product product={products[2]}/>
      <Person name={"Salman Shah"} profession={"Actor"}></Person>
      <Person name={"Purnima"} profession={"Actress"}></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    color: 'tomato',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '400px',
    float: 'left',
    margin: '10px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: '1px solid white', padding: '20px', width: '500px', margin:'10px'}}>
      <h5>Name: {props.name}</h5>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

export default App;
