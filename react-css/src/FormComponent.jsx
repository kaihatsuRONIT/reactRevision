import { useFormStatus } from "react-dom"
function FormComponent() {
    async function handleForm() {
        await new Promise((res,rej)=>{
            setTimeout(res,2000)
        })
        console.log("submitted")

    }
    function FormContent() {
        const {pending} = useFormStatus();
        console.log(pending)
        return (
            <>
                <input type="text" placeholder="enter name" />
                <input type="password" placeholder="enter password" />
                <button disabled={pending}>{pending ? "submitting..." : "submit"}</button>
            </>
        )
    }
    return (

        <>
            <div>
                <form action={handleForm}>
                    <FormContent />
                </form>
            </div>
        </>
    )
}
export default FormComponent