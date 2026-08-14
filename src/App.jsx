import { useEffect, useState } from 'react'
import './App.css'

const remote = 'https://www.meetnaqi.com/'

const services = [
  [
    '💻',
    '01',
    'Web Development',
    '// WordPress, Shopify & WooCommerce',
    'Responsive website pages, product-page improvements, content updates, and frontend fixes for WordPress, Shopify, and WooCommerce stores.',
    ['HTML / CSS / JS', 'WordPress', 'Shopify', 'WooCommerce'],
  ],
  [
    '📦',
    '02',
    'Catalog Management',
    '// product data & storefront quality',
    'Accurate product listings with clear titles, descriptions, images, categories, tags, attributes, and variant information.',
    ['Product Listings', 'Categories & Tags', 'Variants', 'Image Management'],
  ],
  [
    '📊',
    '03',
    'Inventory & Data Updates',
    '// CSV, SKU, price & stock',
    'Structured product data updates to keep SKU details, pricing, stock, and catalog information organized and reliable.',
    ['CSV Import / Export', 'SKU Management', 'Price Updates', 'Stock Updates'],
  ],
  [
    '✅',
    '04',
    'Catalog Quality Checks',
    '// accuracy before publishing',
    'Product-data review and storefront checks to identify missing images, inconsistent details, broken links, and listing errors.',
    ['Data Validation', 'Product Audits', 'Content Checks', 'Storefront QA'],
  ],
]

const tools = [
  ['⚡', 'VS Code'],
  ['🛍️', 'Shopify'],
  ['🛒', 'WooCommerce'],
  ['W', 'WordPress'],
  ['🐙', 'GitHub'],
  ['📊', 'Microsoft Excel'],
  ['📄', 'CSV Files'],
  ['🖥️', 'XAMPP'],
  ['🤖', 'ChatGPT'],
  ['🧠', 'Claude'],
  ['✨', 'Gemini'],
  ['📐', 'Canva'],
]

const tech = [
  ['⌘', 'HTML5', 'Markup language for structuring content on the web.'],
  ['#', 'CSS3', 'Stylesheet language for designing responsive layouts.'],
  ['JS', 'JavaScript', 'Programming language that brings interactivity to websites.'],
  ['⚛', 'React', 'JavaScript library for fast, interactive user interfaces.'],
  ['≈', 'Tailwind CSS', 'Utility-first CSS framework for custom designs.'],
  ['php', 'PHP', 'Server-side scripting for dynamic web applications.'],
  ['◉', 'MySQL', 'Relational database for storing and managing data.'],
  ['W + S', 'WordPress & Shopify', 'Powerful platforms for websites and stores.'],
]

const projects = [
  {
    platform: 'Shopify · Product Catalog Management',
    image: '/images/uspatriotcolors-product.png',
    title: 'US Patriot Colors',
    description:
      'Imported products from a source website, organized product tags and categories, added model information, and combined same-name products into clear variant options.',
    skills: ['Product Import', 'Tags & Categories', 'Product Models', 'Variants'],
    link: 'https://uspatriotcolors.com/',
  },
  {
    platform: 'WooCommerce · Product Catalog & Localization',
    image: '/images/computer-controls-catalog.png',
    title: 'Computer Controls',
    description:
      'Imported products from a source website and supported multilingual storefront content in French, German, and Italian for a broader customer experience.',
    skills: [
      'Product Import',
      'WooCommerce',
      'French / German / Italian',
      'Catalog Management',
    ],
    link: 'https://ccontrols.shop/',
  },
  {
    platform: 'Squarespace · Website Development',
    image: '/images/bay-linguistic-project.png',
    title: 'Bay Linguistic Advancement Center',
    description:
      'Built the website based on client requirements, created and organized picnic events, and set up a configured Payment Methods page.',
    skills: ['Website Development', 'Squarespace', 'Event Pages', 'Payment Setup'],
    link: 'https://www.baylinguistic.org/',
  },
  {
    platform: 'WooCommerce · Product Import',
    image: '/images/emallshop-project.png',
    title: 'emallshop',
    description:
      'Scraped and imported products from the source website to populate the store catalog on WooCommerce.',
    skills: ['Product Scraping', 'WooCommerce', 'Catalog Import', 'Data Migration'],
    link: 'https://sha.lk/',
  },
]

