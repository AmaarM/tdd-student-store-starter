import "./CheckoutForm.css"

export default function CheckoutForm(props){
    
    return (
        <div className="checkout-wrapper">
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Email</h3>
            <input type="email" className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="student@codepath.org">

            </input>
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Name</h3>
            <input className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="Student Name">

            </input>

            <button className={props.isOpen ? "checkout-button" : "closed"}>Submit</button>
        </div>
        
    )

}