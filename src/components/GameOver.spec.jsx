import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameOver from './GameOver';

describe('Game Over', () => {
  const text = 'Snap!';

  it('should render the component', () => {
    const wrapper = shallow(<GameOver text={text} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
