'use client';

import { motion } from 'framer-motion';
import type { CategoryType } from '@/types';

interface FilterBarProps {
    selectedCategory: CategoryType;
    onCategoryChange: (category: CategoryType) => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const categories = [
    { id: 'all' as CategoryType, label: 'Tümü', icon: '🌟', color: '#6B7280' },
    { id: 'environment' as CategoryType, label: 'Çevre', icon: '🌿', color: '#22C55E' },
    { id: 'health' as CategoryType, label: 'Sağlık', icon: '💪', color: '#3B82F6' },
    { id: 'society' as CategoryType, label: 'Toplum', icon: '👥', color: '#A855F7' },
    { id: 'security' as CategoryType, label: 'Güvenlik', icon: '🔒', color: '#F59E0B' },
    { id: 'digital' as CategoryType, label: 'Dijital', icon: '💻', color: '#06B6D4' },
];

export default function FilterBar({
    selectedCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
}: FilterBarProps) {
    return (
        <div className="sticky top-0 z-40 bg-bg-primary/95 dark:bg-[#0F1113]/95 backdrop-blur-lg border-b border-border dark:border-[#2D3338]">
            <div className="max-w-7xl mx-auto px-4 py-4">
                {/* Search Box */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <input
                        type="text"
                        placeholder="🔍 Konu ara..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full px-5 py-3 bg-bg-secondary dark:bg-[#1A1D21] rounded-2xl border-2 border-transparent focus:border-primary outline-none transition-all text-text-primary dark:text-white placeholder-text-muted dark:placeholder-gray-500 text-sm md:text-base"
                    />
                </motion.div>

                {/* Category Chips - Horizontal Scroll on Mobile */}
                <div className="relative -mx-4 px-4">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                        {categories.map((category, index) => {
                            const isActive = selectedCategory === category.id;
                            return (
                                <motion.button
                                    key={category.id}
                                    onClick={() => onCategoryChange(category.id)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all snap-start text-sm md:text-base ${isActive
                                            ? 'text-white shadow-lg scale-105'
                                            : 'bg-bg-soft dark:bg-[#252A2E] text-text-primary dark:text-gray-300 hover:bg-opacity-80'
                                        }`}
                                    style={{
                                        backgroundColor: isActive ? category.color : undefined,
                                    }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-1.5">{category.icon}</span>
                                    <span className="whitespace-nowrap">{category.label}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom CSS for hiding scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
