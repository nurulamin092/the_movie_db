import Link from "next/link";
import SignInOut from "../auth/SignInOut";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      {/* <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-red-600 text-4xl font-bold">
              MOVIE DB
            </Link>
            <div className="ml-8 space-x-4">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link
                href="/compare-movies"
                className="text-white hover:text-gray-300"
              >
                Compare Movies
              </Link>
              <Link
                href="/watch-list"
                className="text-white hover:text-gray-300"
              >
                Watch Later
              </Link>
            </div>
            <div className="text-white hover:text-gray-300">
              <SignInOut />
            </div>
          </div>

          <div className="relative ">
            <Search />
          </div>
        </div>
      </nav> */}
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-red-600 text-4xl font-bold">
              MOVIE DB
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link
                href="/compare-movies"
                className="text-white hover:text-gray-300"
              >
                Compare Movies
              </Link>
              <Link
                href="/watch-list"
                className="text-white hover:text-gray-300"
              >
                Watch Later
              </Link>
            </div>
          </div>

          {/* Search and SignInOut */}
          <div className="flex items-center space-x-6">
            <div className="text-white">
              <Search />
            </div>
            <div className="text-white">
              <SignInOut />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
