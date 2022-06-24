import "./CheckoutForm.css";
import * as React from "react"

export default function CheckoutForm(props) {

    function onSubmitClick(){
        props.handleOnSubmitCheckoutForm();
        props.getPurchases();
    }
  return (
    <div className="checkout-form">
      <h3 className={props.isOpen ? "checkout-title" : "closed"}>Email</h3>
      <input
        type="email"
        name="email"
        value={props.checkOutForm.email}
        className={props.isOpen ? "checkout-form-input" : "closed"}
        placeholder="student@codepath.org"
        onChange={props.handleOnCheckoutFormChange}
      ></input>
      <h3 className={props.isOpen ? "checkout-title" : "closed"}>Name</h3>
      <input
        className={props.isOpen ? "checkout-form-input" : "closed"}
        placeholder="Student Name"
        type="text"
        name="name"
        value={props.checkOutForm.name}
        onChange={props.handleOnCheckoutFormChange}
      ></input>

      <button
        className={props.isOpen ? "checkout-button" : "closed"}
        onClick={onSubmitClick}
      >
        Checkout
      </button>
    </div>

  );
}

//<h2 className={!props.success ? "errorMsg" : "closed"}>Error: Login Failed...</h2>
//<h2 className={props.success ? "successMsg" : "closed"}>Success!</h2>
