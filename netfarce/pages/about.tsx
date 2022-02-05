import Head from 'next/head'
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';

import { useState, useEffect } from 'react';


import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto pt-20">
      <Head>
        <title>About NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isOpen={isOpen} toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <div className="px-10 flex justify-center items-center flex-col py-14">
        <div className="py-10">
          <h2 className="text-5xl md:text-6xl text-slate-50 font-Lustra">About</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="flex mb-4 md:mb-0 justify-center items-center">
            <img className="w-3/5 object-contain" src="/images/portrait.png" alt="stjepko juras" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-2">
              <h1 className="text-slate-50 font-Lustra text-xl">Creator:</h1>
              <h1 className="text-slate-50 font-Lustra text-2xl">Stjepko Juras</h1>
            </div>
            <h1 className="text-slate-50 font-Lustra text-lg mb-4">Developer, Martial Arts Practitioner, Crypto Enthusiast</h1>
            <h1 className="text-slate-50 font-Lustra text-xl mb-2">About Me:</h1>
            <p className="text-slate-50 font-Lustra text-lg">
              Full-stack web developer, MERN wrangler transitioning to Web3.0
            </p>
            <p className="text-slate-50 font-Lustra text-lg">
              Eager to learn all there is to know about inner workings of Blockchain technology,
              Neural Networks and OpenCV.
            </p>
            <p className="text-slate-50 font-Lustra text-lg">
              Life-long fan of cyberpunk genre.
            </p>
            <p className="text-slate-50 font-Lustra text-lg mb-4">
              Name of the blog came from Tom Clancy's "Net-Force", cause Net-Force is awesome!
            </p>
            <a href="https://github.com/SJuras" className="">
              <div className="flex group">
                <FaLink className="text-slate-50 my-1 mr-2 text-xl transition duration-300 group-hover:text-red-600" />
                <p className="text-slate-50 font-Lustra text-xl transition duration-300 group-hover:text-red-600">My Portfolio</p>
              </div>
            </a>
            <a href="https://github.com/SJuras" className="">
              <div className="flex group">
                <FaGithub className="text-slate-50 my-1 mr-2 text-xl transition duration-300 group-hover:text-red-600" />
                <p className="text-slate-50 font-Lustra text-xl transition duration-300 group-hover:text-red-600">Github</p>
              </div>
            </a>
            <a href="https://github.com/SJuras" className="">
              <div className="flex mb-2 group">
                <FaFacebook className="text-slate-50 my-1 mr-2 text-xl transition duration-300 group-hover:text-red-600" />
                <p className="text-slate-50 font-Lustra text-xl transition duration-300 group-hover:text-red-600">Facebook</p>
              </div>
            </a>
            <div className="flex">
              <FaMapMarkerAlt className="text-slate-50 my-1 mr-2 text-xl" />
              <p className="text-slate-50 font-Lustra text-xl">Zagreb, Croatia</p>
            </div>
            <div className="flex">
              <FaEnvelope className="text-slate-50 my-1 mr-2 text-xl" />
              <p className="text-slate-50 font-Lustra text-xl">jurasstjepko@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  </div>
  );
}
