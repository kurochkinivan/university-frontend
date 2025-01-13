import React from "react";
import styles from "./ProductItem.module.css";
import TagsList from "./TagsList/TagsList";
import Review from "./Review/Review";
import Dimensions from "./Dimensions/Dimensions";

const ProductItem = ({ product }) => {
  const { title, description, category, brand, price, rating, tags, dimensions, reviews, meta, thumbnail } = product;
  const firstReview = reviews?.[0];

  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardCategory}>
          <span className="font-semibold">Category:</span> {category}
        </p>

        {brand && (
          <p className={styles.cardBrand}>
            <span className="font-semibold">Brand:</span> {brand}
          </p>
        )}

        <p className={styles.cardPrice}>${price}</p>

        {rating !== null && (
          <p className={styles.cardRating}>
            Rating: {rating} ⭐
          </p>
        )}

        {tags?.length > 0 && <TagsList tags={tags} />}
        
        {dimensions && Object.keys(dimensions).length > 0 && <Dimensions dimensions={dimensions} />}

        {firstReview && (
          <div style={{ marginTop: '1rem' }}>
            <span className="font-semibold">First Review:</span>
            <Review review={firstReview} />
          </div>
        )}

        <p className={styles.cardCreatedAt}>
          <span className="font-semibold">Created At:</span> {new Date(meta?.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
