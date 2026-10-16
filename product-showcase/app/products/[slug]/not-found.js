import Link from 'next/link';
export default function ProductNotFound() {
  return <section className="message-page container"><p className="eyebrow">404 / NOT FOUND</p><h1>That product<br /><em>isn’t here.</em></h1><p>Produk yang kamu cari tidak ditemukan.</p><Link href="/" className="button button-dark">Back to home ↗</Link></section>;
}
