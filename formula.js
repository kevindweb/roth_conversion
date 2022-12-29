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

    var data = {
        labels: [],
        datasets: [
            {
                label: "Traditional IRA Post-Tax",
                backgroundColor: "green",
                data: []
            },
            {
                label: "Roth IRA",
                backgroundColor: "blue",
                data: []
            },
            {
                label: "Traditional IRA + Tax Savings Invested",
                backgroundColor: "red",
                data: []
            }
        ]
    }

    if (prevChart !== undefined) {
        prevChart.destroy();
    }

    var currentYear = new Date().getFullYear();
    var investmentYearSet = split(currentYear, currentYear + timeHorizon, 8);

    for (var i = 0; i <= timeHorizon; i++) {
        calcValues(data, investmentYearSet, i, afterTaxRateOfReturn, investmentTaxes, rateOfReturn, retirementTaxRate, investmentAmount, nonDeductableAmount);
    }

    prevChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataSet = data.datasets[tooltipItem.datasetIndex];
                        var value = dataSet.data[tooltipItem.index];
                        var label = dataSet.label;

                        if (parseInt(value) >= 1000) {
                            return label + ': $' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        } else {
                            return label + ': $' + value;
                        }
                    }
                }
            },
            barValueSpacing: 20,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        beginAtZero: true,
                        userCallback: function (value, index, values) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        }
                    }
                }]
            }
        }
    });
}

function calcValues(chartData, chartSet, e, afterTaxROR, taxes, ror, taxRate, investment, deductableOffset) {
    nIRA_BF_TAX_ATR = investment / Math.pow(1 + ror, -1 * e);
    nIRA_TAX_ATR = (nIRA_BF_TAX_ATR - deductableOffset) * (taxRate / 100);
    nIRA_TAX_PMT_RTN_ATR = fvAmount(afterTaxROR, e, taxes);
    nIRA_AF_TAX_ATR = nIRA_BF_TAX_ATR - nIRA_TAX_ATR;
    nIRA_TOT_ATR = nIRA_AF_TAX_ATR + nIRA_TAX_PMT_RTN_ATR;
    nROTH_TOT_ATR = nIRA_BF_TAX_ATR;

    var currentYear = new Date().getFullYear() + e;

    if (!chartSet.has(currentYear)) {
        return;
    }

    chartData["labels"].push(currentYear);
    var graphDataPoints = chartData["datasets"];
    graphDataPoints[0]["data"].push(Math.ceil(nIRA_AF_TAX_ATR));
    graphDataPoints[1]["data"].push(Math.floor(nROTH_TOT_ATR));
    graphDataPoints[2]["data"].push(Math.ceil(nIRA_TOT_ATR));
}

function split(left, right, parts) {
    var result = new Set();
    var delta = (right - left) / (parts - 1);
    while (left < right) {
        result.add(Math.ceil(left));

        left += delta;
    }

    result.add(Math.ceil(right));
    console.log(result);
    return result;
}

function fvAmount(e, t, i) {
    return 0 == e ? i : i / Math.pow(1 + e, -1 * t);
}

function inputValue(inputName) {
    return parseInt(document.getElementsByName(inputName)[0].value);
}

var ctx = document.getElementById("investmentGainsChart").getContext("2d");
var prevChart;

// run calculation on init
calculate();