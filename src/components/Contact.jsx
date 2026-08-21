import useReveal from '../useReveal.js'

export default function Contact() {
  const labelRef = useReveal()
  const headingRef = useReveal()
  const textRef = useReveal()
  const linksRef = useReveal()

  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <div className="sectionlabel reveal" style={{ justifyContent: 'center', display: 'flex' }} ref={labelRef}>// 04</div>
        <h2 className="reveal" ref={headingRef}>Let's build something reliable.</h2>
        <p className="reveal" ref={textRef}>
          Open to backend and distributed-systems roles — in ad-tech/retail-media or
          beyond. Based in Pune, open to remote and relocation.
        </p>
        <div className="contact-links reveal" ref={linksRef}>
          <a className="btn btn-primary" href="mailto:manaspal9827@gmail.com">manaspal9827@gmail.com</a>
          <a className="btn btn-ghost" href="tel:8319901771">+91 8319901771</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/manaspl/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="btn btn-ghost" href="https://github.com/ManasPl" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
