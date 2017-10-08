import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Title from './Title';

describe('Title', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Title 
      content='yay'
      guesses='abc'
      missedLetters='y'
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
