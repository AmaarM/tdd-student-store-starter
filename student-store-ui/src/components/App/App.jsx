import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from 'axios'
import ProductDetail from "../ProductDetail/ProductDetail"




export default function App() {
  const[isfetching, setFetching] = React.useState(false);
  const[products, setProducts] = React.useState([]);
  const[error, setError] = React.useState("");
  const[isOpen, setOpen] = React.useState(false);
  const[shoppingCart, setShoppingCart] = React.useState([{itemId:"", quantity: 0}]);
  const[checkOutForm, setCheckOutForm] = React.useState({value:0, name:""});
  const[total, setTotal] = React.useState(0); 

  async function getProducts(){
    const data = await axios.get("https://codepath-store-api.herokuapp.com/store")
    .then((e) => {
      setProducts(e.data.products);
    })
    .catch((error) => {
      setError("Error r r r ... ");
    })
  }
  
  
  React.useEffect(() => {getProducts()},[])
  
  
  const handleOnToggle = () => {
    setOpen(prev => !prev)
  }

 function handleAddItemToCart(productID){
    let found = false;
    let item = 0;
    shoppingCart.forEach(e => {
      if(e.itemId === productID){
        found = true;
        item = e;
        return;
      }
    })

    if(found){
      let index = shoppingCart.indexOf(item);
      let newArr = [...shoppingCart];
      newArr[index].quantity += 1;
      setShoppingCart(newArr);
    }
    else{
      setShoppingCart((prevCart) => [...prevCart, {itemId:productID, quantity:1}])
    }
  }


  function handleRemoveItemFromCart(productID){
    let found = false;
    let item = 0;
    shoppingCart.forEach(e => {
      if(e.itemId === productID){
        found = true;
        item = e;
        return;
      }
    })


    if(found){
      let index = shoppingCart.indexOf(item);
      let newArr = [...shoppingCart];
      if(newArr[index].quantity === 0){
        newArr[index].quantity = 0;
        setShoppingCart(newArr);
      }
      else{
        newArr[index].quantity -= 1;
        setShoppingCart(newArr);
      }
      
    }
    else{
      setShoppingCart((prevCart) => [...prevCart, {itemId:productID, quantity:0}])
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
          <Navbar />
          <Sidebar 
            isOpen={isOpen}
            shoppingCart={shoppingCart} 
            getProducts={products}
            checkOutForm={checkOutForm} 
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
            handleOnSubmitCheckoutForm={handleAddItemToCart} 
            handleOnToggle={handleOnToggle}
            />
          <Home handleAddItemToCart={handleAddItemToCart} products={products} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}/>
          <ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
