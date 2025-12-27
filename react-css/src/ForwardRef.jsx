function ForwardRef({ref}){
    return (
        <>
        <div>
            <input type="text" ref={ref} />
        </div>
        </>
    )
}
export default ForwardRef;

//old method (<= react 18)
// import { forwardRef } from "react";

// function ForwardRef(props,ref){
//     return(
//         <>
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//         </>
//     )
// }
// export default forwardRef(ForwardRef);
