"use client";

import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import Cal from "../assets/Calendar.png";
import Chart from "../assets/Chart.png";
import Chart_fill from "../assets/Chart_fill.png";
import Chat from "../assets/Chat.png";
import Search from "../assets/Search.png";
import user from "../assets/User.png";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <div className="w-fit">
        <Sidebar MENUS={MENUS} />
      </div>

      <div className="w-full h-full">
        <div className="p-2 h-[2.5rem]">
          <TopNavbar />
        </div>
        <div className="my-4 px-7 w-full h-[92%]">{children}</div>
      </div>
    </div>
  );
}
