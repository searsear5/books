import { useState } from "react"
import BookEdit from "./bookEdit"

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdtit] = useState(false)

    const handleClick = () => {
        onDelete(book.id)
    }
    const handleSubmit = (id, title) => {
        onEdit(id, title)
        setShowEdtit(false)
    }

    const handleEdit = () => {
        setShowEdtit(!showEdit)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />
    }
    return (
        <div>
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div>
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow