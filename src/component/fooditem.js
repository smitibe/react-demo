const FoodItem=()=>{
    let fooditem=['Curry','Roti','Sabji'];
    
    return (
        <ul className="list-group">{

        fooditem.map((item,index)=>(
        <li className="list-group-item" key={index}><span>{item}</span></li>)
        )
        }

        </ul>
    );
    };
    
export default FoodItem;