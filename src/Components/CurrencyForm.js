import React from 'react'

// For React 15.5 on, add the prop-types external package prop-types (to be added with npm)
//import PropTypes from 'prop-types'

// use exports.checkOnline in util.js file
var getCurrencyLabels = require('../Shared/util.js').getCurrencyLabels;

//The component representing the form to submit values and base currencies
class CurrencyForm extends React.Component {
    // The class constructor (ES6 or ECMAScript 6)
    constructor(props) {
        super(props);

        /* State in React is simply any piece of data that is specific to the component it is inside of.
           Make sure you initialize state with all the properties you plan on there being to manage */
        this.state = {
            selectedBase: 'EUR',
            startVal: 1,
            currencyLabels: {}
        };

        this.setState({ currencyLabels: getCurrencyLabels() });

        /* JavaScript does not bind the instance value of 'this' to our methods. If we want to use a callback
           after the render method has run and need to use 'this' in it, we need to manually bind this to the method */
        this.inputUpdated = this.inputUpdated.bind(this);

        this.submitValues = this.submitValues.bind(this);
    }

    // Method invoked by form components
    submitValues() {
        // we pull the startVal and selectedBase out of state
        const { startVal, selectedBase } = this.state;

        // we pull onGetCurrencies method out of props
        // in App.js we invoke this component in this way: <CurrencyForm onGetCurrencies={this.onGetCurrencies} />
        const { onGetCurrencies } = this.props;

        // we call onGetCurrencies and pass it the selectedBase and startVal. This is how the parent knows about the form submission.
        onGetCurrencies(selectedBase, startVal);
    }

    // Method triggered by startVal input changes (onInput)
    inputUpdated(e) {
        // value contains the modified input value
        const { value } = e.target;
        
        // update the state by assigning value to startVal
        this.setState({ startVal: value });

        this.submitValues();
    }

    baseCurrencySelected(e) {
        // value contains the modified input value
        const { value } = e.target;

        // update the state by assigning value to selectedBase
        this.setState({ selectedBase: value });
        
        this.submitValues();
    }
    
    render() {
        const{ currencyLabels, selectedBase } = this.state;
        return (
            <div className="currency-form">
                <form>
                    <label htmlFor="startVal">Start Value</label>
                    <input
                        type="input"
                        name="startVal"
                        value={this.state.startVal}
                        onInput={this.inputUpdated} />

                    <label htmlFor="base">Base Currency</label>
                    <select onChange={this.baseCurrencySelected}>
                    {Object.keys(currencyLabels).map(key => {
                        if(key == selectedBase) {
                            <option key={key} value={key} selected>{currencyLabels[key]}</option>
                        }
                        else {
                            <option key={key} value={key}>{currencyLabels[key]}</option>
                        }
                    })}
                    </select>
                </form>
            </div>
        );
    }
}

export default CurrencyForm;
