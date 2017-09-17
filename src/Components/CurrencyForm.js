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
            startVal: 1
        };

        /* JavaScript does not bind the instance value of 'this' to our methods. If we want to use a callback
           after the render method has run and need to use 'this' in it, we need to manually bind this to the method */
        this.inputUpdated = this.inputUpdated.bind(this);

        this.submitValues = this.submitValues.bind(this);
    }

    // Method invoked by form components
    submitValues() {
        // we pull the zipcode out of state
        const { startVal, selectedBase } = this.state;

        // we pull onGetCurrencies method out of props
        // in App.js we invoke this component in this way: <CurrencyForm onGetCurrencies={this.onGetCurrencies} />
        const { onGetCurrencies } = this.props;

        // we call onGetCurrencies and pass it the selectedBase and startVal. This is how the parent knows about the form submission.
        onGetCurrencies(selectedBase, startVal);
    }

    // Method triggered by zipcode input changes (onInput)
    inputUpdated(e) {
        // value contains the modified input value
        const { value } = e.target;
        
        // update the state by assigning value to zipcode
        this.setState({ startVal: value });

        this.submitValues();
    }
    
    render() {
        return (
            <div className="currency-form">
                <form>
                    <label htmlFor="startVal">Zip Code</label>
                    <input
                        type="input"
                        name="startVal"
                        
                        /* Set the value of the input to the value of the startVal, because we need
                           to make sure that when this attribute is updated, then the value of the input also changes */
                        value={this.state.startVal}
                        
                        /* React's JSX callback onInput: Here we have a callback called inputUpdated that will be called
                           whenever the input event fires on the input. From our knowledge of basic JavaScript,
                           we know that this is called whenever someone types something into the input */
                        onInput={this.inputUpdated} />

                    <label htmlFor="base">Zip Code</label>
                    <select onChange={this.submitZipCode}>
                    <option value="">Select a zip</option>
                    {this.props.zips.map(zip =>
                        <option key={zip} value={zip}>{zip}</option>
                    )}
                    </select>
                </form>
            </div>
        );
    }
}

// enforce the props and their types that a component expects to receive
ZipForm.propTypes = {
    onSubmit: React.PropTypes.func
    
    // React 15.5
    //onSubmit: PropTypes.func
};

// Here we are setting an empty function to be the onSubmit prop. This way when it is called, nothing happens but the code doesn't explode
ZipForm.defaultProps = {
    onSubmit: () => {}
};

export default CurrencyForm;
