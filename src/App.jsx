import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown, ArrowUpRight, Menu, X, Phone, MapPin, Clock3,
  Leaf, Scissors, Sparkles, Droplets, Share2
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PHONE_DISPLAY = '+34 954 10 40 49'
const PHONE_LINK = '+34954104049'
const MAP_LINK = 'https://www.google.com/maps/dir/?api=1&destination=Green+Hair+Sevilla,+C.+Francos,+14,+Loc+3,+41004+Sevilla'
const MAP_EMBED = 'https://maps.google.com/maps?q=Green+Hair+Sevilla,+C.+Francos+14,+Loc+3,+Sevilla&t=&z=16&ie=UTF8&iwloc=&output=embed'
const FACEBOOK = 'https://www.facebook.com/greenhairsevilla/'

const copy = {
  es: {
    nav: ['Filosofía', 'Servicios', 'El salón', 'Contacto'],
    eyebrow: 'PELUQUERÍA ECOLÓGICA · AVEDA PARTNER · SEVILLA',
    hero1: 'Naturaleza',
    hero2: 'en tu cabello.',
    heroText: 'Un salón para disfrutar con los cinco sentidos. Creatividad, estilo y productos orgánicos en el Casco Antiguo.',
    book: 'Llamar para reservar',
    discover: 'Descubrir el salón',
    introKicker: 'UN NUEVO CONCEPTO DE PELUQUERÍA',
    introTitle: 'Creatividad, estilo, naturaleza.',
    introText: 'Green Hair Sevilla nace de la convicción de que el cuidado del cabello puede ser también cuidado del planeta. Usamos productos orgánicos y somos partner oficial de Aveda.',
    philosophy: 'Nuestra filosofía',
    serviceKicker: 'CUIDADO CONSCIENTE',
    serviceTitle: 'Servicios pensados para ti.',
    serviceText: 'Desde el corte hasta el color, cada servicio se adapta a tu cabello y a tu ritmo.',
    services: [
      ['Corte & estilo', 'Forma y movimiento personalizados, con técnicas respetuosas con la fibra.'],
      ['Color & mechas', 'Coloración y técnicas de luz con productos conscientes.'],
      ['Tratamientos Aveda', 'Rituales capilares con la línea orgánica de nuestro partner oficial.'],
      ['Peinados & eventos', 'Acabados para el día a día o para una ocasión especial.'],
      ['Asesoría personal', 'Te escuchamos y te guiamos hacia el look que te representa.'],
      ['Cuidado ecológico', 'Productos orgánicos elegidos para cuidar cabello y entorno.']
    ],
    note: 'Los servicios se valoran de forma personalizada. Consulta disponibilidad y precio por teléfono.',
    galleryKicker: 'EL SALÓN',
    galleryTitle: 'Luz, textura, atmósfera.',
    galleryText: 'Fotos reales de Green Hair Sevilla en C. Francos 14. Un espacio cálido en el corazón del Casco Antiguo.',
    contactKicker: 'TE ESPERAMOS',
    contactTitle: 'Reserva tu próxima cita.',
    contactText: 'Llámanos para consultar disponibilidad. Estamos en C. Francos 14, local 3.',
    call: 'Llamar al salón',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario publicado',
    weekdays: 'Martes – viernes',
    monday: 'Lunes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    directions: 'Cómo llegar',
    footerLine: 'Belleza que respeta tu cabello y el planeta.',
    rights: 'Todos los derechos reservados.',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    heroAlt: 'Interior de Green Hair Sevilla',
    imageAlt: 'Green Hair Sevilla'
  },
  en: {
    nav: ['Philosophy', 'Services', 'The salon', 'Contact'],
    eyebrow: 'ECO HAIR SALON · AVEDA PARTNER · SEVILLE',
    hero1: 'Nature',
    hero2: 'in your hair.',
    heroText: 'A salon to enjoy with all five senses. Creativity, style and organic products in the historic centre.',
    book: 'Call to book',
    discover: 'Discover the salon',
    introKicker: 'A NEW APPROACH TO HAIR',
    introTitle: 'Creativity, style, nature.',
    introText: 'Green Hair Sevilla believes hair care can also care for the planet. We use organic products and are an official Aveda partner.',
    philosophy: 'Our philosophy',
    serviceKicker: 'CONSCIOUS CARE',
    serviceTitle: 'Services designed around you.',
    serviceText: 'From cut to colour, every service adapts to your hair and your pace.',
    services: [
      ['Cut & styling', 'Personalised shape and movement with fibre-respecting techniques.'],
      ['Colour & highlights', 'Colour and lightening with a conscious product approach.'],
      ['Aveda treatments', 'Hair rituals with the organic line of our official partner.'],
      ['Styling & events', 'Finishing for everyday wear or a special occasion.'],
      ['Personal advice', 'We listen and guide you toward the look that represents you.'],
      ['Eco care', 'Organic products chosen to care for hair and the planet.']
    ],
    note: 'Services are assessed individually. Please call for availability and prices.',
    galleryKicker: 'THE SALON',
    galleryTitle: 'Light, texture, atmosphere.',
    galleryText: 'Real photos of Green Hair Sevilla at C. Francos 14. A warm space in the heart of the Casco Antiguo.',
    contactKicker: 'FIND US',
    contactTitle: 'Book your next appointment.',
    contactText: 'Call us to check availability. We are at C. Francos 14, local 3.',
    call: 'Call the salon',
    addressLabel: 'Address',
    hoursLabel: 'Published opening hours',
    weekdays: 'Tuesday – Friday',
    monday: 'Monday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    directions: 'Get directions',
    footerLine: 'Beauty that respects your hair and the planet.',
    rights: 'All rights reserved.',
    menu: 'Open menu',
    close: 'Close menu',
    heroAlt: 'Interior of Green Hair Sevilla',
    imageAlt: 'Green Hair Sevilla'
  },
  fr: {
    nav: ['Philosophie', 'Prestations', 'Le salon', 'Contact'],
    eyebrow: 'SALON ÉCOLOGIQUE · PARTENAIRE AVEDA · SÉVILLE',
    hero1: 'La nature',
    hero2: 'dans vos cheveux.',
    heroText: 'Un salon à vivre avec les cinq sens. Créativité, style et produits bio au cœur du Casco Antiguo.',
    book: 'Appeler pour réserver',
    discover: 'Découvrir le salon',
    introKicker: 'UNE AUTRE FAÇON DE COIFFER',
    introTitle: 'Créativité, style, nature.',
    introText: 'Green Hair Sevilla croit que le soin des cheveux peut aussi respecter la planète. Nous utilisons des produits bio et sommes partenaire officiel Aveda.',
    philosophy: 'Notre philosophie',
    serviceKicker: 'SOIN CONSCIENT',
    serviceTitle: 'Des prestations pensées pour vous.',
    serviceText: 'De la coupe à la couleur, chaque soin s’adapte à vos cheveux et à votre rythme.',
    services: [
      ['Coupe & coiffage', 'Forme et mouvement personnalisés, avec des gestes respectueux de la fibre.'],
      ['Couleur & mèches', 'Coloration et lumière avec une approche produit consciente.'],
      ['Soins Aveda', 'Rituels capillaires avec la gamme bio de notre partenaire officiel.'],
      ['Coiffures & événements', 'Finitions pour le quotidien ou une occasion spéciale.'],
      ['Conseil personnalisé', 'Nous vous écoutons et vous guidons vers le look qui vous ressemble.'],
      ['Soin écologique', 'Des produits bio choisis pour le cheveu et pour la planète.']
    ],
    note: 'Les prestations sont évaluées au cas par cas. Appelez pour les disponibilités et tarifs.',
    galleryKicker: 'LE SALON',
    galleryTitle: 'Lumière, texture, atmosphère.',
    galleryText: 'Photos réelles de Green Hair Sevilla, C. Francos 14. Un lieu chaleureux au cœur du Casco Antiguo.',
    contactKicker: 'NOUS TROUVER',
    contactTitle: 'Réservez votre prochain rendez-vous.',
    contactText: 'Appelez-nous pour les disponibilités. Nous sommes au C. Francos 14, local 3.',
    call: 'Appeler le salon',
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires publiés',
    weekdays: 'Mardi – vendredi',
    monday: 'Lundi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    closed: 'Fermé',
    directions: 'Itinéraire',
    footerLine: 'Une beauté qui respecte vos cheveux et la planète.',
    rights: 'Tous droits réservés.',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    heroAlt: 'Intérieur de Green Hair Sevilla',
    imageAlt: 'Green Hair Sevilla'
  }
}

