import React from "react";
import BookProps from "./components/BookProps";
import Book from "../../models/Book";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/1.jpg', // Correct absolute path
        },
        {
            id: 2,
            title: 'Book 2',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/3.jpg',
        },
        {
            id: 4,
            title: 'Book 4',
            description: 'Description for Book 4',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/4.jpg',
        },
        {
            id: 5,
            title: 'Book 5',
            description: 'Description for Book 5',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/5.jpg',
        },
        {
            id: 6,
            title: 'Book 6',
            description: 'Description for Book 6',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/1.jpg',
        },
        {
            id: 7,
            title: 'Book 7',
            description: 'Description for Book 7',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/2.jpg',
        },
        {
            id: 8,
            title: 'Book 8',
            description: 'Description for Book 8',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/3.jpg',
        },
        {
            id: 9,
            title: 'Book 9',
            description: 'Description for Book 9',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/4.jpg',
        },
        {
            id: 10,
            title: 'Book 10',
            description: 'Description for Book 10',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/5.jpg',
        }
    ];
    return (
        <div className='container'>
            <div className='row mt-4'>
                {
                    books.map(book => (
                            <BookProps key={book.id} book={book}/>
                        ),
                    )
                }
            </div>
        </div>
    );
}

export default List;