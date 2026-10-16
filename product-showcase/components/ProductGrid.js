'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  const [query, setQuery] = useState('');
  const filteredProducts = useMemo(() => products.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim())
  ), [products, query]);

  return (
    <>
      <div className="products-toolbar">
        <p className="results-count">Showing <strong>{filteredProducts.length}</strong> of {products.length} products</p>
        <label className="search-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="Search products..." value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Cari produk" /><kbd>⌘ K</kbd></label>
      </div>
      {filteredProducts.length ? <div className="product-grid">{filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="empty-state"><span>⌕</span><h3>No products found</h3><p>Coba kata kunci lain.</p></div>}
    </>
  );
}
