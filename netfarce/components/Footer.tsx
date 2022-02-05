

function Footer() {
  return(
    <footer className="mt-4 px-6 flex justify-center items-center flex-col py-8 border-t-2 border-white">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h4 className="text-2xl text-white font-Lustra">NETFARCE</h4>
          <p className="text-white font-Lustra">
            Blog for learning latest tech
          </p>
        </div>
        <div className="w-full md:w-1/2">right</div>
      </div>
      <div className="w-full text-white flex flex-col md:flex-row pt-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <p>
          &copy; Netfarce 2022
        </p>
        <p>
          Created with by: Sarif-Design
        </p>
      </div>
    </footer>
  );
}

export default Footer;
