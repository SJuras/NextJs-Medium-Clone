import Head from 'next/head'
import Header from '../components/Header';

export default function About() {
  return(
    <div className="bg-zinc-900">
      <div className="max-w-7xl mx-auto">
      <Head>
        <title>Contact NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="px-10">
        <h2 className="text-slate-50">Contact</h2>
      </div>

    </div>
  </div>
  );
}
