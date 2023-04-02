import { items } from './items';
import './App.css'
import { useState } from 'react';

function Cart() {
    const [item, setItem] = useState(items);

    const deleteItem = (id) => {
        const newItems = item.filter (element => element.id !== id);
        setItem(newItems);
    }

    return (
        <div >
            <div className='container'>
                    <h1>{item.length} items in your cart</h1>
            </div>

            {item.map(element => {
                const {id, image, description, price, type, showMore} = element;

                return(
                    <div key={id}>

                        <div className='container'>
                            <img src={image} width='300px' alt='candel'/>
                        </div>

                        <div className='container'>
                            <h3>{description}</h3>
                        </div>

                        <div className='container'>
                            <h3>{price}</h3>
                        </div>

                        <div className='container'>
                            <p>The type of wax: {type}</p>
                            <p className='hidden'>{showMore}</p>
                        </div>

                        <div className='container'>
                            <button onClick={() => deleteItem(id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

            <div className='container'>
                <button onClick={() => setItem([])}>DELETE ALL</button>
            </div>
        </div>
    )
}

export default Cart;