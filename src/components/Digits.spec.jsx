import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Digits from './Digits';

describe('Digits', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Digits guesses="abc" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
