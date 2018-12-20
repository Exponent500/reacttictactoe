import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    render() {
        return (
            <div className="square" onClick={this.props.onClick}>
                <div className="square-value">
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default Square;