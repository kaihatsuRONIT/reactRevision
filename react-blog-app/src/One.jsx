function One({name="github",fruits}){ //recieve props by just typing without any destructuring; if destructured, we can extract and get direct individual elements

    return(
    <>
    <h1>{name}</h1>
    <h1>{fruits[0]}</h1> {/*access with props. or through direct destructuring*/}
    <h1></h1>
    </>
    )
}
export default One;