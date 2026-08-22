const CAPABILITIES = [
  'Distributed Systems',
  'Scalability',
  'Fault-Tolerant Design',
  'ETL Architecture',
  'High-Throughput Backends',
  'Microservices',
  'Python',
  'Data Engineering',
]

const FLOW_NODES = [
  {
    step: '01',
    title: 'Client Requests',
    impact: false,
    chips: [],
  },
  {
    step: '02',
    title: 'Ranking / API Layer',
    impact: true,
    chips: [
      { text: 'CTR +0.5', amber: true },
      { text: 'RR ↑', amber: true },
      { text: 'Ad Revenue ↑', amber: true },
      { text: 'Ad relevancy ↑', amber: true },
    ],
  },
  {
    step: '03',
    title: 'Cache — Redis',
    impact: true,
    chips: [{ text: 'Memory −20%', amber: true }],
  },
  {
    step: '04',
    title: 'Data Layer — BigQuery / Redshift',
    impact: true,
    chips: [
      { text: 'Cost ↓ 20%', amber: true },
      { text: 'Ad relevancy ↑', amber: false },
    ],
  },
  {
    step: '05',
    title: 'Monitoring & RCA',
    impact: true,
    chips: [
      { text: 'RCA time −50%', amber: true },
      { text: 'Client Tickets ↓40%', amber: true },
    ],
  },
]

// import.meta.env.BASE_URL resolves to the Vite `base` config value at build
// time (e.g. '/ManasPl-portfolio/' on GitHub Pages, '/' elsewhere) — this
// keeps the resume link working regardless of where the site is deployed.
const RESUME_URL = `${import.meta.env.BASE_URL}Manas_Pal_Resume.pdf`

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot"></span> AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1>
          I build scalable,
          <br />
          distributed <span className="accent">backend systems.</span>
        </h1>

        <p className="subhead">
          I'm <b>Manas Pal</b>, a Software Engineer designing high-throughput backend
          services, ETL pipelines, and distributed data infrastructure. Currently
          applying that at <b>Osmos by OnlineSales.ai</b>, in the ad-tech / retail-media
          domain — building systems that serve <b>100s of millions of requests</b> a day.
        </p>

        <div className="tagrow" style={{ marginBottom: 28 }}>
          {CAPABILITIES.map((c) => (
            <span className="tag" key={c}>{c}</span>
          ))}
        </div>

        <div className="envline">
          <span className="dot" style={{ animation: 'none' }}></span>
          OPERATING ENVIRONMENT — P95 latency 100–150ms · 100s of millions of ad requests/day
        </div>

        <div className="flowdiagram">
          {FLOW_NODES.map((n) => (
            <div className={`fnode${n.impact ? ' fnode-impact' : ''}`} key={n.step}>
              <div className="fnode-step">{n.step}</div>
              <div className="fnode-title">{n.title}</div>
              {n.chips.length > 0 && (
                <div className="fnode-impact-row">
                  {n.chips.map((c) => (
                    <span className={`fchip${c.amber ? ' fchip-amber' : ''}`} key={c.text}>
                      {c.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="statuscaption">
          // I've added to or modified production systems, impacting the performance metrics we typically measure
        </div>

        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:manaspal9827@gmail.com">Get in touch</a>
          <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume ↓</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/manaspl/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="btn btn-ghost" href="https://github.com/ManasPl" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </header>
  )
}
