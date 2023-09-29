import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Benefits = () => {
  return (
    <section className='wrapper section-p'>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-5  items-center'>
        <div className='w-[15rem] h-[15rem] bg-orange/10 flex flex-col justify-center ml-10 max-lg:ml-0 gap-3 items-center shadow-md rounded-xl'>
          <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
            <TbTruckDelivery className='lg:text-4xl text-2xl text-orange  ' />
          </div>
          <h3 className='capitalize text-slate-900 font-normal'>
            Super fast and free Delivery
          </h3>
        </div>
        <div className='space-y-10 '>
          <div className='w-[15rem] h-[15rem] bg-orange/10 flex flex-col justify-center gap-5 items-center shadow-md rounded-xl'>
            <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
              <MdSecurity className='lg:text-4xl text-2xl text-violet-700 text-orange  ' />
            </div>

            <h3 className='capitalize text-slate-900 font-normal'>
              Non-contact Shipping{" "}
            </h3>
          </div>
          <div className='w-[15rem] h-[15rem] bg-orange/10 flex flex-col justify-center gap-3 items-center shadow-md rounded-xl'>
            <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
              <GiReceiveMoney className='lg:text-4xl text-2xl text-violet-700 text-orange ' />
            </div>
            <h3 className='capitalize text-slate-900 font-normal'>
              Mony-back Guaranteed
            </h3>
          </div>
        </div>
        <div className='w-[15rem] h-[15rem] bg-orange/10 flex flex-col justify-center gap-3 -ml-10 max-lg:-ml-0 items-center shadow-md rounded-xl'>
          <div className='bg-light/90 w-14 h-14 rounded-full flex items-center justify-center'>
            <RiSecurePaymentLine className='lg:text-4xl text-2xl text-violet-700 text-orange ' />
          </div>

          <h3 className='capitalize text-slate-900 font-normal'>
            Super secure payment system
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
