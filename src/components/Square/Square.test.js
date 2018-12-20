import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Square from './Square';

let wrapped;

beforeEach( () => {
    wrapped = shallow(
        <Square value="mockValue"></Square>
    ); 
});

describe('Square', () => {
    it('should render correctly', () => {
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });
});
