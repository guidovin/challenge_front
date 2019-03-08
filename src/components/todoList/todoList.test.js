import React from 'react';
import { mount } from 'enzyme';

import TodoList from './index.js';

describe('TodoList', () => {
  it('should render correctly', () => {

    const component = mount(<TodoList />);

    expect(component).toMatchSnapshot();
  });
});