function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      document
        .querySelector('.navbar')
        ?.classList.toggle('scrolled', window.scrollY > 30)

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dot = document.querySelector('.cursor-glow')
    if (!dot) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.opacity = '1'
    }

    const onLeave = () => {
      dot.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    let raf
    const tick = () => {
      x += (mouseX - x) * 0.15
      y += (mouseY - y) * 0.15
      dot.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (!e.target.closest('.nav-inner')) setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [open])

  return (
    <>
      <div className="cursor-glow" />

      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={close}>
            <div className="brand-mark">
              <img
                src={`${remote}assets/images/logo_fd7d03734eb644e3a55f8a7817667542.png?v=1784729360`}
                alt="Samran Anjum"
              />
            </div>

            <div>
              <b>Samran Anjum</b>
              <small>Jr. Web Developer & Catalog Manager</small>
            </div>
          </a>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            {[
              ['Home', 'home'],
              ['About', 'about'],
              ['Experience', 'experience'],
              ['Project', 'project'],
              ['Skills', 'skills'],
              ['Contact', 'contact'],
            ].map(([label, id]) => (
              <a key={id} onClick={close} href={`#${id}`}>
                {label}
              </a>
            ))}

            <a onClick={close} href="#contact" className="btn primary">
              Let's Talk
            </a>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="orbits">
          <i />
          <i />
          <i />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="status">
              <span /> OPEN TO JUNIOR WEB DEVELOPMENT & E-COMMERCE CATALOG ROLES
            </div>

            <h1>
              WEB <em>DEVELOPMENT</em> & <strong>PRODUCT</strong>
              <br />
              CATALOG MANAGEMENT.
            </h1>

            <p>
              I'm <b>Samran Anjum</b> — a Junior Web Developer and Catalog
              Manager. I manage product listings, categories, images, pricing,
              inventory data, and website updates for Shopify, WooCommerce, and
              WordPress stores.
            </p>

            <div className="cta">
              <a className="btn primary" href="#project">
                View My Work →
              </a>

              <a className="btn ghost" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="stats">
              {[
                ['Shopify', 'Platform'],
                ['WooCommerce', 'Platform'],
                ['WordPress', 'CMS'],
                ['4+', 'Projects Delivered'],
              ].map((s) => (
                <div key={s[0]}>
                  <b>{s[0]}</b>
                  <span>{s[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile">
            <img src="/images/samran-anjum-profile.png" alt="Samran Anjum" />
          </div>
        </div>
      </header>

      <div className="marquee">
        <div>
          {[
            'Web Development',
            'Product Catalogs',
            'Shopify',
            'WooCommerce',
            'WordPress',
            'Product Data',
            'Web Development',
            'Product Catalogs',
            'Shopify',
            'WooCommerce',
            'WordPress',
            'Product Data',
          ].map((x, index) => (
            <span key={`${x}-${index}`}>{x}</span>
          ))}
        </div>
      </div>

      <Section
        id="about"
        eyebrow="ABOUT ME"
        title={
          <>
            WHO <mark>I AM.</mark>
          </>
        }
        sub="A quick look at what I do and how I work."
      >
        <div className="identity-grid" style={{ marginBottom: 60 }}>
          <div>
            <p>
              I'm Samran Anjum, a Junior Web Developer and Catalog Manager
              based in Pakistan. I help e-commerce stores stay accurate,
              organized, and customer-ready — combining frontend web-development
              skills with detailed product catalog management for Shopify,
              WooCommerce, and WordPress stores.
            </p>

            <ul>
              <li>⚡ Responsive website updates and frontend fixes</li>
              <li>📦 Accurate product listings, variants, and attributes</li>
              <li>✅ Product-data and storefront quality checks</li>
            </ul>
          </div>

          <div className="terminal">
            <header>
              <i />
              <i />
              <i />
              <span>samran@portfolio:</span>
            </header>

            <pre>
              <b>// e-commerce stack</b>
              {'\n'}
              <em>const</em> samran = {'{'}
              {'\n'} role:{' '}
              <strong>"Jr. Web Developer & Catalog Manager"</strong>,
              {'\n'} skills: [
              {'\n'} <strong>"Web Development"</strong>,
              {'\n'} <strong>"Catalog Management"</strong>,
              {'\n'} <strong>"Product Data QA"</strong>
              {'\n'} ],
              {'\n'} available: <em>true</em>
              {'\n'}
              {'}'}
              <span className="cursor" />
            </pre>
          </div>
        </div>

        <Eyebrow>WHAT I DO</Eyebrow>
        <h2 style={{ margin: '15px 0 36px' }}>
          WEB & CATALOG. <mark>ONE WORKFLOW.</mark>
        </h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={s[1]}
              className="service"
              style={{ '--d': `${i * 0.09}s` }}
            >
              <div className="service-top">
                <span>{s[0]}</span>
                <small>{s[1]}</small>
              </div>

              <h3>{s[2]}</h3>
              <code>{s[3]}</code>
              <p>{s[4]}</p>

              <ul>
                {s[5].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="EXPERIENCE"
        title={
          <>
            HOW I <mark>APPROACH WORK.</mark>
          </>
        }
        sub="No fluff, no fake reviews — just how I actually work with clients on catalog and web projects."
      >
        <div className="reviews" style={{ marginBottom: 60 }}>
          {[
            [
              '🎯',
              'Detail-Focused',
              'Every product, image, and price gets double-checked before it goes live. Small errors in a catalog cost sales — I treat accuracy as non-negotiable.',
            ],
            [
              '⏱️',
              'Clear Communication',
              'I respond within 24 hours, give realistic timelines, and update you on progress instead of going silent until the work is "done."',
            ],
            [
              '🔁',
              'Built to Last',
              'I organize data and code in a way that\'s easy to maintain and update later — not a quick fix that breaks the next time something changes.',
            ],
          ].map((x) => (
            <article key={x[1]}>
              <div className="approach-icon">{x[0]}</div>
              <b>{x[1]}</b>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>

        <Eyebrow>HOW I WORK</Eyebrow>
        <h2 style={{ margin: '15px 0 36px' }}>
          FROM TASK TO <mark>DELIVERY.</mark>
        </h2>

        <div className="process">
          {[
            [
              '01',
              'Review',
              'I review the task, product data, and required storefront outcome.',
            ],
            [
              '02',
              'Organize',
              'I prepare content, product details, images, categories, and source files.',
            ],
            [
              '03',
              'Update',
              'I make website or catalog updates carefully and consistently.',
            ],
            [
              '04',
              'Check',
              'I review the result for accuracy, responsiveness, and customer-facing quality.',
            ],
          ].map((x) => (
            <article key={x[0]}>
              <b>{x[0]}</b>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="project"
        eyebrow="PORTFOLIO"
        title={
          <>
            SELECTED <mark>WORK.</mark>
          </>
        }
        sub="Real e-commerce catalog-management work across Shopify and WooCommerce."
      >
        <div className="work-grid">
          {projects.map((p) => (
            <article key={p.title}>
              <div className="thumb">
                <span>{p.platform}</span>
                <img src={p.image} alt={`${p.title} project screenshot`} />
              </div>

              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ul className="project-skills">
                  {p.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <a href={p.link} target="_blank" rel="noreferrer">
                  Visit Website →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="SKILLS"
        title={
          <>
            TOOLS <mark>& TECHNOLOGIES.</mark>
          </>
        }
        sub="The platforms, tools, and technologies I use for web development and e-commerce catalog management."
      >
        <Eyebrow>TOOLKIT</Eyebrow>
        <h3 style={{ margin: '12px 0 24px', font: '28px "Bebas Neue"' }}>
          Tools I Use Daily
        </h3>

        <div className="toolbox" style={{ marginBottom: 50 }}>
          {tools.map((t) => (
            <div key={t[1]}>
              <i>{t[0]}</i>
              <span>{t[1]}</span>
            </div>
          ))}
        </div>

        <Eyebrow>TECH STACK</Eyebrow>
        <h3 style={{ margin: '12px 0 24px', font: '28px "Bebas Neue"' }}>
          Technologies & Platforms
        </h3>

        <div className="tech-grid">
          {tech.map((t) => (
            <article key={t[1]}>
              <i>{t[0]}</i>
              <h3>{t[1]}</h3>
              <p>{t[2]}</p>
            </article>
          ))}
        </div>

        <div className="tech-footer">
          🚀
          <span>
            These technologies and platforms help me turn ideas into real-world
            solutions. <b>Clean code. Scalable systems. Seamless experiences.</b>
          </span>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="GET IN TOUCH"
        title={
          <>
            LET'S KEEP YOUR STORE <mark>ON POINT.</mark>
          </>
        }
        sub="Need help with website updates, product listings, or e-commerce catalog management? Send me a message."
      >
        <div className="contact">
          <div>
            <h3>Reach out directly</h3>
            <p>Reach out using any option below. I usually respond within 24 hours.</p>

            <a href="mailto:Samrananjum789@gmail.com">
              ✉️
              <span>
                <small>Email</small>
                Samrananjum789@gmail.com
              </span>
            </a>

            <a href="https://wa.me/923480256936">
              💬
              <span>
                <small>WhatsApp</small>
                Message me now
              </span>
            </a>

            <a href="#contact">
              📍
              <span>
                <small>Based in</small>
                Pakistan
              </span>
            </a>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setSending(true)
              setError(false)

              try {
                const res = await fetch(
                  'https://formspree.io/f/meajzror',
                  {
                    method: 'POST',
                    headers: { Accept: 'application/json' },
                    body: new FormData(e.target),
                  }
                )

                if (res.ok) {
                  setSent(true)
                  e.target.reset()
                } else {
                  setError(true)
                }
              } catch {
                setError(true)
              } finally {
                setSending(false)
              }
            }}
          >
            {sent && (
              <div className="notice">Thanks! Your message has been received.</div>
            )}

            {error && (
              <div className="notice error">
                Something went wrong. Please email me directly instead.
              </div>
            )}

            <div className="form-row">
              <Field name="name" label="Your Name" placeholder="John Doe" />

              <Field
                name="email"
                label="Email Address"
                placeholder="john@email.com"
                type="email"
              />
            </div>

            <label>
              I need help with
              <select name="service">
                <option>Select a service</option>
                <option>Web Development</option>
                <option>Catalog Management</option>
                <option>Product Data Updates</option>
                <option>Catalog Quality Check</option>
              </select>
            </label>

            <label>
              Tell me about your project
              <textarea
                name="message"
                placeholder="What do you need help with?"
                required
              />
            </label>

            <button className="btn primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
            <small>Your info is never shared. No spam ever.</small>
          </form>
        </div>
      </Section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#home" className="brand">
                <div className="brand-mark">S</div>

                <b>
                  Samran Anjum
                  <small>Jr. Web Developer & Catalog Manager</small>
                </b>
              </a>

              <p>
                Jr. Web Developer & Catalog Manager focused on e-commerce
                websites, accurate product catalogs, and reliable product data.
              </p>
            </div>

            {[
              [
                'Services',
                'Web Development',
                'Catalog Management',
                'Product Data Updates',
                'Catalog Quality Checks',
              ],
              ['Navigate', 'About', 'Experience', 'Project', 'Skills', 'Contact'],
              ['Work Focus', 'Shopify', 'WooCommerce', 'WordPress', 'Product Catalogs'],
            ].map((x) => (
              <div key={x[0]}>
                <h4>{x[0]}</h4>

                {x.slice(1).map((y) => (
                  <a
                    key={y}
                    href={`#${
                      x[0] === 'Navigate' ? y.toLowerCase() : 'about'
                    }`}
                  >
                    {y}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="bottom">
            © 2026 Samran Anjum. All rights reserved.
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/samrananjum/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              <a
                href="https://www.fiverr.com/users/samran48/"
                target="_blank"
                rel="noreferrer"
                aria-label="Fiverr"
                className="social-fiverr"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.3 12.15h-2.7v6.6h-3v-6.6h-1.65v-2.55h1.65v-1c0-2.1 1.05-3.3 3.45-3.3.75 0 1.5.15 1.8.3v2.4c-.3-.1-.75-.15-1.2-.15-.75 0-1.05.3-1.05 1.05v.7h2.4l-.3 2.55h-.7z" />
                  <path d="M11.55 9.6h3v9.15h-3zM13.05 5.4a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3zM1.65 12.15v-2.55h1.8V8.55c0-2.55 1.35-3.9 3.9-3.9.9 0 1.65.15 2.1.3v2.55c-.3-.1-.75-.15-1.2-.15-1.05 0-1.5.45-1.5 1.5v.75h2.55l-.45 2.55H6.75v6.6h-3v-6.6H1.65z" />
                </svg>
              </a>

              <a
                href="https://wa.me/923480256936"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.33.19 1.84.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
                  <path d="M12.02 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.27 4.86L2 22l5.29-1.24A9.96 9.96 0 0 0 12.02 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.13.74.75-3.05-.2-.31A8.18 8.18 0 1 1 20.2 12.2a8.19 8.19 0 0 1-8.18 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>
}

function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <p className="sub">{sub}</p>
        {children}
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = 'text', name }) {
  return (
    <label>
      {label}
      <input type={type} name={name} placeholder={placeholder} required />
    </label>
  )
}

export default App
