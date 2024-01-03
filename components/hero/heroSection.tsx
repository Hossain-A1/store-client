"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";

const HeroSection = () => {
  return (
    <main className='mt-20'>
      <section className='container section-p  '>
        <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-10 '>
          <div className='space-y-5'>
            <SectionTitle
              subtitle='welcome to'
              title='nur store'
              description='Nur Store is an extensive and diverse ecommerce platform that offers a wide array of products, including clothing, accessories, home decor, electronics, and much more. Our primary goal is to provide our customers with access to top-quality items at prices that are friendly to your wallet. We believe that luxury and affordability can coexist, and we work diligently to curate a selection that reflects this commitment.
 '
            />

            <Link
              href='/products'
              className={cn(buttonVariance({ variant: "halloween" }))}
            >
              Visit our store
            </Link>
          </div>

          <div className='relative mt-10 '>
            <Swiper
              className='absolute h-[20rem] max-md:h-[15rem] w-full -left-10 max-md:left-0 z-[1]'
              autoplay={{ delay: 100, disableOnInteraction: false }}
              loop={true}
              speed={7000}
              grabCursor={true}
              navigation={false}
              modules={[Navigation, Autoplay]}
            >
              <div className=' w-full h-full'>
                <SwiperSlide className='w-full h-full overflow-hidden'>
                  <Image
                    src='https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    height={380}
                    width={740}
                    alt='hero image'
                    priority
                    className='h-full w-full object-fill '
                  />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full overflow-hidden'>
                  <Image
                    src='https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    height={380}
                    width={740}
                    alt='hero image'
                    priority
                    className='h-full w-full object-fill   '
                  />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full overflow-hidden'>
                  <Image
                    src='https://images.pexels.com/photos/3775602/pexels-photo-3775602.jpeg?auto=compress&cs=tinysrgb&w=600'
                    height={380}
                    width={740}
                    alt='hero image'
                    priority
                    className='h-full w-full object-fill '
                  />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full overflow-hidden'>
                  <Image
                    src='https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    height={380}
                    width={740}
                    alt='hero image'
                    priority
                    className='h-full w-full object-fill  '
                  />
                </SwiperSlide>

                <SwiperSlide className='w-full h-full overflow-hidden'>
                  <Image
                    src='https://images.pexels.com/photos/5632334/pexels-photo-5632334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    height={380}
                    width={740}
                    alt='hero image'
                    priority
                    className='h-full w-full object-fill   '
                  />
                </SwiperSlide>
              </div>
            </Swiper>

            <div className='bg-orange/80 h-[20rem] max-md:h-[15rem] w-full absolute -top-10  bottom-5  rounded-tl-3xl rounded-br-3xl'></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
