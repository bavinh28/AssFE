import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import * as BootStrap from 'react-bootstrap'


const Header = ({outCart}) => {
  return (
    <div>
      <div className="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
        <div className=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Link to="/"><h1 className="text-3xl">Nike Shop</h1></Link>
          </a>
          <ul className="hidden lg:flex flex-row space-x-3 w-1/2 ml-12 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/girl">New</Link></li>
            <li><Link to="/men">Hot</Link></li>
            {/* <li>Terbaru</li>
        <li>Daftar Saya</li> */}
          </ul>
          <nav className="md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold">
            <svg className="w-6 h-6 font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            <a className="inline-block" href=""><Link to="/cart"><svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>({outCart.length})</Link></a>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
            <div className="relative group">
              <Link to="/profile"><div className="flex items-center cursor-pointer text-sm text-blue border border-white border-b-0  group-hover:border-grey-light rounded-t-lg py-1 px-2">
                <img src="https://placekitten.com/30/30" className="rounded-full mr-2" />
    John Doe
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div></Link>
              <div className="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-full">
                <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">View Profile</a>
                <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">Edit Profile</a>
                <hr className="border-t mx-2 border-grey-ligght" />
                <a href="#" className="px-4 py-2 block text-black hover:bg-grey-lighter">Logout</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="absolute w-full h-full z-10 ">
          <div className="px-16  h-full flex items-center justify-start">
            <div className="hidden lg:flex flex-col w-2/5 space-y-4 py-12 ">
              <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe_MJtJKPmsSU3pjUiW7bRyT8Hg_kAJPLRj6rNNltpjGgSphvfVGjXLQ-_Ic1FIYJ319RRDnIdqPk9D8Uq2X8oHSGVrwbHfx3j1dW_6GncJ2IKZ3OVRybWHjTMdUVY_CLeo3z2EQotzC1-faA7LSygaF5sxsqoskzrVPj6n-NS80jg.png?r=4af" alt="" />
              <h3 className="text-2xl font-semibold text-white ">Episode Baru Tayangan Mulai Rabu</h3>
              <p className="text-lg text-white">Di dunia tempat data tidak lagi bersifat pribad, para penipu mengungkap skema pengawasan jahat yang dikepalai oleh pemerintah bersama korporasi yang tamak</p>
              <div className="flex space-x-4 flex-row w-full">
                <button className=" px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  <span className="text-gray-800 font-semibold">Putar</span>
                </button>
                <button className=" px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-white font-semibold">Selengkapnya</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black">
        </div>
        <video className="w-full h-64 lg:h-screen object-cover -mt-8    " autoPlay muted loop>
          <source className="h-screen object-contain" src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Header
