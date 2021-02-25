import logo from './logo.svg';
import './App.css';

function App() {
  const productObject = [
    {name:'android', price:'16,000'},
    {name:'galaxy', price:'10,000'},
  ]
  return (
    <div className="App">
      <Product product={productObject[1]}></Product>
      <Product product={productObject[0]}></Product>
      <Person name="mitu"></Person>
      <Person name="ritu"></Person>
      <Person></Person>
    </div>
  );
}
function Product(props) {
  const product ={
   background:'black',
   color:'white'

  }
const{name,price} = props.product;
console.log(name,price);
  
  return (
    <div className="product" style={product}>
     <p>name: {name}</p>
     {/* <p>price: {productObject[1].price}</p> */}
     <p>price: {price}</p>

    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className="person">
     <p>name: {props.name}</p>

    </div>
  );
}

export default App;
