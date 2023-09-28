import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  return (
    <div className='wrapper section-p'>
      <SectionTitle
        subtitle='nur store'
        title='get in tuch'
        description='Contact Us Today and Let Us Know How We Can Serve You Better??'
      />
      <div className='max-lg:flex-col flex justify-between items-start'>
        <div className='nur-store-details flex flex-col gap-5 items-start py-10'>
          <span className='font-medium'>
            Email:{" "}
            <a href='#' className='font-normal underline'>
              nur@ecomerce.com
            </a>
          </span>
          <span className='font-medium'>
            <a href='#' className='font-normal underline'>
              +92383830
            </a>
          </span>
          <h2 className='text-md font-semibold tracking-widest'>
            Support team::
          </h2>
          <span className='font-medium'>
            Email:{" "}
            <a href='#' className='font-normal underline'>
              nur@support.com
            </a>
          </span>
          <span className='font-medium'>
            Phone:{" "}
            <a href='#' className='font-normal underline'>
              +42383832
            </a>
          </span>
          <span className='font-medium'>
            WhatsApp:{" "}
            <a href='#' className='font-normal underline'>
              +02842833
            </a>
          </span>
        </div>

        <div className='mb-20'>
          <span className='font-medium'>Location:</span>
          <figure className='max-lg:w-screen w-[30rem] h-[20rem]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.8158940535295!2d50.04213380901326!3d26.397134981964708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd167122ac33%3A0x6e7b2498312067b0!2sJarir%20Bookstore!5e0!3m2!1sen!2ssa!4v1695914500575!5m2!1sen!2ssa'
              width='600'
              height='450'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full h-full'
            ></iframe>
          </figure>
        </div>
      </div>

      <form className='flex flex-col items-center gap-5 bg-orange/5 rounded-full shadow-xl py-5'>
        <h2>
          How Can We Assist You? Fill Out the Form Below or Email Us Directly
        </h2>
        <input
          type='text'
          placeholder='name'
          className='py-3 w-[16.3rem] xl:w-[30.3rem] px-6 rounded-lg  bg-dark/10 border outline-none border-orange'
        />
        <input
          type='email'
          placeholder='email'
          className='py-3 w-[16.3rem] xl:w-[30.3rem] px-6 rounded-lg bg-dark/10 border outline-none border-orange'
        />
        <textarea
          name='message'
          id=''
          className='w-[16.3rem] xl:w-[30.3rem] py-3 px-6 text-sm border border-orange h-32 outline-none resize-none rounded-lg'
          placeholder='your message'
        ></textarea>
        <button
          type='submit'
          className='py-3 px-6 rounded-lg w-[16.3rem]  xl:w-[30.3rem] bg-dark/10 border outline-none border-orange hover:bg-orange eq'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
