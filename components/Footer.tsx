'use client';

import { motion } from 'framer-motion';

const emergencyNumbers = [
    { number: '112', label: 'Acil Yardım' },
    { number: '155', label: 'Polis' },
    { number: '156', label: 'Jandarma' },
    { number: '177', label: 'Orman Yangını' },
    { number: '182', label: 'Yeşilay' },
    { number: '183', label: 'Şiddet Önleme' },
    { number: '181', label: 'Çocuk Hattı' },
    { number: '157', label: 'İnsan Ticareti' },
    { number: '170', label: 'Çalışma Bakanlığı' },
    { number: '171', label: 'Sigara Bırakma' },
    { number: '114', label: 'Zehir Danışma' },
];

export default function Footer() {
    return (
        <footer className="bg-card-bg border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Emergency Numbers */}
                <div className="mb-12">
                    <h3 className="font-heading text-3xl text-warning mb-6 text-center">
                        🚨 ACİL YARDIM NUMARALARI
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {emergencyNumbers.map((item, index) => (
                            <motion.div
                                key={item.number}
                                className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">{item.label}</span>
                                    <span className="font-heading text-2xl text-warning">{item.number}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p className="mb-2">&copy; 2024 Önle.net - Geleceği Birlikte Koruyalım</p>
                    <p className="text-sm">Toplumsal farkındalık için tasarlandı ❤️</p>
                    <p className="text-xs mt-4">
                        Bu site bilgilendirme amaçlıdır. Acil durumlarda mutlaka yetkili mercilere başvurun.
                    </p>
                </div>
            </div>
        </footer>
    );
}
