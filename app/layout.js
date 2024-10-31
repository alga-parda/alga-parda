import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "alga parda",
  description: "coletivo artísitca 2024-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
