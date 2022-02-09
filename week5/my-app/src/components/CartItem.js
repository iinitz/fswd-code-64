export const CartItem = ({ product, qty, onUpdateQty, onRemoveItem }) => (
  <div style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
    <h4 style={{ marginTop: 0, marginBottom: 8 }}>{product.name} <span style={{ fontWeight: 'normal' }}>{Number(product.price).toLocaleString()}</span></h4>
    <div style={{ marginBottom: 8 }}>
      <button onClick={onUpdateQty(-1)} disabled={qty <= 1}>-</button>
      <span style={{ margin: '0 8px' }}>{Number(qty).toLocaleString()}</span>
      <button onClick={onUpdateQty(1)}>+</button>
      <button onClick={onRemoveItem} style={{ marginLeft: 8 }}>Remove</button>
    </div>
    <div>Total: {Number(product.price * qty).toLocaleString()}</div>
  </div>
)
