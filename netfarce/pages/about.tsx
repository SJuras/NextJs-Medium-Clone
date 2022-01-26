import Head from 'next/head'
import Header from '../components/Header';

import { FaMapMarkerAlt } from "react-icons/fa";

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
          <img className="w-3/5 object-contain" src="/images/portrait.png" alt="stjepko juras" />
        </div>

        <div className="flex">
          <h1 className="text-slate-50 font-Lustra">Creator:</h1>
          <h1 className="text-slate-50 font-Lustra">Stjepko Juras</h1>
          <FaMapMarkerAlt className="text-slate-50 my-1 text-xl"/>
          <p className="text-slate-50 font-Lustra text-xl">Zagreb, Croatia</p>
        </div>

        <div className="flex">
          <h1 className="text-slate-50 font-Lustra">Creator:</h1>
          <h1 className="text-slate-50 font-Lustra">Developer, Martial Arts Practitioner, Crypto Enthusiast</h1>
        </div>

        <div className="flex">
          <p className="text-slate-50 font-Lustra text-xl">Description and a little bit about me.</p>
        </div>

        <div className="flex">

        </div>

      </div>

    </div>
  </div>
  );
}
