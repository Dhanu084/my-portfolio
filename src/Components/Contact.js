import React from "react";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section
      id='contact'
      className='h-full w-screen bg-black text-center text-white flex flex-col  p-4 justify-center items-center'
    >
      <h1 className='text-2xl'>Contact Me</h1>
      <div>
        <small>
          <span>
            <MdEmail className='inline-block' />
          </span>
          <span> dhanuu08@gmail.com</span>
        </small>
      </div>
    </section>
  );
};

export default Contact;
