import { NextResponse } from 'next/server';
import type { NewsItem } from '@/types';

// Bu fonksiyon gerçek bir API'den haber çekecek
// Şimdilik mock data döndürüyoruz
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get('topic');

    try {
        // Gerçek implementasyonda buraya NewsAPI, Google News API vb. entegre edilecek
        // Örnek: const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&language=tr&apiKey=${process.env.NEWS_API_KEY}`);

        const mockNews: NewsItem[] = [
            {
                title: `${topic} ile ilgili son gelişmeler`,
                source: "Örnek Haber Kaynağı",
                date: new Date().toISOString(),
                url: "#",
                summary: "Bu konuda güncel haberler burada görünecek. API entegrasyonu yapıldığında gerçek haberler çekilecek."
            }
        ];

        return NextResponse.json({ news: mockNews, success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Haberler yüklenirken bir hata oluştu', success: false },
            { status: 500 }
        );
    }
}
