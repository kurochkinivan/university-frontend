import axios from 'axios'

export default class ProductService {
    static async getAll() {
        const response = await axios.get('https://dummyjson.com/products')
        return response.data
    } 

    static async create(product) {
        const response = await axios.post('https://dummyjson.com/products/add', product)
        return response.data
    }
}