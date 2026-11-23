"use client";
import { useEffect, useState } from "react";

const NAME = "Dr. Pietro Vittorini";

/** Intro con el logo. Solo en el inicio y una vez por sesión; el script BOOT de layout.tsx la oculta antes de pintar en los demás casos. */
export default function Intro() {
  const [state, setState] = useState<"show" | "out" | "gone">("show");

  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains("seen")) { setState("gone"); return; }
    try { sessionStorage.setItem("intro-seen", "1"); } catch {}
    document.body.classList.add("locked");
    const t1 = setTimeout(() => setState("out"), 2300);
    const t2 = setTimeout(() => { html.classList.add("ready"); document.body.classList.remove("locked"); }, 2450);
    const t3 = setTimeout(() => { setState("gone"); html.classList.add("seen"); }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); document.body.classList.remove("locked"); };
  }, []);

  if (state === "gone") return null;
  return (
    <div className={`intro${state === "out" ? " out" : ""}`} aria-hidden>
      <div className="stage">
        <div className="ring">
          <svg viewBox="0 0 124 124"><circle cx="62" cy="62" r="60" /></svg>
          <span className="mark" />
        </div>
        <div className="name">
          {NAME.split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${0.8 + i * 0.035}s` }}>{c === " " ? " " : c}</span>
          ))}
        </div>
        <div className="sub">Implantología · Estética dental</div>
        <div className="bar"><i /></div>
      </div>
    </div>
  );
}
