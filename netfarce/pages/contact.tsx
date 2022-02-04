import Head from 'next/head'
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';

import { useState, useEffect } from 'react';


export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData);
  }

  return(
    <div className="bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto pt-20">
      <Head>
        <title>Contact NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <div className="px-10 flex justify-center items-center flex-col py-14">
        <div className="py-10">
          <h2 className="text-5xl md:text-6xl text-slate-50 font-Lustra">Contact</h2>
        </div>

        {/* contact form */}
        <form method="post" onSubmit={handleOnSubmit} className="w-full md:w-3/4 bg-zinc-800 p-4">
          <div className="w-full mb-6">
            <input
              type="text"
              name="name"

              className="text-white w-full p-2 bg-zinc-800 border-b-2 border-blue-600 outline-none transition duration-300 focus:border-red-600"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full mb-6">
            <input
              type="email"
              name="email"

              className="text-white w-full p-2 bg-zinc-800 border-b-2 border-blue-600 outline-none transition duration-300 focus:border-red-600"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full mb-8">
            <input
              type="text"
              name="subject"

              className="text-white w-full p-2 bg-zinc-800 border-b-2 border-blue-600 outline-none transition duration-300 focus:border-red-600"
              placeholder="Subject"
            />
          </div>
          <div className="w-full mb-4">
            <textarea
              name="message"
              className="text-white w-full p-2 resize-none h-64 bg-zinc-800 border-2 border-blue-600 outline-none transition duration-300 focus:border-red-600"
              placeholder="Your Message"
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 px-6 py-2 rounded-full cursor-pointer font-Lustra text-slate-50 outline-none transition duration-300 hover:bg-red-600 focus:bg-red-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
