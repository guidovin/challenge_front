import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App.js';

describe('App', () => {
  it('should render correctly, have children, pass functions to them and alter state correctly ', () => {
    const component = mount(<App />);
    component.find('.viewTogle').hostNodes().simulate('click');
    expect(component.state('showCompleted')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
