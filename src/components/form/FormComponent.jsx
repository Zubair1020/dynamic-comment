import InputComponent from "../Input/inputComponent.jsx";
import {form, inputDiv, label, submitBtn, textarea} from "./Form.module.css"

export const FormComponent = ({setComments}) => {
    const handelSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const userComment = e.target.userComment.value;
        const id = new Date().getMilliseconds()
        setComments(prevState => [...prevState, {userName, userEmail, userComment, id}])
        e.target.userName.value = ""
        e.target.userEmail.value = ""
        e.target.userComment.value = ""
    }
    return (
        <>
            <form className={form} onSubmit={handelSubmit}>
                <InputComponent name={"userName"} labelText={"User Name"}/>
                <InputComponent name={"userEmail"} type="email" labelText={"Email"}/>
                <div className={inputDiv}>
                    <div className={label}>Comment:</div>
                    <textarea placeholder="Your comment" required className={textarea} id="userComment"
                              name="userComment" rows={5}/>
                </div>
                <button className={submitBtn}>Submit</button>
            </form>
        </>
    )
}