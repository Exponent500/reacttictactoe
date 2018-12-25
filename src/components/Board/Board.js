import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

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
        const devlandiaModeClass = classNames({
            'devlandiaMode': this.props.devlandiaMode
        });
        return (
            <Grid container className="board">
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className={"square-0 " + devlandiaModeClass}>
                            {this.renderSquare(0)}
                        </Grid>
                        <Grid item className={"square-1 " + devlandiaModeClass}>
                            {this.renderSquare(1)}
                        </Grid>
                        <Grid item className={"square-2 " + devlandiaModeClass}>
                            {this.renderSquare(2)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className={"square-3 " + devlandiaModeClass}>
                            {this.renderSquare(3)}
                        </Grid>
                        <Grid item className={"square-4 " + devlandiaModeClass}>
                            {this.renderSquare(4)}
                        </Grid>
                        <Grid item className={"square-5 " + devlandiaModeClass}>
                            {this.renderSquare(5)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="board-row">
                    <Grid container justify="center">
                        <Grid item className={"square-6 " + devlandiaModeClass}>
                            {this.renderSquare(6)}
                        </Grid>
                        <Grid item className={"square-7 " + devlandiaModeClass}>
                            {this.renderSquare(7)}
                        </Grid>
                        <Grid item className={"square-8 " + devlandiaModeClass}>
                            {this.renderSquare(8)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return { devlandiaMode: state.devlandiaMode };
}

export default connect(mapStateToProps)(Board);