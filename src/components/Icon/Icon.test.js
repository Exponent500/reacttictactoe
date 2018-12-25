import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Icon from './Icon';

let wrapped;

describe('Icon', () => {
    it('should render correctly', () => {
        wrapped = shallow(
            <Icon type='mockType'></Icon>
        )
        expect(shallowToJson(wrapped)).toMatchSnapshot();
    });
});