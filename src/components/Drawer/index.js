import React from 'react';
import Info from '../Info';
import AppContext from '../../context';
import axios from 'axios';
import styles from "./Drawer.module.scss";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onClose, sneakers = [], onRemove, opened}) {
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [OrderId, setOrderId] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price , 0);


  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post('https://60d9f2935f7bf1001754788f.mockapi.io/orders', {items: cartItems});
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60d9f2935f7bf1001754788f.mockapi.io/cart/' + item.id);
        await delay();
      }

    } catch (error) {
      alert("Ошибка оформления заказа :(")
    }
    setIsLoading(false)
  }


  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img onClick={onClose} className="removeBtn cu-p" src="img/btnRemove.svg" alt="Remove" />
        </h2>

        {
            sneakers.length > 0 ?
            (<>
                <div className={styles.items}>
                {sneakers.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                </div>
                <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btnRemove.svg"
                    alt="Remove"
                />
                </div>
                ))}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>{totalPrice} грн.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{totalPrice * 0.05} грн.</b>
                    </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">
                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />{' '}
                    </button>
                </div>
            </>
            ) 
            :
            (
              <Info 
                title={isOrderCompleted ? "Заказ оформлен" : "Корзина пустая" }
                description={isOrderCompleted ? `Ваш заказ #${OrderId} скоро будет передан в курьерскую доставку` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
                image={isOrderCompleted ? "../img/complete-order.jpg" : "../img/empty-cart.jpg"} 
              />
            )
        }

      </div>
    </div>
  );
}

export default Drawer;
