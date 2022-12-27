function calculate() {
    var investmentAmount = inputValue("AMT"),
        currentTaxRate = inputValue("TAX_RATE"),
        retirementTaxRate = inputValue("TAX_RATE_ATR"),
        investmentTaxRate = inputValue("TAX_RATE_INVEST"),
        currentAge = inputValue("AGE"),
        retirementAge = inputValue("AGE_ATR"),
        rateOfReturn = inputValue("ROR_INVEST"),
        nonDeductableAmount = inputValue("AMT_AF_TAX");
    nIRA_BF_TAX_ATR = 0, nIRA_TAX_ATR = 0, nIRA_TAX_PMT_RTN_ATR = 0, nIRA_AF_TAX_ATR = 0, nROTH_TOT_ATR = 0;

    rateOfReturn /= 100;
    var timeHorizon = retirementAge - currentAge;
    var afterTaxRateOfReturn = rateOfReturn * (1 - investmentTaxRate / 100);
    var investmentTaxes = currentTaxRate / 100 * (investmentAmount - nonDeductableAmount);

    calcValues(timeHorizon, afterTaxRateOfReturn, investmentTaxes, rateOfReturn, retirementTaxRate, investmentAmount, nonDeductableAmount);
    for (var i = 0; i <= timeHorizon; i++) {
        calcValues(i, afterTaxRateOfReturn, investmentTaxes, rateOfReturn, retirementTaxRate, investmentAmount, nonDeductableAmount);
    }

    updateValue("netRothReturn", Math.floor(nROTH_TOT_ATR));
    updateValue("netTraditionalReturn", Math.ceil(nIRA_AF_TAX_ATR));
    updateValue("netTotalReturn", Math.ceil(nIRA_TOT_ATR));
}

function calcValues(e, afterTaxROR, taxes, ror, taxRate, investment, deductableOffset) {
    nIRA_BF_TAX_ATR = investment / Math.pow(1 + ror, -1 * e);
    nIRA_TAX_ATR = (nIRA_BF_TAX_ATR - deductableOffset) * (taxRate / 100);
    nIRA_TAX_PMT_RTN_ATR = fvAmount(afterTaxROR, e, taxes);
    nIRA_AF_TAX_ATR = nIRA_BF_TAX_ATR - nIRA_TAX_ATR;
    nIRA_TOT_ATR = nIRA_AF_TAX_ATR + nIRA_TAX_PMT_RTN_ATR;
    nROTH_TOT_ATR = nIRA_BF_TAX_ATR;
}

function fvAmount(e, t, i) {
    return 0 == e ? i : i / Math.pow(1 + e, -1 * t);
}

function inputValue(inputName) {
    return parseInt(document.getElementsByName(inputName)[0].value);
}

function updateValue(inputName, value) {
    input = document.getElementById(inputName);
    input.innerHTML = numberWithCommas(value);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// run calculation on init
calculate();