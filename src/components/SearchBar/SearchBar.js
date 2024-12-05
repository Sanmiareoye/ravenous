import React, {useState} from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('Best Match');

  const handleSeachTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSelectedSorting(sortByOption);
  };
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input handleSeachTerm={handleSeachTerm} placeholder="Search Businesses" />
        <input handleLocationChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div handleSortByChange={handleSortByChange} className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;