import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context'

function Card({
  title,
  price,
  imageUrl,
  onPlus,
  id,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const itemObj = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={1}
          width={150}
          height={225}
          viewBox="0 0 150 205"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="420" rx="0" ry="0" width="85" height="36" />
          <rect x="126" y="418" rx="20" ry="20" width="144" height="39" />
          <rect x="147" y="131" rx="0" ry="0" width="1" height="0" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="178" rx="5" ry="5" width="80" height="24" />
          <rect x="118" y="170" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onFavorite && <img
              onClick={onClickFavorite}
              src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
              alt="Unliked"
            />}
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} грн.</b>
            </div>
            {onPlus && <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? '/img/checked.svg' : '/img/plus.svg'}
              alt="Plus"
            />}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
