"use client";
import TopNavbar from "@/components/TopNavbar";
import Image from "next/image";
import { useState } from "react";
import img1 from "../assets/logo.png";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(true);
  const Menus = [
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
    <html lang="en">
      <body>
        <div className="flex overflow-hidden">
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-purple-900 h-screen p-5  pt-8 relative duration-300`}
          >
            <Image
              alt="smtg"
              src={img1}
              className={`absolute cursor-pointer -right-3 top-9 w-7  border-purple-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex items-center gap-x-4">
              <Image
                alt="smtg"
                src={img1}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
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
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-white hover:text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white"} `}
                >
                  <Image alt="smtg" src={img1} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-col w-full">
            <div className="p-2">
              <TopNavbar />
            </div>
            <div className="flex-1 p-7 h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
