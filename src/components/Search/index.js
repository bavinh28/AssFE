import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Search = ({ onHandleChange }) => {
    const [search, setSearch] = useState('');
    const onHandleSearch = (e) => {
        setSearch(e.target.value);
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onHandleChange(search)
    }

    return (
        <form action="" onSubmit={(e) => onHandleSubmit(e)}>
            <div className="my-10" >
                <div>
                    {/* <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                    <div className="flex flex-col sm:flex-row">
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/">Home</Link></a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/about">About</Link></a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/girl">Girl</Link></a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/men">Men</Link></a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/contact">Contact</Link></a>
                    </div>
                </nav> */}
                    <div className="relative mt-6 max-w-lg mx-auto">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        </span>
                        <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search"
                            onChange={(e) => { onHandleSearch(e) }} />
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Search
