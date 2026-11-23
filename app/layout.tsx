import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Motion from "@/components/Motion";
import TrackLink from "@/components/TrackLink";
import WaLink from "@/components/WaLink";
import { WaIcon } from "@/components/Icons";
import { SITE, TREATMENTS } from "@/lib/data";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-wght-normal.woff2", style: "normal", weight: "100 900" },
    { path: "./fonts/fraunces-latin-wght-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces", display: "swap",
});
const manrope = localFont({ src: "./fonts/manrope-latin-wght-normal.woff2", weight: "200 800", variable: "--font-manrope", display: "swap" });

// Solo IDs con formato válido: el valor se inserta en un script inline
const GA_ID = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID ?? "") ? process.env.NEXT_PUBLIC_GA_ID! : "";
const GSC = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s · Dr. Pietro Vittorini" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "es_BO", siteName: SITE.name, title: SITE.title,
    description: "Sonrisas naturales que también funcionan. Agenda tu valoración por WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  ...(GSC ? { verification: { google: GSC } } : {}),
};
export const viewport: Viewport = { themeColor: "#16302d" };

// Corre antes de pintar: marca que hay JS, salta la intro si ya se vio, si no es el inicio
// (quien llega desde Google a un tratamiento va directo al contenido) o con reduced-motion,
// y libera el contenido aunque el bundle tarde o falle.
const BOOT = `(function(){var d=document.documentElement,ready=function(){d.classList.add('ready')};d.classList.add('js');
var skip=location.pathname!=='/'||matchMedia('(prefers-reduced-motion: reduce)').matches;try{skip=skip||!!sessionStorage.getItem('intro-seen')}catch(e){skip=true}
if(skip){d.classList.add('seen');requestAnimationFrame(function(){requestAnimationFrame(ready)})}
setTimeout(function(){if(!d.classList.contains('mo')){d.classList.remove('js');d.classList.add('seen');ready()}},6000)})()`;

const dentistLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Pietro Vittorini Sangüeza · Implantología y Estética Dental",
  description: SITE.description,
  url: SITE.url,
  telephone: "+" + SITE.phone,
  image: SITE.url + "/og-image.jpg",
  address: { "@type": "PostalAddress", addressLocality: "Cochabamba", addressCountry: "BO" },
  areaServed: SITE.city,
  sameAs: [SITE.instagram],
  founder: { "@type": "Person", name: "Pietro Vittorini Sangüeza", jobTitle: "Cirujano Dentista · Implantólogo" },
  availableService: TREATMENTS.map((t) => ({ "@type": "MedicalProcedure", name: t.t, url: `${SITE.url}/tratamientos/${t.slug}` })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <link rel="preload" href="/img/logo-blanco.png" as="image" crossOrigin="anonymous" fetchPriority="high" />
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <noscript><style>{".intro{display:none}"}</style></noscript>
        {GA_ID && (
          // gtag definido antes de hidratar: los eventos tempranos quedan en cola en dataLayer
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');` }} />
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistLd) }} />
        <a className="skip" href="#contenido">Saltar al contenido</a>
        <Intro />
        <Motion />
        <Header />
        {children}
        <footer>
          <div className="wrap">
            <span>© {new Date().getFullYear()} {SITE.name} · Implantología y Estética Dental · {SITE.city}</span>
            <span><Link href="/privacidad">Privacidad</Link> · Diseño web por <TrackLink href={SITE.author.url} target="_blank" rel="noopener" event="click_credito_web">{SITE.author.name}</TrackLink></span>
          </div>
        </footer>
        <WaLink className="float" msg="Hola Dr. Pietro, quisiera información." src="flotante" ariaLabel="Escribir por WhatsApp"><WaIcon /><b>WhatsApp</b></WaLink>
        {GA_ID && <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />}
      </body>
    </html>
  );
}
