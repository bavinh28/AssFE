import React from 'react'

const Test = () => {
    return (
        <div className="p-2 md:w-40 ">
            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
                <a className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                    <img className="h-12" src="images/facebook-32.png" />
                    <div>
                        <p className=" text-xs font-medium ml-2 ">
                            Nhận Email
              </p>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default Test
