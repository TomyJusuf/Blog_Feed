import { Link } from 'react-router-dom';
import { DataType } from '../types/DataType';
import { useGetAllInfo } from '../hooks/useGetAllInfo';

type DataProps = {
  sendData: DataType[];
};
export default function MainPage({ sendData }: DataProps) {
  return (
    <div>
      <div className="body grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-1 max-w-full  flex-wrap gap-4  p-3 justify-center   mx-auto">
        {sendData.map((item: DataType) => {
          const { id, title, desc, date, image } = item;

          return id === 1 ? (
            <div
              key={id}
              data-id={id}
              className="box col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-1 row-span-1 w-full h-auto bg-gray-300 mx-auto flex flex-wrap"
            >
              <img
                src={image}
                alt=""
                className="w-[50%] h-96 lg:w-[50%] md:w-full"
              />
              <div className="box_body p-5 w-[48%] h-96 md:w-full flex flex-wrap justify-between">
                <h1 className="title text-blue-600 text-4xl font-bold lg:text-3xl">
                  {title}
                </h1>
                {desc.length > 90 ? (
                  <p className="py-3 ">{desc.substring(0, 100) + '...'}</p>
                ) : (
                  <p className="py-3 ">{desc}</p>
                )}

                <Link
                  to={`/blogId/${id}`}
                  className="bg-blue-600  text-center  p-2  uppercase font-bold text-white my-20 lg:my-14"
                >
                  Mehr erfahren
                  {/* <a href={`/blogId/${id}`}>
                    </a> */}
                </Link>

                <div className="w-full ">
                  <div className="w-full  bg-gray-400 h-[2px]" />
                  <div className="dateTime first-letter:uppercase">
                    erstellt am:{' '}
                    <span className="text-blue-600 font-medium">{date}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={id}
              data-id={id}
              className="box col-span-1 xl:col-span-2 lg:col-span-2 md:col-span-1   h-auto bg-gray-300  flex flex-wrap"
            >
              <img src={image} alt="" className="w-full h-60 lg:h-56 md:h-72" />
              <div className="box_body p-5">
                {title.length < 35 ? (
                  <h1 className="title text-blue-600 text-3xl mb-10  font-bold lg:text-xl   ">
                    {title}
                  </h1>
                ) : (
                  <h1 className="title text-blue-600 text-3xl font-bold lg:text-xl   ">
                    {title}
                  </h1>
                )}

                {desc.length > 100 ? (
                  <p className="py-3">{desc.substring(0, 100) + '...'}</p>
                ) : (
                  <p className="py-3 ">{desc}..</p>
                )}

                <Link
                  to={`/blogId/${id}`}
                  className="bg-blue-600 p-2 uppercase font-bold text-white  mb-5"
                >
                  {/* <a href={`/blogId/${id}`}>
                    </a> */}
                  Mehr erfahren
                </Link>
                <div className="w-full my-4 bg-gray-400 h-[2px]" />
                <div className="dateTime first-letter:uppercase">
                  erstellt am:{' '}
                  <span className="text-blue-600 font-medium">{date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