const photos = [
  { src: '/images/maps-1.jpg', shape: 'tall' },
  { src: '/images/maps-2.jpg', shape: 'wide' },
  { src: '/images/maps-3.jpg', shape: 'square' },
  { src: '/images/green-hair-03.jpg', shape: 'wide' }
]

const serviceIcons = [Scissors, Droplets, Leaf, Sparkles, Leaf, Droplets]

function App() {
  const [lang, setLang] = useState('es')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const root = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (prefersReduced) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-visual img', { scale: 1.1 }, { scale: 1, duration: 1.5, ease: 'power2.out' }, 0)
        .fromTo('.hero-kicker', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.2)
        .fromTo('.hero-title span', { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95, stagger: 0.12 }, 0.32)
        .fromTo('.hero-copy', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.6)
        .fromTo('.hero-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.75)
        .fromTo('.hero-badge', { scale: 0.6, opacity: 0, rotate: -20 }, { scale: 1, opacity: 1, rotate: 10, duration: 0.85, ease: 'back.out(1.5)' }, 0.7)

      gsap.to('.hero-visual img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      })

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })

      gsap.utils.toArray('.service-card').forEach((el, i) => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.7, delay: (i % 3) * 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        })
      })

      gsap.utils.toArray('.gallery-item').forEach((el, i) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 1, delay: i * 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' }
        })
      })
    }, root)
    return () => ctx.revert()
  }, [lang])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site" ref={root}>
      <div className="topline">
        <span>CASCO ANTIGUO · SEVILLA</span>
        <span>AVEDA PARTNER · PRODUCTOS ORGÁNICOS</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>
          <span className="brand-mark"><Leaf size={18} strokeWidth={1.5} /></span>
          <span className="brand-name">GREEN HAIR<small>SEVILLA</small></span>
        </a>
        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {t.nav.map((label, i) => (
            <button key={label} onClick={() => goTo(['philosophy', 'services', 'gallery', 'contact'][i])}>{label}</button>
          ))}
        </nav>
        <div className="header-right">
          <div className="langs" aria-label="Language">
            {['es', 'en', 'fr'].map((l) => (
              <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="header-cta" href={`tel:${PHONE_LINK}`}>{t.book}<ArrowUpRight size={14} /></a>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? t.close : t.menu}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-kicker">{t.eyebrow}</p>
            <h1 className="hero-title">
              <span>{t.hero1}</span>
              <span className="italic">{t.hero2}</span>
            </h1>
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={`tel:${PHONE_LINK}`}>
                <Phone size={16} />{t.book}<ArrowUpRight size={16} />
              </a>
              <button className="btn-text" onClick={() => goTo('gallery')}>
                {t.discover}<ArrowDown size={15} />
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero.jpg" alt={t.heroAlt} fetchPriority="high" />
            <div className="hero-shade" />
            <div className="hero-badge" aria-hidden="true">
              <Leaf size={18} />
              <span>ECO · AVEDA</span>
            </div>
          </div>
        </section>

        <section className="intro" id="philosophy">
          <div className="intro-label reveal"><span>01</span>{t.introKicker}</div>
          <div className="intro-main reveal">
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <div className="intro-sign"><span /><em>{t.philosophy}</em></div>
          </div>
          <figure className="intro-photo reveal">
            <img src="/images/maps-2.jpg" alt={t.imageAlt} loading="lazy" />
          </figure>
        </section>

        <section className="services" id="services">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow"><span>02</span>{t.serviceKicker}</p>
              <h2>{t.serviceTitle}</h2>
            </div>
            <p>{t.serviceText}</p>
          </div>
          <div className="services-grid">
            {t.services.map((s, i) => {
              const Icon = serviceIcons[i]
              return (
                <article className="service-card" key={s[0]}>
                  <div className="service-top">
                    <span>0{i + 1}</span>
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                  <h3>{s[0]}</h3>
                  <p>{s[1]}</p>
                </article>
              )
            })}
          </div>
          <p className="note"><span>*</span>{t.note}</p>
        </section>

        <section className="gallery" id="gallery">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow"><span>03</span>{t.galleryKicker}</p>
              <h2>{t.galleryTitle}</h2>
            </div>
            <p>{t.galleryText}</p>
          </div>
          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <figure className={`gallery-item ${photo.shape}`} key={photo.src}>
                <img src={photo.src} alt={`${t.imageAlt} ${i + 1}`} loading="lazy" />
                <span>0{i + 1}</span>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-main reveal">
            <p className="eyebrow"><span>04</span>{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="btn btn-solid" href={`tel:${PHONE_LINK}`}>
              <Phone size={16} />{t.call}<ArrowUpRight size={16} />
            </a>
            <div className="phone-lg">{PHONE_DISPLAY}</div>
          </div>
          <div className="contact-aside reveal">
            <div className="detail">
              <MapPin size={18} />
              <div>
                <span>{t.addressLabel}</span>
                <p>C. Francos, 14, Loc 3<br />Casco Antiguo, 41004 Sevilla</p>
                <a href={MAP_LINK} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={14} /></a>
              </div>
            </div>
            <div className="detail">
              <Clock3 size={18} />
              <div>
                <span>{t.hoursLabel}</span>
                <div className="hours"><b>{t.monday}</b><b>14:00 — 18:30</b></div>
                <div className="hours"><b>{t.weekdays}</b><b>09:30 — 18:30</b></div>
                <div className="hours"><b>{t.saturday}</b><b>09:00 — 13:00</b></div>
                <div className="hours"><b>{t.sunday}</b><b>{t.closed}</b></div>
              </div>
            </div>
          </div>
          <div className="map-frame">
            <iframe title="Green Hair Sevilla" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>
          <span className="brand-mark"><Leaf size={16} /></span>
          <span className="brand-name">GREEN HAIR<small>SEVILLA</small></span>
        </a>
        <p>{t.footerLine}</p>
        <div className="footer-right">
          <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><Share2 size={17} /></a>
          <a href={MAP_LINK} target="_blank" rel="noreferrer" aria-label="Maps"><MapPin size={17} /></a>
          <span>© {new Date().getFullYear()} GREEN HAIR. {t.rights}</span>
        </div>
      </footer>

      <a className="mobile-call" href={`tel:${PHONE_LINK}`}><Phone size={17} />{t.book}</a>
    </div>
  )
}

export default App
