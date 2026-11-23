"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HashLink from "./HashLink";
import WaLink from "./WaLink";
import { WaIcon } from "./Icons";
import { SITE } from "@/lib/data";

const NAV = [["/#tratamientos", "Tratamientos"], ["/#casos", "Antes y después"], ["/#videos", "Videos"], ["/#resenas", "Reseñas"], ["/#contacto", "Contacto"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const burger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Cerrar al cambiar de página
  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("menu-open", open);
    // Mientras el panel está abierto, el resto de la página no recibe foco ni lectores de pantalla
    const behind = document.querySelectorAll<HTMLElement>("main, footer, .float");
    behind.forEach((el) => (el.inert = open));
    if (!open) return;
    panel.current?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); burger.current?.focus(); } };
    const onResize = () => { if (innerWidth > 980) setOpen(false); };
    addEventListener("keydown", onKey); addEventListener("resize", onResize);
    return () => { removeEventListener("keydown", onKey); removeEventListener("resize", onResize); behind.forEach((el) => (el.inert = false)); html.classList.remove("menu-open"); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="top">
        <div className="wrap nav">
          <Link className="logo" href="/" onClick={close}><span className="mk" aria-hidden /><span><b>Dr. Pietro Vittorini</b><small>Implantología · Estética dental</small></span></Link>
          <nav className="links" aria-label="Principal">
            {NAV.map(([h, l]) => <HashLink key={h} href={h}>{l}</HashLink>)}
          </nav>
          <WaLink className="btn btn-wa" msg="Hola Dr. Pietro, quisiera agendar una valoración." src="header">Agendar valoración</WaLink>
          <button ref={burger} type="button" className={`burger${open ? " x" : ""}`} aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </header>
      <div id="menu-movil" ref={panel} className={`mpanel${open ? " open" : ""}`} inert={!open} role="dialog" aria-modal="true" aria-label="Menú">
        <nav className="mlinks" aria-label="Menú móvil">
          {NAV.map(([h, l], i) => (
            <HashLink key={h} href={h} onClick={close} style={{ ["--i" as string]: i }}>
              <span className="mi">0{i + 1}</span>{l}<span className="arr" aria-hidden>→</span>
            </HashLink>
          ))}
        </nav>
        <div className="mfoot" style={{ ["--i" as string]: NAV.length }}>
          <WaLink className="btn btn-wa" msg="Hola Dr. Pietro, quisiera agendar una valoración." src="menu-movil"><WaIcon /> Agendar valoración</WaLink>
          <p><span>{SITE.city}</span><a href={SITE.instagram} target="_blank" rel="noopener" onClick={close}>{SITE.instagramHandle}</a></p>
        </div>
      </div>
    </>
  );
}
