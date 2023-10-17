"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import { buttonVariance } from "@/components/ui/Button";

const SignupPage = () => {
  const [modal2, setModal2] = useState(false);
  return (
    <div className='wrapper section-p  flex flex-col items-center  justify-center gap-5 h-screen relative  '>
      <div className='absolute top-5 space-y-3'>
        <SectionTitle subtitle='go ahed' title='signup' />
        <button className="text-blue/90" onClick={() => setModal2(!modal2)}>Signup/</button>
        <Link href='/login'>Login</Link>
      </div>

      <form className={cn(!modal2 ? "hidden" : "block ")}>
        {/* sign-in */}
        <div className='flex flex-col gap-3 max-lg:gap-2 w-[20rem] max-lg:w-full max-lg:h-[18rem] h-[24rem] justify-center bg-orange/10 p-10 rounded-lg overflow-hidden mt-28 shadow-2xl'>
          <label htmlFor='name' className='max-lg:text-sm'>
            Name
          </label>
          <input
            type='text'
            placeholder='e-g, Pekka'
            className='py-2 max-lg:py-1 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm'
          />
          <label htmlFor='name' className='max-lg:text-sm'>
            Email
          </label>
          <input
            type='email'
            placeholder='e-g, user@shop.net'
            className='py-2 max-lg:py-1 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm'
          />
          <label htmlFor='name' className='max-lg:text-sm'>
            Password
          </label>
          <input
            type='password'
            placeholder='e-g, Abc******!'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm max-lg:py-1'
          />

          <button
            type='submit'
         className={cn( buttonVariance({ variant: 'ocen'}))}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
