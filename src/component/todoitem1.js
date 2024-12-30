const TodoItem1=()=>{
    let todoName="Buy Milk";
    let todoDate="4/10/23";
    return (
    <div class="container text-center">
      
      <div class="row kg-row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2"><button type="button" class="btn btn-danger kg-row">Delete</button></div>
      </div>
    </div>

    );
    
    }
    
    export default TodoItem1;