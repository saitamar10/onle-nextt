'use client';
// turbo-all

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import TopicCard from '@/components/TopicCard';
import TopicModal from '@/components/TopicModal';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { topicsData } from '@/data/topics';
import type { Topic, CategoryType, NewsItem } from '@/types';

type NavTab = 'home' | 'topics' | 'news' | 'about';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [activeTab, setActiveTab] = useState<NavTab>('home');
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [loadingNews, setLoadingNews] = useState(false);

    useEffect(() => {
        if (activeTab === 'news' && newsItems.length === 0) {
            const fetchNews = async () => {
                setLoadingNews(true);
                try {
                    const res = await fetch('/api/news?q=Türkiye gündemi');
                    const data = await res.json();
                    if (data.news && data.news.results) {
                        setNewsItems(data.news.results);
                    }
                } catch (error) {
                    console.error('Error fetching news:', error);
                } finally {
                    setLoadingNews(false);
                }
            };
            fetchNews();
        }
    }, [activeTab, newsItems.length]);

    const filteredTopics = topicsData.filter(topic => {
        const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
        const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            topic.stats.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Resmi duyurusu olan konular
    const announcementTopics = topicsData.filter(topic => topic.announcement);

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <>
                        <Hero />
                        <FilterBar
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                        />
                        <div className="max-w-7xl mx-auto px-4 py-6 pb-24">
                            {filteredTopics.length > 0 ? (
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {filteredTopics.map((topic, index) => (
                                        <motion.div
                                            key={topic.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                        >
                                            <TopicCard
                                                topic={topic}
                                                onClick={() => setSelectedTopic(topic)}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-4xl mb-4">🔍</p>
                                    <h3 className="text-2xl font-heading mb-2 text-text-primary dark:text-white">Sonuç Bulunamadı</h3>
                                    <p className="text-text-secondary dark:text-gray-400">Farklı bir arama terimi veya kategori deneyin</p>
                                </div>
                            )}
                        </div>
                    </>
                );

            case 'topics':
                return (
                    <div className="min-h-screen pt-20 pb-24 px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-heading mb-6 text-text-primary dark:text-white">📚 Tüm Konular</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {topicsData.map((topic, index) => (
                                    <motion.div
                                        key={topic.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.02 }}
                                    >
                                        <TopicCard
                                            topic={topic}
                                            onClick={() => setSelectedTopic(topic)}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'news':
                return (
                    <div className="min-h-screen pt-20 pb-24 px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-heading mb-2 text-text-primary dark:text-white">📰 Canlı Haberler</h2>
                            <p className="text-text-secondary dark:text-gray-400 mb-6">Türkiye gündeminden son gelişmeler</p>

                            {loadingNews ? (
                                <div className="text-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                                    <p className="text-text-secondary dark:text-gray-400">Haberler yükleniyor...</p>
                                </div>
                            ) : newsItems.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {newsItems.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-bg-secondary dark:bg-[#1A1D21] rounded-2xl overflow-hidden border border-border dark:border-[#2D3338] hover:border-primary transition-colors flex flex-col h-full"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            {item.thumbnail && (
                                                <div className="h-48 overflow-hidden relative">
                                                    <img
                                                        src={item.thumbnail.src}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-500 mb-3">
                                                    <span className="font-medium text-primary">{item.source_name}</span>
                                                    <span>•</span>
                                                    <span>{item.age}</span>
                                                </div>
                                                <h3 className="font-heading text-lg mb-2 text-text-primary dark:text-white line-clamp-2">{item.title}</h3>
                                                <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-3 mb-4 flex-1">{item.description}</p>
                                                <div className="text-primary text-sm font-medium mt-auto">Haberi Oku →</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-4xl mb-4">📭</p>
                                    <p className="text-text-secondary dark:text-gray-400">Haber bulunamadı</p>
                                </div>
                            )}

                            <div className="mt-12 pt-8 border-t border-border dark:border-[#2D3338]">
                                <h3 className="text-xl font-heading mb-4 text-text-primary dark:text-white">Resmi Duyurular</h3>
                                {announcementTopics.length > 0 ? (
                                    <div className="space-y-4">
                                        {announcementTopics.map((topic) => (
                                            <motion.div
                                                key={topic.id}
                                                className="bg-bg-secondary dark:bg-[#1A1D21] rounded-xl p-4 border border-border dark:border-[#2D3338] cursor-pointer hover:border-primary transition-colors"
                                                onClick={() => setSelectedTopic(topic)}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="text-2xl">{topic.icon}</div>
                                                    <div className="flex-1">
                                                        <h4 className="font-heading text-base mb-1 text-text-primary dark:text-white">{topic.title}</h4>
                                                        {topic.announcement && (
                                                            <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-500">
                                                                <span>🏛️ {topic.announcement.source}</span>
                                                                <span>•</span>
                                                                <span>{topic.announcement.date}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-text-secondary dark:text-gray-400 text-sm">Henüz duyuru bulunmamaktadır</p>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 'about':
                return (
                    <div className="min-h-screen pt-20 pb-24 px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-heading mb-6 text-text-primary dark:text-white">ℹ️ Hakkında</h2>
                            <div className="bg-bg-secondary dark:bg-[#1A1D21] rounded-2xl p-6 border border-border dark:border-[#2D3338] space-y-4">
                                <p className="text-text-primary dark:text-gray-300 leading-relaxed">
                                    <strong className="text-primary">ÖNLE.net</strong>, toplumsal farkındalık oluşturmak ve önleme stratejileri geliştirmek amacıyla tasarlanmış bir platformdur.
                                </p>
                                <p className="text-text-primary dark:text-gray-300 leading-relaxed">
                                    Çevre, sağlık, toplum, güvenlik ve dijital güvenlik kategorilerinde 90+ konu hakkında bilgilendirici içerikler sunuyoruz.
                                </p>
                                <p className="text-text-primary dark:text-gray-300 leading-relaxed">
                                    Tüm bilgiler resmi kaynaklardan ve bilimsel araştırmalardan derlenmiştir.
                                </p>
                                <div className="pt-4 border-t border-border dark:border-[#2D3338]">
                                    <p className="text-sm text-text-secondary dark:text-gray-400">
                                        © 2024 Önle.net - Geleceği Birlikte Koruyalım
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <main className="min-h-screen bg-bg-primary dark:bg-[#0F1113]">
            {renderContent()}

            {selectedTopic && (
                <TopicModal
                    topic={selectedTopic}
                    onClose={() => setSelectedTopic(null)}
                />
            )}

            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </main>
    );
}
