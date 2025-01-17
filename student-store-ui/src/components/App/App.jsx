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
  const[checkOutForm, setCheckOutForm] = React.useState({email:"", name:""});
  const[input, setInput] = React.useState("");
  const[category,setCategory] = React.useState("");
  const[success, setSuccess] = React.useState(false);
  const[purchases, setPurchases] = React.useState([]);

  //Gets the products using the API and stores them
  async function getProducts(){
    setFetching(true);
    const data = await axios.get("http://localhost:3001/store")
    .then((e) => {
      setProducts(e.data.products);
    })
    .catch((error) => {
      setError("Error r r r ... ");
    })
  }

  

  //Gets the purchases using the API and stores them.
  async function getPurchase() {
    const purchases = await axios
      .get("http://localhost:3001/store/store/purchases")
      .then((e) => {
        setPurchases(e.data.purchases);
      })
      .catch((error) => {
        console.log(error);
      });
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
      let newArr = [...shoppingCart]
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

  console.log(shoppingCart)

  //Handle checkoutFrom change // need to finish
  function handleOnCheckoutFormChange(e){
    let name = "";
    let email = "";
    if(e.target.name === "email"){
      name = checkOutForm.name;
      setCheckOutForm({[e.target.name]: e.target.value, name:name})
    }
    if(e.target.name === "name"){
      email = checkOutForm.email;
      setCheckOutForm({email:email,[e.target.name]: e.target.value})
    }
  }
  //Need to finish
  async function handleOnSubmitCheckoutForm(){
    let arr = [];
    shoppingCart.map((e,idx) => {
      if(e.itemId != 0){
        arr.push(e);
      }
    })
    const sendForm = async () =>  {
      const req = await axios.post("http://localhost:3001/store",{ user: checkOutForm, shoppingCart: arr})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        })
      }
      sendForm();
      getPurchase();
      setShoppingCart([{itemId:"", quantity: 0}]);
      setCheckOutForm({email:"", name:""});
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
            purchases={purchases}
            getPurchases={getPurchase}
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
            <Route path="/store/:productId"  element={<ProductDetail  handleAddItemToCart={handleAddItemToCart}  handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} />}></Route>
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
