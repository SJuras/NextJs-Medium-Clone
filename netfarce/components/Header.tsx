import Link from "next/link";

function Header(){
  return(
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="/images/netfarceTitle.png" alt="logo" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/about"><h3 className="cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">About</h3></Link>
          <Link href="/contact"><h3 className="cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">Contact</h3></Link>
          <Link href="/"><h3 className="text-white bg-red-600 px-4 py-1 rounded-full cursor-pointer font-Lustra text-slate-50 transition duration-300">Follow</h3></Link>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-red-600 cursor-pointer font-Lustra text-red-600 transition duration-300 hover:text-slate-50 hover:bg-red-600">Get Started</h3>
      </div>
    </header>
  );
}

export default Header;
