const Random=()=>{
    let number=Math.random()*100;
    return <h3 style={{'background':'blue'}}>Random Number is {Math.round(number)}</h3>
    }
    
export default Random;