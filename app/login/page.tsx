"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { buttonVariance } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useState } from "react";

interface LoginPageData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState<LoginPageData> ({
    email: "",
    password: "",
  });

  const handleLogInSubmit = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  }, [formData]);
  return (
    <div className='container section-p  flex flex-col items-center  justify-center gap-5 h-screen relative  '>
      <div className='absolute top-5 space-y-3'>
        <SectionTitle subtitle='go ahed' title='signup' />
        <button className='text-blue/90' onClick={() => setModal(!modal)}>
          Login<span className='text-dark'>/</span>
        </button>
        <Link href='/sign-up'>Signup</Link>
      </div>

      <form
        className={cn(!modal ? "hidden" : "block ")}
        onSubmit={handleLogInSubmit}
      >
        {/* sign-in */}
        <div className='flex flex-col gap-3 max-lg:gap-2 w-[20rem] max-lg:w-full max-lg:h-[13rem] h-[20rem] justify-center bg-orange/10 p-10 rounded-lg overflow-hidden mt-10 shadow-2xl'>
          <label htmlFor='name' className='max-lg:text-sm'>
            Email
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            autoComplete="username"
            type='email'
            id="email"
            placeholder='e.g, user@shop.net'
            className='py-2 max-lg:py-1 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm'
          />
          <label htmlFor='name' className='max-lg:text-sm'>
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

          <button
            type='submit'
            className={cn(buttonVariance({ variant: "ocen" }))}
          >
            Login
          </button>
          <p>
            <span className='text-black/50'>Do not have an account?</span>{" "}
            <Link href='/sign-up' className='link-item'>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
