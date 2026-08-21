import useReveal from '../useReveal.js'

const GROUPS = [
  {
    heading: 'Languages & Backend',
    domain: false,
    tags: ['Python', 'Java', 'JavaScript', 'SQL', 'Node.js', 'Flask', 'FastAPI', 'REST APIs', 'Microservices'],
  },
  {
    heading: 'Data & Distributed Infra',
    domain: false,
    tags: ['Google BigQuery', 'Amazon Redshift', 'Redis', 'MySQL', 'MongoDB', 'ETL Pipelines', 'AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    heading: 'Applied Domain — Ad-Tech / Retail Media',
    domain: true,
    tags: ['Retail Media', 'Ad-Serving', 'Programmatic Advertising', 'Real-Time Bidding', 'Ranking Algorithms'],
  },
  {
    heading: 'ML / AI',
    domain: false,
    tags: ['Machine Learning', 'Deep Learning', 'NLP', 'PyTorch'],
  },
]

function Group({ group }) {
  const ref = useReveal()
  return (
    <div className="skillgroup reveal" ref={ref}>
      <h4>{group.heading}</h4>
      <div className="tagrow">
        {group.tags.map((t) => (
          <span className={`tag${group.domain ? ' domain' : ''}`} key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useReveal()
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sectionlabel">// 03</div>
        <h2 className="sectiontitle reveal" ref={titleRef}>Skills</h2>
        {GROUPS.map((g) => <Group group={g} key={g.heading} />)}
      </div>
    </section>
  )
}
