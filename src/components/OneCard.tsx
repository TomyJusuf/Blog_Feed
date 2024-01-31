import FooterPage from './FooterPage';
import Navbar from './Navbar';
import { useParams, Link } from 'react-router-dom';

import { DataType } from '../types/DataType';
import { useState } from 'react';
import { useGetAllInfo } from '../hooks/useGetAllInfo';

export default function OneCard() {
  const { data } = useGetAllInfo();
  const { blog_id } = useParams<{ blog_id?: string }>();
  // Check if data is an array
  const dataArray: DataType[] = []; // New array to store individual objects

  // Check if data is an array
  if (Array.isArray(data)) {
    // Push each object from the data array to the new array
    data.forEach((item) => {
      dataArray.push(item);
    });
  }

  // Now dataArray contains individual objects, you can get its length

  // Use 0 as a default if blog_id is undefined
  const n = Number.parseInt(blog_id ?? '0');

  const [currentIndex, setCurrentIndex] = useState<number>(n);

  let newIndex: number;
  const handleButtonClick = (increment: number) => {
    newIndex = currentIndex + increment;
    if (newIndex <= 0) {
      return false;
    } else {
      setCurrentIndex((prevIndex) => prevIndex + increment);
    }
  };

  const foundItem = dataArray.find((item: DataType) => item.id === n);

  if (!foundItem) {
    // Handle the case where the item is not found, e.g., redirect to an error page or show a message
    return (
      <div className="flex flex-wrap justify-center items-center h-[100vh] ">
        <Link
          to={'/'}
          className="absolute mt-56 text-5xl uppercase font-bold underline"
        >
          → home ←
        </Link>{' '}
        <h1 className="text-center text-7xl font-bold uppercase w-full">
          Page not found <span className="text-orange-600">(404)</span>
        </h1>
      </div>
    );
  }
  const { title, desc, date, image } = foundItem;

  return (
    <div>
      <Navbar />

      <div className="box_one_card  mx-auto max-w-[1300px] container flex flex-wrap h-[84vh] md:h-auto sm:h-auto">
        <div className=" relative w-full h-[450px] flex flex-wrap items-center mx-5 md:w-full  md:h-auto sm:mx-0">
          {/* arrow buttons are here */}
          <div className="w-full h-auto  my-5 flex justify-between items-center uppercase pt-5 mt-5  text-blue-600 font-bold md:justify-between sm:w-full  sm:justify-between sm:mx-2">
            {currentIndex == 1 ? (
              <div className="arrow_left w-64 flex items-center sm:text-[0.7rem] sm:w-52">
                <Link
                  to={`/blogId/${currentIndex - 1}`}
                  className="  hidden"
                  onClick={() => handleButtonClick(-1)}
                ></Link>
                <div className="hidden">Read more</div>
              </div>
            ) : (
              <div className="arrow_left w-64 flex items-center sm:text-[0.7rem] sm:w-52">
                <Link
                  to={`/blogId/${currentIndex - 1}`}
                  className="text-blue-600"
                  onClick={() => handleButtonClick(-1)}
                >
                  {' '}
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
                </Link>
                <div className="">Read more</div>
              </div>
            )}

            {/* arrow right */}
            {currentIndex == dataArray.length ? (
              <div className="arrow_right w-56 items-center sm:text-[0.7rem] sm:w-44  sm:text-end hidden"></div>
            ) : (
              <div className="arrow_right w-56 flex items-center sm:text-[0.7rem] sm:w-44  sm:text-end">
                Read more
                <Link
                  to={`/blogId/${currentIndex + 1}`}
                  className="text-blue-600"
                  onClick={() => handleButtonClick(1)}
                >
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
                  </span>{' '}
                </Link>
              </div>
            )}
          </div>
          {/* Data loading here */}
          <img
            src={image}
            alt="image"
            className="img w-1/2 h-full md:h-80 md:w-full"
          />
          <div className="body_title w-2/5 h-80 flex flex-row justify-between flex-wrap items-center ml-16 md:w-full md:ml-0 sm:mx-2 md:flex-row  ">
            <h1 className="text-5xl w-full font-bold xl:text-5xl lg:text-4xl md:text-5xl  md:w-full">
              {title}
            </h1>
            <div className="w-full md:mt-[70px]">
              <div className="h-[3px] w-full bg-slate-300 mt-10 " />
              <p className="text-slate-400 font-medium mt-5 sm:mx-5">
                Erstellt am: <span className="text-blue-600">{date}</span>
              </p>
            </div>{' '}
          </div>{' '}
          <h5 className="w-full  mx-5  mt-10 sm:mt-20 font-medium  md:absolute top-[74%] md:left-[-19px] md:h-auto md:w-[550px] md:top-[70%] md:pl-0  sm:px-5 sm:w-auto sm:h-auto">
            <em>"{desc}"</em>
          </h5>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}
