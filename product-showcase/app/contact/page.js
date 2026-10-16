import Link from 'next/link';

export const metadata = { title: 'Contact — Luma' };

export default function ContactPage() {
  return <section className="contact-page container"><div className="contact-intro"><p className="eyebrow">LET’S TALK / 003</p><h1>Good things<br />start with <em>hello.</em></h1><p className="contact-description">Have a question, an idea, or just want to say hi? We’d love to hear from you.</p><a className="contact-email" href="mailto:hello@luma.example">hello@luma.example <span aria-hidden="true">↗</span></a></div><div className="contact-card"><span className="contact-card-symbol">✳</span><p className="eyebrow">A LITTLE NOTE</p><h2>We believe the little things make a big difference.</h2><p>This is a demo product showcase built with Next.js and Fake Store API for a take-home assignment.</p><Link href="/" className="details-link">Back to the collection <span aria-hidden="true">→</span></Link></div></section>;
}
