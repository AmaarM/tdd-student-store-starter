import "./CheckoutForm.css"

export default function CheckoutForm(props){
    
    return (
        <div className="checkout-form">
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Email</h3>
            <input type="email" className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="student@codepath.org">

            </input>
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Name</h3>
            <input className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="Student Name">

            </input>

            <button className={props.isOpen ? "checkout-button" : "closed"} onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
        </div>
        
    )

}

//<h2 className={!props.success ? "errorMsg" : "closed"}>Error: Login Failed...</h2>
//<h2 className={props.success ? "successMsg" : "closed"}>Success!</h2>