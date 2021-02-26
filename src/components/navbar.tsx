import React from 'react';
import {SelectFeedsItem} from "./select-feeds-item";

interface NavbarProps {
    setPage: (page: number) => void
}


export const Navbar: React.FC<NavbarProps> = ({setPage}) => {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container-fluid">
                <div className="navbar-brand d-flex mt-auto mb-auto">
                   <i className='material-icons'>auto_stories</i>
                    <p className="h4  mx-2">News</p>
                </div>
                <SelectFeedsItem setPage={setPage}/>
            </div>
        </nav>
    );
}




