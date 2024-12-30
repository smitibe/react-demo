import Item3 from "./item3";
const FoodItem3=()=>{
    let fooditem=['Alu','Potala','Baigana'];
    return (
        <ul className="list-group">{

        fooditem.map((item,index)=>(
               <Item3 foodItems={item}/>
        )
        )
        }

        </ul>
    );
    };
    
export default FoodItem3;