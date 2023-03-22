import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import addBooks from '../redux/books/thunk/addBooks';


export default function BookForm() {
  const dispatch = useDispatch()
 const [formData, setFormData] = useState({
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: "",
})

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData)
  dispatch(addBooks(formData))
}

const handleChange = (e) => {
  setFormData({...formData, [e.target.name] : e.target.value})
  // console.log(formData)
}

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
    <form onSubmit={handleSubmit} className="book-form">
      <div className="space-y-2">
        <label for="name">Book Name</label>
        <input onChange={handleChange} required className="text-input" type="text" id="input-Bookname" name="name" />
      </div>

      <div className="space-y-2">
        <label for="category">Author</label>
        <input onChange={handleChange} required className="text-input" type="text" id="input-Bookauthor" name="author" />
      </div>

      <div className="space-y-2">
        <label for="image">Image Url</label>
        <input onChange={handleChange} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label for="price">Price</label>
          <input onChange={handleChange} required className="text-input" type="number" id="input-Bookprice" name="price" />
        </div>

        <div className="space-y-2">
          <label for="quantity">Rating</label>
          <input onChange={handleChange} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
        </div>
      </div>

      <div className="flex items-center">
        <input onChange={handleChange} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button type="submit" className="submit" id="submit">Add Book</button>
    </form>
  </div>
  )
}
