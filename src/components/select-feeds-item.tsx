import React, {useContext} from 'react';
import {SelectFeed} from "../store/actions";
import {ContextApp} from "../context/context";

interface SelectProps {
    setPage: (page: number) => void
}

export const SelectFeedsItem: React.FC<SelectProps> = ({setPage}) => {
    const {dispatch} = useContext(ContextApp);

    const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        let feed: string = event.currentTarget.value;
        SelectFeed(dispatch, feed)
        setPage(1)
    }

    return (
        <select defaultValue='News' className="form-select form-select-sm w-25 mt-auto mb-auto" aria-label=".form-select-lg example" onChange={e => handleChange(e)}>
            <option value="news">News</option>
            <option value="newest">Newest</option>
            <option value="ask">Ask</option>
            <option value="show">Show</option>
        </select>
    );
}




