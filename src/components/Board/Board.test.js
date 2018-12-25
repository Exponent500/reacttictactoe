import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Board from './Board';
import Square from '../Square/Square';
import Root from 'Root';

let wrapped;

const mockSquares = [
    'O', 'O', 'X',
    '0', '0', 'X',
    'X', 'X', '0'
];

describe('Board', () => {
    it('should render correctly', () => {
        wrapped = shallow(
            <Board squares={mockSquares}></Board>
        );
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });

    it('should have 9 squares', () => {
        wrapped = mount(
            <Root>
                <Board squares={mockSquares}/>
            </Root>
        );
        expect(wrapped.find(Square).length).toEqual(9);
    });

    it('should call onClick event when a square is clicked', () => {
        // create a fake event
        const onClick = jest.fn();
        // using mount because there is a need to simulate a click on the Square component in order
        // to enable the Board component to register that a click event occurred
        const wrapped = mount(
            <Root>
                <Board squares={mockSquares} onClick={onClick} />
            </Root>
        );
        wrapped.find('.square-value').first().simulate('click');
        expect(onClick).toBeCalledWith(0);
    });
});