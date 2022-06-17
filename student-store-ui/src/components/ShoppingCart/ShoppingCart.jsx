import { useEffect } from "react";
import "./ShoppingCart.css"

export default function ShoppingCart(props){
    
    //Puts items in shopping cart into Array for ease of access.
    let cartArr = [{itemId:0, quantity:0}];
    props.shoppingCart.map(e => {
        if(e.quantity > 0){
            cartArr.push({itemId: e.itemId, quantity:e.quantity})
        }
    })

    
    //Used cartArr to get specific item
    function getItem(num){
        let item = {};
        props.products.map((e, index)=> {
            if(e.id === num){
                item = e;
            }
        })
        return item;
    }

    return (
        <div className="shopping-cart">
        <div className={props.isOpen ? "cart" : "closed"}>
            <div className="name">
                <h3>Name</h3>
                {cartArr.map((e, index) => {
                        let item = getItem(e.itemId);
                    return (
                        
                        <h5 className="item">{item.name}</h5>
                        
                    )
                })}
            </div>
            <div className="Quantity">
                <h3>Quantity</h3>
                {cartArr.map((e, index) => {
                        let item = getItem(e.itemId);
                    return (
                        
                        <h5 className="item">{item.name}</h5>
                        
                    )
                    })}
            </div>
            <div className="price">
            <h3>Price</h3>
            {cartArr.map((e, index) => {
                        let item = getItem(e.itemId);
                    return (
                        
                        <h5 className="item">{item.price}</h5>
                    )
                    })}
            </div>
            <div className="total">
                <h3>Total</h3>
                <h2></h2>
            </div>

        </div>
    </div>
    )
}

