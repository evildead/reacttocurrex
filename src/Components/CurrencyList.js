import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyListItem from './CurrencyListItem';

// use exports.getCurrencyLabels in util.js file
var getCurrencyLabels = require('../Shared/util.js').getCurrencyLabels;

class CurrencyList extends Component {
    /**
     * App class constructor
     * @param {*properties passed to component's constructor} props 
     */
    constructor(props) {
        super(props);
    }

    /**
     * Function invoked when this react component is mounted (one of React's lifecycle methods)
     */
    componentDidMount() {
        // Uncomment for debug
        //console.log("Hi there! CurrencyList.js component just did mount");
    }

    /**
     * Function invoked to render(draw) this component on the screen (one of React's lifecycle methods)
     */
    render() {
        const{ startVal, baseRates } = this.props;
        var completeCurrencyName = getCurrencyLabels()[baseRates.base];

        return (
            <div className="Currency-List">
                <h4>Currencies compared to {baseRates.base} ({completeCurrencyName})</h4>
                {Object.keys(baseRates.rates).sort().map((key, index) =>
                    <CurrencyListItem
                        key={key}
                        startVal={startVal}
                        rate={baseRates.rates[key]}
                        target={key}
                    />
                )}
            </div>
        );
    }
}

CurrencyList.propTypes = {
    startVal: PropTypes.number.isRequired,
    baseRates: PropTypes.object.isRequired
};

export default CurrencyList;
