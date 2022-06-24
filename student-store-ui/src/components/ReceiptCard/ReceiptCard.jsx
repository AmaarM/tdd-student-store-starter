import "./ReceiptCard.css"

export default function RecieptCard(props){
    let finalPrice = props.price * props.quantity;
    let price = 0;
    if(props.price){
        price = props.price;
    }
    return(
        <div className="receipt-body">
            <h4 className="sentence">{props.quantity} total {props.name} purchased at a cost of {price.toFixed(2)} for a total cost of {finalPrice.toFixed(2)}</h4>
        </div>
    )
}