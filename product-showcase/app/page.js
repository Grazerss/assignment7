import Link from 'next/link';
import ProductGrid from '../components/ProductGrid';
import { getProducts } from '../lib/api';

export default async function HomePage() {
  let products = [];
  let failed = false;
  try { products = await getProducts(); } catch { failed = true; }

  return (
    <>
      <section className="hero container">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> THE EVERYDAY EDIT</p><h1>Good things.<br /><em>Well chosen.</em></h1><p className="hero-description">A considered collection of everyday essentials, made for the way you live, work, and play.</p><div className="hero-actions"><Link className="button button-dark" href="#products">Explore collection <span aria-hidden="true">↘</span></Link><span className="hero-note">Curated for curious people.</span></div></div>
        <div className="hero-art" aria-label="Dekorasi abstrak"><div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" /><div className="art-orbit" /><div className="art-center"><span>LESS,</span><span>BETTER.</span><small>EST. 2025</small></div><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span><div className="art-caption"><span>01 — 05</span><span>THE CURATED COLLECTION</span></div></div>
        <div className="hero-bottom"><span>Thoughtful finds for everyday life</span><span className="scroll-indicator">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
      </section>
      <section className="products-section" id="products"><div className="container"><div className="section-heading"><div><p className="eyebrow">THE COLLECTION / 001</p><h2>Find your <em>favorite.</em></h2></div><p className="section-description">A few good things to make your everyday a little more special.</p></div>
        {failed ? <div className="error-state"><h3>Products are taking a break.</h3><p>Gagal mengambil data dari API. Periksa koneksi internet, lalu refresh halaman.</p><Link className="button button-dark" href="/">Refresh page ↻</Link></div> : <ProductGrid products={products} />}
      </div></section>
      <section className="bottom-cta container"><div><p className="eyebrow">HAVE A QUESTION?</p><h2>We’re all ears.</h2></div><Link href="/contact" className="button button-light">Get in touch <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
