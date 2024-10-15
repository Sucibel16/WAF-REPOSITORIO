import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

//Datos de productos simulados

const products =[
  {id:1, name:'Producto 1', price: 9.99},
  {id:2, name:'Producto 2', price: 12.99},
  {id:3, name:'Producto 3', price: 15.99}
];


function App(){
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id != productId));
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ProductList products={products} addToCart={addToCart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;