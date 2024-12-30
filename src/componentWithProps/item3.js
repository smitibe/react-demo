const Item3=(props)=>{
    let fooditem=['Currys','Rotis','Sabjis'];
    return <li className="list-group-item" key={props.foodItems}>{props.foodItems}</li>;
    };
    
export default Item3;