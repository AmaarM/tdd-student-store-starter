import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavbar from "../SubNavbar/SubNavbar"

export default function Home(props) {
  
  return (
    <div className="home">
      <div className="home-wrapper">
        <Hero />
      </div>
      <SubNavbar 
        setInput={props.setInput}         
        setCategory={props.setCategory}
        />
      <ProductGrid 
        products={props.products} 
        handleAddItemToCart={props.handleAddItemToCart} 
        handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
        shoppingCart={props.shoppingCart} 
        filterArr={props.filterArr}
        setInput={props.setInput}
        categoryArr={props.categoryArr}
        setCategory={props.setCategory}
        />
    </div>
  )
}
