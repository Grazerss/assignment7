const API_URL = 'https://fakestoreapi.com/products';

export async function getProducts() {
  const response = await fetch(`${API_URL}?limit=5`, { next: { revalidate: 3600 } });
  if (!response.ok) throw new Error('Produk gagal dimuat. Silakan coba lagi nanti.');
  return response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, { next: { revalidate: 3600 } });
  if (!response.ok) return null;
  const product = await response.json();
  return product && product.id ? product : null;
}
