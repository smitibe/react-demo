const ErrorMsg=({items})=>{
    //let fooditem=['Curry','Roti','Sabji'];
    return (
        <>{items.length===0 && <h3>I am still hungry.</h3>}</>
    );
    };
    
export default ErrorMsg;