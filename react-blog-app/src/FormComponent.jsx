import { useActionState } from "react"

function FormComponent(){
    const handleFormAction = async (previousData,formData)=>{
        await new Promise(res=>setTimeout(res,2000));
        const name = formData.get("name")
        const pass = formData.get("password")
        if(name && pass){
            return {message:"Data Submitted"}
        }
        else{
            return {error:"All fields are required"}
        }
    }
    const [data,action,pending] = useActionState(handleFormAction,undefined);
    return (
        <>
        <div>
            <form action={action}>
                <input type="text" placeholder="Enter your name" name="name" />
                <br />
                <input type="password"  placeholder="Enter your password" name="password"/>
                <br />
                <button disabled={pending}>{pending ? "submitting..." : "submit"}</button>
            </form>
            {
                data && <h3 style={{color:"green"}}>{data?.message}</h3>
            }
            {
                data && <h3 style={{color:"red"}}>{data?.error}</h3>
            }
        </div>
        </>
    )
}
export default FormComponent