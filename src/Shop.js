import { useState } from 'react';
import { books } from './books';
import Buttons from './Buttons';
import BooksList from './BooksList';


function Shop() {
    const [booksList, setBooksList] = useState(books);

    const chosenBooks =(searchTerm) => {
        const newBooks = books.filter(element => element.searchTerm === searchTerm);
    setBooksList(newBooks);
}

    return(
        <div>
            <div className='cont'>
                <h2> Free Standard Shipping</h2>
            </div>
            <div className='cont'>
                <p>Source: Amazon.com</p>
            </div>
            <Buttons filteredBooks={chosenBooks} />
            <BooksList booksprop={ booksList } />
        </div>
    );
}

export default Shop;