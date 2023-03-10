import React, { useState, createContext } from 'react'

const BookContext = createContext({
    onSearch: () => { },
    onChange: () => { },
    onClear: () => { },
    onKeyDown: () => { },
    books: [],
    input: '',
    warningText: ''
})

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState('');
    const [warning, setWarning] = useState('');

    const searchHandler = () => {
        if (input !== '') {
            setWarning('Searching...')
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (data.items === undefined) {
                        setWarning('No result found.')
                        setBooks([])
                    } else {
                        setBooks(data.items)
                        setWarning('')
                    }
                })
                .catch(err => {
                    console.log(err.message)
                    alert('Something went wrong! Please try again.')
                })
        } else {
            setWarning('Input is required.')
        }
    }

    const changeHandler = (e) => {
        setInput(e.target.value)
        setWarning('')
    }

    const clearHandler = () => {
        setInput('')
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            searchHandler()
        }
    }

    return (
        <BookContext.Provider value={{
            onSearch: searchHandler,
            onChange: changeHandler,
            onClear: clearHandler,
            onKeyDown: keyDownHandler,
            books: books,
            input: input,
            warning: warning
        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContext