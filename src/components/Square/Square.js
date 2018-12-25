import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Square.css';
import Icon from '../Icon/Icon';

const Square = ({ value, devlandiaMode, onClick }) => {
        const squareClass = classNames({
            square: true,
            'marked': value
        });

        const iconClass = classNames({
            'white': devlandiaMode
        });

        return (
            <div className={squareClass} onClick={onClick}>
                <div className="square-value">
                    <Icon type={value} className={iconClass}></Icon>
                </div>
            </div>
        );
}

function mapStateToProps(state){
    return { devlandiaMode: state.devlandiaMode };
}

export default connect(mapStateToProps)(Square);