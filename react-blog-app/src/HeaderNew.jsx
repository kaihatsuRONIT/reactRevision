function callMe(name){
        alert(name);
    }
function HeaderNew(){
    // function callMe(name){
    //     alert(name);
    // }
    return (
    <>
    <h1>Event driven buttons</h1>
    <button onClick={()=>callMe("lambo")}>Lambo</button>
    <button onClick={()=> callMe("porsche")}>Porsche</button>
    </>
    )
}
export default HeaderNew;