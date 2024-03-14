import { Unbounded, Gruppo } from "next/font/google";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const gruppo = Gruppo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gruppo",
  weight: ["400"],
});

export const metadata = {
  title: "Worf Football Services",
  description: "Helping you perfect your game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${gruppo.variable}`}>
      <body>
        {" "}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
