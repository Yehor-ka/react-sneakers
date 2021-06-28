import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60d9f2935f7bf1001754788f.mockapi.io/items')
      .then((res) => res.json())
      .then((sneakers) => setItems(sneakers));
  }, []);

  const onAddToCart = (obj) => {
    if (!cartItems.filter((item) => item.id === obj.id).length > 0) {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          sneakers={cartItems}
          onClose={() => {
            setCartOpen(false);
          }}
        />
      )}
      <Header
        onCartClick={() => {
          setCartOpen(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              id={item.id}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
