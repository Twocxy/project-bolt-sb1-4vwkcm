import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Hoş Geldiniz!</h1>
          <p className="text-xl mb-6">En yeni teknoloji ürünleri burada.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
            Alışverişe Başla
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}