export interface Topic {
    id: number;
    icon: string;
    title: string;
    subtitle?: string;
    category: 'environment' | 'health' | 'society' | 'security' | 'digital';
    categoryName: string;
    stats: string;
    ways: string[];
    laws?: Law[];
    apps?: RecommendedApp[];
    emergencyNumbers?: EmergencyNumber[];
    announcement?: GovernmentAnnouncement;
}

export interface Law {
    lawNumber: string;
    article: string;
    content: string;
    penalty?: string;
    source: string;
}

export interface RecommendedApp {
    name: string;
    description: string;
    platform: 'iOS' | 'Android' | 'Web' | 'Tümü';
    icon: string;
    playStoreUrl?: string;
    appStoreUrl?: string;
    webUrl?: string;
}

export interface EmergencyNumber {
    name: string;
    number: string;
    description: string;
    icon: string;
}

export interface GovernmentAnnouncement {
    title: string;
    source: string; // Örn: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı"
    date: string;
    url: string;
    summary: string;
}

export type CategoryType = 'all' | 'environment' | 'health' | 'society' | 'security' | 'digital';

export const categoryColors = {
    environment: '#22C55E',
    health: '#3B82F6',
    society: '#A855F7',
    security: '#F59E0B',
    digital: '#06B6D4',
} as const;
