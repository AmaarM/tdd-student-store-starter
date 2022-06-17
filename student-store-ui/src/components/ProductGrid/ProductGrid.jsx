import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"


export default function ProductGrid(props){
    console.log(props);

    if(props.categoryArr.length > 0){
        return(
            <div className="product-grid">
                <div className="product-grid-wrapper">
                    {props.categoryArr.map((element, index) => (
                        <ProductCard product={element} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart} key={index} filterProd={props.filterArr}/>
                    ))}
                </div>
            </div>
            
        )
    }


    if(props.filterArr.length > 0){
        return(
            <div className="product-grid">
                <div className="product-grid-wrapper">
                    {props.filterArr.map((element, index) => (
                        <ProductCard product={element} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart} key={index} filterProd={props.filterArr}/>
                    ))}
                </div>
            </div>
        )
    }

    if(props.filterArr.length === 0){
        return(
            <div className="nothing there">
                <h1 className="nothing product-grid">Nothing in Stock</h1>
            </div>
        )
    }


}
