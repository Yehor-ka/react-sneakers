import React from 'react'
import styles from './Card.module.scss'

console.log(styles);

function Card({title, price, imageUrl, onClick}) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heardVoid.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} грн.</b>
                </div>
                <button className="button" onClick={onClick}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}

export default Card
