import React, { Component } from 'react';
import Board from '../Board/Board';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0,
            player: 1,
            history: [{
                squares: Array(9).fill(null)
            }]
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.regularMode !== prevProps.regularMode) {
            this.onModeChange();
        }
    }

    /**
     * Click handler for when user clicks on one of the squares within the tic tac toe board
     * @param squareIndex - index that represents which square was clicked
     */
    onSquareClick(squareIndex) {
        // make copy of the history
        const history = this.state.history.slice(0, this.state.turn + 1);
        // get latest element in the overall history
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const currentPlayer = this.state.player;
        const { regularMode } = this.props;


        // guards against click events when:
        // 1. the player clicks on a square that's already been clicked
        // 2. the player clicks on any square after the game has been won
        if (this.hasAPlayerWon(squares) || squares[squareIndex]) {
            return;
        }

        // handles which characters to show for each player based on the mode
        if (currentPlayer === 1 && regularMode) {
            squares[squareIndex] = 'x';
        } else if (currentPlayer === 1 && !regularMode) {
            squares[squareIndex]= 'square';
        } else if (currentPlayer === 2 && regularMode) {
            squares[squareIndex] = 'circle';
        } else if (currentPlayer === 2 && !regularMode) {
            squares[squareIndex] = 'sean'
        }

        // determine the next player
        const nextPlayer = this.state.player === 1 ? 2 : 1;

        this.setState({
            turn: history.length,
            player: nextPlayer,
            history: history.concat({
                squares: squares
            })
        });
    }

    /**
     * Checks to see if a player has won
     * @param squares - array of squares representing the current state of the board
     */
    hasAPlayerWon(squares) {
        // houses all the potential winning lines
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // if winning line has been hit, return the winner's value
        for(let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        };
        // if no winning line is hit
        return null;
    }

    /**
     * Click handler for when user wants to undo the last move
     */
    onUndoLastMove() {
        if (this.state.history.length === 1) return;
        // make copy of the history, without the last turn
        const history = this.state.history.slice(0, this.state.turn);
        const previousTurn = history.length - 1;
        const previousPlayer = this.state.player === 1 ? 2 : 1;

        this.setState({
            history: history,
            turn: previousTurn,
            player: previousPlayer
        });
    }

    /**
     * Click handler for when user changes the characters used for the game
     */
    onModeChange() {
        // make copy of the history
        const history = this.state.history.slice(0, this.state.turn + 1);
        // update history of moves so that the appropriate characters are shown based on the mode
        const updatedHistory = history.map( item => {
            const squares = item.squares.map( square => {
                if (square === 'x') return 'square';
                if (square === 'square') return 'x';
                if (square === 'circle') return 'sean';
                if (square === 'sean') return 'circle';
                if (square == null) return null;
            });
            return { squares: squares };
        });
        this.setState({
            history: updatedHistory
        });     
    }

    /**
     * Click handler for when user wants to start a new game
     */
    onStartNewGame() {
        this.setState({
            turn: 0,
            player: 1,
            history: [{
                squares: Array(9).fill(null)
            }]
        });
    }

    render() {
        const { history, turn } = this.state;
        const current = history[turn];
        const currentPlayer = this.state.player;
        const winner = this.hasAPlayerWon(current.squares);

        let status;

        // determines what status is displayed to the players
        if (winner && currentPlayer === 1) {
            status = 'Player 2 wins!';
        } else if (winner && currentPlayer === 2) {
            status = 'Player 1 wins!';
        } else if (!winner && turn === 9) {
            status = 'Tie game!';
        } else if (!winner && turn < 9) {
            status = `Player ${this.state.player}'s turn.`;
        }

        return(
            <div className="game">
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Grid container className="game-status-container" justify="center">
                            <Grid item>
                                <div className="game-status">
                                    {status}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Board
                            squares={history[turn].squares}
                            onClick={squareIndex => this.onSquareClick(squareIndex)}
                        ></Board>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="btn-group" justify="center" spacing={8}>
                            <Grid item className="btn-undo-move-container">
                                <Button variant="contained"
                                        color="primary"
                                        className="btn-undo-move"
                                        disabled={!turn}
                                        onClick={() => this.onUndoLastMove()}
                                >Undo Last Move</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained"
                                        color="secondary"
                                        className="btn-start-new-game"
                                        disabled={!turn}
                                        onClick={() => this.onStartNewGame()}
                                >Start New Game</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Game;