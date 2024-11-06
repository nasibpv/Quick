import { createContext, useContext, useState } from 'react';

// Create a context for the shopping cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item !== itemToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const CartDisplay = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const products = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product,index) => (
          <li key={index}>
            {product} <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Profile = () => (
  <CartProvider>
    <ProductList />
    <CartDisplay />
  </CartProvider>
);

export default Profile
