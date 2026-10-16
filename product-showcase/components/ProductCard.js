import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

export default function ProductCard({ product, index = 0 }) {
  return (
    <article className="product-card" style={{ '--card-index': index }}>
      <Link href={`/products/${product.id}`} className="product-image-wrap" aria-label={`Lihat ${product.title}`}>
        <span className="product-badge">0{index + 1}</span>
        <Image src={product.image} alt={product.title} width={320} height={320} className="product-image" unoptimized />
      </Link>
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3><Link href={`/products/${product.id}`}>{product.title}</Link></h3>
        <div className="product-card-bottom"><span className="price">${product.price.toFixed(2)}</span><FavoriteButton productId={product.id} compact /></div>
        <Link className="details-link" href={`/products/${product.id}`}>View Details <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
