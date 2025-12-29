function Setter({changeCounter,counter,setUser}){
    const handleButton = ()=>{
        changeCounter(counter+1);
    }
    return(
        <>
        <input type="text" placeholder="Enter your name" onChange={(e)=>setUser(e.target.value)}/>
        <br />
        <button onClick={()=>handleButton()}>add</button>
        </>
    )
}
export default Setter;