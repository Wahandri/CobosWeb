import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating/WhatsAppFloating";
import { company } from "../data/company";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tarimas Cobos | Instalación de Suelos y Tarimas en Málaga",
  description: "Especialistas en instalación de tarima flotante, suelos laminados, vinílicos y parquet. Servicio profesional en Málaga y alrededores.",
  keywords: "tarimas, suelos, laminados, parquet, Málaga, instalación",
  authors: [{ name: company.name }],
  openGraph: {
    title: "Tarimas Cobos | Instalación de Suelos y Tarimas en Málaga",
    description: "Especialistas en instalación de tarima flotante, suelos laminados, vinílicos y parquet. Servicio profesional en Málaga.",
    url: "https://tarimascobos.es",
    siteName: company.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: `${company.name} - Instalación de suelos en Málaga`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarimas Cobos | Instalación de Suelos y Tarimas en Málaga",
    description: "Especialistas en instalación de tarima flotante, suelos laminados, vinílicos y parquet.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  description: "Especialistas en instalación de tarima flotante, suelos laminados, vinílicos y parquet en Málaga.",
  url: "https://tarimascobos.es",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.province,
    postalCode: company.address.zip,
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7213,
    longitude: -4.4214,
  },
  areaServed: {
    "@type": "State",
    name: "Málaga",
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  image: "https://tarimascobos.es/logoCobos.png",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
