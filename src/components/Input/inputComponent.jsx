import {input, inputDiv, label} from "./Input.module.css"

const InputComponent = ({name, labelText, type = "text"}) => {
    return (
        <>
            <div className={inputDiv}>
                <div className={label}>{labelText} :</div>
                <input required={true} name={name} type={type} placeholder={"Type Your " + labelText + "..."}
                       className={input}/>
            </div>
        </>
    );
};

export default InputComponent;