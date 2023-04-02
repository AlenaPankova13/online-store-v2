import './App.css';
import { useState } from 'react';


function Shop({candels}) {
    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore;
        setShowText (!showText);
    }

    return(
        <div className='products'>
            {candels.map(item => {
                const {id, image, description, price, type, showMore} = item;

                return(
                    <div className='product_card' key={id}>
                        <img src={image} width='300px' alt='candel'/>
                        <div className='product_card'>
                            <p>{showMore ? description : description.substring(0, 40) + '...'}
                            <button onClick={() => showTextClick(item)} className="showText__button">{showMore ? 'Show less' : 'Show more'}</button>
                            </p>
                            <p className='hidden'>{type}</p>
                            <h3>{price}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop;