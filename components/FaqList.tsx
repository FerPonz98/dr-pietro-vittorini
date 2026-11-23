"use client";
import { useId, useState } from "react";
import type { Faq } from "@/lib/data";

export default function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);
  const uid = useId();
  return (
    <div>
      {items.map(([q, a], i) => (
        <div className={`qa${open === i ? " open" : ""}`} key={q} data-rv style={{ ["--d" as string]: `${i * 60}ms` }}>
          <h3>
            <button type="button" id={`${uid}-q${i}`} aria-expanded={open === i} aria-controls={`${uid}-a${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}<i aria-hidden />
            </button>
          </h3>
          <div className="a" id={`${uid}-a${i}`} role="region" aria-labelledby={`${uid}-q${i}`} inert={open !== i}><div><p>{a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
