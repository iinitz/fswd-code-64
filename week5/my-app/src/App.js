import { useCallback, useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { ProductList } from './components/ProductList'

import appleProducts from './data/products'

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(
    () => {
      setProducts(appleProducts)
    },
    [],
  )
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 300px', padding: 16 }}>
      <ProductList products={products} />
      <Cart />
    </div>
  )
}

export default App
