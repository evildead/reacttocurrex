/**
 * Create a function that returns true if we are online
 */
var checkOnline = function() {
    return navigator.onLine;
}

/**
 * Date of today in format: yyyy-mm-dd
 */
var getDateOfToday = function() {
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

var getCurrencyLabels = function() {
    var currencyLabels = {};
    currencyLabels['AUD'] = "Australia Dollar";
    currencyLabels['BGN'] = "Bulgaria Lev";
    currencyLabels['BRL'] = "Brazil Real";
    currencyLabels['CAD'] = "Canada Dollar";
    currencyLabels['CHF'] = "Switzerland Franc";
    currencyLabels['CNY'] = "China Yuan Renminbi";
    currencyLabels['CZK'] = "Czech Republic Koruna";
    currencyLabels['DKK'] = "Denmark Krone";
    currencyLabels['EUR'] = "Euro Member Countries";
    currencyLabels['GBP'] = "United Kingdom Pound";
    currencyLabels['HKD'] = "Hong Kong Dollar";
    currencyLabels['HRK'] = "Croatia Kuna";
    currencyLabels['HUF'] = "Hungary Forint";
    currencyLabels['IDR'] = "Indonesia Rupiah";
    currencyLabels['ILS'] = "Israel Shekel";
    currencyLabels['INR'] = "India Rupee";
    currencyLabels['JPY'] = "Japan Yen";
    currencyLabels['KRW'] = "Korea (South) Won";
    currencyLabels['MXN'] = "Mexico Peso";
    currencyLabels['MYR'] = "Malaysia Ringgit";
    currencyLabels['NOK'] = "Norway Krone";
    currencyLabels['NZD'] = "New Zealand Dollar";
    currencyLabels['PHP'] = "Philippines Peso";
    currencyLabels['PLN'] = "Poland Zloty";
    currencyLabels['RON'] = "Romania Leu";
    currencyLabels['RUB'] = "Russia Ruble";
    currencyLabels['SEK'] = "Sweden Krona";
    currencyLabels['SGD'] = "Singapore Dollar";
    currencyLabels['THB'] = "Thailand Baht";
    currencyLabels['TRY'] = "Turkey Lira";
    currencyLabels['USD'] = "United States Dollar";
    currencyLabels['ZAR'] = "South Africa Rand";

    return currencyLabels;
}

// add checkOnline function to checkOnline property of exports
exports.checkOnline = checkOnline;

// add getDateOfToday function to getDateOfToday property of exports
exports.getDateOfToday = getDateOfToday;

// add getDateOfToday function to getDateOfToday property of exports
exports.getCurrencyLabels = getCurrencyLabels;
