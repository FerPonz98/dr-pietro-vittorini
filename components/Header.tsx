"use client";
import Link from "next/link";
import { useState } from "react";
import WaLink from "./WaLink";

const NAV = [["/#tratamientos", "Tratamientos"], ["/#casos", "Antes y después"], ["/#videos", "Videos"], ["/#resenas", "Reseñas"], ["/#contacto", "Contacto"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="top">
      <div className="wrap nav">
        <Link className="logo" href="/"><span className="mk" /><span><b>Dr. Pietro Vittorini</b><small>Implantología · Estética dental</small></span></Link>
        <nav className={`links${open ? " open" : ""}`} id="links">
          {NAV.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
        </nav>
        <WaLink className="btn btn-wa" msg="Hola Dr. Pietro, quisiera agendar una valoración." src="header">Agendar valoración</WaLink>
        <button className="burger" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
