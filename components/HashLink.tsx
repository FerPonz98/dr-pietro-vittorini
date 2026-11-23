"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Desplaza suavemente hasta #id (instantáneo con prefers-reduced-motion). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

/**
 * Link a "/#seccion". En la misma página hace scroll suave sin recargar; desde otra página
 * navega con scroll={false} y <Motion /> hace el scroll suave cuando la nueva página ya está montada.
 */
export default function HashLink({ href, onClick, ...rest }: ComponentProps<typeof Link> & { href: string }) {
  const path = usePathname();
  const [target, hash = ""] = href.split("#");
  return (
    <Link href={href} scroll={false} {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (!hash || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if ((target || path) === path) {
          e.preventDefault();
          history.pushState(history.state, "", `#${hash}`);
          // Un frame después: deja que el menú móvil se cierre y libere el scroll
          requestAnimationFrame(() => scrollToId(hash));
        }
      }} />
  );
}
