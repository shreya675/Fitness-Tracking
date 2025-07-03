import React from "react";
import { Dumbbell, Menu, X, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Header({ isSidebarOpen, toggleSidebar }) {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className=" absolute right-0 4 mr-2 md:hidden"
          >
            {isSidebarOpen ? (
              <X className="mr-1.5" size={24} />
            ) : (
              <Menu className="mr-1.5" size={24} />
            )}
          </button>
          <Dumbbell className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">Fitness World</h1>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link to="/userprofile">
            <div className="ml-5 bg-blue-100 rounded-full p-2 hover:bg-blue-200 transition duration-300">
              <UserRound className="w-8 h-8 text-blue-700 hover:text-blue-800" />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
