import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { return <div>
        <div className="border-b p-1">20% off for 3 days</div>
        { children }
    </div>
}
