import React, { Component } from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends Component {
    renderSquare(index) {
        return (
            <Square
                key={index}
                value={this.props.squares[index]}
                onClick={() => this.props.onClick(index)}></Square>
        )
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-horizontal-line top-line"></div>
                <div className="board-horizontal-line bottom-line"></div>
                <div className="board-vertical-line left-line"></div>
                <div className="board-vertical-line right-line"></div>
            </div>
        );
    }
}

export default Board;