import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'media', // Otomatik sistem tercihine göre dark mode
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light Mode (Varsayılan)
                'bg-primary': '#F8FAF7',
                'bg-secondary': '#FFFFFF',
                'bg-soft': '#F0F4EC',
                'bg-input': '#F5F7F3',
                'text-primary': '#1F2937',
                'text-secondary': '#6B7280',
                'text-muted': '#9CA3AF',
                'border': '#E5E7EB',

                // Ana Renkler (Her iki modda aynı)
                'primary': '#22C55E',
                'primary-dark': '#16A34A',
                'primary-light': '#4ADE80',

                // Kategori Renkleri (Her iki modda aynı)
                'env': '#22C55E',
                'health': '#3B82F6',
                'society': '#A855F7',
                'security': '#F59E0B',
                'digital': '#06B6D4',
                'warning': '#F59E0B',

                // Kategori Soft Renkleri - Light
                'env-soft': '#DCFCE7',
                'health-soft': '#DBEAFE',
                'society-soft': '#F3E8FF',
                'security-soft': '#FEF3C7',
                'digital-soft': '#CFFAFE',

                // Eski değişkenler için uyumluluk
                'bg-dark': '#F8FAF7',
                'card-bg': '#FFFFFF',
            },
            fontFamily: {
                'heading': ['Archivo Black', 'sans-serif'],
                'body': ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;

