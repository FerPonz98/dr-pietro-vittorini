"use client";
import { useRef, useState } from "react";
import { VIDEOS } from "@/lib/data";
import { track } from "@/lib/track";

export default function Videos() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState(-1);
  const toggle = (i: number) => {
    const v = refs.current[i]!;
    if (v.paused) {
      refs.current.forEach((o, j) => { if (j !== i) o?.pause(); });
      v.play().catch(() => setPlaying(-1)); setPlaying(i); track("video_play", { video: VIDEOS[i].title });
    } else { v.pause(); setPlaying(-1); }
  };
  return (
    <div className="vids">
      {VIDEOS.map((x, i) => (
        <article className={`vid${playing === i ? " playing" : ""}`} key={x.src} data-rv style={{ ["--d" as string]: `${i * 120}ms` }}>
          <div className="scr">
            <video ref={(el) => { refs.current[i] = el; }} src={x.src} poster={x.poster} playsInline preload="none"
              onEnded={() => setPlaying(-1)} onPause={() => playing === i && setPlaying(-1)} />
            <button type="button" className="play" onClick={() => toggle(i)}
              aria-label={`${playing === i ? "Pausar" : "Reproducir"} video: ${x.title}`} aria-pressed={playing === i}>
              <span><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6 4l14 8-14 8z" /></svg></span>
            </button>
          </div>
          <div className="cap"><small>{x.who}</small><b>{x.title}</b><span>{x.desc}</span></div>
        </article>
      ))}
    </div>
  );
}
