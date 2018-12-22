import React from 'react';
import classNames from 'classnames';

import './Square.css';
import Icon from '../Icon/Icon';

const Square = ({ value, onClick }) => {
        const squareClass = classNames({
            square: true,
            'marked': value
        });

        return (
            <div className={squareClass} onClick={onClick}>
                <div className="square-value">
                    <Icon type={value}></Icon>
                </div>
            </div>
        );
}

export default Square;