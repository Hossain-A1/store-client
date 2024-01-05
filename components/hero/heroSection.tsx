import Image from "next/image";
import Button from "../ui/Button";

const heroSection = () => {
  return (
    <section className='container section-p mt-10'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 gap-10 items-center'>
        <div className='space-y-5'>
          <h2 className='capitalize text-6xl font-light'>
            Discover new collections
          </h2>
          <p className="text-green/90">
            "Explore the latest in our signature collections, exclusive
            collaborations, and fresh arrivals for the new season in our curated
            selection."
          </p>
          <Button variant='halloween'>Shop new Arrivals</Button>
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
