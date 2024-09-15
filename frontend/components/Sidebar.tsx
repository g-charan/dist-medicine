"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../frontend/app/assets/Calendar.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const MENUS = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-purple-900 h-screen p-5  pt-8 relative duration-300`}
    >
      <Image
        alt="smtg1"
        src={logo}
        className={`absolute cursor-pointer -right-3 top-9 w-7  border-purple-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex items-center gap-x-4">
        <Image
          alt="smtg2"
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {MENUS.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-white hover:text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white"} `}
          >
            <Image alt="smtg" src={logo} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
