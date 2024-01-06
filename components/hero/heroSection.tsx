import Image from "next/image";
import Button, { buttonVariance } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const heroSection = () => {
  return (
    <section className='container section-p mt-10 h-[calc(100vh-5rem)] max-lg:h-auto'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 gap-10 items-center h-full '>
        <div className='space-y-5'>
          <h2 className='capitalize text-6xl font-light'>
            Discover new collections
          </h2>
          <p className="text-green/90">
            "Explore the latest in our signature collections, exclusive
            collaborations, and fresh arrivals for the new season in our curated
            selection."
          </p>
          <Link href='products' className={cn(buttonVariance({variant:'halloween'}))} >Shop new Arrivals</Link>
        </div>

        <div className=' w-full h-full flex items-center justify-center'>
          <div className='w-[25rem] h-[25rem] overflow-hidden'>
            <Image
              src='/images/hero-1.png'
              alt='hero image'
              height={912}
              width={1400}
              priority
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroSection;
