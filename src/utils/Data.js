import { images } from '../resources';

export const RecommendedDealsData = [
    { id: 1, src: images.recommended_1 },
    { id: 2, src: images.recommended_2 },
    { id: 3, src: images.recommended_3 },
    { id: 4, src: images.recommended_4 },
    { id: 5, src: images.recommended_5 },
];

export const CategoryData = [
    { id: 1, title: "All", avatar: images.image2 },
    { id: 2, title: "Accessories & Apparels", avatar: images.accessories_and_apparels_light },
    { id: 3, title: "Beauty & Wellness", avatar: images.beauty_and_wellness_light },
    { id: 4, title: "Electronics & Appliances", avatar: images.electronics_and_appliances_light },
    { id: 5, title: "Fitness & Sports", avatar: images.fitness_and_sports_light },
    { id: 6, title: "Hotels & Resorts", avatar: images.hotels_and_resorts_light },
    { id: 7, title: "Medical", avatar: images.medical_light },
    { id: 8, title: "Paymaya / VISA", avatar: images.paymaya_light },
    { id: 9, title: "Restaurants & Bars", avatar: images.restaurants_and_bars_light },
    { id: 10, title: "Services", avatar: images.services_light },
    { id: 11, title: "Things To Do", avatar: images.things_to_do_light },
    { id: 12, title: "Travel", avatar: images.travel_light }
];

export const ContactUsData = [
    { title: "General Inquiry", value: "(02) 833 3453" },
    { title: "Administration", value: "(+632) 824 4693" },
    { title: "Financial Services", value: "(+632) 917 309 3000" },
    { title: "Corporate Sales", value: "(+632) 777 6242" },
    { title: "Marketing and Relations", value: "(+632) 777 6134" }
];

export const LocationData = [
    { id: 1, title: "Caloocan City" },
    { id: 2, title: "Quezon City" },
    { id: 3, title: "Mandaluyong City" },
    { id: 4, title: "Muntinlupa City" },
    { id: 5, title: "Taguig City" },
    { id: 6, title: "Pasig City" },
    { id: 7, title: "Pasay City" },
    { id: 8, title: "Paranaque City" }
];

export const LoginImageData = [
    { id: 1, src: images.login_1, type: 'img' },
    { id: 2, src: images.login_2, type: 'img' },
    { id: 3, src: images.login_3, type: 'img' },
    { id: 4, src: images.login_4, type: 'img' }
];

export const MerchantImageData = [
    {
        id: 1,
        items: [
            { id: 1, src: images.beach_1, type: 'img' },
            { id: 2, src: images.beach_2, type: 'img' },
            { id: 3, src: images.beach_3, type: 'img' },
            { id: 4, src: images.beach_4, type: 'img' }
        ]
    }
];

export const NearbyMerchantsData = [
    { id: 1, name: 'SM Mall of Asia', address: 'Main Mall SM Central Business Park, SM Mall of Asia, Seaside Blvd, 123, Pasay, 1300 Metro Manila', src: images.beach_1, region: { latitude: 14.53128, longitude: 120.98352 }, distance: '300 m', rating: { ratings: 3 } },
    { id: 2, name: 'Uptown Mall', address: '36th St, Taguig, 1630 Metro Manila', src: images.beach_2, region: { latitude: 14.556466, longitude: 121.05433 }, distance: '48 m', rating: { ratings: 4 } },
    { id: 3, name: 'Glorietta', address: 'Ayala Center, 6811 Ayala Ave, Makati, 1226 Metro Manila', src: images.beach_3, region: { latitude: 14.551255, longitude: 121.026215 }, distance: '125 m', rating: { ratings: 5 } },
    { id: 4, name: 'The Podium', address: '12 ADB Ave, Ortigas Center, Mandaluyong, 1550 Metro Manila', src: images.beach_4, region: { latitude: 14.585315, longitude: 121.0592 }, distance: '485 m', rating: { ratings: 3 } },
];

export const OnBoardingData = [
    { id: 1, src: images.splash_1, type: 'img' },
    { id: 2, src: images.splash_2, type: 'img' },
];

export const GenderData = [
    { id: "1", name: "Male" },
    { id: "2", name: "Female" },
];

export const MaritalStatusData = [
    { id: "1", name: "Single" },
    { id: "2", name: "Married" },
    { id: "3", name: "Widowed" },
    { id: "4", name: "Separated" },
];

