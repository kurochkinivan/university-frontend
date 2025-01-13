import React from 'react';
import styles from './MySelect.module.css';

const MySelect = ({ options, ...props }) => {
    return (
        <select className={styles.my__select} {...props}>
            <option disabled >
                Категория товара
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default MySelect;
