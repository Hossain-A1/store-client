import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className='wrapper section-p '>
      <div className='flex flex-col gap-5'>
        <SectionTitle subtitle='welcome to' title='Nur E-commerce webpage' />

       <div className="flex gap-10">
       <ul className='flex flex-col gap-5 list-disc w-2/3'>
          <li className=''>
            It offers free shipping on orders over $50 and easy returns within
            30 days.
          </li>
          <li>
            It accepts multiple payment options, including credit cards, PayPal,
            and Apple Pay.
          </li>
          <li>
            It has a user-friendly interface that allows customers to browse,
            search, and filter products by category, price, rating, and more.
          </li>
          <li>
            It has a loyalty program that rewards customers with points for
            every purchase, which can be redeemed for discounts and coupons.
          </li>
          <li>
            It has a blog that provides tips, trends, and inspiration for
            shoppers.
          </li>
        </ul>



      <div className='about-image w-[50rem] h-[30rem]'>
        <Image src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="amout-image" width={1280} height={640} priority className="w-full h-full object-cover"/>
      </div>
       </div>
      </div>

    </div>
  );
};

export default About;
