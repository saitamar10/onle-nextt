import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ÖNLE.net - Geleceği Korumak İçin Bugün Harekete Geç",
    description: "90+ konuda toplumsal farkındalık ve önleme stratejileri. Çevre, sağlık, toplum, güvenlik ve dijital güvenlik konularında kapsamlı bilgi ve kanun maddeleri.",
    keywords: "toplumsal farkındalık, çevre koruma, sağlık, güvenlik, dijital güvenlik, önleme, kanun maddeleri",
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F8FAF7' },
        { media: '(prefers-color-scheme: dark)', color: '#0F1113' }
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body className="antialiased">{children}</body>
        </html>
    );
}
