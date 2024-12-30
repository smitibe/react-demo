import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BkButton from './bkbutton';
import Hello from './hello';
import Random from './random'
import TodoItem1 from './component/todoitem1'
import TodoItem2 from './component/todoitem2'

import ClockHeading from './component/clockheading';
import ClockSlogan from './component/clockslogan';
import CurrentTime from './component/currentTime';
import FoodItem from './component/fooditem'
import ErrorMsg from './component/errorMsg'
//using props
import FoodItem2 from './component/fooditem2'
import ErrorMsg2 from './component/errorMsg2'

//using props (components with props folder)
import FoodItem3 from './componentWithProps/fooditem3'
import ErrorMsg3 from './componentWithProps/errorMsg3'

import AddTodo from './component/todo/addTodo';
import TodoItemList1 from './component/todo/todoitemlist1'
import TodoItemList2 from './component/todo/todoitemlist2'

function App() {

  //let fooditem=[];
  /*if(fooditem.length===0){
    return <h3>I am still hungry</h3>;
  } using if else */
  let fooditem=['Curry','Roti','Sabji'];
  //other way

  let emptyMsg=fooditem.length===0 ? <h3>I am still hungry.</h3>:null;

  //3rd way using &&

//let foodItems=[];
  let foodItems=['Currys','Rotis','Sabjis'];

  return (<>
    <Hello> </Hello>
    <Random/>
    
<button type="button" class="btn btn-primary">Primary</button>
<BkButton/>
<div className='items-conainer'>
<TodoItem1/>
<TodoItem2/>
</div>

<h1>date display</h1>
<center>
<ClockHeading/>
<ClockSlogan/>
<CurrentTime/>
</center>
<h1>Fragments</h1>
<h1>Static List</h1>
<ul className="list-group">
  <li className="list-group-item">Dal</li>
  <li className="list-group-item">Salad</li>
  <li className="list-group-item">Milk</li>
  <li className="list-group-item">Roti</li>
  <li className="list-group-item">Green Vegetables</li>
</ul>
<h1>Dynamic List</h1>
{fooditem.length===0 ? <h3>I am still hungry.</h3>:null}
{emptyMsg}

<ErrorMsg/>
<FoodItem/>
<h1>Dynamic List with Props</h1>
<ErrorMsg2 items={foodItems}/>
<FoodItem2 items={foodItems}/>
<h1>Dynamic List with Props (Components with props folder)</h1>
<ErrorMsg3/>
<FoodItem3/>
<h1>To do with formatting</h1>
<AddTodo/>
<div className='items-conainer'>
<TodoItem1/>
<TodoItem2/>
</div>
    </>
  );
}

export default App;
