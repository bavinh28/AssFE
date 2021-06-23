import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row mx-5 py-5 font-bold">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/">Home</Link></a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/about">About</Link></a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/girl">Girl</Link></a>
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/men">Men</Link></a>
                {/* <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/action">Action</Link></a> */}
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><Link to="/add">Add</Link></a>
            </div>
        </>
    )
}

export default Menu
