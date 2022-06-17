import { useEffect } from "react";
import "./ShoppingCart.css"


export default function ShoppingCart(props){
    
    //Puts items in shopping cart into Array for ease of access.
    let cartArr = [{}];
    props.shoppingCart.map((e, index) => {
        if(e.quantity > 0){
            cartArr.push({itemId: e.itemId, quantity:e.quantity})
        }
    })

    
    //Used cartArr to get specific item
    function getItem(num){
        let item = {};
        props.products.map((e, index)=> {
            if(e.id === num && e != undefined){
                item = e;
            }
        })
        return item;
    }

    let total = 0;
    function getTotal(){
        props.shoppingCart.map((e, index) => {
            if(e.itemId === "" || e.quantity === 0){
                return;
            }
            else{
                let temp = getItem(e.itemId)
                total += (temp.price * e.quantity);
            }
        })

    }  




    let temp = true;
    function showTotal(){
        if(total > 0){
            temp = true;
        }
        else{
           temp = false;
        }
    }

    
    getTotal();
    showTotal();


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
                        
                        <h5 className="item">{e.quantity}</h5>
                        
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
                <h3 className="total-title">Total</h3>
                <h2 className={temp ? "total-amount" : "total-closed"}>{total}</h2>
            </div>

        </div>
    </div>
    )
}

