import React, { useState } from "react";
import AdminSidebarLink from "./AdminSidebarLink";
import { VscHome } from "react-icons/vsc";
import { BsFileEarmarkPdf } from "react-icons/bs";
import {
  RiArticleLine,
  RiVideoLine,
  RiMoneyDollarCircleLine,
  RiVipCrownLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbCheckupList, TbUserPlus } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BiCategory, BiImage, BiLogOut } from "react-icons/bi";
const Sidebar = () => {
  const [manage, setManage] = useState(false);
  const [subscription, setSubscription] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <aside className="w-80 min-h-screen bg-dreamLabColor4 pl-16 pr-10">
      <ul className="mt-8 text-textColor2 flex flex-col gap-3 text-xl">
        <li className="font-medium mb-2">Admin Dashboard</li>
        <AdminSidebarLink
          to=""
          icon={<VscHome size={25} />}
          title="Dashboard"
        />
        <AdminSidebarLink
          to="/books"
          icon={<IoBookOutline size={25} />}
          title="Books"
        />
        <AdminSidebarLink
          to="/plans"
          icon={<RiVideoLine size={25} />}
          title="Plans"
        />
        <AdminSidebarLink
          to="/product"
          icon={<RiVipCrownLine size={25} />}
          title="Subscription Plan"
        />
        <div className="border-t text-white text-opacity-25 my-3"></div>
        <li
          className="flex items-center justify-between"
          onClick={() => {
            setManage(!manage);
            setSubscription(false);
          }}
        >
          <h2 className="">Manage</h2>
          <RiArrowDownSLine size={25} />
        </li>
        {manage && (
          <div className="mt-5 flex flex-col gap-3">
            <AdminSidebarLink
              to="/books"
              icon={<IoBookOutline size={25} />}
              title="Books"
            />
            <AdminSidebarLink
              to="/ebooks"
              icon={<BsFileEarmarkPdf size={25} />}
              title="E-books"
            />
            <AdminSidebarLink
              to="/articles"
              icon={<RiArticleLine size={25} />}
              title="Articles"
            />
            <AdminSidebarLink
              to="/podcasts"
              icon={<MdOutlineKeyboardVoice size={25} />}
              title="Podcasts"
            />
            <AdminSidebarLink
              to="/videos"
              icon={<RiVideoLine size={25} />}
              title="videos"
            />
            <AdminSidebarLink
              to="/plans"
              icon={<TbCheckupList size={25} />}
              title="Plans"
            />
            <AdminSidebarLink
              to="/categories"
              icon={<BiCategory size={25} />}
              title="Category"
            />

            <AdminSidebarLink
              to="/videos"
              icon={<FiUsers size={25} />}
              title="Users"
            />
            <AdminSidebarLink
              to="/videos"
              icon={<BiImage size={25} />}
              title="Banner"
            />
            <AdminSidebarLink
              to="/videos"
              icon={<RiMoneyDollarCircleLine size={25} />}
              title="Payment method"
            />
          </div>
        )}
        <div className="border-t text-white text-opacity-25 my-3"></div>
        <li
          className="flex items-center justify-between"
          onClick={() => {
            setSubscription(!subscription);
            setManage(false);
          }}
        >
          <h2 className="">Subscription</h2>
          <RiArrowDownSLine size={25} />
        </li>
        {subscription && (
          <div className="mt-5 flex flex-col gap-3">
            <AdminSidebarLink
              to="/subscribers"
              icon={<TbUserPlus size={25} />}
              title="Subscriber"
            />
            <AdminSidebarLink
              to="/subscriptions"
              icon={<RiVipCrownLine size={25} />}
              title="Subscription Plan"
            />
          </div>
        )}
        <div className="border-t text-white text-opacity-25 my-3"></div>
      </ul>
    </aside>
  );
};

export default Sidebar;
