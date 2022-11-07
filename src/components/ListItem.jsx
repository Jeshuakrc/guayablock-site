import React from 'react';
import { useEffect } from 'react';
import "../styles/listItem.css";

function NumItem({ number, children }) {

    useEffect(() => console.log(header));

    let header;

    for (let i = 0; i < children.length; i++) {
        let type = children[i].type;
        if (type === undefined) { continue; }
        if (type === "h2") {
            header = children[i];
            children.splice(i,1);
            break;
        }
    }

    if (header === undefined) {
        return (
        <li className='list-item simple-list-item'>
            { children }
        </li>)
    }

    return (
        <li className='list-item'>
            <div className='list-item-heading'>
                { header }
            </div>
            <div className='list-item-content'>
                { children }
            </div>
        </li>
    );
}

export default NumItem;