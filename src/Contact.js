import store from './store.jpg';

function Contact() {
    return(
        <div>
            <div className="cont back">
                <h1>Contact Us</h1>
            </div>
            <div className="cont">
                <img src={store} alt="bookstore" width="70%" />
            </div>
            <div className='contact'>
                <h4>2745 Veltri Drive</h4>
                <h4>Karluk</h4>
                <h4>AK Alaska</h4>
                <h4>99608</h4>
                <h4>Mobile Number: 907-738-8752</h4>
            </div>
        </div>
    );
}

export default Contact;