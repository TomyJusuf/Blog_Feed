export default function FooterPage() {
  return (
    <div className="footer bg-blue-600 w-full flex justify-center items-center h-auto sm:mt-10">
      <div className="footer_body w-2/3 h-auto  flex flex-wrap gap-x-20 justify-center items-center">
        <div className="footer_body_address w-96 h-auto  text-white">
          <h1 className="font-bold uppercase text-3xl mb-7 mt-10 sm:text-2xl ">
            Coding-school-blog
          </h1>
          <div className="adrress">
            <ul className="text-xl">
              <li>Siemensstrasse 20</li>
              <li>9020 Klagenfurt am Worthersee</li>
              <li>0676 8432 23246</li>
            </ul>
          </div>
        </div>
        <div className="footer_body_social w-96 h-auto mt-5">
          <h1 className="text-white font-bold  text-2xl mb-5">
            Lass und Freunde bleiben:
          </h1>
          <div className="social_icons flex gap-x-5">
            <div className="instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12"
              >
                <path
                  fill="#f4f5f5"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </div>
            <div className="linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12"
              >
                <path
                  fill="#f4f5f5"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </div>
          </div>
        </div>{' '}
        <div className="footer_body_address w-96 h-12  mt-16  text-white font-bold mb-5">
          2024 / Coding-School am Worthersee
        </div>
      </div>
    </div>
  );
}
