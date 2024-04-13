import BookShow from "./bookShow"


function BookList(props) {
    const { books, onDelete, onEdit } = props
    const renderBooks = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
        )
    })



    return (
        <div className="book-list" >
            {renderBooks}
        </div>
    )
}

export default BookList