import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import Portfolio from './Portfolio';
import './setupTests';

it('renders without crashing', () => {
  shallow(<Portfolio />);
});
