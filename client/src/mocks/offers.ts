import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
    {
        id: '1',
        title: 'Уютное жилье в центре Амстердама',
        type: 'apartment',
        price: 120,
        city: {
            name: 'Amsterdam',
            location: { latitude: 52.37403, longitude: 4.88969, zoom: 13 }
        },
        location: { latitude: 52.37403, longitude: 4.88969, zoom: 13 },
        isFavorite: false,
        isPremium: true,
        rating: 4.8,
        description: 'Идеально для отдыха и работы. В пешей доступности достопримечательности и кафе.',
        bedrooms: 2,
        goods: ['Wi-Fi', 'Кухня', 'Парковка'],
        host: {
            name: 'Анна',
            avatarUrl: '/img/avatar-anna.jpg',
            isPro: true
        },
        images: [
            '/img/apartment-01.jpg',
            '/img/apartment-02.jpg',
            '/img/apartment-03.jpg'
        ],
        maxAdults: 4
    },

    {
        id: '2',
        title: 'Современный лофт в Гамбурге',
        type: 'loft',
        price: 150,
        city: {
            name: 'Hamburg',
            location: { latitude: 53.5511, longitude: 9.9937, zoom: 13 }
        },
        location: { latitude: 53.556, longitude: 9.993, zoom: 13 },
        isFavorite: true,
        isPremium: false,
        rating: 4.6,
        description: 'Просторный и светлый лофт в центре Гамбурга. Отлично подходит для командировки.',
        bedrooms: 1,
        goods: ['Wi-Fi', 'Телевизор', 'Кофемашина'],
        host: {
            name: 'Макс',
            avatarUrl: '/img/avatar-max.jpg',
            isPro: false
        },
        images: [
            '/img/loft-01.jpg',
            '/img/loft-02.jpg',
            '/img/loft-03.jpg'
        ],
        maxAdults: 2
    },

    {
        id: '3',
        title: 'Просторный дом в Кёльне',
        type: 'house',
        price: 200,
        city: {
            name: 'Cologne',
            location: { latitude: 50.9375, longitude: 6.9603, zoom: 13 }
        },
        location: { latitude: 50.937, longitude: 6.961, zoom: 13 },
        isFavorite: false,
        isPremium: true,
        rating: 5.0,
        description: 'Дом с садом и бассейном. Идеально для отдыха всей семьей.',
        bedrooms: 4,
        goods: ['Wi-Fi', 'Бассейн', 'Стиральная машина', 'Кухня'],
        host: {
            name: 'Лиза',
            avatarUrl: '/img/avatar-lisa.jpg',
            isPro: true
        },
        images: [
            '/img/house-01.jpg',
            '/img/house-02.jpg',
            '/img/house-03.jpg'
        ],
        maxAdults: 6
    },

    {
        id: '4',
        title: 'Студия в уютном районе Дюссельдорфа',
        type: 'studio',
        price: 90,
        city: {
            name: 'Dusseldorf',
            location: { latitude: 51.2277, longitude: 6.7735, zoom: 13 }
        },
        location: { latitude: 51.229, longitude: 6.775, zoom: 13 },
        isFavorite: true,
        isPremium: false,
        rating: 4.3,
        description: 'Недалеко от метро. Отличный вариант для одного или пары.',
        bedrooms: 1,
        goods: ['Wi-Fi', 'Мини-кухня', 'Кондиционер'],
        host: {
            name: 'Том',
            avatarUrl: '/img/avatar-tom.jpg',
            isPro: false
        },
        images: [
            '/img/studio-01.jpg',
            '/img/studio-02.jpg',
            '/img/studio-03.jpg'
        ],
        maxAdults: 2
    }
];
