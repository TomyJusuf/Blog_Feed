import { DataType } from '../types/DataType';

type DataProps = {
  sendData: DataType[];
};
export default function MainPage({ sendData }: DataProps) {
  return (
    <div>
      <div className="body flex flex-row flex-wrap gap-3 p-3 justify-center w-full ">
        {sendData.map((item: DataType) => {
          const { id, title, desc, date, image } = item;
          console.log(id);
          return (
            <div
              key={id}
              className="box w-[550px] h-auto bg-gray-300  flex flex-wrap"
            >
              <img src={image} alt="" className="w-full h-72 " />
              <div className="box_body p-5">
                <h1 className="title text-blue-600 text-4xl font-bold ">
                  {title}
                </h1>
                <p className="py-3">{desc}</p>
                <button className="bg-blue-600 p-2 uppercase font-bold text-white  mb-5">
                  Mehr erfahren
                </button>
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
