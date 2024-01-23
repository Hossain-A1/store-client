"use client";

import Button, { buttonVariance } from "@/components/ui/Button";
import { axiosAuthPost } from "@/lib/axiosAuthPost";
import { cn } from "@/lib/utils";
import { login } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface LoginPageData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginPageData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogInSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const data = await axiosAuthPost("/api/auth/login", formData);

      if (data) {
        setIsLoading(false);
        setFormData({
          email: "",
          password: "",
        });
        dispatch(login(data));
        toast.success("Login has successfully!");

        router.push("/");
      } else {
        setIsLoading(false);
      }
    },
    [formData, dispatch, router]
  );

  return (
    <div className='container section-p mt-10  flex flex-col items-center  justify-center gap-5 h-screen  '>
      <h2>Log in to explore our products.</h2>

      <form onSubmit={handleLogInSubmit}>
        {/* sign-in */}
        <div className='flex flex-col gap-3 max-lg:gap-2 w-[20rem] max-lg:w-full max-lg:h-[13rem] h-[20rem] justify-center bg-orange/10 p-10 rounded-lg overflow-hidden mt-10 shadow-2xl'>
          <label htmlFor='email' className='max-lg:text-sm'>
            Email
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            autoComplete='username'
            type='email'
            id='email'
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
            id='password'
            autoComplete='current-password'
            placeholder='e.g, Abc******!'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm max-lg:py-1'
          />

          <Button
            type='submit'
            isLoading={isLoading}
            className={cn(buttonVariance({ variant: "ocen" }))}
          >
            Login
          </Button>
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
