# ÖNLE.net - Toplumsal Farkındalık Platformu

Modern, interaktif ve kapsamlı bir toplumsal farkındalık web uygulaması. Next.js, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🌟 Özellikler

- **90+ Konu**: Çevre, Sağlık, Toplum, Güvenlik ve Dijital kategorilerinde kapsamlı içerik
- **Kanun Maddeleri**: Her konu için ilgili yasal düzenlemeler ve cezalar
- **Güncel Haberler**: API entegrasyonu ile konuyla ilgili güncel haberler
- **Modern UI/UX**: Framer Motion ile akıcı animasyonlar
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Arama ve Filtreleme**: Hızlı içerik erişimi
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

```
onle-next/
├── app/
│   ├── api/
│   │   └── news/          # Haber API endpoint
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/
│   ├── Hero.tsx           # Hero bölümü
│   ├── FilterBar.tsx      # Arama ve filtreler
│   ├── TopicCard.tsx      # Konu kartları
│   ├── TopicModal.tsx     # Detay modal
│   └── Footer.tsx         # Footer
├── data/
│   └── topics.ts          # Konu verileri
├── types/
│   └── index.ts           # TypeScript tipleri
└── public/                # Statik dosyalar
```

## 🔧 Yapılacaklar

### API Entegrasyonları
- [ ] NewsAPI entegrasyonu (güncel haberler için)
- [ ] Google News API alternatifi
- [ ] Mevzuat API entegrasyonu (güncel kanunlar)

### Özellik Geliştirmeleri
- [ ] Tüm 90 konunun kanun maddelerini ekle
- [ ] Kullanıcı favorileri (localStorage)
- [ ] Sosyal medya paylaşım butonları
- [ ] Dark/Light tema geçişi
- [ ] Çoklu dil desteği (TR/EN)
- [ ] İlerleme takibi (kaç konu öğrenildi)
- [ ] PDF export özelliği
- [ ] İstatistik grafikleri

### Teknik İyileştirmeler
- [ ] PWA desteği
- [ ] Offline mod
- [ ] Analytics entegrasyonu
- [ ] Performance optimizasyonları
- [ ] Unit testler
- [ ] E2E testler

## 🌐 API Kullanımı

### Haber API Örneği

```typescript
// /app/api/news/route.ts
const response = await fetch('/api/news?topic=plastik');
const data = await response.json();
```

### Gerçek API Entegrasyonu İçin

`.env.local` dosyası oluşturun:

```env
NEWS_API_KEY=your_api_key_here
GOOGLE_NEWS_API_KEY=your_api_key_here
```

## 📊 Veri Yapısı

```typescript
interface Topic {
  id: number;
  icon: string;
  title: string;
  category: 'environment' | 'health' | 'society' | 'security' | 'digital';
  stats: string;
  ways: string[];
  laws?: Law[];
  relatedNews?: NewsItem[];
}
```

## 🎨 Renk Paleti

- **Çevre**: #00ff88
- **Sağlık**: #00d4ff
- **Toplum**: #a855f7
- **Güvenlik**: #ff6b35
- **Dijital**: #ffd93d
- **Uyarı**: #ff4757

## 📱 Acil Yardım Numaraları

- **112**: Acil Yardım
- **155**: Polis
- **183**: Şiddet Önleme
- **182**: Yeşilay
- **177**: Orman Yangını
- Ve daha fazlası...

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje toplumsal fayda için geliştirilmiştir.

## 📞 İletişim

Sorularınız için: info@onle.net

---

**Not**: Bu proje bilgilendirme amaçlıdır. Acil durumlarda mutlaka yetkili mercilere başvurun.
