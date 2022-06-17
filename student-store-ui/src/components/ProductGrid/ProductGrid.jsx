import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
export default function ProductGrid(props){
    
    return(
        <div className="product-grid">
            <div className="product-grid-wrapper">
                {props.products.map((element, index) => (
                    <ProductCard product={element} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart} key={index}/>
                ))}
            </div>
        </div>
    )

}
