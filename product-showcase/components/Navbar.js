import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Luma home"><span className="brand-mark">L</span><span>luma<span className="brand-dot">.</span></span></Link>
        <div className="nav-links"><Link href="/">Home</Link><Link href="/contact">Contact</Link></div>
        <Link className="nav-cta" href="/#products">Explore products <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
