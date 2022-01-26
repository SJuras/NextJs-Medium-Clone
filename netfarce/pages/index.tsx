import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>NetFarce | Tech Learning Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col md:flex-row justify-around items-center bg-yellow-400 border-y border-black py-14">
        <div className="px-6 space-y-5">

        </div>
        <div className="px-10 space-y-5">
          <h1 className="text-center text-5xl md:text-left md:text-6xl max-w-xl font-Lustra font-bold">NETFARCE</h1>
          <h2 className="text-3xl max-w-xl font-Lustra font-bold">CyberSecurity, Blockchain, Crypto, Neural Networks</h2>
        </div>
      </div>

      {/* Posts */}
    </div>
  );
}
