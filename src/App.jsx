import { Fragment, useEffect, useState } from 'react'
import './App.css'


const services = [
  [
    'code',
    '01',
    'Web Development',
    '// WordPress, Shopify & WooCommerce',
    'Fast, responsive websites and storefront fixes built around what your customers actually need — for WordPress, Shopify, and WooCommerce.',
    ['HTML / CSS / JS', 'WordPress', 'Shopify', 'WooCommerce'],
  ],
  [
    'box',
    '02',
    'Catalog Management',
    '// product data & storefront quality',
    'Clean, accurate titles, descriptions, images, and pricing — so customers find what they want and trust what they see.',
    ['Product Listings', 'Categories & Tags', 'Variants', 'Image Management'],
  ],
  [
    'chart',
    '03',
    'Inventory & Data Updates',
    '// CSV, SKU, price & stock',
    'Keep stock, pricing, and product data current, so nothing sells out silently or shows the wrong price.',
    ['CSV Import / Export', 'SKU Management', 'Price Updates', 'Stock Updates'],
  ],
  [
    'check',
    '04',
    'Catalog Quality Checks',
    '// accuracy before publishing',
    'Catch missing images, broken links, and listing errors before customers do — fewer complaints, fewer lost sales.',
    ['Data Validation', 'Product Audits', 'Content Checks', 'Storefront QA'],
  ],
]

const serviceIcons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 4 2 12l6 8M16 4l6 8-6 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M21 8 12 3 3 8v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M4 20V10M12 20V4M20 20v-7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="m5 13 4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

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
  ['⌘', 'HTML5', 'Markup language for structuring content on the web.', 5],
  ['#', 'CSS3', 'Stylesheet language for designing responsive layouts.', 4],
  ['JS', 'JavaScript', 'Programming language that brings interactivity to websites.', 3],
  ['⚛', 'React', 'JavaScript library for fast, interactive user interfaces.', 3],
  ['≈', 'Tailwind CSS', 'Utility-first CSS framework for custom designs.', 4],
  ['php', 'PHP', 'Server-side scripting for dynamic web applications.', 2],
  ['◉', 'MySQL', 'Relational database for storing and managing data.', 2],
  ['W + S', 'WordPress & Shopify', 'Powerful platforms for websites and stores.', 5],
]

const projects = [
  {
    platform: 'Shopify · Product Catalog Management',
    image: '/images/uspatriotcolors-product.png',
    title: 'US Patriot Colors',
    problem: 'Products imported from a source site had messy tags, missing model info, and duplicate listings for the same item.',
    result: 'Organized tags and categories, added model details, and merged duplicate listings into clean variant options — a clearer, easier-to-browse catalog.',
    scope: 'Catalog Management · Shopify',
    skills: ['Product Import', 'Tags & Categories', 'Product Models', 'Variants'],
    link: 'https://uspatriotcolors.com/',
  },
  {
    platform: 'WooCommerce · Product Catalog & Localization',
    image: '/images/computer-controls-catalog.png',
    title: 'Computer Controls',
    problem: 'Store needed products imported from a source site and content localized for French, German, and Italian shoppers.',
    result: 'Full catalog import plus multilingual storefront content across 3 languages, opening the store to a broader customer base.',
    scope: 'Catalog Management · WooCommerce · 3 languages',
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
    problem: 'Client needed a full website built from scratch, plus event and payment pages configured to spec.',
    result: 'Delivered the complete site, organized picnic event pages, and set up a working Payment Methods page — ready for real customer use.',
    scope: 'Website Development · Squarespace',
    skills: ['Website Development', 'Squarespace', 'Event Pages', 'Payment Setup'],
    link: 'https://www.baylinguistic.org/',
  },
  {
    platform: 'WooCommerce · Product Import',
    image: '/images/emallshop-project.png',
    title: 'emallshop',
    problem: 'Store catalog needed populating with products scraped and migrated from a source website.',
    result: 'Full product catalog imported and structured on WooCommerce, ready for the store to go live with real inventory.',
    scope: 'Catalog Import · WooCommerce',
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
            <div className="brand-mark">S</div>

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
              I BUILD <em>WEBSITES</em> &<br />
              MANAGE <strong>PRODUCT CATALOGS</strong>
              <br />
              FOR GROWING STORES.
            </h1>

            <p>
              I'm <b>Samran Anjum</b>. I fix and build the storefront your
              customers see, and organize the product data behind it —
              listings, pricing, inventory — so your store stays accurate as
              it grows.
            </p>

            <div className="cta">
              <a className="btn primary" href="#project">
                View My Work →
              </a>

              <a className="btn ghost" href="#contact">
                Let's Work Together
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
            <div className="about-block">
              <b className="about-label">Who I Am</b>
              <p className="about-lede">
                I got into web development and catalog management on my own —
                no bootcamp, just curiosity about how online stores actually
                work behind the scenes. That turned into real, hands-on
                skills over the past several months.
              </p>
            </div>

            <div className="about-block">
              <b className="about-label">What I Do</b>
              <ul className="check-list">
                <li>Build and fix responsive websites for online stores</li>
                <li>Organize accurate product listings, variants, pricing</li>
                <li>Run storefront and product-data quality checks</li>
              </ul>
            </div>

            <div className="about-block">
              <b className="about-label">What Makes Me Different</b>
              <ul className="check-list">
                <li>I handle both the website and the data behind it — most people only do one</li>
                <li>I actually enjoy the detail work most freelancers rush through</li>
              </ul>
            </div>
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
              className={`service${i === 0 ? ' service-wide' : ''}`}
              style={{ '--d': `${i * 0.09}s` }}
            >
              <div className="service-top">
                <span className="service-icon">{serviceIcons[s[0]]}</span>
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
        <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.8, maxWidth: 640, marginBottom: 12 }}>
          I've been doing this seriously for under a year — so I won't
          pretend to have a decade of war stories. What I do have is a
          consistent way of working that's held up across every project so
          far:
        </p>

        <div className="timeline-stat">
          <b>8+ MONTHS</b> hands-on, self-taught, and still learning every week
        </div>

        <div className="trait-strip">
          <span>🎯 Detail-Focused</span>
          <span>⏱️ Clear Communication</span>
          <span>🔁 Built to Last</span>
        </div>

        <div className="process process-flow">
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
          ].map((x, i, arr) => (
            <Fragment key={x[0]}>
              <article>
                <b>{x[0]}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
              {i < arr.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Fragment>
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
                <div className="project-scope">{p.scope}</div>

                <div className="project-block">
                  <span className="project-label">Problem</span>
                  <p>{p.problem}</p>
                </div>

                <div className="project-block">
                  <span className="project-label">What I Did</span>
                  <p>{p.result}</p>
                </div>

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
              <div className="skill-level" aria-label={`Proficiency ${t[3]} of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className={n <= t[3] ? 'filled' : ''} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="tech-footer">
          <span>
            HTML/CSS and WordPress-Shopify work is where I'm strongest — React
            and PHP I'm still actively building depth in, learning through
            real projects rather than tutorials alone.
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
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                <path d="m3 6.5 9 6.5 9-6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <small>Email</small>
                Samrananjum789@gmail.com
              </span>
            </a>

            <a href="https://wa.me/923480256936">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 20 5.5 15.5A8 8 0 1 1 9 18.5L4 20Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <small>WhatsApp</small>
                Message me now
              </span>
            </a>

            <a href="#contact">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2.3" />
              </svg>
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
