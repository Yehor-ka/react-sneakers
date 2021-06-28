import React from 'react'
import styles from './Card.module.scss'


function Card({title, price, imageUrl, onPlus, id, onFavorite}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl, id})
        setIsAdded(!isAdded);
    }


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
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="Plus" />
            </div>
        </div>
    )
}

export default Card
