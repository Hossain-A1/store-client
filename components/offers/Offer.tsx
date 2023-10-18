"use client";
import useFetch from "@/hooks/use-fetch";
import { productDataType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

const Offer = () => {
  const { data } = useFetch("/api/products");
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-5 section-m'>
      <Link
        href='/products'
        className='bg-light lg:h-[24rem] h-[16rem] flex flex-col gap-5 items-center brightness-90 hover:brightness-100 eq shadow-sm'
      >
        <h2 className='text-2xl font-semibold capitalize text-center'>
          Electronics | Up to 20% off
        </h2>
        <div className='pictures  flex flex-wrap gap-10 justify-center items-center'>
          {data &&
            data
              .filter(
                (item: productDataType) => item.category === "Electronics"
              )
              ?.slice(2, 6)
              ?.map((item: productDataType) => (
                <div className='w-[6rem] h-[6rem] p-2 space-y-2 bg-dark/30'>
                  <Image
                    src={item.images[3]}
                    alt=''
                    width={680}
                    height={320}
                    priority
                    className='h-full w-full object-cover'
                  />
                  <span className='text-xs text-dark -ml-2 font-medium'>
                    {item.title.substring(0, 11)}
                  </span>
                </div>
              ))}
        </div>
        <span className='text-blue hover:underline eq text-xs font-medium mt-2'>
          See more
        </span>
      </Link>

      <Link
        href='/products'
        className='bg-blue/10 h-[24rem] flex flex-col gap-5 items-center brightness-90 hover:brightness-100 eq shadow-sm'
      >
        <h2 className='text-2xl font-semibold capitalize text-center'>
          Varieties items | Up to 50% off
        </h2>
        <div className='pictures  flex flex-wrap gap-10 justify-center items-center'>
          {data &&
            data
              .filter((item: productDataType) => item?.category === "Variety")
              ?.slice(1, 5)
              ?.map((item: productDataType) => (
                <div className='w-[6rem] h-[6rem] p-2 space-y-2 bg-dark/30 '>
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
        <span className='text-blue hover:underline eq text-sm font-medium mt-2'>
          See more
        </span>
      </Link>
      <Link
        href='/products'
        className='bg-orange/10 h-[24rem] flex flex-col gap-5 items-center brightness-90 hover:brightness-100 eq shadow-sm'
      >
        <h2 className='text-2xl font-semibold capitalize text-center'>
          Men && women outlet | up to 60% off
        </h2>
        <div className='pictures  flex flex-wrap gap-10 justify-center items-center'>
          {data &&
            data
              .filter((item: productDataType) => item.category === "Clothes")
              ?.slice(0, 4)
              ?.map((item: productDataType) => (
                <div className='w-[6rem] h-[6rem] p-2 space-y-2 bg-dark/30'>
                  <Image
                    src={item.images[1]}
                    alt=''
                    width={680}
                    height={320}
                    priority
                    className='h-full w-full object-cover'
                  />
                  <span className='text-xs text-dark -ml-2 font-medium'>
                    {item.title.substring(0, 11)}
                  </span>
                </div>
              ))}
        </div>
        <span className='text-blue hover:underline eq text-sm font-medium mt-2'>
          See more
        </span>
      </Link>
      <Link
        href='/products'
        className='bg-pink/10 h-[24rem] flex flex-col gap-5 items-center brightness-90 hover:brightness-100 eq shadow-sm'
      >
        <h2 className='text-2xl font-semibold capitalize text-center'>
          New arrivals in (9/2023) Electronics
        </h2>
        <div className='pictures  flex flex-wrap gap-10 justify-center items-center'>
          {data &&
            data
              .filter(
                (item: productDataType) => item.category === "Electronics"
              )
              ?.slice(0, 4)
              ?.map((item: productDataType) => (
                <div className='w-[6rem] h-[6rem] p-2 space-y-2 bg-dark/30'>
                  <Image
                    src={item.images[1]}
                    alt=''
                    width={680}
                    height={320}
                    priority
                    className='h-full w-full object-cover'
                  />
                  <span className='text-xs text-dark -ml-2 font-medium'>
                    {item.title.substring(0, 13)}
                  </span>
                </div>
              ))}
        </div>
        <span className='text-blue hover:underline eq text-sm font-medium mt-2'>
          See more
        </span>
      </Link>
    </div>
  );
};

export default Offer;
