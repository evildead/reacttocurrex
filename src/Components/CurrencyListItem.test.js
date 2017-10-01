import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyListItem from './CurrencyListItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrencyListItem startVal={10000} rate={1.5} target={"USD"}  />, div);
});
