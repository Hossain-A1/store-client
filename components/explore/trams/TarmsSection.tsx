"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  TbMessages,
  TbTruckDelivery,
  TbDeviceMobilePlus,
  TbCreditCard,
} from "react-icons/tb";

import { BsArrowReturnLeft, BsCashCoin } from "react-icons/bs";

const TarmsSection = () => {
  return (
    <div className='relative section-m w-[130%]'>
      <h2 className='absolute top-2 text-2xl font-medium'>
        Shop on Nur store{" "}
      </h2>
      <Swiper
        speed={750}
        loop={true}
        grabCursor={true}
        navigation={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='flex justify-center gap-5 bg-light py-12 z-[9] w-[120%]'>
            <div className='overflow-hidden flex flex-col gap-3  '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span>
                  <TbTruckDelivery className=' text-light text-8xl' />
                </span>
              </div>
            </div>
            <div className='overflow-hidden flex flex-col gap-3 '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span className='text-light'>
                  <BsArrowReturnLeft className=' text-light text-8xl' />
                </span>
              </div>
            </div>
            <div className='overflow-hidden flex flex-col gap-3 '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span className='text-light'>
                  <TbMessages className=' text-light text-8xl' />
                </span>
              </div>
            </div>
            <div className='overflow-hidden flex flex-col gap-3 '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span className='text-light'>
                  <TbDeviceMobilePlus className=' text-light text-8xl' />
                </span>
              </div>
            </div>
            <div className='overflow-hidden flex flex-col gap-3 '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span className='text-light'>
                  <BsCashCoin className=' text-light text-8xl' />
                </span>
              </div>
            </div>
            <div className='overflow-hidden flex flex-col gap-3 '>
              <div className=' bg-orange rounded-full h-[12rem] w-[12rem] z-[9] flex justify-center items-center'>
                <span className='text-light'>
                  <TbCreditCard className=' text-light text-8xl' />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='absolute z-[10] flex justify-center w-[120%] gap-5 bg-light border-t-2 border-light_dark py-5  top-2/3 text-lg font-medium text-dark/80'>
        <Link href='/' className='w-[11rem] space-x-20'>
          How to get free deliveries
        </Link>
        <Link href='/' className='w-[11rem] space-x-20'>
          How to return an item
        </Link>
        <Link href='/' className='w-[11rem] space-x-20'>
          How to contact us
        </Link>
        <Link href='/' className='w-[11rem] space-x-20'>
          How to place an order
        </Link>
        <Link href='/' className='w-[11rem] space-x-20'>
          How to pay with cash
        </Link>
        <Link href='/' className='w-[11rem] space-x-20'>
          Get a Gift Card
        </Link>
      </div>
    </div>
  );
};

export default TarmsSection;