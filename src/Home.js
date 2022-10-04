import mainPhoto from './booksPhoto.jpg';

function Home() {
    return(
        <div>
            <div className="cont back">
                <h1>Mini-library</h1>
            </div>
            <div className='cont'>
                <img src={mainPhoto} alt="books" width='80%' />
            </div>
            <div className='cont'>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere eveniet quos sequi nisi repellendus recusandae. Obcaecati reprehenderit quam tempora veniam iure ipsa facere rem ullam voluptate blanditiis! Assumenda, officia!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, voluptatem. Voluptas autem dolore sequi sed provident ipsum vitae ullam dicta aut repellendus modi, nemo distinctio ratione at. Non, impedit alias!</p>
            </div>
        </div>
    );
}

export default Home;