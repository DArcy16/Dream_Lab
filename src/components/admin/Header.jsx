import React, { useEffect, useRef, useState } from "react";
import { BiBell } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import Logo from "../../assets/Icon.svg";
import profileImg from "../../assets/profile.png";
const Header = ({ children }) => {
  const [isMenuVisible, setIsMunuVisible] = useState(false);
  const avatarRef = useRef();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  function toggleMenu() {
    setIsMunuVisible((visible) => !visible);
  }

  function hideMenu(event) {
    if (event.target !== avatarRef.current) {
      setIsMunuVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", hideMenu);
    return () => document.removeEventListener("click", hideMenu);
  }, []);
  return (
    <div className="flex items-center justify-between w-full px-24 py-3 pr-16 bg-white shadow-lg">
      <img src={Logo} alt="" />
      <h2 className="text-2xl font-bold capitalize">{children}</h2>

      <div className="flex items-center gap-10 self-center">
        <figure className="bg-dreamLabColor1 rounded-full p-2">
          <BiBell size={25} className="text-white" />
        </figure>
        <div className="flex items-center gap-2">
          <img src={profileImg} alt="" ref={avatarRef} onClick={toggleMenu} />
          <h4 className="font-bold">Aura Admin</h4>
        </div>
      </div>
      {isMenuVisible ? (
        <div className=" absolute z-50 right-0 justify-end flex w-full ">
          <div
            onClick={logout}
            className="fixed top-[10vh] w-1/6 h-fit bg-white p-8 rounded-lg shadow-md flex gap-1 align-middle cursor-pointer hover:text-dreamLabColor1"
          >
            <AiOutlineLogout size={25} />
            Logout
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
