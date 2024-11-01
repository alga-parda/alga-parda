import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "alga parda",
  description: "coletivo artísitca 2024-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="text-sm sm:text-base min-h-screen flex-col">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
