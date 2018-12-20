import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Board from './Board';
import Square from '../Square/Square';

let wrapped;

const mockSquares = [
    'O', 'O', 'X',
    '0', '0', 'X',
    'X', 'X', '0'
];

beforeEach( () => {
    wrapped = shallow(
        <Board squares={mockSquares}></Board>
    ); 
});

describe('Board', () => {
    it('should render correctly', () => {
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });

    it('should have 9 squares', () => {
        expect(wrapped.find(Square).length).toEqual(9);
    });

    it('should call onClick event when a square is clicked', () => {
        // create a fake event
        const onClick = jest.fn();
        // using mount because there is a need to simulate a click on the Square component in order
        // to enable the Board component to register that a click event occurred
        const wrapped = mount(<Board squares={mockSquares} onClick={onClick} />);
        wrapped.find('.square-value').first().simulate('click');
        expect(onClick).toBeCalledWith(0);
    });
});