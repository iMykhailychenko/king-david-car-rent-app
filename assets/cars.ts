export interface ICar {
    id: number;
    title: string;
    img: string;
    text: string;
    price: number;
    rating: {
        value: number;
        text: string;
    };
}

export const cars: ICar[] = [
    {
        id: 1,
        title: 'Luxury car',
        img: 'luxury.jpg',
        text: 'Voluptates ipsam neque ducimus beatae quia maiores quas nemo, doloremque commodi nesciunt provident porro.',
        price: 800,
        rating: {
            value: 5,
            text: 'Average customer rating',
        },
    },
    {
        id: 2,
        title: 'Vip car',
        img: 'vip.jpg',
        text: 'Doloremque commodi nesciunt provident porro. Voluptates ipsam neque ducimus beatae quia maiores quas nemo.',
        price: 400,
        rating: {
            value: 5,
            text: 'Average customer rating',
        },
    },
    {
        id: 3,
        title: 'Comfort car',
        img: 'comfort.jpg',
        text: 'Voluptates ipsam neque ducimus beatae quia maiores quas nemo, doloremque commodi nesciunt provident porro.',
        price: 200,
        rating: {
            value: 4,
            text: 'Average customer rating',
        },
    },
    {
        id: 4,
        title: 'Family travel',
        img: 'family.jpg',
        text: 'Doloremque commodi nesciunt provident porro. Voluptates ipsam neque ducimus beatae quia maiores quas nemo.',
        price: 280,
        rating: {
            value: 3.5,
            text: 'Average customer rating',
        },
    },
    {
        id: 5,
        title: 'Econom car',
        img: 'econom.jpg',
        text: 'Voluptates ipsam neque ducimus beatae quia maiores quas nemo, doloremque commodi nesciunt provident porro.',
        price: 120,
        rating: {
            value: 2.5,
            text: 'Average customer rating',
        },
    },
    {
        id: 6,
        title: 'Just for fun',
        img: 'fun.jpg',
        text: 'Doloremque commodi nesciunt provident porro. Voluptates ipsam neque ducimus beatae quia maiores quas nemo.',
        price: 12,
        rating: {
            value: 5,
            text: 'Average customer rating',
        },
    },
];
