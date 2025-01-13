import React from 'react'
import styles from './Dimensions.module.css'

const Dimensions = ({ dimensions }) => {
    return (
        <div className={styles.cardDimensions}>
            <span className="font-semibold">Dimensions:</span>{" "}
            {dimensions.width} x {dimensions.height} x{" "}
            {dimensions.depth} cm
        </div>
    )
}

export default Dimensions