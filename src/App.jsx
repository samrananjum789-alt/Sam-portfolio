import { Fragment, useEffect, useState } from 'react'
import './App.css'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'project'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
]

const services = [
  [
    'code',
    '01',
    'Web Development',
    '// WordPress, Shopify & WooCommerce',
    'Responsive websites, landing pages, layout updates, and storefront maintenance based on business requirements.',
    ['WordPress', 'Shopify', 'WooCommerce', 'Elementor', 'HTML / CSS'],
  ],
  [
    'box',
    '02',
    'Catalog Management',
    '// product listings & variations',
    'Prepare and organize product titles, descriptions, categories, pricing, and variations for consistent listings.',
    ['Product Listings', 'Categories & Tags', 'Variable Products', 'Product Images'],
  ],
  [
    'chart',
    '03',
    'Product Data Preparation',
    '// Excel, CSV & SKU matching',
    'Clean source data, match SKUs, organize image references, and prepare structured files for product imports.',
    ['Microsoft Excel', 'CSV Files', 'SKU Matching', 'Data Cleaning'],
  ],
  [
    'check',
    '04',
    'Catalog Quality Checks',
    '// review before publishing',
    'Check product information, image assignments, variation options, and storefront content for accuracy.',
    ['Image Mapping', 'Variation Checks', 'Content Checks', 'Storefront QA'],
  ],
]

const serviceIcons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M8 4 2 12l6 8M16 4l6 8-6 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

