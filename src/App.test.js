import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  render(<App/>)
})

it('reads hello world', () => {
   const { getByText } = render(<App />);
   const header = getByText(/Hello World/i)//regex ignores case
   expect(header).toBeVisible()
})
