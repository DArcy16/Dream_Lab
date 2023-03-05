import React from "react";
import { BiBell } from "react-icons/bi";
import Logo from "../../assets/Icon.svg";
import profileImg from "../../assets/profile.png";
const Header = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-full px-24 py-3 pr-16 bg-white shadow-lg">
      <div className="flex w-1/2 items-center justify-between">
        <img src={Logo} alt="" />
        <h2 className="text-2xl font-bold capitalize">{children}</h2>
      </div>

      <div className="flex items-center gap-10 self-center">
        <figure className="bg-dreamLabColor1 rounded-full p-2">
          <BiBell size={25} className="text-white" />
        </figure>
        <div className="flex items-center gap-2">
          <img src={profileImg} alt="" />
          <h4 className="font-bold">Aura Admin</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
