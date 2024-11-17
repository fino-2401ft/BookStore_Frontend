import React from "react";

const List: React.FC = () =>
{
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../images/books/3.jpg',
        },
        {
            id: 4,
            title: 'Book 4',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../images/books/4.jpg',
        },
        {
            id: 5,
            title: 'Book 5',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../images/books/5.jpg',
        }
    ];
    return(
      <div className='container'>
          <div className='row mt-4'>
              {
                  books.map(book => (
                      <BookProps book = {book}/>
                    ),
                  )
              }
          </div>
      </div>
    );
}

export default List;