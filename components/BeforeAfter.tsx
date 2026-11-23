"use client";
import { useRef, useState } from "react";

/** Comparador antes/después. Pasar `before` y `after` con las fotos reales del consultorio. */
export default function BeforeAfter({ title, before, after, d = 0 }: { title: string; before?: string; after?: string; d?: number }) {
  const [p, setP] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const clamp = (v: number) => Math.min(100, Math.max(0, v));
  const set = (x: number) => { const r = ref.current!.getBoundingClientRect(); setP(clamp(((x - r.left) / r.width) * 100)); };
  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 20 : 5;
    const next = { ArrowLeft: p - step, ArrowDown: p - step, ArrowRight: p + step, ArrowUp: p + step, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault(); setP(clamp(next));
  };
  return (
    <figure className="ba" data-rv style={{ ["--d" as string]: `${d}ms` }}>
      <div className="cmp" ref={ref} role="slider" tabIndex={0} aria-label={`Comparar antes y después: ${title}`}
        aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p)} aria-valuetext={`${Math.round(p)}% antes`}
        onKeyDown={onKey}
        onPointerDown={(e) => { drag.current = true; ref.current!.setPointerCapture(e.pointerId); set(e.clientX); }}
        onPointerMove={(e) => drag.current && set(e.clientX)}
        onPointerUp={() => (drag.current = false)}
        onPointerCancel={() => (drag.current = false)}>
        <div className="side before" style={before ? { background: `url(${before}) center/cover` } : undefined}><span className="tag">ANTES</span>{!before && "Foto de antes"}</div>
        <div className="side after" style={{ clipPath: `inset(0 0 0 ${p}%)`, ...(after ? { background: `url(${after}) center/cover` } : {}) }}><span className="tag">DESPUÉS</span>{!after && "Foto de después"}</div>
        <div className="handle" style={{ left: `${p}%` }} aria-hidden />
      </div>
      <figcaption><b>{title}</b><span>Caso del consultorio</span></figcaption>
    </figure>
  );
}
