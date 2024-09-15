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

      <div className="w-full">
        <div className="p-2">
          <TopNavbar />
        </div>
        <div className="px-7 py-4 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
