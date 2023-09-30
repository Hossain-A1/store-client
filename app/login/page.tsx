"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { useState } from "react";

const LoginPage = () => {
  const [modal, setModal] = useState(true);

  const handleLogModal= (modal:boolean)=>{
    setModal(!modal) 
  }

  return (
    <div className='wrapper section-p  flex flex-col items-center justify-center gap-5 min-h-screen'>
      <SectionTitle subtitle='go ahed' title='signup' />

      <div>
        <button onClick={()=>handleLogModal(modal)}>Login/</button>
        <button>Sign-up</button>
      </div>

      <div className={`${modal ? 'visible eq' :'hidden'}`}>
        <div className='flex flex-col gap-3 w-[20rem] h-[20rem] justify-center bg-orange/10 p-10 rounded-lg '>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='saam'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq'
          />
          <label htmlFor='name'>Email</label>
          <input
            type='email'
            placeholder='e-g, user@shop.net'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq'
          />
          <label htmlFor='name'>Password</label>
          <input
            type='password'
            placeholder='e-g, Abc******!'
            className='py-2 px-4 rounded-lg outline-none border-2 border-light focus:border-orange eq'
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
