import React from 'react';

import './Icon.css'

const Icon = ({ type, className }) => {
    return (
        <div className={"svg-container " + className}>
            <svg width='1em' height='1em'>
                <use xlinkHref={ `#${ type }` }></use>
            </svg>
        </div>
    )
}

export default Icon;