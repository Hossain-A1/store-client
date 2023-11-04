import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariance } from "../ui/Button";

const HeroSection = () => {
  return (
   <main className="mt-10">
     <section className='container section-p h-[calc(100vh-5rem)] '>
      <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-10 '>
        <div className='space-y-5'>
          <SectionTitle
            subtitle='welcome to'
            title='nur store'
            description='Nur Store is an ecommerce website that sells a variety of products, such as clothing, accessories, home decor, electronics, and more. Nur Store aims to provide high-quality products at affordable prices, and to deliver a satisfying shopping experience for its customers.'
         
          />

          <Link href='/products' className={cn(buttonVariance({variant:'halloween'}))}>Visit our store</Link>
        </div>

        <div className='relative mt-10 '>
          <div className=' absolute h-[20rem] max-md:h-[15rem] w-full -left-10 max-md:left-0 z-[1]'>
            <Image
              src='https://t4.ftcdn.net/jpg/01/20/72/59/240_F_120725937_rmrpLfMpH1rRfNFT2kUg8w3oDjDsx6Ge.jpg'
              height={1280}
              width={640}
              alt='hero image'
              priority
              className='h-full w-full object-cover rounded-tl-3xl rounded-br-3xl   '
            />
          </div>

          <div className='bg-orange/80 h-[20rem] max-md:h-[15rem] w-full absolute -top-10  bottom-5  rounded-tl-3xl rounded-br-3xl'></div>
        </div>
      </div>
    </section>
   </main>
  );
};

export default HeroSection;
