"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Link from "next/link";

import {
  TbMessages,
  TbTruckDelivery,
  TbDeviceMobilePlus,
  TbCreditCard,
} from "react-icons/tb";

import { BsArrowReturnLeft, BsCashCoin } from "react-icons/bs";

const TarmsSection = () => {
  return (
    <div className=' container relative'>
      <h2 className=' text-2xl font-medium absolute top-2 z-[3]'>
        Shop on Nur store{" "}
      </h2>

      <Swiper
        className='  bg-light  overflow-x-hidden'
        autoplay={{ delay: 100, disableOnInteraction: false }}
        loop={true}
        speed={55000}
        grabCursor={true}
        navigation={false}
        modules={[Navigation, Autoplay]}
      >
        <div className='flex justify-center items-center gap-10'>
          <SwiperSlide className='py-12 mx-10'>
            <div className='flex justify-between max-md:flex-wrap items-center gap-10'>
              <div className='overflow-hidden flex  flex-col items-center  gap-3 relative '>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span>
                    <TbTruckDelivery className=' text-light text-8xl' />
                  </span>
                </div>

                <Link
                  href='/'
                  className='w-full space-x-20 absolute text-center hover:text-blue eq whitespace-nowrap bg-white  bottom-0 py-5 z-[2]'
                >
                  How to get free deliveries
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center relative'>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <BsArrowReturnLeft className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute hover:text-blue eq  bg-white  bottom-0 py-5 z-[2]'
                >
                  How to return an item
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center relative '>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <TbMessages className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white hover:text-blue eq  bottom-0 py-5 z-[2]'
                >
                  How to contact us
                </Link>
              </div>

              <div className='overflow-hidden flex flex-col gap-3 items-center relative'>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <TbDeviceMobilePlus className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white  hover:text-blue eq bottom-0 py-5 z-[2]'
                >
                  How to place an order
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center  relative'>
                <div className=' bg-orange rounded-full  lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem] z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <BsCashCoin className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white  hover:text-blue eq bottom-0 py-5 z-[2]'
                >
                  How to pay with cash
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='py-12'>
            <div className='flex justify-between max-md:flex-wrap gap-10'>
              <div className='overflow-hidden flex flex-col items-center  gap-3 relative '>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span>
                    <TbTruckDelivery className=' text-light text-8xl' />
                  </span>
                </div>

                <Link
                  href='/'
                  className='w-full space-x-20 absolute  text-center bg-white whitespace-nowrap  hover:text-blue eq bottom-0 py-5 z-[2]'
                >
                  How to get free deliveries
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center relative'>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem]  z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <BsArrowReturnLeft className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white hover:text-blue eq  bottom-0 py-5 z-[2]'
                >
                  How to return an item
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center relative '>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem] z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <TbMessages className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white  hover:text-blue eq bottom-0 py-5 z-[2]'
                >
                  How to contact us
                </Link>
              </div>

              <div className='overflow-hidden flex flex-col gap-3 items-center relative'>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem] z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <TbDeviceMobilePlus className=' text-light lg:text-8xl max-lg:4xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white hover:text-blue eq  bottom-0 py-5 z-[2]'
                >
                  How to place an order
                </Link>
              </div>
              <div className='overflow-hidden flex flex-col gap-3 items-center  relative'>
                <div className=' bg-orange rounded-full lg:h-[12rem] lg:w-[12rem] h-[10rem] w-[10rem] z-[1] flex justify-center items-center'>
                  <span className='text-light'>
                    <BsCashCoin className=' text-light text-8xl' />
                  </span>
                </div>
                <Link
                  href='/'
                  className='w-full space-x-20 absolute  bg-white hover:text-blue eq  bottom-0 py-5  z-[2]'
                >
                  How to pay with cash
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default TarmsSection;
