import FooterPage from './FooterPage';
import Navbar from './Navbar';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data/daten';
import { DataType } from '../types/DataType';
import { useState, useEffect } from 'react';

export default function OneCard() {
  const { blog_id } = useParams<{ blog_id?: string }>();
  const n = Number.parseInt(blog_id ?? '1'); // Use 0 as a default if blog_id is undefined

  const [currentIndex, setCurrentIndex] = useState<number>(n);
  console.log('current index:' + currentIndex);

  const handleButtonClick = (increment: number) => {
    console.log('current index (before):', currentIndex);
    const newIndex = currentIndex + increment;
    if (newIndex <= 0) {
      return false;
    } else {
      console.log('data legnth:' + data.length);
      console.log('newIndex:' + newIndex);
      setCurrentIndex((prevIndex) => prevIndex + increment);
    }

    useEffect(() => {
      console.log('useEffect called', newIndex);
      window.history.replaceState({}, '', `/blogId/${newIndex}`);
    }, [newIndex]);
  };

  const foundItem = data.find((item: DataType) => item.id === n);

  if (!foundItem) {
    // Handle the case where the item is not found, e.g., redirect to an error page or show a message
    return <div>Item not found!</div>;
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
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 h-7   mr-5"
                    transform="rotate(180)"
                  >
                    <path
                      fill="rgb(255 255 255)"
                      d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                    />
                  </svg>
                </span>{' '}
                <Link
                  to={`/blogId/${currentIndex}`}
                  className="  hidden"
                  onClick={() => handleButtonClick(-1)}
                >
                  Read more
                </Link>
              </div>
            ) : (
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
                <Link
                  to={`/blogId/${currentIndex}`}
                  className="text-blue-600"
                  onClick={() => handleButtonClick(-1)}
                >
                  Read more
                </Link>
              </div>
            )}

            {/* arrow right */}
            {currentIndex == 15 ? (
              <div className="arrow_right w-56 flex items-center sm:text-[0.7rem] sm:w-44  sm:text-end">
                <Link
                  to={`/blogId/${currentIndex}`}
                  className="text-blue-600 hidden"
                  onClick={() => handleButtonClick(1)}
                >
                  Read more
                </Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 h-7 ml-5 hidden"
                  >
                    <path
                      fill="rgb(37 99 235)"
                      d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                    />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="arrow_right w-56 flex items-center sm:text-[0.7rem] sm:w-44  sm:text-end">
                <Link
                  to={`/blogId/${currentIndex}`}
                  className="text-blue-600"
                  onClick={() => handleButtonClick(1)}
                >
                  Read more
                </Link>
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
            )}
          </div>
          {/* Data loading here */}
          <img
            src={image}
            alt="image"
            className="img w-1/2 h-full md:h-80 md:w-full"
          />
          <div className="body_title w-2/5 h-80 flex flex-row justify-between flex-wrap items-center ml-16 md:w-full md:ml-0 sm:mx-2 md:flex-row  ">
            <h1 className="text-7xl w-full font-bold xl:text-5xl lg:text-4xl md:text-5xl  md:w-full">
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
