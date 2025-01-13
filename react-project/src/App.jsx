import { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import ProductService from './API/ProductService';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductsList'
import ErrorMessage from './components/UI/ErrorMessage/ErrorMessage';
import Loader from './components/UI/Loader/Loader';
import './styles/App.css';

function App() {
  const [products, setProducts] = useState([])
  const [fetchProducts, isLoading, productsError] = useFetching(async () => {
    const products = await ProductService.getAll()
    setProducts(products.products)
  })

  const createProduct = (product) => {
    setProducts([...products, product])
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <ProductForm create={createProduct}/>

      {productsError && <ErrorMessage message={`Произошла ошибка: ${productsError}`} />}
      {isLoading && <Loader />}
      {!isLoading && <ProductList products={products}/>}
    </div>
  );
}

export default App;
