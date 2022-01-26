import Head from 'next/head'
import Header from '../components/Header';

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function About() {
  return(
    <div className="bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
      <Head>
        <title>About NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-10 flex justify-center items-center flex-col py-14">
        <div className="py-10">
          <h2 className="text-5xl md:text-6xl text-slate-50 font-Lustra">About</h2>
        </div>

        <div className="flex">
          <div className="flex">
            <img className="w-3/5 object-contain" src="/images/portrait.png" alt="stjepko juras" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-slate-50 font-Lustra">Creator:</h1>
            <h1 className="text-slate-50 font-Lustra">Stjepko Juras</h1>
            <h1 className="text-slate-50 font-Lustra">Developer, Martial Arts Practitioner, Crypto Enthusiast</h1>
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

        <div className="flex">
          <h1 className="text-slate-50 font-Lustra">Creator:</h1>
          <h1 className="text-slate-50 font-Lustra">Developer, Martial Arts Practitioner, Crypto Enthusiast</h1>
        </div>

        <div className="flex">
          <p className="text-slate-50 font-Lustra text-xl">Description and a little bit about me.</p>
          <p className="text-slate-50 font-Lustra text-xl">
            Name Netfarce came from Tom Clancy's Net-Force, and it's awesome!
          </p>
        </div>

        <div className="flex">

        </div>

      </div>

    </div>
  </div>
  );
}
