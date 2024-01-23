"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";
import Image from "next/image";
import { logout } from "@/redux/features/auth/authSlice";

const Navber = () => {
  const [icon, setIcon] = useState<boolean>(false);
  const [profileTab, setprofiletab] = useState<boolean>(false);
  const pathName = usePathname();
  const session = useSelector((state: RootState) => state.auth.userAndToken);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const profileContents = [
    { href: "/manage-profile", label: "profile" },
    { href: "/my-order", label: "order" },
    { href: "/manage-products", label: "products" },
    { href: "/manage-services", label: "services" },
  ];

  const dispatch = useDispatch();

  return (
    <>
      <header
        className=' h-20
       flex flex-col justify-center items-center bg-dark text-light fixed top-0 left-0 right-0 z-[9999] '
      >
        <nav className=' container mx-10  flex items-center justify-between  '>
          <div className='flex gap-1 items-center'>
            <Image src='images/logo.svg' alt='logo' height='40' width='40' />

            <h2 className='text-2xl text-orange_dim'>Nur store</h2>
          </div>

          <div
            className={`${
              !icon
                ? " max-lg:hidden "
                : "max-lg:absolute max-lg:bg-dark z-[99] max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:right-0 max-lg:min-h-screen visible block"
            }`}
          >
            <div className='max-lg:relative max-lg:h-full max-lg:w-full '>
              <ul
                className=' lg:flex max-lg:flex-col  gap-10  items-center justify-center 
            max-lg:absolute max-lg:bottom-0 max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2  uppercase'
              >
                <li className='max-lg:text-center '>
                  <Link
                    href='/'
                    onClick={() => setIcon(false)}
                    className={`${pathName === "/" ? "nav-active " : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className='max-lg:text-center max-lg:my-5'>
                  <Link
                    href='/about'
                    onClick={() => setIcon(false)}
                    className={`${pathName === "/about" ? "nav-active " : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li className='max-lg:text-center max-lg:my-5'>
                  <Link
                    href='/products'
                    onClick={() => setIcon(false)}
                    className={`${
                      pathName === "/products" ? "nav-active " : ""
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li className='max-lg:text-center max-lg:my-5'>
                  <Link
                    href='/services'
                    onClick={() => setIcon(false)}
                    className={`${
                      pathName === "/services" ? "nav-active " : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li className='max-lg:text-center max-lg:my-5'>
                  <Link
                    href='/contact'
                    onClick={() => setIcon(false)}
                    className={`${
                      pathName === "/contact" ? "nav-active " : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                <ul className='flex items-center gap-10 uppercase  lg:hidden'>
            {!session?.user ? (
              <li className=''>
                <Link
                  href='/login'
                  onClick={() => setIcon(false)}
                  className={cn(buttonVariance({ variant: "halloween" }))}
                >
                  Sign-up
                </Link>
              </li>
            ) : (
              <div className='flex items-center gap-5'>
                <Link
                  href='sign-up'
                  onClick={() => dispatch(logout())}
                  className={`${
                    pathName === "/login" ? "nav-active " : ""
                  } ${cn(buttonVariance({ variant: "halloween" }))}`}
                >
                  Logout
                </Link>
                <div
                  className='relative w-12 h-12 rounded-full shadow-md cursor-pointer group'
                  onMouseLeave={() => setprofiletab(!profileTab)}
                >
                  <Image
                    src={session?.user?.picUrl}
                    alt={session.user.name}
                    width={64}
                    height={64}
                    priority
                    className=' h-full w-full object-cover rounded-full group-hover:scale-125 eq'
                  />

                  {/* profile pop-up here */}

                  {profileTab && (
                    <ul className='absolute  right-0 top-[calc(100%+1rem)] z-[102] flex flex-col items-start gap-5 rounded-xl bg-white px-20 py-5 shadow-md'>
                      {session.user?.role === "admin" &&
                        profileContents.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "text-dark whitespace-nowrap",
                                pathName === item.href
                                  ? "nav-list "
                                  : "text-dark"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}

                      {session.user?.role === "user" &&
                        profileContents.slice(0, 2).map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "text-dark whitespace-nowrap",
                                pathName === item.href
                                  ? "nav-list "
                                  : "text-dark"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            <li className='relative '>
              <Link href='/cart' onClick={() => setIcon(false)} className=''>
                <FiShoppingCart className='text-2xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-orange rounded-full text-xs text-dark font-semibold px-1 '>
                  {cartItems?.length}
                </span>
              </Link>
            </li>
          </ul>
              </ul>
            </div>
          </div>

          <div
            className={` ${
              !icon
                ? "absolute  right-5 top-6 px-1 py-1 cursor-pointer border border-light rounded-full lg:hidden flex items-center justify-center"
                : "active"
            }`}
          >
            <div className='mobile-navber-btn relative'>
              <CgMenu
                name='menu-outline'
                className='mobile-navber-icon text-xl'
                onClick={() => setIcon(true)}
              />
              <CgClose
                name='close-outline'
                className='mobile-navber-icon close-outline '
                onClick={() => setIcon(false)}
              />
            </div>
          </div>
          {/* profile gose here */}

          <ul className='flex items-center gap-10 uppercase max-lg:mr-20 max-lg:hidden'>
            {!session?.user ? (
              <li className=''>
                <Link
                  href='/login'
                  onClick={() => setIcon(false)}
                  className={cn(buttonVariance({ variant: "halloween" }))}
                >
                  Sign-up
                </Link>
              </li>
            ) : (
              <div className='flex items-center gap-5'>
                <Link
                  href='sign-up'
                  onClick={() => dispatch(logout())}
                  className={`${
                    pathName === "/login" ? "nav-active " : ""
                  } ${cn(buttonVariance({ variant: "halloween" }))}`}
                >
                  Logout
                </Link>
                <div
                  className='relative w-12 h-12 rounded-full shadow-md cursor-pointer group'
                  onMouseLeave={() => setprofiletab(!profileTab)}
                >
                  <Image
                    src={session?.user?.picUrl}
                    alt={session.user.name}
                    width={64}
                    height={64}
                    priority
                    className=' h-full w-full object-cover rounded-full group-hover:scale-125 eq'
                  />

                  {/* profile pop-up here */}

                  {profileTab && (
                    <ul className='absolute  right-0 top-[calc(100%+1rem)] z-[102] flex flex-col items-start gap-5 rounded-xl bg-white px-20 py-5 shadow-md'>
                      {session.user?.role === "admin" &&
                        profileContents.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "text-dark whitespace-nowrap",
                                pathName === item.href
                                  ? "nav-list "
                                  : "text-dark"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}

                      {session.user?.role === "user" &&
                        profileContents.slice(0, 2).map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "text-dark whitespace-nowrap",
                                pathName === item.href
                                  ? "nav-list "
                                  : "text-dark"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            <li className='relative max-lg:hidden'>
              <Link href='/cart' onClick={() => setIcon(false)} className=''>
                <FiShoppingCart className='text-2xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-orange rounded-full text-xs text-dark font-semibold px-1 '>
                  {cartItems?.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* POP-UP OVERLAY */}
      {profileTab && (
        <div
          onClick={() => setprofiletab(false)}
          className='fixed bottom-0 left-0 right-0 top-0 z-[101] h-full w-full'
        ></div>
      )}
    </>
  );
};

export default Navber;
