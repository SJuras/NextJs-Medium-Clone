import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>NetFarce | Tech Learning Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="flex flex-col md:flex-row justify-around items-center bg-zinc-800 border-y border-black py-14">
          <div className="w-full md:w-3/6 px-10 space-y-5 flex justify-center py-6 md:py-0">
            <img className="w-3/5 object-contain" src="/images/netfarceLogo.png" alt="net farce logo" />
          </div>
          <div className="w-full md:w-3/6 px-10 space-y-5">
            <h1 className="text-center text-5xl md:text-left md:text-6xl max-w-xl font-Lustra font-bold text-slate-50 tracking-wide">NETFARCE</h1>
            <h2 className="text-3xl max-w-xl font-Lustra font-medium text-slate-50">CyberSecurity, Blockchain, Crypto, Neural Networks</h2>
            <h3 className="text-xl text-slate-50 font-Lustra">Blog for learning latest tech</h3>
          </div>
        </div>

        {/* Posts */}


        <Footer />
      </div>
    </div>
  );
}
