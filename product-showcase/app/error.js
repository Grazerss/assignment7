'use client';
export default function ErrorPage({ reset }) {
  return <section className="container error-state"><p className="eyebrow">OOPS / SOMETHING WENT WRONG</p><h1>Let’s try that again.</h1><p>Terjadi kendala saat memuat halaman.</p><button className="button button-dark" onClick={() => reset()}>Try again ↻</button></section>;
}
