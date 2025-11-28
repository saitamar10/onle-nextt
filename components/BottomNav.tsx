'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type NavItem = 'home' | 'topics' | 'news' | 'about';

interface BottomNavProps {
    activeTab: NavItem;
    onTabChange: (tab: NavItem) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
    const navItems = [
        { id: 'home' as NavItem, icon: '🏠', label: 'Ana Sayfa' },
        { id: 'topics' as NavItem, icon: '📚', label: 'Konular' },
        { id: 'news' as NavItem, icon: '📰', label: 'Duyurular' },
        { id: 'about' as NavItem, icon: 'ℹ️', label: 'Hakkında' },
    ];

    return (
        <motion.nav
            className="fixed bottom-0 left-0 right-0 bg-bg-secondary dark:bg-[#1A1D21] border-t border-border dark:border-[#2D3338] z-50 safe-area-bottom"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="max-w-lg mx-auto px-4">
                <div className="flex items-center justify-around h-16">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className="flex flex-col items-center justify-center flex-1 h-full relative group"
                            >
                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}

                                {/* Icon */}
                                <motion.div
                                    className={`text-2xl mb-1 transition-all ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
                                        }`}
                                    animate={{ scale: isActive ? 1.1 : 1 }}
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Label */}
                                <span
                                    className={`text-xs font-medium transition-colors ${isActive
                                            ? 'text-primary dark:text-primary'
                                            : 'text-text-secondary dark:text-gray-400 group-hover:text-text-primary dark:group-hover:text-gray-200'
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
}
