"use client";
import Image from "next/image";
import { createContext, useState } from "react";
import Cal from "../../frontend/app/assets/Calendar.png";
import Chart from "../../frontend/app/assets/Chart.png";
import Chart_fill from "../../frontend/app/assets/Chart_fill.png";
import Chat from "../../frontend/app/assets/Chat.png";
import arrow from "../../frontend/app/assets/control.png";
import logo from "../../frontend/app/assets/logo.png";
import Search from "../../frontend/app/assets/Search.png";
import user from "../../frontend/app/assets/User.png";
import SidebarItem from "./SidebarItem";

export const SidebarContext = createContext<any>(false);

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const MENUS = [
    { title: "Dashboard", src: Chart_fill },
    {
      title: "Inventory",
      src: Chat,
      submenu: [
        { title: "View inventory", route: "/pages/hospital/Inventory" },
        { title: "Inventory Statistics", route: "/pages/hospital/Inventory" },
      ],
    },
    {
      title: "Orders",
      src: user,
      submenu: [
        { title: "View Orders", route: "/pages/hospital/Orders" },
        { title: "Request New Order", route: "/pages/hospital/Inventory" },
        { title: "Orders status", route: "/pages/hospital/Inventory" },
        { title: "Track your order", route: "/pages/hospital/Inventory" },
      ],
    },
    {
      title: "Testings",
      src: Cal,
      submenu: [
        { title: "View Testings", route: "" },
        { title: "Request New Testing", route: "" },
        { title: "Testing Status", route: "" },
      ],
    },
    {
      title: "Vendors",
      src: Search,
      submenu: [
        { title: "View Vendors", route: "" },
        { title: "Market Place", route: "" },
        { title: "Testing Status", route: "" },
      ],
    },
    { title: "Analytics", src: Chart, route: "/Analytics" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20"
      } bg-purple-900 h-screen p-5  pt-8 relative duration-300 m-0`}
    >
      <Image
        alt="smtg1"
        src={arrow}
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
          <>
            <SidebarContext.Provider value={[open, setOpen]}>
              <SidebarItem Menu={Menu} index={index} />
            </SidebarContext.Provider>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
