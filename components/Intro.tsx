"use client";
import { useEffect, useState } from "react";

const NAME = "Dr. Pietro Vittorini";

export default function Intro() {
  const [state, setState] = useState<"show" | "out" | "gone">("show");

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setState("gone");
      document.body.classList.add("ready");
      return;
    }
    document.body.classList.add("locked");
    const t1 = setTimeout(() => setState("out"), 2300);
    const t2 = setTimeout(() => { document.body.classList.add("ready"); document.body.classList.remove("locked"); }, 2500);
    const t3 = setTimeout(() => { setState("gone"); sessionStorage.setItem("intro-seen", "1"); }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
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
            <span key={i} style={{ animationDelay: `${0.8 + i * 0.035}s` }}>{c === " " ? " " : c}</span>
          ))}
        </div>
        <div className="sub">Implantología · Estética dental</div>
        <div className="bar"><i /></div>
      </div>
    </div>
  );
}
