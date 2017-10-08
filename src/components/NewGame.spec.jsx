import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewGame from './NewGame';

describe('New Game', () => {
  const item = 'Another one?';

  it('should render the component', () => {
    const wrapper = shallow(
      <NewGame>
        {item}
      </NewGame>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
