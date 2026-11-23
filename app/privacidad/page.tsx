import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Cómo se usan los datos de navegación en el sitio de ${SITE.name}.`,
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <main id="contenido">
      <section className="tp-hero">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="kicker">Privacidad</span>
          <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", margin: "16px 0 24px" }}>Tu privacidad en este sitio</h1>
          <div style={{ display: "grid", gap: 20 }}>
            <p className="lead">
              Este sitio usa Google Analytics para medir las visitas de forma anónima: cuántas personas lo visitan,
              qué páginas ven y en qué botones hacen clic. Esa información se usa solo para mejorar el sitio.
            </p>
            <p className="lead">
              Google Analytics usa cookies propias para contar visitas. No registra tu nombre, tu teléfono ni tu
              dirección de correo, y Google Analytics 4 no almacena direcciones IP. Puedes bloquear estas cookies
              desde la configuración de tu navegador sin que el sitio deje de funcionar.
            </p>
            <p className="lead">
              El sitio no tiene formularios. Si escribes por WhatsApp, la conversación ocurre en WhatsApp y se rige
              por sus propias condiciones. Si tienes dudas, escríbenos al {SITE.phoneLabel}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