const experience = [
  {
    title: 'Jr. Web Development & Catalog Management',
    company: 'TechChef Inc.',
    dates: 'May 2026 – September 2026',
    points: [
      'Managed website development and product catalog operations, maintaining accurate product listings, pricing, images, and page content.',
      'Maintained responsive website layouts and resolved technical issues affecting usability.',
      'Checked product data and storefront content for accuracy and consistency.',
      'Supported website maintenance and improvements to the online shopping experience.',
    ],
  },
  {
    title: 'Management Trainee Officer – Web Development & Catalog Management',
    company: 'TechChef Inc.',
    dates: 'January 2026 – April 2026',
    points: [
      'Managed product listings, pricing, images, and catalog content for the company’s e-commerce platform.',
      'Supported ongoing website development and maintenance.',
      'Assisted with technical troubleshooting and checked product data for accuracy and consistency.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    dates: 'October 2023 – October 2025',
    points: [
      'Developed responsive WordPress and Shopify websites, including WooCommerce store setups.',
      'Created landing pages and updated website layouts and product content based on client requirements.',
      'Worked on website performance using LiteSpeed Cache and on-page SEO using Rank Math.',
      'Handled website maintenance, technical troubleshooting, and client updates for remote projects.',
    ],
  },
]

const process = [
  ['01', 'Review', 'Review the requirements, source files, and expected website or catalog updates.'],
  ['02', 'Organize', 'Prepare product details, images, categories, and import files in a consistent structure.'],
  ['03', 'Update', 'Apply website or catalog changes carefully, following the project requirements.'],
  ['04', 'Check', 'Review product accuracy, image assignments, variation options, and responsive layouts.'],
]

const tools = [
  ['W', 'WordPress'],
  ['🛒', 'WooCommerce'],
  ['🛍️', 'Shopify'],
  ['E', 'Elementor'],
  ['📊', 'Microsoft Excel'],
  ['📄', 'CSV Files'],
  ['⚡', 'VS Code'],
  ['🐙', 'GitHub'],
  ['↗', 'WP All Import'],
  ['🔍', 'Rank Math'],
  ['⚙', 'LiteSpeed Cache'],
]

const tech = [
  ['W', 'WordPress', 'Website setup, page updates, maintenance, and technical troubleshooting.'],
  ['🛒', 'WooCommerce', 'Product imports, variable products, categories, and catalog checks.'],
  ['🛍️', 'Shopify', 'Storefront updates and structured product catalog management.'],
  ['E', 'Elementor', 'Responsive page layouts and custom headers and footers.'],
  ['⌘', 'HTML & CSS', 'Page structure, styling, and responsive layout adjustments.'],
  ['📊', 'Microsoft Excel', 'SKU matching, duplicate checks, XLOOKUP, and TEXTJOIN workflows.'],
  ['📄', 'CSV & Product Imports', 'Prepare product files, organize fields, and review import data.'],
  ['🖼', 'Product Image Mapping', 'Match main, gallery, and variation images to the correct products.'],
  ['🔎', 'Web Scraping', 'Collect source product information and organize it for catalog tasks.'],
  ['⚙', 'Website Optimization', 'Image preparation, caching setup, and on-page SEO tasks.'],
]

const projects = [
  {
    platform: 'Shopify · Product Catalog Management',
    image: '/images/uspatriotcolors-product.png',
    title: 'US Patriot Colors',
    problem: 'Imported product data needed clearer tags, model information, and variation organization.',
    result: 'Organized tags and categories, added model information, and grouped duplicate listings into product variations.',
    scope: 'My role: Product catalog management',
    skills: ['Shopify', 'Product Import', 'Tags & Categories', 'Variants'],
    link: 'https://uspatriotcolors.com/',
  },
  {
    platform: 'WooCommerce · Product Catalog Management',
    image: '/images/computer-controls-catalog.png',
    title: 'Computer Controls',
    problem: 'Source product information needed preparation and organization for a WooCommerce catalog.',
    result: 'Worked on product-data preparation, catalog imports, and storefront content checks.',
    scope: 'My role: Product catalog support',
    skills: ['WooCommerce', 'Product Data', 'Catalog Import', 'Content Checks'],
    link: 'https://ccontrols.shop/',
  },
  {
    platform: 'Squarespace · Website Development',
    image: '/images/bay-linguistic-project.webp',
    fallback: '/images/bay-linguistic-project.png',
    title: 'Bay Linguistic Advancement Center',
    problem: 'The website needed page development and organized event and payment information.',
    result: 'Worked on website pages, picnic event content, and the Payment Methods page.',
    scope: 'My role: Website development and page setup',
    skills: ['Squarespace', 'Website Development', 'Event Pages', 'Page Content'],
    link: 'https://www.baylinguistic.org/',
  },
  {
    platform: 'WooCommerce · Product Import',
    image: '/images/emallshop-project.webp',
    fallback: '/images/emallshop-project.png',
    title: 'emallshop',
    problem: 'Product information from a source website needed preparation for a WooCommerce import.',
    result: 'Prepared scraped product information and imported structured product listings into WooCommerce.',
    scope: 'My role: Product-data preparation and import',
    skills: ['Web Scraping', 'WooCommerce', 'Catalog Import', 'Data Preparation'],
    link: 'https://sha.lk/',
  },
]

function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => {
      document.querySelector('.navbar')
        ?.classList.toggle('scrolled', window.scrollY > 30)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dot = document.querySelector('.cursor-glow')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')

    if (!dot) return

    if (reduceMotion.matches || !finePointer.matches) {
      dot.style.display = 'none'
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY
    let raf

    const onMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.opacity = '1'
    }

    const onLeave = () => {
      dot.style.opacity = '0'
    }

    const tick = () => {
      x += (mouseX - x) * 0.15
      y += (mouseY - y) * 0.15
      dot.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onClickOutside = (event) => {
      if (!event.target.closest('.nav-inner')) setOpen(false)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sending) return

    const form = event.currentTarget
    const data = new FormData(form)

    setSending(true)
    setSent(false)
    setError(false)

    try {
      const response = await fetch('https://formspree.io/f/meajzror', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (response.ok) {
        setSent(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div
        className="cursor-glow"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      />

      <nav className="navbar" aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={close}>
            <div className="brand-mark">S</div>
            <div>
              <b>Samran Anjum</b>
              <small>Jr. Web Developer & Catalog Manager</small>
            </div>
          </a>

          <div id="main-menu" className={`nav-links ${open ? 'open' : ''}`}>
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={close}>
                {label}
              </a>
            ))}
            <a href="#contact" className="btn primary" onClick={close}>
              Let's Talk
            </a>
          </div>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-menu"
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="orbits" aria-hidden="true">
          <i /><i /><i />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="status">
              <span /> OPEN TO JUNIOR WEB DEVELOPMENT & E-COMMERCE CATALOG ROLES
            </div>

            <h1>
              I BUILD <em>WEBSITES</em> &<br />
              MANAGE <strong>PRODUCT CATALOGS</strong><br />
              FOR GROWING STORES.
            </h1>

            <p>
              I'm <b>Samran Anjum</b>. I build and maintain storefronts
              and organize the product data behind them—listings,
              variations, pricing, images, and categories.
            </p>

            <div className="cta">
              <a className="btn primary" href="#project">View My Work →</a>
              <a className="btn ghost" href="#contact">Let's Work Together</a>
            </div>

            <div className="stats">
              {[
                ['Shopify', 'Platform'],
                ['WooCommerce', 'Platform'],
                ['WordPress', 'CMS'],
                [String(projects.length), 'Featured Projects'],
              ].map(([value, label]) => (
                <div key={value}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile">
            <img
              src="/images/samran-anjum-profile.webp"
              alt="Samran Anjum"
              width="600"
              height="525"
              loading="eager"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = '/images/samran-anjum-profile.png'
              }}
            />
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div>
          {[
            'Web Development', 'Product Catalogs', 'Shopify',
            'WooCommerce', 'WordPress', 'Product Data',
            'Web Development', 'Product Catalogs', 'Shopify',
            'WooCommerce', 'WordPress', 'Product Data',
          ].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <main>
        <Section
          id="about"
          eyebrow="ABOUT ME"
          title={<>WHO <mark>I AM.</mark></>}
          sub="Website development and product catalog management, with attention to the details."
        >
          <div className="identity-grid" style={{ marginBottom: 60 }}>
            <div>
              <div className="about-block">
                <b className="about-label">Who I Am</b>
                <p className="about-lede">
                  I’m a Karachi-based web developer focused on WordPress,
                  WooCommerce, Shopify, and e-commerce catalog management.
                  My experience includes freelance website projects and
                  web development and catalog roles at TechChef Inc.
                </p>
              </div>

              <div className="about-block">
                <b className="about-label">What I Do</b>
                <ul className="check-list">
                  <li>Build and maintain responsive websites and storefronts</li>
                  <li>Organize product listings, variations, pricing, and categories</li>
                  <li>Prepare CSV imports and match product images using SKUs</li>
                  <li>Check website content and product data for consistency</li>
                </ul>
              </div>

              <div className="about-block">
                <b className="about-label">How I Work</b>
                <ul className="check-list">
                  <li>I connect storefront updates with accurate product data.</li>
                  <li>I review details carefully and communicate progress clearly.</li>
                  <li>I check completed work against the project requirements.</li>
                </ul>
              </div>
            </div>

            <div className="terminal">
              <header>
                <i /><i /><i />
                <span>samran@portfolio:</span>
              </header>
              <pre>
                <b>// e-commerce workflow</b>
                {'\n'}
                <em>const</em> samran = {'{'}
                {'\n'}  role: <strong>"Web Developer & Catalog Manager"</strong>,
                {'\n'}  focus: [
                {'\n'}    <strong>"WordPress & Shopify"</strong>,
                {'\n'}    <strong>"WooCommerce Catalogs"</strong>,
                {'\n'}    <strong>"Product Data QA"</strong>
                {'\n'}  ],
                {'\n'}  location: <strong>"Karachi, Pakistan"</strong>,
                {'\n'}  available: <em>true</em>
                {'\n'}{'}'}
                <span className="cursor" />
              </pre>
            </div>
          </div>

          <Eyebrow>WHAT I DO</Eyebrow>
          <h2 style={{ margin: '15px 0 36px' }}>
            WEB & CATALOG. <mark>ONE WORKFLOW.</mark>
          </h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                key={service[1]}
                className={`service${index === 0 ? ' service-wide' : ''}`}
                style={{ '--d': `${index * 0.09}s` }}
              >
                <div className="service-top">
                  <span className="service-icon" aria-hidden="true">
                    {serviceIcons[service[0]]}
                  </span>
                  <small>{service[1]}</small>
                </div>
                <h3>{service[2]}</h3>
                <code>{service[3]}</code>
                <p>{service[4]}</p>
                <ul>
                  {service[5].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="EXPERIENCE"
          title={<>MY <mark>WORK EXPERIENCE.</mark></>}
          sub="Freelance projects and professional roles in website development and catalog management."
        >
          <div style={{ display: 'grid', gap: 24, marginBottom: 60 }}>
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.title}`}
                className="service"
                style={{ padding: 'clamp(20px, 4vw, 32px)' }}
              >
                <span className="project-label">{role.company}</span>
                <h3 style={{ margin: '12px 0', overflowWrap: 'anywhere' }}>
                  {role.title}
                </h3>
                <p style={{ color: 'var(--dim)', marginBottom: 18 }}>
                  {role.dates}
                </p>
                <ul
                  className="check-list"
                  style={{ display: 'block', paddingLeft: 20 }}
                >
                  {role.points.map((point) => (
                    <li key={point} style={{ marginBottom: 10, lineHeight: 1.7 }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <Eyebrow>HOW I WORK</Eyebrow>
          <h2 style={{ margin: '15px 0 20px' }}>
            A CAREFUL <mark>PROCESS.</mark>
          </h2>
          <p className="sub">
            A consistent approach to website updates and catalog tasks.
          </p>

          <div className="trait-strip">
            <span>🎯 Attention to Detail</span>
            <span>⏱️ Clear Communication</span>
            <span>✓ Review Before Delivery</span>
          </div>

          <div className="process process-flow">
            {process.map((step, index) => (
              <Fragment key={step[0]}>
                <article>
                  <b>{step[0]}</b>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </article>
                {index < process.length - 1 && (
                  <span className="process-arrow" aria-hidden="true">→</span>
                )}
              </Fragment>
            ))}
          </div>
        </Section>

        <Section
          id="project"
          eyebrow="PORTFOLIO"
          title={<>SELECTED <mark>WORK.</mark></>}
          sub="Selected website and catalog projects, with my contribution described for each."
        >
          <div className="work-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <div className="thumb">
                  <span>{project.platform}</span>
                  <img
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    width="600"
                    height="460"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      if (!project.fallback) return
                      event.currentTarget.onerror = null
                      event.currentTarget.src = project.fallback
                    }}
                  />
                </div>

                <div>
                  <h3>{project.title}</h3>
                  <div className="project-scope">{project.scope}</div>

                  <div className="project-block">
                    <span className="project-label">Project Requirements</span>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-block">
                    <span className="project-label">My Contribution</span>
                    <p>{project.result}</p>
                  </div>

                  <span
                    className="project-label"
                    style={{ display: 'block', marginBottom: 8 }}
                  >
                    Tools & Tasks
                  </span>
                  <ul className="project-skills">
                    {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website in a new tab`}
                  >
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
          title={<>TOOLS <mark>& PRACTICAL SKILLS.</mark></>}
          sub="The platforms and workflows I use for websites and product catalog tasks."
        >
          <Eyebrow>TOOLKIT</Eyebrow>
          <h3 style={{ margin: '12px 0 24px', font: '28px "Bebas Neue"' }}>
            Tools I Work With
          </h3>

          <div className="toolbox" style={{ marginBottom: 50 }}>
            {tools.map(([icon, name]) => (
              <div key={name}>
                <i aria-hidden="true">{icon}</i>
                <span>{name}</span>
              </div>
            ))}
          </div>

          <Eyebrow>PRACTICAL APPLICATION</Eyebrow>
          <h3 style={{ margin: '12px 0 24px', font: '28px "Bebas Neue"' }}>
            What I Use These Skills For
          </h3>

          <div className="tech-grid">
            {tech.map(([icon, name, description]) => (
              <article key={name}>
                <i aria-hidden="true">{icon}</i>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="tech-footer">
            <span>
              My main focus is responsive website work, structured product
              data, and accurate catalog updates across WordPress,
              WooCommerce, and Shopify.
            </span>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="GET IN TOUCH"
          title={<>LET'S KEEP YOUR STORE <mark>ON POINT.</mark></>}
          sub="Have a website or catalog project, or a relevant job opportunity? Get in touch."
        >
          <div className="contact">
            <div>
              <h3>Reach out directly</h3>
              <p>
                Share your requirements, platform, and expected timeline.
                I’m open to junior web development and e-commerce catalog
                opportunities, including remote roles.
              </p>

              <a href="mailto:Samrananjum789@gmail.com">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                  <path d="m3 6.5 9 6.5 9-6.5" strokeLinecap="round" />
                </svg>
                <span>
                  <small>Email</small>
                  Samrananjum789@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/923480256936"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    d="M4 20 5.5 15.5A8 8 0 1 1 9 18.5L4 20Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span><small>WhatsApp</small>Message me</span>
              </a>

              <a
                href="https://www.linkedin.com/in/samrananjum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
                  <circle cx="7" cy="7" r=".7" />
                </svg>
                <span><small>LinkedIn</small>View my profile</span>
              </a>

              <p style={{ marginTop: 20 }}>Based in Karachi, Pakistan.</p>
            </div>

            <form onSubmit={handleSubmit} aria-busy={sending}>
              {sent && (
                <div className="notice" role="status">
                  Thanks! Your message has been submitted successfully.
                </div>
              )}
              {error && (
                <div className="notice error" role="alert">
                  Your message could not be sent. Please email me directly.
                </div>
              )}

              <div className="form-row">
                <Field
                  name="name"
                  label="Your Name"
                  placeholder="Your name"
                  autoComplete="name"
                />
                <Field
                  name="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <label>
                I need help with
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Web Development</option>
                  <option>Catalog Management</option>
                  <option>Product Data Preparation</option>
                  <option>Catalog Quality Check</option>
                  <option>Job Opportunity</option>
                </select>
              </label>

              <label>
                Tell me about your project or opportunity
                <textarea
                  name="message"
                  placeholder="Share the requirements, platform, and timeline."
                  required
                />
              </label>

              <button type="submit" className="btn primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
              <small>
                Your details are sent through Formspree to contact me.
                Please do not include passwords or sensitive account information.
              </small>
            </form>
          </div>
        </Section>
      </main>

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
                Focused on responsive websites, accurate product catalogs,
                and organized e-commerce data.
              </p>
            </div>

            <div>
              <h4>Services</h4>
              {[
                'Web Development',
                'Catalog Management',
                'Product Data Preparation',
                'Catalog Quality Checks',
              ].map((label) => (
                <a key={label} href="#about">{label}</a>
              ))}
            </div>

            <div>
              <h4>Navigate</h4>
              {navigation.filter(([, id]) => id !== 'home').map(([label, id]) => (
                <a key={id} href={`#${id}`}>{label}</a>
              ))}
            </div>

            <div>
              <h4>Work Focus</h4>
              {['Shopify', 'WooCommerce', 'WordPress', 'Product Catalogs'].map((label) => (
                <a key={label} href="#skills">{label}</a>
              ))}
            </div>
          </div>

          <div className="bottom">
            © {new Date().getFullYear()} Samran Anjum. All rights reserved.
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/samrananjum/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href="https://www.fiverr.com/samran48/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr"
                className="social-fiverr"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.3 12.15h-2.7v6.6h-3v-6.6h-1.65v-2.55h1.65v-1c0-2.1 1.05-3.3 3.45-3.3.75 0 1.5.15 1.8.3v2.4c-.3-.1-.75-.15-1.2-.15-.75 0-1.05.3-1.05 1.05v.7h2.4l-.3 2.55h-.7z" />
                  <path d="M11.55 9.6h3v9.15h-3zM13.05 5.4a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3zM1.65 12.15v-2.55h1.8V8.55c0-2.55 1.35-3.9 3.9-3.9.9 0 1.65.15 2.1.3v2.55c-.3-.1-.75-.15-1.2-.15-1.05 0-1.5.45-1.5 1.5v.75h2.55l-.45 2.55H6.75v6.6h-3v-6.6H1.65z" />
                </svg>
              </a>
              <a
                href="https://wa.me/923480256936"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
    <section
      className="section"
      id={id}
      aria-labelledby={`${id}-heading`}
      style={{ scrollMarginTop: 100 }}
    >
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={`${id}-heading`}>{title}</h2>
        <p className="sub">{sub}</p>
        {children}
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = 'text', name, autoComplete }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
      />
    </label>
  )
}

export default App
