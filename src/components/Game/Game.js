import React, { Component } from 'react';
import Board from '../Board/Board';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regularMode: true,
            turn: 0,
            player: 1,
            history: [{
                squares: Array(9).fill(null)
            }]
        };
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
        const regularMode = this.state.regularMode;

        // guards against click events when:
        // 1. the player clicks on a square that's already been clicked
        // 2. the player clicks on any square after the game has been won
        if (this.hasAPlayerWon(squares) || squares[squareIndex]) {
            return;
        }

        // handles which characters to show for each player based on the mode
        if (currentPlayer === 1 && regularMode) {
            squares[squareIndex] = 'X';
        } else if (currentPlayer === 1 && !regularMode) {
            squares[squareIndex]= 'Y';
        } else if (currentPlayer === 2 && regularMode) {
            squares[squareIndex] = 'O';
        } else if (currentPlayer === 2 && !regularMode) {
            squares[squareIndex] = 'Z'
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
    onToggleCharacters() {
        const regularMode = !this.state.regularMode;
        // make copy of the history
        const history = this.state.history.slice(0, this.state.turn + 1);
        // update history of moves so that the appropriate characters are shown based on the mode
        const updatedHistory = history.map( item => {
            const squares = item.squares.map( square => {
                if (square === 'X') return 'Y';
                if (square === 'Y') return 'X';
                if (square === 'O') return 'Z';
                if (square === 'Z') return 'O';
            });
            return { squares: squares };
        });
        this.setState({
            regularMode: regularMode,
            history: updatedHistory
        })
    }

    render() {
        const history = this.state.history;
        const turn = this.state.turn;
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
                <div className="game-status">
                    {status}
                </div>
                <div className="">
                    <Board
                        squares={this.state.history[this.state.turn].squares}
                        onClick={squareIndex => this.onSquareClick(squareIndex)}
                    ></Board>
                </div>
                <div className="">
                    <button className="btn-undo-move"
                            onClick={() => this.onUndoLastMove()}
                    >Undo Last Move</button>
                </div>
                <div className="">
                    <button className="btn-toggle-characters"
                            type="toggle" 
                            onClick={() => this.onToggleCharacters()}
                    >Toggle Characters Used</button>
                </div>
            </div>
        );
    }
}

export default Game;