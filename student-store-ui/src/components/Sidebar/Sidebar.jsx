import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Receipt from "../Receipt/Receipt";


export default function Sidebar(props) {
  return (
    <section className={props.isOpen ? "sidebar" : "sidebar closed"}>
      <button className="toggle-button" onClick={props.handleOnToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-right" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="20" y1="12" x2="10" y2="12" />
            <line x1="20" y1="12" x2="16" y2="16" />
            <line x1="20" y1="12" x2="16" y2="8" />
            <line x1="4" y1="4" x2="4" y2="20" />
            </svg>
        </button>
        <button className={props.isOpen ? "closed" : "checkout-Btn"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <polyline points="9 11 12 14 20 6" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
        </button>
        
        
        <button className={props.isOpen ? "closed" : "checkout-Btn"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="13" y2="15" />
          </svg>
        </button>
      <ShoppingCart isOpen={props.isOpen} products={props.getProducts} shoppingCart={props.shoppingCart}/>
      <CheckoutForm 
        isOpen={props.isOpen} 
        shoppingCart={props.shoppingCart} 
        checkOutForm={props.checkOutForm} 
        handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        success={props.success}
        getPurchases={props.getPurchases}
      />
      <Receipt products={props.getProducts} purchases={props.purchases} isOpen={props.isOpen} shoppingCart={props.shoppingCart}/>
    </section>
  )
}
