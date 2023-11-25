import card from "./Comment.module.css"

const CommentComponent = ({comment: {userName, userEmail, userComment}}) => {
    return (
        <div className={card.commentCard}>
            <h1 className={card.userName}>{userName}</h1>
            <h2 className={card.userEmail}>{userEmail}</h2>
            <p className={card.userComment}>{userComment}</p>
        </div>
    );
};

export default CommentComponent;