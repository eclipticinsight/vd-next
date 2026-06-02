import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Toaster } from "react-hot-toast";

import Header from "../components/layout/Header";
import ConditionalFooter from "../components/layout/ConditionalFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>{children}</main>

        <ConditionalFooter />

        {/* GLOBAL POPUP */}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />

      </body>
    </html>
  );
}