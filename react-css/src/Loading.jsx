import { useState, useTransition } from "react";
function Loading(){
    const [pending,startTransition] = useTransition();
    const [loadedData,setLoadedData]  = useState(0)
    function handleBtn(){
        startTransition(async ()=>{
            await new Promise(res=>setTimeout(res,2000))
        })
        setLoadedData(loadedData+1)
    }
    return (
        <>
        {
            pending ? <img src="https://imgs.search.brave.com/6sLuI5Fa4Bjt-2X92wPYBxZ4JsH2vqEIJBVF4XgfygI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/Z3VoQjRQcGpybVVB/QUFBTS9sb2FkaW5n/LWxvYWRpbmctZ2lm/LmdpZg.gif" alt=""/>
             : loadedData
        }
        <button onClick={()=>handleBtn()}>{pending ? "loading..." : "Load"}</button>
        </>
    )
}


//done using states
// function Loading(){
//     const [loading,setLoading] = useState(false);
//     async function handleBtn(){
//         setLoading(true);
//         // big work
//         await new Promise(res=>setTimeout(res,5000))
//         //
//         setLoading(false);
//     }
//     return (
//         <>
//         <button onClick={()=>handleBtn()}>{loading ? "loading..." : "Load"}</button>
//         </>
//     )
// }
export default Loading;