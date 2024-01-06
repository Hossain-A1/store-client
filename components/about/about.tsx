import Image from "next/image";

import PositiveReviews from "./PositiveReviews";
import Link from "next/link";
import Mission from "./Mission";

const About = () => {
  return (
    <section className='container section-p space-y-10 mt-10 '>
      <div className='grid lg:grid-cols-2  grid-cols-1 gap-5 '>
        <div className='flex max-lg:flex-col max-md:items-center w-full gap-2  bg-green/10 lg:py-10 lg:px-5 rounded-tl-xl'>
          <div className='bg-light w-1/2 max-md:w-full h-full rounded-xl p-3'>
            <div className='flex flex-col items-end gap-5 place-items-end'>
              <div className='space-y-2'>
                <u>Misson</u>
                <h2 className='font-medium text-2xl'>
                  Unleashing Innovation and Impact Through Our Dream
                </h2>
              </div>

              <p className='text-sm'>
                "Nur E-commerce Store is not just a platform; it's a dream
                turned reality. Our dream is to create a space where every
                purchase becomes a delightful discovery, where innovation meets
                affordability, and where our community thrives. Join us in this
                adventure, and let's build a vibrant and inspired world of
                possibilities together at Nur E-commerce Store."
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2 justify-between max-md:w-full w-1/2 h-full'>
            <div className='h-1/2 w-full'>
              <Image
                src='https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='about image'
                height={400}
                width={400}
                priority
                className='h-full w-full object-cover  rounded-xl'
              />
            </div>
            <div className='bg-light  flex flex-col h-2/5  gap-2 py-5 px-2 rounded-xl '>
              <div className='flex gap-2 items-center w-full'>
                <div className='bg-gray/20 rounded-md w-full  p-2 flex flex-col items-center '>
                  <strong>34k</strong>
                  <small className='font-medium text-xs capitalize'>
                    Total stock
                  </small>
                </div>
                <div className='flex bg-gray/20 rounded-md  w-full p-2 flex-col items-center '>
                  <strong>124k</strong>
                  <small className='font-medium text-xs capitalize'>Sold</small>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex w-full  bg-gray/20 rounded-md  p-2 flex-col items-center '>
                  <strong>1712+</strong>
                  <small className='font-medium text-xs capitalize'>
                    Good Reviews
                  </small>
                </div>
                <div className='flex w-full bg-gray/20 rounded-md  p-2 flex-col items-center '>
                  <strong>7k</strong>
                  <small className='font-medium text-xs capitalize'>
                    Up Coming
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-auto rounded-tr-xl space-y-1 py-5 px-2 bg-gray/30'>
          <h3 className='px-5'>Meet the Team</h3>
          <h2 className='text-xl px-5 font-semibold text-green'>
            {" "}
            Unleashing Support Excellence for Seamless Satisfaction!
          </h2>
          <div className=' flex  gap-3 p-5 rounded-lg overflow-hidden '>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden '
            >
              <Image
                src='https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover hover:scale-125 eq '
              />
            </Link>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden'
            >
              <Image
                src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover  hover:scale-125 eq'
              />
            </Link>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden'
            >
              <Image
                src='https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover  hover:scale-125 eq'
              />
            </Link>
          </div>

          <div className=' flex  gap-3 p-5  rounded-lg overflow-hidden'>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden'
            >
              <Image
                src='https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover hover:scale-125 eq'
              />
            </Link>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden'
            >
              <Image
                src='https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover hover:scale-125 eq '
              />
            </Link>
            <Link
              href='/contact'
              className='h-[12rem] w-full border-8 border-light rounded-md overflow-hidden'
            >
              <Image
                src='https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='team image'
                height={200}
                width={200}
                priority
                className='h-full w-full object-cover  hover:scale-125 eq'
              />
            </Link>
          </div>
        </div>
      </div>
      <Mission />
      <PositiveReviews />
    </section>
  );
};

export default About;
