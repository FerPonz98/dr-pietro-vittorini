"use client";
import { useEffect, useRef } from "react";
import { scrollToId } from "./HashLink";
import { usePathname } from "next/navigation";

/** Reveal al hacer scroll, barra de progreso, header que se oculta y contadores. */
export default function Motion() {
  const path = usePathname();
  const first = useRef(true);

  // Navegación desde otra página a "/#seccion": arranca arriba y baja con scroll suave
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    scrollTo({ top: 0, behavior: "instant" });
    const t = setTimeout(() => scrollToId(id), 350);
    return () => clearTimeout(t);
  }, [path]);

  useEffect(() => {
    document.documentElement.classList.add("mo");
    const pending = new Set(document.querySelectorAll<HTMLElement>("[data-rv]:not(.in)"));
    const show = (el: HTMLElement) => {
      if (el.classList.contains("in")) return;
      el.classList.add("in");
      pending.delete(el);
      io.unobserve(el);
      // Tras el reveal se quita el retraso para que el hover responda al instante
      const ms = 1700 + (parseFloat(getComputedStyle(el).transitionDelay) || 0) * 1000;
      setTimeout(() => el.classList.add("done"), ms);
    };
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) show(e.target as HTMLElement); }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    // Un salto rápido (ancla, tecla Fin, scroll brusco) puede "saltarse" elementos sin que el
    // observer los vea intersectar: todo lo que ya quedó por encima del borde inferior se muestra.
    const sweep = () => {
      if (!pending.size) return;
      const limit = innerHeight * 0.94;
      pending.forEach((el) => { if (el.getBoundingClientRect().top < limit) show(el); });
    };
    pending.forEach((el) => io.observe(el));
    sweep();
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sweep); };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("hashchange", onScroll);

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const cio = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement; const end = Number(el.dataset.count);
      cio.unobserve(el);
      if (reduce || el.dataset.counted) return;
      el.dataset.counted = "1";
      const run = () => {
        el.textContent = "0";
        let t0 = 0;
        const step = (t: number) => { t0 ||= t; const p = Math.min(1, (t - t0) / 1400); el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      };
      // Espera a que termine la intro para que el conteo se vea
      const html = document.documentElement;
      if (html.classList.contains("ready")) run();
      else { const mo = new MutationObserver(() => { if (html.classList.contains("ready")) { mo.disconnect(); setTimeout(run, 700); } }); mo.observe(html, { attributes: true, attributeFilter: ["class"] }); }
    }), { threshold: 0.6 });
    counters.forEach((c) => cio.observe(c));

    return () => { io.disconnect(); cio.disconnect(); cancelAnimationFrame(raf); removeEventListener("scroll", onScroll); removeEventListener("hashchange", onScroll); };
  }, [path]);

  useEffect(() => {
    const hdr = document.getElementById("top");
    const bar = document.querySelector<HTMLElement>(".progress");
    let last = scrollY; let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = scrollY; const max = document.documentElement.scrollHeight - innerHeight;
        bar?.style.setProperty("--p", String(max > 0 ? y / max : 0));
        hdr?.classList.toggle("solid", y > 20);
        document.documentElement.classList.toggle("float-on", y > innerHeight * 0.6);
        hdr?.classList.toggle("hide", y > 400 && y > last && !document.documentElement.classList.contains("menu-open"));
        last = y;
      });
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { cancelAnimationFrame(raf); removeEventListener("scroll", onScroll); };
  }, [path]);

  return <div className="progress" aria-hidden />;
}
