const ErrorMsg=()=>{
    let fooditem=['Curry','Roti','Sabji'];
    return (
        <>{fooditem.length===0 && <h3>I am still hungry.</h3>}</>
    );
    };
    
export default ErrorMsg;