import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { UserContext } from './ContextCreator';

// business entertainment general health science sports technology
export default function NavBar() {

    const setState = useContext(UserContext);

    function searcher() {
        const val = document.querySelector('.form-control').value;
        // <NavLink to='/searched' value={val}/>
        // {<Search value={val}/>}
        // {/* </NavLink> */ }
            console.log(val);
        setState(`q=${val}`);
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary px-4 py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NeuzUp</  a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-disabled="true">General</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/business' className="nav-link" aria-disabled="true">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/entertainment' className="nav-link" aria-disabled="true">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/health' className="nav-link" aria-disabled="true">Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/science' className="nav-link" aria-disabled="true">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='sports' className="nav-link" aria-disabled="true">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/technology' className="nav-link" aria-disabled="true">Technology</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        {/* <NavLink to={{pathname : '/search', value: () => {return document.querySelector('.form-control').value}}}> */}
                        <button className="btn btn-outline-primary" type="button" onClick={searcher}>Search</button>
                        {/* </NavLink> */}
                    </form>
                </div>
            </div>
        </nav>
    );

}
