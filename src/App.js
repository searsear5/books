import React from "react"
import { useState } from "react"
import BookCreate from "./components/bookCreate"
import BookList from "./components/bookList"


function App() {

    const [books, setBooks] = useState([])

    const createBook = (title) => {
        const updateBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title }
        ]
        setBooks(updateBooks)

    }

    const deleteBookByID = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updateBooks)
    }

    const editBookByID = (id, newTitle) => {
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(updateBooks)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
            <BookCreate onCreate={createBook} />
        </div>)
}

export default App