'use client';

import { motion } from 'framer-motion';
import type { Topic } from '@/types';
import { categoryColors } from '@/types';

interface TopicCardProps {
    topic: Topic;
    onClick: () => void;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
    const color = categoryColors[topic.category];

    return (
        <motion.div
            onClick={onClick}
            className="bg-bg-secondary dark:bg-[#1A1D21] rounded-2xl p-5 cursor-pointer relative overflow-hidden group border border-border dark:border-[#2D3338] hover:border-opacity-50"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            style={{
                borderTop: `4px solid ${color}`,
            }}
        >
            {/* Glow Effect on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <div className="text-4xl mb-3">{topic.icon}</div>

                <h3
                    className="font-heading text-lg mb-2 leading-tight"
                    style={{ color }}
                >
                    {topic.title}
                </h3>

                {topic.subtitle && (
                    <p className="text-xs text-text-secondary dark:text-gray-400 mb-2 line-clamp-1">
                        {topic.subtitle}
                    </p>
                )}

                <p className="text-xs uppercase tracking-wider text-text-muted dark:text-gray-500 mb-2 font-medium">
                    {topic.categoryName}
                </p>

                <p className="text-sm text-text-primary dark:text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                    {topic.stats}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                    {/* Law Badge */}
                    {topic.laws && topic.laws.length > 0 && (
                        <span className="bg-warning/10 dark:bg-warning/20 text-warning dark:text-warning px-2.5 py-1 rounded-full text-xs font-medium">
                            ⚖️ {topic.laws.length} Kanun
                        </span>
                    )}

                    {/* Apps Badge */}
                    {topic.apps && topic.apps.length > 0 && (
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-2.5 py-1 rounded-full text-xs font-medium">
                            📱 {topic.apps.length} Uygulama
                        </span>
                    )}

                    {/* Emergency Badge */}
                    {topic.emergencyNumbers && topic.emergencyNumbers.length > 0 && (
                        <span className="bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full text-xs font-medium">
                            🚨 Acil Numaralar
                        </span>
                    )}

                    {/* Government Announcement Badge */}
                    {topic.announcement && (
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-2.5 py-1 rounded-full text-xs font-medium">
                            🏛️ Resmi Duyuru
                        </span>
                    )}
                </div>
            </div>

            {/* Hover Arrow */}
            <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.div>
        </motion.div>
    );
}
