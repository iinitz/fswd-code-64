import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = useCallback(
    (product) => () => {
      setCart((prev) => [...prev, { product, qty: 1 }])
    },
    [],
  )
  const updateQty = useCallback(
    (index) => (amount) => () => {
      setCart(
        (prev) => {
          const item = prev[index]
          const newItem = {
            ...item,
            qty: item.qty + amount,
          }
          return [
            ...prev.slice(0, index),
            newItem,
            ...prev.slice(index + 1),
          ]
        },
      )
    },
    [],
  )
  const removeItem = useCallback(
    (index) => () => {
      setCart((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)])
    },
    [],
  )
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQty,
      removeItem,
    }),
    [cart, addToCart, updateQty, removeItem],
  )
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

// export const useCart = () => {
//   const value = useContext(CartContext)
//   return value
// }
