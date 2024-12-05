import React from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

const BusinessList = (props) => {
    return (
      <div className={styles.BusinessList}>
        {props.businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
      </div>
    );
  };
  
  export default BusinessList;