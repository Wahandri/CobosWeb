import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tarimas Cobos | Instalación de Suelos y Tarimas en Málaga",
  description: "Especialistas en instalación de tarima flotante, suelos laminados, vinílicos y parquet. Servicio profesional en Málaga y alrededores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
