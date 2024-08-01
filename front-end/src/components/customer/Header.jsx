import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header className="bg-white text-black flex items-center justify-between px-4 py-4 shadow-md relative">
      <div className="flex items-center space-x-4">
        <div className="text-black font-bold text-xl">DUCK SHOP</div>
      </div>
      {!searchVisible && (
        <nav className="flex-grow flex justify-center space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-gray-500">Trang Chủ</a>
          <a href="#products" className="hover:text-gray-500">Sản Phẩm</a>
          <a href="#contact" className="hover:text-gray-500">Liên Hệ</a>
        </nav>
      )}
      <div className="flex items-center space-x-4">
        <button onClick={toggleSearch} className="hover:text-gray-500">
          {searchVisible ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <SearchIcon className="w-6 h-6" />
          )}
        </button>
        <UserIcon className="w-6 h-6 hover:text-gray-500" />
        <CartIcon className="w-6 h-6 hover:text-gray-500" />
      </div>
      {searchVisible && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <input
            type="text"
            className="w-1/2 px-4 py-2 text-black border-2 border-black"
            placeholder="Tìm kiếm"
          />
          <button onClick={toggleSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">&times;</button>
        </div>
      )}
    </header>
  );
};

export default Header;
