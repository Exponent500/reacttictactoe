import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Square from './Square';
import Icon from '../Icon/Icon';
import Root from 'Root';

let wrapped;

describe('Square', () => {
    it('should render correctly', () => {
        wrapped = shallow(
            <Square value='mockValue'></Square>
        ); 
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });
    it('should include an Icon component', () => {
        wrapped = mount(<Root><Square /></Root>);
        expect(wrapped.find(Icon).length).toEqual(1);
    })
});
