import React from 'react';

function Drawer({ onClose, sneakers = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img onClick={onClose} className="removeBtn cu-p" src="/img/btnRemove.svg" alt="Remove" />
        </h2>

        {
            sneakers.length > 0 ?
            (<>
                <div className="items">
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
                    src="/img/btnRemove.svg"
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
                        <b>4 500 грн.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>225 грн.</b>
                    </li>
                    </ul>
                    <button className="greenBtn">
                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />{' '}
                    </button>
                </div>
            </>
            ) 
            :
            (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img src="/img/empty-cart.jpg" alt="Box" className="mb-20" />
                <h2>Корзина пустая</h2>
                <p className="opacity-6">Добавьте хобя бы одну пару кроссовок, чтобы сделать заказ</p>
                <button onClick={onClose} className="greenButton greenBtn">
                    <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                </button>
            </div>)
        }

      </div>
    </div>
  );
}

export default Drawer;
