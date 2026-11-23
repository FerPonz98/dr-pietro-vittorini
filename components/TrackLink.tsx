"use client";
import type { AnchorHTMLAttributes } from "react";
import { track } from "@/lib/track";

/** <a> que envía un evento a GA4 al hacer clic. Para usar desde componentes de servidor. */
export default function TrackLink({ event, params, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string; params?: Record<string, string>;
}) {
  return <a {...rest} onClick={(e) => { track(event, params); onClick?.(e); }} />;
}
