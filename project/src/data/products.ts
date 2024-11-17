export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kablosuz Kulaklık",
    description: "Aktif gürültü önleme özellikli premium kablosuz kulaklık",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Akıllı Saat",
    description: "Fitness takibi ve bildirimler için su geçirmez akıllı saat",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
  },
  {
    id: 3,
    name: "Taşınabilir Şarj",
    description: "20000mAh hızlı şarj destekli powerbank",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80"
  },
  {
    id: 4,
    name: "Bluetooth Hoparlör",
    description: "Su geçirmez, 24 saat pil ömrü, stereo ses",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  },
  {
    id: 5,
    name: "Tablet Kılıfı",
    description: "Dayanıklı malzeme, kalemlik özellikli premium kılıf",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&q=80"
  },
  {
    id: 6,
    name: "Oyun Mouse",
    description: "RGB aydınlatmalı, 16000 DPI gaming mouse",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  }
];