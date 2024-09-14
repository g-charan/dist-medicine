"use client";

import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Sidebar />
      </div>

      <div className="flex-col w-full">
        <div className="p-2">
          <TopNavbar />
        </div>
        <div className="flex-1 p-7 h-full">{children}</div>
      </div>
    </div>
  );
}
