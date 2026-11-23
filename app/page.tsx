import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import FaqList from "@/components/FaqList";
import HashLink from "@/components/HashLink";
import Split from "@/components/Split";
import Videos from "@/components/Videos";
import WaLink from "@/components/WaLink";
import { TIcon, WaIcon } from "@/components/Icons";
import { GENERAL_FAQ, SITE, TREATMENTS, faqJsonLd } from "@/lib/data";

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

export default function Home() {
  const marquee = [...TREATMENTS, ...TREATMENTS];
  return (
    <main id="contenido">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(GENERAL_FAQ)) }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="kicker hero-in" style={d(0)}>Cochabamba · Bolivia</span>
            <h1><Split text="Una sonrisa que se ve *natural* y funciona por años." base={150} /></h1>
            <p className="lead hero-in" style={d(650)}>Implantes, carillas y rehabilitación oral planificados a la medida de tu rostro y tu mordida. Sin tratamientos innecesarios y con un plan claro desde la primera cita.</p>
            <div className="cta-row hero-in" style={d(800)}>
              <WaLink className="btn btn-wa" msg="Hola Dr. Pietro, quisiera agendar una valoración." src="hero"><WaIcon /> Agenda tu valoración</WaLink>
              <HashLink className="btn btn-ghost" href="/#tratamientos">Ver tratamientos</HashLink>
            </div>
            <div className="facts hero-in" style={d(950)}>
              <div><b data-count={TREATMENTS.length}>{TREATMENTS.length}</b>tratamientos</div>
              <div><b>Brasil</b>formación especializada</div>
              <div><b>1 a 1</b>con el doctor</div>
            </div>
          </div>
          <div className="portrait">
            <div className="ph">
              <Image src="/img/dr-pietro-consultorio.jpg" alt="Dr. Pietro Vittorini Sangüeza en su consultorio de Cochabamba" width={900} height={1350} priority sizes="(max-width: 980px) 100vw, 45vw" />
            </div>
            <div className="badge"><span className="flag" /><div><b>{SITE.name}</b><span>Cirujano dentista · Implantólogo</span></div></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="track">{marquee.map((t, i) => <span key={i}>{t.t}</span>)}</div>
      </div>

      <section id="tratamientos">
        <div className="wrap">
          <span className="kicker" data-rv>Tratamientos</span>
          <h2 data-rv style={d(80)}>¿Qué necesita <span className="it">tu sonrisa</span>?</h2>
          <p className="lead" data-rv style={d(160)}>Cada tratamiento tiene su propia página con lo que incluye, cómo es el proceso y las dudas más comunes.</p>
          <div className="tgrid">
            {TREATMENTS.map((t, i) => (
              <Link className="tcard" href={`/tratamientos/${t.slug}`} key={t.slug} data-rv style={d((i % 4) * 90)}>
                <span className="ico"><TIcon name={t.icon} /></span>
                <small>{t.cat}</small><h3>{t.t}</h3><p>{t.short}</p>
                <span className="more">Ver tratamiento →</span>
              </Link>
            ))}
          </div>
          <div className="help" data-rv="scale">
            <div><h3>¿No sabes cuál necesitas?</h3><p>Es lo más común. En la valoración el doctor revisa tu caso y te explica tus opciones, sin compromiso.</p></div>
            <WaLink className="btn" msg="Hola Dr. Pietro, no sé qué tratamiento necesito, quisiera una valoración." src="ayuda">Quiero una valoración →</WaLink>
          </div>
        </div>
      </section>

      <section className="philo">
        <div className="wrap philo-grid">
          <div className="ph" data-rv="clip">
            <Image src="/img/dr-pietro-retrato.jpg" alt="Dr. Pietro Vittorini con instrumental dental" width={567} height={1000} sizes="(max-width: 980px) 100vw, 40vw" />
          </div>
          <div>
            <span className="kicker" data-rv>Filosofía de trabajo</span>
            <blockquote style={{ marginTop: 18 }} data-rv="right">“No hago carillas que se vean <em>falsas</em>.”</blockquote>
            <p data-rv style={d(120)}>La sonrisa ideal no es la más blanca ni la más grande, es la que va con tu cara. El objetivo es que nadie note el tratamiento, solo que sonríes más.</p>
            <p data-rv style={d(200)}>Y lo estético siempre va de la mano con lo funcional: mordida, encías y articulación tienen que estar bien para que el resultado dure.</p>
            <div className="sig" data-rv style={d(280)}>Dr. Pietro Vittorini</div>
          </div>
        </div>
      </section>

      <section id="casos">
        <div className="wrap">
          <span className="kicker" data-rv>Antes y después</span>
          <h2 data-rv style={d(80)}>Resultados <span className="it">reales</span>.</h2>
          <p className="lead" data-rv style={d(160)}>Desliza para comparar. Casos del consultorio, publicados con autorización de cada paciente.</p>
          <div className="ba-grid">
            {/* Reemplazar con fotos reales: <BeforeAfter title="..." before="/casos/1-antes.jpg" after="/casos/1-despues.jpg" /> */}
            <BeforeAfter title="Diseño de sonrisa con carillas" />
            <BeforeAfter title="Implante dental" d={120} />
            <BeforeAfter title="Blanqueamiento" d={240} />
          </div>
          <p className="note">Espacio reservado: aquí se cargan las fotos reales de antes y después que envíe el consultorio.</p>
        </div>
      </section>

      <section id="videos" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="kicker" data-rv>Desde el consultorio</span>
          <h2 data-rv style={d(80)}>Conócelo <span className="it">antes</span> de tu cita.</h2>
          <p className="lead" data-rv style={d(160)}>El doctor explica sus tratamientos y un paciente cuenta su experiencia. Toca un video para verlo con sonido.</p>
          <Videos />
          <a className="ig" href={SITE.instagram} target="_blank" rel="noopener">Más videos en <span className="nw">{SITE.instagramHandle} →</span></a>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap train">
          <div>
            <span className="kicker" data-rv>Formación</span>
            <h2 data-rv="left">Escuela <span className="it">brasileña</span>, atención en Cochabamba.</h2>
            <p className="lead" data-rv style={d(120)}>El Dr. Pietro se especializó en Brasil, referente mundial en implantología y odontología estética. De esa formación vienen su forma de planificar cada caso y su búsqueda de resultados naturales.</p>
          </div>
          <div className="pillars">
            {[["Diagnóstico primero", "Se estudia el caso completo antes de empezar cualquier tratamiento."], ["Técnica precisa", "Procedimientos quirúrgicos y estéticos cuidados al detalle."], ["Resultados naturales", "Dientes que se ven tuyos, en armonía con tu rostro."]].map(([b, s], i) => (
              <div className="pill" key={b} data-rv="right" style={d(i * 120)}><span className="n">0{i + 1}</span><div><b>{b}</b><span>{s}</span></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews" id="resenas">
        <div className="wrap">
          <div className="rv-head">
            <div><span className="kicker" data-rv>Reseñas</span><h2 data-rv style={d(80)}>Lo que dicen <span className="it">los pacientes</span>.</h2></div>
            <a className="qr" href={SITE.reviewUrl} target="_blank" rel="noopener" data-rv="scale"><span className="box" aria-hidden /><div><b>¿Ya te atendiste?</b><span>Déjanos tu reseña en Google →</span></div></a>
          </div>
          <div className="rgrid">
            {/* Reemplazar con reseñas reales de Google */}
            {[0, 1, 2].map((i) => (
              <div className="rcard" key={i} data-rv style={d(i * 120)}>
                <div><div className="stars" aria-hidden>★★★★★</div><p>Aquí se mostrará una reseña real de Google del consultorio.</p></div>
                <small>Nombre del paciente · Google</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="kicker" data-rv>Tu primera visita</span>
          <h2 data-rv style={d(80)}>Empezar es <span className="it">simple</span>.</h2>
          <div className="steps">
            {[["Escribes por WhatsApp", "Cuentas qué te gustaría mejorar y eliges día y hora."], ["Valoración", "El doctor revisa tu boca y tu mordida y, si hace falta, pide estudios."], ["Plan claro", "Opciones, tiempos y presupuesto explicados, sin letra chica."], ["Tratamiento y control", "Se realiza el tratamiento y se hace seguimiento para cuidar el resultado."]].map(([b, p], i) => (
              <div className="step" key={b} data-rv style={d(i * 110)}><span className="n">{i + 1}</span><b>{b}</b><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap faq-grid">
          <div>
            <span className="kicker" data-rv>Preguntas frecuentes</span>
            <h2 data-rv style={d(80)}>Lo que más <span className="it">preguntan</span>.</h2>
            <p className="lead" data-rv style={d(160)}>¿Otra duda? Escríbele al doctor por WhatsApp.</p>
          </div>
          <FaqList items={GENERAL_FAQ} />
        </div>
      </section>

      <section id="contacto" style={{ paddingTop: 0 }}>
        <div className="wrap contact">
          <div className="cbox" data-rv="left">
            <span className="kicker">Contacto</span>
            <h2>Hablemos de <span className="it">tu sonrisa</span>.</h2>
            <div className="clist">
              <WaLink msg="Hola Dr. Pietro, quisiera agendar una cita." src="contacto"><span className="ic"><WaIcon /></span><span><small>WhatsApp</small>{SITE.phoneLabel}</span></WaLink>
              <div><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg></span><span><small>Consultorio</small>{SITE.city}</span></div>
              <a href={SITE.instagram} target="_blank" rel="noopener"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></span><span><small>Instagram</small>{SITE.instagramHandle}</span></a>
            </div>
            <WaLink className="btn" msg="Hola Dr. Pietro, quisiera agendar una cita." src="contacto-btn"><WaIcon /> Escribir por WhatsApp</WaLink>
          </div>
          <div className="map" data-rv="right">
            <iframe title="Ubicación del consultorio" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
            <a className="btn go" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`} target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg> Cómo llegar</a>
          </div>
        </div>
      </section>
    </main>
  );
}
