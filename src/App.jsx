import {FormComponent} from "./components/form/FormComponent.jsx";
import {useState} from "react";
import CommentComponent from "./components/comment/CommentComponent.jsx";

function App() {
    const [comments, setComments] = useState([])
    return (
        <>
            <FormComponent setComments={setComments}/>
            <div style={{marginInline: "auto"}}>
                {
                    comments.map(comment =>
                        <CommentComponent key={comment.id} comment={comment}/>
                    )
                }
            </div>
        </>
    )
}

export default App
