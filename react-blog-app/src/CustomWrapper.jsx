import Wrapper from "./Wrapper";

function CustomWrapper(){
    return(
        <>
        <Wrapper color="blue">
            <h3 >Hello</h3>
        </Wrapper>
        <Wrapper>
            <h3>
                world
            </h3>
        </Wrapper>
        </>
    )
}
export default CustomWrapper;