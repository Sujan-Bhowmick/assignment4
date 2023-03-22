import React, { useEffect } from 'react'
import BooksCard from './BooksCard'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import fetchBooks from '../redux/books/thunk/fetchBooks'



export default function BooksContainer() {
    const books = useSelector(state => state.library.books)
    console.log(books)

    const dispatch = useDispatch()

  useEffect( () => {
      dispatch(fetchBooks)
  },[dispatch]);
   
    return (
        <div className="lws-bookContainer">
            {
                books?.map(book => <BooksCard  book = {book} key= {books.id}/>)
            }
           
        </div>
    )
}
