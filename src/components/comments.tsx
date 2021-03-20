import React, {useContext} from 'react';
import {ContextApp} from "../context/context";
import {deleteComment} from "../store/actions";

export const Comments: React.FC<{ userId: string }> = ({userId}) => {
    const {state: {comments}, dispatch} = useContext(ContextApp);

    const userComments = comments.filter(c => c.userId === userId)

    return userComments.length > 0 ? (
            <ul className="list-group p-0">
                {userComments.map(comment => <li
                        className="list-group-item d-flex justify-content-between align-items-center m-3 p-1"
                        key={comment.created}>
                        {comment.comment}
                        <span className="badge bg-primary rounded-pill" onClick={() => deleteComment(comment.created, dispatch)}><i className='material-icons mx-2'>delete</i></span>
                    </li>
                )}
            </ul>
        )
        :
        <></>
}

