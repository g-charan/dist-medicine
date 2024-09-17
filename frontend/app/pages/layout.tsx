"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import Header from "../../components/Header"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <div className="w-fit">
        <Sidebar />
      </div>

      <div className="w-full h-full overflow-auto">
        <div className="p-3">
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        </div>
        <div className="my-4 px-7 w-full h-[92%]">{children}</div>
      </div>
    </div>
  );
}
