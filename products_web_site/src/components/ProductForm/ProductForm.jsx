import React, { useState } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import MySelect from '../UI/select/MySelect'
import styles from './ProductForm.module.css'
import ProductService from '../../API/ProductService'

const ProductForm = ({ create }) => {
    const [product, setProduct] = useState({title: '', description: '', category: 'beauty', brand: '', price: 0, rating: 0, tags: [], dimensions: [], reviews: [], meta: { createdAt: new Date().toISOString() }, thumbnail: ''})
    const categories = [
        { value: 'beauty', label: 'beauty' },
        { value: 'fragrances', label: 'fragrances' },
        { value: 'furniture', label: 'furniture' },
        { value: 'groceries', label: 'groceries' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createProduct();
            create(product);
            setProduct({title: '', description: '', category: 'beauty', brand: '', price: 0, rating: 0, tags: [], dimensions: [], reviews: [], meta: { createdAt: new Date().toISOString() }, thumbnail: ''});
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }

    async function createProduct() {
        return await ProductService.create(product)
    }


    return (
        <form action="" className={styles.product__form}>
            <MyInput
                type='text'
                placeholder='Название'
                required
                value={product.title}
                onChange={e => setProduct({ ...product, title: e.target.value })}
            />
            <MyInput
                type='text'
                placeholder='Описание'
                required
                value={product.description}
                onChange={e => setProduct({ ...product, description: e.target.value })}
            />
            <MySelect
                label="Категория"
                required
                options={categories}
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
            <MyInput
                type='number'
                placeholder='Цена'
                required
                min='0'
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })}
            />
            <MyInput
                type='url'
                placeholder='Ссылка на изображение'
                required
                value={product.thumbnail}
                onChange={e => setProduct({ ...product, thumbnail: e.target.value })}
            />
            <MyButton onClick={handleSubmit}>Создать</MyButton>
        </form>
    )
}

export default ProductForm