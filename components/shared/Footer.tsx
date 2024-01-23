import Link from "next/link";
import {} from "react-icons";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='grid grid-cols-3 max-lg:grid-cols-1 gap-5 bg-dark text-light p-5'>
      <div className='flex flex-col items-center p-10'>
        <div>
          <span className='text-6xl  font-semibold'>#</span>
          <h2>
            NUR store. <br />
            Providing reliable products since 1992
          </h2>
        </div>
      </div>

      <div className='flex max-lg:flex-col max-lg:justify-center justify-around gap-10 col-span-2'>
        <ul className='flex flex-col gap-3 items-center  '>
          <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
            Quick Links
          </h2>
          <li className=''>
            <Link href='/' className='l text-sm'>
              Home
            </Link>
          </li>

          <li className=''>
            <Link href='/about' className=' text-sm'>
              About
            </Link>
          </li>
          <li className=''>
            <Link href='/products' className=' text-sm'>
              Products
            </Link>
          </li>
          <li className=''>
            <Link href='/services' className=' text-sm'>
              Services
            </Link>
          </li>

         
        </ul>

        <ul className='flex flex-col gap-3 items-center  '>
          <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
            company
          </h2>
          <li className=''>
            <Link href='/about' className=' text-sm'>
              About
            </Link>
          </li>
          <li className=''>
            <Link href='/contact' className=' text-sm'>
              Contact
            </Link>
          </li>
          <li className=''>
            <Link href='/login' className=' text-sm'>
              login
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col items-center gap-5'>
          <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
            {" "}
            LEGAL
          </h2>
          <Link href='#' className='text-sm'>
            Terms of use
          </Link>
          <Link href='#' className='text-sm'>
            Privacy policy
          </Link>
          <Link href='#' className='text-sm'>
            Cookie policy
          </Link>
        </ul>

        <ul className='social text-light flex flex-col items-center gap-5'>
          <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
            Social
          </h2>

          <div className='flex gap-5 justify-center text-light'>
            {" "}
            <span>
              <FaFacebookF className='text-4xl ' />
            </span>
            <span>
              <FaYoutube className='text-4xl ' />
            </span>
            <span>
              <FaTwitter className='text-4xl' />
            </span>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
