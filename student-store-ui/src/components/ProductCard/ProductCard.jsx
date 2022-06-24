import "./ProductCard.css"

export default function ProductCard(props){
    let ProductPrice = ((props.product.price * 100) / 100).toFixed(2);
    let quantity = 0;

    //maps to find the specific product and grabs the quantity
    //to display
    props.shoppingCart.map(e => {
        if(e.itemId === props.product.id){
            if(quantity >= 0){
                quantity = e.quantity;
            }
        }
    })
    
    return(
            <div className="product-card" >
                <a href={`/store/${props.product.id}`}><img src={props.product.image} width={350} height={350} className="productImg"></img></a>
                <div className="product-card-desc">
                    <div className="product-desc">
                        <h4 className="product-name">{props.product.name}</h4>
                        <h4 className="product-price">${ProductPrice}</h4>
                    </div>
                    <div className="product-btns">
                        <div className="btns">
                            <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-minus" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="9" y1="12" x2="15" y2="12" />
                                </svg>
                            </button>
                            <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="9" y1="12" x2="15" y2="12" />
                                <line x1="12" y1="9" x2="12" y2="15" />
                                </svg>
                            </button>
                        </div>
                        <p className="product-quantity">{quantity}</p>
                    </div>
                </div>
            </div>
        
    )
}