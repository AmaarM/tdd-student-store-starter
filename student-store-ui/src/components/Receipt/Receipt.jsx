import "./Receipt.css";
import ReceiptCard from "../ReceiptCard/ReceiptCard";
import axios from "axios";
import * as React from "react";

export default function Receipt(props) {
  const latestPurchase = props.purchases[props.purchases.length - 1];
  console.log(latestPurchase);

  function getProduct(productId, quantity) {
    let product = { product: {}, quantity: 0 };
    props.products.map((e, idx) => {
      if (e.id === productId) {
        product = { product: e, quantity: quantity };
      }
    });
    return product;
  }

  if (latestPurchase != undefined) {
    let filterArr = latestPurchase.order.map((e, idx) => {
      return getProduct(e.itemId, e.quantity);
    });
    console.log(filterArr);

    return (
      <div className={props.isOpen ? "receipt-wrapper" : "closed"}>
        <h4 className="receipt">Receipt</h4>
        <h4 className="receipt-title">Showing Receipt for {latestPurchase.name} available at {latestPurchase.email}</h4>
        <div className="receipt-body">
          {filterArr.map((e, idx) => (
            <ReceiptCard name={e.product.name} price={e.product.price} quantity={e.quantity}/>
          ))}
          <h4 className="total">Grand Total: {latestPurchase.total.toFixed(2)}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.isOpen ? "receipt-wrapper" : "closed"}>
        <h4 className="receipt">Receipt</h4>
        <h4 className="receipt-title"></h4>
        <div className="receipt-body"></div>
      </div>
    );
  }
}

/* let filterArr = [];
if(order.length != 0){
    for(let i = 0; i < order.length; i++){
        for(let j = 0; j < props.products.length; j++){
            if(order[i].itemId === props.products[j].id){
                filterArr.push(props.products[j])
            }
        }
    }
} */

/* let latestPurchase = {};
if (props.purchases) {
  latestPurchase = props.purchases[props.purchases.length - 1];
}
console.log(latestPurchase);
let order = [];
if (props.purchases) {
  order = latestPurchase.order;
}
 */

/* return (
    <div className={props.isOpen ? "receipt-wrapper" : "closed"}>
      <h4 className="receipt">Receipt</h4>
      <h4 className="receipt-title"></h4>
      <div className="receipt-body"></div>
      {order.map((e, idx) => (
        <Receipt quantity={e.quantity} product={getProduct(e.itemId)} />
      ))}
    </div>
  );
 */

/*   const latestPurchase = props.purchases[props.purchases.length - 1];

  function getProduct(productId,quantity) {
    let product = {product:{}, quantity:0};
    props.products.map((e, idx) => {
      if (e.id === productId) {
        product = {product:e, quantity:quantity}
      }
    });
    return product;
  }

  
  let filterArr = latestPurchase.order.map((e,idx) => {
    return(getProduct(e.itemId, e.quantity))
  })
  console.log(filterArr);

  return (
    <div className={props.isOpen ? "receipt-wrapper" : "closed"}>
      <h4 className="receipt">Receipt</h4>
      <h4 className="receipt-title"></h4>
      <div className="receipt-body">
      {filterArr.map((e,idx) => (
            <ReceiptCard name={e.name} price={e.price} quantity={e.quantity}/>
        ))}
      </div>
    </div>
  ); */
