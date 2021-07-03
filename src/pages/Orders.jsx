import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async() => {
            try {
                const { data } = await axios.get('https://60d9f2935f7bf1001754788f.mockapi.io/orders');
                setOrders(data.reduce((prev, cur) => [...prev, ...cur.items], []));
                setIsLoading(false);
            } catch (error) {
                alert("Ошибка вывода заказов");
            }
        })()
    }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading 
        ? [...Array(8)] 
        : orders).map((item, idx) => (
          <Card 
            key={idx}
            {...item}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;