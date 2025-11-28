'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: [
                        'radial-gradient(circle at 50% 50%, #00ff88 0%, transparent 50%)',
                        'radial-gradient(circle at 60% 60%, #00d4ff 0%, transparent 50%)',
                        'radial-gradient(circle at 40% 40%, #a855f7 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 50%, #00ff88 0%, transparent 50%)',
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 gradient-text"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        backgroundSize: '200% 200%',
                    }}
                >
                    ÖNLE
                </motion.h1>

                <motion.p
                    className="text-xl md:text-3xl text-text-secondary dark:text-gray-300 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Geleceği Korumak İçin Bugün Harekete Geç
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="bg-card-bg px-6 py-3 rounded-full border border-env/30">
                        <span className="text-env">90+</span> Konu
                    </div>
                    <div className="bg-card-bg px-6 py-3 rounded-full border border-health/30">
                        <span className="text-health">Kanun Maddeleri</span>
                    </div>
                    <div className="bg-card-bg px-6 py-3 rounded-full border border-society/30">
                        <span className="text-society">Güncel Haberler</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToContent}
                className="absolute bottom-10 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-env"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.button>
        </section>
    );
}
