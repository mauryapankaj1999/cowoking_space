import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}