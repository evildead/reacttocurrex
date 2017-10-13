import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../bootstrap/css/bootstrap.min.css';

// use exports.getCurrencyLabels in util.js file
var getCurrencyLabels = require('../Shared/util.js').getCurrencyLabels;

class CurrencyListItem extends Component {
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
        //console.log("Hi there! CurrencyListItem.js component just did mount");
    }

    /**
     * Function invoked to render(draw) this component on the screen (one of React's lifecycle methods)
     */
    render() {
        const{ startVal, rate, target } = this.props;
        var rateStr = 'Rate: ' + rate;
        var completeCurrencyName = getCurrencyLabels()[target];
        var finalVal = startVal * rate;

        return (
            <div className="Currency-List-Item col-sm-3">
                <h4><span title={completeCurrencyName}>{target}</span></h4>
                <h5>{completeCurrencyName}</h5>
                <span title={rateStr}>{finalVal.toFixed(3)}</span>
            </div>
        );
    }
}

CurrencyListItem.propTypes = {
    startVal: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    target: PropTypes.string.isRequired
};

export default CurrencyListItem;
