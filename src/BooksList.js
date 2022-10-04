import { useState } from "react";

function BookksList({booksprop}) {

    const [firstText, setFirstText] = useState(false);

    const showTextClick =(element) => {
        element.showMore = !element.showMore;
        setFirstText(!firstText);
    }

    return(
        <div className="product-card">
            {booksprop.map(element => {
                const { id, book, author, price, image, description, showMore} = element;
                return(
                    <div className="product" key={ id }>
                        <img src={ image } alt="book" width="200px" height="270px"/>
                        <h3 className="card_text">{ book} </h3>
                        <h4 className="card__title">{ author }</h4>
                        <h4>Price: ${ price }</h4>
                        <p className="book-description">{showMore? description : description.substring(0, 172) + "...."}
                            <button className="read-btn" onClick={() => showTextClick(element)}>{showMore ? "Read less" : "Read more..."}</button>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default BookksList;