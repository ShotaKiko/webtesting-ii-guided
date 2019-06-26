import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders without crashing', () => {
  render(<App/>)
})

xit('reads hello world', () => {
   const { getByText } = render(<App />);
   const header = getByText(/Hello World/i)//regex ignores case
   expect(header).toBeVisible()
})

it('displays greeting when button is clicked', () => {
  const { getByText } = render(<App />);
  const button = getByText(/greet/i)
  fireEvent.click(button)
  getByText(/Hello there world/i)
 
})
