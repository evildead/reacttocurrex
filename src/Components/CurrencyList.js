import React, { Component } from 'react';
import CurrencyListItem from './CurrencyListItem'

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
        console.log("Hi there! CurrencyList.js component just did mount");
    }

    /**
     * Function invoked to render(draw) this component on the screen (one of React's lifecycle methods)
     */
    render() {
        const{ startVal, baseRates } = this.props;

        return (
            <div className="CurrencyList">
                <h1>Currencies compared to {baseRates.base}</h1>
                {Object.keys(baseRates.rates).map((key, index) =>
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
    startVal: React.PropTypes.number.isRequired,
    rates: React.PropTypes.object.isRequired
};

export default CurrencyList;
