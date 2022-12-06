import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import "../styles/postCard.css";

export default function(props) {

    const self = useRef(null);

    useEffect(() => console.log(self));

    return (
        <div ref={self} className="post-card">
        </div>
    );
}