import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import axios from 'axios'
import ProductDetail from "../ProductDetail/ProductDetail"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import NotFound from "../Not Found/NotFound"




export default function App() {
  const[isfetching, setFetching] = React.useState(false);
  const[products, setProducts] = React.useState([]);
  const[error, setError] = React.useState("");
  const[isOpen, setOpen] = React.useState(false);
  const[shoppingCart, setShoppingCart] = React.useState([{itemId:"", quantity: 0}]);
  const[checkOutForm, setCheckOutForm] = React.useState({value:0, name:""});
  const[input, setInput] = React.useState("");
  const[category,setCategory] = React.useState("");
  const[success, setSuccess] = React.useState(false);


  //Gets the products using the API and stores them
  async function getProducts(){
    setFetching(true);
    const data = await axios.get("https://codepath-store-api.herokuapp.com/store")
    .then((e) => {
      setProducts(e.data.products);
    })
    .catch((error) => {
      setError("Error r r r ... ");
    })
  }
  
  React.useEffect(() => {getProducts()},[])
  
  //Gets the filtered products using the input and stores them
  let filterArr = [];
  function filterProduts(input){
    filterArr = products.filter(e => {
      let name = e.name;
      name = name.toLowerCase();
      return (name.includes(input))
    })
  } 
  filterProduts(input);

  //Gets the products in certain categories and stores them
  let categoryArr = [];
  function filterCategories(category){
    category = category.toLowerCase();
    if(category === "nothing"){
      return categoryArr = products;
    }
    categoryArr = products.filter(e => {
      return e.category.includes(category);
    })
  }
  
  filterCategories(category);


  //Toggle for side bar
  const handleOnToggle = () => {
    setOpen(prev => !prev)
  }

//Adds item to cart state
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

//Removes item from cart state
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
      setShoppingCart((prevCart) => [...prevCart, {itemId:productID, quantity:0}]);
    }
  } 

  //Handle checkoutFrom change // need to finish
  function handleOnCheckoutFormChange(name, value){
    setCheckOutForm({value:value, name:name});
  }

  //Need to finish
  async function handleOnSubmitCheckoutForm(){
    axios.post("https://codepath-store-api.herokuapp.com/store", {
      user:{name:"", email:""},
      ShoppingCart: [{itemId:0, quantity:0}]
    })
    .then(() => {
      setSuccess(true);
    })
    .catch(() =>{
      setSuccess(false);
    })

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
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
            handleOnToggle={handleOnToggle}
            success={success}
            />
        <Routes>
            <Route path="/" element={<Home 
            handleAddItemToCart={handleAddItemToCart} 
            products={products} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} 
            shoppingCart={shoppingCart} 
            setInput={setInput} 
            filterArr={filterArr}
            categoryArr={categoryArr}
            setCategory={setCategory}
            />}>
            </Route>
            <Route path="/products/:productId"  element={<ProductDetail  handleAddItemToCart={handleAddItemToCart}  handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Contact />
        <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
