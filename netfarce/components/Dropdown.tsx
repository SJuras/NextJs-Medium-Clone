import Link from "next/link";


function Dropdown({isOpen, toggle}){
  return(
    <div className={isOpen ? 'block text-center' : 'hidden'} onClick={toggle}>
      <Link href="/about"><h3 className="mb-2 cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">About</h3></Link>
      <Link href="/contact"><h3 className="mb-2 cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">Contact</h3></Link>
      <Link href="/"><h3 className="mb-2 text-white bg-red-600 px-4 py-1 rounded-full cursor-pointer font-Lustra text-slate-50 transition duration-300">Follow</h3></Link>
      <h3 className="mb-2 cursor-pointer font-Lustra text-slate-50 transition duration-300 hover:text-indigo-600">Sign In</h3>
      <h3 className="mb-2 border px-4 py-1 rounded-full border-red-600 cursor-pointer font-Lustra text-red-600 transition duration-300 hover:text-slate-50 hover:bg-red-600">Get Started</h3>
    </div>
  );
}

export default Dropdown;
