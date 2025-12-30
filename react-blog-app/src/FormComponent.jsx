import { useActionState, useId, useState } from "react"

function FormComponent() {
    const handleFormAction = async (previousData, formData) => {
        await new Promise(res => setTimeout(res, 2000));
        const name = formData.get("name")
        const pass = formData.get("password")
        if (name && pass && isChecked) {
            return { message: "Data Submitted", name, pass}
        }
        else {
            return { error: "All fields are required" }
        }
    }
    const [data, action, pending] = useActionState(handleFormAction, undefined);
    const user = useId();
    const [isChecked,setIsChecked] = useState(null);
    const checkHandler = (e)=>{
        setIsChecked(e.target.checked);
    }
    return (
        <>
            <form action={action}>
                <label htmlFor={user + "name"}>Enter Name: </label>
                <input id={user + "name"} type="text" placeholder="Enter your name" name="name" />
                <br />
                <label htmlFor={user + "password"}>Enter Password: </label>
                <input id={user + "password"} type="password" placeholder="Enter your password" name="password" />
                <br />
                <label htmlFor={user + "terms"}>I Agree</label>
                <input onChange={(e)=>checkHandler(e)} id={user + "terms"} type="checkbox" name="agreeCheck"/>
                <br />
                <button disabled={!isChecked || pending}>{pending ? "submitting..." : "submit"}</button>
            </form>
            {
            data?.message && <>
                <h3 style={{ color: "green" }}>{data?.message}</h3>
                <p>Name : {data?.name}</p>
                <p>PassWord : {data?.pass}</p>
            </>
            }
            {
                data?.error && <h3 style={{ color: "red" }}>{data?.error}</h3>
            }
        </>
    )
}
export default FormComponent