//import Item from './component/item'
import Item from "./item";
const FoodItem=({items})=>{
    //let fooditem=['Currys','Rotis','Sabjis'];
    return (
        <ul className="list-group">{

            items.map((item)=>(
             <Item key={item} foodItem={item}/>
         )
        )
        }

        </ul>
    );
    };
    
export default FoodItem;