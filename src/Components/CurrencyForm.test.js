import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyForm from './CurrencyForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrencyForm />, div);
});
