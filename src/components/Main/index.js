import React from 'react'

const Main = () => {
  return (
    <>
      <div style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}>
        {/* Banner */}
        <section id="banner">
          <div className="inner">
            <h1>This is Binary, a free and fully responsive<br />
        website template by <a href="https://templated.co">TEMPLATED</a></h1>
            <ul className="actions">
              <div className="flex">
                <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                  <svg className="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512' }} xmlSpace="preserve">
                    <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z" />
                  </svg>
    Previous page
  </button>
                <button className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
                  Next page
    <svg className="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512' }} xmlSpace="preserve">
                    <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
      l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
      c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z" />
                  </svg>
                </button>
              </div>

            </ul>
          </div>
        </section>
        {/* One */}
        
      </div>

    </>
  )
}

export default Main
