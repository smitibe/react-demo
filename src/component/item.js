//const Item=(props)=>{
    const Item=({foodItem})=>{
    //let fooditem=['Currys','Rotis','Sabjis'];
    //return <li className="list-group-item">{props.foodItem}</li>;
    //Object Destrucuring using below or above par passing ways
    //let {foodItem}=props;
    //return <li className="list-group-item"><span className="kg-span">{foodItem}</span></li>;
    const handleBuyButton=()=>{
        alert(`${foodItem} is clicked`);
    }
    return <li className="list-group-item"><span className="kg-span">{foodItem}</span><button type="button" class="btn btn-primary" onClick={handleBuyButton}>Buy</button></li>;
    };
    
export default Item;