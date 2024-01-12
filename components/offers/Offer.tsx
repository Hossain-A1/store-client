"use client";
import useFetch from "@/hooks/use-fetch";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";

const Offer = () => {
  const { data, isLoading } = useFetch("/api/products");
  return (
    <div className='container section-p space-y-10'>
      <div className=''>
        <SectionTitle
          title='Grab Our Limited-Time Package Offers Now!'
          subtitle='packages'
        />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4  items-center gap-5'>
        <Link
          href='/products'
          className='bg-light h-full lg:h-[24rem] p-5   flex flex-col gap-3  items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl  text-lg font-light capitalize text-center '>
            Electronics | Up to 20% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures h-full w-full  grid grid-cols-2 gap-5  justify-center items-center'>
            {data &&
              data
                .filter(
                  (item: productDataType) => item.category === "Electronics"
                )
                ?.slice(2, 6)
                ?.map((item: productDataType) => (
                  <div
                    key={item._id}
                    className='w-full h-full space-y-2 bg-dark/30 p-1'
                  >
                    <Image
                      src={item.images[3]}
                      alt='offer image'
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 7)}
                    </span>
                  </div>
                ))}
          </div>
          {!isLoading && (
            <span className='text-blue hover:underline eq text-xs font-medium md:mt-2 mt-5'>
              See more
            </span>
          )}
        </Link>

        <Link
          href='/products'
          className='bg-light lg:h-[24rem] md:h-[24rem] h-full justify-center gap-3 p-5 flex flex-col  items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-light capitalize text-center '>
            Varieties items | Up to 50% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures h-full w-full grid grid-cols-2 gap-5   items-center'>
            {data &&
              data
                .filter((item: productDataType) => item?.category === "Variety")
                ?.slice(1, 5)
                ?.map((item: productDataType) => (
                  <div
                    key={item._id}
                    className='w-full h-full space-y-2 bg-dark/30 p-1 relative z-10'
                  >
                    <Image
                      src={item.images[1]}
                      alt='offer images'
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover '
                    />

                    <span className='flex justify-between w-full py-1  bg-red  text-xs rounded font-medium   text-light absolute z-20 -bottom-5 '>
                      30% off <p className='text-dark text-xs'> Deal</p>
                    </span>
                  </div>
                ))}
          </div>
          {!isLoading && (
            <span className='text-blue hover:underline eq text-xs font-medium md:mt-2 mt-5'>
              See more
            </span>
          )}
        </Link>
        <Link
          href='/products'
          className='bg-light lg:h-[24rem] md:h-[24rem] h-full justify-center gap-3  p-5 flex flex-col items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-light capitalize text-center '>
            Men && women outlet | up to 60% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className=' pictures h-full w-full  grid grid-cols-2 gap-5   items-center'>
            {data &&
              data
                .filter((item: productDataType) => item.category === "Clothes")
                ?.slice(0, 4)
                ?.map((item: productDataType) => (
                  <div
                    key={item._id}
                    className='w-full h-full space-y-2 bg-dark/30 p-1'
                  >
                    <Image
                      src={item.images[1]}
                      alt='offer images'
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 9)}
                    </span>
                  </div>
                ))}
          </div>
          {!isLoading && (
            <span className='text-blue hover:underline eq text-xs font-medium md:mt-2 mt-5'>
              See more
            </span>
          )}
        </Link>
        <Link
          href='/products'
          className='bg-light lg:h-[24rem] md:h-[24rem] h-full justify-center gap-3 p-5 flex flex-col  items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-light capitalize text-center '>
            New arrivals in (9/2023) Electronics
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures h-full w-full  grid grid-cols-2 gap-5  justify-center items-center'>
            {data &&
              data
                .filter(
                  (item: productDataType) => item.category === "Electronics"
                )
                ?.slice(0, 4)
                ?.map((item: productDataType) => (
                  <div
                    key={item._id}
                    className='w-full h-full  space-y-2 bg-dark/30 p-1'
                  >
                    <Image
                      src={item.images[1]}
                      alt='offer image'
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 9)}
                    </span>
                  </div>
                ))}
          </div>
          {!isLoading && (
            <span className='text-blue hover:underline eq text-xs font-medium lg:mt-2 md:mt-2 mt-5'>
              See more
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Offer;
