const CurrentTime=()=>{
    let time=new Date();
    return <p className="lead">This is thecurrent time {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    }
    
export default CurrentTime;