import HTMLReactParser from "html-react-parser";
import React from "react";

const Header = ({ title }) => {
  return (
    <div className="h-[50px] sticky top-0 bg-[#191919] z-30 text-[30px] flex justify-center items-center text-white">
      {HTMLReactParser(title)}
    </div>
  );
};

export default Header;
