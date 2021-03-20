import React, {useContext} from 'react';
import {ContextApp} from "../context/context";
import {sortPersonages} from "../store/actions";

export const SelectSort: React.FC = () => {
    const {dispatch} = useContext(ContextApp);

    const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        let sortType: string = event.currentTarget.value;
        sortPersonages(sortType, dispatch)
    }

    return (
        <select defaultValue='News' className="form-select form-select-sm w-25 mt-auto mb-auto" aria-label=".form-select-lg example" onChange={e => handleChange(e)}>
            <option selected>Sort</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    );
}




