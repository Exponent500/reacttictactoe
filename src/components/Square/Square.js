import React, { Component } from 'react';
import classNames from 'classnames';

import './Square.css';

class Square extends Component {
    render() {
        const squareClass = classNames({
            square: true,
            'marked': this.props.value
        });

        return (
            <div className={squareClass} onClick={this.props.onClick}>
                <div className="square-value">
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default Square;