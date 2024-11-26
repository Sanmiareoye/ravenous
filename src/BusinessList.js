import React from "react";
import Business from "./Business";

function BusinessList () {
    const businessList = [
        {
        image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Marios',
        address: '23 the walk bellingsmore',
        city: 'dublin',
        state: 'Leinster',
        zipcode: 'D15 FC4E',
        category: 'restaurant',
        rating: 4,
        review: 'Best pizza out there!',
        count: 229
        },

        {
            image: 'https://content.codecademy.com/programs/react/ravenous/burger.jpg',
            name: 'Burger Bliss',
            address: '15 Harmony Lane',
            city: 'Cork',
            state: 'Munster',
            zipcode: 'T12 XF9D',
            category: 'restaurant',
            rating: 4.5,
            review: 'Juiciest burgers in town!',
            count: 305
        },
        {
            image: 'https://content.codecademy.com/programs/react/ravenous/cafe.jpg',
            name: 'Morning Brew',
            address: '42 Sunrise Avenue',
            city: 'Galway',
            state: 'Connacht',
            zipcode: 'H91 XT4F',
            category: 'cafe',
            rating: 4.2,
            review: 'Perfect spot for a morning coffee.',
            count: 152
        },
        {
            image: 'https://content.codecademy.com/programs/react/ravenous/sushi.jpg',
            name: 'Sushi Central',
            address: '78 Ocean Drive',
            city: 'Dublin',
            state: 'Leinster',
            zipcode: 'D02 W123',
            category: 'restaurant',
            rating: 4.8,
            review: 'Freshest sushi in the city!',
            count: 420
        },
        {
            image: 'https://content.codecademy.com/programs/react/ravenous/steakhouse.jpg',
            name: 'The Grilled Table',
            address: '10 Meadow Lane',
            city: 'Limerick',
            state: 'Munster',
            zipcode: 'V94 HK8J',
            category: 'restaurant',
            rating: 4.6,
            review: 'Steak cooked to perfection!',
            count: 287
        },
        {
            image: 'https://content.codecademy.com/programs/react/ravenous/bakery.jpg',
            name: 'Sweet Crumbs',
            address: '99 Baker Street',
            city: 'Kilkenny',
            state: 'Leinster',
            zipcode: 'R95 A1B2',
            category: 'bakery',
            rating: 4.3,
            review: 'Delicious pastries and bread.',
            count: 178
        },
        {
            image: 'https://content.codecademy.com/programs/react/ravenous/icecream.jpg',
            name: 'Scoops and Smiles',
            address: '12 Frost Lane',
            city: 'Wexford',
            state: 'Leinster',
            zipcode: 'Y35 C7DF',
            category: 'dessert',
            rating: 4.7,
            review: 'Ice cream flavors you’ll never forget!',
            count: 220
        }        
    ]

    return (
        <div>
      {businessList.map((business, index) => (
        <Business key={index} {...business} />
      ))}
    </div>
    )
};

export default BusinessList;