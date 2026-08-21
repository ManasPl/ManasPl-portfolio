const METRICS = [
  { label: 'P95_LATENCY', value: '100–150ms' },
  { label: 'CTR_LIFT', value: '+0.5' },
  { label: 'REDIS_MEM', value: '−20%' },
  { label: 'RCA_TURNAROUND', value: '−50%' },
]

const CAPABILITIES = [
  'Distributed Systems',
  'Scalability',
  'Fault-Tolerant Design',
  'ETL Architecture',
  'High-Throughput Backends',
]

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
          domain — building systems that serve <b>100s of millions of requests</b> at
          P95 latency of 100–150ms.
        </p>

        <div className="tagrow" style={{ marginBottom: 28 }}>
          {CAPABILITIES.map((c) => (
            <span className="tag" key={c}>{c}</span>
          ))}
        </div>

        <div className="statusbar">
          {METRICS.map((m) => (
            <div className="metric" key={m.label}>
              <div className="label"><span className="mdot"></span>{m.label}</div>
              <div className="value">{m.value}</div>
            </div>
          ))}
        </div>
        <div className="statuscaption">// real metrics from distributed systems I've shipped in production</div>

        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:manaspal9827@gmail.com">Get in touch</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/manaspl/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="btn btn-ghost" href="https://github.com/ManasPl" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </header>
  )
}
