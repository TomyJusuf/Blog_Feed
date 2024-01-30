import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="navbar w-full bg-blue-600 text-white py-5 pl-5 flex items-center gap-x-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-10 w-10"
        >
          <path
            fill="#ffffff"
            d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
          />
        </svg>
        <h1 className="text-4xl font-bold uppercase ">
          <Link to={'/'}>CSAW blog</Link>
        </h1>
      </div>
    </div>
  );
}
