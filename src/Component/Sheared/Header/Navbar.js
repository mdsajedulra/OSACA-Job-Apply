import React from "react";
import { Link } from "react-router-dom";

const Navbartop = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 py-2.5 rounded">
        <div class="container flex flex-wrap  items-center justify-center mx-auto">
          <div class="w-full " id="navbar-default">
            <ul class="flex flex-col font-bold p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="hover:text-blue-900">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Download Application Copy</Link>
              </li>
              <li>
                <Link to="/">Admit Card</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbartop;
