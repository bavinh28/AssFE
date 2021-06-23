import React from 'react'

const List = () => {
    return (
        <div className="bg-fixed mb-1" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")' }}>
            {/* animation */}
            <section className="p-10 min-h-screen flex md:flex-row items-center justify-around bg-white-500 flex-wrap sm:flex-col">
                {/* scale */}
                
                <div className="h-32 w-32 relative cursor-pointer mb-5" >
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl"><a href=""></a></div>
                    <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                        <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* roatate and scale */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
                        <img src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* rotate */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <img src="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* rotate minus */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
                    <img src="https://images.pexels.com/photos/1480347/pexels-photo-1480347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* Origin */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
                    <img src="https://images.pexels.com/photos/2447124/pexels-photo-2447124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* translate */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
                    <img src="https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
                    <img src="https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
                {/* skew */}
                <div className="h-32 w-32 relative cursor-pointer mb-5">
                    <div className="absolute inset-0 bg-pink-800 opacity-25 rounded-lg shadow-2xl" />
                    <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
                    <img src="https://images.pexels.com/photos/3779427/pexels-photo-3779427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default List
