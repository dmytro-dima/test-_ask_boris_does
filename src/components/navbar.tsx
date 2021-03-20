import React from 'react';
import {SelectSort} from "./select-sort";


export const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container-fluid">
                <div className="navbar-brand d-flex mt-auto mb-auto">
                    <p className="h4  mx-2">Personages</p>
                </div>
                <SelectSort/>
            </div>
        </nav>
    );
}


