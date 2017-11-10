import React from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import '../bootstrap/css/bootstrap.min.css';

// For React 15.5 on, add the prop-types external package prop-types (to be added with npm)
//import PropTypes from 'prop-types'

// use exports.getCurrencyLabels in util.js file
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
            currencyLabels: getCurrencyLabels()
        };

        /* JavaScript does not bind the instance value of 'this' to our methods. If we want to use a callback
           after the render method has run and need to use 'this' in it, we need to manually bind this to the method */
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitValues = this.submitValues.bind(this);
        this.baseCurrencySelected = this.baseCurrencySelected.bind(this);
    }

    /**
     * Function invoked when this react component is mounted (one of React's lifecycle methods)
     */
    componentDidMount() {
        // Uncomment for debug
        //console.log("Hi there! CurrencyForm.js component just did mount");
    }

    // Method invoked by form components
    submitValues(e) {
        // We need to prevent the default action of the form so that we stay on the page. 
        e.preventDefault();

        // we pull the startVal and selectedBase out of state
        const { startVal, selectedBase } = this.state;

        // we sanitize the startVal
        let sanitizedVal = startVal.replace(/[^\d\.]+/g, '') // remove all non digit or '.' chars
            .replace(/\.\.+/g, '.'); // Replace multiple . with single .
        sanitizedVal = parseFloat(sanitizedVal);
        if(isNaN(sanitizedVal)) {
            sanitizedVal = 0;
        }

        // set the startVal to the sanitized value
        this.setState({
            startVal: sanitizedVal
        });

        // we pull onGetCurrencies method out of props
        // in App.js we invoke this component in this way: <CurrencyForm onGetCurrencies={this.onGetCurrencies} />
        const { onGetCurrencies } = this.props;

        // we call onGetCurrencies and pass it the selectedBase and sanitizedVal. This is how the parent knows about the form submission.
        onGetCurrencies(selectedBase, sanitizedVal);
    }

    // Method triggered by startVal input changes (onInput)
    inputUpdated(e) {
        // value contains the modified input value
        const { value } = e.target;
        
        // update the state by assigning value to startVal
        this.setState({
            startVal: value
        });
    }

    baseCurrencySelected(e) {
        // value contains the modified input value
        const { value } = e.target;

        // update the state by assigning value to selectedBase
        this.setState({ selectedBase: value });
    }
    
    render() {
        const{ currencyLabels, selectedBase } = this.state;
        return (
            <div className="Currency-form">
                <form onSubmit={this.submitValues}>
                    <FormGroup>
                        <ControlLabel htmlFor="startVal">Start Value</ControlLabel>
                        <FormControl
                            type="text"
                            id="startVal"
                            name="startVal"
                            value={this.state.startVal}
                            onChange={this.inputUpdated} />
                    </FormGroup>
                    
                    <FormGroup>
                        <ControlLabel htmlFor="base">Base Currency</ControlLabel>
                        <FormControl componentClass="select" value={selectedBase} onChange={this.baseCurrencySelected}>
                        {Object.keys(currencyLabels).map(key => {
                            return <option key={key} value={key}>{key} ({currencyLabels[key]})</option>
                        })}
                        </FormControl>
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit">Go for it!!</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default CurrencyForm;
