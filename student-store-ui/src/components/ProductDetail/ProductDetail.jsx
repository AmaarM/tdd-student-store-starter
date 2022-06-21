import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from '../ProductView/ProductView';

export default function ProductDetail(props){
    const[product, setProduct] = React.useState({});
    
    const id = useParams();

    async function getProduct(){
        const data = await axios.get(`https://codepath-store-api.herokuapp.com/store/${id.productId}`)
        .then((e) => {
            setProduct(e.data.product);
        })
        .catch((error) => {
          console.log("error")
        })
    }
    React.useEffect(() => {getProduct()},[])
    

    return(
        <div className="product-detail">
            <ProductView product={product} productId={id} quantity={props.shoppingCart.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart}/>
        </div>
    )
}