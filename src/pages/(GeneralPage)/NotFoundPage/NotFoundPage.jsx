import Img from "@components/Img";
import Icon  from '@components/Icon';
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Img src="notFoundPage" className="w-[500px]" />
      <div className="flex flex-col items-center justify-center">
        <p className="mt-12 text-3xl text-gray-800 md:text-4xl lg:text-5xl">
          Page Not Found
        </p>
        <p className="mt-8 text-gray-600 md:text-lg lg:text-xl">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="flex items-center px-4 py-2 mt-12 space-x-2 text-gray-100 transition duration-150 bg-blue-600 rounded hover:bg-blue-700"
          title="Return Home"
        >
          <Icon name="arrow" className="rotate-180 svg-white"/>
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
