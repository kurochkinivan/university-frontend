import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import cl from './ProductList.module.css'

const ProductsList = ({ products }) => {
    return (
        <div className={cl.products__list}>
            {products.map((product, idx) => (<ProductItem key={idx} product={product}/>))}
        </div>
    )
}

export default ProductsList