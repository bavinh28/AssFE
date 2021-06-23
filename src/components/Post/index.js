import React, { useState,useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Post = ({ post: { id, name, price, image }, deletePost,addtoCart }) => {
    const [post, setPost] = useState({});
  const API = 'http://localhost:1337/posts'
  useEffect(() => {
    fetch(`${API}/${id}`).then(response => response.json()).then(data => setPost(data))
  }, []);
    return (
        <>
        <div className="box">
            <Link to={`/posts/${id}`}>
                <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                    <div style={{ backgroundImage: `url(${image})` }} className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center" />
                    <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{name}</div>
                        <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                            <h1 className="text-gray-800 font-bold ">{price}</h1>
                            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700" onClick={() => addtoCart(post)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default Post
