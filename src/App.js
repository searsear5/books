import React from "react"
import { useState } from "react"
import BookCreate from "./components/bookCreate"


function App() {

    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log("title -->", title)
    }

    return (
        <div>
            <BookCreate onCreate={createBook} />
        </div>)
}

export default App