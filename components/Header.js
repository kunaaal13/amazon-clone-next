import Image from 'next/image';
import React from 'react';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
        </div>

        {/* Search */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 
        hover:bg-yellow-500"
        >
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white  flex items-center text-xs space-x-6 mx-5 whitespace-nowrap">
          <div className="cursor-pointer link">
            <p>Hello Kunaaal</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>

          <div className="cursor-pointer link">
            <p className="">Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="cursor-pointer relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex space-x-3 p-3 pl-6 items-center text-white bg-amazon_blue-light">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          <p>All</p>
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Buisness</p>
        <p className="link">{`Today's`} Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
      </div>
    </header>
  );
}

export default Header;
