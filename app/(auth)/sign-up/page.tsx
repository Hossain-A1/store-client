"use client";
import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import Button, { buttonVariance } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { axiosAuthPost } from "@/lib/axiosAuthPost";
import toast from "react-hot-toast";
import { photoUrlChecker } from "@/helpers/photoUrlChecker";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/auth/authSlice";
interface SignupPageData {
  name: string;
  email: string;
  password: string;
  picUrl: string;
}

const SignupPage = () => {
  const [modal2, setModal2] = useState(false);
  const [formData, setFormData] = useState<SignupPageData>({
    name: "",
    email: "",
    password: "",
    picUrl: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignUpSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const data = await axiosAuthPost("/api/auth/register", formData);
      const hasPermitted = photoUrlChecker(formData.picUrl);

      if (hasPermitted) {
        if (data) {
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            password: "",
            picUrl: "",
          });
          dispatch(login(data));
          toast.success("Register successfull");
          router.push("/");
        } else {
          setIsLoading(false);
        }
      } else {
        toast.error("Please paste a photo URL from pexels/unsplash/cloudinary");
        setIsLoading(false);
      }
    },
    [formData]
  );
  return (
    <div className='container section-p  flex flex-col items-center  justify-center gap-5 h-screen relative  '>
      <div className='absolute top-5 space-y-3'>
        <SectionTitle subtitle='go ahed' title='signup' />
        <button className='text-blue/90' onClick={() => setModal2(!modal2)}>
          Signup/
        </button>
        <Link href='/login'>Login</Link>
      </div>

      <form
        className={cn(!modal2 ? "hidden" : "block mt-20 w-[24rem]  ")}
        onSubmit={handleSignUpSubmit}
      >
        {/* sign-in */}
        <div className='flex flex-col gap-3 px-5 py-2 w-full  justify-center bg-orange/10  rounded-lg overflow-hidden  shadow-2xl'>
          <label htmlFor='name' className='max-lg:text-sm'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
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
            id='email'
            autoComplete='username'
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
          <label htmlFor='picUrl' className='max-lg:text-sm'>
            Photo URL
          </label>
          <input
            value={formData.picUrl}
            onChange={(e) =>
              setFormData({ ...formData, picUrl: e.target.value })
            }
            type='text'
            id='picUrl'
            autoComplete='current-password'
            placeholder=' photo URL from pexels/unsplash/cloudinary'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq text-sm max-lg:py-1'
          />

          <Button
            type='submit'
            isLoading={isLoading}
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
