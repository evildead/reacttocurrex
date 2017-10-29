import React, { Component } from 'react';
import dollarSign from './dollarsign01.png';
import { jsonp } from 'axios-jsonp-pro';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import CurrencyForm from './Components/CurrencyForm';
import CurrencyList from './Components/CurrencyList';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// use exports.checkOnline in util.js file
var checkOnline = require('./Shared/util.js').checkOnline;
// use exports.getDateOfToday in util.js file
var getDateOfToday = require('./Shared/util.js').getDateOfToday;
// use exports.getCurrencyLabels in util.js file
var getCurrencyLabels = require('./Shared/util.js').getCurrencyLabels;

class App extends Component {
    /**
     * App class constructor
     * @param {*properties passed to component's constructor} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            latestBaseRates: {},
            startVal: 1,
            selectedBase: 'EUR'
        };

        this.getLatestRates = this.getLatestRates.bind(this);
        this.getLatestRatesObjectFromState = this.getLatestRatesObjectFromState.bind(this);
        this.addOrReplaceLatestBaseRates = this.addOrReplaceLatestBaseRates.bind(this);
        this.onGetCurrencies = this.onGetCurrencies.bind(this);
        this.getCurrencyList = this.getCurrencyList.bind(this);
    }

    // readable property fixerioapiroot: returns the path to fixer.io APIs
    get fixerioapiroot() {
        return "https://api.fixer.io";
    }

    /**
     * Function invoked when this react component is mounted (one of React's lifecycle methods)
     */
    componentDidMount() {
        // Uncomment for debug
        //console.log("Hi there! App.js component just did mount");

        this.getLatestRates("EUR");
    }

    /**
     * Asynchronous method to retrieve the latest currency rates
     * @param {*base currency: 'EUR', 'USD', 'GPB', ...} base 
     */
    getLatestRates(base) {
        if(!checkOnline()) {
            return;
        }

        jsonp(this.fixerioapiroot + '/latest?base=' + base)
        .then((response) => {
            console.log(response);
            this.addOrReplaceLatestBaseRates(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    /**
     * Method invoked when a start value to be converted or base are selected
     * @param {*base currency: 'EUR', 'USD', 'GPB', ...} base 
     * @param {*the value to be transformed} startVal 
     */
    onGetCurrencies(base, startVal) {
        this.setState({ startVal: startVal, selectedBase: base });

        // get rates from state
        var currencyRates = this.getLatestRatesObjectFromState(base);

        // in our state we don't have the up-to-date rates values
        if((currencyRates === null) || (currencyRates.date < getDateOfToday())) {
            this.getLatestRates(base);
        }
    }

    getCurrencyList() {
        const{ startVal, selectedBase } = this.state;

        if((startVal > -1) && (selectedBase.length > 2)) {
            var latestRatesInState = this.getLatestRatesObjectFromState(selectedBase);
            if(latestRatesInState !== null) {
                return <CurrencyList startVal={startVal} baseRates={latestRatesInState} />
            }
        }
        
        return null;
    }

    /**
     * add or replace the response inside latestBaseRates (contained in state)
     * @param {*a response object containing: base, date and rates} response 
     */
    addOrReplaceLatestBaseRates(response) {
        const { base } = response;
        const{ latestBaseRates } = this.state;

        latestBaseRates[base] = response;

        this.setState({ latestBaseRates:latestBaseRates });
    }

    /**
     * get the latest rates from state
     * @param {*base currency: 'EUR', 'USD', 'GPB', ...} base 
     */
    getLatestRatesObjectFromState(base) {
        const{ latestBaseRates  } = this.state;

        if(latestBaseRates.hasOwnProperty(base)) {
            return latestBaseRates[base];
        }
        else {
            return null;
        }
    }

    /**
     * Function invoked to render(draw) this component on the screen (one of React's lifecycle methods)
     */
    render() {
        const{ startVal, selectedBase } = this.state;
        var completeCurrencyName = getCurrencyLabels()[selectedBase];

        return (
            <div className="App">
                <Navbar inverse fixedTop expanded fluid>
                    <Navbar.Header>
                        <Navbar.Brand className="customNavbar">
                            <img src={dollarSign} className="App-logo" alt="logo" />
                            <p className="navbar-brand-title">React to Currency Exchange</p>
                            <p className="navbar-brand-subtitle">Currencies compared to:<br />{startVal} {selectedBase} <span className="smallText">({completeCurrencyName})</span></p>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

                <div className="row App-body">
                    <div className="col-sm-3">
                        <CurrencyForm onGetCurrencies={this.onGetCurrencies} />
                    </div>
                    <div className="col-sm-9">
                        {/**
                        * The CurrencyList
                        */}
                        {this.getCurrencyList()}
                    </div>
                </div>

                <Navbar inverse expanded fluid>
                    <Nav>
                        <NavItem href="http://fixer.io" target="_blank">Foreign exchange rates API by Fixer.io</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default App;
