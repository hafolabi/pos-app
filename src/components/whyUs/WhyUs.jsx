import React from 'react';
import './whyus.css'

const Whyus = () => {
    return (
        <div className='whyus'>
            <div className="whyusContainer">
                <div className="left">
                    <span className="whyusTitle">HOW IT WORKS</span>
                    <span className="whyusDesc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maiores facilis placeat ducimus deserunt vel quasi possimus, 
                     quidem nemo inventore voluptas porro non cum temporibus amet!
                      Veritatis dicta mollitia doloribus adipisci. cum temporibus amet!
                      Veritatis dicta mollitia doloribus adipisci. cum temporibus amet!
                      Veritatis dicta mollitia doloribus adipisci.
                      </span>
                    <button className="whyusButton">More</button>
                </div>
                <div className="right">
                    <img src="/images/whyus.jpg" alt="" className="whyusImg" />
                </div>
            </div>
        </div>
    );
}

export default Whyus;
