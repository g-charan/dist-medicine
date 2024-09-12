"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <div>
          <div className="flex-1 p-7 h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
