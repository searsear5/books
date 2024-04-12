import { useState } from "react"

function BookCreate(props) {
    const { onCreate } = props
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }



    return (
        <div className="container-C-book">
            <h3 className="part-1">Add a Book</h3>
            <form className="part-2" onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default BookCreate