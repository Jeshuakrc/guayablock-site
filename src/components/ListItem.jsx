import React from 'react';

function NumItem({ number, children }) {
    return (
        <li className='list-item'>
            <p>
                { number || "" }
            </p>
            <div className='list-item-content'>
                { children }
            </div>
        </li>
    );
}

export default NumItem;