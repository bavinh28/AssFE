import React from 'react'
import Post from '../../../../test2/src/components/Post'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Search from '../Search';
import Filter from '../Filter';

const Posts = ({ posts, deletePost, priceUp,onSearch,priceDown,addtoCart,getValue }) => {




    return (
        <section id="main" className="mt-10">
            <Link to='/girl' ><button className="mx-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg" onClick={priceUp}>Price Up</button></Link>
            <Link to='/girl' ><button className="mx-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg" onClick={priceDown}>Price Down</button></Link>
            <Filter getValue={getValue}/>
            <Search onHandleChange={onSearch}/>
            <div className="inner grid-cols-4 gap-8">
                <div className="thumbnails ">
                    {posts.map((post, index) => (
                        <Post key={index} post={post} deletePost={deletePost} addtoCart={addtoCart}/>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Posts
