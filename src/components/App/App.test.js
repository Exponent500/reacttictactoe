import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

it('should render correclty', () => {
    const wrapped = shallow(<App />); 
    expect(shallowToJson(wrapped)).toMatchSnapshot();
});
