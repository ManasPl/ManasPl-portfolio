import useReveal from '../useReveal.js'

const JOBS = [
  {
    role: 'Software Engineer',
    date: 'May 2025 — Present',
    org: 'Osmos by OnlineSales.ai · Performance Engineering',
    intro: (
      <>
        Own backend features end-to-end — from design through production
        monitoring — on a retail-media/ad-tech platform. Work spans ranking
        algorithms, ETL pipeline architecture, caching design, and the monitoring
        layer that keeps all of it honest in production.
      </>
    ),
    bullets: [
      <>Architected backend services and ETL pipelines for <b>retail-media monetization and ad-serving infrastructure</b>, sustaining P95 latency of 100–150ms at peak traffic across multiple marketplaces.</>,
      <>Designed a <b>keyword-to-category prediction pipeline</b> with a fallback path to the legacy system, and redesigned the Redis storage layout for keyword-to-category mappings — result: +0.5 CTR on the pilot client with no RR loss, and ~20% Redis memory reduction across all clients on rollout.</>,
      <>Led the Performance team's portion of a cross-team <b>Redshift → BigQuery migration</b> — rewrote queries for BigQuery-native execution, refactored ETL workflows, and shipped an automated parity-validation framework that diffs on primary keys/emails. In the process, identified and fixed legacy code issues the framework surfaced, driving up to 20% lower pipeline execution time and cloud cost.</>,
      <>Built, solo end-to-end, a <b>business-logic monitoring system</b> that catches silent failures invisible to standard service/data monitors — undersized models, malformed or out-of-range inputs, logically incorrect algorithm output — cutting RCA turnaround for leadership escalations by ~50%.</>,
      <>Built the budget-pacing logic for a new campaign-group hierarchy layer introduced to support a major enterprise client (PayPal) onboarding, ensuring correct behavior across both single-campaign and grouped-campaign configurations.</>,
      <>Built automated frameworks for ETL validation, API monitoring, and QA regression; rotate through production on-call, triaging pipeline failures and driving root-cause analysis.</>,
    ],
  },
  {
    role: 'Technical Intern',
    date: 'June 2024 — April 2025',
    org: 'Osmos by OnlineSales.ai',
    intro: (
      <>
        Started on infrastructure, transitioned into Performance Engineering —
        working across ETL cost optimization, legacy pipeline modernization, and
        internal microservices.
      </>
    ),
    bullets: [
      <>Optimized the BigQuery-to-BigQuery fetch-and-store workflow by implementing a <b>MERGE-based strategy</b> in a hybrid Redshift–BigQuery ETL pipeline — ~40% lower BigQuery compute costs and ~50% faster ETL execution.</>,
      <>Modernized a legacy brand-extraction pipeline with new extraction logic and a real-time fallback path — 2× brand coverage, +0.2 avg CTR across major clients, while holding P95 latency at 100–150ms in a latency-sensitive production service.</>,
      <>Designed and shipped Node.js and Python microservices for internal data-processing workflows and APIs; instrumented automated job-orchestration and monitoring for ETL pipelines across BigQuery and Redshift.</>,
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
      <p className="job-intro">{job.intro}</p>
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
        <div className="sectionlabel">// stage: experience</div>
        <h2 className="sectiontitle reveal" ref={titleRef}>Experience</h2>
        {JOBS.map((job) => <Job job={job} key={job.role} />)}
      </div>
    </section>
  )
}
