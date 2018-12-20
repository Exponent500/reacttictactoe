import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Game from '../Game/Game';

let wrapped;

beforeEach( () => {
    // we are using "wrapped" to indicate that the object we get from shallow is a wrapped version of our component,
    // which simply means the component has extra functionality given to it.
    wrapped = shallow(<App />);
});

it('shows the Game Component', () => {
    // when we invoke find, it returns an array which has an element for each Game that is found.
    // In this case we expect it to find just one Game.
    expect(wrapped.find(Game).length).toEqual(1);
});
