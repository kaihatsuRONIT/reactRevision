function One({sayName}){ //recieve props by just typing without any destructuring; if destructured, we can extract and get direct individual elements
    // console.log(props)
    return(
    <>
    <h1>{props.fruits[0]}</h1> {/*access with props. or through direct destructuring*/}
    <h1>{sayName("ronit")}</h1>
    </>
    )
}
export default One;