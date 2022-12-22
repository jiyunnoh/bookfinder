import React, { useContext } from 'react';
import './CardContainer.css';
import Card from './Card';
import BookContext from '../store/book-context';

const CardContainer = () => {
    const bookCtx = useContext(BookContext)

    return (
        <div className='cardContainer'>
            {bookCtx.books?.map(book =>
                <Card
                    key={book.id}
                    image={book.volumeInfo.imageLinks?.thumbnail}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    infoLink={book.volumeInfo.infoLink}
                />
            )}
        </div>
    )
}

export default CardContainer