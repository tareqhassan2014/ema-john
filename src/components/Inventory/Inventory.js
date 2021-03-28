import React from 'react';
import fakeData from '../../fakeData'



const Inventory = () => {
    const handelAddProduct = () => {
        fetch('https://boiling-ravine-57704.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(fakeData),
        })
    }
    return (
        <div>
            <button onClick={handelAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;