import { useCallback, useMemo } from 'react'
import { useCart } from '../contexts/CartContext'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { cart, updateQty, removeItem } = useCart()
  const total = useMemo(
    () => {
      return cart.reduce((prev, { product, qty }) => prev + (product.price * qty), 0)
    },
    [cart],
  )
  return (
    <section>
      <h2>Cart ({Number(cart.length).toLocaleString()} items)</h2>
      <div>
        {cart.map(({ product, qty }, index) => (
          <CartItem
            key={product.id}
            product={product}
            qty={qty}
            onUpdateQty={updateQty(index)}
            onRemoveItem={removeItem(index)}
          />
        ))}
      </div>
      <h4>Total: {Number(total).toLocaleString()}</h4>
    </section>
  )
}
