import useReveal from '../useReveal.js'

export default function About() {
  const titleRef = useReveal()

  return (
    <section id="about">
      <div className="wrap">
        <div className="sectionlabel">// stage: about</div>
        <h2 className="sectiontitle reveal" ref={titleRef}>About</h2>

        <p className="about-text">
          I'm a Software Engineer who cares more about a system staying correct under
          load than about it looking clever on a whiteboard. Most of my work sits in
          that unglamorous but critical space — caching layers, data pipelines,
          monitoring — the plumbing that has to hold up when things get busy.
        </p>
        <p className="about-text">
          I started as a Technical Intern at Osmos by OnlineSales.ai and converted to
          a full-time Software Engineer role, where I now own backend features
          end-to-end — from design through production monitoring — on a retail-media
          platform serving 100s of millions of ad requests. Along the way I've built
          prediction pipelines, led a database migration, and built a monitoring
          system from scratch that's saved my team real debugging time.
        </p>
        <p className="about-text" style={{ marginBottom: 0 }}>
          Outside of work, I'm usually at the gym, on a trek, or losing badly at
          badminton. I also read a fair bit of history — turns out debugging legacy
          systems and untangling historical events require a similar kind of
          patience.
        </p>
      </div>
    </section>
  )
}
