import type { Topic } from '@/types';

/**
 * ÖNLE.NET - 90 Toplumsal Sorun ve Önleme Yolları
 * 
 * Kategoriler:
 * - Çevre (environment): 14 konu
 * - Sağlık (health): 21 konu
 * - Toplum (society): 28 konu
 * - Güvenlik (security): 12 konu
 * - Dijital (digital): 15 konu
 */

export const topicsData: Topic[] = [
    // ÇEVRE KATEGORİSİ
    {
        id: 1,
        icon: "🌲",
        title: "AĞAÇ YIKIMINI ÖNLE",
        subtitle: "Ormansızlaşma",
        category: "environment",
        categoryName: "Çevre",
        stats: "Yılda 10 milyon hektar orman kaybı",
        ways: [
            "Geri dönüşüm yap (kağıt tasarrufu)",
            "Dijital belge kullan",
            "Ağaç dikme kampanyalarına katıl",
            "FSC sertifikalı ürünler tercih et",
            "Orman yangınlarını ihbar et",
            "Ahşap mobilya yerine alternatif kullan"
        ],
        laws: [
          {
                    lawNumber: "6831",
                    article: "Madde 93",
                    content: "Ormanları yakmak veya orman içinde izinsiz ateş yakmak suçtur.",
                    penalty: "2-5 yıl hapis",
                    source: "Orman Kanunu"
          }
],
        apps: [
          {
                    name: "TEMA Doğa Kaşifi",
                    description: "Bitki türlerini tanı",
                    platform: "Tümü",
                    icon: "🌳"
          }
],
        emergencyNumbers: [
          {
                    name: "Orman Yangını",
                    number: "177",
                    description: "Orman yangını ihbar",
                    icon: "🔥"
          }
]
    },
    {
        id: 2,
        icon: "💧",
        title: "SU İSRAFINI ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Türkiye kişi başı 200 litre/gün",
        ways: [
            "Duşta geçirilen süreyi kısalt (5 dk)",
            "Damlatan muslukları tamir et",
            "Yağmur suyu biriktir",
            "Tasarruflu armatürler kullan",
            "Çamaşır/bulaşık makinesini dolu çalıştır",
            "Araba yıkarken kova kullan"
        ],
        laws: [
          {
                    lawNumber: "2872",
                    article: "Madde 20",
                    content: "Su kaynaklarını kirletmek yasaktır.",
                    penalty: "İdari para cezası",
                    source: "Çevre Kanunu"
          }
],
        apps: [
          {
                    name: "Su Ayak İzi",
                    description: "Su tüketimini hesapla",
                    platform: "Web",
                    icon: "💧"
          }
],
        emergencyNumbers: [
          {
                    name: "Su Arıza",
                    number: "185",
                    description: "Su arıza ve ihbar",
                    icon: "🚰"
          }
]
    },
    {
        id: 3,
        icon: "🔥",
        title: "ORMAN YANGINLARINI ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Yılda 2000+ orman yangını",
        ways: [
            "Ormanda ateş yakma",
            "Sigara izmaritini atma",
            "Cam şişe bırakma (mercek etkisi)",
            "Piknik sonrası kontrol et",
            "177'yi ara (ihbar hattı)",
            "Mangal sadece belirlenen alanlarda"
        ],
        laws: [
          {
                    lawNumber: "6831",
                    article: "Madde 110",
                    content: "Kasten orman yakmak.",
                    penalty: "10 yıldan az olmamak üzere hapis",
                    source: "Orman Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Orman Yangını",
                    number: "177",
                    description: "7/24 İhbar",
                    icon: "🚒"
          }
]
    },
    {
        id: 4,
        icon: "🌍",
        title: "HAVA KİRLİLİĞİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "7 milyon erken ölüm/yıl (WHO)",
        ways: [
            "Toplu taşıma kullan",
            "Bisiklet veya yürüyüşü tercih et",
            "Elektrikli araçları destekle",
            "Enerji tasarrufu yap",
            "Yeşil alanları koru",
            "Egzoz emisyon kontrolü yaptır"
        ],
        laws: [
          {
                    lawNumber: "2872",
                    article: "Madde 8",
                    content: "Hava kirliliğine neden olmak.",
                    penalty: "İdari para cezası",
                    source: "Çevre Kanunu"
          }
],
        apps: [
          {
                    name: "Hava Kalitesi",
                    description: "Hava kalitesini takip et",
                    platform: "Tümü",
                    icon: "🌫️"
          }
]
    },
    {
        id: 5,
        icon: "🗑️",
        title: "PLASTİK KİRLİLİĞİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Yılda 8 milyon ton plastik okyanuslara",
        ways: [
            "Bez torba kullan",
            "Tek kullanımlık plastikten kaçın",
            "Geri dönüşüm yap",
            "Su matarası taşı",
            "Plastik pipet kullanma",
            "Cam kavanoz tercih et"
        ],
        laws: [
          {
                    lawNumber: "Yönetmelik",
                    article: "Ambalaj Atıkları",
                    content: "Plastik poşetlerin ücretlendirilmesi.",
                    penalty: "Geri kazanım katılım payı",
                    source: "Çevre Bakanlığı"
          }
]
    },
    {
        id: 6,
        icon: "⚡",
        title: "ENERJİ İSRAFINI ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Evlerin %30'u gereksiz enerji tüketiyor",
        ways: [
            "LED ampul kullan",
            "Kullanmadığın cihazları prizden çek",
            "A+++ enerji sınıfı cihazlar al",
            "Doğal aydınlatmayı kullan",
            "Akıllı termostat kullan",
            "Güneş enerjisi paneli düşün"
        ],
        laws: [
          {
                    lawNumber: "5627",
                    article: "Madde 7",
                    content: "Enerji verimliliği önlemleri.",
                    penalty: "İdari yaptırım",
                    source: "Enerji Verimliliği Kanunu"
          }
]
    },
    {
        id: 7,
        icon: "🏭",
        title: "TOPRAK KİRLİLİĞİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Dünya topraklarının %33'ü bozulmuş",
        ways: [
            "Kimyasal gübre azalt",
            "Organik tarımı destekle",
            "Atıkları doğru bertaraf et",
            "Pilleri geri dönüşüme ver",
            "Kompost kullan",
            "Endüstriyel atıkları ihbar et"
        ],
        laws: [
          {
                    lawNumber: "5403",
                    article: "Madde 13",
                    content: "Toprağın kirletilmesi yasaktır.",
                    penalty: "İdari para cezası",
                    source: "Toprak Koruma Kanunu"
          }
]
    },
    {
        id: 8,
        icon: "🐾",
        title: "HAYVAN NESLİ TÜKENMESİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "1 milyon tür yok olma tehlikesinde",
        ways: [
            "Doğal yaşam alanlarını koru",
            "Kaçak avcılığı ihbar et",
            "Hayvan ürünlerini boykot et",
            "Barınaktan sahiplen",
            "Koruma derneklerini destekle",
            "Deniz ürünleri tüketimini azalt"
        ],
        laws: [
          {
                    lawNumber: "4915",
                    article: "Madde 21",
                    content: "Koruma altındaki türleri avlamak yasaktır.",
                    penalty: "Tazminat ve hapis",
                    source: "Kara Avcılığı Kanunu"
          }
]
    },
    {
        id: 9,
        icon: "🌊",
        title: "DENİZ KİRLİLİĞİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Akdeniz'de mikroplastik yoğunluğu en yüksek",
        ways: [
            "Sahilde çöp bırakma",
            "Kimyasalları lavaboya dökme",
            "Balık ağlarını denize atma",
            "Sahil temizlik etkinliklerine katıl",
            "Mercan resiflerini koru",
            "Güneş kremi seçimine dikkat et"
        ],
        laws: [
          {
                    lawNumber: "2872",
                    article: "Madde 20",
                    content: "Denizleri kirletmek.",
                    penalty: "Ağır idari para cezası",
                    source: "Çevre Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Sahil Güvenlik",
                    number: "158",
                    description: "Deniz kirliliği ihbar",
                    icon: "🚤"
          }
]
    },
    {
        id: 10,
        icon: "🏔️",
        title: "BUZUL ERİMESİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Her yıl 1.2 trilyon ton buz kaybı",
        ways: [
            "Karbon ayak izini azalt",
            "Yerel ürünler tüket",
            "Uçak yerine tren tercih et",
            "Et tüketimini azalt",
            "Yenilenebilir enerji kullan",
            "İklim aktivizmine katıl"
        ],
        laws: [
          {
                    lawNumber: "Uluslararası",
                    article: "Paris Anlaşması",
                    content: "Karbon emisyonlarını azaltma taahhüdü.",
                    source: "BM İklim Değişikliği"
          }
]
    },
    {
        id: 11,
        icon: "🦟",
        title: "İSTİLACI TÜRLERİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Biyoçeşitlilik kaybının %40'ı istilacı türlerden",
        ways: [
            "Egzotik hayvan besleme",
            "Yurt dışından bitki getirme",
            "Gemi balast suyunu kontrol et",
            "Görüldüğünde yetkililere bildir",
            "Yerel türleri tercih et"
        ],
        laws: [
          {
                    lawNumber: "5977",
                    article: "Madde 5",
                    content: "Biyogüvenlik risk değerlendirmesi.",
                    source: "Biyogüvenlik Kanunu"
          }
]
    },
    {
        id: 12,
        icon: "🌾",
        title: "ÇÖLLEŞMEYİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Her yıl 12 milyon hektar çölleşiyor",
        ways: [
            "Su tasarrufu yap",
            "Ağaçlandırma projelerine katıl",
            "Sürdürülebilir tarımı destekle",
            "Otlatmayı kontrol et",
            "Erozyon önleme tekniklerini uygula"
        ],
        laws: [
          {
                    lawNumber: "5403",
                    article: "Erozyon",
                    content: "Erozyonla mücadele tedbirleri.",
                    source: "Toprak Koruma Kanunu"
          }
]
    },

    // SAĞLIK KATEGORİSİ
    {
        id: 13,
        icon: "🍞",
        title: "GIDA İSRAFINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Dünyada üretilen gıdanın 1/3'ü israf",
        ways: [
            "İhtiyacın kadar al",
            "Son kullanma tarihlerini kontrol et",
            "Artıkları değerlendir",
            "Kompost yap",
            "Gıda bağışı yap",
            "Buzdolabını düzenli tut"
        ],
        laws: [
          {
                    lawNumber: "5996",
                    article: "Madde 21",
                    content: "Gıda hijyeni ve güvenliği.",
                    penalty: "İdari para cezası",
                    source: "Veteriner Hizmetleri Kanunu"
          }
],
        apps: [
          {
                    name: "Olel",
                    description: "Gıda paylaşım platformu",
                    platform: "Tümü",
                    icon: "🍲"
          }
]
    },
    {
        id: 14,
        icon: "💊",
        title: "MADDE BAĞIMLILIĞINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "35 milyon kişi uyuşturucu bağımlısı",
        ways: [
            "Arkadaş baskısına hayır de",
            "Stres yönetimi öğren",
            "Sağlıklı hobiler edin",
            "Profesyonel yardım al (Yeşilay 182)",
            "Aile iletişimini güçlendir",
            "Risk faktörlerini tanı"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 191",
                    content: "Uyuşturucu madde kullanmak.",
                    penalty: "2-5 yıl hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "ALO 191",
                    number: "191",
                    description: "Uyuşturucu ile Mücadele",
                    icon: "💊"
          }
]
    },
    {
        id: 15,
        icon: "🍺",
        title: "ALKOL BAĞIMLILIĞINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "3 milyon ölüm/yıl alkol kaynaklı",
        ways: [
            "Sosyal baskıya direnç göster",
            "Alternatif içecekler tercih et",
            "Tetikleyicileri tanı",
            "Destek gruplarına katıl",
            "Profesyonel yardım al",
            "Aile desteği sağla"
        ],
        laws: [
          {
                    lawNumber: "4250",
                    article: "Madde 6",
                    content: "18 yaş altına alkol satışı yasaktır.",
                    penalty: "İdari para cezası",
                    source: "İspirto ve İspirtolu İçkiler Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Yeşilay",
                    number: "115",
                    description: "Bağımlılık Danışmanlığı",
                    icon: "💚"
          }
]
    },
    {
        id: 16,
        icon: "🚬",
        title: "SİGARA BAĞIMLILIĞINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Yılda 8 milyon ölüm",
        ways: [
            "İlk sigarayı içme",
            "Pasif dumandan kaçın",
            "Bırakma hatlarını ara (ALO 171)",
            "Nikotin bandı/sakızı dene",
            "Tetikleyici ortamlardan uzak dur",
            "Egzersiz yap"
        ],
        laws: [
          {
                    lawNumber: "4207",
                    article: "Madde 2",
                    content: "Kapalı alanlarda tütün ürünleri tüketimi yasaktır.",
                    penalty: "İdari para cezası",
                    source: "Tütün Ürünleri Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Sigara Bırakma",
                    number: "171",
                    description: "Danışma Hattı",
                    icon: "🚭"
          }
]
    },
    {
        id: 17,
        icon: "📱",
        title: "TEKNOLOJİ BAĞIMLILIĞINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Gençlerin %50'si bağımlı",
        ways: [
            "Ekran süresi limiti koy",
            "Bildirimleri kapat",
            "Yatak odasında telefon olmasın",
            "Dijital detoks günleri yap",
            "Yüz yüze sosyalleş",
            "Hobi edin"
        ],
        apps: [
          {
                    name: "Digital Wellbeing",
                    description: "Ekran süresi takibi",
                    platform: "Android",
                    icon: "📱"
          }
],
        emergencyNumbers: [
          {
                    name: "Yeşilay",
                    number: "115",
                    description: "Teknoloji Bağımlılığı Destek",
                    icon: "💚"
          }
]
    },
    {
        id: 18,
        icon: "🎰",
        title: "KUMAR BAĞIMLILIĞINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Türkiye'de %3 kumar bağımlılığı",
        ways: [
            "Bahis sitelerine girme",
            "Para limitin olsun",
            "Kaybı kovalama",
            "Profesyonel yardım al",
            "Tetikleyicileri tanı",
            "Finansal danışmanlık al"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 228",
                    content: "Kumar oynanması için yer ve imkan sağlama.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "Yeşilay",
                    number: "115",
                    description: "Kumar Bağımlılığı",
                    icon: "🎰"
          }
]
    },
    {
        id: 19,
        icon: "🍔",
        title: "OBEZİTEYİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Dünya nüfusunun %39'u fazla kilolu",
        ways: [
            "Porsiyon kontrolü yap",
            "İşlenmiş gıdalardan kaçın",
            "Günde 30 dk egzersiz",
            "Su tüketimini artır",
            "Şekerli içecekleri azalt",
            "Düzenli öğün ye"
        ],
        apps: [
          {
                    name: "E-Nabız",
                    description: "Sağlık verilerini takip et",
                    platform: "Tümü",
                    icon: "🩺"
          }
]
    },
    {
        id: 20,
        icon: "💔",
        title: "KALP HASTALIKLARINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Dünyada 1 numaralı ölüm nedeni",
        ways: [
            "Düzenli egzersiz yap",
            "Sağlıklı beslen",
            "Sigarayı bırak",
            "Stresi yönet",
            "Tansiyonu kontrol et",
            "Kolesterolü takip et"
        ],
        emergencyNumbers: [
          {
                    name: "Acil Servis",
                    number: "112",
                    description: "Kalp krizi durumunda",
                    icon: "🚑"
          }
]
    },
    {
        id: 21,
        icon: "🧠",
        title: "İNMEYİ (FELÇ) ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Her 40 saniyede 1 inme vakası",
        ways: [
            "Tansiyonu kontrol et",
            "Düzenli egzersiz yap",
            "Sağlıklı beslen",
            "Sigarayı bırak",
            "Alkol tüketimini sınırla",
            "Diyabeti kontrol et"
        ],
        emergencyNumbers: [
          {
                    name: "Acil Servis",
                    number: "112",
                    description: "İnme belirtilerinde hemen ara",
                    icon: "🚑"
          }
]
    },
    {
        id: 22,
        icon: "🎗️",
        title: "KANSERİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Kanserlerin %30-50'si önlenebilir",
        ways: [
            "Sigara içme",
            "Sağlıklı beslen",
            "Düzenli egzersiz yap",
            "Güneşten korun",
            "Aşılarını yaptır (HPV, Hepatit B)",
            "Tarama testlerini aksatma"
        ],
        laws: [
          {
                    lawNumber: "Yönetmelik",
                    article: "Kanser Kayıt",
                    content: "Kanser vakalarının bildirimi zorunludur.",
                    source: "Sağlık Bakanlığı"
          }
],
        apps: [
          {
                    name: "Kanser Daire Bşk.",
                    description: "Bilgilendirme",
                    platform: "Web",
                    icon: "🎗️"
          }
]
    },
    {
        id: 23,
        icon: "🦷",
        title: "DİŞ HASTALIKLARINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Dünya nüfusunun %90'ı diş çürüğü yaşıyor",
        ways: [
            "Günde 2 kez fırçala",
            "Diş ipi kullan",
            "Şekerli gıdaları azalt",
            "Düzenli diş kontrolü",
            "Florürlü diş macunu kullan",
            "Asitli içecekleri sınırla"
        ],
        apps: [
          {
                    name: "MHRS",
                    description: "Diş randevusu al",
                    platform: "Tümü",
                    icon: "🦷"
          }
]
    },
    {
        id: 24,
        icon: "👁️",
        title: "GÖZ HASTALIKLARINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "2.2 milyar kişi görme bozukluğu yaşıyor",
        ways: [
            "20-20-20 kuralı (her 20 dk'da 20 sn uzağa bak)",
            "Güneş gözlüğü tak",
            "Yeterli aydınlatma sağla",
            "Düzenli göz kontrolü",
            "Ekran mesafesine dikkat et",
            "A vitamini tüket"
        ],
        apps: [
          {
                    name: "Göz Testi",
                    description: "Basit görme testleri",
                    platform: "Mobil",
                    icon: "👁️"
          }
]
    },
    {
        id: 25,
        icon: "🦴",
        title: "KEMİK ERİMESİNİ ÖNLE",
        subtitle: "Osteoporoz",
        category: "health",
        categoryName: "Sağlık",
        stats: "50 yaş üstü kadınların %30'unu etkiler",
        ways: [
            "Kalsiyum tüket",
            "D vitamini al",
            "Düzenli egzersiz yap",
            "Sigara ve alkolden uzak dur",
            "Düşme riskini azalt",
            "Kemik yoğunluğu testi yaptır"
        ],
        apps: [
          {
                    name: "Adım Sayar",
                    description: "Hareket takibi",
                    platform: "Mobil",
                    icon: "👣"
          }
]
    },
    {
        id: 26,
        icon: "🧠",
        title: "ALZHEİMER'I ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "55 milyondan fazla demans hastası",
        ways: [
            "Zihinsel aktiviteler yap (bulmaca, okuma)",
            "Sosyal ol",
            "Düzenli egzersiz yap",
            "Sağlıklı beslen",
            "Kaliteli uyku al",
            "Kronik hastalıkları kontrol et"
        ],
        emergencyNumbers: [
          {
                    name: "Alo 183",
                    number: "183",
                    description: "Yaşlı Bakım Hizmetleri",
                    icon: "👴"
          }
]
    },
    {
        id: 27,
        icon: "😰",
        title: "DEPRESYONU ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "280 milyon kişi depresyonla yaşıyor",
        ways: [
            "Sosyal bağlantıları güçlendir",
            "Düzenli egzersiz yap",
            "Kaliteli uyku al",
            "Stresi yönet",
            "Profesyonel yardım al",
            "Alkol/maddeden uzak dur"
        ],
        emergencyNumbers: [
          {
                    name: "Psikolojik Destek",
                    number: "182",
                    description: "MHRS üzerinden randevu",
                    icon: "🧠"
          }
]
    },
    {
        id: 28,
        icon: "😟",
        title: "ANKSİYETEYİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "301 milyon kişi anksiyete yaşıyor",
        ways: [
            "Nefes egzersizleri yap",
            "Meditasyon/mindfulness uygula",
            "Kafeini azalt",
            "Düzenli uyku al",
            "Egzersiz yap",
            "Terapi desteği al"
        ],
        apps: [
          {
                    name: "Headspace",
                    description: "Meditasyon ve uyku",
                    platform: "Tümü",
                    icon: "🧘"
          }
]
    },
    {
        id: 29,
        icon: "😴",
        title: "UYKU BOZUKLUKLARINI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Yetişkinlerin %30'u uykusuzluk çekiyor",
        ways: [
            "Düzenli uyku saati belirle",
            "Yatmadan önce ekrandan uzak dur",
            "Yatak odasını karanlık tut",
            "Kafein ve alkolü sınırla",
            "Egzersizi akşama bırakma",
            "Rahatlatıcı rutin oluştur"
        ],
        apps: [
          {
                    name: "Sleep Cycle",
                    description: "Uyku takibi",
                    platform: "Tümü",
                    icon: "😴"
          }
]
    },
    {
        id: 30,
        icon: "🤧",
        title: "ALERJİLERİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Dünya nüfusunun %40'ı alerjik",
        ways: [
            "Alerjenleri tanı ve kaçın",
            "Evi temiz tut",
            "Hava filtresi kullan",
            "Polenleri takip et",
            "Doktor kontrolünde ilaç kullan",
            "Bağışıklığı güçlendir"
        ],
        apps: [
          {
                    name: "Hava Kalitesi",
                    description: "Polen durumu",
                    platform: "Mobil",
                    icon: "🤧"
          }
]
    },

    // Devam - SAĞLIK
    {
        id: 31,
        icon: "🦠",
        title: "BULAŞICI HASTALIKLARI ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "COVID-19, grip, hepatit milyonlarca vaka",
        ways: [
            "El hijyenine dikkat et",
            "Aşılarını yaptır",
            "Kalabalıktan kaçın (hastalık döneminde)",
            "Maske kullan (gerektiğinde)",
            "Bağışıklığı güçlendir",
            "Hastalandığında evde kal"
        ],
        laws: [
          {
                    lawNumber: "1593",
                    article: "Madde 57",
                    content: "Bulaşıcı hastalıkları bildirim zorunluluğu.",
                    penalty: "İdari ceza",
                    source: "Umumi Hıfzıssıhha Kanunu"
          }
]
    },
    {
        id: 32,
        icon: "🩺",
        title: "DİYABETİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "537 milyon diyabet hastası",
        ways: [
            "Sağlıklı kilo koru",
            "Düzenli egzersiz yap",
            "Şeker tüketimini azalt",
            "Lifli gıdalar tüket",
            "Düzenli kan şekeri kontrolü",
            "Sigara ve alkolden uzak dur"
        ],
        apps: [
          {
                    name: "Diyabet Takip",
                    description: "Kan şekeri takibi",
                    platform: "Mobil",
                    icon: "🩸"
          }
]
    },

    // TOPLUM KATEGORİSİ
    {
        id: 33,
        icon: "👩",
        title: "KADINA YÖNELİK ŞİDDETİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "3 kadından 1'i şiddete maruz kalıyor",
        ways: [
            "ALO 183'ü ara (Şiddet Önleme Hattı)",
            "Şiddeti normalleştirme",
            "Ekonomik bağımsızlık kazan",
            "Destek ağı oluştur",
            "Delil topla (fotoğraf, rapor)",
            "Sığınma evlerini araştır",
            "Koruma kararı al",
            "Çevrendeki şiddeti ihbar et"
        ],
        laws: [
          {
                    lawNumber: "6284",
                    article: "Madde 5",
                    content: "Önleyici tedbir kararları.",
                    penalty: "Zorlama hapsi",
                    source: "Ailenin Korunması Kanunu"
          }
],
        apps: [
          {
                    name: "KADES",
                    description: "Kadın Acil Destek",
                    platform: "Tümü",
                    icon: "🆘"
          }
],
        emergencyNumbers: [
          {
                    name: "Şiddet Hattı",
                    number: "183",
                    description: "7/24 Destek",
                    icon: "📞"
          }
]
    },
    {
        id: 34,
        icon: "👨",
        title: "ERKEĞE YÖNELİK ŞİDDETİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Erkeklerin %40'ı partner şiddeti yaşıyor",
        ways: [
            "Şiddeti kabul etme, normalleştirme",
            "Utanma, yardım iste",
            "Delilleri kaydet",
            "Psikolojik destek al",
            "Hukuki haklarını öğren",
            "Destek gruplarına katıl",
            "ALO 182/183'ü ara"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 86",
                    content: "Kasten yaralama suçu.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 35,
        icon: "👶",
        title: "ÇOCUK İSTİSMARINI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Her 5 çocuktan 1'i istismara maruz kalıyor",
        ways: [
            "Çocuklarla açık iletişim kur",
            "Şüpheli durumları ihbar et (ALO 183)",
            "Güvenli/güvensiz dokunuşu öğret",
            "Çevrendeki çocukları gözlemle",
            "Vücut bütünlüğünü öğret",
            "Sır tutmayı öğretme",
            "Çocuk haklarını öğret"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 103",
                    content: "Çocukların cinsel istismarı.",
                    penalty: "Ağır hapis cezası",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "Sosyal Destek",
                    number: "183",
                    description: "Çocuk İhmal ve İstismar",
                    icon: "👶"
          }
]
    },
    {
        id: 36,
        icon: "👴",
        title: "YAŞLI İSTİSMARI VE İHMALİNİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "6 yaşlıdan 1'i istismar yaşıyor",
        ways: [
            "Düzenli ziyaret et",
            "Mali durumunu takip et (dolandırıcılık)",
            "Sağlık kontrollerini aksatma",
            "Bakıcı stresini azalt",
            "Şüpheli durumları ihbar et",
            "Sosyal aktivitelere dahil et",
            "Teknoloji kullanmayı öğret"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 98",
                    content: "Yardım veya bildirim yükümlülüğünün yerine getirilmemesi.",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "Yaşlı Destek",
                    number: "183",
                    description: "Yaşlı İhbar Hattı",
                    icon: "👴"
          }
]
    },
    {
        id: 37,
        icon: "💼",
        title: "MOBBİNGİ ÖNLE",
        subtitle: "İş Yeri Zorbalığı",
        category: "society",
        categoryName: "Toplum",
        stats: "Çalışanların %15'i mobbing yaşıyor",
        ways: [
            "Her şeyi yazılı kaydet",
            "Tanık bul",
            "İK'ya resmi şikayet yap",
            "İş Mahkemesi'ne başvur",
            "Psikolojik destek al",
            "ALO 170'i ara (Çalışma Bakanlığı)",
            "Sendikaya başvur",
            "Mobbingi tanı ve tanımla"
        ],
        laws: [
          {
                    lawNumber: "6098",
                    article: "Madde 417",
                    content: "İşçinin kişiliğinin korunması (Mobbing).",
                    penalty: "Tazminat",
                    source: "Borçlar Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "ALO 170",
                    number: "170",
                    description: "Çalışma Hayatı İletişim",
                    icon: "💼"
          }
]
    },
    {
        id: 38,
        icon: "🏫",
        title: "OKUL ZORBALIGI ÖNLE",
        subtitle: "Bullying",
        category: "society",
        categoryName: "Toplum",
        stats: "Öğrencilerin %30'u zorbalığa maruz kalıyor",
        ways: [
            "Çocuğunla açık iletişim kur",
            "Okul yönetimine bildir",
            "Belgeleme yap",
            "Psikolojik destek sağla",
            "Sosyal beceriler geliştir",
            "Rehberlik servisine yönlendir",
            "Gerekirse okul değişikliği"
        ],
        laws: [
          {
                    lawNumber: "Yönetmelik",
                    article: "Disiplin",
                    content: "Okul disiplin kuralları.",
                    source: "MEB Yönetmeliği"
          }
]
    },
    {
        id: 39,
        icon: "📱",
        title: "SİBER ZORBALIGI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Gençlerin %37'si siber zorbalık yaşıyor",
        ways: [
            "Kişisel bilgilerini paylaşma",
            "Zorbalığı ihbar et",
            "Ekran görüntüsü al (kanıt)",
            "Güvenilir birine anlat",
            "Engelle ve şikayet et",
            "Güçlü şifre kullan",
            "BTK'ya şikayet (ihbarweb.org.tr)"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 106",
                    content: "Tehdit suçu.",
                    penalty: "6 ay - 2 yıl hapis",
                    source: "TCK"
          }
],
        apps: [
          {
                    name: "İhbar Web",
                    description: "İnternet içeriği ihbar",
                    platform: "Web",
                    icon: "💻"
          }
]
    },
    {
        id: 40,
        icon: "🏠",
        title: "AİLE İÇİ ŞİDDETİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "4 aileden 1'inde şiddet var",
        ways: [
            "Şiddeti normalleştirme",
            "ALO 183'ü ara",
            "Güvenli bir yere sığın",
            "Koruma kararı al",
            "Delil topla",
            "Çocukları koru",
            "Destek gruplarına katıl"
        ],
        laws: [
          {
                    lawNumber: "6284",
                    article: "Genel",
                    content: "Şiddet uygulayanın evden uzaklaştırılması.",
                    source: "Ailenin Korunması Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Polis",
                    number: "155",
                    description: "Acil Durum",
                    icon: "👮"
          }
]
    },
    {
        id: 41,
        icon: "🤝",
        title: "AYRIMCILIĞI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "%40'tan fazlası ayrımcılığa maruz kalıyor",
        ways: [
            "Önyargılarını sorgula",
            "Farklılıklara saygı göster",
            "Ayrımcılığı ihbar et",
            "Eşitlik için ses ol",
            "Çocuklara tolerans öğret",
            "Kapsayıcı dil kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 122",
                    content: "Nefret ve ayrımcılık suçu.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 42,
        icon: "🌈",
        title: "NEFRET SUÇLARINI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Nefret suçları artış gösteriyor",
        ways: [
            "Nefret söylemini bildır",
            "Mağdurlara destek ol",
            "Farkındalık oluştur",
            "Empati geliştir",
            "Sosyal medyada dikkatli ol",
            "Topluluk dayanışması kur"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 216",
                    content: "Halkı kin ve düşmanlığa tahrik.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 43,
        icon: "👥",
        title: "TOPLUMSAL CİNSİYET EŞİTSİZLİĞİNİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Kadınlar erkeklerden %20 az kazanıyor",
        ways: [
            "Eşit işe eşit ücret iste",
            "Cinsiyetçi dili reddet",
            "Ev işlerini paylaş",
            "Kız çocuklarını destekle",
            "Rol model ol",
            "Politika değişikliğini destekle"
        ],
        laws: [
          {
                    lawNumber: "Anayasa",
                    article: "Madde 10",
                    content: "Kadınlar ve erkekler eşit haklara sahiptir.",
                    source: "T.C. Anayasası"
          }
]
    },
    {
        id: 44,
        icon: "💰",
        title: "YOKSULLUĞU ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "700 milyondan fazla kişi aşırı yoksul",
        ways: [
            "Eğitime yatırım yap",
            "Sosyal yardım programlarını destekle",
            "İstihdam fırsatları yarat",
            "Mikro kredi sistemlerini destekle",
            "Adil ticaret ürünleri tercih et",
            "Bağış ve gönüllülük yap"
        ],
        laws: [
          {
                    lawNumber: "3294",
                    article: "Madde 1",
                    content: "Sosyal yardımlaşma ve dayanışma.",
                    source: "SYDV Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Sosyal Yardım",
                    number: "144",
                    description: "Sosyal Yardım Hattı",
                    icon: "💰"
          }
]
    },
    {
        id: 45,
        icon: "🎓",
        title: "EĞİTİMDE EŞİTSİZLİĞİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "260 milyon çocuk okula gitmiyor",
        ways: [
            "Burs programlarını destekle",
            "Kız çocuklarının eğitimini savun",
            "Kırsal bölgelere yardım et",
            "Dijital eğitimi yaygınlaştır",
            "Öğretmen eğitimini destekle",
            "Okul malzemesi bağışla"
        ],
        laws: [
          {
                    lawNumber: "Anayasa",
                    article: "Madde 42",
                    content: "Kimse eğitim ve öğrenim hakkından yoksun bırakılamaz.",
                    source: "T.C. Anayasası"
          }
]
    },
    {
        id: 46,
        icon: "🏥",
        title: "SAĞLIK HİZMETLERİNE ERİŞİMSİZLİĞİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "400 milyon kişi sağlık hizmetine erişemiyor",
        ways: [
            "Sağlık sigortasını yaygınlaştır",
            "Mobil sağlık hizmetlerini destekle",
            "Temel ilaçlara erişimi sağla",
            "Kırsal sağlık merkezlerini destekle",
            "Koruyucu sağlık hizmetlerini güçlendir"
        ],
        laws: [
          {
                    lawNumber: "Anayasa",
                    article: "Madde 56",
                    content: "Herkes sağlıklı yaşama hakkına sahiptir.",
                    source: "T.C. Anayasası"
          }
]
    },
    {
        id: 47,
        icon: "👶",
        title: "ÇOCUK İŞÇİLİĞİNİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "160 milyon çocuk işçi",
        ways: [
            "Şüpheli durumları ihbar et",
            "Bilinçli tüketici ol",
            "Eğitimi destekle",
            "Ailelere ekonomik destek",
            "İnsan hakları örgütlerini destekle",
            "Sorumlu şirketleri tercih et"
        ],
        laws: [
          {
                    lawNumber: "4857",
                    article: "Madde 71",
                    content: "15 yaşını doldurmamış çocukların çalıştırılması yasaktır.",
                    penalty: "İdari para cezası",
                    source: "İş Kanunu"
          }
]
    },
    {
        id: 48,
        icon: "🧓",
        title: "YAŞLI AYRIMCILIĞINI ÖNLE",
        subtitle: "Ageism",
        category: "society",
        categoryName: "Toplum",
        stats: "Yaşlıların %50'si ayrımcılık yaşıyor",
        ways: [
            "Yaşlılara değer ver",
            "Kuşaklararası iletişimi güçlendir",
            "Yaşlı istihdamını destekle",
            "Medyada pozitif temsil",
            "Yaşlı haklarını savun"
        ],
        laws: [
          {
                    lawNumber: "6701",
                    article: "Madde 3",
                    content: "Ayrımcılık yasağı.",
                    source: "TİHEK Kanunu"
          }
]
    },
    {
        id: 49,
        icon: "♿",
        title: "ENGELLİ AYRIMCILIĞINI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "1 milyar kişi engelli",
        ways: [
            "Erişilebilir tasarım yap",
            "Kapsayıcı dil kullan",
            "İstihdam fırsatları sun",
            "Eğitim fırsatları sağla",
            "Fiziksel engelleri kaldır",
            "Empati geliştir"
        ],
        laws: [
          {
                    lawNumber: "5378",
                    article: "Madde 4",
                    content: "Engellilere karşı ayrımcılık yapılamaz.",
                    source: "Engelliler Hakkında Kanun"
          }
]
    },
    {
        id: 50,
        icon: "🏳️",
        title: "MÜLTECİ AYRIMCILIĞINI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "100 milyondan fazla yerinden edilmiş insan",
        ways: [
            "Empati geliştir",
            "Entegrasyon programlarını destekle",
            "Nefret söylemini reddet",
            "İnsani yardıma katıl",
            "Hikayelerini dinle",
            "Hukuki haklarını öğren"
        ],
        laws: [
          {
                    lawNumber: "6458",
                    article: "Madde 4",
                    content: "Geri gönderme yasağı.",
                    source: "YUKK"
          }
]
    },

    // GÜVENLİK KATEGORİSİ
    {
        id: 51,
        icon: "🚗",
        title: "TRAFİK KAZALARINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda 1.35 milyon trafik ölümü",
        ways: [
            "Emniyet kemeri tak",
            "Hız limitine uy",
            "Alkollü araç kullanma",
            "Telefona bakma",
            "Dinlenmiş olarak yola çık",
            "Kask kullan (motosiklet)",
            "Çocuk koltuğu kullan",
            "Araç bakımını yaptır"
        ],
        laws: [
          {
                    lawNumber: "2918",
                    article: "Madde 48",
                    content: "Alkollü araç kullanımı yasağı.",
                    penalty: "Ehliyet iadesi ve para cezası",
                    source: "Karayolları Trafik Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Trafik",
                    number: "154",
                    description: "Trafik Polisi",
                    icon: "🚓"
          }
]
    },
    {
        id: 52,
        icon: "🏠",
        title: "EV KAZALARINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda 300.000+ ev kazası ölümü",
        ways: [
            "Islak zeminde dikkatli ol",
            "Elektrik tesisatını kontrol et",
            "Gaz kaçağına dikkat et",
            "Çocuklar için güvenlik önlemi al",
            "Yangın söndürücü bulundur",
            "Merdiven korkuluğu yap",
            "İlaçları kilitli tut",
            "Duman dedektörü kur"
        ],
        emergencyNumbers: [
          {
                    name: "Ambulans",
                    number: "112",
                    description: "Acil Sağlık",
                    icon: "🚑"
          }
]
    },
    {
        id: 53,
        icon: "👷",
        title: "İŞ KAZALARINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda 2.3 milyon iş kazası ölümü",
        ways: [
            "İş güvenliği eğitimi al",
            "Koruyucu ekipman kullan",
            "Güvenlik kurallarına uy",
            "Yorgunken çalışma",
            "Tehlikeleri bildir",
            "Düzenli sağlık kontrolü",
            "Ergonomik çalış"
        ],
        laws: [
          {
                    lawNumber: "6331",
                    article: "Madde 4",
                    content: "İşverenin iş sağlığı ve güvenliği yükümlülüğü.",
                    penalty: "İdari ve cezai yaptırım",
                    source: "İSG Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "ALO 170",
                    number: "170",
                    description: "İş Kazası Bildirim",
                    icon: "👷"
          }
]
    },
    {
        id: 54,
        icon: "🔥",
        title: "YANGINLARI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda yüzbinlerce ev yangını",
        ways: [
            "Sigara içerken dikkatli ol",
            "Elektrik tesisatını kontrol et",
            "Mutfağı gözetimsiz bırakma",
            "Yangın söndürücü bulundur",
            "Duman dedektörü kur",
            "Kaçış planı yap",
            "Çocukları eğit"
        ],
        emergencyNumbers: [
          {
                    name: "İtfaiye",
                    number: "110",
                    description: "Yangın İhbar",
                    icon: "🚒"
          }
]
    },
    {
        id: 55,
        icon: "💧",
        title: "BOĞULMALARI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda 236.000 boğulma ölümü",
        ways: [
            "Yüzme öğren",
            "Çocukları yalnız bırakma",
            "Can yeleği kullan",
            "Alkollü suya girme",
            "Akıntılı suya dikkat et",
            "Havuz çevresinde koşma",
            "Cankurtaran olan yerlerde yüz"
        ],
        emergencyNumbers: [
          {
                    name: "Sahil Güvenlik",
                    number: "158",
                    description: "Denizde Yardım",
                    icon: "🚤"
          }
]
    },
    {
        id: 56,
        icon: "⚡",
        title: "ELEKTRİK ÇARPMASINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda binlerce elektrik kazası",
        ways: [
            "Islak elle elektriğe dokunma",
            "Hasarlı kabloları değiştir",
            "Topraklama yaptır",
            "Aşırı yüklemeden kaçın",
            "Çocuk koruma kapağı kullan",
            "Yetkili elektrikçi çağır",
            "Kaçak akım rölesi kur"
        ],
        emergencyNumbers: [
          {
                    name: "Elektrik Arıza",
                    number: "186",
                    description: "Elektrik Arıza",
                    icon: "⚡"
          }
]
    },
    {
        id: 57,
        icon: "🧪",
        title: "ZEHİRLENMELERİ ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda yüzbinlerce zehirlenme vakası",
        ways: [
            "Temizlik malzemelerini kilitle",
            "İlaçları çocuklardan uzak tut",
            "Etiketleri oku",
            "Yiyecek ve kimyasalları ayır",
            "Zehir danışma hattını kaydet (114)",
            "Karbon monoksit dedektörü kur"
        ],
        emergencyNumbers: [
          {
                    name: "UZEM",
                    number: "114",
                    description: "Ulusal Zehir Danışma",
                    icon: "☠️"
          }
]
    },
    {
        id: 58,
        icon: "🌊",
        title: "DOĞAL AFETLERİ ÖNLE/HAZIRLAN",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda milyonlarca kişi afetten etkileniyor",
        ways: [
            "Deprem çantası hazırla",
            "Bina güçlendirmesi yaptır",
            "Acil durum planı yap",
            "İlk yardım öğren",
            "Sigorta yaptır",
            "Toplanma alanlarını öğren",
            "Acil numaraları kaydet (112)"
        ],
        apps: [
          {
                    name: "AFAD Acil",
                    description: "Tek tuşla acil çağrı",
                    platform: "Tümü",
                    icon: "🚨"
          }
],
        emergencyNumbers: [
          {
                    name: "AFAD",
                    number: "122",
                    description: "Afet ve Acil Durum",
                    icon: "🌪️"
          }
]
    },
    {
        id: 59,
        icon: "🔪",
        title: "HIRSIZLIĞI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Her 15 saniyede bir hırsızlık",
        ways: [
            "Kaliteli kilit kullan",
            "Alarm sistemi kur",
            "Kapıyı kilitli tut",
            "Tatilde evde biri varmış gibi göster",
            "Komşularla dayanış",
            "Değerli eşyaları kasada sakla",
            "Güvenlik kamerası kur"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 141",
                    content: "Hırsızlık suçu.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "Polis",
                    number: "155",
                    description: "Hırsızlık İhbar",
                    icon: "👮"
          }
]
    },
    {
        id: 60,
        icon: "🚶",
        title: "YAYA GÜVENLİĞİNİ SAĞLA",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Trafik ölümlerinin %23'ü yaya",
        ways: [
            "Yaya geçidini kullan",
            "İki yöne de bak",
            "Göz teması kur (sürücüyle)",
            "Gece yansıtıcı giy",
            "Kulaklık takarak yürüme",
            "Telefona bakma",
            "Karanlıkta dikkatli ol"
        ],
        laws: [
          {
                    lawNumber: "2918",
                    article: "Madde 74",
                    content: "Yaya geçidinde öncelik yayalarındır.",
                    penalty: "Para cezası",
                    source: "Karayolları Trafik Kanunu"
          }
]
    },
    {
        id: 61,
        icon: "🏍️",
        title: "MOTOSİKLET KAZALARINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Motosiklet kazaları 29 kat daha ölümcül",
        ways: [
            "Kask tak (her zaman)",
            "Koruyucu kıyafet giy",
            "Görünür renkler seç",
            "Savunmacı sür",
            "Hız yapma",
            "Alkollü kullanma",
            "Düzenli bakım yaptır"
        ],
        laws: [
          {
                    lawNumber: "2918",
                    article: "Madde 78",
                    content: "Kask takma zorunluluğu.",
                    penalty: "Para cezası",
                    source: "Karayolları Trafik Kanunu"
          }
]
    },
    {
        id: 62,
        icon: "🎿",
        title: "SPOR YARALANMALARINI ÖNLE",
        category: "security",
        categoryName: "Güvenlik",
        stats: "Yılda milyonlarca spor yaralanması",
        ways: [
            "Isınma egzersizi yap",
            "Koruyucu ekipman kullan",
            "Doğru teknik öğren",
            "Dinlenmeye zaman ayır",
            "Aşırı zorlanma",
            "Soğuma egzersizi yap",
            "Vücudunu dinle"
        ],
        laws: [
          {
                    lawNumber: "6222",
                    article: "Madde 17",
                    content: "Sporda şiddet ve düzensizliğin önlenmesi.",
                    source: "Sporda Şiddet Kanunu"
          }
]
    },

    // DİJİTAL GÜVENLİK KATEGORİSİ
    {
        id: 63,
        icon: "🔒",
        title: "KİMLİK HIRSIZLIĞINI ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "Her yıl milyonlarca kimlik hırsızlığı vakası",
        ways: [
            "Güçlü şifreler kullan",
            "2 faktörlü doğrulama aç",
            "Kişisel bilgileri paylaşma",
            "Banka hesaplarını takip et",
            "Belgeleri imha et (parçala)",
            "Phishing'e dikkat et",
            "Kredi raporunu kontrol et"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 136",
                    content: "Verileri hukuka aykırı olarak verme veya ele geçirme.",
                    penalty: "2-4 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 64,
        icon: "💻",
        title: "SİBER SALDIRILARI ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "Her 39 saniyede bir siber saldırı",
        ways: [
            "Antivirüs kullan",
            "Yazılımları güncel tut",
            "Güvenli Wi-Fi kullan",
            "VPN kullan",
            "Şüpheli linklere tıklama",
            "Düzenli yedek al",
            "Güvenlik duvarı kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 243",
                    content: "Bilişim sistemine girme.",
                    penalty: "1 yıla kadar hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "USOM",
                    number: "Web",
                    description: "Siber Olay Bildirim",
                    icon: "💻"
          }
]
    },
    {
        id: 65,
        icon: "📧",
        title: "DOLANDIRICILIK ÖNLE",
        subtitle: "Phishing",
        category: "digital",
        categoryName: "Dijital",
        stats: "E-postaların %1.2'si phishing",
        ways: [
            "Göndereni kontrol et",
            "Linklere dikkat et",
            "Kişisel bilgi verme",
            "Acil istek yapan mesajlara inanma",
            "Resmi kanalları kullan",
            "Şüpheliyse doğrula",
            "Spam filtresi kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 158",
                    content: "Bilişim sistemleri kullanılarak dolandırıcılık.",
                    penalty: "3-10 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 66,
        icon: "📱",
        title: "VERİ GİZLİLİĞİNİ KORU",
        category: "digital",
        categoryName: "Dijital",
        stats: "Kullanıcıların %79'u veri gizliliğinden endişeli",
        ways: [
            "Gizlilik ayarlarını kontrol et",
            "Uygulama izinlerini gözden geçir",
            "Konum paylaşımını kapat",
            "Çerezleri temizle",
            "Güvenli tarayıcı kullan",
            "Gizlilik politikalarını oku",
            "Gerekmeyen hesapları sil"
        ],
        laws: [
          {
                    lawNumber: "6698",
                    article: "Madde 12",
                    content: "Veri güvenliğini sağlama yükümlülüğü.",
                    penalty: "İdari para cezası",
                    source: "KVKK"
          }
],
        apps: [
          {
                    name: "KVKK",
                    description: "Şikayet Modülü",
                    platform: "Web",
                    icon: "🔒"
          }
]
    },
    {
        id: 67,
        icon: "👶",
        title: "ÇOCUKLARI ONLINE TEHLİKELERDEN KORU",
        category: "digital",
        categoryName: "Dijital",
        stats: "Çocukların %40'ı online risk yaşıyor",
        ways: [
            "Ebeveyn kontrolü kur",
            "İnternet kullanımını izle",
            "Açık iletişim kur",
            "Yaş uygun içerik sağla",
            "Yabancılarla konuşma kuralı",
            "Ekran süresi sınırla",
            "Güvenli arama motoru kullan"
        ],
        laws: [
          {
                    lawNumber: "5651",
                    article: "Madde 8",
                    content: "İnternet ortamında yapılan yayınların düzenlenmesi.",
                    source: "İnternet Kanunu"
          }
],
        apps: [
          {
                    name: "Güvenli İnternet",
                    description: "Aile Profili",
                    platform: "Web",
                    icon: "🛡️"
          }
]
    },
    {
        id: 68,
        icon: "💸",
        title: "ONLINE ALIŞVERİŞ DOLANDIRICILIĞINI ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "E-ticaret dolandırıcılığı milyarlarca dolar",
        ways: [
            "HTTPS kontrolü yap",
            "Bilinen siteleri kullan",
            "Kredi kartı kullan (koruma)",
            "Çok iyi fırsatlara inanma",
            "Yorumları oku",
            "Sanal kart kullan",
            "İletişim bilgilerini kontrol et"
        ],
        laws: [
          {
                    lawNumber: "6502",
                    article: "Madde 48",
                    content: "Mesafeli sözleşmelerde cayma hakkı.",
                    source: "Tüketici Kanunu"
          }
]
    },
    {
        id: 69,
        icon: "🔐",
        title: "RANSOMWARE'I ÖNLE",
        subtitle: "Fidye Yazılımı",
        category: "digital",
        categoryName: "Dijital",
        stats: "Her 11 saniyede bir ransomware saldırısı",
        ways: [
            "Düzenli yedek al",
            "Güncellemeleri yap",
            "Şüpheli ekleri açma",
            "Antivirüs kullan",
            "Ağ segmentasyonu yap",
            "Çalışanları eğit",
            "Fidye ödeme"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 244",
                    content: "Sistemi engelleme, bozma, verileri yok etme.",
                    penalty: "1-5 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 70,
        icon: "📸",
        title: "DEEPFAKE'LERDEN KORUN",
        category: "digital",
        categoryName: "Dijital",
        stats: "Deepfake videoları %900 arttı",
        ways: [
            "Kaynağı doğrula",
            "Görsel tutarsızlıklara dikkat et",
            "Ses-dudak senkronunu kontrol et",
            "Güvenilir haber kaynakları kullan",
            "Şüphelendiğinde araştır",
            "Paylaşmadan önce düşün"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 204",
                    content: "Resmi belgede sahtecilik (benzetme yoluyla).",
                    source: "TCK"
          }
]
    },
    {
        id: 71,
        icon: "🤖",
        title: "YAPAY ZEKA TABANLI DOLANDIRICILIKLARI ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "AI destekli dolandırıcılık %300 arttı",
        ways: [
            "Aile şifresi belirle",
            "Geri arayarak doğrula",
            "Acil para isteklerine inanma",
            "Ses klonlamaya dikkat et",
            "Video doğrulama iste",
            "Güvenlik sorularını zorlaştır"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 157",
                    content: "Hileli davranışlarla aldatma.",
                    penalty: "1-5 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 72,
        icon: "📍",
        title: "KONUM TAKİBİNDEN KORUN",
        category: "digital",
        categoryName: "Dijital",
        stats: "Uygulamaların %70'i konum takibi yapıyor",
        ways: [
            "Konum servislerini kapat",
            "Uygulama izinlerini gözden geçir",
            "Sosyal medyada konum paylaşma",
            "Fotoğraf metadatasını sil",
            "GPS takip cihazlarını kontrol et",
            "VPN kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 135",
                    content: "Kişisel verilerin (konum) kaydedilmesi.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 73,
        icon: "💬",
        title: "SOSYAL MÜHENDİSLİĞİ ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "Saldırıların %98'i sosyal mühendislik içeriyor",
        ways: [
            "Beklenmedik isteklere şüpheci ol",
            "Kimlik doğrula",
            "Baskı altında karar verme",
            "Bilgi paylaşmadan önce düşün",
            "Çalışanları eğit",
            "Prosedürleri takip et"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 158",
                    content: "Kişinin algılama yeteneğinin zayıflığından yararlanma.",
                    source: "TCK"
          }
]
    },

    // DİĞER TOPLUMSAL KONULAR
    {
        id: 74,
        icon: "🗣️",
        title: "NEFRET SÖYLEMİNİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Online nefret söylemi %20 arttı",
        ways: [
            "Düşün, sonra paylaş",
            "Nefret söylemini bildır",
            "Karşı anlatı oluştur",
            "Empati geliştir",
            "Çocukları eğit",
            "Kapsayıcı dil kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 216",
                    content: "Halkı kin ve düşmanlığa tahrik.",
                    source: "TCK"
          }
]
    },
    {
        id: 75,
        icon: "📰",
        title: "YANLIŞ BİLGİYİ ÖNLE",
        subtitle: "Dezenformasyon",
        category: "digital",
        categoryName: "Dijital",
        stats: "Yanlış bilgi doğrudan 6 kat hızlı yayılıyor",
        ways: [
            "Kaynağı kontrol et",
            "Başka kaynaklardan doğrula",
            "Tarihi kontrol et",
            "Yazarı araştır",
            "Duygusal tepki verme",
            "Paylaşmadan önce oku",
            "Fact-check siteleri kullan"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 217/A",
                    content: "Halkı yanıltıcı bilgiyi alenen yayma.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
],
        apps: [
          {
                    name: "Teyit.org",
                    description: "Doğrulama Platformu",
                    platform: "Web",
                    icon: "✅"
          }
]
    },
    {
        id: 76,
        icon: "🎭",
        title: "SOSYAL MEDYA BAĞIMLILIĞINI ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "Günde ortalama 2.5 saat sosyal medya",
        ways: [
            "Bildirimlerini kapat",
            "Zaman limiti koy",
            "Uygulamaları ana ekrandan kaldır",
            "Takip ettiğin hesapları azalt",
            "Dijital detoks yap",
            "Gerçek sosyalleşmeyi tercih et"
        ],
        emergencyNumbers: [
          {
                    name: "Yeşilay",
                    number: "115",
                    description: "Teknoloji Bağımlılığı",
                    icon: "💚"
          }
]
    },
    {
        id: 77,
        icon: "😔",
        title: "İNTİHARI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Her 40 saniyede bir intihar vakası",
        ways: [
            "Uyarı işaretlerini tanı",
            "Yargılamadan dinle",
            "Profesyonel yardıma yönlendir",
            "İntihar hatlarını paylaş (182)",
            "Yalnız bırakma",
            "Silah/ilaç erişimini kısıtla",
            "Medyada sorumlu habercilik"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 84",
                    content: "İntihara yönlendirme.",
                    penalty: "4-10 yıl hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "112",
                    number: "112",
                    description: "Acil Yardım",
                    icon: "🚑"
          }
]
    },
    {
        id: 78,
        icon: "🔊",
        title: "SES KİRLİLİĞİNİ ÖNLE",
        category: "environment",
        categoryName: "Çevre",
        stats: "Dünya nüfusunun %20'si gürültüden etkileniyor",
        ways: [
            "Gece sessizliğine uy",
            "Araç kornasını gereksiz çalma",
            "Ses yalıtımı yap",
            "Kulaklık sesini kıs",
            "Yeşil alanlar oluştur",
            "Gürültülü ekipmanı sınırla"
        ],
        laws: [
          {
                    lawNumber: "2872",
                    article: "Madde 14",
                    content: "Gürültüye neden olmak yasaktır.",
                    penalty: "İdari para cezası",
                    source: "Çevre Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Alo 181",
                    number: "181",
                    description: "Çevre ve Şehircilik",
                    icon: "🔊"
          }
]
    },
    {
        id: 79,
        icon: "🚭",
        title: "PASİF İÇİCİLİĞİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Pasif içicilik yılda 1.2 milyon ölüm",
        ways: [
            "Kapalı alanda sigara içme",
            "Arabada sigara içme",
            "Çocukları koru",
            "Sigara içilen alanlardan uzak dur",
            "Dumansız ortam politikası uygula"
        ],
        laws: [
          {
                    lawNumber: "4207",
                    article: "Madde 2",
                    content: "Tütün ürünlerinin yasaklandığı alanlar.",
                    source: "Tütün Kanunu"
          }
]
    },
    {
        id: 80,
        icon: "🏚️",
        title: "EVSİZLİĞİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "150 milyondan fazla evsiz",
        ways: [
            "Barınma programlarını destekle",
            "Mental sağlık hizmetlerini savun",
            "İstihdam fırsatları oluştur",
            "Bağımlılık tedavisini destekle",
            "Gönüllü ol",
            "Yardım kuruluşlarına bağış yap"
        ],
        laws: [
          {
                    lawNumber: "2828",
                    article: "Madde 3",
                    content: "Muhtaç kişilerin korunması.",
                    source: "Sosyal Hizmetler Kanunu"
          }
],
        emergencyNumbers: [
          {
                    name: "Alo 144",
                    number: "144",
                    description: "Sosyal Yardım",
                    icon: "🏠"
          }
]
    },
    {
        id: 81,
        icon: "🍼",
        title: "ERKEN EVLİLİĞİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "650 milyon kadın 18 yaşından önce evlendirildi",
        ways: [
            "Kız çocuğu eğitimini destekle",
            "Toplumu bilinçlendir",
            "Yasaları güçlendir",
            "Ekonomik güçlendirme sağla",
            "Şüpheli durumları ihbar et"
        ],
        laws: [
          {
                    lawNumber: "4721",
                    article: "Madde 124",
                    content: "Evlenme yaşı 17'dir.",
                    source: "Medeni Kanun"
          },
          {
                    lawNumber: "5237",
                    article: "Madde 103",
                    content: "Çocuğun cinsel istismarı.",
                    source: "TCK"
          }
]
    },
    {
        id: 82,
        icon: "👥",
        title: "İNSAN TİCARETİNİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "40 milyon insan ticareti mağduru",
        ways: [
            "Belirtileri tanı",
            "Şüpheli durumları ihbar et (157)",
            "Bilinçli tüketici ol",
            "Çocukları eğit",
            "Yolculukta dikkatli ol",
            "STK'ları destekle"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 80",
                    content: "İnsan ticareti suçu.",
                    penalty: "8-12 yıl hapis",
                    source: "TCK"
          }
],
        emergencyNumbers: [
          {
                    name: "Alo 157",
                    number: "157",
                    description: "İnsan Ticareti Mağdurları",
                    icon: "🆘"
          }
]
    },
    {
        id: 83,
        icon: "🎮",
        title: "ŞİDDET İÇERİKLİ MEDYAYI SINIRLA",
        category: "society",
        categoryName: "Toplum",
        stats: "Çocukların %90'ı şiddet içerikli oyun oynuyor",
        ways: [
            "Yaş sınırlarına uy",
            "Ebeveyn kontrolü kur",
            "İçeriği birlikte izle",
            "Alternatif aktiviteler öner",
            "Eleştirel medya okuryazarlığı öğret"
        ],
        laws: [
          {
                    lawNumber: "6112",
                    article: "Madde 8",
                    content: "Şiddeti özendirici yayın yasağı.",
                    source: "RTÜK Kanunu"
          }
],
        apps: [
          {
                    name: "RTÜK İletişim",
                    description: "Şikayet Bildirimi",
                    platform: "Web",
                    icon: "📺"
          }
]
    },
    {
        id: 84,
        icon: "🧬",
        title: "GENETİK AYRIMCILIĞI ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Genetik test sonuçlarıyla ayrımcılık artıyor",
        ways: [
            "Genetik bilgiyi koruyun",
            "Yasal haklarını öğren",
            "İş yerinde eşitlik iste",
            "Sigorta haklarını bil",
            "Gizlilik politikalarını oku"
        ],
        laws: [
          {
                    lawNumber: "6698",
                    article: "Madde 6",
                    content: "Özel nitelikli kişisel verilerin (genetik) korunması.",
                    source: "KVKK"
          }
]
    },
    {
        id: 85,
        icon: "🤳",
        title: "BEDEN DİSMORFİK BOZUKLUĞUNU ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "%2 oranında görülüyor, sosyal medyayla artıyor",
        ways: [
            "Filtreli fotoğraflara dikkat et",
            "Sosyal medya kullanımını sınırla",
            "Beden pozitifliğini destekle",
            "Profesyonel yardım al",
            "Çocuklara öz-değer öğret"
        ],
        apps: [
          {
                    name: "MHRS",
                    description: "Psikiyatri Randevusu",
                    platform: "Tümü",
                    icon: "🧠"
          }
]
    },
    {
        id: 86,
        icon: "📱",
        title: "GİZLİLİK İHLALİNİ ÖNLE",
        category: "digital",
        categoryName: "Dijital",
        stats: "Veri ihlalleri her yıl milyarlarca kaydı etkiliyor",
        ways: [
            "Kişisel bilgi paylaşımını sınırla",
            "Güçlü şifreler kullan",
            "Gizlilik ayarlarını kontrol et",
            "İzinsiz fotoğraf çekilmesine izin verme",
            "KVKK haklarını öğren"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 134",
                    content: "Özel hayatın gizliliğini ihlal.",
                    penalty: "1-3 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 87,
        icon: "🏛️",
        title: "YOLSUZLUĞU ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Yolsuzluk dünya GSYİH'sinin %5'ini etkiliyor",
        ways: [
            "Şeffaflığı destekle",
            "İhbarcıları koru",
            "Bağımsız denetimi savun",
            "Bilinçli seçmen ol",
            "STK'ları destekle",
            "Yolsuzluğu ihbar et"
        ],
        laws: [
          {
                    lawNumber: "5237",
                    article: "Madde 252",
                    content: "Rüşvet suçu.",
                    penalty: "4-12 yıl hapis",
                    source: "TCK"
          }
]
    },
    {
        id: 88,
        icon: "🗳️",
        title: "SEÇİM MANİPÜLASYONUNU ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Seçim güvenliği küresel endişe",
        ways: [
            "Kayıtlı seçmen ol",
            "Seçim gözlemciliği yap",
            "Yanlış bilgiye inanma",
            "Şüpheli durumları bildir",
            "Bağımsız medyayı destekle"
        ],
        laws: [
          {
                    lawNumber: "298",
                    article: "Madde 151",
                    content: "Oy kullanmayı engelleme.",
                    source: "Seçim Kanunu"
          }
]
    },
    {
        id: 89,
        icon: "🎓",
        title: "AKADEMİK SAHTECİLİĞİ ÖNLE",
        category: "society",
        categoryName: "Toplum",
        stats: "Öğrencilerin %30'u akademik sahteciliğe başvuruyor",
        ways: [
            "Dürüstlük kültürü oluştur",
            "Doğru alıntılama öğret",
            "Plagiat kontrol sistemleri kullan",
            "Yaptırımları uygula",
            "Öğrenci stresini azalt"
        ],
        laws: [
          {
                    lawNumber: "2547",
                    article: "Madde 53",
                    content: "İntihal suçu ve disiplin cezası.",
                    source: "YÖK Kanunu"
          }
]
    },
    {
        id: 90,
        icon: "💉",
        title: "AŞI KARŞITLIĞINDAKİ YANLIŞ BİLGİYİ ÖNLE",
        category: "health",
        categoryName: "Sağlık",
        stats: "Aşı tereddütü WHO'nun 10 sağlık tehdidinden biri",
        ways: [
            "Güvenilir kaynaklardan bilgi al",
            "Doktorunla konuş",
            "Sosyal medya bilgilerine şüpheci ol",
            "Bilimsel konsensüsü öğren",
            "Yanlış bilgiyi paylaşma"
        ],
        laws: [
          {
                    lawNumber: "1593",
                    article: "Madde 72",
                    content: "Zorunlu aşı uygulamaları.",
                    source: "Umumi Hıfzıssıhha Kanunu"
          }
]
    }
];
