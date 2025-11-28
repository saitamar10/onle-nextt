'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import TopicCard from '@/components/TopicCard';
import TopicModal from '@/components/TopicModal';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { topicsData } from '@/data/topics';
import type { Topic, CategoryType } from '@/types';

type NavTab = 'home' | 'topics' | 'news' | 'about';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [activeTab, setActiveTab] = useState<NavTab>('home');

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
                            <h2 className="text-3xl font-heading mb-2 text-text-primary dark:text-white">📰 Resmi Duyurular</h2>
                            <p className="text-text-secondary dark:text-gray-400 mb-6">Devlet kurumlarından güncel duyurular</p>

                            {announcementTopics.length > 0 ? (
                                <div className="space-y-4">
                                    {announcementTopics.map((topic) => (
                                        <motion.div
                                            key={topic.id}
                                            className="bg-bg-secondary dark:bg-[#1A1D21] rounded-2xl p-5 border border-border dark:border-[#2D3338] cursor-pointer hover:border-primary transition-colors"
                                            onClick={() => setSelectedTopic(topic)}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl">{topic.icon}</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading text-lg mb-1 text-text-primary dark:text-white">{topic.title}</h3>
                                                    {topic.announcement && (
                                                        <>
                                                            <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">{topic.announcement.summary}</p>
                                                            <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-500">
                                                                <span>🏛️ {topic.announcement.source}</span>
                                                                <span>•</span>
                                                                <span>{topic.announcement.date}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-4xl mb-4">📭</p>
                                    <p className="text-text-secondary dark:text-gray-400">Henüz duyuru bulunmamaktadır</p>
                                </div>
                            )}
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
