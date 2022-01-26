import Head from 'next/head'
import Header from '../components/Header';

export default function About() {
  return(
    <div className="bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
      <Head>
        <title>Contact NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-10 flex justify-center items-center flex-col py-14">
        <div className="py-10">
          <h2 className="text-5xl md:text-6xl text-slate-50 font-Lustra">Contact</h2>
        </div>



      </div>

    </div>
  </div>
  );
}
