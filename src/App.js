import React from 'react';
import {
  Route
} from "react-router-dom";
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import axios from 'axios';
import AppContext from './context';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      async function fetchData() {
        try {
          const [ cartResp, favoritesResp, itemsResp ] = await Promise.all([
            axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/cart'), 
            axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/favorites'), 
            axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/items')
          ]);

          setIsLoading(false);

          setCartItems(cartResp.data);
          setFavorites(favoritesResp.data);
          setItems(itemsResp.data);
        } catch (error) {
          alert('Ошибка про запросе данных :(')
        }
        
      }

      fetchData()
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://60d9f2935f7bf1001754788f.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            }
          }
          return item; 
        }));
      }
    } catch (error) {
      alert('Ошибка добавления товара в корзину')
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка про попытке удаления')
    }
  }

  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
        await axios.delete(`https://60d9f2935f7bf1001754788f.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  React.useEffect(() => {
    if(cartOpen) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [cartOpen]);

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpen, setCartItems, onAddToCart }}>
      <div className="wrapper clear">
          <Drawer
            sneakers={cartItems}
            onClose={() => {
              setCartOpen(false);
            }}
            onRemove={onRemoveItem}
            opened={cartOpen}
          />

        <Header
          onCartClick={() => {
            setCartOpen(true);
          }}
        />

        <Route path={process.env.PUBLIC_URL + "/"} exact>
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

        <Route path={process.env.PUBLIC_URL + "/favorites"} exact>
          <Favorites />
        </Route>

        <Route path={process.env.PUBLIC_URL + "/orders"} exact>
          <Orders />
        </Route>

        
      </div>
    </AppContext.Provider>
  );
}

export default App;
