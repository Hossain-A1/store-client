"use client";
import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import Button, { buttonVariance } from "@/components/ui/Button";

interface SignupPageData {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [modal2, setModal2] = useState(false);
  const [formData, setFormData] = useState<SignupPageData>({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpSubmit = useCallback(async(e:React.SyntheticEvent)=>{
e.preventDefault()
console.log(formData);
  },[formData])
  return (
    <div className='container section-p  flex flex-col items-center  justify-center gap-5 h-screen relative  '>
      <div className='absolute top-5 space-y-3'>
        <SectionTitle subtitle='go ahed' title='signup' />
        <button className='text-blue/90' onClick={() => setModal2(!modal2)}>
          Signup/
        </button>
        <Link href='/login'>Login</Link>
      </div>

      <form className={cn(!modal2 ? "hidden" : "block ")} onSubmit={handleSignUpSubmit}>
        {/* sign-in */}
        <div className='flex flex-col gap-3 max-lg:gap-2 w-[20rem] max-lg:w-full max-lg:h-[18rem] h-[24rem] justify-center bg-orange/10 p-10 rounded-lg overflow-hidden mt-28 shadow-2xl'>
          <label htmlFor='name' className='max-lg:text-sm'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id="name"
            placeholder='e.g, Pekka'
            className='py-2 max-lg:py-1 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm'
          />
          <label htmlFor='email' className='max-lg:text-sm'>
            Email
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id="email"
            autoComplete="username"
            placeholder='e.g, user@shop.net'
            className='py-2 max-lg:py-1 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm'
          />
          <label htmlFor='password' className='max-lg:text-sm'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id="password"
            autoComplete="current-password"
            placeholder='e.g, Abc******!'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm max-lg:py-1'
          />

          <Button
            type='submit'
            className={cn(buttonVariance({ variant: "ocen" }))}
          >

            Signup
          </Button>
       
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
