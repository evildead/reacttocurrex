import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        console.log("Hi there! CurrencyListItem.js component just did mount");
    }

    /**
     * Function invoked to render(draw) this component on the screen (one of React's lifecycle methods)
     */
    render() {
        const{ startVal, rate, target } = this.props;
        var rateStr = 'Rate: ' + rate;
        var finalVal = startVal * rate;

        return (
            <div className="CurrencyListItem">
                <h2>{target}</h2>
                <span title={rateStr}>{finalVal.toFixed(5)}</span>
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
