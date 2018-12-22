import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Square from './Square';
import Icon from '../Icon/Icon';

let wrapped;

beforeEach( () => {
    wrapped = shallow(
        <Square value='mockValue'></Square>
    ); 
});

describe('Square', () => {
    it('should render correctly', () => {
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });
    it('should include an Icon component', () => {
        expect(wrapped.find(Icon).length).toEqual(1);
    })
});
