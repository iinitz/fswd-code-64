import { CartContext, useCart } from '../contexts/CartContext'

export const ProductItem = ({ product }) => {
  // const { addToCart } = useCart()
  return (
    <CartContext.Consumer>
      {({ addToCart }) => (
        <div style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
          <h3 style={{ marginTop: 0, marginBottom: 8 }}>{product.name}</h3>
          <div style={{ marginBottom: 8 }}>Category: {product.category}</div>
          <div>
            {Number(product.price).toLocaleString()}
            <button onClick={addToCart(product)} style={{ marginLeft: 8 }}>Add to cart</button>
          </div>
        </div>
      )}
    </CartContext.Consumer>
  )
}
