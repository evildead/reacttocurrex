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
    currencyLabels['AED'] = "United Arab Emirates Dirham";
    currencyLabels['AFN'] = "Afghan Afghani";
    currencyLabels['ALL'] = "Albanian Lek";
    currencyLabels['AMD'] = "Armenian Dram";
    currencyLabels['ANG'] = "Netherlands Antillean Guilder";
    currencyLabels['AOA'] = "Angolan Kwanza";
    currencyLabels['ARS'] = "Argentine Peso";
    currencyLabels['AUD'] = "Australian Dollar";
    currencyLabels['AWG'] = "Aruban Florin";
    currencyLabels['AZN'] = "Azerbaijani Manat";
    currencyLabels['BAM'] = "Bosnia-Herzegovina Convertible Mark";
    currencyLabels['BBD'] = "Barbadian Dollar";
    currencyLabels['BDT'] = "Bangladeshi Taka";
    currencyLabels['BGN'] = "Bulgarian Lev";
    currencyLabels['BHD'] = "Bahraini Dinar";
    currencyLabels['BIF'] = "Burundian Franc";
    currencyLabels['BMD'] = "Bermudan Dollar";
    currencyLabels['BND'] = "Brunei Dollar";
    currencyLabels['BOB'] = "Bolivian Boliviano";
    currencyLabels['BRL'] = "Brazilian Real";
    currencyLabels['BSD'] = "Bahamian Dollar";
    currencyLabels['BTC'] = "Bitcoin";
    currencyLabels['BTN'] = "Bhutanese Ngultrum";
    currencyLabels['BWP'] = "Botswanan Pula";
    currencyLabels['BYR'] = "Belarusian Ruble";
    currencyLabels['BZD'] = "Belize Dollar";
    currencyLabels['CAD'] = "Canadian Dollar";
    currencyLabels['CDF'] = "Congolese Franc";
    currencyLabels['CHF'] = "Swiss Franc";
    currencyLabels['CLF'] = "Chilean Unit of Account (UF)";
    currencyLabels['CLP'] = "Chilean Peso";
    currencyLabels['CNY'] = "Chinese Yuan";
    currencyLabels['COP'] = "Colombian Peso";
    currencyLabels['CRC'] = "Costa Rican Colón";
    currencyLabels['CUC'] = "Cuban Convertible Peso";
    currencyLabels['CUP'] = "Cuban Peso";
    currencyLabels['CVE'] = "Cape Verdean Escudo";
    currencyLabels['CZK'] = "Czech Republic Koruna";
    currencyLabels['DJF'] = "Djiboutian Franc";
    currencyLabels['DKK'] = "Danish Krone";
    currencyLabels['DOP'] = "Dominican Peso";
    currencyLabels['DZD'] = "Algerian Dinar";
    currencyLabels['EGP'] = "Egyptian Pound";
    currencyLabels['ERN'] = "Eritrean Nakfa";
    currencyLabels['ETB'] = "Ethiopian Birr";
    currencyLabels['EUR'] = "Euro";
    currencyLabels['FJD'] = "Fijian Dollar";
    currencyLabels['FKP'] = "Falkland Islands Pound";
    currencyLabels['GBP'] = "British Pound Sterling";
    currencyLabels['GEL'] = "Georgian Lari";
    currencyLabels['GGP'] = "Guernsey Pound";
    currencyLabels['GHS'] = "Ghanaian Cedi";
    currencyLabels['GIP'] = "Gibraltar Pound";
    currencyLabels['GMD'] = "Gambian Dalasi";
    currencyLabels['GNF'] = "Guinean Franc";
    currencyLabels['GTQ'] = "Guatemalan Quetzal";
    currencyLabels['GYD'] = "Guyanaese Dollar";
    currencyLabels['HKD'] = "Hong Kong Dollar";
    currencyLabels['HNL'] = "Honduran Lempira";
    currencyLabels['HRK'] = "Croatian Kuna";
    currencyLabels['HTG'] = "Haitian Gourde";
    currencyLabels['HUF'] = "Hungarian Forint";
    currencyLabels['IDR'] = "Indonesian Rupiah";
    currencyLabels['ILS'] = "Israeli New Sheqel";
    currencyLabels['IMP'] = "Manx pound";
    currencyLabels['INR'] = "Indian Rupee";
    currencyLabels['IQD'] = "Iraqi Dinar";
    currencyLabels['IRR'] = "Iranian Rial";
    currencyLabels['ISK'] = "Icelandic Króna";
    currencyLabels['JEP'] = "Jersey Pound";
    currencyLabels['JMD'] = "Jamaican Dollar";
    currencyLabels['JOD'] = "Jordanian Dinar";
    currencyLabels['JPY'] = "Japanese Yen";
    currencyLabels['KES'] = "Kenyan Shilling";
    currencyLabels['KGS'] = "Kyrgystani Som";
    currencyLabels['KHR'] = "Cambodian Riel";
    currencyLabels['KMF'] = "Comorian Franc";
    currencyLabels['KPW'] = "North Korean Won";
    currencyLabels['KRW'] = "South Korean Won";
    currencyLabels['KWD'] = "Kuwaiti Dinar";
    currencyLabels['KYD'] = "Cayman Islands Dollar";
    currencyLabels['KZT'] = "Kazakhstani Tenge";
    currencyLabels['LAK'] = "Laotian Kip";
    currencyLabels['LBP'] = "Lebanese Pound";
    currencyLabels['LKR'] = "Sri Lankan Rupee";
    currencyLabels['LRD'] = "Liberian Dollar";
    currencyLabels['LSL'] = "Lesotho Loti";
    currencyLabels['LTL'] = "Lithuanian Litas";
    currencyLabels['LVL'] = "Latvian Lats";
    currencyLabels['LYD'] = "Libyan Dinar";
    currencyLabels['MAD'] = "Moroccan Dirham";
    currencyLabels['MDL'] = "Moldovan Leu";
    currencyLabels['MGA'] = "Malagasy Ariary";
    currencyLabels['MKD'] = "Macedonian Denar";
    currencyLabels['MMK'] = "Myanma Kyat";
    currencyLabels['MNT'] = "Mongolian Tugrik";
    currencyLabels['MOP'] = "Macanese Pataca";
    currencyLabels['MRO'] = "Mauritanian Ouguiya";
    currencyLabels['MUR'] = "Mauritian Rupee";
    currencyLabels['MVR'] = "Maldivian Rufiyaa";
    currencyLabels['MWK'] = "Malawian Kwacha";
    currencyLabels['MXN'] = "Mexican Peso";
    currencyLabels['MYR'] = "Malaysian Ringgit";
    currencyLabels['MZN'] = "Mozambican Metical";
    currencyLabels['NAD'] = "Namibian Dollar";
    currencyLabels['NGN'] = "Nigerian Naira";
    currencyLabels['NIO'] = "Nicaraguan Córdoba";
    currencyLabels['NOK'] = "Norwegian Krone";
    currencyLabels['NPR'] = "Nepalese Rupee";
    currencyLabels['NZD'] = "New Zealand Dollar";
    currencyLabels['OMR'] = "Omani Rial";
    currencyLabels['PAB'] = "Panamanian Balboa";
    currencyLabels['PEN'] = "Peruvian Nuevo Sol";
    currencyLabels['PGK'] = "Papua New Guinean Kina";
    currencyLabels['PHP'] = "Philippine Peso";
    currencyLabels['PKR'] = "Pakistani Rupee";
    currencyLabels['PLN'] = "Polish Zloty";
    currencyLabels['PYG'] = "Paraguayan Guarani";
    currencyLabels['QAR'] = "Qatari Rial";
    currencyLabels['RON'] = "Romanian Leu";
    currencyLabels['RSD'] = "Serbian Dinar";
    currencyLabels['RUB'] = "Russian Ruble";
    currencyLabels['RWF'] = "Rwandan Franc";
    currencyLabels['SAR'] = "Saudi Riyal";
    currencyLabels['SBD'] = "Solomon Islands Dollar";
    currencyLabels['SCR'] = "Seychellois Rupee";
    currencyLabels['SDG'] = "Sudanese Pound";
    currencyLabels['SEK'] = "Swedish Krona";
    currencyLabels['SGD'] = "Singapore Dollar";
    currencyLabels['SHP'] = "Saint Helena Pound";
    currencyLabels['SLL'] = "Sierra Leonean Leone";
    currencyLabels['SOS'] = "Somali Shilling";
    currencyLabels['SRD'] = "Surinamese Dollar";
    currencyLabels['STD'] = "São Tomé and Príncipe Dobra";
    currencyLabels['SVC'] = "Salvadoran Colón";
    currencyLabels['SYP'] = "Syrian Pound";
    currencyLabels['SZL'] = "Swazi Lilangeni";
    currencyLabels['THB'] = "Thai Baht";
    currencyLabels['TJS'] = "Tajikistani Somoni";
    currencyLabels['TMT'] = "Turkmenistani Manat";
    currencyLabels['TND'] = "Tunisian Dinar";
    currencyLabels['TOP'] = "Tongan Paʻanga";
    currencyLabels['TRY'] = "Turkish Lira";
    currencyLabels['TTD'] = "Trinidad and Tobago Dollar";
    currencyLabels['TWD'] = "New Taiwan Dollar";
    currencyLabels['TZS'] = "Tanzanian Shilling";
    currencyLabels['UAH'] = "Ukrainian Hryvnia";
    currencyLabels['UGX'] = "Ugandan Shilling";
    currencyLabels['USD'] = "United States Dollar";
    currencyLabels['UYU'] = "Uruguayan Peso";
    currencyLabels['UZS'] = "Uzbekistan Som";
    currencyLabels['VEF'] = "Venezuelan Bolívar Fuerte";
    currencyLabels['VND'] = "Vietnamese Dong";
    currencyLabels['VUV'] = "Vanuatu Vatu";
    currencyLabels['WST'] = "Samoan Tala";
    currencyLabels['XAF'] = "CFA Franc BEAC";
    currencyLabels['XAG'] = "Silver (troy ounce)";
    currencyLabels['XAU'] = "Gold (troy ounce)";
    currencyLabels['XCD'] = "East Caribbean Dollar";
    currencyLabels['XDR'] = "Special Drawing Rights";
    currencyLabels['XOF'] = "CFA Franc BCEAO";
    currencyLabels['XPF'] = "CFP Franc";
    currencyLabels['YER'] = "Yemeni Rial";
    currencyLabels['ZAR'] = "South African Rand";
    currencyLabels['ZMK'] = "Zambian Kwacha (pre-2013)";
    currencyLabels['ZMW'] = "Zambian Kwacha";
    currencyLabels['ZWL'] = "Zimbabwean Dollar";

    return currencyLabels;
}

// add checkOnline function to checkOnline property of exports
exports.checkOnline = checkOnline;

// add getDateOfToday function to getDateOfToday property of exports
exports.getDateOfToday = getDateOfToday;

// add getDateOfToday function to getDateOfToday property of exports
exports.getCurrencyLabels = getCurrencyLabels;
