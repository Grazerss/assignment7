import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FavoriteButton from '../../../components/FavoriteButton';
import { getProduct } from '../../../lib/api';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  return { title: product ? `${product.title} — Luma` : 'Product not found — Luma' };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <section className="detail-section container">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Products</span><span>/</span><span className="breadcrumb-current">{product.title}</span></div>
      <div className="detail-layout"><div className="detail-image-panel"><span className="detail-index">PRODUCT Nº {String(product.id).padStart(2, '0')}</span><Image src={product.image} alt={product.title} width={700} height={700} className="detail-image" priority unoptimized /></div>
        <div className="detail-info"><p className="eyebrow">{product.category}</p><h1>{product.title}</h1><div className="detail-rating"><span className="rating-stars" aria-label={`${product.rating?.rate ?? 0} dari 5 bintang`}>★★★★★</span><span>{product.rating?.rate ?? '—'} / 5</span><span className="rating-divider">·</span><span>{product.rating?.count ?? 0} reviews</span></div><p className="detail-price">${product.price.toFixed(2)}</p><div className="detail-rule" /><h2>About this piece</h2><p className="detail-description">{product.description}</p><div className="detail-actions"><FavoriteButton productId={product.id} /><Link href="/" className="button button-outline">← Back to collection</Link></div><div className="detail-note"><span>✳</span><p>Thoughtfully picked. Ready for your everyday.</p></div></div></div>
    </section>
  );
}
