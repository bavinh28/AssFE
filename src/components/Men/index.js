import React from 'react'
import Menmain from '../Menmain'
import Search from '../Search'

const Men = ({ posts, deletePost,onSearch,addtoCart }) => {
    return (
        <section >
            <Search onHandleChange={onSearch}/>
            <div className="container mx-auto px-6 " >
                
                <div className="mt-16 ">
                    <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                    <section id="main">
                        <div className="inner grid-cols-4 gap-8">
                            {/* Boxes */}
                            <div className="thumbnails">
                                {posts.map((post, index) => (
                                    <Menmain key={index} post={post} deletePost={deletePost} addtoCart={addtoCart}/>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )

}
export default Men
