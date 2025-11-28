'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Topic } from '@/types';
import { categoryColors } from '@/types';

interface TopicModalProps {
    topic: Topic;
    onClose: () => void;
}

export default function TopicModal({ topic, onClose }: TopicModalProps) {
    const color = categoryColors[topic.category];

    useEffect(() => {
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Share function
    const handleShare = async () => {
        const shareData = {
            title: `${topic.title} - ÖNLE.net`,
            text: topic.stats,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(`${topic.title}\n${topic.stats}\n${window.location.href}`);
                alert('Link panoya kopyalandı!');
            }
        } catch (err) {
            console.log('Paylaşım hatası:', err);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-bg-secondary dark:bg-[#1A1D21] rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative border border-border dark:border-[#2D3338]"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        borderTop: `4px solid ${color}`,
                        boxShadow: `0 0 40px ${color}20`,
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="sticky top-4 right-4 float-right w-10 h-10 rounded-full bg-bg-soft dark:bg-[#252A2E] hover:bg-border dark:hover:bg-[#2D3338] transition-colors flex items-center justify-center z-10"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary dark:text-white">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Header */}
                    <div className="p-6 md:p-8">
                        <div className="text-5xl md:text-6xl mb-4">{topic.icon}</div>
                        <h2 className="font-heading text-2xl md:text-4xl mb-2" style={{ color }}>
                            {topic.title}
                        </h2>
                        {topic.subtitle && (
                            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-400 mb-3">{topic.subtitle}</p>
                        )}
                        <p className="text-xs md:text-sm uppercase tracking-wider text-text-muted dark:text-gray-500 font-medium">
                            {topic.categoryName}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                        {/* Stats */}
                        <div className="bg-bg-soft dark:bg-[#252A2E] p-5 rounded-xl border-l-4" style={{ borderColor: color }}>
                            <h3 className="font-heading text-lg md:text-xl mb-2 flex items-center gap-2" style={{ color }}>
                                <span>📊</span> İstatistikler
                            </h3>
                            <p className="text-text-primary dark:text-gray-300 leading-relaxed">{topic.stats}</p>
                        </div>

                        {/* Laws Section */}
                        {topic.laws && topic.laws.length > 0 && (
                            <div>
                                <h3 className="font-heading text-xl md:text-2xl mb-4 flex items-center gap-2" style={{ color }}>
                                    <span>⚖️</span> İlgili Kanun Maddeleri
                                </h3>
                                <div className="space-y-4">
                                    {topic.laws.map((law, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-warning/5 dark:bg-warning/10 border border-warning/20 dark:border-warning/30 p-5 rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="text-2xl">📜</span>
                                                <div>
                                                    <h4 className="font-bold text-warning text-base md:text-lg">{law.lawNumber}</h4>
                                                    <p className="text-xs md:text-sm text-text-secondary dark:text-gray-400">{law.article}</p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-text-primary dark:text-gray-300 mb-3 leading-relaxed">{law.content}</p>
                                            {law.penalty && (
                                                <div className="bg-warning/10 dark:bg-warning/20 p-3 rounded-lg">
                                                    <p className="text-sm text-text-primary dark:text-gray-300">
                                                        <span className="font-bold text-warning">Ceza:</span> {law.penalty}
                                                    </p>
                                                </div>
                                            )}
                                            <p className="text-xs text-text-muted dark:text-gray-500 mt-2">Kaynak: {law.source}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recommended Apps Section */}
                        {topic.apps && topic.apps.length > 0 && (
                            <div>
                                <h3 className="font-heading text-xl md:text-2xl mb-4 flex items-center gap-2" style={{ color }}>
                                    <span>📱</span> Kullanılması Gereken Uygulamalar
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {topic.apps.map((app, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-bg-soft dark:bg-[#252A2E] border border-border dark:border-[#2D3338] p-4 rounded-xl"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="text-3xl">{app.icon}</span>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-text-primary dark:text-white mb-1">{app.name}</h4>
                                                    <p className="text-xs text-text-secondary dark:text-gray-400 mb-2">{app.description}</p>
                                                </div>
                                            </div>

                                            {/* Download Buttons */}
                                            <div className="flex flex-wrap gap-2">
                                                {app.playStoreUrl && (
                                                    <a
                                                        href={app.playStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                        </svg>
                                                        Play Store
                                                    </a>
                                                )}
                                                {app.appStoreUrl && (
                                                    <a
                                                        href={app.appStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                                        </svg>
                                                        App Store
                                                    </a>
                                                )}
                                                {app.webUrl && (
                                                    <a
                                                        href={app.webUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <line x1="2" y1="12" x2="22" y2="12" />
                                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                        </svg>
                                                        Web
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Emergency Numbers Section */}
                        {topic.emergencyNumbers && topic.emergencyNumbers.length > 0 && (
                            <div>
                                <h3 className="font-heading text-xl md:text-2xl mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
                                    <span>🚨</span> Acil Yardım Numaraları
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {topic.emergencyNumbers.map((emergency, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 dark:border-red-500/30 p-4 rounded-xl"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl">{emergency.icon}</span>
                                                    <span className="font-bold text-text-primary dark:text-white">{emergency.name}</span>
                                                </div>
                                                <a
                                                    href={`tel:${emergency.number}`}
                                                    className="font-heading text-xl text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                                                >
                                                    {emergency.number}
                                                </a>
                                            </div>
                                            <p className="text-xs text-text-secondary dark:text-gray-400">{emergency.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Government Announcement */}
                        {topic.announcement && (
                            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 p-5 rounded-xl">
                                <h3 className="font-heading text-lg md:text-xl mb-3 flex items-center gap-2 text-primary dark:text-primary-light">
                                    <span>🏛️</span> Resmi Duyuru
                                </h3>
                                <h4 className="font-bold text-text-primary dark:text-white mb-2">{topic.announcement.title}</h4>
                                <p className="text-sm text-text-secondary dark:text-gray-300 mb-3 leading-relaxed">
                                    {topic.announcement.summary}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-text-muted dark:text-gray-400">
                                    <span className="font-medium">📍 {topic.announcement.source}</span>
                                    <span>📅 {topic.announcement.date}</span>
                                </div>
                                {topic.announcement.url && (
                                    <a
                                        href={topic.announcement.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-sm text-primary dark:text-primary-light hover:underline font-medium"
                                    >
                                        Duyuruyu Görüntüle →
                                    </a>
                                )}
                            </div>
                        )}

                        {/* Ways to Prevent */}
                        <div>
                            <h3 className="font-heading text-xl md:text-2xl mb-4 flex items-center gap-2" style={{ color }}>
                                <span>✅</span> Korunma Yolları
                            </h3>
                            <ol className="space-y-3">
                                {topic.ways.map((way, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 text-text-primary dark:text-gray-300 leading-relaxed"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <span className="font-bold min-w-[28px] flex-shrink-0 text-sm md:text-base" style={{ color }}>
                                            {index + 1}.
                                        </span>
                                        <span className="text-sm md:text-base">{way}</span>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>

                        {/* Share Button */}
                        <div className="pt-4 border-t border-border dark:border-[#2D3338]">
                            <button
                                onClick={handleShare}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                                Paylaş
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
