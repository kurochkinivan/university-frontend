import React from 'react'
import styles from './Review.module.css'

const Review = ({ review }) => {
    return (
        <div>
            <p className={styles.cardReviewComment}>
                "{review?.comment || "No reviews"}"
            </p>
            <p className={styles.cardReviewName}>
                - {review?.reviewerName || "Anonymous"}
            </p>
        </div>
    )
}

export default Review