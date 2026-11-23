"use client";
import { useEffect, useRef } from "react";
import { track } from "@/lib/track";

/** Envía un evento una sola vez al montar (p. ej. ver_tratamiento al abrir la página). */
export default function TrackView({ event, params }: { event: string; params: Record<string, string> }) {
  const sent = useRef("");
  const key = event + JSON.stringify(params);
  useEffect(() => {
    if (sent.current === key) return;
    sent.current = key;
    track(event, params);
  }, [key]);
  return null;
}
