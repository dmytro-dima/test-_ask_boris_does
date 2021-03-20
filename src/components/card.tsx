import React, {useContext, useState} from 'react';
import {Personages} from "../store/types/interfaces";
import {Comments} from "./comments";
import {ContextApp} from "../context/context";
import {addComment} from "../store/actions";


export const PersonagesCard: React.FC<Personages> = ({name, created, birth_year}) => {
    const {dispatch} = useContext(ContextApp);
    const [comment, setComment] = useState<string>('')

    const createComment = () =>{
        if(comment){addComment({comment, userId: created, created: new Date()}, dispatch)}

        setComment('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    return (
        <div className="card border-primary mb-3" >
            <div className="card-header">{name}</div>
            <div className="card-body text-primary">
                <h5 className="card-title">{created}</h5>
                <p className="card-text">{birth_year}</p>
            </div>
            <div className="input-group p-3">
                <input type="text" className="form-control" placeholder="Comment"
                       aria-label="Comment" aria-describedby="button-addon2" value={comment} onChange={handleChange}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={createComment}>Button</button>
            </div>
            <Comments userId={created}/>
        </div>
    )
}

