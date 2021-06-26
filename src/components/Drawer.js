import React from 'react'

function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn cu-p" src="/img/btnRemove.svg" alt="Remove" /></h2>
                

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(img/sneakers/sneakers.jpg)'}} className="cartItemImg">
                    </div>
                    <div className="mr-20">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>4 500 грн.</b>
                    </div>
                    <img className="removeBtn" src="/img/btnRemove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(img/sneakers/sneakers.jpg)'}} className="cartItemImg">
                    </div>
                    <div className="mr-20">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>4 500 грн.</b>
                    </div>
                    <img className="removeBtn" src="/img/btnRemove.svg" alt="Remove" />
                    </div>
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
                    <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /> </button>
                </div>
                
            </div>
        </div>
    )
}

export default Drawer