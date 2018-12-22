import React from 'react';

const Icon = ({ type }) => {
    return (
        <div>
            <svg width='1em' height='1em'>
                <use xlinkHref={ `#${ type }` }></use>
            </svg>
        </div>
    )
}

export default Icon;