import React, {useEffect, useReducer, useState} from 'react';
import './App.scss';
import {reducer} from "./store/reducer";
import {initialState} from "./store/initialState";
import {fetchNews} from "./store/actions";
import { ContextApp } from "./context/context"
import {Table} from "./components/table";
import {SortBtnFloating} from "./components/sort-btn-floating";
import {Navbar} from "./components/navbar";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [page, setPage] = useState<number>(1)


    useEffect(() => {
        fetchNews(dispatch, page, state.feed)
    }, [page, state.feed]);

    return (
        <ContextApp.Provider value={{ state, dispatch }}>
            <Navbar setPage={setPage}/>
            <div className="App">
                <SortBtnFloating/>
                <Table setPage={setPage} page={page}/>
            </div>
        </ContextApp.Provider>
    );
}

export default App;


