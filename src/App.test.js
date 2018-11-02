import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import App from './App';
import Nav from './Nav';
import Footer from './Footer';
import './setupTests';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes Nav', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Nav />)).toEqual(true)
});

it('includes Footer', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Footer />)).toEqual(true)
});
