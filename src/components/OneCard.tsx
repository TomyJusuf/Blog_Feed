import FooterPage from './FooterPage';
import Navbar from './Navbar';

export default function OneCard() {
  return (
    <div>
      <Navbar />
      <div className="box_one_card  mx-auto max-w-[1300px] container flex flex-wrap h-[84vh] md:h-auto sm:h-auto">
        <div className="w-full h-[450px] flex flex-wrap items-center mx-5 md:w-full  md:h-auto sm:mx-0">
          <div className="w-full h-auto  my-5 flex justify-between items-center uppercase pt-5 mt-5  text-blue-600 font-bold md:justify-between sm:w-full  sm:justify-between sm:mx-2">
            <div className="arrow_left w-64 flex items-center sm:text-[0.7rem] sm:w-52">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-7 h-7  cursor-pointer mr-5"
                  transform="rotate(180)"
                >
                  <path
                    fill="rgb(37 99 235)"
                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  />
                </svg>
              </span>{' '}
              zum nachsten blog
            </div>
            <div className="arrow_right w-56 flex items-center sm:text-[0.7rem] sm:w-44  sm:text-end">
              zum nachsten blog
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-7 h-7 ml-5 cursor-pointer"
                >
                  <path
                    fill="rgb(37 99 235)"
                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="img bg-red-600 w-1/2 h-full md:h-64 md:w-full"></div>
          <div className="body_title w-2/5 h-80 flex flex-wrap items-center ml-16 md:w-full md:ml-0 sm:mx-2">
            <h1 className="text-7xl w-full font-bold xl:text-5xl lg:text-4xl md:text-5xl  md:w-full">
              Einfuhrung in maschinenlles lernen
            </h1>
            <div className="w-full md:mt-[-70px]">
              <div className="h-[3px] w-full bg-slate-300 mb-2" />
              <p className="text-slate-400 font-medium">
                Erstellt am: <span className="text-blue-600">12.12.2024</span>
              </p>
            </div>
          </div>
        </div>
        <p className="w-full  mx-5 h-10 mt-10 sm:mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          atque nemo deserunt, eius odit fugiat! Reiciendis
        </p>
      </div>
      <FooterPage />
    </div>
  );
}
