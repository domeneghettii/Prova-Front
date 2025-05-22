import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "my ordering app",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto pra mostrar o Home com meu perfil e depois os pedidos.",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
