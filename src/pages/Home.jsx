import React from 'react'
import Card from '../components/Card';
import AppContext from '../context'

function Home({ 
    items,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading 
  }) {

    const renderItems = () => {
        return (isLoading 
        ? [...Array(8)] 
        : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())))
            .map((item, idx) => (
              <Card
                key={idx}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={obj => onAddToFavorite(obj)}
                {...item}
                loading={isLoading}
              />
        ))
    }

    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>
      </div>
    )
}

export default Home
