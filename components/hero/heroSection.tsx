import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

const HeroSection = () => {
  return (
    <section className='wrapper section-p h-[calc(100vh-5rem)] '>
      <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-10'>
        <div className=''>
          <SectionTitle
            subtitle='welcome to'
            title='nur store'
            description='lorew shs ddosad asodj aojda aldja adojoa aojosajadaj od  aodjiasi  dsoja aoja aop dpaidaidp 
           aja9di9idaojiaj aodjij'
          />
        </div>

        <div className='relative'>
        

          <div className=" absolute h-[20rem] w-full -left-10 z-[2]">
          <Image
              src='https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600'
              height={1280}
              width={640}
              alt='hero image'
              priority
              className='h-full w-full object-cover rounded-tl-3xl rounded-br-3xl  z-[2] '
            />
          </div>

          <div className='bg-orange/80 h-[20rem] w-full absolute -top-10  bottom-5 z-[1] rounded-tl-3xl rounded-br-3xl'>
           
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
