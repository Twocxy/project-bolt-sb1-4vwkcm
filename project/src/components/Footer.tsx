import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hakkımızda</h3>
            <p className="text-gray-400 text-sm">
              Kaliteli ürünler ve müşteri memnuniyeti odaklı hizmet anlayışımızla sizlere en iyiyi sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Ürünler</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Kampanyalar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">SSS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Telefon: +90 555 555 55 55</li>
              <li>Email: info@example.com</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tüm hakları saklıdır.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed by Tuğra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}