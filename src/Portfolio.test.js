import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import Portfolio from './Portfolio';
import './setupTests';

it('renders without crashing', () => {
  shallow(<Portfolio />);
});

it('have h1 element', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper.containsMatchingElement(<h1>Portfolio</h1>)).toEqual(true)
  });

it('have div with grid-sizer class', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper.containsMatchingElement(<div className="grid-sizer"></div>)).toEqual(true)
  });

it('have grid-item class', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper.find('.grid-item')).toBeTruthy()
  });

it('have many grid-item class', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper.find('.grid-item')).toBeGreaterThan(0);
  });
