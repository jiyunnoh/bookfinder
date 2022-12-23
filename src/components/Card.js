import React from 'react';
import './Card.css';

const Card = ({ image, title, authors, publisher, infoLink }) => {
    if (title.length > 60) {
        title = title.slice(0, 60) + '...'
    }

    if (authors === undefined) {
        authors = 'Not found'
    } else {
        if (authors.length > 3) {
            authors = authors.slice(0, 3).join(', ') + '...'
        } else {
            authors = authors.join(', ')
        }
    }

    if (publisher === undefined) {
        publisher = 'Not found'
    }

    return (
        <div className='card'>
            <div className='card-img'>
                <img src={image} alt={title} />
            </div>
            <div className='card-info'>
                <div className='card-info-text'>
                    <h2 className='card-info-text__h2'>{title}</h2>
                    <p className='card-info-text__p'>By: {authors}</p>
                    <p className='card-info-text__p'>Published by: {publisher}</p>
                    <a className='card-info__btn' href={infoLink}><button>See this book</button></a>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Card