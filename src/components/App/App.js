import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const businesses = [
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/burger.jpg',
    name: 'Burger Haven',
    address: '2020 Burger Lane',
    city: 'Foodtown',
    state: 'CA',
    zipCode: '90210',
    category: 'American',
    rating: 4.0,
    reviewCount: 120,
  },
  {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/cafe.jpg',
    name: 'Cafe Delight',
    address: '3030 Coffee St',
    city: 'Beverly Hills',
    state: 'CA',
    zipCode: '90211',
    category: 'Cafe',
    rating: 4.8,
    reviewCount: 200,
  },
  // Add more mock businesses as needed
];


const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;
