import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TopHeader from '../TopHeader/TopHeader';
import Game from '../Game/Game';
import App from './App';


let wrapped;

beforeEach( () => {
    wrapped = shallow(<App />);
});

describe('App', () => {
    it('should render correclty', () => {
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });
    
    it('should include a TopHeader component', () => {
        expect(wrapped.find(TopHeader).length).toEqual(1);
    })
    
    it('should include a Game component', () => {
        expect(wrapped.find(Game).length).toEqual(1);
    })
});