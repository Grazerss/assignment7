'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'luma-favorite-products';

export default function FavoriteButton({ productId, compact = false }) {
  const [favorite, setFavorite] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setFavorite(stored.includes(productId));
    } catch {
      setFavorite(false);
    }
    setReady(true);
  }, [productId]);

  function toggleFavorite() {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { stored = []; }
    const updated = stored.includes(productId)
      ? stored.filter((id) => id !== productId)
      : [...stored, productId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setFavorite(updated.includes(productId));
  }

  return (
    <button
      type="button"
      className={`favorite-button ${favorite ? 'is-favorite' : ''} ${compact ? 'favorite-compact' : ''}`}
      onClick={toggleFavorite}
      aria-pressed={favorite}
      aria-label={favorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
      title={ready ? (favorite ? 'Hapus dari favorit' : 'Add to Favorite') : 'Add to Favorite'}
    >
      <span aria-hidden="true">{favorite ? '♥' : '♡'}</span>{!compact && (favorite ? 'Added to Favorite' : 'Add to Favorite')}
    </button>
  );
}
