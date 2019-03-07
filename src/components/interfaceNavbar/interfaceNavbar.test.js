import React from 'react';
import { shallow } from 'enzyme';

import InterfaceNavbar from './index.js';

describe('InterfaceNavbar', () => {
  it('should render correctly in "debug" mode', () => {

    const component = shallow(<InterfaceNavbar />);
    expect(component.find('.prompt')).toBeTruthy();
    expect(component.find('.prompt').props('placeholder').placeholder).toEqual('Todo name...');
    expect(component.find('.viewTogle')).toBeTruthy();

    expect(component).toMatchSnapshot();
  });
});
