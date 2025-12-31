import useToggle from "./Hooks/useToggle";

function CustomHook(){
    const [view,setView] = useToggle(true);
    return(
        <>
        {view && <h1>using Custom hook</h1>}
        <br />
        <button onClick={setView}>toggle</button>
        <button onClick={()=> setView(false)}>hide</button>
        <button onClick={()=>setView(true)}>show</button>
        </>
    )
}
export default CustomHook