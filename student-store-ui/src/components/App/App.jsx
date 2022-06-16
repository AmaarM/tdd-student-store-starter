import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from 'axios'




export default function App() {
  const[isfetching, setFetching] = React.useState(false);
  const[products, setProducts] = React.useState([]);
  const[error, setError] = React.useState("");
  const[isOpen, setOpen] = React.useState(false);
  const[shoppingCart, setShoppingCart] = React.useState([{itemId:"", quantity: 0}]);
  const[checkOutForm, setCheckOutForm] = React.useState({value:0, name:""});

  async function getProducts(){
    const data = await axios.get("https://codepath-store-api.herokuapp.com/store")
    .then((e) => {
      setProducts(e.data.products);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  
  React.useEffect(() => {getProducts()},[])
  
  
  function handleOnToggle(input){
      if(input === true){
        setOpen(false);
      }
      else{
        setOpen(true);
      }
  }

  function handleAddItemToCart(productID){
    if(shoppingCart.find(productID)){
      shoppingCart.find(productID).quantity++;
    }
    else{
      setShoppingCart((prevCart) => [...prevCart, {...shoppingCart, itemId:productID, quantity:1}])
    }
  }

  function handleRemoveItemFromCart(productID){
    if(shoppingCart.find(productID)){
      shoppingCart.find(productID).quantity--;
      if(shoppingCart.find(productID).quantity <= 0){
        shoppingCart.filter((element => (element.itemId != productID)));
      }
    }
    else{
      return;
    }
  } 

  function handleOnCheckoutFormChange(name, value){
      setCheckOutForm({value:value, name:name})
  }

  function handleOnSubmitCheckoutForm(){
    
  }


  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          
          
          <Navbar />
          <Sidebar />
          <Home handleAddItemToCart={handleAddItemToCart} products={products} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
