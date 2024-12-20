import React from "react";
import styles from "./Business.module.css";

const Business = (props) => {
  const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = props.business;

  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{address}</p>
          <p>{city}</p>
          <p>{`${state} ${zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${rating} stars`}</h3>
          <p>{`${reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
