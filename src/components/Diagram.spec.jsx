import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Diagram from './Diagram';

describe('Diagram', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Diagram />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
