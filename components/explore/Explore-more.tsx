import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";
import Link from "next/link";

const Explore = () => {
  return (
    <div className="">

      <hr className='border border-dark/10 ' />
      <div className='my-5'>
        <div className='flex flex-col gap-1 items-center py-5'>
          <span className='text-sm'>See personalized recommendations</span>
          <Link
            href='/login'
            className={cn(
              buttonVariance({ variant: "orange" }),
              "block w-[15rem] py-1 capitalize rounded"
            )}
          >
            sign in
          </Link>
          <p className='flex text-xs gap-1'>
            New Customer?{" "}
            <a
              href='/sign-up'
              className='text-blue hover:text-orange eq text-xs'
            >
              Start here.
            </a>
          </p>
        </div>
        <hr className='border border-dark/10 ' />
      </div>

      <div className='bg-dark/90 py-3 hover:bg-dark/80 eq'>
        <Link href='/' className='text-center block text-light text-sm'>
          Back to top
        </Link>
      </div>
    </div>
  );
};

export default Explore;
