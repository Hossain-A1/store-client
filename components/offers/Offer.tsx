"use client";
import useFetch from "@/hooks/use-fetch";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";

const Offer = () => {
  const { data, isLoading } = useFetch("/api/products");
  return (
    <div className="container section-p space-y-10">
      <div className=''>
        <SectionTitle
          title='Grab Our Limited-Time Package Offers Now!'
          subtitle='packages'
        />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4  items-center lg:gap-5 md:gap-5 gap-2'>
        <Link
          href='/products'
          className='bg-light lg:h-[24rem] md:h-[24rem] h-[18rem]  flex flex-col gap-5 items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-semibold capitalize text-center lg:h-[6rem] h-[5rem]'>
            Electronics | Up to 20% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures  flex flex-wrap lg:gap-5 md:gap-5 gap-3  justify-center items-center'>
            {data &&
              data
                .filter(
                  (item: productDataType) => item.category === "Electronics"
                )
                ?.slice(2, 6)
                ?.map((item: productDataType) => (
                  <div key={item._id} className='lg:w-[6rem] lg:h-[6rem] md:h-[8rem] md:w-[8rem] h-[3.7rem] w-[3.7rem] p-2 space-y-2 bg-dark/30'>
                    <Image
                      src={item.images[3]}
                      alt=''
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 11)}
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
          className='bg-light lg:h-[24rem] md:h-[24rem] h-[18rem]  flex flex-col gap-5 items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-semibold capitalize text-center lg:h-[6rem] h-[5rem]'>
            Varieties items | Up to 50% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures  flex flex-wrap lg:gap-5 md:gap-5 gap-3  justify-center items-center'>
            {data &&
              data
                .filter((item: productDataType) => item?.category === "Variety")
                ?.slice(1, 5)
                ?.map((item: productDataType) => (
                  <div key={item._id} className='lg:w-[6rem] lg:h-[6rem] md:h-[8rem] md:w-[8rem] h-[3.7rem] w-[3.7rem] p-2 space-y-2 bg-dark/30 '>
                    <Image
                      src={item.images[1]}
                      alt=''
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />

                    <span className='flex justify-between w-[5.5rem] bg-red py-1 px-2 text-xs rounded font-medium -ml-2  text-light'>
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
          className='bg-light lg:h-[24rem] md:h-[24rem] h-[18rem]  flex flex-col gap-5 items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-semibold capitalize text-center lg:h-[6rem] h-[5rem]'>
            Men && women outlet | up to 60% off
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures  flex flex-wrap lg:gap-5 md:gap-5 gap-3  justify-center items-center'>
            {data &&
              data
                .filter((item: productDataType) => item.category === "Clothes")
                ?.slice(0, 4)
                ?.map((item: productDataType) => (
                  <div key={item._id} className='lg:w-[6rem] lg:h-[6rem] md:h-[8rem] md:w-[8rem] h-[3.7rem] w-[3.7rem] p-2 space-y-2 bg-dark/30'>
                    <Image
                      src={item.images[1]}
                      alt=''
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 11)}
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
          className='bg-light lg:h-[24rem] md:h-[24rem] h-[18rem]  flex flex-col gap-5 items-center hover:brightness-90 eq shadow-sm'
        >
          <h2 className='lg:text-2xl text-lg font-semibold capitalize text-center lg:h-[6rem] h-[5rem]'>
            New arrivals in (9/2023) Electronics
          </h2>
          {isLoading && <p className='text-dark'>Loading...</p>}

          <div className='pictures  flex flex-wrap lg:gap-5 md:gap-5 gap-3 justify-center items-center'>
            {data &&
              data
                .filter(
                  (item: productDataType) => item.category === "Electronics"
                )
                ?.slice(0, 4)
                ?.map((item: productDataType) => (
                  <div key={item._id} className='lg:w-[6rem] lg:h-[6rem] md:h-[8rem] md:w-[8rem] h-[3.7rem] w-[3.7rem] p-2 space-y-2 bg-dark/30'>
                    <Image
                      src={item.images[1]}
                      alt=''
                      width={680}
                      height={320}
                      priority
                      className='h-full w-full object-cover'
                    />
                    <span className='lg:text-xs text-[0.60rem] text-dark -ml-2 font-medium'>
                      {item.title.substring(0, 13)}
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
