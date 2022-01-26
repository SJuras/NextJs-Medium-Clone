import Head from 'next/head'
import Header from '../components/Header';

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
        <h2 className="text-slate-50 font-Lustra">About</h2>
        <h1 className="text-slate-50 font-Lustra">Creator:</h1>
      </div>

    </div>
  </div>
  );
}
