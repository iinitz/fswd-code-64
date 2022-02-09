import { ProductItem } from './ProductItem'

export const ProductList = ({ products }) => (
  <section>
    <h2>Products</h2>
    <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  </section>
)
