import React, { Component } from 'react';
import dollarSign from './dollarsign01.png';
import { jsonp } from 'axios-jsonp-pro'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latestBaseRates: {}
        };

        this.getLatestRates = this.getLatestRates.bind(this);
        this.getLatestRatesObjectFromState = this.getLatestRatesObjectFromState.bind(this);
        this.addOrReplaceLatestBaseRates = this.addOrReplaceLatestBaseRates.bind(this);
    }

    get fixerioapiroot() {
        return "http://api.fixer.io";
    }

    componentDidMount() {
        console.log("Hi there! App.js component just did mount");

        this.getLatestRates("EUR");
    }

    getLatestRates(base) {
        jsonp(this.fixerioapiroot + '/latest?base=' + base)
        .then((response) => {
            console.log(response);
            addOrReplaceLatestBaseRates(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    addOrReplaceLatestBaseRates(response) {
        const { base, date, rates } = response;
        const{ latestBaseRates } = this.state;

        latestBaseRates[base] = response;

        this.setState({ latestBaseRates:latestBaseRates });
    }

    getLatestRatesObjectFromState(base) {
        const{ latestBaseRates } = this.state;

        if(latestBaseRates.hasOwnProperty(base)) {
            return latestBaseRates[base];
        }
        else {
            return null;
        }
    }

    getDateOfToday() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd < 10){
            dd = '0' + dd;
        } 
        if(mm < 10){
            mm = '0' + mm;
        }

        return( yyyy + '-' + mm + '-' + dd );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                <img src={dollarSign} className="App-logo" alt="logo" />
                <h2>React to Currency Exchange</h2>
                </div>
            </div>
        );
    }
}

export default App;
