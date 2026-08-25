import useReveal from '../useReveal.js'

const PROJECTS = [
  {
    title: 'Hate Speech Detection — Hindi',
    desc: 'Fine-tuned DistilBERT on the HASOC dataset for Hindi social-media sentiment/hate-speech classification, achieving 80.5% test accuracy. Training pipeline in PyTorch; inference runs fully client-side in the browser via ONNX + transformers.js.',
    stack: ['DistilBERT', 'PyTorch', 'ONNX', 'React'],
    url: 'https://github.com/ManasPl/Hindi-sentiment-analysis',
    demoUrl: 'https://manaspl.github.io/Hindi-sentiment-analysis/',
  },
  {
    title: 'Aircraft Blade Defect Inspection',
    desc: 'Annotated 3,000+ defects across 500 images; benchmarked detection architectures and selected Mask R-CNN (mAP 0.55–0.59). Flask inference API + React inspection UI with camera SDK.',
    stack: ['Mask R-CNN', 'Flask', 'React'],
    url: null,
    demoUrl: null,
    note: 'code private — company project',
  },
  {
    title: 'Sabka Bazaar — E-Commerce',
    desc: 'E-commerce platform for cosmetics with an advanced search filter, rating system, and admin panel for managing products, categories, and reviews.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    url: 'https://github.com/ManasPl/Ecommerce-website',
    demoUrl: null,
  },
  {
    title: 'Gesture-Controlled Smart Car',
    desc: 'Raspberry Pi + Arduino robot with real-time hand-gesture control via MediaPipe, custom YOLO models for road-sign detection, and WebSocket-based control loop.',
    stack: ['Raspberry Pi', 'YOLO', 'WebSocket'],
    url: 'https://github.com/ManasPl/dl-autonomous-vehicle',
    demoUrl: null,
    note: 'hardware project — see demo video, not a hosted live demo',
  },
]

function ProjectCard({ p }) {
  const ref = useReveal()
  return (
    <div className="card reveal" ref={ref}>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="stack">
        {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
      </div>
      {(p.demoUrl || p.url) && (
        <div className="projectlinks">
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">Live ↗</a>
          )}
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer">Code ↗</a>
          )}
        </div>
      )}
      {p.note && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 10 }}>
          // {p.note}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const titleRef = useReveal()
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sectionlabel">// stage: projects</div>
        <h2 className="sectiontitle reveal" ref={titleRef}>Projects</h2>
        <div className="projects">
          {PROJECTS.map((p) => <ProjectCard p={p} key={p.title} />)}
        </div>
      </div>
    </section>
  )
}
