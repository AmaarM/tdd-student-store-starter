import "./ShoppingCart.css"

export default function ShoppingCart(props){
    console.log(props);
    let cartArr = [{itemId:0, quantity:0}];
    props.shoppingCart.map(e => {
        if(e.quantity > 0){
            cartArr.push(e.itemId);
        }
    })

    console.log(cartArr);

    
    return (
        <div className="shopping-cart">
            <div className="cart">

            </div>
        </div>
    )
}