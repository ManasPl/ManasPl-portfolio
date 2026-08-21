import useReveal from '../useReveal.js'

const JOBS = [
  {
    role: 'Software Engineer',
    date: 'May 2025 — Present',
    org: 'Osmos by OnlineSales.ai · Performance Engineering',
    bullets: [
      <>Architected backend services and ETL pipelines for <b>retail-media monetization and ad-serving infrastructure</b>, sustaining P95 latency of 100–150ms at peak traffic.</>,
      <>Designed a <b>keyword-to-category prediction pipeline</b> with Redis storage redesign — +0.5 CTR on pilot with no RR loss, ~20% memory reduction across all clients.</>,
      <>Led the Performance team's portion of a cross-team <b>Redshift → BigQuery migration</b>, identifying and fixing legacy code issues that drove up to 20% lower execution time and cost.</>,
      <>Built, solo end-to-end, a <b>business-logic monitoring system</b> catching silent failures invisible to standard monitors — cut RCA turnaround by ~50%.</>,
      <>Built the budget-pacing logic for a new campaign-group hierarchy layer supporting a major enterprise client (PayPal) onboarding.</>,
    ],
  },
  {
    role: 'Technical Intern',
    date: 'June 2024 — April 2025',
    org: 'Osmos by OnlineSales.ai',
    bullets: [
      <>Optimized a BigQuery-to-BigQuery workflow with a MERGE-based strategy — ~40% lower compute cost, ~50% faster ETL execution.</>,
      <>Modernized a legacy brand-extraction pipeline — 2× brand coverage, +0.2 avg CTR across major clients.</>,
      <>Shipped Node.js and Python microservices for internal data-processing workflows and APIs.</>,
    ],
  },
]

function Job({ job }) {
  const ref = useReveal()
  return (
    <div className="job reveal" ref={ref}>
      <div className="job-head">
        <div className="job-role">{job.role}</div>
        <div className="job-date">{job.date}</div>
      </div>
      <div className="job-org">{job.org}</div>
      <ul>
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  const titleRef = useReveal()
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sectionlabel">// 01</div>
        <h2 className="sectiontitle reveal" ref={titleRef}>Experience</h2>
        {JOBS.map((job) => <Job job={job} key={job.role} />)}
      </div>
    </section>
  )
}
