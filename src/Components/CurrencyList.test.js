import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from './CurrencyList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    var baseRates = JSON.parse('{"base": "EUR","date": "2017-09-15","rates": {"AUD": 1.4911,"BGN": 1.9558,"BRL": 3.7357,"CAD": 1.452,"CHF": 1.148,"CNY": 7.8299,"CZK": 26.081,"DKK": 7.4409,"GBP": 0.88043,"HKD": 9.3506,"HRK": 7.4805,"HUF": 308.91,"IDR": 15859,"ILS": 4.209,"INR": 76.662,"JPY": 132.92,"KRW": 1353,"MXN": 21.136,"MYR": 5.0119,"NOK": 9.3348,"NZD": 1.6407,"PHP": 61.305,"PLN": 4.2761,"RON": 4.5999,"RUB": 68.823,"SEK": 9.5058,"SGD": 1.607,"THB": 39.574,"TRY": 4.114,"USD": 1.1963,"ZAR": 15.761}}');
    ReactDOM.render(<CurrencyList startVal={10000} base={"EUR"} baseRates={baseRates}  />, div);
});
