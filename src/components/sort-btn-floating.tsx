import React, {useContext} from 'react';
import {sortNews} from "../store/actions";
import {ContextApp} from "../context/context";

export const SortBtnFloating = () => {
    const {dispatch} = useContext(ContextApp);

    return (
        <div className="dropdown dropleft sort-btn-floating">
            <button type="button" className="btn btn-info btn-lg btn-floating position-fixed p-1" id='button-floating'
                    data-bs-toggle="dropdown" aria-expanded="false">
                <i className='material-icons' style={{lineHeight: "inherit"}}>menu</i>
            </button>
            <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1">
                <p className="dropdown-item p-2 m-0" onClick={() => sortNews(dispatch, 'time')}>Sort by time</p>
            </div>
        </div>
    );
}




