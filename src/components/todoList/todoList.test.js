import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './index.js';

describe('TodoList', () => {
  it('should render correctly', () => {

    const component = shallow(<TodoList />);

    expect(component).toMatchSnapshot();
  });
});
