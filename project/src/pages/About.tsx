import React from 'react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Hakkımızda</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg mb-4">
          TechStore olarak, en son teknoloji ürünlerini müşterilerimizle buluşturuyoruz. 
          Kalite ve müşteri memnuniyeti bizim için her şeyden önce gelir.
        </p>
        <p className="text-lg mb-4">
          2024 yılından bu yana hizmet vermekte olan firmamız, teknoloji tutkunlarına 
          en iyi ürünleri en uygun fiyatlarla sunmayı hedeflemektedir.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Müşteri memnuniyeti odaklı hizmet</li>
            <li>Kaliteli ürün garantisi</li>
            <li>Hızlı teslimat</li>
            <li>7/24 müşteri desteği</li>
          </ul>
        </div>
      </div>
    </div>
  );
}