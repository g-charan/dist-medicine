"use client";

import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <div className="w-fit">
        <Sidebar />
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
