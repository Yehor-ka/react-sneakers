import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      async function fetchData() {
        const cartResp = await axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/cart')
        const favoritesResp = await axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/favorites')
        const itemsResp = await axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/items')

        setIsLoading(false)

        setCartItems(cartResp.data)
        setFavorites(favoritesResp.data)
        setItems(itemsResp.data)
        
      }

      fetchData()
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://60d9f2935f7bf1001754788f.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Ошибка добавления товара в корзину')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/favorites/${obj.id}`);
      } else {
        const {data} = await axios.post('https://60d9f2935f7bf1001754788f.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch(error) {
      alert('не удалось добавить в фавориты')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          sneakers={cartItems}
          onClose={() => {
            setCartOpen(false);
          }}
          onRemove={onRemoveItem}
        />
      )}
      <Header
        onCartClick={() => {
          setCartOpen(true);
        }}
      />

      <Route path="/" exact>
        <Home 
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites 
          items={favorites}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>

      
    </div>
  );
}

export default App;
