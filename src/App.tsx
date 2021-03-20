import React, {useEffect, useReducer, useState} from 'react';
import {reducer} from "./store/reducer";
import {initialState} from "./store/initialState";
import {fetchPersonages} from "./store/actions";
import { ContextApp } from "./context/context"
import {Personages} from "./components/personages";
import {Navbar} from "./components/navbar";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [page, setPage] = useState<number>(1)


    useEffect(() => {
        fetchPersonages(dispatch, page)
    }, [page]);

    return (
        <ContextApp.Provider value={{ state, dispatch }}>
            <Navbar/>
            <div className="App">
                <Personages setPage={setPage} page={page}/>
            </div>
        </ContextApp.Provider>
    );
}

export default App;


