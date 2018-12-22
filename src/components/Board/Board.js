import React, { Component } from 'react';
import Square from '../Square/Square';
import Grid from '@material-ui/core/Grid';

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
            <Grid container className="board">
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className="square-0">
                            {this.renderSquare(0)}
                        </Grid>
                        <Grid item className="square-1">
                            {this.renderSquare(1)}
                        </Grid>
                        <Grid item className="square-2">
                            {this.renderSquare(2)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className="square-3">
                            {this.renderSquare(3)}
                        </Grid>
                        <Grid item className="square-4">
                            {this.renderSquare(4)}
                        </Grid>
                        <Grid item className="square-5">
                            {this.renderSquare(5)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className="square-6">
                            {this.renderSquare(6)}
                        </Grid>
                        <Grid item className="square-7">
                            {this.renderSquare(7)}
                        </Grid>
                        <Grid item className="square-8">
                            {this.renderSquare(8)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Board;