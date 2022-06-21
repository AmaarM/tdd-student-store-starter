import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView(props){
    console.log(props);
    return(
        <div className="product-view">
            <h1 className="product-id">Product #{props.productId.productId}</h1>
            <ProductCard 
            product={props.product} 
            handleAddItemToCart={props.handleAddItemToCart} 
            handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
            shoppingCart={props.shoppingCart}
            />
        </div>

    )
}