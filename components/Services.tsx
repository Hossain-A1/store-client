import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import SectionTitle from "./shared/SectionTitle";
import TarmsSection from "./explore/trams/TarmsSection";
const Services = () => {
  return (
    <section className="container section-p space-y-10 mt-10">
     <div>
      <SectionTitle subtitle="Providing" title="Services"/>
     <div className=' flex flex-col  items-center'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center  items-center'>
        <div className='w-[15rem] h-[15rem] bg-dark flex flex-col justify-center  lg:ml-0 gap-3 items-center shadow-md rounded-xl'>
          <div className='bg-light/70 w-14 h-14 rounded-full flex items-center justify-center'>
            <TbTruckDelivery className='lg:text-4xl text-2xl text-orange  ' />
          </div>
          <h3 className='capitalize text-sm text-light font-normal'>
            Super fast and free Delivery
          </h3>
        </div>
        <div className='space-y-5 '>
          <div className='w-[15rem] h-[15rem] bg-orange flex flex-col justify-center gap-5 items-center shadow-md rounded-xl '>
            <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
              <MdSecurity className='lg:text-4xl text-2xl text-violet-700 text-orange  ' />
            </div>

            <h3 className='capitalize text-sm text-light font-normal'>
              Non-contact Shipping{" "}
            </h3>
          </div>
          <div className='w-[15rem] h-[15rem] bg-blue flex flex-col justify-center gap-3 items-center shadow-md rounded-xl'>
            <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
              <GiReceiveMoney className='lg:text-4xl text-2xl text-violet-700 text-orange ' />
            </div>
            <h3 className='capitalize text-sm text-light font-normal'>
              Mony-back Guaranteed
            </h3>
          </div>
        </div>
        <div className='w-[15rem] h-[15rem] bg-violet flex flex-col justify-center gap-3  items-center shadow-md rounded-xl'>
          <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
            <RiSecurePaymentLine className='lg:text-4xl text-2xl text-violet-700 text-orange ' />
          </div>

          <h3 className='capitalize text-sm text-light font-normal'>
            Super secure payment system
          </h3>
        </div>
      </div>
      </div>
     </div>
      <TarmsSection/>
    </section>

   
  );
};

export default Services;
