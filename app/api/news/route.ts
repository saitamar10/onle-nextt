import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || 'Türkiye gündemi';

    const apiKey = process.env.YOU_COM_API_KEY;

    if (!apiKey) {
        // Fallback for development if key is missing, or return error
        console.warn('YOU_COM_API_KEY is missing');
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    try {
        const response = await fetch(`https://api.ydc-index.io/livenews?q=${encodeURIComponent(query)}`, {
            headers: {
                'X-API-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('News fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
    }
}
