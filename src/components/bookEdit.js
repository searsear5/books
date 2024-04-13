import { useState } from "react"
function BookEdit({ book, onEdit, onSubmit }) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //onEdit(book.id, title)
        onSubmit(book.id, title)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
            <button>save</button>
        </form>
    )
}

export default BookEdit