import React from 'react'
import AppContext from '../context'

function Info({ title, description, image }) {
    const { setCartOpen } = React.useContext(AppContext)
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src={image} alt="Box" className="mb-20" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpen(false)} className="greenButton greenBtn">
                <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
            </button>
        </div>
    )
}

export default Info
