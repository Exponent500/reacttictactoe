import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Game from './Game';

describe('Game', () => {
    it('should render correctly', () => {
        const wrapped = shallow(<Game />); 
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });

    it('should render game status correctly if it is a brand new game ', () => {
        const wrapped = mount(<Game />);
        const gameStatus = wrapped.find('.game-status').text();
        expect(gameStatus).toEqual("Player 1's turn.");
    });

    it('should render game status correctly if it is player 2 move', () => {
        const wrapped = mount(<Game />);
        let gameStatus;

        // Player 1's turn
        const squareZero = wrapped.find('.square').first();
        squareZero.simulate('click');

        gameStatus = wrapped.find('.game-status').text();
        expect(gameStatus).toEqual("Player 2's turn.");
    });

    it('should render game status correctly if a player won', () => {
        const wrapped = mount(<Game />);
        let gameStatus;

        // Player 1's turn
        const squareZero = wrapped.find('.square').at(0);
        squareZero.simulate('click');

        // Player 2's turn
        const squareOne = wrapped.find('.square').at(1);
        squareOne.simulate('click');
        
        // Player 1's turn
        const squareFour = wrapped.find('.square').at(4);
        squareFour.simulate('click');
        
        // Player 2's turn
        const squareFive = wrapped.find('.square').at(5);
        squareFive.simulate('click');

        // Player 1's turn
        const squareEight = wrapped.find('.square').at(8);
        squareEight.simulate('click');

        gameStatus = wrapped.find('.game-status').text();
        expect(gameStatus).toEqual("Player 1 wins!");
    });

    it('should render game status correctly if it is a tie', () => {
        const wrapped = mount(<Game />);
        let gameStatus;

        // Player 1's turn
        const squareFour = wrapped.find('.square').at(4);
        squareFour.simulate('click');

        // Player 2's turn
        const squareOne = wrapped.find('.square').at(1);
        squareOne.simulate('click');
        
        // Player 1's turn
        const squareTwo = wrapped.find('.square').at(2);
        squareTwo.simulate('click');
        
        // Player 2's turn
        const squareSix = wrapped.find('.square').at(6);
        squareSix.simulate('click');

        // Player 1's turn
        const squareThree = wrapped.find('.square').at(3);
        squareThree.simulate('click');

        // Player 2's turn
        const squareFive = wrapped.find('.square').at(5);
        squareFive.simulate('click');

        // Player 1's turn
        const squareZero = wrapped.find('.square').at(0);
        squareZero.simulate('click');

        // Player 2's turn
        const squareEight = wrapped.find('.square').at(8);
        squareEight.simulate('click');

        // Player 1's turn
        const squareSeven = wrapped.find('.square').at(7);
        squareSeven.simulate('click');

        gameStatus = wrapped.find('.game-status').text();
        expect(gameStatus).toEqual("Tie game!");
    });

    it('should update the Board and Game Status if undo last move button is clicked after moves have been made', () => {
        const wrapped = mount(<Game />);
        const squareFourValue = wrapped.find('.square-value').at(4);
        let gameStatus;

        // Player 1's turn
        const squareFour = wrapped.find('.square').at(4);
        squareFour.simulate('click');

        expect(squareFourValue.text()).toEqual('X');

        wrapped.find('.btn-undo-move').simulate('click');

        expect(squareFourValue.text()).toEqual('');

        gameStatus = wrapped.find('.game-status').text();
        expect(gameStatus).toEqual("Player 1's turn.");

    });

    it('should update the Board if the toggle characters button is clicked after moves have been made', () => {
        const wrapped = mount(<Game />);
        const squareZeroValue = wrapped.find('.square-value').at(0);
        const squareFourValue = wrapped.find('.square-value').at(4);

        // Player 1's turn
        const squareFour = wrapped.find('.square').at(4);
        squareFour.simulate('click');

        expect(squareFourValue.text()).toEqual('X');

        // Player 2's turn
        const squareZero = wrapped.find('.square').at(0);
        squareZero.simulate('click');

        expect(squareZeroValue.text()).toEqual('O');        

        wrapped.find('.btn-toggle-characters').simulate('click');

        expect(squareFourValue.text()).toEqual('Y');
        expect(squareZeroValue.text()).toEqual('Z');

    });

    it('should display alternate characters within squares when new game is started after game mode is switched to use said alternate characters', () => {
        const wrapped = mount(<Game />);
        const squareZeroValue = wrapped.find('.square-value').at(0);

        wrapped.find('.btn-toggle-characters').simulate('click');

        // Player 1's turn
        const squareZero = wrapped.find('.square').at(0);
        squareZero.simulate('click');

        expect(squareZeroValue.text()).toEqual('Y');
    });
});