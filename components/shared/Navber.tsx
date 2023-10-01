"use client"
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";

const Navber = () => {
  const [icon, setIcon] = useState(true);

  return (
    <header className=' h-20  flex flex-col justify-center items-center bg-slate-300'>
      <nav className='wrapper    flex items-center justify-between   '>
        <div className='h-12 w-12'>
         <img src="https://th.bing.com/th/id/OIG.8L.pswyQkpGUAsT1Os6N?pid=ImgGn" alt="" className="h-full w-full" />
        </div>

        <div className={icon ? "navber active" : "navber"}>
          <ul className=' nav-lists'>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Home
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/about'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                About
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/products'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Products
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/contact'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Contact
              </Link>
            </li>
            <li className='max-lg:w-2/3 max-lg:text-center  max-lg:bg-orange/30 max-lg:hover:bg-orange/50 max-lg:duration-300'>
              <Link
                href='/login'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                login
              </Link>
            </li>
            <li className='relative '>
              <Link
                href='/cart'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                <FiShoppingCart className='text-xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-orange rounded-full text-xs '>
                  10
                </span>
              </Link>
            </li>
          </ul>

          {/* mobile responsive */}
          <div className='mobile-navber-btn '>
            <CgMenu
              name='menu-outline'
              className='mobile-navber-icon text-4xl'
              onClick={() => setIcon(true)}
            />
            <CgClose
              name='close-outline'
              className='mobile-navber-icon close-outline'
              onClick={() => setIcon(false)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
