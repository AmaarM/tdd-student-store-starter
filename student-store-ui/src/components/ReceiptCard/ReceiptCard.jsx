import "./ReceiptCard.css"

export default function RecieptCard(props){
    let finalPrice = props.price * props.quantity;
    return(
        <div className="receipt-body">
            <h4>{props.quantity} total {props.name} purchased at a cost of {props.price} for a total cost of {props.price * props.quantity}</h4>
        </div>
    )
}