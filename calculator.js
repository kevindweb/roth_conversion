String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
});
var rothConversion = {
    lang: "EN",
    initFired: false,
    InReport: false,
    reportTest: false,
    CalcDelay: 100,
    CalcDelayVML: 1e3,
    CalculatorWidthMax: 850,
    CalculatorWidthMin: 285,
    ShowDefinitions: true,
    ShowCalculateButton: true,
    ShowPrintButton: true,
    IncludeDefinitions: true,
    PopupDefinitions: true,
    SliderWidthAdjust: 0,
    bNativeSlider: false,
    ErrorBackground: "#FF7777",
    IncompleteBackground: "#FFFF77",
    CalculatorName: "Calculator Title",
    bUseInputForm: false,
    CommandButtons: "<div id='rothConversionCommandButtons'><input type=button class=rothConversionCommandButton  name=rothConversionCalculate id=rothConversionCalculate value='**LBL_CALCULATE**' /><input **VIEWREPORT** class=rothConversionCommandButton  id=rothConversionViewReport name=rothConversionViewReport value='**LBL_VIEWREPORT**' /></div>",
    ReportButtons: "<div align=center><div id='rothConversionReportButtons'><input type=button class=rothConversionCommandButton  name=rothConversionPrint id=rothConversionPrintReport value=\"**LBL_PRINTREPORT**\" /><input type=button  class=rothConversionCommandButton  id=rothConversionHideReport name=rothConversionHideReport value='**LBL_HIDEREPORT**' /></div></div>",
    CommandButtonsFixed: false,
    CommandButtonsTop: true,
    CommandButtonOffset: 20,
    CommandButtonHeader: 0,
    Scroll: true,
    ScrollMinimum: 23,
    ReportHeader: "<div class='rothConversionReportTitleHeader'>**REPORT_TITLE**</div>",
    ReportStyleDefault: "<style>  BODY, TABLE, TD, TH, UL, OL, DD, DL, P, BR { font-family: arial, sans-serif; font-size: 10pt; } H1 { font-family: arial, sans-serif; font-size: 13pt; font-weight: bold; }DT { font-family: arial, sans-serif; font-size: 10pt; font-weight: bold;  }P.footer { font-family: arial, sans-serif; font-size: 9pt; } DIV.large { font-family: arial, sans-serif; font-size: 13pt; font-weight: bold; }</style>",
    iDecimal: 2,
    ReportShowGraphs: true,
    ReportFooter: "Roth Conversion Calculator",
    ReportExtraFooter: "",
    ReportStyleSheet: null,
    ReportStyleSheet2: null,
    rothConversionReportBodyClass: "class=rothConversionReportBody",
    ReportDocumentEnd: "**FOOTER** <script>setTimeout(function() {window.print(), window.close();}, 1000)</script></body></html>\n",
    CalculatorTitleTemplate: null,
    CalclatorTitle: null,
    CalculatorTitleClass: "rothConversionTitle rothConversionFontHeading rothConversionTitleExtra",
    CalculatorTitleErrorClass: "rothConversionTitle rothConversionError",
    CalculatorTitleMissingClass: "rothConversionTitle rothConversionMissing",
    CalculatorTableClass: "rothConversionCalculatorTable",
    CalculatorTableReportClass: "rothConversionCalculatorReportTable",
    CalcTitlePadding: 20,
    CalcTitlePaddingMenu: 10,
    ClearColor: "#FFFFFF",
    colorList: ["#E8EFB2", "#AEC69C", "#DDDDDD", "#BE4262", "#FABB50", "#DDCCDD", "#CCCCCC", "#CCCCDD", "#CCDDCC", "#CCDDDD", "#CCCCDD"],
    colorRGBackground: "#FFFFFF",
    DefinitionsH1: "<h2 class='rothConversionDefinitionsHeader rothConversionFontHeading'>**LBL_DEFINITIONS**</h2>",
    LBL_DEFINITIONS: "Definitions",
    Colon: ":",
    CalculatorTitleEntry: "Please enter or select a value in all fields:",
    CalculatorTitleCalc: "Press 'Calculate' to view your results.",
    ButtonCalculate: "Calculate",
    ButtonViewReport: "View Report",
    ButtonHideReport: "Hide Report",
    ButtonPrintReport: "Print",
    sCurrency: "Dollars",
    MSG_YEARS_LBL: "years",
    MSG_YEAR_LBL: "year",
    MSG_MONTHS_LBL: "months",
    MSG_MONTH_LBL: "month",
    MSG_AND_LBL: "and",
    MSG_YES: "Yes",
    MSG_NO: "No",
    YES: "yes",
    NO: "no",
    MSG_EXCEEDS_LIMIT_OF_RANGE: "rothConversion1 is limited to rothConversion2",
    MSG_UNDER_LIMIT_OF_RANGE: "rothConversion1 can't be less than rothConversion2",
    MSG_INVALID_DATE: "Please enter a valid date for rothConversion1",
    MSG_MISSING_ITEM: "Please enter a value for rothConversion1",
    MSG_GRAPH: "**GRAPH**",
    SplashContent: "Roth Conversion Calculator",
    SplashContentFooter: "Roth Conversion Calculator",
    Default: {
        RORMarket: 7,
        RORRetire: 4,
        RORSave: 0.25,
        RateCard: 16,
        RatePersonal: 7.5,
        RateFix15: 4,
        RateFix30: 4.5,
        RateAdj: 4,
        RateAuto: 7,
        RateAutoLow: 1.9,
        MortgageAmt: 2e5,
        HomePrice: 22e4,
        StateTaxRate: 8,
        InflationRate: 2.9,
        MortgageMin: 0,
        MortgageMax: 1e8,
        MortgageRateMin: 0,
        MortgageRateMax: 25,
        MortgageTerm: 30,
        MortgageTermMin: 1,
        MortgageTermMax: 40,
        MortgageTermIncrement: 5,
        MortgageShowAll: true,
        MortgageShowAllMax: 25,
        InvestRateMin: 0,
        InvestRateMax: 20,
        InvestSliderRateMax: 12,
        InflationRateMin: 0,
        InflationRateMax: 20,
        InflationSliderRateMax: 12
    },
    InTask: false,
    calcCleared: false,
    CalculatorDiv: "rothConversionCalculatorDiv",
    AllContent: "rothConversionAllContent",
    CalcTimeout: 0,
    CalcTitleHeight: 0,
    Error: false,
    InComplete: false,
    bValidateIncomplete: true,
    Calculating: false,
    gGraphs: new Array(0),
    gReportGraphs: new Array(0),
    iOldWidth: -1,
    bSizeInitialized: false,
    ResizeTimeOut: null,
    iUrekau: [1709986223, 1332498680, 0, 1505998205, 380075612],
    InputScreenText: false,
    DefinitionText: false,
    ReportText: false,
    MSG_ADA_TABLE: "role='presentation'",
    TypedArray: "undefined" != typeof Float64Array,
    showInputsFirst: false,
    replace: function (e, t, i) {
        return i ? i.split(e).join(t) : "";
    },
    getrothConversionReplaced: function (e) {
        if (e || "" == e)
            for (var t = 1; t < arguments.length; t++) e = e.replace("rothConversion" + t, arguments[t]);
        else
            for (e = "", t = 0; t < arguments.length; t++) e += arguments[t] + (t == arguments.length - 1 ? "" : ", ");
        return e;
    },
    dateFormat: function (e) {
        var t = e.getMonth() + 1;
        return null == e ? "" : t + "/" + e.getDate() + "/" + e.getFullYear();
    },
    chjilap: function (e) {
        var t = 0;
        if (0 == e.length);
        else
            for (var i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i), t &= t;
        return t;
    },
    getTermLabel: function (e, t) {
        var i = rothConversion,
            a = Math.floor(e / 12),
            r = e % 12,
            n = i.MSG_AND_LBL,
            o = i.MSG_MONTH_LBL,
            s = i.MSG_MONTHS_LBL,
            l = i.MSG_YEAR_LBL,
            E = i.MSG_YEARS_LBL,
            d = " ";
        return (t || a > 0 ? a + d + (1 == a ? l : E) : "") + (t || a > 0 && r > 0 ? d + n + d : "") + (t || r > 0 ? r + d + (1 == r ? o : s) : "");
    },
    setOrientation: function () {
        var e = rothConversion;
        window.orientation, e.resize(true);
    },
    resize: function (e) {
        var t = rothConversion;
        t.device.iphone && !e || (t.iOldWidth != window.innerWidth && t.bSizeInitialized && (null != t.ResizeTimeOut && clearTimeout(t.ResizeTimeOut), t.ResizeTimeOut = setTimeout(t.calcResize, 500), t.MenuResize && t.MenuResize()), t.bSizeInitialized = true);
    },
    InputSetup: function (e, t) {
        for (var i = rothConversion, a = i.bUseInputForm && !i.IE7and8, r = "**COMMAND_BUTTONS**", n = (i.IE7and8 || i.deviceMobile || i.CommandButtonsFixed) && i.CommandButtonsTop, o = e.indexOf(r), s = "<div id='rothConversionTitle' aria-live='polite' class='" + i.CalculatorTitleClass + "'>" + i.CalculatorTitleShow + "</div>", l = "**TITLE_BAR**", E = e.indexOf(l), d = 1; d < 10; d++) e = i.replace("**GRAPH" + d + "**", i.replace(i.MSG_GRAPH, "<div id=rothConversion-C-GRAPH" + d + " style='width:100%;'><canvas id=rothConversion-G-GRAPH" + d + "></canvas></div>", i.VML ? " " + i.MSG_GRAPH + " " : i.MSG_ADA_GRAPH), e);
        var h = "<!--rothConversionMAIN--><div id='rothConversionGuiDataPoint' style='top: 0; left: 0;'></div>";
        for (i.ExtraHeader && (h += i.ExtraHeader), a && (h += "<form name=rothConversionCalcForm id=rothConversionCalcForm onsubmit='return false;'>"), h += "<div id=rothConversionCalculatorScreenSize align=center style='position:relative; width:100%'>", h += o < 0 && n ? r : "", h += "<div id='rothConversionWait' class=rothConversionWait></div>", h += "<div id='rothConversionMenu' class=rothConversionMenu></div>", h += "<div id='rothConversionMenuWindow'></div>", h += "<div id=rothConversionCalculatorTable>", h += "<div id=rothConversionCalculatorTableCell class='rothConversionCalculator rothConversionEase' align=center style='width:100%'>", h += "<span id=rothConversionSplash class=rothConversionBold style='color:#333333'><br /><br /><br />" + i.SplashContent + "<p class=rothConversionFooter>" + i.SplashContentFooter + "</p><br /><br /><br /><br /><br /><br /><br /><br /></span>", h += "<div id='rothConversionMain' class=rothConversionMain >", h += E < 0 ? s : "", h += "<div id='rothConversionInputs' class='rothConversionInputs'>" + e + "</div>", h += "</div>", h += "</div>", h += "</div>", h += o < 0 && !n ? r : "", h += "</div>", a && (h += "</form>"), h += "<!--rothConversionMAINEND-->", h += "<div id=rothConversionReport class=rothConversionReport width=100%>", h += o >= 0 ? "**REPORT_BUTTONS**" : "", h += "<div id=rothConversionReportTop></div>", d = 0; d < i.ReportGraphCount; d++) h += "<div align=center><div id=rothConversion-C-REPORTGRAPH" + d + ' style="page-break-inside: avoid; margin-top:15px; height:' + i.gHeight + 'px;"><!--GRAPH' + d + "--><canvas id=rothConversion-G-REPORTGRAPH" + d + "></canvas><!--GRAPHEND--></div></div>", h += "<div id=rothConversionReportMiddle" + d + "></div>";
        return i.ExtraFooter && (h += i.ExtraFooter(t)), h += "</div>", i.IncludeDefinitions && (h += i.formatDefinitions(t)), (h = (h = h.replace("**REPORT_BUTTONS**", i.ReportButtons.replace("**LBL_HIDEREPORT**", i.ButtonHideReport).replace("**LBL_PRINTREPORT**", i.ButtonPrintReport))).replace(l, s)).replace(r, i.CommandButtons.replace("**LBL_VIEWREPORT**", i.ButtonViewReport).replace("**LBL_CALCULATE**", i.ButtonCalculate).replace("**VIEWREPORT**", a ? "type=submit" : "type=button"));
    },
    formatDefinitions: function (e) {
        var t = rothConversion,
            i = "<!--rothConversionDEFINITIONS--><div width=100% align=center >";
        return i += "<div id=rothConversionDefinitions class=rothConversionDefinitions width=100%>" + t.DefinitionsH1.replace("**LBL_DEFINITIONS**", t.LBL_DEFINITIONS), i += "<dl>" + e + "</dl>", (i += "</div>") + "</div><!--rothConversionDEFINITIONSEND-->";
    },
    inCommandTask: function (e) {
        var t = rothConversion,
            i = t.Wait.style,
            a = (i = t.Wait.style, t.CalculatorTable.offsetTop + 23 + "px"),
            r = t.CalculatorTable.offsetLeft + 10 + "px";
        return !(!t.InTask || !e) || (i.top = a, i.right = r, i.display = e ? "inline-block" : "none", t.displayMenu && t.displayMenu(e), t.InTask = e, false);
    },
    setTitle: function (e, t) {
        var i = rothConversion,
            a = i.subheader,
            r = i.kujiae,
            n = i.CalcTitle,
            o = i.kujaleip,
            s = i.UKuejna;
        i.CalcTitleWidth || (i.CalcTitleWidth = n.offsetWidth - 2 * i.CalcTitlePadding - (rothConversion.menuInit ? i.CalcTitlePaddingMenu : 0)), o ? (n.innerHTML = s + r + a, n.className = i.CalculatorTitleErrorClass) : (rothConversion.TrialReplace1 = 1, n.innerHTML = e + a, n.className = t || i.CalculatorTitleClass), i.Calculator.style.height = i.Main.offsetHeight + "px";
    },
    setTitleTemplate: function () {
        var e = rothConversion,
            t = "";
        if (e.CalculatorTitleTemplate) {
            t = e.CalculatorTitleTemplate;
            for (var i = 0; i < arguments.length; i++) t = t.replace("rothConversion" + (i + 1), arguments[i]);
            e.CalculatorTitleShow = t;
        } else e.CalculatorTitleShow = e.CalculatorTitle;
    },
    results: function (e, t) {
        var i = rothConversion;
        if (i.calcCleared = false, i.IE7and8 && (i.Wait.style.display = "block"), i.CalcTimeout && clearTimeout(i.CalcTimeout), e) {
            if (i.inCommandTask(true)) return;
            i.showInputs();
        }
        try {
            i.Error = false, i.InComplete = false, i.DataPointHide();
            var a = i.CalcControl;
            a.clear(), i.GuiControl.setValues(a), i.setValuesAdditional && i.setValuesAdditional(a);
            var r = 0,
                n = i.inputs.items;
            for (var o in n)
                if (!n[o].validate()) {
                    r++, i.InComplete = true;
                    var s = i.getrothConversionReplaced(i.MSG_MISSING_ITEM, n[o]._sLabel);
                }
            if (!i.InComplete) {
                console.log("Running calculate", !!t)
                for (var o in t && a.initReport && a.initReport(), a.calculate(!!t), rothConversion.calculateAdditional && rothConversion.calculateAdditional(a, !!t), i.GuiControl.refresh(a), rothConversion.refreshAdditional && rothConversion.refreshAdditional(i.GuiControl, a), i.droppers.items) i.droppers.items[o].setText();
                console.log("Not sure what's happening")
                i.setTitle(i.CalculatorTitleShow);
            }
            i.InComplete && i.bValidateIncomplete && i.calcClear(r > 1 ? i.CalculatorTitleEntry : s, i.CalculatorTitleMissingClass);
        } catch (e) {
            i.Error = true;
            var l = e + " ";
            l.indexOf("NS_ERROR_FAILURE") < 1 && i.calcClear(l, i.CalculatorTitleErrorClass);
        }
        i.IE7and8 && (i.Wait.style.display = "none"), e && setTimeout(function () {
            i.inCommandTask(false);
        }, 400), rothConversion.StorageSet && rothConversion.StorageSet();
    },
    calcClear: function (e, t) {
        var i = rothConversion,
            a = i.gGraphs;
        e || (e = i.CalculatorTitleEntry), t || (t = null);
        for (var r = 0; r < a.length; r++) a[r] && a[r].blank();
        for (var n in i.inputs.items) i.inputs.items[n]._inputType == i.TypeLabel && i.inputs.items[n].setText("");
        i.GuiControl.clear && i.GuiControl.clear(), i.setTitle(e, t);
    },
    calcResize: function () {
        var e = rothConversion;
        if (e.setWidth()) {
            var t = e.gGraphs;
            for (var i in e.inputs.items) e.inputs.items[i].newWidth();
            for (var a = 0; a < t.length; a++) t[a] && t[a].setWidth(true);
        }
        if (e.reportViewable)
            for (t = e.gReportGraphs, a = 0; a < t.length; a++) t[a] && t[a].setWidth(true, rothConversion.gWidthMax);
        e.resizeMenu && e.resizeMenu();
    },
    dataChanged: function (e) {
        var t = rothConversion;
        t.CalcTimeout && clearTimeout(t.CalcTimeout), t.VML ? (!t.calcCleared && e && (t.calcClear(t.CalculatorTitleCalc), t.calcCleared = true), t.CalcTimeout = setTimeout(t.results, e ? t.CalcDelayVML : t.CalcDelay)) : t.CalcTimeout = setTimeout(t.results, t.CalcDelay);
    },
    completeFade: function () {
        var e = rothConversion;
        e.fade < 100 ? (e.fade += e.device.iphone ? 100 : 4, e.Buttons.style.opacity = e.fade / 100, e.Main.style.opacity = e.fade / 100) : (clearInterval(e.pace), rothConversion.reportTest && e.showReport());
    },
    Startfade: function () {
        var e = rothConversion;
        e.fade < 100 ? (e.fade += 4, e.Splash.style.opacity = 1 - e.fade / 100) : (clearInterval(e.pace), e.Splash.style.display = "none", e.fade = 0, e.pace = setInterval(e.completeFade, 10));
    },
    showCalculator: function () {
        var e = rothConversion;
        e.results(true), e.ms = 0 != e.Main.style.opacity || "" == e.Main.style.opacity, e.ms ? setTimeout(function () {
            e.Buttons.style.visibility = "visible", e.Main.style.visibility = "visible", e.Splash.style.display = "none";
        }, 500) : (e.Buttons.style.opacity = 0, e.Main.style.opacity = 0, e.Splash.style.opacity = 1), e.fade = 0, e.pace = setInterval(e.Startfade, 10);
    },
    getOffset: function (e) {
        for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - e.scrollLeft, i += e.offsetTop - e.scrollTop, e = e.offsetParent;
        return {
            top: i,
            left: t
        };
    },
    setWidth: function (e) {
        var t = rothConversion,
            i = t.ScreenSize.clientWidth;
        return i -= i <= 400 ? 0 : 5, i = (i = t.CalculatorWidthMax < i ? t.CalculatorWidthMax : i) < t.CalculatorWidthMin ? t.CalculatorWidthMin : i, t.oldClientWidth != i && (t.oldClientWidth = i, t.CalculatorTable.style.width = i + "px", t.Calculator.style.height = t.Main.offsetHeight + "px", t.DataPoint.style.maxWidth = i - 37 + "px", t.CalculatorWidth = i - 10, e && (t.Splash.style.width = i, t.oldClientWidth = 0), true);
    },
    FloatArray: function (e) {
        if (rothConversion.TypedArray) return new Float64Array(e);
        for (var t = new Array(e), i = 0; i < e; i++) t[i] = 0;
        return t;
    },
    IntArray: function (e) {
        return rothConversion.TypedArray ? new Int16Array(e) : new Array(e);
    },
    init: function () {
        var e = rothConversion;
        if (!e.initFired) {
            e.InputClass = "rothConversionInput" + (rothConversion.InputModern ? " rothConversionInputModern" : ""), e.initFired = true;
            var t = navigator.userAgent;
            e.device = {
                iphone: t.match(/(iPhone|iPod|iPad)/),
                android: t.match(/Android/)
            }, e.deviceUseNumberType = e.deviceMobile = t.match(/(iPhone|iPod|iPad|Silk|Android)/), e.deviceInputPad = e.deviceUseNumberType ? rothConversion.parameters.get("DEVICE_INPUT_PAD", 10) : 0, e.deviceNoTransition = t.match(/(iPhone|iPod|iPad|BlackBerry|Silk|Android)/), e.bUseStorage = false, e.bStorageInit && (e.bUseStorage = e.bStorageInit());
            for (var i = e.ReportStyleSheet, a = e.ReportStyleSheet2, r = "rothConversion.css", n = "rothConversionSiteSpecific.css", o = document.getElementsByTagName("link"), s = 0; s < o.length; ++s) {
                var l = o[s].href;
                l.indexOf(r) >= 0 && null == i && (i = l, e.hRefPath = l.substring(0, l.lastIndexOf("/") + 1)), l.indexOf(n) >= 0 && null == a && (a = l);
            }
            null == i && (i = r), null == a && (a = n), e.ReportStyleSheet = i, e.ReportStyleSheet2 = a;
            var E = e.iUrekau,
                d = E.length,
                h = location.hostname,
                p = e.kujiae = h.replace(/^www\./i, ""),
                _ = e.parameters,
                u = document,
                c = e.chjilap(p);
            e.kujaleip = true;
            for (var T = d - 1; T >= 0; T--) c == E[T] && (e.kujaleip = false);
            rothConversion.TrialReplace1 = 2, e.CalculatorTitleShow = e.CalculatorTitle = _.get("TITLE_TEMPLATE", e.CalculatorTitle ? e.CalculatorTitle : document.title), e.AllContent = u.getElementById(e.AllContent);
            var g = u.getElementById("rothConversionReportText");
            g && (e.ReportText = g.innerHTML, g.innerHTML = "");
            var K = e.definitions.items,
                J = e.DefinitionText;
            for (var f in K) J = e.replace(f, K[f], J);
            e.parseDefinitions && (J = e.parseDefinitions(J)), e.DefinitionText = J;
            var A = e.ReportText;
            if (e.ReportProcess && (A = e.ReportProcess(A)), e.ReportGraphCount = 0, e.ReportShowGraphs) {
                if (A) {
                    A = e.replace("rothConversion_CURRENTDATE", e.dateFormat(new Date), A);
                    for (var m = 0;
                        (m = A.indexOf(e.MSG_GRAPH, m)) >= 0;) e.ReportGraphCount++, m += e.MSG_GRAPH.length;
                }
            } else A = e.replace(e.MSG_GRAPH, "", A);
            e.ReportText = A, e.parseInputs && (e.InputScreenText = e.parseInputs(e.InputScreenText)), e.AllContent.innerHTML = e.InputSetup(e.InputScreenText, J), e.Splash = u.getElementById("rothConversionSplash"), e.inputsViewable = true, e.Wait = u.getElementById("rothConversionWait"), e.Report = u.getElementById("rothConversionReport"), e.ReportTop = u.getElementById("rothConversionReportTop");
            var C = e.ReportMiddle = new Array;
            for (T = 0; T < e.ReportGraphCount; T++) C[T] = u.getElementById("rothConversionReportMiddle" + T);
            var R = e.Buttons = u.getElementById("rothConversionCommandButtons"),
                v = e.Calculate = u.getElementById("rothConversionCalculate"),
                y = e.PrintReport = u.getElementById("rothConversionPrintReport"),
                I = e.ViewReport = u.getElementById("rothConversionViewReport"),
                b = e.HideReport = u.getElementById("rothConversionHideReport"),
                L = e.Inputs = u.getElementById("rothConversionInputs"),
                S = e.DataPoint = u.getElementById("rothConversionGuiDataPoint"),
                D = e.Calculator = u.getElementById("rothConversionCalculatorTableCell");
            e.ScreenSize = u.getElementById("rothConversionCalculatorScreenSize");
            var M = e.CalcTitle = u.getElementById("rothConversionTitle");
            M.style.padding = e.CalcTitlePadding + "px", rothConversion.menuInit && (M.style.paddingRight = e.CalcTitlePadding + e.CalcTitlePaddingMenu + "px");
            var x = e.Main = u.getElementById("rothConversionMain"),
                O = e.Definitions = u.getElementById("rothConversionDefinitions");
            if (O && O.lastChild) {
                var P = O.lastChild.childNodes,
                    G = P.length;
                for (T = 0; T < G; T++) {
                    var w = P[T];
                    if (w.id && "rothConversion-D-" == w.id.substr(0, 6)) {
                        var F, N = w.id.substr(6).trim();
                        "REMOVE" == (F = _.get("DFN_" + N, null)) ? (w.innerHTML = "", w.style.visibility = "hidden", w.style.display = "none", w.id = null) : (F && w.lastChild && (w.lastChild.innerHTML = F), (F = _.get("DFN_NAME_" + N, _.get("MSG_" + N, null))) && w.firstChild && (w.firstChild.innerHTML = F));
                    }
                }
            }
            if (L.style.display = "block", e.CalculatorTable = u.getElementById("rothConversionCalculatorTable"), e.menuInit && e.menuInit(), S.addEventListener) {
                var B = "click";
                v.addEventListener(B, e.calculateButtonAction, false), I.addEventListener(B, e.showReport, false), S.addEventListener(B, e.DataPointHide, false), y && y.addEventListener(B, e.printTheReport, false), b && b.addEventListener(B, e.showReport, false);
            } else B = "onclick", v.attachEvent(B, e.calculateButtonAction), I.attachEvent(B, e.showReport), e.DataPointHide && S.attachEvent(B, e.DataPointHide), y && y.attachEvent(B, e.printTheReport), b && b.attachEvent(B, e.showReport);
            D.style.height = D.offsetHeight + "px", e.IE7and8 ? (R.style.visibility = "hidden", x.style.visibility = "hidden", e.Splash.style.visibility = "visible") : (R.style.opacity = 0, x.style.opacity = 0, e.Splash.style.opacity = 1), e.IE7and8 || e.CommandButtonsFixed ? (R.style.position = "relative", R.style.top = e.CommandButtonOffset + "px") : (R.style.position = "absolute", R.style.top = D.offsetTop - e.CommandButtonOffset + "px"), window.addEventListener && (window.addEventListener("scroll", e.scrolled, false), window.addEventListener("resize", e.resize, false), window.addEventListener("orientationchange", e.setOrientation, false)), e.oldClientWidth = 0, e.setWidth(true), e.CalculatorTitleTemplate = _.get("TITLE_TEMPLATE", e.CalculatorTitleTemplate);
            var H = e.HeaderTitle = _.get("CALC_HEADER_TITLE", ""),
                k = e.HeaderDesc = _.get("CALC_HEADER_DESC", "");
            e.initialize();
            var V = u.getElementById("rothConversionHeaderContent");
            if (V) {
                var X = _.get("CALC_HEADER_DIV", "<div id=rothConversionCalculatorTitle><h1>CALC_HEADER_TITLE</h1></div><div id=rothConversionCalculatorDescription>CALC_HEADER_DESC</div>");
                V.innerHTML = X.replace("CALC_HEADER_TITLE", H).replace("CALC_HEADER_DESC", k);
            }
            e.customInit && e.customInit(this), e.showTimer();
        }
    },
    showTimer: function () {
        setTimeout(rothConversion.showCalculator, 250);
    },
    scrolled: function () {
        var e = rothConversion;
        e.CommandButtonsFixed || (null != e.ScrollTimeOut && clearTimeout(e.ScrollTimeOut), e.ScrollTimeOut = setTimeout(e.buttonPosition, 200));
    },
    buttonPosition: function () {
        var e = rothConversion,
            t = e.util.findPosRelativeToViewport(e.Calculator)[1],
            i = "px",
            a = e.Calculator.offsetTop,
            r = e.AllContent.offsetHeight,
            n = e.CommandButtonHeader,
            o = a - e.CommandButtonOffset + i;
        t + a + r < 0 ? o = a + r + i : t - n < 0 && (o = a - t + 5 + n + i), e.Buttons.style.top = o;
    },
    goScroll: function () {
        var e = rothConversion;
        if (e.Scroll) {
            var t = e.util.findPos(e.Calculator);
            window.scrollTo(t[0], t[1] - e.ScrollMinimum);
        }
    },
    showInputs: function () {
        var e = rothConversion;
        e.CalcControl.initInputs && e.CalcControl.initInputs();
        var t = e.Report.style.display = "none",
            i = "block";
        e.CalculatorTable.className = e.CalculatorTableClass, e.Calculate.value = e.ButtonCalculate, e.ViewReport.value = e.ButtonViewReport, e.Calculate.style.display = e.ShowCalculateButton ? "inline-block" : t;
        var a = e.Definitions;
        a && (a.style.display = e.ShowDefinitions ? i : t), e.Main.style.display = i, e.Calculator.style.height = e.Main.offsetHeight + "px", e.reportViewable = false, e.showInputsFirst ? e.goScroll() : e.showInputsFirst = true, e.calcResize();
    },
    calculateButtonAction: function () {
        var e = rothConversion;
        rothConversion.MenuWindowHide && rothConversion.MenuWindowHide(), e.goScroll(), e.reportViewable ? e.printTheReport() : e.Error || e.InComplete || (e.CalcTimeout = setTimeout(e.results, 10));
    },
    printOpenReport: function (e) {
        var t = rothConversion,
            i = document.getElementById("rothConversionAllContent"),
            a = t.replace,
            r = t.gReportGraphs,
            n = i.innerHTML,
            o = t.ReportDocumentStart + n + t.ReportDocumentEnd,
            s = o.indexOf("<!--rothConversionDEFINITIONS-->"),
            l = o.indexOf("<!--rothConversionDEFINITIONSEND-->", s);
        s = (o = o.substring(0, s) + o.substring(l)).indexOf("<!--rothConversionMAIN-->"), l = o.indexOf("<!--rothConversionMAINEND-->", s), o = a("<!--rothConversionDEFINITIONSEND-->", "", o = o.substring(0, s) + o.substring(l)), o = a("<!--REPORT_DEFINED_END-->", "", o), o = a("<!--rothConversionMAINEND-->", "", o), o = a("**REPORT_STYLE_SHEET**", t.ReportStyleSheet, o), o = a("**REPORT_STYLE_SHEET2**", t.ReportStyleSheet2, o), o = a("**REPORT_DEFAULT_STYLE**", t.ReportStyleDefault, o), t.ReportHeader = t.replace("<img src=''", "<img src='" + t.hRefPath + "'", t.ReportHeader), o = a("**HEADER**", t.ReportHeader, a("**REPORT_TITLE**", document.title, o)), o = a("**FOOTER**", a("<!--EXTRA_FOOTER-->", t.ReportExtraFooter, t.ReportFooter), o), o = a("**REPORT_TITLE**", t.CalcName ? t.CalcName : t.CalculatorTitleShow, o), o = a("**TITLE**", t.CalcName ? t.CalcName : "Financial Calculator", o), o = a("Calculator Calculator", "Calculator", o);
        for (var E = "<!--GRAPHEND-->", d = 0; d < t.ReportGraphCount; d++) {
            var h = "";
            if (t.reportViewable)
                for (var p = t.gReportGraphs, _ = 0; _ < p.length; _++) p[_] && p[_].setWidth(true, rothConversion.gWidthReport);
            t.VML || (h = '<img src="' + r[d].wCanvas.toDataURL() + '" height=' + r[d].wCanvas.offsetHeight + " width=" + r[d].wCanvas.offsetWidth + ">");
            var u = "<div class='rothConversionGraphTitle'>" + a('"', "&quote", r[d]._titleGraph.s) + "</div>";
            s = o.indexOf("<!--GRAPH" + d + "-->"), l = o.indexOf(E, s), o = o.substring(0, s) + u + h + o.substring(l + E.length);
        }
        e.document.write(o), e.document.close(), e.focus();
    },
    printTheReport: function () {
        var e = rothConversion;
        if (e.IE7and8 || e.VML) window.print();
        else {
            var t = 0;
            screen && (t = screen.width / 2 - 480);
            var i = window.open("", "_blank", "toolbar=yes,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=960,height=" + (screen.height - 170) + ",left=" + t + ",top=5");
            navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? setTimeout(function () {
                e.printOpenReport(i);
            }, 100) : e.printOpenReport(i);
        }
    },
    showReport: function () {
        var e = rothConversion;
        e.InTask = false, e.Error || e.InComplete || e.inCommandTask(true) || setTimeout(e.showReportFinal, 200);
    },
    showReportFinal: function () {
        var e = rothConversion;
        if (e.DataPointHide(), rothConversion.MenuWindowHide && rothConversion.MenuWindowHide(), e.reportViewable) e.showInputs(), setTimeout(function () {
            e.inCommandTask(false);
        }, 400);
        else {
            if (e.CalculatorTable.className = e.CalculatorTableReportClass, e.results(false, true), e.Error || e.InComplete) return void e.inCommandTask(false);
            e.reportViewable = true, e.Calculate.value = e.ButtonPrintReport, e.Calculate.style.display = e.ShowPrintButton ? "inline-block" : "none", e.Calculator.style.height = "0px", e.Main.style.display = "none", e.Definitions && (e.Definitions.style.display = "none"), e.Report.style.display = "block", e.ViewReport.value = e.ButtonHideReport, e.reportPreprocess ? e.sReport = e.reportPreprocess(e.CalcControl, e.ReportText) : e.sReport = e.ReportText, e.sReport = e.CalcControl.formatReport(e.sReport), setTimeout(e.fireReport, 50);
        }
    },
    fireReport: function () {
        var e = rothConversion,
            t = e.sReport.split(e.MSG_GRAPH);
        e.sReport = "", t[0] && (e.ReportTop.innerHTML = t[0]);
        for (var i = 0; i < e.ReportGraphCount; i++) t[i + 1] && (e.ReportMiddle[i].innerHTML = t[i + 1]);
        if (e.gReportGraphs.length != t.length - 1)
            for (var a = 0; a < e.ReportGraphCount; a++) {
                var r = e.gNewGraph(e.gGraphs[a]._gtGraphType._iGraphType, "REPORTGRAPH" + a, true, false, false, e.sgv(e.gGraphs[a]._titleGraph.getProperty(), ""), true);
                r && (e.gReportGraphs[a] = r);
            }
        var n = null;
        for (a = 0; a < e.gReportGraphs.length; a++)(n = e.gReportGraphs[a]).setProperty(e.gGraphs[a].getProperty()), n._legend.setProperty(e.gGraphs[a]._legend.getProperty()), n._grid.setProperty(e.gGraphs[a]._grid.getProperty()), n._axisY.setProperty(e.gGraphs[a]._axisY.getProperty()), n._axisX.setProperty(e.gGraphs[a]._axisX.getProperty()), n.setTitle(e.sgv(e.gGraphs[a]._titleGraph.getProperty(), "")), n._titleXAxis.setProperty(e.gGraphs[a]._titleXAxis.getProperty()), n._titleYAxis.setProperty(e.gGraphs[a]._titleYAxis.getProperty()), n.add(e.gGraphs[a].getDataProperties()), n.setBackground(e.parameters.get("PAGEBACKGROUND_COLOR", e.colorRGBackground)), n.setWidth(true);
        var o = e.CalcControl;
        o.formatGraph && o.formatGraph(o, e.gReportGraphs), o.reportComplete && o.reportComplete(e.GuiControl), e.reportComplete && e.reportComplete(e.CalcControl, e.ReportText), e.ViewReport.focus(), e.goScroll(), setTimeout(function () {
            e.inCommandTask(false);
        }, 400);
    }
};
rothConversion.util = {
    findPos: function (e) {
        var t = curtop = 0;
        if (e.offsetParent)
            do {
                t += e.offsetLeft, curtop += e.offsetTop;
            } while (e = e.offsetParent);
        return [t, curtop];
    },
    getPageScroll: function () {
        var e, t;
        return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), [e, t];
    },
    findPosRelativeToViewport: function (e) {
        var t = this.findPos(e),
            i = this.getPageScroll();
        return [t[0] - i[0], t[1] - i[1]];
    }
}, rothConversion.InputModern = !navigator.userAgent.match(/(iPhone|iPod)/), rothConversion.IE = !(!window.ActiveXObject && !("ActiveXObject" in window)), rothConversion.IE7 = -1 != navigator.appVersion.indexOf("MSIE 7."), rothConversion.IE8 = -1 != navigator.appVersion.indexOf("MSIE 8."), rothConversion.IE7and8 = (rothConversion.IE7 || rothConversion.IE8) && !window.addEventListener, rothConversion.IE7and8 || (rothConversion.IE7 = false), rothConversion.VML = rothConversion.IE7and8 || "undefined" != typeof G_vmlCanvasManager, rothConversion.List = function () {
    this.length = 0, this.items = {}, this.bLock = {};
}, rothConversion.List.prototype.getSet = function (e, t) {
    return this.exists(e) ? this.items[e] : this.set(e, t);
}, rothConversion.List.prototype.get = function (e, t) {
    return void 0 === this.items[e] ? t : this.items[e];
}, rothConversion.List.prototype.exists = function (e) {
    return !(void 0 === this.items[e]);
}, rothConversion.List.prototype.locked = function (e) {
    return !(void 0 === this.bLock[e]);
}, rothConversion.List.prototype.set = function (e, t, i) {
    if (void 0 !== t) {
        if (void 0 === this.items[e] && this.length++, this.locked(e)) return this.items[e];
        i && (this.bLock[e] = true), this.items[e] = t;
    }
    return t;
}, rothConversion.CalculatorWidth = rothConversion.CalculatorWidthMax, rothConversion.ReportDocumentStart = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>**REPORT_TITLE**</title><meta name="viewport" content="height=device-height,width=device-width,initial-scale=1">**REPORT_DEFAULT_STYLE**<link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET**" /><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET2**" /></head><body ' + rothConversion.rothConversionReportBodyClass + ">**HEADER**", rothConversion.MSG_ADA_GRAPH = "<figure zindex='1' style='margin:0; padding:0;'><figcaption class=rothConversionAccessible>Please view the report to see detailed results in tabular form.</figcaption>" + rothConversion.MSG_GRAPH + "</figure>", rothConversion.parameters = new rothConversion.List, rothConversion.inputs = new rothConversion.List, rothConversion.droppers = new rothConversion.List, rothConversion.definitions = new rothConversion.List, rothConversion.definitions.set("**INFLATION_DEFINITION**", "This is what you expect for the average long-term inflation rate. A common measure of inflation in the U.S. is the Consumer Price Index (CPI).  From 1925 through 2016 the CPI has a long-term average of 2.9% annually. Over the last 40 years highest CPI recorded was 13.5% in 1980. For 2016, the last full year available, the CPI was 1.1% annually as reported by the Minneapolis Federal Reserve."), rothConversion.definitions.set("**ROR_DEFINITION**", "The actual rate of return is largely dependent on the types of investments you select.  The Standard & Poor's 500&reg; (S&P 500&reg;) for the 10 years ending December 31<sup>st</sup> 2016, had an annual compounded rate of return of 6.6%, including reinvestment of dividends. From January 1, 1970 to December 31<sup>st</sup> 2016, the average annual compounded rate of return for the S&P 500&reg;, including reinvestment of dividends, was approximately 10.3% (source: www.standardandpoors.com). Since 1970, the highest 12-month return was 61% (June 1982 through June 1983). The lowest 12-month return was -43% (March 2008 to March 2009). Savings accounts at a financial institution may pay as little as 0.25% or less but carry significantly lower risk of loss of principal balances.<p>It is important to remember that these scenarios are hypothetical and that future rates of return can't be predicted with certainty and that investments that pay higher rates of return are generally subject to higher risk and volatility. The actual rate of return on investments can vary widely over time, especially for long-term investments. This includes the potential loss of principal on your investment. It is not possible to invest directly in an index and the compounded rate of return noted above does not reflect sales charges and other fees that Separate Account investment funds and/or investment companies may charge."), rothConversion.definitions.set("**ROR_SHORT_DEFINITION**", "It is important to remember that these scenarios are hypothetical and that future interest rates can't be predicted with certainty."), rothConversion.UKuejna = "rothConversion Calculator License Not Found for: ", rothConversion.subheader = "", rothConversion.iStorageTime = 1e3, rothConversion.STORAGE_NONE = 0, rothConversion.STORAGE_AUTO = 1, rothConversion.bStorageNonsupportWarning = true, rothConversion.bStorageOK = function () {
    if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
        try {
            localStorage.setItem("localStorage", 1), localStorage.removeItem("localStorage");
        } catch (e) {
            return rothConversion.bUseStorage = rothConversion.STORAGE_NONE, rothConversion.bStorageNonsupportWarning && !rothConversion.deviceMobile && alert('Your web browser does not support storing settings locally. The most common cause of this is using "Private Browsing Mode". The Auto Save functions will be disabled, all other aspects of the calculator will work correctly.'), false;
        }
        return true;
    }
    return false;
}, rothConversion.bStorageInit = function () {
    if (rothConversion.oStorageItems = null, rothConversion.bUseStorage = rothConversion.parameters.get("LOCAL_STORAGE", rothConversion.STORAGE_AUTO), rothConversion.sStorageKey = void 0 !== rothConversion.CalcType ? rothConversion.CalcType : "TEMP", rothConversion.bStorageOK()) {
        try {
            var e = localStorage.getItem(rothConversion.sStorageKey);
            rothConversion.LZString && (e = rothConversion.LZString.decompressFromEncodedURIComponent(e)), rothConversion.oStorageItems = JSON.parse(e);
        } catch (e) {
            rothConversion.oStorageItems = {};
        }
        null == rothConversion.oStorageItems && (rothConversion.oStorageItems = {}), localStorage.setItem(rothConversion.sStorageKey + "_href", rothConversion.formatHref()), localStorage.setItem(rothConversion.sStorageKey + "_title", document.title);
    } else rothConversion.bUseStorage = rothConversion.STORAGE_NONE;
    if (rothConversion.getURLValueParam) {
        var t = rothConversion.getURLValueParam();
        t && (rothConversion.oStorageItems = t);
    }
    return rothConversion.bUseStorage;
}, rothConversion.StorageSet = function () {
    rothConversion.bUseStorage && (rothConversion.bStorageTimeout && clearTimeout(rothConversion.bStorageTimeout), rothConversion.bStorageTimeout = setTimeout(rothConversion.bStorageSet, rothConversion.iStorageTime));
}, rothConversion.getJSONFromInputs = function () {
    var e = rothConversion.inputs.items,
        t = {};
    for (var i in e) e.hasOwnProperty(i) && (e[i]._inputType != rothConversion.TypeLabel && e[i]._inputType != rothConversion.TypeNone && (t[i] = e[i]._value), e[i]._inputTypeAdditional == rothConversion.TypeDropBox && (t[e[i]._Additional.name] = e[i]._Additional.value));
    return JSON.stringify(t);
}, rothConversion.bStorageSet = function (e, t) {
    var i = rothConversion.getJSONFromInputs();
    return rothConversion.LZString && (i = rothConversion.LZString.compressToEncodedURIComponent(i)), rothConversion.bUseStorage && (localStorage.setItem(rothConversion.sStorageKey + (e ? "#" + e : ""), i), t && localStorage.setItem(rothConversion.sStorageKey + "#" + e + "_name", t)), i;
}, rothConversion.bStoragePopulate = function (e) {
    var t = rothConversion.inputs.items;
    for (var i in t) {
        var a = false;
        e.hasOwnProperty(i) ? a = e[i] : t.hasOwnProperty(i) && (a = t[i].vDefault);
        var r = null;
        t[i]._inputTypeAdditional != rothConversion.TypeNone && (r = e.hasOwnProperty(t[i]._Additional.name) ? e[t[i]._Additional.name] : t[i].vDefault2), rothConversion.InputItem.InputSetValues(t[i], a, r, false);
    }
    rothConversion.results(true);
}, rothConversion.StorageGet = function (e, t) {
    var i = rothConversion.parameters.get(e, t);
    if (rothConversion.oStorageItems && rothConversion.bUseStorage) {
        var a = rothConversion.oStorageItems[e];
        null != a && (i = a);
    }
    return i;
}, rothConversion.bHrefTrimURL = true, rothConversion.formatHref = function () {
    var e = document.location.href;
    if (rothConversion.bHrefTrimURL) {
        var t = e.indexOf("?");
        t > 0 && (e = e.substr(0, t));
    }
    return e;
}, document.addEventListener && document.addEventListener("DOMContentLoaded", rothConversion.init, false), rothConversion.bHT = false, rothConversion.ROR_MONTH = function (e) {
    return Math.pow(1 + e, 0.08333333333333333) - 1;
}, rothConversion.ROR_PERIOD = function (e, t) {
    return Math.pow(1 + e, 1 / t) - 1;
}, rothConversion.APY_MONTH = function (e) {
    return rothConversion.FV_AMT(e, 12, 1) - 1;
}, rothConversion.NPV_AMT = function (e, t, i) {
    return -1 == e ? 0 : i / Math.pow(1 + e, t);
}, rothConversion.FV_AMT = function (e, t, i) {
    return 0 == e ? i : i / Math.pow(1 + e, -1 * t);
}, rothConversion.FV_BEGIN = function (e, t, i) {
    return 0 == e ? t * i : i / e * (Math.pow(1 + e, t + 1) - 1) - i;
}, rothConversion.FV = function (e, t, i) {
    return 0 == e ? t * i : i / e * (Math.pow(1 + e, t) - 1);
}, rothConversion.PV = function (e, t, i) {
    return rothConversion.NPV_AMT(e, t, rothConversion.FV(e, t, i));
}, rothConversion.PV_BEGIN = function (e, t, i) {
    return rothConversion.NPV_AMT(e, t, rothConversion.FV_BEGIN(e, t, i));
}, rothConversion.RATE = function (e, t, i) {
    for (var a = 0, r = 1, n = t, o = rothConversion.PMT, s = 1; s < 50; s++) {
        if ((n = o(a, e, i)) == t) return a;
        n < t ? a += r : a -= r, r /= 2;
    }
    return a;
}, rothConversion.PERIODS = function (e, t, i) {
    if (0 == e && 0 != t) return i / t;
    for (var a = 3120, r = 1560, n = t, o = rothConversion.PMT, s = 1; s < 50; s++) {
        if ((n = o(e, a, i)) == t) return a;
        n < t ? a -= r : a += r, r /= 2;
    }
    return a;
}, rothConversion.PERIODS_FV = function (e, t, i) {
    for (var a = 720, r = 360, n = t, o = rothConversion.PMT, s = rothConversion.NPV_AMT, l = 1; l < 50; l++) {
        if ((n = o(e, a, s(e, a, i))) == t) return a;
        n < t ? a -= r : a += r, r /= 2;
    }
    return a;
}, rothConversion.APR = function (e, t, i, a, r) {
    var n = rothConversion.PMT(i, e, a + r);
    return rothConversion.RATE(e, n, a);
}, rothConversion.PMT = function (e, t, i) {
    return t <= 0 ? i : t <= 1 ? i * (1 + e) : 0 == e ? i / t : i * e / (1 - Math.pow(1 + e, -1 * t));
}, rothConversion.PMT_BEGIN = function (e, t, i) {
    var a = rothConversion.PMT;
    if (t <= 1) return i;
    for (var r = a(e, t, i), n = r / 2, o = 0, s = 1; s < 50; s++) {
        if ((o = a(e, t - 1, i - r)) == r) return r;
        o < r ? r -= n : r += n, n /= 2;
    }
    return r;
}, rothConversion.ScheduleTableTitle = "Periodic Schedule", rothConversion._sTableHeader = "<div class='rothConversionScheduleDiv'><table class='rothConversionScheduleTable rothConversionReportTableShrink' summary='**TITLE_TAG**'>", rothConversion._sTableHeaderSmall = "<table class='rothConversionScheduleTable rothConversionReportTableShrink' summary='**TITLE_TAG**'>", rothConversion._sTableFooter = "</table></div>", rothConversion._sTableFooterSmall = "</table>", rothConversion._sTopRow = "<tr class='rothConversionScheduleHeaderRow' >", rothConversion._sEvenRow = "<tr class='rothConversionScheduleEvenRow' >", rothConversion._sOddRow = "<tr class='rothConversionScheduleOddRow' >", rothConversion._sRowFooter = "</tr>", rothConversion._sHeading = "<th class='rothConversionScheduleHeading' >", rothConversion._sHeadingUnderline = "<th class='rothConversionScheduleHeadingUnderline' >", rothConversion._sHeadingFooter = "</th>", rothConversion._sCell = "<td class='rothConversionScheduleCell' >", rothConversion._sCellStrong = "<td class='rothConversionScheduleCellStrong' >", rothConversion._sCellSpecial = "<td class='rothConversionScheduleCellSpecial' >", rothConversion._sCellFooter = "</td>", rothConversion._sCellBorderClass = "rothConversionCellBorder", rothConversion.Repeating = function (e) {
    e = e || "MSG_REPORT_COL", this.sRepeating = "", this.nRepeatingCount = 0, this.sReportCols = new Array(15), this.bReportRequired = new Array(15);
    for (var t = 0; t < 15; t++) this.sReportCols[t] = rothConversion.parameters.get(e + (t + 1), ""), this.bReportRequired[t] = rothConversion.parameters.get("MSG_REPORT_REQ" + (t + 1), true);
}, rothConversion.Repeating.prototype.sReportCol = function (e, t) {
    return t < 1 || t > this.sReportCols.length ? e : this.sReportCols[t - 1] && "" != this.sReportCols[t - 1] ? this.sReportCols[t - 1] : e;
}, rothConversion.Repeating.prototype.getRepeat = function (e) {
    var t = rothConversion,
        i = t._sTableHeader,
        a = t._sTableFooter;
    return t.CalculatorWidth < 640 && (i = t._sTableHeaderSmall, a = t._sTableFooterSmall), i.replace("**TITLE_TAG**", e ? e.replace("'", "&#39;") : t.parameters.get("MSG_REPEAT_TITLE", t.ScheduleTableTitle)) + this.sRepeating + a;
}, rothConversion.Repeating.prototype.clearRepeat = function () {
    this.sRepeating = "", this.nRepeatingCount = 0;
}, rothConversion.Repeating.prototype.add = function (e, t, i, a, r, n, o, s) {
    var l = "";
    if (0 == arguments.length) return l;
    for (var E = this.bReportRequired, d = "", h = "", p = n.length; p > 1 && null == n[p - 1]; p--);
    var _ = 0;
    o = !!o;
    for (var u = 0; u < p; u++) null != n[u] && "" != n[u] && E[u] && (n[u].sContent ? (h = n[u].sContent, d = n[u].sCell ? n[u].sCell : e, n[u].sFormat && (d = d.replace(">", " " + n[u].sFormat + ">")), o = false) : (d = e, o && (d = d.replace("' >", "' scope='col' >")), h = n[u]), u < p - 1 && (d = d.replace("class='", "class='" + r + " ")), _++, l += d + h + t);
    _ > 0 && o && (l = rothConversion.replace("' >", "' width=" + rothConversion.number(Math.floor(100 / _), 0) + "% >", l)), this.sRepeating += i + (s ? l : l.replace("<td", "<td scope='row' ")) + a;
}, rothConversion.Repeating.prototype.addHeader = function () {
    var e = rothConversion;
    this.add(e._sHeading, e._sHeadingFooter, e._sTopRow, e._sRowFooter, e._sCellBorderClass, arguments, true, true);
}, rothConversion.Repeating.prototype.addFooter = function () {
    var e = rothConversion;
    this.add(e._sCellStrong, e._sCellFooter, e._sTopRow, e._sRowFooter, e._sCellBorderClass, arguments, true, true);
}, rothConversion.Repeating.prototype.addRepeat = function () {
    var e = rothConversion;
    this.add(e._sCell, e._sCellFooter, this.nRepeatingCount % 2 == 0 ? e._sOddRow : e._sEvenRow, e._sRowFooter, e._sCellBorderClass, arguments, false, false), this.nRepeatingCount++;
}, rothConversion.getScreenCoord = function (e, t, i) {
    var a = 0,
        r = 0;
    do {
        a += i.offsetLeft, r += i.offsetTop;
    } while (i = i.offsetParent);
    return {
        x: a + e,
        y: r + t
    };
}, rothConversion.getMouseCoord = function (e, t, i) {
    var a = 0,
        r = 0;
    do {
        a += t.offsetLeft, r += t.offsetTop;
    } while (t = t.offsetParent);
    var n = 0,
        o = 0,
        s = e.pageX;
    if (null == s) {
        var l = document.documentElement,
            E = l && null != l.scrollLeft ? l : document.body;
        n = e.clientX + E.scrollLeft, o = e.clientY + E.scrollTop;
    } else if (i) {
        var d = e.touches[0];
        n = d.pageX, o = d.pageY;
    } else n = s, o = e.pageY;
    return {
        x: n - a,
        y: o - r
    };
}, rothConversion.sIncomplete = "?", rothConversion.DropperColors = false, rothConversion.iDropperCount = 0, rothConversion.sToggleTitle = "<table **EXPANDED** class='rothConversionToggleTable' " + rothConversion.MSG_ADA_TABLE + "><tr><td width=99% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='rothConversionAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td class='' aria-hidden='true'>**ICON**</td></tr></table>", rothConversion.sToggleTitle1 = "<table **EXPANDED** class='rothConversionToggleTable' style='margin-left: 8px; margin-bottom: 8px;' " + rothConversion.MSG_ADA_TABLE + "><tr><td width=100% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='rothConversionAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td></tr></table>", rothConversion.sToggleTitle2 = "<table **EXPANDED** class='rothConversionToggleTable' " + rothConversion.MSG_ADA_TABLE + "><tr><td width=49% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='rothConversionAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td width=49% class=**TITLE_CLASS**  valign='top'>**TITLE_TEXT2**</td><td class=' **IMG**' aria-hidden='true'>**ICON**</td></tr></table>", rothConversion.MSG_DEFINE_PREFIX = "Define: ", rothConversion.MSG_DEFINE_HELPICON = "?", rothConversion.MSG_DEFN_CLOSE_LABEL = "Close definition", rothConversion.sToggleAltTextClose = "Press spacebar to show inputs", rothConversion.sToggleAltTextOpen = "Press spacebar to hide inputs", rothConversion.sToggleTitleClass = "rothConversionToggleTitle", rothConversion.sInputDescTextClass = "rothConversionSubTitle", rothConversion.sInputDescAlignDefault = "rothConversionRight", rothConversion.sToggleIcon = "rothConversionInputIcon", rothConversion.sToggleOpen = "[+]", rothConversion.sToggleClose = "[-]", rothConversion.sExpand = "aria-expanded", rothConversion.sExpanded = "", rothConversion.sCollapse = "", rothConversion.FMT_NUMBER = 0, rothConversion.FMT_DOLLARS = 1, rothConversion.FMT_PERCENT = 2, rothConversion.FMT_INPUT = 3, rothConversion.FMT_YESNO = 4, rothConversion.FMT_STRING = 5, rothConversion.sCP = "$", rothConversion.sCS = "", rothConversion.sPP = "", rothConversion.sPS = "%", rothConversion.sNP = "", rothConversion.sNS = "", rothConversion.sPC = ",", rothConversion.sPD = ".", rothConversion.sCC = ",", rothConversion.sCD = ".", rothConversion.bEuropeDecimals = false, rothConversion.ACCOUNTING_NEGATIVE = false, rothConversion.format = new Array, rothConversion.iDPRowHeight = 30, rothConversion.iDPItemHeight = 28, rothConversion.iDPDropHeight = rothConversion.iDPItemHeight, rothConversion.iDPInputHeight = 22, rothConversion.iDPInputTop = 2, rothConversion.iDPInputPad = 5, rothConversion.iDPSliderPad = 0, rothConversion.iDPDropBoxPad = 4, rothConversion.iDPDropBoxModernPad = 20, rothConversion.iDPDroppeeForceSize = false, rothConversion.DataPointX = 0, rothConversion.DataPointY = 0, rothConversion.bNoLabel = false, rothConversion.bPlusMinus = false, rothConversion.subText = function (e, t, i) {
    return "<" + (i = i || "div") + " class='" + (t = rothConversion.sInputDescTextClass + " " + (t || rothConversion.sInputDescAlignDefault)) + "'>" + e + "</" + i + ">";
}, rothConversion.nbr = function (e, t, i, a, r, n, o) {
    var s = rothConversion;
    e || (e = 0), n = n || false, r = r || false, i = i || "", a = a || "", (t = t || 0) > 10 && (t = 10);
    var l = s.round(e, t),
        E = l < 0;
    E && (l *= -1);
    var d = (l + "").split("."),
        h = "";
    t > 0 && (d[1] ? h = d[1].length == t ? d[1] : d[1] + (r ? "" : "0000000000".substr(0, t - d[1].length)) : r || (h = "0000000000".substr(0, t)), h.length > 0 && (h = s.sPD + h));
    var p = "";
    if (!n && l > 999) {
        var _ = d[0].length;
        _ % 3 > 0 && (p = d[0].substr(0, _ % 3) + s.sPC);
        for (var u = _ % 3; u < _; u += 3) p += d[0].substr(u, 3) + (u + 3 < _ ? s.sPC : "");
    } else p = d[0];
    return "" == p && (p = "0"), o && o > p.length && (p = (p = "0000000000" + p).substring(p.length - o)), (E ? s.ACCOUNTING_NEGATIVE ? "(" : "-" : "") + i + p + h + a + (s.ACCOUNTING_NEGATIVE && E ? ")" : "");
}, rothConversion.format[rothConversion.FMT_NUMBER] = function (e, t) {
    return rothConversion.nbr(e, t, "", "", true, false);
}, rothConversion.number = rothConversion.format[rothConversion.FMT_NUMBER], rothConversion.format[rothConversion.FMT_DOLLARS] = function (e, t) {
    return rothConversion.nbr(e, t, rothConversion.sCP, rothConversion.sCS, false, false);
}, rothConversion.dollars = rothConversion.format[rothConversion.FMT_DOLLARS], rothConversion.format[rothConversion.FMT_PERCENT] = function (e, t) {
    return rothConversion.nbr(100 * e, t, rothConversion.sPP, rothConversion.sPS, true, false);
}, rothConversion.percent = rothConversion.format[rothConversion.FMT_PERCENT], rothConversion.format[rothConversion.FMT_INPUT] = function (e, t, i) {
    return rothConversion.nbr(e, t, "", "", true, true, i);
}, rothConversion.input = rothConversion.format[rothConversion.FMT_INPUT], rothConversion.format[rothConversion.FMT_YESNO] = function (e) {
    return e ? rothConversion.YES : rothConversion.NO;
}, rothConversion.yesno = rothConversion.format[rothConversion.FMT_YESNO], rothConversion.round = function (e, t) {
    return t ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t) : Math.round(e);
}, rothConversion.setLabelWrap = function (e, t, i, a, r, n) {
    i ? a = "**MESSAGE**" : a || (a = "<label " + (n ? 'class="' + n.trim() + '"' : "") + ' for="' + t + '">**MESSAGE**</label>'), e._sLabel = a, r && rothConversion.setLabelText(e, r);
}, rothConversion.setLabelText = function (e, t) {
    e.innerHTML = e._sLabel.replace("**MESSAGE**", t);
}, rothConversion.SliderKnobExtraClass = false, rothConversion.SliderKnobSize = 12, rothConversion.SliderKnobVertAdj = -3, rothConversion.SliderLabelVertAdj = 0, rothConversion.LabelLength = 190, rothConversion.InputLength = 80, rothConversion.RightPad = 10, rothConversion.LabelLeftMargin = 0, rothConversion.InputTotalLength = rothConversion.LabelLeftMargin + rothConversion.LabelLength + rothConversion.InputLength + rothConversion.RightPad, rothConversion.SliderMinLength = 130, rothConversion.TypeNone = 0, rothConversion.TypeNumber = 1, rothConversion.TypeString = 2, rothConversion.TypeDate = 3, rothConversion.TypeRadio = 4, rothConversion.TypeCheckbox = 5, rothConversion.TypeDropBox = 6, rothConversion.TypeLabel = 7, rothConversion.SliderScale = new Object, rothConversion.s_scale = new Array(10), rothConversion.s_scale[0] = [0, 1e3, 5e3, 1e4, 10, 50, 100], rothConversion.s_scale[1] = [0, 1e3, 5e3, 2e4, 10, 50, 200], rothConversion.s_scale[2] = [0, 1e3, 1e4, 1e5, 50, 100, 1e3], rothConversion.s_scale[3] = [0, 1e4, 1e5, 5e5, 250, 1e3, 5e3], rothConversion.s_scale[4] = [0, 1e4, 1e5, 1e6, 250, 1e3, 1e4], rothConversion.s_scale[5] = [0, 1e5, 1e6, 1e7, 500, 1e4, 1e5], rothConversion.s_scale[6] = [0, 500, 2500, 5e3, 10, 50, 100], rothConversion.s_scale[7] = [0, 100, 500, 1e3, 5, 25, 50], rothConversion.s_scale[8] = [0, 24, 48, 72, 6, 6, 6], rothConversion.s_scale[9] = [0, 100, 200, 300, 10, 10, 10], rothConversion.s_label = new Array(10), rothConversion.k = "k", rothConversion.m = "m", rothConversion.s_label[0] = ["$0", "$1k", "$5k", "$10k"], rothConversion.s_label[1] = ["$0", "$1k", "$5k", "$20k"], rothConversion.s_label[2] = ["$0", "$1k", "$10k", "$100k"], rothConversion.s_label[3] = ["$0", "$10k", "$100k", "$500k"], rothConversion.s_label[4] = ["$0", "$10k", "$100k", "$1m"], rothConversion.s_label[5] = ["$0", "$100k", "$1m", "$10m"], rothConversion.s_label[6] = ["$0", "$500", "$2.5k", "$5k"], rothConversion.s_label[7] = ["$0", "$100", "$500", "$1k"], rothConversion.s_label[8] = ["0", "24", "48", "72"], rothConversion.s_label[9] = ["$0", "$100", "$200", "$300"], rothConversion.MakeScale = function (e, t, i, a, r, n, o) {
    var s = this;
    s._Min = e, s._Mid1 = t, s._Mid2 = i, s._Max = a, s._stepMin = r, s._stepMid = n, s._stepMax = o, s._range = 100;
}, rothConversion.useScale = function (e) {
    var t = rothConversion,
        i = t.s_scale[e];
    return new t.MakeScale(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
}, rothConversion.s_Translate = function (e, t, i, a, r, n, o, s) {
    var l;
    return (l = e > 66.66 ? Math.round((a + (e - 66.66) / 33.33 * (r - a)) / s) * s : e > 33.33 ? Math.round((i + (e - 33.33) / 33.33 * (a - i)) / o) * o : e > 0 ? Math.round(e / 33.33 * (i - t) / n) * n + t : t) > r ? r : l;
}, rothConversion.s_Untranslate = function (e, t, i, a, r) {
    var n = 0;
    return e > r ? 100 : (n = e > a ? 66.66 + 33.33 * (e - a) / (r - a) : e > i ? 33.33 + 33.33 * (e - i) / (a - i) : 33.33 * (e - t) / (i - t)) < 0 ? 0 : n;
}, rothConversion.Slider = function (e, t, i, a, r, n, o, s, l, E) {
    return new rothConversion.InputItem(E, rothConversion.TypeNumber, e, t, true, "rothConversion-" + e, i, a, 0, r, n, o, s, l);
}, rothConversion.MortgageAmtSlider = function (e, t, i, a) {
    var r = rothConversion;
    return r.Slider(e, t, r.Default.MortgageMin, r.Default.MortgageMax, a || 0, r.FMT_DOLLARS, 0, [r.dollars(r.Default.MortgageMin / 1e3) + r.k, r.dollars(200) + r.k, r.dollars(500) + r.k, r.dollars(1) + r.m], new r.MakeScale(0, 2e5, 5e5, 1e6, 5e3, 1e4, 2e4), i);
}, rothConversion.LoanAmtSlider = function (e, t, i) {
    var a = rothConversion;
    return a.Slider(e, t, a.Default.MortgageMin, a.Default.MortgageMax, 0, a.FMT_DOLLARS, 0, [a.dollars(a.Default.MortgageMin / 1e3) + a.k, a.dollars(5) + a.k, a.dollars(25) + a.k, a.dollars(100) + a.k], new a.MakeScale(0, 5e3, 25e3, 1e5, 100, 500, 1e3), i);
}, rothConversion.MortgageTermSlider = function (e, t, i, a) {
    var r = rothConversion;
    return r.Slider(e, t, r.Default.MortgageTermMin, r.Default.MortgageTermMax, 0, r.FMT_NUMBER, i || r.Default.MortgageTermIncrement, [r.Default.MortgageTermMin, r.number(Math.floor(0.334 * (r.Default.MortgageTermMax - r.Default.MortgageTermMin) + r.Default.MortgageTermMin)), r.number(Math.floor(0.667 * (r.Default.MortgageTermMax - r.Default.MortgageTermMin) + r.Default.MortgageTermMin)), r.number(r.Default.MortgageTermMax)], null, a);
}, rothConversion.MortgageTermDropBoxSlider = function (e, t, i) {
    var a = rothConversion,
        r = a.getMortgageTermList().v;
    return a.DropBoxSlider(e, t, r);
}, rothConversion.NumberSlider = function (e, t, i, a, r, n, o) {
    var s = rothConversion;
    return s.Slider(e, t, i, a, r || 0, s.FMT_NUMBER, n || 1, [i, s.number(Math.floor(0.334 * (a - i) + i)), s.number(Math.floor(0.667 * (a - i) + i)), s.number(a)], null, o);
}, rothConversion.InputSlider = function (e, t, i, a, r, n, o, s) {
    var l = rothConversion,
        E = l.Slider(e, t, i, a, r || 0, l.FMT_INPUT, o || 1, [i, l.input(Math.floor(0.334 * (a - i) + i)), l.input(Math.floor(0.667 * (a - i) + i)), l.input(a)], null, s, n);
    return E._iPadding = n, E.setValue(E.getValue(), true), E;
}, rothConversion.DollarSlider = function (e, t, i, a, r, n, o, s) {
    var l = rothConversion;
    if (-1 == (o = o >= 0 && o <= 9 ? o : -1))
        for (var E = 0; E <= 7; E++)
            if (l.s_scale[E][3] == a) {
                o = E;
                break;
            }
    return -1 != o ? l.Slider(e, t, i, a, r || 0, l.FMT_DOLLARS, 1, l.s_label[o], l.useScale(o), s) : l.Slider(e, t, i, a, r || 0 == r ? r : 2, l.FMT_DOLLARS, n || 10, [l.dollars(i), l.dollars(Math.floor(0.334 * (a - i) + i)), l.dollars(Math.floor(0.667 * (a - i) + i)), l.dollars(a)], null, s);
}, rothConversion.ZipcodeInput = function (e, t, i) {
    var a = rothConversion,
        r = new rothConversion.InputItem(i, rothConversion.TypeNumber, e, t, true, "rothConversion-" + e, 0, 99999, 0, 0, a.FMT_INPUT, 0, false);
    return r._iPadding = 5, r.setValue(r.getValue(), true), r;
}, rothConversion.DollarInput = function (e, t, i, a, r, n) {
    var o = rothConversion;
    return new rothConversion.InputItem(n, rothConversion.TypeNumber, e, t, true, "rothConversion-" + e, i, a, 0, r || 0 == r ? r : 2, o.FMT_DOLLARS, 0, false);
}, rothConversion.PercentInput = function (e, t, i, a, r, n) {
    var o = rothConversion;
    return new rothConversion.InputItem(n, rothConversion.TypeNumber, e, t, true, "rothConversion-" + e, i, a, 0, r || 0 == r ? r : 2, o.FMT_PERCENT, 0, false);
}, rothConversion.PercentSlider = function (e, t, i, a, r, n, o) {
    var s = rothConversion;
    return s.Slider(e, t, i, a, r || 0 == r ? r : 2, s.FMT_PERCENT, n || 0.1, [s.percent(i / 100), s.percent(Math.floor(0.334 * (a - i) + i) / 100), s.percent(Math.floor(0.667 * (a - i) + i) / 100), s.percent(a / 100)], null, o);
}, rothConversion.MortgageRateSlider = function (e, t, i) {
    var a = rothConversion;
    return a.RateSlider(e, t, a.Default.MortgageRateMin, a.Default.MortgageRateMax, a.Default.MortgageRateMax, null, i);
}, rothConversion.InvestRateSlider = function (e, t, i) {
    var a = rothConversion;
    return a.RateSlider(e, t, a.Default.InvestRateMin, a.Default.InvestRateMax, a.Default.InvestSliderRateMax, null, i);
}, rothConversion.InflationRateSlider = function (e, t, i) {
    var a = rothConversion;
    return a.RateSlider(e, t, a.Default.InflationRateMin, a.Default.InflationRateMax, a.Default.InflationSliderRateMax, null, i);
}, rothConversion.prerothConversion = function (e) {
    return e ? "rothConversion-" + e : null;
}, rothConversion.suffix = function (e, t) {
    return t ? e + t : null;
}, rothConversion.RateSlider = function (e, t, i, a, r, n, o) {
    n = n || 0.5, i = i || 0, a = a || 25, r = r || 12;
    var s = rothConversion,
        l = s.percent,
        E = r - i,
        d = Math.floor(0.337 * E + i),
        h = Math.floor(0.667 * E + i),
        p = [l(i / 100), l(d / 100), l(h / 100), l(r / 100)],
        _ = new s.MakeScale(i, d, h, r, n, n, n);
    return s.Slider(e, t, i, a, 3, s.FMT_PERCENT, 0, p, _, o);
}, rothConversion.Nbr = function (e, t, i, a, r, n, o, s) {
    var l = rothConversion;
    return new l.InputItem(s, l.TypeNumber, e, t, true, "rothConversion-" + e, i, a, 0, r, n, 0, false, false, l.suffix(e, "_TRAIL"), l.suffix(l.prerothConversion(e), "_TRAIL"), o, null, null, l.TypeLabel);
}, rothConversion.NbrDropBox = function (e, t, i, a, r, n, o, s, l) {
    var E = rothConversion;
    return new E.InputItem(l, E.TypeNumber, e, t, true, "rothConversion-" + e, i, a, 0, r, n, 0, false, false, o, E.prerothConversion(o), s || t);
}, rothConversion.Checkbox = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeCheckbox, e, t, !a, "rothConversion-" + e, 0, 0, i, 0, 0, 0, false, false, null, null, a);
}, rothConversion.DropBoxString = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeDropBox, e, t, true, "rothConversion-" + e, 0, 0, 0, 0, n.FMT_STRING, 0, false, false, i, n.prerothConversion(i), a);
}, rothConversion.DropBox = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeDropBox, e, t, true, "rothConversion-" + e, 0, 0, n.parameters.get(e, 0), 0, 0, 0, false, false, i, n.prerothConversion(i), a);
}, rothConversion.DropBoxSlider = function (e, t, i, a) {
    var r = rothConversion,
        n = [i[0], i[Math.floor(0.333 * i.length)], i[Math.floor(0.666 * i.length)], i[i.length - 1]];
    return new r.InputItem(a, r.TypeDropBox, e, t, true, "rothConversion-" + e, 0, i.length - 1, 0, 0, 0, 1, n, null);
}, rothConversion.Label = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeLabel, e, t, false, "rothConversion-" + e, 0, 0, 0, 0, 0, 0, false, false, i, n.prerothConversion(i), a);
}, rothConversion.StringInput = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeString, e, t, true, "rothConversion-" + e, 0, 0, 0, 0, 0, 0, false, false, i, n.prerothConversion(i), a);
}, rothConversion.Date = function (e, t, i, a, r) {
    var n = rothConversion;
    return new n.InputItem(r, n.TypeDate, e, t, true, "rothConversion-" + e, 0, 0, "TODAY", 0, 0, 0, false, false, i, n.prerothConversion(i), a);
}, rothConversion.Radiobox = function (e, t, i, a, r, n) {
    var o = rothConversion;
    return new o.InputItem(n, o.TypeRadio, t, i, false, "rothConversion-" + t, 0, 0, a, 0, 0, 0, false, false, null, null, r, null, e);
}, rothConversion.Radioboxes = function (e, t, i, a, r, n) {
    var o = rothConversion;
    return new o.InputItem(n, o.TypeRadio, e, t, false, "rothConversion-" + e + "1", 0, 0, i, 0, 0, 0, false, false, e, o.suffix(o.prerothConversion(e), "2"), a, r);
}, rothConversion.InputItem = function (e, t, i, a, r, n, o, s, l, E, d, h, p, _, u, c, T, g, K) {
    var J = this,
        f = rothConversion,
        A = f.setLabelWrap,
        m = f.parameters;
    J._inputType = t, J._name = i, J._inputTypeAdditional = f.TypeNone, J._increment = Math.abs(h), J._decimals = E, J._iPadding = 0, J._format = d, J._minimum = o, J._maximum = s, J._range = s - o, J.bValidate = true, J.bIncompleteCheck = true, J.bNoLabel = rothConversion.bNoLabel, J.vDefault = m.get(J._name, l), J.oAdditional = c;
    var C = m.get("MSG_" + i + "1", T),
        R = m.get("MSG_" + i + "2", g);
    if (void 0 !== document.createElement && void 0 !== document.documentElement && "number" == typeof document.documentElement.offsetWidth) {
        J._sError = "", J._bError = false, J._InComplete = false, J._mouseDown = false, f.inputs.set(i, this);
        var v = J._container = document.getElementById("rothConversion-C-" + J._name);
        if (!v) return J._inputType = f.TypeNone, void J.setValue(J.vDefault, true);
        v.className = "rothConversionInputContainer";
        var y = v.style;
        v.backgroundColor = y.backgroundColor;
        var I = v.offsetWidth;
        if (J.bSlider = 0 != p, void 0 === f.bNativeSlider) {
            var b = document.createElement("input");
            b.setAttribute("type", "range"), f.bNativeSlider = "text" !== b.type;
        }
        _ && (J._oScale = _);
        var L = f.iDPInputPad,
            S = J._inputField = document.getElementById(n),
            D = J._iInputFieldDiv = document.getElementById(n + "Div"),
            M = S.style;
        S.name = K || J._name, S.className = f.InputClass, M.height = f.iDPInputHeight - rothConversion.iDPInputTop + "px", M.top = f.iDPInputTop + "px", M.position = "absolute", S.resize = false, J._inputType != f.TypeLabel && S.setAttribute("aria-required", "true"), J._sLabel = m.get("MSG_" + J._name, a);
        var x = J._fieldset = document.getElementById("rothConversion-FS-" + J._name);
        if (x) {
            x.className = "rothConversionAccessibleFieldSet";
            var O = document.createElement("legend");
            O.className = "rothConversionAccessibleFieldSetLegend", O.innerText = J._sLabel, x.insertBefore(O, x.firstChild);
        }
        var P = 0;
        if (null != a && 0 != f.LabelLength) {
            e = e ? " " + e : "";
            var G = document.getElementById("rothConversion-D-" + (f.InputItem.AltHelpName ? f.InputItem.AltHelpName : J._name)),
                w = J._label = document.createElement("div"),
                F = w.style;
            F.position = "absolute", F.width = f.LabelLength + "px", F.left = rothConversion.LabelLeftMargin + "px", F.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", J.className = (G && rothConversion.PopupDefinitions ? "rothConversionHelp " : "rothConversionLabel ") + e, A(w, n, f.deviceMobile || !r, null, J.bNoLabel ? "" : J._sLabel + ("" != J._sLabel ? f.Colon : ""), J.className), w.className = J.className;
            try {
                v.insertBefore(w, x || D || S);
            } catch (e) { }
            G && rothConversion.PopupDefinitions && J.AddDefinitionEvents(w, G, J._sLabel, J._name), (P = w.offsetWidth) || (P = f.LabelLength), (H = w.offsetHeight) + 6 > f.iDPRowHeight && (y.height = H + 6 + "px", F.top = "0px");
        }
        var N = P,
            B = 0;
        if (S.indent = (f.deviceInputPad ? f.deviceInputPad : L) + P, J.bNoLabel && (S.indent = 0, P = 0), J._inputType == f.TypeCheckbox || J._inputType == f.TypeRadio) {
            if (J._sTrailingText = C, J._sTrailingText2 = R, M.left = P + "px", C) {
                var H, k = (se = document.createElement("div")).style;
                A(se, n, false, null, J._sTrailingText), se.className = "rothConversionTrailingLabel", k.position = "absolute", P = P + 1.5 * L + (S.offsetWidth ? S.offsetWidth : 15), k.left = P + "px", v.appendChild(se), k.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", (H = se.offsetHeight) + 6 > f.iDPRowHeight && (y.height = H + 6 + "px", k.top = "0px"), P += se.offsetWidth, se = se;
            }
        } else if (J._inputType != f.TypeDropBox)
            if (J._inputType == f.TypeLabel) S.className = "rothConversionOutputLabel " + e, M.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", M.left = P + L + "px", S.indent += f.deviceInputPad, C ? M.width = f.InputLength + L + "px" : S.resize = true, M.height = f.iDPItemHeight - 2 + "px";
            else if (J._inputType == f.TypeString || J._inputType == f.TypeDate) M.left = (f.deviceInputPad ? f.deviceInputPad : L) + P + "px", C || J.bSlider || J._inputType == f.TypeDate ? M.width = f.InputLength + "px" : (S.indent = (f.deviceInputPad ? f.deviceInputPad : L) + P + L, S.resize = true);
            else {
                if (M.width = f.InputLength + "px", f.deviceUseNumberType) {
                    var V = document.createElement("div"),
                        X = V.style;
                    V.className = "rothConversionLabelBold", X.position = "absolute", X.width = f.deviceInputPad + "px", X.left = P + "px", X.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", d == f.FMT_DOLLARS ? V.innerHTML = f.sCP + f.sCS : d == f.FMT_PERCENT ? V.innerHTML = f.sPP + f.sPS : V.innerHTML = "", X.height = f.iDPInputHeight + "px", v.appendChild(V), L = V.offsetWidth + 1;
                }
                f.deviceUseNumberType && 0 == J._decimals && J._maximum < 1e3 && (S.type = "number"), M.left = P + L + "px";
            } else {
            S.className = "rothConversionDropBox";
            var W = (f.deviceInputPad ? f.deviceInputPad : L) + P,
                $ = f.iDPDropHeight - f.iDPInputTop,
                Y = f.InputLength + rothConversion.iDPDropBoxPad;
            if (D) {
                var U = D.style;
                D.className = "rothConversionDropBoxDivModern", S.className = "rothConversionDropBox rothConversionDropBoxModern", U.height = f.iDPInputHeight - rothConversion.iDPInputTop - 2 + "px", U.top = f.iDPInputTop - 1 + "px", U.position = "absolute", U.left = W + "px", M.left = "4px", U.height = $ + "px", U.width = Y + "px", M.width = Y + rothConversion.iDPDropBoxModernPad + "px", M.top = (f.IE7and8 ? -7 : 0) + f.iDPInputTop + "px";
            } else M.width = Y + "px", M.left = W + "px", M.top = f.iDPInputTop + "px";
            M.height = $ + "px", C || J.bSlider || (S.indent = (f.deviceInputPad ? f.deviceInputPad : rothConversion.iDPDropBoxPad) + P + L, S.resize = true);
        }
        if (c) {
            var z = J._Additional = document.getElementById(c);
            if (J._Additional) {
                var j = z.style;
                if (j.position = "absolute", j.top = f.iDPInputTop + "px", z.setAttribute("aria-required", "true"), I = f.CalculatorWidth - 2 * f.iDPInputPad, f.TypeRadio == J._inputType) {
                    if (J._inputTypeAdditional = f.TypeRadio, z.indent = P + 2 * L, j.left = z.indent + "px", z.name = K || J._name, z.className = rothConversion.InputClass, j.height = f.iDPInputHeight - f.iDPInputTop + "px", R) {
                        var Z = J._label3 = document.createElement("div"),
                            q = Z.style;
                        A(Z, c, false, null, J._sTrailingText2), Z.className = "rothConversionTrailingLabel", q.position = "absolute";
                        var Q = z.offsetWidth;
                        if (Q = Q || 20, q.height = f.iDPInputHeight + "px", q.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", v.offsetWidth) I - z.indent < f.SliderMinLength ? (j.top = f.iDPInputHeight + "px", j.left = N + "px", q.top = f.iDPInputHeight + f.iDPInputHeight / 4 + "px", q.left = N + 1.5 * L + S.offsetWidth + "px", y.height = 1.6 * f.iDPRowHeight + "px") : q.left = P + 3.5 * L + Q + "px";
                        else {
                            var ee = f.LabelLength + f.InputLength + 7 * L + Q;
                            q.left = ee + Q + "px", j.left = ee + "px";
                        }
                        v.appendChild(Z);
                    }
                } else {
                    J._inputTypeAdditional = f.TypeDropBox;
                    var te = J._AdditionalDiv = document.getElementById(c + "Div");
                    z.name = u, z.className = "rothConversionDropBox", z.setAttribute("aria-label", C);
                    var ie = f.iDPDropHeight - f.iDPInputTop,
                        ae = P + (f.offsetWidth ? f.offsetWidth(S) : S.offsetWidth) + 5 + 2 * L,
                        re = ae - L,
                        ne = I - ae;
                    if (te) {
                        var oe = te.style;
                        te.className = "rothConversionDropBoxDivModern", z.className = "rothConversionDropBox rothConversionDropBoxModern", oe.position = "absolute", oe.top = f.iDPInputTop - 1 + "px", oe.height = ie + "px", oe.left = re + "px", oe.width = ne + "px", j.left = "0px", j.top = (f.IE7and8 ? -7 : 0) + f.iDPInputTop + "px";
                    } else j.left = re + "px";
                    j.width = ne + "px", j.height = ie + "px", z.indent = ae, ne < f.SliderMinLength && v.offsetWidth && (j.top = f.iDPRowHeight + "px", y.height = 2 * f.iDPRowHeight + "px");
                }
                z.addEventListener ? z.addEventListener("change", f.dataChanged, false) : z.attachEvent("onchange", f.dataChanged);
            } else if (C) {
                var se;
                J._inputTypeAdditional = f.TypeLabel, J._sTrailingText = C, k = (se = document.createElement("div")).style, A(se, c, false, null, J._sTrailingText), se.className = "rothConversionTrailingLabel", k.position = "absolute", k.left = P + (f.deviceInputPad ? f.deviceInputPad : L) + L + f.InputLength + 5 + "px", k.top = f.iDPInputHeight / 4 + f.iDPInputTop + "px", k.height = f.iDPInputHeight + "px", J._Additional = se, z = J._Additional = se, J._label2 = se, v.appendChild(se);
            }
        } else if (J.bSlider) {
            B = P + (f.deviceInputPad ? f.deviceInputPad : L) + L + f.InputLength + f.iDPSliderPad, $ = f.iDPItemHeight;
            var le = J._slider = document.createElement("div"),
                Ee = le.style;
            if (le.setAttribute("aria-hidden", "true"), rothConversion.bPlusMinus ? le.className = "rothConversionIncrementer" : (le.labels = J.setLabelSlider($, 0.1 * $, B + f.SliderKnobSize / 2, p), le.labels.indent = B, Ee.position = "absolute", Ee.left = B + "px", le.className = "rothConversionSlider"), le.indent = B, le.unselectable = "on", Ee.height = $ + "px", le.bMO = true, v.appendChild(J._slider), rothConversion.bPlusMinus) {
                var de = J._plus = document.createElement("div"),
                    he = J._minus = document.createElement("div"),
                    pe = de.style,
                    _e = he.style;
                he.className = "rothConversionIncrementControl rothConversionIncrementMinus", de.className = "rothConversionIncrementControl rothConversionIncrementPlus", _e.bMouseoutignore = pe.bMouseoutignore = true, _e.unselectable = pe.unselectable = "on", _e.position = pe.position = "relative", _e.cursor = pe.cursor = "pointer", le.appendChild(J._minus), le.appendChild(J._plus), J.AddPlusMinusEvents(de, he);
            } else {
                var ue;
                f.bNativeSlider ? ((ue = J._line = document.createElement("input")).setAttribute("type", "range"), ue.setAttribute("min", "0"), ue.setAttribute("max", "100"), ue.setAttribute("step", ".01"), ue.tabIndex = "-1", ue.style.height = f.iDPRowHeight / 2 + 2 + "px", ue.style.outline = "none") : (ue = J._line = document.createElement("div")).style.height = f.iDPRowHeight / 2 + 2 + "px", ue.className = "rothConversionLine";
                var ce = ue.style;
                ue.bMouseoutignore = true, ue.unselectable = "on", ce.position = "relative", ce.cursor = "pointer", le.appendChild(J._line);
                var Te = f.SliderKnobSize;
                if (f.bNativeSlider) J.bSetRange = true, J.AddNativeEvents(ue);
                else {
                    var ge = J._knob = document.createElement("div"),
                        Ke = ge.style;
                    ge.sClassNormal = (f.IE7and8 ? "rothConversionArrowIE8" : "rothConversionArrow") + (f.SliderKnobExtraClass ? " " + f.SliderKnobExtraClass : ""), ge.sClassActive = (f.IE7and8 ? "rothConversionArrowIE8" : "rothConversionArrow active") + (f.SliderKnobExtraClass ? " " + f.SliderKnobExtraClass : ""), ge.className = ge.sClassNormal, ge.unselectable = "on", ge.bMouseoutignore = true, Ke.position = "absolute", Ke.cursor = "pointer", le.appendChild(J._knob), Te = 0.66 * ge.offsetWidth;
                    var Je = le.offsetHeight,
                        fe = ge.offsetHeight;
                    0 == Te && (Te = f.SliderKnobSize), 0 == fe && (fe = f.SliderKnobSize), le.offsetHeight ? Ke.top = Je - fe + f.SliderKnobVertAdj + "px" : Ke.top = f.iDPRowHeight - f.SliderKnobSize + f.SliderKnobVertAdj + "px", J.AddSliderEvents(le);
                }
                ce.left = Te + "px", J._posAdjust = Te;
            }
        }
        J.vDefault2 = J._inputTypeAdditional != f.TypeNone ? J._Additional.value : null, f.InputItem.InputSetValues(J, J.vDefault, J.vDefault2, true), J.AddInputEvents(S), m.get(i + "_HIDE", false) && (J.bValidate = false, J.hide()), m.get(i + "_DISABLE", false) && J.disable();
    }
}, rothConversion.InputItem.InputSetValues = function (e, t, i, a) {
    var r = rothConversion,
        n = t;
    switch (a && (n = rothConversion.StorageGet(e._name, e.vDefault)), e._inputType) {
        case r.TypeRadio:
            e._inputField.checked = n, e.oAdditional && (e._Additional.checked = !e._inputField.checked);
            break;
        case r.TypeCheckbox:
            e._inputField.checked = n;
            break;
        case r.TypeDropBox:
            var o = r.setDropBox(e._inputField, n);
            e._InComplete = false, 0 == o && rothConversion.bFirstNotValid && (e._InComplete = true);
            break;
        case r.TypeLabel:
            e._inputField.innerHTML = n;
            break;
        case r.TypeDate:
            e._inputField.value = n, e.setTypedDate(true);
            break;
        case r.TypeString:
            e._inputField.value = n, e.setTypedString(true);
            break;
        case r.TypeNumber:
            e._inputField.value = n, e.setTypedValue(true);
    }
    if (e._inputTypeAdditional != r.TypeNone) switch (n = i, a && (n = r.StorageGet(e._Additional.name, e.vDefault)), e._inputTypeAdditional) {
        case r.TypeDropBox:
            o = r.setDropBox(e._Additional, n), e._InComplete = false, 0 == o && rothConversion.bFirstNotValid && (e._InComplete = true);
            break;
        case r.TypeDate:
        case r.TypeString:
            e._Additional.value = n;
            break;
        case r.TypeNumber:
            e._Additional.value = n, e.setTypedValue(true);
    }
}, rothConversion.InputItem.AltHelpName = false, rothConversion.InputItem.prototype.AddDefinitionEvents = function (e, t, i, a) {
    var r = rothConversion.iDPInputHeight - 5,
        n = document.createElement("div");
    n.className = "rothConversionGuiDefnPopup", n.id = "rothConversion-PODEFN-" + a;
    var o = document.createElement("button");
    o.id = "rothConversion-PO-" + a, o.setAttribute("aria-label", rothConversion.MSG_DEFINE_PREFIX + i), o.className = "rothConversionDefinitionIcon", o.innerHTML = "?", o.tabIndex = "0", o.setAttribute("type", "button"), n.innerHTML = '<button id="rothConversion-POCLOSE-' + a + '" class="rothConversionCloseButton" onclick="rothConversion.DefnPointHide(\'' + a + '\')" type="button" aria-aria-label="' + rothConversion.MSG_DEFN_CLOSE_LABEL + " " + i + '" tabindex="0">X</button><dl class=rothConversionDefinitionPopup>' + t.innerHTML + "</dl>", e.insertBefore(o, e.firstChild), e.parentNode.appendChild(n), n.setAttribute("aria-hidden", "true"), n.setAttribute("role", "dialog"), n.setAttribute("aria-label", rothConversion.MSG_DEFINE_PREFIX + i), e.addEventListener ? e.addEventListener("click", function (t) {
        rothConversion.DefnPointTimeOut > 0 && rothConversion.DefnPoint == n ? rothConversion.DefnPointHide() : rothConversion.DefnPointShow(n, 50, r, e, 6e4, a), t.preventDefault();
    }, false) : e.attachEvent("onclick", function (t) {
        rothConversion.DefnPointTimeOut > 0 && rothConversion.DefnPoint == n ? rothConversion.DefnPointHide() : rothConversion.DefnPointShow(n, 50, r, e, 6e4, a), t.preventDefault();
    });
}, rothConversion.InputItem.prototype.AddPlusMinusEvents = function (e, t) {
    var i = this;
    e.addEventListener ? (e.addEventListener("click", function (e) {
        i.doIncrement(true);
    }, false), t.addEventListener("click", function (e) {
        i.doIncrement(false);
    }, false)) : (e.attachEvent("onclick", function (e) {
        i.doIncrement(true);
    }), t.attachEvent("onclick", function (e) {
        i.doIncrement(false);
    }));
}, rothConversion.InputItem.prototype.AddNativeEvents = function (e) {
    var t = this;
    e.addEventListener("input", function (e) {
        t.bSetRange && t.setRangeValue(e), t.bSetRange = true;
    }, false);
}, rothConversion.InputItem.prototype.AddSliderEvents = function (e) {
    var t = this;
    if (e.addEventListener) {
        try {
            document.createEvent("TouchEvent"), e.addEventListener("touchstart", function (e) {
                e.preventDefault(), t.doMouseDown(e, true);
            }, false), e.addEventListener("touchmove", function (e) {
                e.preventDefault(), t.doMouseMove(e, true);
            }, false), e.addEventListener("touchend", function (e) {
                e.preventDefault(), t.doMouseUp(e, true);
            }, false), e.addEventListener("touchcancel", function (e) {
                e.preventDefault(), t.doMouseOut(e, true);
            }, false);
        } catch (e) { }
        e.addEventListener("mousemove", function (e) {
            t.doMouseMove(e);
        }, false), e.addEventListener("mousedown", function (e) {
            t.doMouseDown(e);
        }, false), e.addEventListener("mouseup", function (e) {
            t.doMouseUp(e);
        }, false), e.addEventListener("mouseout", function (e) {
            t.doMouseOut(e);
        }, false);
    } else e.attachEvent("onmousemove", function (e) {
        t.doMouseMove(e);
    }), e.attachEvent("onmousedown", function (e) {
        t.doMouseDown(e);
    }), e.attachEvent("onmouseup", function (e) {
        t.doMouseUp(e);
    }), e.attachEvent("onmouseout", function (e) {
        t.doMouseOut(e);
    });
}, rothConversion.InputItem.prototype.AddInputEvents = function (e) {
    var t = this;
    e.addEventListener ? (e.addEventListener("change", function (e) {
        t.doBlur(e);
    }, false), e.addEventListener("focus", function (e) {
        t.doFocus(e);
    }, false), e.addEventListener("keypress", function (e) {
        if (13 == e.keyCode) return t.doBlur(), rothConversion.Dropper.stopBubble(e);
    }, false)) : (e.attachEvent("onchange", function (e) {
        t.doBlur(e);
    }), e.attachEvent("onfocus", function (e) {
        t.doFocus(e);
    }), e.attachEvent("onkeypress", function (e) {
        if (13 == e.keyCode) return t.doBlur(), rothConversion.Dropper.stopBubble(e);
    }));
}, rothConversion.InputItem.prototype.doFocus = function () {
    var e = rothConversion;
    switch (this._inputType) {
        case e.TypeRadio:
        case e.TypeCheckbox:
        case e.TypeDropBox:
        case e.TypeLabel:
            break;
        case e.TypeDate:
        case e.TypeString:
        case e.TypeNumber:
            this._inputField.select(), this._inputField.value == this.getName() && (this._inputField.value = "");
    }
}, rothConversion.InputItem.prototype.doBlur = function () {
    var e = rothConversion,
        t = this;
    switch (t._inputType) {
        case e.TypeRadio:
        case e.TypeCheckbox:
            e.dataChanged();
            break;
        case e.TypeDropBox:
            t._InComplete = false, 0 == t._inputField.selectedIndex && t.bFirstNotValid && (t._InComplete = true), t.setSliderPosition(t._inputField.selectedIndex), e.dataChanged();
            break;
        case e.TypeDate:
            t.setTypedDate();
            break;
        case e.TypeString:
            t.setTypedString();
            break;
        case e.TypeNumber:
            t.setTypedValue();
    }
}, rothConversion.InputItem.prototype.doClick = function (e, t) {
    this.setMouseValue(e, t);
}, rothConversion.InputItem.prototype.doMouseUp = function (e, t) {
    var i = this;
    i._line.className = "rothConversionLine", i._knob.className = i._knob.sClassNormal, i._mouseDown = false;
}, rothConversion.InputItem.prototype.doMouseOut = function (e, t) {
    var i = this,
        a = window.event;
    if (!i._inputField.disabled && i._mouseDown) {
        e || (e = a);
        var r = a ? e.srcElement : e.target;
        if (r.bMouseoutignore) return;
        for (var n = e.relatedTarget ? e.relatedTarget : e.toElement; n != r && "BODY" != n.nodeName;) n = n.parentNode;
        r != n && i.doMouseUp();
    }
}, rothConversion.InputItem.prototype.doMouseDown = function (e, t) {
    var i = this;
    i._inputField.disabled || (i._line.className = "rothConversionLine active", rothConversion.IE7and8 || (i._knob.className = i._knob.sClassActive), i._mouseDown = true, e && i.setMouseValue(e, t));
}, rothConversion.InputItem.prototype.doMouseMove = function (e, t) {
    this._mouseDown && this.setMouseValue(e, t);
}, rothConversion.InputItem.prototype.setRangeValue = function (e) {
    v = this._line.value, this.setChangeValue(v / 100);
}, rothConversion.InputItem.prototype.setMouseValue = function (e, t) {
    var i = this,
        a = rothConversion.getMouseCoord(e, i._slider, t);
    if (a.x >= 0) {
        var r = i._posAdjust,
            n = i._slider.offsetWidth,
            o = (a.x - r) / (n - r);
        this.setChangeValue(o);
    }
}, rothConversion.InputItem.prototype.setChangeValue = function (e) {
    var t = this,
        i = t._minimum,
        a = t._maximum,
        r = t._oScale;
    if (r) e = rothConversion.s_Translate(100 * e, r._Min, r._Mid1, r._Mid2, r._Max, r._stepMin, r._stepMid, r._stepMax);
    else {
        var n = t._increment;
        e = e * t._range + i, e = 1 == n ? Math.round(e) : Math.round(e / n) * n;
    }
    t._InComplete = false, t.setValue(e > a ? a : e < i ? i : e, false, true);
}, rothConversion.InputItem.prototype.doIncrement = function (e) {
    var t = this,
        i = t._minimum,
        a = t._maximum;
    a < 20 && (iIncrement = 0.5), iIncrement = a < 100 ? 1 : a < 1e3 ? 10 : a < 1e4 ? 100 : 1e3;
    var r = t.getValue() + (e ? 1 : -1) * iIncrement;
    t.setValue(r > a ? a : r < i ? i : r, false, true);
}, rothConversion.InputItem.prototype.validate = function () {
    var e = this;
    if (e.bValidate) {
        if (e._bError) throw e._sError;
        return !(e.bIncompleteCheck && e._InComplete);
    }
    return true;
}, rothConversion.InputItem.prototype.setValue = function (e, t, i) {
    var a = rothConversion,
        r = this,
        n = r._inputField,
        o = r._format,
        s = r._container,
        l = r._inputType,
        E = false;
    if (l == a.TypeNone) return r._value = e, void (r._bError = false);
    if (l == a.TypeDate) {
        var d = new Date;
        try {
            var h = new Array;
            e.indexOf("/") > 0 ? ((h = e.split("/"))[0] = Math.round(h[0]), h[1] = Math.round(h[1]), h[2] = Math.round(h[2])) : (h[0] = Math.round(e.substring(0, 2)), h[1] = Math.round(e.substring(2, 4)), h[2] = Math.round(e.substring(4))), h[2] < 100 && (h[2] += 2e3), h[2] + h[1] + h[0] > 0 ? d = new Date(h[2], h[0] - 1, h[1]) : E = true;
        } catch (e) {
            E = true;
        }
        E ? (r._sError = a.getrothConversionReplaced(a.MSG_INVALID_DATE, r._sLabel), r._value = null) : (r._value = d, n.value = a.dateFormat(d));
    } else if (l == a.TypeString) n.value = e;
    else if (l == a.TypeDropBox) n.selectedIndex = Math.round(e), r.setSliderPosition(e);
    else if (l == a.TypeLabel) n.innerHTML = e;
    else if (l == a.TypeCheckbox) n.checked = e;
    else {
        r.bValidate && (e > r._maximum ? (r._sError = a.getrothConversionReplaced(this.MSG_EXCEEDS_LIMIT_OF_RANGE ? this.MSG_EXCEEDS_LIMIT_OF_RANGE : a.MSG_EXCEEDS_LIMIT_OF_RANGE, r._sLabel, a.format[o](a.FMT_PERCENT == o ? r._maximum / 100 : r._maximum, r._decimals, r._iPadding)), E = true) : e < r._minimum && (r._sError = a.getrothConversionReplaced(this.MSG_UNDER_LIMIT_OF_RANGE ? this.MSG_UNDER_LIMIT_OF_RANGE : a.MSG_UNDER_LIMIT_OF_RANGE, r._sLabel, a.format[o](a.FMT_PERCENT == o ? r._minimum / 100 : r._minimum, r._decimals, r._iPadding)), E = true));
        var p, _ = r._value = a.round(e, r._decimals);
        p = !a.deviceUseNumberType || o != a.FMT_DOLLARS && o != a.FMT_PERCENT ? a.format[o](o == a.FMT_PERCENT ? _ / 100 : _, r._decimals, r._iPadding) : a.nbr(_, r._decimals, "", "", true, false), n.value = a.replace("&nbsp;", " ", p), r.setSliderPosition(_);
    }
    r._bError = E, s.style.backgroundColor = E ? a.ErrorBackground : s.backgroundColor, t || a.dataChanged(i);
}, rothConversion.InputItem.prototype.setSliderPosition = function (e) {
    var t = this;
    if (t.bSlider) {
        var i = t._slider.width;
        if (i && (e || 0 == e)) {
            var a = t._oScale,
                r = t._posAdjust,
                n = 0;
            if (a) n = rothConversion.s_Untranslate(e, a._Min, a._Mid1, a._Mid2, a._Max) / 100;
            else {
                var o = t._maximum,
                    s = t._minimum;
                n = ((e > o ? o : e < s ? s : e) - s) / t._range;
            }
            rothConversion.bNativeSlider ? t._line.value = 100 * n : t._knob.style.left = (i - r) * n + r / 2 + "px";
        }
    }
}, rothConversion.InputItem.prototype.setTypedString = function (e) {
    var t = rothConversion.replace;
    this.setValue(t("<", "", t(">", "", t("(", "", t(")", "", this._inputField.value)))), e);
}, rothConversion.InputItem.prototype.setTypedDate = function (e) {
    var t = rothConversion,
        i = this,
        a = i._inputField.value,
        r = a;
    if (i._InComplete = false, "TODAY" == a) r = t.dateFormat(new Date);
    else if ("NEXT_MONTH" == a) {
        var n = new Date;
        n.setMonth(n.getMonth() + 1), r = t.dateFormat(n);
    } else if ("T" == r.substr(10, 1) && (r = r.substr(5, 2) + "/" + r.substr(8, 2) + "/" + r.substr(0, 4)), "" == (r = t.stripDate(r)) || r == i._sLabel) return i._inputField.value = i.bNoLabel ? i._sLabel : "", i._InComplete = true, i._bError = false, i._container.style.backgroundColor = t.IncompleteBackground, e || t.dataChanged(), void (i._value = null);
    i.setValue(r, e);
}, rothConversion.InputItem.prototype.setTypedValue = function (e) {
    var t = rothConversion,
        i = this;
    i._InComplete = false;
    var a = i._inputField.value;
    if ("" == a || a == i._sLabel) i.setSliderPosition(i._minimum), i._inputField.value = i.bNoLabel ? i._sLabel : "", i._InComplete = true, i._bError = false, i._container.style.backgroundColor = t.IncompleteBackground, e || t.dataChanged();
    else {
        var r = t.round(parseFloat(t.strip(a)), i._decimals);
        i.bSetRange = false, i.setValue(r, e);
    }
}, rothConversion.InputItem.prototype.getSecondValue = function () {
    var e = this;
    return e.getV(e._inputTypeAdditional, e._Additional);
}, rothConversion.InputItem.prototype.getValue = function () {
    var e = this;
    return e._value = e.getV(e._inputType, e._inputField, e._format);
}, rothConversion.InputItem.prototype.setText = function (e) {
    var t = this;
    return t.setT(t._inputType, t._inputField, e);
}, rothConversion.InputItem.prototype.setSecondText = function (e) {
    var t = this;
    return t.setT(t._inputTypeAdditional, t._Additional, e);
}, rothConversion.InputItem.prototype.getSecondFormatted = function () {
    var e = this;
    return e.getF(e._inputTypeAdditional, e._Additional);
}, rothConversion.InputItem.prototype.getFormatted = function () {
    var e = this;
    return e._InComplete ? rothConversion.sIncomplete : e.getF(e._inputType, e._inputField);
}, rothConversion.InputItem.prototype.getF = function (e, t) {
    var i = rothConversion,
        a = "",
        r = this,
        n = r._value,
        o = r._format;
    switch (e) {
        case i.TypeRadio:
        case i.TypeCheckbox:
            a = t.value;
            break;
        case i.TypeDropBox:
            a = t[t.selectedIndex].text;
            break;
        case i.TypeLabel:
            a = t.innerHTML;
            break;
        case i.TypeDate:
            a = i.dateFormat(n);
            break;
        case i.TypeString:
            a = t.value;
            break;
        case i.TypeNumber:
            a = i.format[o](o == i.FMT_PERCENT ? n / 100 : n, r._decimals, r._iPadding);
            break;
        case i.TypeNone:
            a = n;
    }
    return a;
}, rothConversion.InputItem.prototype.getV = function (e, t, i) {
    var a = rothConversion,
        r = 0,
        n = this;
    switch (e) {
        case a.TypeRadio:
        case a.TypeCheckbox:
            r = t.checked;
            break;
        case a.TypeDropBox:
            r = t[t.selectedIndex].value, i != a.FMT_STRING && (r = Math.round(r));
            break;
        case a.TypeLabel:
            r = t.innerHTML;
            break;
        case a.TypeDate:
            r = n._value;
            break;
        case a.TypeString:
            r = t.value;
            break;
        case a.TypeNumber:
            r = a.round(parseFloat(a.strip(t.value)), n._decimals);
            break;
        case a.TypeNone:
            r = n._value;
    }
    return r;
}, rothConversion.InputItem.prototype.setT = function (e, t, i) {
    var a = rothConversion,
        r = this;
    switch (e) {
        case a.TypeRadio:
        case a.TypeCheckbox:
        case a.TypeDropBox:
            break;
        case a.TypeLabel:
            t.innerHTML = i;
            break;
        case a.TypeDate:
            t.value = i, r.setTypedDate(true);
            break;
        case a.TypeString:
            t.value = i, r.setTypedString(true);
            break;
        case a.TypeNumber:
            t.value = a.replace("&nbsp;", " ", i), r.setTypedValue(true);
    }
}, rothConversion.InputItem.prototype.shortDesc = function () {
    return this._sLabel + rothConversion.Colon + " " + this.getFormatted();
}, rothConversion.InputItem.prototype.newWidth = function () {
    var e = rothConversion,
        t = this,
        i = t._inputField,
        a = t._Additional;
    if (t._inputType != e.TypeNone) {
        var r = t.SliderX();
        if (i.resize) {
            var n = Math.max(r - i.indent, 0);
            t._iInputFieldDiv ? (t._iInputFieldDiv.style.width = n + "px", i.style.width = n + rothConversion.iDPDropBoxModernPad + "px") : i.style.width = n + "px";
        }
        a && a.indent && t._inputTypeAdditional != e.TypeRadio && (n = r + 10 - a.indent, t._AdditionalDiv ? (t._AdditionalDiv.style.width = n + "px", a.style.width = n + rothConversion.iDPDropBoxModernPad + "px") : a.style.width = n + "px");
        var o = t._slider;
        o && !rothConversion.bPlusMinus && this.showSlider(o);
        var s = t._label2;
        if (s) {
            var l = s.offsetHeight;
            l + 6 > e.iDPRowHeight && (t._container.style.height = l + e.iDPInputHeight / 4 + 2 + "px");
        }
    }
}, rothConversion.InputItem.prototype.SliderX = function () {
    return rothConversion.CalculatorWidth - 2 * rothConversion.iDPInputPad - (this.SliderWidthAdjust ? this.SliderWidthAdjust : rothConversion.SliderWidthAdjust);
}, rothConversion.InputItem.prototype.showSlider = function (e) {
    var t = rothConversion,
        i = this,
        a = i.SliderX();
    if (e.indent)
        if (a - t.InputTotalLength < t.SliderMinLength) e.style.display = "none", e.labels.style.display = "none";
        else {
            e.style.display = "inline-block", e.labels.style.display = "inline-block";
            var r = a - e.indent;
            e.width = r, e.style.width = r + "px", i._line.style.width = r - t.SliderKnobSize + "px", e.labels.style.width = a - e.labels.indent + "px", i.setSliderPosition(i._inputType == t.TypeDropBox ? i._inputField.selectedIndex : i._value);
        }
}, rothConversion.InputItem.prototype.hide = function () {
    var e = this._container;
    e && (e.style.display = "none");
}, rothConversion.InputItem.prototype.show = function () {
    var e = this._container;
    e && (e.style.display = "block");
}, rothConversion.InputItem.prototype.setLabelSlider = function (e, t, i, a) {
    var r = ["left", "center", "center", "right"],
        n = document.createElement("div");
    n.className = "rothConversionScale", n.setAttribute("aria-hidden", "true"), n.className = "rothConversionScale", n.unselectable = "on", n.style.position = "absolute", n.style.height = e + "px", n.style.cursor = "pointer", n.style.top = t + "px", n.style.left = i + "px", this._container.appendChild(n);
    var o = rothConversion.SliderLabelVertAdj;
    if (a)
        for (var s = (a.length > 5 ? 5 : a.length) - 1, l = 0; l <= s; l++) {
            var E = document.createElement("div");
            if (E.className = "rothConversionScale", E.unselectable = "on", E.style.position = "absolute", E.style.height = e + "px", E.style.textAlign = r[l == s ? 3 : l], E.style.cursor = "pointer", E.style.top = 0 + o + "px", 4 == s) switch (l) {
                case 0:
                    E.style.width = "100%", E.style.left = 0;
                    break;
                case 1:
                    E.style.width = "55%", E.style.left = 0;
                    break;
                case 2:
                    E.style.width = "100%";
                    break;
                case 3:
                    E.style.width = "75%", E.style.left = 0;
                    break;
                case 4:
                    E.style.width = "100%", E.style.right = 0;
            } else E.style.width = s < 2 ? "100%" : (s > 2 ? 66.66 : 100) + "%", l > 1 ? E.style.right = 0 : E.style.left = 0;
            E.innerHTML = a[l], n.appendChild(E);
        }
    return n;
}, rothConversion.InputItem.prototype.disable = function (e, t) {
    var i = this,
        a = i._inputType,
        r = i._label2,
        n = i._label;
    return a != rothConversion.TypeNone && (i.bValidate = false, i._container.style.backgroundColor = i._container.backgroundColor, i._InComplete = false, a == rothConversion.TypeCheckbox && r && (r.className = "rothConversionTrailingLabelDisable"), n && !e && (n.className = i.className + " rothConversionTrailingLabelDisable"), i.bSlider && (i._slider.labels.style.display = "none", i._slider.style.display = "none"), i._inputField && t && (i._inputField.style.display = "none"), i._inputField.disabled = true);
}, rothConversion.InputItem.prototype.enable = function () {
    var e = rothConversion,
        t = this,
        i = t._inputType,
        a = t._label2,
        r = t._label;
    return i != e.TypeNone && (t.bValidate = true, i == e.TypeCheckbox && a && (a.className = "rothConversionTrailingLabel"), r && (r.className = this.className), t.bSlider && t.showSlider(t._slider, null), t._inputField && (t._inputField.style.display = "block"), i == e.TypeDate && t.setTypedDate(true), i == e.TypeNumber && t.setTypedValue(true), t._inputField.disabled = false);
}, rothConversion.InputItem.prototype.getName = function () {
    return this._sLabel;
}, rothConversion.shortDesc = function () {
    for (var e = "", t = 0; t < arguments.length; t++) arguments[t].shortDesc ? e += arguments[t].shortDesc() + (t == arguments.length - 1 ? "" : ", ") : e += arguments[t];
    return e;
}, rothConversion.stripDate = function (e) {
    if (!e) return "";
    for (var t = e.length, i = ""; t > 0;) {
        var a = e.charAt(t - 1);
        switch (a) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "/":
                i = a + i;
                break;
            case "-":
                i = a + "/";
        }
        t--;
    }
    return i;
}, rothConversion.strip = function (e) {
    if (!e) return "0";
    for (var t = e.length, i = "", a = 0, r = 0; t > 0;) {
        var n = e.charAt(t - 1);
        switch (n) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                i = n + i;
                break;
            case ".":
                a || (i = n + i), a++;
                break;
            case "-":
            case "(":
                r++;
        }
        t--;
    }
    return "" == i ? "0" : r ? "-" + i : i;
}, rothConversion.DataPointTimeOut = -1, rothConversion.DataPointObject = null, rothConversion.DataPointShow = function (e, t, i, a, r, n) {
    var o = rothConversion;
    n || (n = 2500), o.DataPoint.style.display = "block";
    var s = o.getScreenCoord(i, a, r),
        l = o.DataPointOffset();
    o.DataPoint.style.left = s.x + l.x - 47 + o.DataPointX + "px", o.DataPoint.style.top = s.y + l.y - 5 + o.DataPointY + "px", o.DataPoint.innerHTML = t, o.DataPointTimeOut && clearTimeout(o.DataPointTimeOut), o.DataPointTimeOut = setTimeout(o.DataPointHide, n), o.DataPointObject = r;
}, rothConversion.DataPointHide = function () {
    var e = rothConversion;
    e.DataPoint.style.display = "none", e.DataPointTimeOut && clearTimeout(e.DataPointTimeOut), e.DataPointTimeOut = -1, e.DataPointObject = null;
}, rothConversion.DataPointOffset = function () {
    var e = rothConversion.DataPoint.offsetParent;
    if (e) {
        var t = rothConversion.getScreenCoord(0, 0, e);
        return {
            x: -t.x,
            y: -t.y
        };
    }
    return {
        x: 0,
        y: 0
    };
}, rothConversion.DefnPointTimeOut = -1, rothConversion.DefnPoint = null, rothConversion.DefnPointX = 5, rothConversion.DefnPointY = 19, rothConversion.DefnPointShow = function (e, t, i, a, r, n) {
    var o = rothConversion;
    if (o.DefnPointTimeOut && clearTimeout(o.DefnPointTimeOut), o.DefnPoint && o.DefnPointHide(), r || (r = 2500), o.DefnPoint = e, e.style.display = "block", o.getScreenCoord(t, i, a), o.DataPointOffset(), e.style.left = o.DefnPointX + "px", e.style.top = o.DefnPointY + "px", e.setAttribute("aria-hidden", "false"), o.DefnPointTimeOut = setTimeout(o.DefnPointHide, r), n) try {
        document.getElementById("rothConversion-POCLOSE-" + n).focus();
    } catch (e) { }
}, rothConversion.DefnPointHide = function (e) {
    var t = rothConversion;
    if (t.DefnPoint.style.display = "none", t.DefnPoint.setAttribute("aria-hidden", "true"), t.DefnPointTimeOut && clearTimeout(t.DefnPointTimeOut), t.DefnPointTimeOut = -1, t.DefnPoint = null, e) try {
        document.getElementById("rothConversion-" + e).focus();
    } catch (e) { }
}, rothConversion.sDropperTitle = '<div class=><img src="" title="Click to Show Inputs" alt="Click to Show Inputs" style=\'vertical-align:middle;\'/> **ICON**</div><div class=rothConversionToggleTitle>**TITLE_TEXT**</div>', rothConversion.DropperDefined = function (e) {
    return document.getElementById("rothConversion-P-" + e);
}, rothConversion.DivDefined = function (e) {
    return document.getElementById("rothConversion-D-" + e);
}, rothConversion.Dropper = function (e, t, i, a, r, n) {
    var o = this,
        s = rothConversion;
    s.iDropperCount += 1;
    var l = s.parameters.get("DROPPER_OPEN" + Math.floor(s.droppers.length + 1), t);
    t = !!s.IE7and8 || l, o.getOpen = i || false, o.getClosed = a || false;
    var E = o._idDropper = document.getElementById("rothConversion-P-" + e);
    E.setAttribute("role", "button"), n && (E.style.display = "none");
    var d = o._idDrop = document.getElementById("rothConversion-D-" + e),
        h = o._idDroppee = document.getElementById("rothConversion-E-" + e);
    if (d && (d.className = "rothConversionDrop"), h && (h.className = "rothConversionDroppee"), E.className = "rothConversionDropper", E.tabIndex = "0", s.IE7and8 && (E.style.paddingRight = "0"), h.style.display = "block", h.style.width = "100%", o._iHeight = h.offsetHeight, !o._iHeight || s.iDPDroppeeForceSize) {
        o._iHeight = 0;
        for (var p = h.getElementsByTagName("div"), _ = 0; _ < p.length; _++) "rothConversionInputContainer" == p[_].className && (o._iHeight += s.iDPRowHeight);
        o._iHeight += 10;
    }
    o.InCalculator = !r, o._sInnerHTML = E.innerHTML, o._sName = e, o.sExtraClass = !!s.DropperColors && s.DropperColors.length >= s.iDropperCount && s.DropperColors[s.iDropperCount - 1], o.AddEvents(), o.show(!!t), t ? (h.style.height = o._iHeight + "px", h.style.overflow = "visible", E.setAttribute(s.sExpand, "true")) : (h.style.height = "0px", h.style.display = "none", h.style.visibility = "hidden", E.setAttribute(s.sExpand, "false")), s.IE7and8 && !l && setTimeout(function () {
        rothConversion.inCommandTask(false), o.toggle();
    }, 1001);
}, rothConversion.Dropper.prototype.AddEvents = function () {
    var e = this,
        t = e._idDropper;
    t.addEventListener ? (t.addEventListener("click", function () {
        e.toggle(e);
    }, false), t.addEventListener("keypress", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return rothConversion.Dropper.stopBubble(e);
    }, false), t.addEventListener("keydown", function (t) {
        if (32 == t.keyCode || 13 == t.keyCode) return e.toggle(), rothConversion.Dropper.stopBubble(t);
    }, false)) : (t.attachEvent("onclick", function () {
        e.toggle(e);
    }), t.attachEvent("onkeypress", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return rothConversion.Dropper.stopBubble(e);
    }), t.attachEvent("onkeydown", function (t) {
        if (32 == t.keyCode || 13 == t.keyCode) return e.toggle(), rothConversion.Dropper.stopBubble(t);
    }));
}, rothConversion.Dropper.prototype.setHidden = function (e) {
    this._idDrop.style.display = "none", this._idDroppee.style.display = "none";
}, rothConversion.Dropper.prototype.setShown = function (e) {
    this._idDrop.style.display = "block", this._idDroppee.style.display = "block";
}, rothConversion.Dropper.prototype.setBackground = function (e) {
    var t = this;
    t._idDrop && (t._idDrop.style.backgroundColor = e), t._idDroppee.style.backgroundColor = e;
}, rothConversion.Dropper.prototype.setText = function (e) {
    var t = this,
        i = t.getOpen,
        a = t.getClosed,
        r = t._bShow;
    e || (e = r && i ? "function" == typeof i ? i() : i : !r && a ? "function" == typeof a ? a() : a : t._sInnerHTML), t._idDropper.innerHTML = rothConversion.setToggleTitleText(e, t, rothConversion);
}, rothConversion.Dropper.prototype.show = function (e) {
    this._bShow = e, this.setText();
}, rothConversion.Dropper.prototype.toggle = function () {
    if (!rothConversion.inCommandTask(true)) {
        var e = this,
            t = e._idDroppee,
            i = rothConversion.deviceNoTransition || rothConversion.IE7and8 ? 0 : 8;
        t.style.overflow = "hidden", e._bShow ? (rothConversion.IE7and8 ? t.style.display = "none" : t.style.height = "0px", e._bShow = false, e.show(), rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px", setTimeout(function () {
            rothConversion.inCommandTask(false), t.style.visibility = "hidden", t.style.display = "none", e._idDropper.setAttribute(rothConversion.sExpand, "false");
        }, 100)) : (t.style.display = "block", t.style.visibility = "visible", e._count = 0, rothConversion._iInterval = setInterval(function () {
            e.open(t.style, e._iHeight, i);
        }, 25));
    }
}, rothConversion.Dropper.stopBubble = function (e) {
    return e.cancelBubble = true, e.returnValue = false, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), false;
}, rothConversion.Dropper.prototype.open = function (e, t, i) {
    var a = this,
        r = a._count;
    if (r >= i) return clearInterval(rothConversion._iInterval), rothConversion.IE7and8 || (e.height = t + "px"), rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px", void setTimeout(function () {
        rothConversion.inCommandTask(false), a.show(true), a._idDropper.setAttribute(rothConversion.sExpand, "true"), a._idDroppee.style.overflow = "visible";
    }, 100);
    r >= i - 2 && (r -= 0.5), r++, e.height = t * (r / i) + "px", rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px", a._count = r;
}, rothConversion.addDiv = function (e, t, i) {
    var a = document.getElementById("rothConversion-D-" + e);
    return a && (a.className = "rothConversionInputDiv" + (i ? " " + i : ""), t && (a.style.backgroundColor = t)), a;
}, rothConversion.addDropper = function (e, t) {
    return t && e.setBackground(t), rothConversion.droppers.set(e._sName, e), e;
}, rothConversion.setToggleTitleText = function (e, t, i, a) {
    e || (e = "");
    var r = e.indexOf("<"),
        n = e.indexOf("|"),
        o = ((r = r > 0 && n > 0 ? r > n ? n : r : r < n ? n : r) > 0 ? e.substring(0, r) : e).trim();
    "." == o.charAt(o.length - 1) && (o = o.slice(0, -1)), o.charAt(o.length - 1) != rothConversion.Colon.trim() && (o += rothConversion.Colon);
    var s = "",
        l = "",
        E = "";
    t && (s = t._bShow ? i.sToggleAltTextOpen : i.sToggleAltTextClose, l = t._bShow ? i.sToggleClose : i.sToggleOpen, E = t._bShow ? i.sExpanded : i.sCollapse);
    var d = rothConversion.sToggleTitle,
        h = "",
        p = e.indexOf("|"),
        _ = a || !t ? "" : i.sToggleIcon;
    return !a && t || (l = "", s = ""), p > -1 ? (d = rothConversion.sToggleTitle2, h = e.substring(p + 1), e = e.substring(0, p)) : t && !a || (d = rothConversion.sToggleTitle1), null != t && t.sExtraClass && (d = rothConversion.replace("**EXTRA_CLASS**", t.sExtraClass, d)), d.replace("**IMG_TEXT**", s).replace("**SUMMARY_TEXT**", o).replace("**TITLE_TEXT**", e).replace("**TITLE_TEXT2**", h).replace("**ICON**", l).replace("**IMG**", _).replace("**TITLE_CLASS**", i.sToggleTitleClass).replace("**TITLE_CLASS**", i.sToggleTitleClass).replace("**EXPANDED**", E);
}, rothConversion.setDropBox = function (e, t) {
    t += "";
    for (var i = 0; i < e.options.length; i++)
        if (e.options[i].value == t) {
            e.options[i].selected = true;
            break;
        }
    return i;
}, rothConversion.getDropBox = function (e, t, i, a, r) {
    r = r ? ' class="' + r + '" ' : "";
    for (var n = (a = a || i).length, o = i.length, s = "<select name=" + e + " id=rothConversion-" + e + r + ">", l = 0; l < o; l++) {
        var E = i[l] == t ? " selected='selected' " : "";
        s += "<option value='" + i[l] + "' " + E + ">" + (l >= n ? i[l] : a[l]);
    }
    return s += "</select>", rothConversion.InputModern && (s = "<div id=rothConversion-" + e + r + "Div >" + s + "</div>"), s;
}, rothConversion.getTermChoice = function (e, t, i, a, r, n, o, s, l) {
    var E = new Array,
        d = new Array;
    n = n || "", o = o || false, l = l || 1;
    for (var h = 0, p = rothConversion.parameters.get("TERM_SHOW_ADDITIONAL", 7), _ = l; _ <= a; _++)(i && _ <= r || _ % 5 == 0 || _ == p) && 0 == (0 == p && (5 == _ || 25 == _ || 35 == _)) && (E[h] = _ + " " + (1 == _ ? rothConversion.MSG_YEAR_LBL : rothConversion.MSG_YEARS_LBL) + (_ > r ? n : ""), d[h] = _, h++);
    return s ? rothConversion.getDropBox(e, t, d, E, o) : {
        d: E,
        v: d
    };
}, rothConversion.getMortgageTermChoice = function (e, t, i) {
    var a = rothConversion;
    return a.getTermChoice(e, t, a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageShowAll), a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageTermMax), a.parameters.get("MORTGAGE_SHOW_MAX", a.Default.MortgageShowAllMax), "", false, i, a.parameters.get("MORTGAGE_TERM_MIN", a.Default.MortgageTermMin));
}, rothConversion.getMortgageTermDrop = function (e, t) {
    return rothConversion.getMortgageTermChoice(e, t, true);
}, rothConversion.getMortgageTermList = function () {
    return rothConversion.getMortgageTermChoice("", 0, false);
}, rothConversion.iGraphFixedWidth = 0, rothConversion.gScaleLabel = ["", "Thousands of ", "Millions of ", "Billions of "], rothConversion.gScaleLabelMax = [0, 1e5, 1e8, 1e11], rothConversion.gScaleLabelFactor = [1, 1e3, 1e6, 1e9], rothConversion.gFont = ["Arial", "Arial", "Arial", "Arial", "Arial", "Arial"], rothConversion.gFontStyle = ["bold", "bold", "", "", "bold", ""], rothConversion.gFontSize = [13, 10, 10, 10, 10, 7], rothConversion.g = new Object, rothConversion.g.sToggleAltTextClose = "press spacebar to show graph", rothConversion.g.sToggleAltTextOpen = "press spacebar to hide graph", rothConversion.g.sNewGraphPleaseComplete = "please complete inputs to view graph", rothConversion.g.sToggleTitleClass = "rothConversionGraphTitle", rothConversion.g.sToggleIcon = "rothConversionGraphIcon", rothConversion.g.sToggleOpen = "[+]", rothConversion.g.sToggleClose = "[-]", rothConversion.g.sExpanded = "", rothConversion.g.sCollapse = "", rothConversion.g.sExpand = "aria-expanded", rothConversion.gHeight = 250, rothConversion.gHeightReport = 350, rothConversion.gWidthMax = 850, rothConversion.gLegendMin = 400, rothConversion.gColorBackground = "#FFFFFF", rothConversion.gColorForeground = "#000000", rothConversion.gColorGrid = "#BBBBBB", rothConversion.gColorGridBackground1 = "#FFFFFF", rothConversion.gColorGridBackground2 = "#CCCCCC", rothConversion.gColorAxisLine = "#666666", rothConversion.gColorText = "#000000", rothConversion.gColorList = ["#000055", "#7B68EE", "#64A650", "#FFF200", "#5f007f", "#F15A22", "#B72467", "#6DC8BF", "#FF0000", "#ff00ff", "#ffff00", "#00ffff", "#7f007f", "#7f0000", "#007f7f", "#0000ff", "#00c8ff", "#60ffff", "#bfffbf", "#ffff90", "#a0c8ef"], rothConversion.gPleaseComplete = "", rothConversion.gWidthAdjust = 0, rothConversion.gPIE = 0, rothConversion.gCOLUMN = 1, rothConversion.gCATEGORIES = 2, rothConversion.gSTACKED = 3, rothConversion.gLINE = 4, rothConversion.gGetFontHeight = function (e) {
    return Math.ceil(e.measureText("m").width + 2);
}, rothConversion.gDarker = function (e, t) {
    "#" == e[0] && (e = e.slice(1));
    var i = parseInt(e, 16),
        a = (i >> 16) * t;
    a > 255 ? a = 255 : a < 0 && (a = 0);
    var r = (i >> 8 & 255) * t;
    r > 255 ? r = 255 : r < 0 && (r = 0);
    var n = (255 & i) * t;
    return n > 255 ? n = 255 : n < 0 && (n = 0), "rgb(" + Math.floor(a) + "," + Math.floor(r) + "," + Math.floor(n) + ")";
}, rothConversion.gTitle = new Object, rothConversion.gGraphLine = new Object, rothConversion.gAxis = new Object, rothConversion.gGraphColumn = new Object, rothConversion.gGraphPie = new Object, rothConversion.gTitle.HORIZONTAL = 0, rothConversion.gTitle.VERTICAL = 1, rothConversion.gLegend = new Object, rothConversion.gLegend.LEFT = 0, rothConversion.gLegend.RIGHT = 1, rothConversion.gLegend.TOP = 3, rothConversion.gLegend.BOTTOM = 4, rothConversion.gLegend.TOP_LEFT = 5, rothConversion.gLegend.TOP_RIGHT = 6, rothConversion.gLegend.BOTTOM_LEFT = 7, rothConversion.gLegend.BOTTOM_RIGHT = 8, rothConversion.gLegend.GRID_TOP_RIGHT = 9, rothConversion.gLegend.GRID_TOP_LEFT = 10, rothConversion.gLegend.GRID_BOTTOM_RIGHT = 11, rothConversion.gLegend.GRID_BOTTOM_LEFT = 12, rothConversion.gLegend.GRID_TOP = 13, rothConversion.gLegend.GRID_BOTTOM = 14, rothConversion.gLegend.GRID_RIGHT = 15, rothConversion.gLegend.GRID_LEFT = 16, rothConversion.gLegend.TOP_GRID_ALIGN = 17, rothConversion.gLegend.BANDED_LEGEND = 0, rothConversion.gLegend.DATA_SERIES_LEGEND = 1, rothConversion.gLegend.CATEGORY_LEGEND = 2, rothConversion.gLegend.ROUND_LEGEND = 0, rothConversion.gLegend.SQUARE_LEGEND = 1, rothConversion.gLegend._sSHADOW_COLOR = "#222222", rothConversion.gTITLE_FONT = 0, rothConversion.gBOLD_FONT = 1, rothConversion.gPLAIN_FONT = 2, rothConversion.gLEGEND_FONT = 3, rothConversion.gLEGEND_FONT_BOLD = 4, rothConversion.gLEGEND_FONT_TINY = 5, rothConversion.gSCALE = rothConversion.VML ? 1 : 2, rothConversion.ggetFont = function (e) {
    var t = rothConversion,
        i = t.gFontSize[e];
    return t.gFontStyle.length <= e && e == t.gLEGEND_FONT_TINY && (e -= 3, i = t.gFontSize[e] - 3), t.gFontStyle.length <= e && (e -= 2, i = t.gFontSize[e]), ((t.VML ? "" : t.gFontStyle[e] + " ") + Math.floor(t.gSCALE * i) + "pt " + t.gFont[e]).trim();
}, rothConversion.gBORDER_WIDTH = 10 * rothConversion.gSCALE, rothConversion.gLegend._iSIDE_BORDER_WIDTH = 10 * rothConversion.gSCALE, rothConversion.gLegend._iTOPBOTTOM_BORDER_WIDTH = 3 * rothConversion.gSCALE, rothConversion.gLegend._iBOX_SIDE_LENGTH = 12 * rothConversion.gSCALE, rothConversion.gLegend._iCIR_SIDE_LENGTH = 7 * rothConversion.gSCALE, rothConversion.gLegend._iBOX_TO_LABEL_SPACE = 10 * rothConversion.gSCALE, rothConversion.gLegend._sSHADOW_BLUR_X = 2 * rothConversion.gSCALE, rothConversion.gLegend._sSHADOW_BLUR_Y = 2 * rothConversion.gSCALE, rothConversion.gLegend._LINE_WIDTH = rothConversion.gSCALE, rothConversion.gLegend._LINE_SPACE = 7.5 * rothConversion.gSCALE, rothConversion.gLegend._PAD = rothConversion.gSCALE, rothConversion.gGraphPie._LINE_WIDTH = rothConversion.gSCALE, rothConversion.gGraphLine._CLICKABLE = 7 * rothConversion.gSCALE, rothConversion.gGraphLine._sSHADOW_BLUR = 0, rothConversion.gGraphLine._LINE_WIDTH = 3 * rothConversion.gSCALE, rothConversion.gGraphLine._sSHADOW_BLUR_X = 0, rothConversion.gGraphLine._sSHADOW_BLUR_Y = 0, rothConversion.gGraphColumn._LINE_WIDTH = rothConversion.gSCALE, rothConversion.giGridLineWidth = rothConversion.gSCALE, rothConversion.gAxis.TICK_LENGTH = 3 * rothConversion.gSCALE, rothConversion.gAxis.LABEL_SPACE_LENGTH = 5 * rothConversion.gSCALE, rothConversion.gAxis.LINE_WIDTH = rothConversion.gSCALE, rothConversion.gAxis.LEFT = 0, rothConversion.gAxis.RIGHT = 1, rothConversion.gAxis.TOP = 3, rothConversion.gAxis.BOTTOM = 4, rothConversion.gGraphColumn.LINE_NONE = 0, rothConversion.gGraphColumn.LINE_ON_FIRST_ONLY = 2, rothConversion.gGraphColumn.LINE_ON_ALL = 3, rothConversion.gGraphColumn._sSHADOW_COLOR = "#929292", rothConversion.gGraphColumn._sSHADOW_BLUR = 8, rothConversion.gGraphColumn._sSHADOW_BLUR_X = 3 * rothConversion.gSCALE, rothConversion.gGraphColumn._sSHADOW_BLUR_Y = 2 * rothConversion.gSCALE * -1, rothConversion.gGraphPie._LINE_JOIN = "round", rothConversion.gGraphPie._LINE_COLOR = "#000000", rothConversion.gGraphLine.AREA_NONE = 0, rothConversion.gGraphLine.AREA_ALL = 1, rothConversion.gGraphLine.AREA_FIRST_ONLY = 2, rothConversion.gGraphLine.AREA_SECOND_ONLY = 3, rothConversion.gGraphLine.AREA_BANDED = 4, rothConversion.gGraphLine._sSHADOW_COLOR = "#929292", rothConversion.sgvStr = function (e) {
    return null == e ? null : e.replace(/%%/g, '"').replace(/@@/g, "|").replace(/\^\^/g, ",").replace(/!!/, "~");
}, rothConversion.spvStr = function (e) {
    return null == e ? null : e.replace ? e.replace(/"/g, "%%").replace(/\|/g, "@@").replace(/,/g, "^^").replace(/~/g, "!!") : e;
}, rothConversion.spvColor = function (e) {
    return e || "#000000";
}, rothConversion.sgvColor = function (e) {
    return e || "#000000";
}, rothConversion.sgv = function (e, t) {
    return null == e || "null" == e || " " == e ? t : "string" == typeof t ? rothConversion.sgvStr(e) : "boolean" == typeof t ? "" == e ? t : "true" == e.trim() : "number" == typeof t ? parseFloat(e) : void 0;
}, rothConversion.sgvNumList = function (e) {
    if (null == e) return null;
    if ("null" == e) return null;
    if ("" == e.trim()) return null;
    for (var t = e.split(","), i = rothConversion.FloatArray(t.length), a = 0; a < t.length; a++) i[a] = parseFloat(t[a]);
    return i;
}, rothConversion.sgvStrList2 = function (e) {
    var t = [];
    if (null == e) t = null;
    else if ("null" == e) t = null;
    else if ("" == e.trim()) t = null;
    else
        for (var i = e.split("~"), a = 0; a < i.length; a++) t[a] = rothConversion.sgvStrList(i[a]);
    return t;
}, rothConversion.sgvStrList = function (e) {
    var t = [];
    if (null == e) t = null;
    else if ("null" == e) t = null;
    else if ("" == e.trim()) t = null;
    else
        for (var i = e.split(","), a = 0; a < i.length; a++) t[a] = rothConversion.sgvStr(i[a]);
    return t;
}, rothConversion.spvStringList2 = function (e) {
    var t = rothConversion;
    if (null == e) return "null";
    for (var i = t.spvStringList(e[0]), a = 1; a < e.length; a++) i += "~" + t.spvStringList(e[a]);
    return i;
}, rothConversion.spvStringList = function (e) {
    var t = rothConversion;
    if (null == e) return "null";
    for (var i = t.spvStr(e[0]), a = 1; a < e.length; a++) i += "," + t.spvStr(e[a]);
    return i;
}, rothConversion.spvColorList = function (e) {
    var t = rothConversion;
    if (null == e) return "null";
    for (var i = t.spvStr(e[0]), a = 1; a < e.length; a++) i += "," + t.spvColor(e[a]);
    return i;
}, rothConversion.spvFloatList = function (e, t) {
    var i = rothConversion;
    if (null == e) return "null";
    for (var a = "" + i.input(e[0], t), r = 1; r < e.length; r++) a += "," + i.input(e[r], t);
    return a;
}, rothConversion.gNewGraph = function (e, t, i, a, r, n, o, s) {
    var l = document.getElementById("rothConversion-C-" + t);
    if (l) {
        var E = rothConversion;
        a = !E.parameters.get("GRAPH_OPEN" + Math.floor(E.gGraphs.length + 1), !(E.VML && !o || a));
        var d = E.gGraphs[E.gGraphs.length] = new E.gCanvas(l, e, t, i, a, r, n, o, s);
        return e != E.gPIE && e != E.gCATEGORIES || (d._bPopDetail = false), d;
    }
    return null;
}, rothConversion.gCanvas = function (e, t, i, a, r, n, o, s, l) {
    var E = this,
        d = rothConversion,
        h = E.wCanvas = document.getElementById("rothConversion-G-" + i);
    if (E._bPopDetail = true, E._bPopCat = true, E.wContainer = e, E.wContainer.className = "rothConversionGraphContainer", E.wCanvas.className = "rothConversionGraph", rothConversion.iGraphFixedWidth ? E.wContainer.style.width = rothConversion.iGraphFixedWidth + "px" : E.wContainer.style.width = "100%", "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(E.wCanvas), E._ctx = null, E.sTitle = o, E.TT = o, E.InCalculator = !s, E.bBorder = !l, E._sGraphType = t, E._gtGraphType = new d.gType(t), E.FONT_TITLE = d.ggetFont(d.gTITLE_FONT), E.FONT_BOLD = d.ggetFont(d.gBOLD_FONT), E.FONT_PLAIN = d.ggetFont(d.gPLAIN_FONT), E.FONT_LEGEND = d.ggetFont(d.gLEGEND_FONT), E.FONT_LEGEND_BOLD = d.ggetFont(d.gLEGEND_FONT_BOLD), E.FONT_LEGEND_TINY = d.ggetFont(d.gLEGEND_FONT_TINY), E._legend = new d.gGraphLegend(d.gLegend.RIGHT, this), E._grid = new d.gGrid(this), E._axisY = new d.gValueAxis(this), E._axisX = new d.gCategoryAxis(this), E._titleGraph = new d.gGraphTitle(E.sTitle), E._titleXAxis = new d.gGraphTitle(""), E._titleYAxis = new d.gGraphTitle(d.sCurrency), E._titleYAxis._iOrientation = d.gTitle.VERTICAL, E._vDataSeries = new Array, E._showItemLabel = false, E._showItemLabelFmt = d.FMT_DOLLARS, E._showItemLabelDecimals = E._iLimit = 0, E._showItemLabelOnTop = E._showLabelFactor = true, E._iArea = d.gGraphLine.AREA_NONE, E._cGrid = d.gColorGrid, E._cGridBackground1 = d.gColorGridBackground1, E._cGridBackground2 = d.gColorGridBackground2, E._cAxisLine = d.gColorAxisLine, E._cTextColor = d.gColorText, E._sGraphCategories = E._sGraphCategoriesBold = E._sValueLabels = E._showItemValues = null, E._colorList = d.gColorList, E._iDataSeriesCount = 0, a) {
        var p = E.wTitle = document.createElement("DIV");
        p.className = E.InCalculator && E.bBorder ? "rothConversionGraphDropper" : "rothConversionDropperReport", p.setAttribute("role", "button"), E.InCalculator && (p.tabIndex = "0"), d.VML && (p.style.paddingRight = "0"), e.insertBefore(p, h);
    }
    if (E.wTitle && !s && (E.wTitle.addEventListener ? (E.wTitle.addEventListener("click", function (e) {
        E.toggle();
    }, false), E.wTitle.addEventListener("keypress", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return rothConversion.Dropper.stopBubble(e);
    }, false), E.wTitle.addEventListener("keydown", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return E.toggle(), rothConversion.Dropper.stopBubble(e);
    }, false)) : (E.wTitle.attachEvent("onclick", function (e) {
        E.toggle();
    }), E.wTitle.attachEvent("onkeypress", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return rothConversion.Dropper.stopBubble(e);
    }), E.wTitle.attachEvent("onkeydown", function (e) {
        if (32 == e.keyCode || 13 == e.keyCode) return E.toggle(), rothConversion.Dropper.stopBubble(e);
    }))), h) {
        var _ = E._gtGraphType;
        h.addEventListener ? (h.addEventListener("click", function (e) {
            var t = rothConversion.getMouseCoord(e, h),
                i = _.getWedgeValue(t.x, t.y);
            i && rothConversion.DataPointShow(e, i.s, i.x, i.y, h);
        }, false), h.addEventListener("mousemove", function (e) {
            var t = rothConversion.getMouseCoord(e, h),
                i = _.getWedgeValue(t.x, t.y);
            i && rothConversion.DataPointShow(e, i.s, i.x, i.y, h);
        }, false)) : (h.attachEvent("onclick", function (e) {
            var t = rothConversion.getMouseCoord(e, h),
                i = _.getWedgeValue(t.x, t.y);
            i && rothConversion.DataPointShow(e, i.s, i.x, i.y, h);
        }), h.attachEvent("onmousemove", function (e) {
            var t = rothConversion.getMouseCoord(e, h),
                i = _.getWedgeValue(t.x, t.y);
            i && rothConversion.DataPointShow(e, i.s, i.x, i.y, h);
        }));
    }
    E.setBackground(n), this.setWidth(), E.setHeight(s ? d.gHeightReport : d.gHeight), E.show(!r, E.sTitle);
}, rothConversion.gCanvas.prototype.setShown = function (e) {
    this.wContainer.style.display = "block", this.wContainer.style.width = "100%", this.setWidth(true);
}, rothConversion.gCanvas.prototype.setHidden = function (e) {
    this.wContainer.style.display = "none";
}, rothConversion.gCanvas.prototype.setTitle = function (e) {
    this.sTitle = e;
}, rothConversion.gCanvas.prototype.toggle = function () {
    if (!rothConversion.Error && !rothConversion.InComplete && !rothConversion.inCommandTask(true)) {
        var e = this,
            t = e.wCanvas,
            i = rothConversion.deviceNoTransition || rothConversion.VML ? 0 : 10;
        this._bShow ? (rothConversion.VML && (t.style.display = "none"), t.style.overflow = "hidden", this._bShow = false, this.show(), setTimeout(function () {
            rothConversion.inCommandTask(false);
        }, 100)) : (this._count = 0, rothConversion.VML ? setTimeout(function () {
            t.style.overflow = "hidden", t.style.display = "block", t.style.visibility = "visible", e.show(true), e.paint(null, true), setTimeout(function () {
                rothConversion.inCommandTask(false);
            }, 10);
        }, 300) : (t.style.overflow = "hidden", t.style.display = "block", t.style.visibility = "visible", this.paint(null, true), rothConversion._iInterval = setInterval(function () {
            e.open(e.iGraphHeight, i);
        }, 25)));
    }
}, rothConversion.gCanvas.prototype.show = function (e, t) {
    if (this.wTitle) {
        var i = this;
        i._bShow = e;
        var a = i.wTitle,
            r = 0;
        e ? (r = i.iGraphHeight, a.setAttribute(rothConversion.g.sExpand, "true")) : a.setAttribute(rothConversion.g.sExpand, "false"), a.innerHTML = rothConversion.setToggleTitleText(t || this._titleGraph.s, i, rothConversion.g, !this.InCalculator);
        var n = a.offsetHeight;
        this.wContainer.style.height = (n || 28) + r + "px", this.InCalculator ? rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px" : rothConversion.Calculator.style.height = "0px";
    }
}, rothConversion.gCanvas.prototype.open = function (e, t) {
    if (this._count >= t) return clearInterval(rothConversion._iInterval), this.show(true), void setTimeout(function () {
        rothConversion.inCommandTask(false);
    }, 100);
    this._count >= t - 2 && (this._count -= 0.5), this._count++;
    var i = e * (this._count / t);
    this.wContainer.style.height = this.wTitle.offsetHeight + i + "px", this.InCalculator && (rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px");
}, rothConversion.gCanvas.prototype.setProperty = function (e) {
    var t = e.split("|"),
        i = rothConversion.sgv,
        a = rothConversion.sgvStrList,
        r = this;
    r.removeAll();
    for (var n = 0; n < t.length; n++) switch (n) {
        case 0:
            t[n] != r._gtGraphType._iGraphType && (this._gtGraphType = new rothConversion.gType(t[n]));
            break;
        case 1:
            r._showItemLabel = i(t[n], r._showItemLabel);
            break;
        case 2:
            r._showItemLabelFmt = i(t[n], r._showItemLabelFmt);
            break;
        case 3:
            r._showItemLabelDecimals = i(t[n], r._showItemLabelDecimals);
            break;
        case 4:
            r._showItemLabelOnTop = i(t[n], r._showItemLabelOnTop);
            break;
        case 5:
            r._iArea = i(t[n], r._iArea);
            break;
        case 6:
            r._cBackground = i(t[n], r._cBackground);
            break;
        case 7:
            r._cGrid = i(t[n], r._cGrid);
            break;
        case 8:
            r._cGridBackground1 = i(t[n], r._cGridBackground1);
            break;
        case 9:
            r._cGridBackground2 = i(t[n], r._cGridBackground2);
            break;
        case 10:
            r._cAxisLine = i(t[n], r._cAxisLine);
            break;
        case 11:
            r._cTextColor = i(t[n], r._cTextColor);
            break;
        case 12:
            r._iLimit = i(t[n], r._iLimit);
            break;
        case 13:
            r._sGraphCategories = a(t[n]);
            break;
        case 14:
            r._sGraphCategoriesBold = a(t[n]);
            break;
        case 15:
            r._sValueLabels = a(t[n]);
            break;
        case 16:
            r._colorList = a(t[n]);
            break;
        case 17:
            r._showItemValues = i(t[n], r._showItemValues);
            break;
        case 18:
            r._bPopDetail = i(t[n], r._bPopDetail);
            break;
        case 19:
            r._bPopCat = i(t[n], r._bPopCat);
            break;
        case 20:
            r._showLabelFactor = i(t[n], r._showLabelFactor);
    }
}, rothConversion.gCanvas.prototype.getProperty = function () {
    var e = rothConversion.spvStringList,
        t = this,
        i = rothConversion;
    return t._gtGraphType._iGraphType + "|" + t._showItemLabel + "|" + t._showItemLabelFmt + "|" + t._showItemLabelDecimals + "|" + t._showItemLabelOnTop + "|" + t._iArea + "|" + i.spvColor(t._cBackground) + "|" + i.spvColor(t._cGrid) + "|" + i.spvColor(t._cGridBackground1) + "|" + i.spvColor(t._cGridBackground2) + "|" + i.spvColor(t._cAxisLine) + "|" + i.spvColor(t._cTextColor) + "|" + t._iLimit + "|" + e(t._sGraphCategories) + "|" + e(t._sGraphCategoriesBold) + "|" + e(t._sValueLabels) + "|" + i.spvColorList(t._colorList) + "|" + i.spvStringList2(t._showItemValues) + "|" + t._bPopDetail + "|" + t._bPopCat + "|" + t._showLabelFactor;
}, rothConversion.gCanvas.prototype.getColor = function (e) {
    return e -= 1, e %= this._colorList.length, this._colorList[e];
}, rothConversion.gCanvas.prototype.blank = function () {
    this.removeAll(), this.paint(), this.wTitle && this.setTitleGraph(rothConversion.gPleaseComplete);
}, rothConversion.gCanvas.prototype.getDataSeriesCount = function () {
    return this._iDataSeriesCount;
}, rothConversion.gCanvas.prototype.getDataProperties = function () {
    for (var e = "", t = 0; t < this._iDataSeriesCount; t++) e += "|" + this._vDataSeries[t].getProperty();
    return e.substring(1);
}, rothConversion.gCanvas.prototype.getValueCount = function () {
    for (var e = this._iDataSeriesCount, t = this._iLimit, i = 0; e;)(t > (i = this._vDataSeries[e - 1].getValueCount()) || 0 == t) && (t = i), e--;
    return t;
}, rothConversion.gCanvas.prototype.getMinValue = function () {
    if (null == this._vDataSeries) return 0;
    for (var e = this._vDataSeries[0].getMinValue(this._iLimit), t = e, i = 1; i < this._iDataSeriesCount; i++)(t = this._vDataSeries[i].getMinValue(this._iLimit)) < e && (e = t);
    return e;
}, rothConversion.gCanvas.prototype.getMaxValue = function () {
    if (null == this._vDataSeries) return 0;
    var e = 0,
        t = 0;
    if (this._gtGraphType._iGraphType == rothConversion.gSTACKED) {
        for (var i = new Array, a = 0; a < this._vDataSeries.length; a++)
            for (var r = this._vDataSeries[a]._fValues, n = 0; n < r.length; n++) i[n] = r[n] + (i[n] ? i[n] : 0);
        return Math.max.apply(Math, i);
    }
    for (t = e = this._vDataSeries[0].getMaxValue(this._iLimit), n = 1; n < this._iDataSeriesCount; n++)(t = this._vDataSeries[n].getMaxValue(this._iLimit)) > e && (e = t);
    return e;
}, rothConversion.gCanvas.prototype.add = function (e) {
    if (null == e);
    else if ("string" == typeof e)
        if ("" == e.trim());
        else
            for (var t = e.split("|"), i = 0; i < t.length; i++) this._vDataSeries[this._iDataSeriesCount++] = new rothConversion.gGraphDataSeries(t[i], null, null, null);
    else this._vDataSeries[this._iDataSeriesCount] = e, this._iDataSeriesCount++;
}, rothConversion.gCanvas.prototype.removeAll = function () {
    this._vDataSeries = new Array, this._iDataSeriesCount = 0, this._iLimit = 0, this._gtGraphType.syncSetup(this), this._legend._cBGColor = null;
}, rothConversion.gCanvas.prototype.paint = function (e, t) {
    if (this.sTitle && this.setTitleGraph(this.sTitle), this.wCanvas.getContext && (t || this._bShow)) {
        var i = this.wCanvas.getContext("2d");
        if (0 != i.canvas.width && 0 != i.canvas.height) {
            i && (this._ctx = i);
            var a = this._ctx.canvas.width,
                r = this._ctx.canvas.height;
            0 != this._iDataSeriesCount ? (i.fillStyle = this._cBackground, i.fillRect(0, 0, a, r), this._gtGraphType.paint(this._ctx, a, r)) : (i.fillStyle = this._cBackground, i.fillRect(0, 0, a, r));
        }
    }
}, rothConversion.gCanvas.prototype.setGraphCategories = function (e) {
    this._sGraphCategories = e;
}, rothConversion.gCanvas.prototype.setBackground = function (e) {
    this.wContainer.style.backgroundColor = e, this._cBackground = e;
}, rothConversion.gCanvas.prototype.setWidth = function (e, t) {
    var i = 0;
    t ? i = t : (this.wContainer.style.width = "100%", (i = this.wContainer.clientWidth) || (i = rothConversion.CalculatorWidth)), i > rothConversion.gWidthMax && (i = rothConversion.gWidthMax), i -= rothConversion.gWidthAdjust, this.wCanvas.style.width = this.wContainer.style.width = i + "px", this.wCanvas.width = i * rothConversion.gSCALE, this.iWidth = i, e && this.paint();
}, rothConversion.gCanvas.prototype.setHeight = function (e) {
    this.wCanvas.style.height = e + "px", this.iGraphHeight = e, this.wCanvas.height = e * rothConversion.gSCALE;
}, rothConversion.gCanvas.prototype.getBackground = function () {
    return this._cBackground;
}, rothConversion.gCanvas.prototype.setTitleGraph = function (e) {
    var t = this;
    t._titleGraph.s != e && (t.wTitle && (t.wTitle.innerHTML = rothConversion.setToggleTitleText(e, t, rothConversion.g, !t.InCalculator), t.InCalculator && (rothConversion.Calculator.style.height = rothConversion.Main.offsetHeight + "px")), t._titleGraph.setText(e));
}, rothConversion.gCanvas.prototype.setTitleTemplate = function () {
    for (var e = this.TT, t = 0; t < arguments.length; t++) e = e.replace("rothConversion" + (t + 1), arguments[t]);
    this.sTitle = e;
}, rothConversion.gCanvas.prototype.getFormat = function (e, t, i) {
    var a = "",
        r = this,
        n = r._showItemLabelFmt,
        o = r._showItemValues;
    return null == o ? a = rothConversion.format[n](e / (n == rothConversion.FMT_PERCENT && r._showLabelFactor ? 100 : 1), r._showItemLabelDecimals) : o.length > t && o[t].length > i && (a = o[t][i]), a;
}, rothConversion.gGraphDataSeries = function (e, t, i, a, r, n, o) {
    var s = this;
    s._iDecimals = o || 2;
    var l = e instanceof Array;
    if (!l && rothConversion.TypedArray && (l = e instanceof Float64Array), l) s._fValues = e, s._sSeriesTitle = t, s._cColor = i, s._sSeriesTitleBold = a || "", s._sSeriesPop = r || t, s._bNoPopDetails = !!n;
    else
        for (var E = e.split("~"), d = E.length, h = rothConversion.sgv, p = 0; p < d; p++) switch (p) {
            case 0:
                s._cColor = h(E[p], "#0000FF");
                break;
            case 1:
                s._sSeriesTitle = h(E[p], "");
                break;
            case 2:
                s._sSeriesTitleBold = h(E[p], "");
                break;
            case 3:
                s._fValues = rothConversion.sgvNumList(E[p]);
                break;
            case 4:
                s._sSeriesPop = h(E[p], s._sSeriesTitle);
                break;
            case 5:
                s._bNoPopDetails = h(E[p], false);
        }
}, rothConversion.gGraphDataSeries.prototype.getProperty = function () {
    var e = rothConversion;
    return this._cColor + "~" + e.spvStr(this._sSeriesTitle) + "~" + e.spvStr(this._sSeriesTitleBold) + "~" + e.spvFloatList(this._fValues, this._iDecimals) + "~" + e.spvStr(this._sSeriesPop);
}, rothConversion.gGraphDataSeries.prototype.getValueCount = function () {
    return null == this._fValues ? 0 : this._fValues.length;
}, rothConversion.gGraphDataSeries.prototype.getMinValue = function (e) {
    var t = this._fValues;
    if (null == t) return 0;
    var i = t[0],
        a = t.length;
    a > e && 0 != e && (a = e);
    for (var r = 1; r < a; r++) i > t[r] && (i = t[r]);
    return i;
}, rothConversion.gGraphDataSeries.prototype.getMaxValue = function (e) {
    var t = this._fValues;
    if (null == t) return 0;
    var i = t.length;
    i > e && 0 != e && (i = e);
    for (var a = t[0], r = i - 1; r > 0; r--) a < t[r] && (a = t[r]);
    return a;
}, rothConversion.gGraphTitle = function (e) {
    var t = this;
    t._iOrientation = rothConversion.gTitle.HORIZONTAL, t.s = e, t.f = "11pt Helvetica", t.c = "#000000", t.bShow = true, t.sText = "";
}, rothConversion.gGraphTitle.prototype.setProperty = function (e) {
    this.setText(rothConversion.sgv(e, ""));
}, rothConversion.gGraphTitle.prototype.getProperty = function () {
    return rothConversion.spvStr(this.s);
}, rothConversion.gGraphTitle.prototype.paint = function (e, t, i, a, r) {
    e.font = this.f, e.fillStyle = this.c, e.shadowBlur = "", e.shadowColor = "", e.shadowOffsetX = "", e.shadowOffsetY = "", e.textAlign = "center", e.textBaseline = "middle", 0 != this._iWidth && (this._iOrientation == rothConversion.gTitle.VERTICAL ? (e.save(), e.rotate(-Math.PI / 2), e.fillText(rothConversion.FTR(this.sText), -i - r / 2, t + a / 2), e.restore()) : e.fillText(rothConversion.FTR(this.sText), t + a / 2, i + r / 2));
}, rothConversion.gGraphTitle.prototype.setText = function (e) {
    this.s = e;
}, rothConversion.gGraphTitle.prototype.setFont = function (e) {
    this.f = e;
}, rothConversion.gGraphTitle.prototype.setColor = function (e) {
    this.c = e;
}, rothConversion.gGraphTitle.prototype.setTitle = function (e, t) {
    var i = 0,
        a = 0,
        r = t || "";
    if ("" != (r += "" == r && this.s == rothConversion.sCurrency ? "" : this.s || "") && this.bShow) {
        e.font = this.f;
        var n = a = rothConversion.gGetFontHeight(e) + 10;
        i = e.measureText(rothConversion.FTR(r)).width, this._iOrientation == rothConversion.gTitle.VERTICAL && (a = i, i = n);
    }
    this.sText = r, this._iHeight = a, this._iWidth = i;
}, rothConversion.gGraphLegend = function (e, t) {
    this._gGraph = t;
    var i = this;
    i._iShape = rothConversion.gLegend.SQUARE_LEGEND, i._iOrientation = e, i._legendType = rothConversion.gLegend.DATA_SERIES_LEGEND, i._border = false, i._cBGColor = null, i._iLegendWidth = 0, i.LINE_SPACE = rothConversion.gLegend._LINE_SPACE, i._bShow = true, i._cColor = "#000000", i._iXOffset = 0, i._iYOffset = 0, i._iWidthOffset = 0, i._iHeightOffset = 0, i._iMaxLegendLength = 0, i._iWidth = 0, i._iHeight = 0, i._iFontHeight = 0, i._iColorBoxYOffset = 0, i._iLabelOffset = 0, i._iColorBoxOffset = 0, i._iBORDER_WIDTH = 0;
}, rothConversion.gGraphLegend.prototype.setProperty = function (e) {
    for (var t = e.split("|"), i = rothConversion.sgv, a = this, r = 0; r < t.length; r++) switch (r) {
        case 0:
            a._cBGColor = i(t[r], a._cBGColor);
            break;
        case 1:
            a._iShape = i(t[r], a._iShape);
            break;
        case 2:
            a._iOrientation = i(t[r], a._iOrientation);
            break;
        case 3:
            a._border = i(t[r], a._border);
            break;
        case 4:
            a._iLegendWidth = i(t[r], a._iLegendWidth);
            break;
        case 5:
            a.LINE_SPACE = i(t[r], a.LINE_SPACE);
            break;
        case 6:
            a._bShow = i(t[r], a._bShow);
    }
}, rothConversion.gGraphLegend.prototype.getProperty = function () {
    var e = this;
    return null == e._cBGColor && (e._cBGColor = e._gGraph.getBackground()), e._cBGColor + "|" + e._iShape + "|" + e._iOrientation + "|" + e._border + "|" + e._iLegendWidth + "|" + e.LINE_SPACE + "|" + e._bShow;
}, rothConversion.gGraphLegend.prototype.setVisible = function (e) {
    this._bShow = e;
}, rothConversion.gGraphLegend.prototype.useOrientation = function (e) {
    var t = this._iOrientation;
    return this.bLegendSmall = false, e / rothConversion.gSCALE < rothConversion.gLegendMin && (t = rothConversion.gLegend.BOTTOM, this.bLegendSmall = true), t;
}, rothConversion.gGraphLegend.prototype.paint = function (e, t, i, a, r, n, o, s, l) {
    var E = this,
        d = E._iHeight,
        h = E._iWidth,
        p = this._iBORDER_WIDTH,
        _ = rothConversion.gLegend._iTOPBOTTOM_BORDER_WIDTH;
    n || (n = 0), o || (o = 0), s || (s = 0), l || (l = 0), e.textAlign = "left", e.textBaseline = "middle";
    var u = rothConversion.gLegend;
    switch (E.useOrientation(e.canvas.width)) {
        case u.TOP:
            r = d;
            break;
        case u.TOP_GRID_ALIGN:
            r = d, a = h, t = n;
            break;
        case u.BOTTOM:
            i += r - d, r = d;
            break;
        case u.LEFT:
            o > 0 && (i = o), l > 0 && (r = l), a = h;
            break;
        case u.RIGHT:
            o > 0 && (i = o), l > 0 && (r = l), t += a - h, a = h;
            break;
        case u.TOP_LEFT:
            r = d, a = h;
            break;
        case u.BOTTOM_LEFT:
            i += r - d, r = d, a = h;
            break;
        case u.TOP_RIGHT:
            t += a - h, r = d, a = h;
            break;
        case u.BOTTOM_RIGHT:
            i += r - d, t += a - h, r = d, a = h;
            break;
        case u.GRID_TOP_RIGHT:
            t = n - _ + s - h, i = o + _, a = h, r = d;
            break;
        case u.GRID_TOP_LEFT:
            t = n + _, i = o + _, a = h, r = d;
            break;
        case u.GRID_BOTTOM_RIGHT:
            t = n - _ + s - h, i = o - _ + l - d, a = h, r = d;
            break;
        case u.GRID_BOTTOM_LEFT:
            t = n + _, i = o - _ + l - d, a = h, r = d;
            break;
        case u.GRID_TOP:
            t = n, i = o + p, a = s, r = d;
            break;
        case u.GRID_BOTTOM:
            t = n, i = o - p + l - d, a = s, r = d;
            break;
        case u.GRID_LEFT:
            t = n + p, i = o, a = h, r = l;
            break;
        case u.GRID_RIGHT:
            t = n - p + s - h, i = o, a = h, r = l;
    }
    if (this._bShow) {
        var c = t + a / 2 - h / 2,
            T = i + r / 2 - d / 2;
        if (this._border && (e.fillStyle = this._cBGColor, e.fillRect(c - 0.5, T - 0.5, h, d), e.strokeStyle = this._gGraph._cTextColor, e.strokeRect(c - 0.5, T - 0.5, h, d)), this._legendType <= u.DATA_SERIES_LEGEND) return void this.drawDataSeriesLegend(e, c, T);
        this.drawCategoryLegend(e, c, T);
    }
}, rothConversion.gGraphLegend.prototype.drawDataSeriesLegend = function (e, t, i) {
    for (var a = this._gGraph._vDataSeries.length, r = new Array(a), n = new Array(a), o = new Array(a), s = this._gGraph._vDataSeries, l = 0; l < a; l++) r[l] = s[l]._cColor, n[l] = s[l]._sSeriesTitle + (rothConversion.VML ? s[l]._sSeriesTitleBold : ""), rothConversion.VML || (o[l] = s[l]._sSeriesTitleBold);
    this.drawLegend(e, t, i, r, n, o);
}, rothConversion.gGraphLegend.prototype.drawCategoryLegend = function (e, t, i) {
    var a = this._gGraph._sGraphCategories,
        r = this._gGraph._sGraphCategoriesBold;
    if (rothConversion.VML && null != r) {
        for (var n = this._gGraph._sGraphCategories.length, o = new Array(n), s = 0; s < n; s++) o[s] = a[s] + r[s];
        r = null, a = o;
    }
    this.drawLegend(e, t, i, this._gGraph._colorList, a, r);
}, rothConversion.gGraphLegend.prototype.drawLegend = function (e, t, i, a, r, n) {
    var o = rothConversion.gLegend,
        s = i + o._iSIDE_BORDER_WIDTH,
        l = this._iShape == o.SQUARE_LEGEND,
        E = 0,
        d = this.LINE_SPACE + this._iFontHeight,
        h = this._iColorBoxOffset,
        p = this._iColorBoxYOffset,
        _ = o._iSIDE_BORDER_WIDTH,
        u = o._PAD,
        c = this.bLegendSmall ? this._gGraph.FONT_LEGEND_TINY : this._gGraph.FONT_LEGEND_BOLD,
        T = this.bLegendSmall ? this._gGraph.FONT_LEGEND_TINY : this._gGraph.FONT_LEGEND,
        g = this._legendType == o.BANDED_LEGEND,
        K = r.length,
        J = rothConversion.FTR;
    e.font = T, e.lineWidth = o._LINE_WIDTH, e.shadowColor = o._sSHADOW_COLOR, e.shadowOffsetX = o._sSHADOW_BLUR_X, e.shadowOffsetY = o._sSHADOW_BLUR_Y;
    for (var f = 0; f < K; f++) {
        if (e.fillStyle = a[f], l) e.fillRect(t + h, s + p, _, _);
        else {
            var A = o._iCIR_SIDE_LENGTH;
            e.beginPath(), e.arc(t + h + A, s + p + A, A, 0, 2 * Math.PI, true), e.closePath(), e.fill();
        }
        s += d, g && f++;
    }
    e.lineWidth = o._LINE_WIDTH, e.shadowBlur = "0", e.shadowColor = o._sSHADOW_COLOR, e.shadowOffsetX = "0", e.shadowOffsetY = "0", e.fillStyle = this._cTextColor, s = i + _ + p + _ / 2 + u;
    var m = t + this._iLabelOffset;
    for (f = 0; f < K; f++) e.fillText(J(r[f]), m, s), n && n[f] && (E = e.measureText(J(r[f])).width, e.font = c, e.fillText(J(n[f]), m + E, s), e.font = T), s += d, g && f++;
}, rothConversion.gGraphLegend.prototype.setSize = function (e) {
    var t = rothConversion.gLegend,
        i = this;
    i._iWidth = 0, i._iHeight = 0, i._iXOffset = 0, i._iYOffset = 0;
    var a = i._iWidthOffset = i._iBORDER_WIDTH = rothConversion.gBORDER_WIDTH;
    if (i._iHeightOffset = 0, i._bShow) {
        var r = t._iSIDE_BORDER_WIDTH,
            n = i._gGraph,
            o = i.LINE_SPACE,
            s = i._iFontHeight,
            l = t._PAD;
        i._iColorBoxOffset = r + l, i._iLabelOffset = r + r + t._iBOX_TO_LABEL_SPACE + 2 * l;
        var E = i._iWidth = i._iLabelOffset + i._iMaxLegendLength + r,
            d = i._iHeight = r + (s + o) * (i._legendType == t.CATEGORY_LEGEND ? null == n._sGraphCategories ? 0 : n._sGraphCategories.length : n.getDataSeriesCount()) - o + r;
        switch (i._iColorBoxYOffset = Math.ceil((s - r) / 2) + l, i.useOrientation(e.canvas.width)) {
            case t.TOP:
            case t.TOP_GRID_ALIGN:
                i._iYOffset = d + a;
            case t.BOTTOM:
                i._iHeightOffset = d + a;
                break;
            case t.LEFT:
            case t.TOP_LEFT:
            case t.BOTTOM_LEFT:
                i._iXOffset = E + a, i._iWidthOffset = E + a + a;
                break;
            case t.RIGHT:
            case t.TOP_RIGHT:
            case t.BOTTOM_RIGHT:
                i._iWidthOffset = E + a;
        }
    }
}, rothConversion.gGraphLegend.prototype.setINF = function (e) {
    oThis = this, oThis._cColor = oThis._gGraph._cTextColor, oThis._cTextColor = oThis._gGraph._cTextColor, null == oThis._cBGColor && (oThis._cBGColor = oThis._gGraph._cBackground), oThis._iMaxLegendLength = 0, oThis._iFontHeight = 0, oThis._iFontDescent = 0, oThis.useOrientation(e.canvas.width);
    var t = oThis.bLegendSmall ? oThis._gGraph.FONT_LEGEND_TINY : oThis._gGraph.FONT_LEGEND_BOLD,
        i = oThis.bLegendSmall ? oThis._gGraph.FONT_LEGEND_TINY : oThis._gGraph.FONT_LEGEND;
    if (oThis._bShow) {
        if (oThis._iLegendWidth > 0) oThis._iMaxLegendLength = oThis._iLegendWidth;
        else {
            e.font = i;
            var a = 0,
                r = "",
                n = oThis._gGraph._vDataSeries.length,
                o = "";
            if (oThis._legendType != rothConversion.gLegend.CATEGORY_LEGEND)
                for (var s = 0; s < n; s++) o = oThis._gGraph._vDataSeries[s]._sSeriesTitle, r = (r = oThis._gGraph._vDataSeries[s]._sSeriesTitleBold) || "", a = e.measureText(rothConversion.FTR(o + (rothConversion.VML ? r : ""))).width, "" == r || rothConversion.VML || (e.font = oThis.FONT_LEGEND_BOLD, a += e.measureText(rothConversion.FTR(r)).width, e.font = i), a > oThis._iMaxLegendLength && (oThis._iMaxLegendLength = a);
            else if (null != oThis._gGraph._sGraphCategories) {
                n = oThis._gGraph._sGraphCategories.length;
                for (var l = null == oThis._gGraph._sGraphCategoriesBold ? 0 : oThis._gGraph._sGraphCategoriesBold.length, E = 0; E < n; E++) o = oThis._gGraph._sGraphCategories[E], r = E < l ? oThis._gGraph._sGraphCategoriesBold[E] : "", a = e.measureText(rothConversion.FTR(o + (rothConversion.VML ? r : ""))).width, E < l && (e.font = t, a += e.measureText(rothConversion.FTR(r)).width, e.font = i), a > oThis._iMaxLegendLength && (oThis._iMaxLegendLength = a);
            }
        }
        oThis._iFontHeight = rothConversion.gGetFontHeight(e);
    }
}, rothConversion.gValueAxis = function (e) {
    this._gGraph = e, this._font = e.FONT_PLAIN, this._bShow = true, this._cColor = "#FFFFFF", this._cLine = "#000000", this._cTextColor = "#000000", this._iFormat = rothConversion.FMT_DOLLARS, this._iXOffset = 0, this._iYOffset = 0, this._iLabelCount = 0, this._iMaxLabelLength = 0, this._iMaxLength = 0, this._iWidth = 0, this._iHeight = 0, this._iPixelsPerIncrement = 0, this._iDataLength = 0, this._fValuePerPixel = 0, this._iFontHeight = 0, this._iFormat = rothConversion.FMT_DOLLARS, this._bAutoMaximum = true, this._bAutoMinimum = false, this._axisMinimum = 0, this._axisMaximum = 100, this._sUnits = "", this._iUnitFactor = 1, this._fAbsoluteMinValue = 0, this._fAbsoluteMaxValue = 0, this._fRange = 0, this._fMinValue = 0, this._fMaxValue = 0, this._iIncrement = 0, this._iFactor = 0, this._fIncrement = 0, this._iZeroIntersects = 0;
}, rothConversion.gValueAxis.prototype.setProperty = function (e) {
    for (var t = e.split("|"), i = rothConversion.sgv, a = 0; a < t.length; a++) switch (a) {
        case 0:
            this._bShow = i(t[a], this._bShow);
            break;
        case 1:
            this._iFormat = i(t[a], this._iFormat);
            break;
        case 2:
            this._bAutoMaximum = i(t[a], this._bAutoMaximum);
            break;
        case 3:
            this._bAutoMinimum = i(t[a], this._bAutoMinimum);
            break;
        case 4:
            this._axisMaximum = i(t[a], this._axisMaximum);
            break;
        case 5:
            this._axisMinimum = i(t[a], this._axisMinimum);
    }
}, rothConversion.gValueAxis.prototype.getProperty = function () {
    return this._bShow + "|" + this._iFormat + "|" + this._bAutoMaximum + "|" + this._bAutoMinimum + "|" + rothConversion.number(this._axisMaximum, 2) + "|" + rothConversion.number(this._axisMinimum, 2);
}, rothConversion.gValueAxis.prototype.getLabel = function (e) {
    return null == this._gGraph._sValueLabels ? rothConversion.format[this._iFormat](e / this._iUnitFactor, this._fAbsoluteMaxValue - this._fAbsoluteMinValue <= 5 ? 2 : 0) : this._gGraph._sValueLabels[Math.floor(e)];
}, rothConversion.gValueAxis.prototype.getNextIncrement = function (e) {
    var t = this._iIncrement;
    return null == this._gGraph._sValueLabels ? this._fRange > 100 ? e - t * this._iFactor : Math.round(e * this._iFactor - t) / this._iFactor : e - 1;
}, rothConversion.gValueAxis.prototype.paint = function (e, t, i) {
    if (this._bShow) {
        var a = rothConversion.gAxis;
        e.font = this._font;
        for (var r = this._iWidth - a.TICK_LENGTH - a.LINE_WIDTH, n = a.LABEL_SPACE_LENGTH + a.TICK_LENGTH, o = 0, s = this.getStartingPlotValue(), l = 0; l <= this._iLabelCount; l++) e.strokeStyle = this._cTextColor, this._iPixelsPerIncrement < this._iFontHeight ? l % 2 != 0 && this.drawText(e, t, i, this.getLabel(s), n, o) : this.drawText(e, t, i, this.getLabel(s), n, o), e.strokeStyle = this._cColor, e.beginPath(), this.drawLine(e, t, i, r, o, r + a.TICK_LENGTH, o, this._cLine), o += this._iPixelsPerIncrement, s = this.getNextIncrement(s);
        this.drawLine(e, t, i, r + a.TICK_LENGTH, 0, r + a.TICK_LENGTH, this._iDataLength, this._cLine);
    }
}, rothConversion.gValueAxis.prototype.drawLine = function (e, t, i, a, r, n, o, s) {
    e.strokeStyle = s, e.moveTo(a + t + 0.5, r + i + 0.5), e.lineTo(n + t + 0.5, o + i + 0.5), e.stroke();
}, rothConversion.gValueAxis.prototype.drawText = function (e, t, i, a, r, n) {
    var o = e.measureText(rothConversion.FTR(a)).width,
        s = n + this._iFontHeight / 2,
        l = this._iWidth - r - o;
    e.textAlign = "left", e.textBaseline = "bottom", e.font = this._font, e.fillText(rothConversion.FTR(a), t + l, i + s);
}, rothConversion.gValueAxis.prototype.setSize = function (e, t) {
    e.font = this._font, e.fillStyle = this._cColor, this._iPixelsPerIncrement = Math.floor(t / this._iLabelCount), this._iDataLength = this._iPixelsPerIncrement * this._iLabelCount, this._iMaxLength = t, this._iHeight = this._iDataLength;
    for (var i = 0, a = this.getStartingPlotValue(), r = 0; r <= this._iLabelCount; r++) {
        if (0 == a) {
            this._iZeroIntersects = i;
            break;
        }
        a = this.getNextIncrement(a), i += this._iPixelsPerIncrement;
    }
    var n = rothConversion.gAxis;
    this._iWidth = this._iMaxLabelLength + n.LABEL_SPACE_LENGTH + n.TICK_LENGTH + n.LINE_WIDTH, this._iYOffset = this._bShow ? this._iHeight : 0, this._iXOffset = this._bShow ? this._iWidth : 0, this._fValuePerPixel = this._iDataLength / this._fRange;
}, rothConversion.gValueAxis.prototype.setFormat = function (e) {
    this._iFormat = e;
}, rothConversion.gValueAxis.prototype.setINF = function (e) {
    this._cLine = this._gGraph._cAxisLine, this._cColor = this._gGraph._cTextColor, this._cTextColor = this._gGraph._cTextColor, this._iFontHeight = rothConversion.gGetFontHeight(e), e.font = this._font, e.strokeStyle = this._cTextColor, this._fAbsoluteMaxValue = this._bAutoMaximum ? this._gGraph.getMaxValue() : this._axisMaximum, this._fAbsoluteMinValue = this._bAutoMinimum ? this._gGraph.getMinValue() : this._axisMinimum, this._fAbsoluteMaxValue < 0.00001 && this._fAbsoluteMaxValue > -0.00001 && this._fAbsoluteMinValue < 0.00001 && this._fAbsoluteMinValue > -0.00001 ? this._fAbsoluteMaxValue = 25 : this._fAbsoluteMaxValue < 1 && this._fAbsoluteMaxValue > -1 && this._fAbsoluteMinValue < 1 && this._fAbsoluteMinValue > -1 && this._iFormat == rothConversion.FMT_DOLLARS && (this._fAbsoluteMaxValue = 1);
    var t = this._fAbsoluteMaxValue - this._fAbsoluteMinValue;
    if (this._iFactor = 1, this._iIncrement = 1, this._fIncrement = 1, null != this._gGraph._sValueLabels);
    else {
        var i = t;
        if (i > 100)
            for (; i > 200;) this._iFactor *= 10, i = t / this._iFactor;
        else
            for (; i <= 20;) this._iFactor *= 10, i = t * this._iFactor;
        this._iIncrement = i > 100 ? 20 : i > 50 ? 10 : 5, this._fIncrement = t > 100 ? this._iIncrement * this._iFactor : this._iIncrement / this._iFactor;
    }
    if (0 == this._fAbsoluteMinValue ? this._fMinValue = 0 : this._fAbsoluteMinValue % this._fIncrement == 0 ? this._fMinValue = this._fAbsoluteMinValue : this._fMinValue = Math.floor(this._fAbsoluteMinValue / this._fIncrement) * this._fIncrement, 0 == this._fAbsoluteMaxValue ? this._fMaxValue = 0 : this._fAbsoluteMaxValue % this._fIncrement == 0 ? this._fMaxValue = this._fAbsoluteMaxValue : (this._fMaxValue = Math.ceil(this._fAbsoluteMaxValue / this._fIncrement), this._fMaxValue = Math.round(this._iFactor * this._fMaxValue * this._fIncrement) / this._iFactor), this._fRange = this._fMaxValue - this._fMinValue, 0 == this._fRange && (this.fRange = this._fIncrement), null == this._gGraph._sValueLabels ? this._iLabelCount = Math.round(this._fRange / this._fIncrement) : this._iLabelCount = this._gGraph._sValueLabels.length - 1, this.setGraphUnits(this._fMaxValue, this._fMinValue), this._bShow) {
        for (var a = this.getStartingPlotValue(), r = 0, n = 0, o = this._iLabelCount, s = 0; s <= o; s++) r = (n = e.measureText(rothConversion.FTR(this.getLabel(a))).width) > r ? n : r, a = this.getNextIncrement(a);
        var l = rothConversion.gAxis;
        this._iMaxLabelLength = r, this._iFontHeight = rothConversion.gGetFontHeight(e), this._iWidth = this._iMaxLabelLength + l.LABEL_SPACE_LENGTH + l.TICK_LENGTH + l.LINE_WIDTH;
    }
}, rothConversion.gValueAxis.prototype.getStartingPlotValue = function () {
    return null == this._gGraph._sValueLabels ? this._fMaxValue : this._gGraph._sValueLabels.length - 1;
}, rothConversion.gValueAxis.prototype.setVisible = function (e) {
    this._bShow = e;
}, rothConversion.gValueAxis.prototype.getDataLength = function () {
    return this._iDataLength;
}, rothConversion.gValueAxis.prototype.setGraphUnits = function (e, t) {
    var i = rothConversion;
    t = t || 0;
    for (var a = i.gScaleLabelMax, r = i.gScaleLabelFactor, n = a.length - 1; n >= 0; n--)
        if (e >= a[n] || t <= -1 * a[n]) {
            this._sUnits = i.gScaleLabel[n], this._iUnitFactor = r[n];
            break;
        }
    return this._iUnitFactor;
}, rothConversion.gCategoryAxis = function (e) {
    this._gGraph = e, this._bShow = true, this._cColor = "#FFFFFF", this._cLine = "#000000", this._cTextColor = "#000000", this._fFont = "11pt Helvetica", this._iXOffset = 0, this._iYOffset = 0, this._iLabelCount = 0, this._iMaxLabelLength = 0, this._iWidth = 0, this._iHeight = 0, this._iPixelsPerIncrement = 0, this._iDataLength = 0, this._iFontHeight = 0, this._iFontOffset = 0, this._fSpacingPercent = 0.25, this._fDataGapPercent = 0, this._bNoOffset = false, this._sCategories = new Array, this._iCategoryCount, this._iBarCount, this._iBarWidth, this._iSpaceWidth, this._iGapWidth, this._iBarsPerCategory, this._iAxisSegmentLength, this._bVertical = false;
}, rothConversion.gCategoryAxis.prototype.setProperty = function (e) {
    for (var t = e.split("|"), i = rothConversion.sgv, a = 0; a < t.length; a++) {
        switch (a) {
            case 0:
                this._bShow = i(t[a], this._bShow);
                break;
            case 1:
                this._fSpacingPercent = i(t[a], this._fSpacingPercent);
                break;
            case 2:
                this._fDataGapPercent = i(t[a], this._fDataGapPercent);
        }
        a++;
    }
}, rothConversion.gCategoryAxis.prototype.getProperty = function () {
    return this._bShow + "|" + rothConversion.input(this._fSpacingPercent, 2) + "|" + rothConversion.input(this._fDataGapPercent, 2);
}, rothConversion.gCategoryAxis.prototype.paint = function (e, t, i, a, r) {
    var n = this;
    if (n._bShow) {
        var o = rothConversion.gAxis;
        i += r, e.font = n._fFont;
        var s = o.TICK_LENGTH,
            l = o.LABEL_SPACE_LENGTH + o.LINE_WIDTH + o.TICK_LENGTH,
            E = s + o.LABEL_SPACE_LENGTH,
            d = 0,
            h = 0,
            p = 1,
            _ = n._sCategories,
            u = n._iCategoryCount,
            c = n._bVertical,
            T = (c ? n._iFontHeight : n._iMaxLabelLength) + l;
        T > n._iAxisSegmentLength && u > 2 && (p = Math.ceil(u / (n._iDataLength / T))), e.strokeStyle = n._cLine, e.beginPath();
        for (var g = 0; g < u; g++) h = n.getCategoryLeft(g), 0 == g && (h -= o.LINE_WIDTH), e.moveTo(h + t + 0.5, 0 + i + 0.5), e.lineTo(h + t + 0.5, s + i + 0.5);
        if (e.moveTo(t + 0.5, i + 0.5), e.lineTo(n._iWidth + t + 0.5, i + 0.5), e.stroke(), _) {
            e.setStyle = n._cTextColor, c ? (e.save(), e.rotate(-Math.PI / 2), e.textAlign = "right", e.textBaseline = "middle") : (e.textAlign = "center", e.textBaseline = "top"), n.getCatOffset = n._bNoOffset ? n.getCategoryLeft : n.getCategoryMid;
            var K = _.length,
                J = rothConversion.FTR;
            for (g = 0; g < u; g++) d = n.getCatOffset(g), (p < 2 || g % p == 0 && g < u - 0.9 * p && g != u - 2 || g == u - 1) && g < K && (c ? e.fillText(J(_[g]), -i - E - 0.5, t + d - 0.5) : e.fillText(J(_[g]), t + d + 0.5, i + E + 0.5));
            c && e.restore();
        }
    }
}, rothConversion.gCategoryAxis.prototype.drawLine = function (e, t, i, a, r, n, o, s) {
    e.beginPath(), e.strokeStyle = s, e.moveTo(a + t + 0.5, r + i + 0.5), e.lineTo(n + t + 0.5, o + i + 0.5), e.stroke();
}, rothConversion.gCategoryAxis.prototype.setSize = function (e, t) {
    e.font = this._fFont;
    var i = this._gGraph.getValueCount() - (this._bNoOffset ? 1 : 0),
        a = this._gGraph.getDataSeriesCount(),
        r = a * i,
        n = 2 * i,
        o = (a - 1) * i;
    this._iWidth = t, this._iDataLength = t;
    var s = Math.floor(this._iWidth / Math.round(n * this._fSpacingPercent + r + o * this._fDataGapPercent)),
        l = s * this._fDataGapPercent,
        E = Math.floor((this._iDataLength - s * r - l * o) / n);
    if (this._iAxisSegmentLength = 2 * E + l * (a - 1) + s * a, this._iXOffset = 0, this._iYOffset = 0, this._bShow) {
        var d = rothConversion.gAxis;
        this._iMaxLabelLength > this._iAxisSegmentLength && this._iMaxLabelLength > e.measureText("9999").width && this._iMaxLabelLength < e.measureText("9999999999999999999").width ? (this._iHeight = this._iMaxLabelLength + d.TICK_LENGTH, this._bVertical = true) : (this._iHeight = this._iFontHeight + d.LABEL_SPACE_LENGTH + d.TICK_LENGTH + d.LINE_WIDTH, this._bVertical = false);
    } else this._iHeight = 0;
    this._iBarsPerCategory = a, this._iBarWidth = s, this._iGapWidth = l, this._iSpaceWidth = E;
}, rothConversion.gCategoryAxis.prototype.setINF = function (e) {
    if (this._iCategoryCount = this._gGraph.getValueCount(), this._sCategories = this._gGraph._sGraphCategories, this._fFont = this._gGraph.FONT_PLAIN, this._cColor = this._gGraph._cTextColor, this._cTextColor = this._gGraph._cTextColor, this._cLine = this._gGraph._cAxisLine, this._iFontHeight = 0, this._iMaxLabelLength = 0, this._iHeight = 0, this._bShow) {
        var t = rothConversion.gAxis;
        this._sCategories ? this._iFontHeight = rothConversion.gGetFontHeight(e) : this._iFontHeight = 2 * -t.LABEL_SPACE_LENGTH, e.font = this._fFont, e.strokeStyle = this._cColor, this._iMaxLabelLength = this.getMaximumCategoryLength(e, this._iCategoryCount, this._sCategories);
    }
}, rothConversion.gCategoryAxis.prototype.getCategoryLeft = function (e) {
    return Math.round(this._iWidth / (this._iCategoryCount - (this._bNoOffset ? 1 : 0)) * e);
}, rothConversion.gCategoryAxis.prototype.getCategoryMid = function (e) {
    return Math.round(this._iWidth / this._iCategoryCount * e) + Math.round((this._iBarsPerCategory * this._iBarWidth + (this._iBarsPerCategory - 1) * this._iGapWidth) / 2) + this._iSpaceWidth;
}, rothConversion.gCategoryAxis.prototype.getDataWidth = function () {
    return this._iGapWidth + this._iBarWidth;
}, rothConversion.gCategoryAxis.prototype.getMaximumCategoryLength = function (e, t, i) {
    if (null == i) return 0;
    if (0 == i.length) return 0;
    for (var a = 0, r = 0, n = 0; n < t && n < i.length; n++) a = (r = e.measureText(rothConversion.FTR(i[n])).width + 3) > a ? r : a;
    return a;
}, rothConversion.gCategoryAxis.prototype.setVisible = function (e) {
    this._bShow = e;
}, rothConversion.gGrid = function (e) {
    this._gGraph = e, this._showYGridLines = true, this._showXGridLines = false, this._lineWidth = rothConversion.giGridLineWidth;
}, rothConversion.gGrid.prototype.setProperty = function (e) {
    for (var t = e.split("|"), i = rothConversion.sgv, a = 0; a < t.length; a++) switch (a) {
        case 0:
            this._showYGridLines = i(t[a], this._showYGridLines);
            break;
        case 1:
            this._showXGridLines = i(t[a], this._showXGridLines);
            break;
        case 2:
            this._lineWidth = i(t[a], this._lineWidth);
    }
}, rothConversion.gGrid.prototype.getProperty = function () {
    return this._showYGridLines + "|" + this._showXGridLines + "|" + this._lineWidth;
}, rothConversion.gGrid.prototype.paint = function (e, t, i) {
    var a, r, n = this._gGraph._axisX._iDataLength,
        o = this._gGraph._axisY._iDataLength,
        s = e.createLinearGradient(0, 0, 0, o);
    s.addColorStop(0, this._gGraph._cGridBackground1), s.addColorStop(1, this._gGraph._cGridBackground2), e.fillStyle = s, e.fillRect(t, i, n, o + 1), e.beginPath(), e.strokeStyle = this._gGraph._cGrid, e.lineWidth = this._lineWidth, e.strokeRect(t, i, n + 1, o), e.strokeStyle = this._gGraph._cAxisLine, e.beginPath(), e.moveTo(t, i + o), e.lineTo(t + n, i + o), e.closePath(), e.strokeStyle = this._gGraph._cGrid;
    var l = this._gGraph.getValueCount();
    if (this._showXGridLines) {
        a = 0, r = 0;
        for (var E = 0; E < l; E++) 0 == E && a--, a = t + this._axisX.getCategoryLeft(E), e.moveTo(a + 0.5, i), e.lineTo(a + 0.5, i + o);
    }
    var d = 0;
    if (this._showYGridLines) {
        r = i;
        for (var h = this._gGraph._axisY._iLabelCount, p = this._gGraph._axisY._iPixelsPerIncrement, _ = this._gGraph._axisY._iZeroIntersects, u = 0; u < h; u++) _ + i == r && (d = r), e.moveTo(t, r + 0.5), e.lineTo(t + n, r + 0.5), r += p;
    }
    e.strokeStyle = this._gGraph._cGrid, e.stroke(), e.closePath(), d && (e.beginPath(), e.strokeStyle = this._gGraph._cAxisLine, e.moveTo(t, d + 0.5), e.lineTo(t + n, d + 0.5), e.stroke(), e.closePath());
}, rothConversion.gType = function (e) {
    this._iGraphType = e, this.bTitleHigher = false, this._gGraph = null, this.xPopup = new Array, this.yPopup = new Array, this.xArray = new Array, this.yArray = new Array, this.sItems = new Array;
}, rothConversion.gType.prototype.syncSetup = function (e) {
    switch (this._gGraph = e, e.wTitle && (e.wTitle.style.fontColor = e._cTextColor, e._titleGraph.bShow = false), e._titleGraph.setFont(e.FONT_TITLE), e._titleXAxis.setFont(e.FONT_BOLD), e._titleYAxis.setFont(e.FONT_BOLD), e._titleGraph.setColor(e._cTextColor), e._titleXAxis.setColor(e._cTextColor), e._titleYAxis.setColor(e._cTextColor), this._iGraphType) {
        case rothConversion.gCOLUMN:
            e._legend._legendType = rothConversion.gLegend.DATA_SERIES_LEGEND, e._axisX._fDataGapPercent = 0.05, this.bTitleHigher = true;
            break;
        case rothConversion.gCATEGORIES:
            e._legend._legendType = rothConversion.gLegend.CATEGORY_LEGEND, e._axisX._fDataGapPercent = 0.05, this.bTitleHigher = true;
            break;
        case rothConversion.gLINE:
            e._legend._legendType = rothConversion.gLegend.DATA_SERIES_LEGEND, e._axisX._fDataGapPercent = 100, this.bTitleHigher = false, e._axisX._bNoOffset = true;
            break;
        case rothConversion.gPIE:
            e._legend._legendType = rothConversion.gLegend.CATEGORY_LEGEND, this.bTitleHigher = false;
            break;
        case rothConversion.gSTACKED:
            e._legend._legendType = rothConversion.gLegend.DATA_SERIES_LEGEND, e._axisX._fDataGapPercent = -1, this.bTitleHigher = true;
    }
}, rothConversion.gType.prototype.paint = function (e, t, i) {
    var a = this,
        r = a._gGraph,
        n = r._legend,
        o = r._axisX,
        s = r._axisY,
        l = r._titleXAxis,
        E = r._titleYAxis,
        d = r._titleGraph;
    d.setTitle(e), n.setINF(e), r._axisX.setINF(e), r._axisY.setINF(e), l.setTitle(e, ""), E.setTitle(e, r._axisY._sUnits);
    var h, p, _, u, c, T, g, K, J, f, A, m, C, R, v, y, I = a.bTitleHigher && r._showItemLabel && r._showItemLabelOnTop,
        b = rothConversion.gBORDER_WIDTH,
        L = rothConversion.gBORDER_WIDTH,
        S = t - 2 * rothConversion.gBORDER_WIDTH,
        D = i - 2 * rothConversion.gBORDER_WIDTH,
        M = d._iHeight,
        x = b,
        O = L + (I ? Math.ceil(M / 2) : 0) + M + rothConversion.gBORDER_WIDTH,
        P = S,
        G = D - ((I ? Math.ceil(M / 2) : 0) + M + rothConversion.gBORDER_WIDTH);
    switch (n.setSize(e), a._iGraphType === rothConversion.gPIE ? (h = x, p = O, _ = P, u = G, c = P, T = G, g = x, K = O, J = x, f = O, A = P, m = G, C = x + n._iXOffset, R = O + n._iYOffset, v = P - n._iWidthOffset, y = G - n._iHeightOffset) : (h = x + n._iXOffset, p = O + n._iYOffset, _ = P - n._iWidthOffset, u = G - n._iHeightOffset, c = _ - E._iWidth - rothConversion.gBORDER_WIDTH, T = u - l._iHeight - rothConversion.gBORDER_WIDTH, o.setSize(e, c - s._iWidth), s.setSize(e, T - o._iHeight), g = h + E._iWidth + rothConversion.gBORDER_WIDTH, K = p + (s._iMaxLength - s._iHeight), C = J = g + s._iXOffset, R = f = K + o._iYOffset, v = A = o._iDataLength, y = m = s._iDataLength), a._iGraphType === rothConversion.gPIE || (r._grid.paint(e, J, f), l.paint(e, J, s._iDataLength + f + o._iHeight + l._iHeight / 2, A, l._iHeight), E.paint(e, h, f, E._iWidth, m), s.paint(e, g, K + o._iXOffset, A, m), o.paint(e, g + s._iXOffset, K, A, m)), a._iGraphType) {
        case rothConversion.gCATEGORIES:
        case rothConversion.gCOLUMN:
            a.paintDataColumn(e, C, R, v, y);
            break;
        case rothConversion.gLINE:
            a.paintDataLine(e, C, R, v, y);
            break;
        case rothConversion.gPIE:
            a.paintDataPie(e, C, R, v, y);
            break;
        case rothConversion.gSTACKED:
            a.paintDataStacked(e, C, R, v, y);
    }
    d.paint(e, b, L - (I ? Math.ceil(M / 4) : 0), S, M), n.paint(e, x, O, P, G, J, f, A, m);
}, rothConversion.gType.prototype.paintDataColumn = function (e, t, i, a, r) {
    var n = this._gGraph,
        o = rothConversion.gGraphColumn,
        s = this,
        l = n._axisX._iBarWidth,
        E = n._axisY._fValuePerPixel,
        d = n._axisX._iSpaceWidth,
        h = n._axisX.getDataWidth(),
        p = n._axisY._fMinValue,
        _ = n._axisY._fMaxValue,
        u = n._axisY._iZeroIntersects,
        c = n.getValueCount();
    e.shadowColor = o._sSHADOW_COLOR, e.shadowBlur = o._sSHADOW_BLUR, e.shadowOffsetX = l < 3 * o._sSHADOW_BLUR_X ? 0 : o._sSHADOW_BLUR_X;
    var T = e.shadowOffsetY = l < 3 * o._sSHADOW_BLUR_X ? 0 : o._sSHADOW_BLUR_Y;
    e.lineWidth = o._LINE_WIDTH;
    var g = new Array,
        K = new Array,
        J = new Array,
        f = 0;
    e.font = n.FONT_LEGEND, n._showItemLabelOnTop || (f = -rothConversion.gGetFontHeight(e)), e.textAlign = "center", e.textBaseline = "bottom";
    for (var A = 0, m = 0, C = "", R = n._legend._legendType != rothConversion.gLegend.CATEGORY_LEGEND, v = null != n._sGraphCategoriesBold && n._legend._legendType == rothConversion.gLegend.CATEGORY_LEGEND, y = n._axisX._sCategories, I = 0; I < n._vDataSeries.length; I++) {
        R && (C = n._vDataSeries[I]._sSeriesPop);
        var b = -9191,
            L = -9191;
        e.fillStyle = n._vDataSeries[I]._cColor;
        var S, D, M, x = n._vDataSeries[I]._fValues;
        g[I] = new Array, K[I] = new Array, J[I] = new Array;
        for (var O = 0; O < c; O++) S = t + n._axisX.getCategoryLeft(O) + d + I * h, (A = x[O]) < 0 ? _ < 0 ? (D = i, M = -1 * Math.round((A + _) * E)) : (D = i + u, M = -1 * Math.round(A * E)) : D = p > 0 ? i + r - (M = Math.round((A - p) * E)) : i + u - (M = Math.round(A * E)), e.beginPath(), n._legend._legendType == rothConversion.gLegend.CATEGORY_LEGEND ? e.fillStyle = n.getColor(O + 1) : e.fillStyle = n._vDataSeries[I]._cColor, e.strokeStyle = e.fillStyle, e.shadowOffsetY = T, e.fillRect(S, D, l, M), e.shadowOffsetY = "0", e.fillRect(S, D, l, M), (n._iArea == rothConversion.gGraphColumn.LINE_ON_ALL || n._iArea == rothConversion.gGraphColumn.LINE_ON_FIRST_ONLY && 0 == I) && (e.lineWidth = rothConversion.gGraphLine._LINE_WIDTH, e.shadowOffsetY = rothConversion.gGraphLine._sSHADOW_BLUR_Y, -9191 != L && (e.beginPath(), e.moveTo(b + l / 2, L), e.lineTo(S + l / 2, D), e.stroke()), b = S, L = D), e.closePath(), g[I][O] = n.getFormat(x[O], I, O), s.xPopup[m] = (S + l / 2) / rothConversion.gSCALE, s.yPopup[m] = (D + M) / rothConversion.gSCALE, s.xArray[m] = new Array(4), s.yArray[m] = new Array(4), s.xArray[m][0] = S / rothConversion.gSCALE, s.yArray[m][0] = D / rothConversion.gSCALE, s.xArray[m][1] = (S + l) / rothConversion.gSCALE, s.yArray[m][1] = s.yArray[m][0], s.xArray[m][2] = s.xArray[m][1], s.yArray[m][2] = (D + M) / rothConversion.gSCALE, s.xArray[m][3] = s.xArray[m][0], s.yArray[m][3] = s.yArray[m][2], s.sItems[m++] = C + " " + (y ? y[O] : "") + (v && n._sGraphCategoriesBold[O] ? n._sGraphCategoriesBold[O] : "") + (n._bPopDetail ? rothConversion.Colon + " " + g[I][O] : ""), K[I][O] = S + l / 2, J[I][O] = D - f;
    }
    if (s.xArray.length = m, s.yArray.length = m, s.sItems.length = m, e.shadowBlur = "0", e.shadowOffsetX = "0", e.shadowOffsetY = "0", e.fillStyle = n._cTextColor, n._showItemLabel)
        for (I = 0; I < g.length; I++)
            for (O = 0; O < g[I].length; O++) e.beginPath(), e.fillText(rothConversion.FTR(g[I][O]), K[I][O], J[I][O]), e.closePath();
}, rothConversion.gType.prototype.paintDataLine = function (e, t, i, a, r) {
    var n = rothConversion,
        o = n.gGraphLine,
        s = rothConversion.gSCALE,
        l = this._gGraph,
        E = this,
        d = l._axisY._fValuePerPixel,
        h = l._axisY._fMinValue,
        p = l._axisY._fMaxValue,
        _ = l._axisY._iZeroIntersects,
        u = l.getValueCount(),
        c = 0,
        T = o._CLICKABLE;
    e.shadowBlur = o._sSHADOW_BLUR, e.shadowColor = o._sSHADOW_COLOR, e.shadowOffsetX = o._sSHADOW_BLUR_X, e.lineWidth = o._LINE_WIDTH, e.shadowOffsetY = o._sSHADOW_BLUR_Y;
    for (var g = l._axisX._sCategories, K = 0; K < l._vDataSeries.length; K++) {
        var J = l._vDataSeries[K]._sSeriesPop,
            f = l._vDataSeries[K]._bNoPopDetails;
        e.fillStyle = l._vDataSeries[K]._cColor, e.strokeStyle = l._vDataSeries[K]._cColor;
        for (var A, m, C = l._vDataSeries[K]._fValues, R = -9191, v = -9191, y = 0; y < u; y++) A = t + l._axisX.getCategoryLeft(y) - 0.5, m = _ - Math.round(C[y] * d) + 0.5, p < 0 ? m = -1 * Math.round((C[y] + p) * d) : h > 0 && (m = r - Math.round((C[y] - h) * d)), m += i, -9191 != v && (e.beginPath(), e.strokeStyle = l._vDataSeries[K]._cColor, e.fillStyle = l._vDataSeries[K]._cColor, l._iArea == o.AREA_ALL || l._iArea == o.AREA_FIRST_ONLY && 0 == K || l._iArea == o.AREA_SECOND_ONLY && 1 == K ? (e.moveTo(R, i + r), e.lineTo(R, v), e.lineTo(A + 0.5, m), e.lineTo(A + 0.5, i + r), e.lineTo(R, i + r), e.fill()) : (e.moveTo(A + 0.5, m), e.lineTo(R, v), e.stroke())), E.xPopup[c] = (A - 5) / s, E.yPopup[c] = (m + 5) / s, E.xArray[c] = rothConversion.IntArray(4), E.yArray[c] = rothConversion.IntArray(4), E.xArray[c][0] = (A - T) / s, E.yArray[c][0] = (m - T) / s, E.xArray[c][1] = (A + T) / s, E.yArray[c][1] = E.yArray[c][0], E.xArray[c][2] = E.xArray[c][1], E.yArray[c][2] = (m + T) / s, E.xArray[c][3] = E.xArray[c][0], E.yArray[c][3] = E.yArray[c][2], E.sItems[c++] = J + (f ? "" : " " + (g ? g[y] : "") + (l._bPopDetail ? n.Colon + " " + l.getFormat(C[y], K, y) : "")), R = A, v = m;
    }
    E.xArray.length = c, E.yArray.length = c, E.sItems.length = c;
}, rothConversion.gType.prototype.paintDataPie = function (e, t, i, a, r) {
    for (var n = 0, o = this._gGraph, s = this, l = o._vDataSeries[0]._fValues, E = 0; E < l.length; E++) n += l[E];
    var d = Math.round(a / 2 + t),
        h = Math.round(r / 2 + i),
        p = 0;
    a / r && (p = Math.floor(r / 24), h -= Math.ceil(p / 2) + 1, r -= Math.ceil(p) + 1), e.save();
    var _ = a > r ? a / r : 1,
        u = a > r ? 1 : r / a;
    d /= _, h /= u, e.scale(_, u);
    var c = Math.round(Math.min(a / 2, r / 2)),
        T = 0,
        g = 0;
    e.shadowBlur = 10, e.shadowOffsetX = p, e.shadowOffsetY = p, e.lineWidth = rothConversion.gGraphPie._LINE_WIDTH, e.lineJoin = rothConversion.gGraphPie._LINE_JOIN, e.fillStyle = rothConversion.gGraphPie._LINE_COLOR;
    var K = o._axisX._sCategories;
    if (n <= 0 && (e.fillStyle = rothConversion.gDarker(o.getColor(1), 0.5), e.shadowColor = e.fillStyle, e.beginPath(), e.moveTo(d, h), e.arc(d, h, c, 0, 2 * Math.PI, true), e.lineTo(d, h), e.closePath(), e.stroke(), e.fill(), e.fillStyle = o.getColor(1), e.strokeStyle = rothConversion.gDarker(o.getColor(1), 0.6), e.beginPath(), e.moveTo(d, h), e.arc(d, h, c, 0, 2 * Math.PI, true), e.lineTo(d, h), e.closePath(), e.stroke(), e.fill()), n > 0) {
        for (var J = l.length - 1; J >= 0; J--)
            if (0 != l[J]) {
                g = l[J] / n, e.fillStyle = rothConversion.gDarker(o.getColor(J + 1), 0.5), e.shadowColor = e.fillStyle, e.beginPath(), e.moveTo(d, h);
                var f = T * Math.PI * 2,
                    A = 0 == J && l[J] > 0 ? 0 : (T + g) * Math.PI * 2;
                e.arc(d, h, c, f, A, false), e.lineTo(d, h), e.closePath(), e.fill(), T += g;
            }
        T = 0, e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
        var m = 0;
        for (J = l.length - 1; J >= 0; J--)
            if (0 != l[J]) {
                g = l[J] / n, e.fillStyle = o.getColor(J + 1), e.strokeStyle = rothConversion.gDarker(o.getColor(J + 1), 0.6), e.beginPath(), e.moveTo(d, h), f = T * Math.PI * 2, A = 0 == J && l[J] > 0 ? 0 : (T + g) * Math.PI * 2, e.arc(d, h, c, f, A, false), e.lineTo(d, h), e.closePath(), e.stroke(), e.fill(), g = l[J] / n;
                var C = Math.ceil(20 * g + 0.01);
                s.xArray[m] = rothConversion.IntArray(C + 2), s.yArray[m] = rothConversion.IntArray(C + 2), s.xArray[m][0] = d * _ / rothConversion.gSCALE, s.yArray[m][0] = h * u / rothConversion.gSCALE;
                for (var R = g / C, v = 0; v < C; v++) s.xArray[m][v + 1] = (d + c * Math.cos((T + R * v) * Math.PI * 2)) * _ / rothConversion.gSCALE, s.yArray[m][v + 1] = (h + c * Math.sin((T + R * v) * Math.PI * 2)) * u / rothConversion.gSCALE, v == Math.floor(C / 2) && (s.xPopup[m] = (d + 0.75 * c * Math.cos((T + R * v) * Math.PI * 2)) * _ / rothConversion.gSCALE - 5, s.yPopup[m] = (h + 0.75 * c * Math.sin((T + R * v) * Math.PI * 2)) * u / rothConversion.gSCALE + 10);
                s.xArray[m][C + 1] = (d + c * Math.cos((T + g) * Math.PI * 2)) * _ / rothConversion.gSCALE, s.yArray[m][C + 1] = (h + c * Math.sin((T + g) * Math.PI * 2)) * u / rothConversion.gSCALE, s.sItems[m] = (K ? K[J] : "") + (o._bPopDetail ? rothConversion.Colon + " " + o.getFormat(l[J], 0, J) : ""), T += g, m++;
            }
        s.xArray.length = m, s.yArray.length = m, s.sItems.length = m, s.xPopup.length = m, s.yPopup.length = m;
    }
    e.restore();
}, rothConversion.gType.prototype.paintDataStacked = function (e, t, i, a, r) {
    var n = this._gGraph,
        o = n._axisY,
        s = n._axisX,
        l = rothConversion.gGraphColumn,
        E = this,
        d = s._iBarWidth,
        h = o._fValuePerPixel,
        p = s._iSpaceWidth,
        _ = s.getDataWidth(),
        u = o._fMinValue,
        c = o._fMaxValue,
        T = o._iZeroIntersects,
        g = n.getValueCount(),
        K = new Array,
        J = new Array,
        f = new Array,
        A = new Array,
        m = E.xArray,
        C = E.yArray,
        R = E.sItems,
        v = E.xPopup,
        y = E.yPopup,
        I = s._sCategories;
    e.shadowColor = l._sSHADOW_COLOR, e.shadowBlur = l._sSHADOW_BLUR, e.shadowOffsetX = d < 3 * l._sSHADOW_BLUR_X ? 0 : l._sSHADOW_BLUR_X;
    var b = e.shadowOffsetY = d < 3 * l._sSHADOW_BLUR_X ? 0 : l._sSHADOW_BLUR_Y;
    e.lineWidth = l._LINE_WIDTH, e.font = n.FONT_LEGEND, e.textAlign = "center", e.textBaseline = "bottom";
    var L = 5;
    n._showItemLabelOnTop || (L = -rothConversion.gGetFontHeight(e));
    for (var S = null, D = 0; D < n._vDataSeries.length; D++) {
        S = n._vDataSeries[D]._fValues;
        for (var M = 0; M < S.length; M++) K[M] = S[M] + (K[M] ? K[M] : 0);
    }
    for (M = 0; M < K.length; M++) J[M] = n.getFormat(K[M], D - 1, M);
    var x = 0,
        O = 0;
    for (D = 0; D < n._vDataSeries.length; D++) {
        var P = n._vDataSeries[D]._sSeriesPop,
            G = 0,
            w = 0,
            F = 0;
        for (S = n._vDataSeries[D]._fValues, M = 0; M < g; M++) {
            G = t + s.getCategoryLeft(M) + p + D * _, x = K[M], K[M] -= S[M], x < 0 ? c < 0 ? (w = i, F = -1 * Math.round((x + c) * h)) : (w = i + T, F = -1 * Math.round(x * h)) : w = u > 0 ? i + r - (F = Math.round((x - u) * h)) : i + T - (F = Math.round(x * h)), e.beginPath(), e.fillStyle = n._vDataSeries[D]._cColor, 0 == D && (e.shadowOffsetY = b, e.fillRect(G, w, d, F), f[M] = G + d / 2, A[M] = w - L), e.shadowOffsetY = "0", e.fillRect(G, w, d, F);
            var N = w + Math.floor(S[M] * h);
            v[O] = (G + d / 2) / rothConversion.gSCALE, y[O] = N / rothConversion.gSCALE, m[O] = new Array(4), C[O] = new Array(4), m[O][0] = G / rothConversion.gSCALE, C[O][0] = w / rothConversion.gSCALE, m[O][1] = (G + d) / rothConversion.gSCALE, C[O][1] = C[O][0], m[O][2] = m[O][1], C[O][2] = N / rothConversion.gSCALE, m[O][3] = m[O][0], C[O][3] = C[O][2], R[O++] = P + (n._bPopCat && I ? " " + s._sCategories[M] : "") + (n._bPopDetail ? rothConversion.Colon + " " + n.getFormat(S[M], D, M) : "");
        }
    }
    if (m.length = O, C.length = O, R.length = O, e.shadowBlur = "0", e.shadowOffsetX = "0", e.shadowOffsetY = "0", e.fillStyle = n._cTextColor, n._showItemLabel)
        for (M = 0; M < K.length; M++) e.beginPath(), e.fillText(rothConversion.FTR(J[M]), f[M], A[M]), e.closePath();
}, rothConversion.gType.prototype.poly = function (e, t, i, a) {
    var r, n, o = 0;
    if (e) {
        var s = e.length;
        for (r = 0, n = s - 1; r < s; n = r++)(t[r] <= a && a < t[n] || t[n] <= a && a < t[r]) && i < (e[n] - e[r]) * (a - t[r]) / (t[n] - t[r]) + e[r] && (o = !o);
    }
    return o;
}, rothConversion.gType.prototype.getWedgeValue = function (e, t) {
    for (var i = this, a = i.xArray, r = i.yArray, n = i.sItems.length; n > -1; n--)
        if (i.poly(a[n], r[n], e, t)) return {
            x: i.xPopup[n],
            y: i.yPopup[n],
            s: i.sItems[n]
        };
    return null;
}, rothConversion.FTR = function (e) {
    return e;
}, rothConversion.ErrorBackground = "#FF7777", rothConversion.IncompleteBackground = "#FFFF77", rothConversion.ClearColor = "#FFFFFF", rothConversion.colorList = ["#E7EDF5", "#ffffff", "#F0E68C", "#5F3240", "#FABB50", "#DECBCB", "#CCCCCC", "#CCCCDD", "#CCDDCC", "#CCDDDD", "#CCCCDD"], rothConversion.ReportHeader = "<div class='rothConversionReportTitleBlock'><div class='rothConversionReportTitle'>**REPORT_TITLE**</div>Roth Conversion Calculator</div>", rothConversion.ReportFooter = "<div class=rothConversionCenter><p class='rothConversionReportFooter rothConversionCenter'>Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes.  We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.</p></div>", rothConversion.gFont = ["Arial", "Helvetica", "Helvetica"], rothConversion.gFontStyle = ["bold", "bold", ""], rothConversion.gFontSize = [13, 10, 10], rothConversion.gHeight = 250, rothConversion.gHeightReport = 350, rothConversion.gColorBackground = "#FFFFFF", rothConversion.gColorForeground = "#000000", rothConversion.gColorGrid = "#BBBBBB", rothConversion.gColorGridBackground1 = "#FFFFFF", rothConversion.gColorGridBackground2 = "#CCCCCC", rothConversion.gColorAxisLine = "#666666", rothConversion.gColorText = "#000000", rothConversion.gColorList = ["#5583BF", "#B8CBE4", "#29466D", "#DBE4F2", "#5f007f", "#F15A22", "#B72467", "#6DC8BF", "#00007f", "#ff00ff", "#ffff00", "#00ffff", "#7f007f", "#7f0000", "#007f7f", "#0000ff", "#00c8ff", "#60ffff", "#bfffbf", "#ffff90", "#a0c8ef"], rothConversion.bUseInputForm = false, rothConversion.SplashContent = "Roth Conversion Calculator<br/><br/>";
var oDefinitions = document.getElementById("br-definition");

function mapCalcValues(e) {
    e.map(function (e) {
        var t = getParameterByName(e[0]);
        t && ("boolean" == typeof e[2] ? rothConversion.parameters.set(e[1], !!parseInt(t)) : rothConversion.parameters.set(e[1], t));
    });
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
    return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
}
null !== oDefinitions && (rothConversion.ShowDefinitions = false, rothConversion.customInit = function () {
    oDefinitions.innerHTML = rothConversion.DefinitionText;
}), rothConversion.Default.TaxRate = 25, rothConversion.Default.TaxRateRetire = 15, rothConversion.Default.TaxRateCapGain = 15, rothConversion.Default.StateTaxRate = 8, rothConversion.Default.IncomeTaxTableTaxYear = "Use the table below to assist you in estimating your federal tax rate. <div class='rothConversionReportTableDiv'><table class='rothConversionReportTable rothConversionReportTableShrink'><caption class='rothConversionHeaderRow rothConversionHeading'>Filing Status and Income Tax Rates 2016<sup>*</sup></caption><thead><tr class=rothConversionFooterRow><th class='rothConversionLabel rothConversionCell10 rothConversionCenter' style='vertical-align:bottom;'>Tax Rate</th><th class='rothConversionLabel rothConversionCell225 rothConversionCenter' style='vertical-align:bottom;'>Married Filing Jointly or Qualified Widow(er)</th><th class='rothConversionLabel rothConversionCell225 rothConversionCenter' style='vertical-align:bottom;'>Single</th><th class='rothConversionLabel rothConversionCell225 rothConversionCenter' style='vertical-align:bottom;'>Head of Household</th><th class='rothConversionLabel rothConversionCell225 rothConversionCenter' style='vertical-align:bottom;'>Married Filing Separately</th></tr></thead><tr class='rothConversionOddRow'><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>10%</td><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$18,550</td><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$9,275</td><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$13,250</td><td class='rothConversionCell'>$0 -&nbsp;$9,275</td></tr><tr class=rothConversionEvenRow style='margin-top:10px;'><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>15%</td><td class='rothConversionCell rothConversionCellBorder'>$18,550 -&nbsp;$75,300</td><td class='rothConversionCell rothConversionCellBorder'>$9,275 -&nbsp;$37,650</td><td class='rothConversionCell rothConversionCellBorder'>$13,250 -&nbsp;$50,400</td><td class='rothConversionCell'>$9,275 -&nbsp;$37,650</td></tr><tr class=rothConversionOddRow><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>25%</td><td class='rothConversionCell rothConversionCellBorder'>$75,300 -&nbsp;$151,900</td><td class='rothConversionCell rothConversionCellBorder'>$37,650 -&nbsp;$91,150</td><td class='rothConversionCell rothConversionCellBorder'>$50,400 -&nbsp;$130,150</td><td class='rothConversionCell'>$37,650 -&nbsp;$75,950</td></tr><tr class=rothConversionEvenRow><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>28%</td><td class='rothConversionCell rothConversionCellBorder'>$151,900 -&nbsp;$231,450</td><td class='rothConversionCell rothConversionCellBorder'>$91,150 -&nbsp;$190,150</td><td class='rothConversionCell rothConversionCellBorder'>$130,150 -&nbsp;$210,800</td><td class='rothConversionCell'>$75,950 -&nbsp;$115,725</td></tr><tr class=rothConversionOddRow><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>33%</td><td class='rothConversionCell rothConversionCellBorder'>$231,450  -&nbsp;$413,350</td><td class='rothConversionCell rothConversionCellBorder'>$190,150 -&nbsp;$413,350</td><td class='rothConversionCell rothConversionCellBorder'>$210,800 -&nbsp;$413,350</td><td class='rothConversionCell'>$115,725 -&nbsp;$206,675</td></tr><tr class=rothConversionEvenRow><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>35%</td><td class='rothConversionCell rothConversionCellBorder'>$413,350 -&nbsp;$466,950</td><td class='rothConversionCell rothConversionCellBorder'>$413,350 -&nbsp;$415,050</td><td class='rothConversionCell rothConversionCellBorder'>$413,350 -&nbsp;$441,000</td><td class='rothConversionCell'>$206,675 -&nbsp;$233,475</td></tr><tr class='rothConversionOddRow'><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>39.6%</td><td class='rothConversionCell rothConversionCellBorder'>Over $466,950 </td><td class='rothConversionCell rothConversionCellBorder'>Over $415,050 </td><td class='rothConversionCell rothConversionCellBorder'>Over $441,000 </td><td class='rothConversionCell'>Over $233,475 </td></tr></table><div align=center><br><sup>*</sup>Caution: Do not use these tax rate schedules to figure 2015 taxes. Use only to figure 2016 estimates. Source: 2015 Rev. Proc. 2015-61</div></div>", rothConversion.Default.IncomeTaxTableCurrent = "Use the table below to assist you in estimating your federal tax rate.<div class='rothConversionReportTableDiv'><table class='rothConversionReportTable rothConversionReportTableShrink'><caption class='rothConversionHeaderRow rothConversionHeading'>Filing Status and Income Tax Rates 2017<sup>*</sup></caption><thead><tr class=rothConversionFooterRow><th class='rothConversionColumnHeader rothConversionCell10'>Tax Rate</th><th class='rothConversionColumnHeader rothConversionCell225'>Married Filing Jointly or Qualified Widow(er)</th><th class='rothConversionColumnHeader rothConversionCell225'>Single</th><th class='rothConversionColumnHeader rothConversionCell225'>Head of Household</th><th class='rothConversionColumnHeader rothConversionCell225'>Married Filing Separately</th></tr></thead><tr class='rothConversionOddRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>10%</th><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$18,650</td><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$9,325</td><td class='rothConversionCell rothConversionCellBorder'>$0 -&nbsp;$13,350</td><td class='rothConversionCell'>$0 -&nbsp;$9,325</td></tr><tr class='rothConversionEvenRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>15%</th><td class='rothConversionCell rothConversionCellBorder'>$18,650 -&nbsp;$75,900</td><td class='rothConversionCell rothConversionCellBorder'>$9,325 -&nbsp;$37,950</td><td class='rothConversionCell rothConversionCellBorder'>$13,350 -&nbsp;$50,800</td><td class='rothConversionCell'>$9,325 -&nbsp;$37,950</td></tr><tr class='rothConversionOddRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>25%</th><td class='rothConversionCell rothConversionCellBorder'>$75,900 -&nbsp;$153,100</td><td class='rothConversionCell rothConversionCellBorder'>$37,950 -&nbsp;$91,900</td><td class='rothConversionCell rothConversionCellBorder'>$50,800 -&nbsp;$131,200</td><td class='rothConversionCell'>$37,950 -&nbsp;$76,550</td></tr><tr class='rothConversionEvenRow'><td class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>28%</th><td class='rothConversionCell rothConversionCellBorder'>$153,100 -&nbsp;$233,350</td><td class='rothConversionCell rothConversionCellBorder'>$91,900 -&nbsp;$191,650</td><td class='rothConversionCell rothConversionCellBorder'>$131,200 -&nbsp;$212,500</td><td class='rothConversionCell'>$76,550 -&nbsp;$116,675</td></tr><tr class='rothConversionOddRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>33%</th><td class='rothConversionCell rothConversionCellBorder'>$233,350 -&nbsp;$416,700</td><td class='rothConversionCell rothConversionCellBorder'>$191,650 -&nbsp;$416,700</td><td class='rothConversionCell rothConversionCellBorder'>$212,500 -&nbsp;$416,700</td><td class='rothConversionCell'>$116,675 -&nbsp;$208,350</td></tr><tr class='rothConversionEvenRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>35%</th><td class='rothConversionCell rothConversionCellBorder'>$416,700 -&nbsp;$470,700</td><td class='rothConversionCell rothConversionCellBorder'>$416,700 -&nbsp;$418,400</td><td class='rothConversionCell rothConversionCellBorder'>$416,700 -&nbsp;$444,550</td><td class='rothConversionCell'>$208,350 -&nbsp;$235,350</td></tr><tr class='rothConversionOddRow'><th class='rothConversionLabel rothConversionCellBorder rothConversionLabelPad'>39.6%</th><td class='rothConversionCell rothConversionCellBorder'>Over $470,700</td><td class='rothConversionCell rothConversionCellBorder'>Over $418,400</td><td class='rothConversionCell rothConversionCellBorder'>Over $444,550</td><td class='rothConversionCell'>Over $235,350</td></tr><tr class=rothConversionFooterRow><td class='rothConversionFooter rothConversionLabelPad' COLSPAN='5' ><div align=center><sup>*</sup>Caution: Do not use these tax rate schedules to figure 2016 taxes. Use only to figure 2017 estimates. Source: Rev. Proc. 2016-55</div></td></tr></table></div>", rothConversion.definitions.set("**TAXTABLE_CURRENT_DEFINITION**", rothConversion.Default.IncomeTaxTableCurrent), rothConversion.definitions.set("**TAXTABLE_TAXYEAR_DEFINITION**", rothConversion.Default.IncomeTaxTableTaxYear), rothConversion.RothTransferCalc = function () {
    this.nAMT_AF_TAX = 0, this.cats = [rothConversion.parameters.get("MSG_GRAPH_CAT1", "Roth Conversion")], this.MSG_ROTH_LABEL = rothConversion.parameters.get("MSG_ROTH_LABEL", "Roth IRA"), this.MSG_TRADITIONAL_LABEL = rothConversion.parameters.get("MSG_TRADITIONAL_LABEL", "Traditional IRA"), this.MSG_ERROR1 = rothConversion.parameters.get("MSG_ERROR1", "Non-deductible amount can not be greater than total amount to convert."), this.MSG_ERROR2 = rothConversion.parameters.get("MSG_ERROR2", "Age at retirement must be greater than current age."), this.MSG_INCREASE = rothConversion.parameters.get("MSG_INCREASE", "increase"), this.MSG_POSITIVE = rothConversion.parameters.get("MSG_POSITIVE", "How much is this worth today? You would have to invest ATR_NPV today to match the returns produced by the tax savings built into the Roth IRA."), this.MSG_DECREASE = rothConversion.parameters.get("MSG_DECREASE", "decrease"), this.MSG_NEGATIVE = rothConversion.parameters.get("MSG_NEGATIVE", "Converting to a Roth IRA doesn't appear to be a positive option for your retirement savings."), this.MSG_BREAKEVEN_POSITIVE = rothConversion.parameters.get("MSG_BREAKEVEN_POSITIVE", "At age MSG_YEARS your balance would be ROTH_TOT_ATR, which is greater than the initial conversion amount plus any taxes paid. "), this.MSG_BREAKEVEN_NEGATIVE = rothConversion.parameters.get("MSG_BREAKEVEN_NEGATIVE", "After MSG_YEARS your balance of ROTH_TOT_ATR remains below the initial conversion amount plus taxes paid."), this.fRothNumbers = rothConversion.FloatArray(1), this.fIraNumbers = rothConversion.FloatArray(1), this.fWithTaxesInvestedNumbers = rothConversion.FloatArray(1), this.sCats = null, this.nROTH_TAX_PMT_CNT = 1, this.MSG_BREAKEVEN = "", this.ATR_DIFF_MSG = "", this.ATR_EXTENDED_MSG = "", this.nAF_TAX_ROTH_AMT = 0, this.nAF_TAX_ROTH_TOT_ATR = 0, this.nAF_TAX_ROTH_$_DIFF = 0, this.nAF_TAX_ROTH_PERC_DIFF = 0, this.nAF_TAX_ROTH_NPV = 0, this.sAF_TAX_ROTH_ADV_MSG = "", this.DELAY_TAXES = false;
}, rothConversion.RothTransferCalc.prototype.clear = function () {
    this.nAMT = 0, this.nTAX_RATE = 0, this.nTAX_RATE_ATR = 0, this.nTAX_RATE_INVEST = 0, this.nAGE = 0, this.nAGE_ATR = 0, this.nYRS_AF_RTR = 0, this.nROR_INVEST = 0;
}, rothConversion.RothTransferCalc.prototype.calculate = function (e) {
    var t = rothConversion,
        i = this.nAMT,
        a = this.nTAX_RATE,
        r = this.nTAX_RATE_ATR,
        n = this.nTAX_RATE_INVEST,
        o = this.nAGE,
        s = this.nAGE_ATR,
        l = this.nYRS_AF_RTR,
        E = this.nROR_INVEST,
        d = this.nAMT_AF_TAX;
    console.log(i, a, r, n, o, s, l, E, d);
    this.nIRA_BF_TAX_ATR = 0, this.nIRA_TAX_ATR = 0, this.nIRA_TAX_PMT_RTN_ATR = 0, this.nIRA_AF_TAX_ATR = 0, this.nROTH_TOT_ATR = 0, this.nATR_$_DIFF = 0;
    var h;
    if (d > i) throw this.MSG_ERROR1;
    if (o > s) throw this.MSG_ERROR2;
    var p = s + l,
        _ = s - o,
        u = E / 100 * (1 - n / 100),
        c = a / 100 * (i - d),
        T = c,
        g = _ + 1;
    this.fRoth = rothConversion.FloatArray(g), this.fTraditional = rothConversion.FloatArray(g), this.fTaxable = rothConversion.FloatArray(g), this.sCats = rothConversion.FloatArray(g), this.calcValues(_, u, T, E, r, i, d), this.MSG_BREAKEVEN = "";
    for (var K = 0; K <= _; K++) this.calcValues(K, u, T, E, r, i, d), this.fRoth[K] = this.nROTH_TOT_ATR, this.fTaxable[K] = this.nIRA_TOT_ATR, this.fTraditional[K] = this.nIRA_AF_TAX_ATR, this.sCats[K] = t.input(o + K), this.nROTH_TOT_ATR > c + i && "" == this.MSG_BREAKEVEN && (this.MSG_BREAKEVEN = rothConversion.replace("MSG_YEARS", t.number(K + o), this.MSG_BREAKEVEN_POSITIVE), this.MSG_BREAKEVEN = rothConversion.replace("ROTH_TOT_ATR", t.dollars(this.nROTH_TOT_ATR), this.MSG_BREAKEVEN));
    "" == this.MSG_BREAKEVEN && (this.MSG_BREAKEVEN = rothConversion.replace("MSG_YEARS", t.number(s), this.MSG_BREAKEVEN_NEGATIVE), this.MSG_BREAKEVEN = rothConversion.replace("ROTH_TOT_ATR", t.dollars(this.nROTH_TOT_ATR), this.MSG_BREAKEVEN)), this.calcValues(_, u, T, E, r, i, d), this.nATR_$_DIFF >= 0 ? (this.ATR_DIFF_MSG = this.MSG_INCREASE + " " + t.dollars(this.nATR_$_DIFF), this.ATR_EXTENDED_MSG = this.MSG_POSITIVE) : (this.ATR_DIFF_MSG = this.MSG_DECREASE + " " + t.dollars(-1 * this.nATR_$_DIFF), this.ATR_EXTENDED_MSG = this.MSG_NEGATIVE);
    var J, f = this.nROTH_TOT_ATR / this.nIRA_TOT_ATR - 1,
        A = this.nATR_$_DIFF / Math.pow(1 + u, _);
    J = A > 0 ? this.MSG_ROTH_LABEL : this.MSG_TRADITIONAL_LABEL;
    var m = this.nIRA_BF_TAX_ATR / ((Math.pow(1 + E / 100, l) - 1) / (E / 100) / Math.pow(1 + E / 100, l)),
        C = m,
        R = m * (r / 100),
        v = m - R,
        y = v * ((Math.pow(1 + u, l) - 1) / u) / Math.pow(1 + u, l),
        I = C * ((Math.pow(1 + u, l) - 1) / u) / Math.pow(1 + u, l),
        b = y + this.nIRA_TAX_PMT_RTN_ATR,
        L = I - b,
        S = I / b - 1,
        D = L / Math.pow(1 + u, _);
    h = D > 0 ? this.MSG_ROTH_LABEL : this.MSG_TRADITIONAL_LABEL, this.nAF_TAX_ROTH_AMT = i - c, this.nAF_TAX_ROTH_TOT_ATR = this.nAF_TAX_ROTH_AMT / Math.pow(1 + E / 100, -1 * _), this.nAF_TAX_ROTH_$_DIFF = this.nAF_TAX_ROTH_TOT_ATR - this.nIRA_AF_TAX_ATR, this.nAF_TAX_ROTH_PERC_DIFF = this.nAF_TAX_ROTH_TOT_ATR / this.nIRA_AF_TAX_ATR - 1, this.nAF_TAX_ROTH_NPV = this.nAF_TAX_ROTH_$_DIFF / Math.pow(1 + u, _), this.nAF_TAX_ROTH_NPV > 0 ? this.sAF_TAX_ROTH_ADV_MSG = this.MSG_ROTH_LABEL : this.sAF_TAX_ROTH_ADV_MSG = this.MSG_TRADITIONAL_LABEL, this.fRothNumbers[0] = this.nROTH_TOT_ATR, this.fIraNumbers[0] = this.nIRA_AF_TAX_ATR, this.fWithTaxesInvestedNumbers[0] = this.nIRA_TOT_ATR, this.nYRS_BF_RTR = _, this.nAGE_DEATH = p, this.nROR_AF_TAX = u, this.nROTH_TAX_TOT = c, this.nROTH_TAX_PMT = T, this.nATR_PERC_DIFF = f, this.nATR_NPV = A, this.sATR_ADV_MSG = J, this.nIRA_BF_TAX_AMRT_PMT = m, this.nROTH_AMRT_PMT = C, this.nIRA_AMRT_TAX = R, this.nIRA_AF_TAX_AMRT_PMT = v, this.nIRA_AF_TAX_AMRT_TOT = y, this.nROTH_TOT_AMRT = I, this.nIRA_TOT_AMRT = b, this.nAMRT_$_DIFF = L, this.nAMRT_PERC_DIFF = S, this.nAMRT_NPV = D, this.sAMRT_ADV_MSG = h;
}, rothConversion.RothTransferCalc.prototype.formatReport = function (e) {
    var t = rothConversion,
        i = (this.iDecimal, e);
    return i = rothConversion.replace("DELAY_TAXES", t.yesno(this.DELAY_TAXES), i), i = rothConversion.replace("ATR_EXTENDED_MSG", this.ATR_EXTENDED_MSG, i), i = rothConversion.replace("AF_TAX_ROTH_AMT", t.dollars(this.nAF_TAX_ROTH_AMT), i), i = rothConversion.replace("AF_TAX_ROTH_TOT_ATR", t.dollars(this.nAF_TAX_ROTH_TOT_ATR), i), i = rothConversion.replace("AF_TAX_ROTH_$_DIFF", t.dollars(this.nAF_TAX_ROTH_$_DIFF), i), i = rothConversion.replace("AF_TAX_ROTH_PERC_DIFF", t.percent(this.nAF_TAX_ROTH_PERC_DIFF, 1), i), i = rothConversion.replace("AF_TAX_ROTH_NPV", t.dollars(this.nAF_TAX_ROTH_NPV), i), i = rothConversion.replace("AF_TAX_ROTH_ADV_MSG", this.sAF_TAX_ROTH_ADV_MSG, i), i = rothConversion.replace("ROTH_TAX_PMT_CNT", t.number(this.nROTH_TAX_PMT_CNT), i), i = this.nROTH_TAX_PMT_CNT > 1 ? rothConversion.replace("YEAR_TAX_DUE", "1/2 due in tax year 2011 and 2012", i) : rothConversion.replace("YEAR_TAX_DUE", "Tax year of conversion", i), i = rothConversion.replace("YRS_BF_RTR", t.number(this.nYRS_BF_RTR), i), i = rothConversion.replace("YRS_AF_RTR", t.number(this.nYRS_AF_RTR), i), i = rothConversion.replace("TAX_RATE_INVEST", t.percent(this.nTAX_RATE_INVEST / 100, 2), i), i = rothConversion.replace("TAX_RATE_ATR", t.percent(this.nTAX_RATE_ATR / 100, 2), i), i = rothConversion.replace("TAX_RATE", t.percent(this.nTAX_RATE / 100, 2), i), i = rothConversion.replace("ROTH_TOT_ATR", t.dollars(this.nROTH_TOT_ATR), i), i = rothConversion.replace("ROTH_TOT_AMRT", t.dollars(this.nROTH_TOT_AMRT), i), i = rothConversion.replace("ROTH_TAX_TOT", t.dollars(this.nROTH_TAX_TOT), i), i = rothConversion.replace("ROTH_TAX_PMT", t.dollars(this.nROTH_TAX_PMT), i), i = rothConversion.replace("ROTH_TAX_PMT", t.dollars(this.nROTH_TAX_PMT / this.nROTH_TAX_PMT_CNT), i), i = rothConversion.replace("ROTH_AMRT_PMT", t.dollars(this.nROTH_AMRT_PMT), i), i = rothConversion.replace("ROR_INVEST", t.percent(this.nROR_INVEST / 100, 2), i), i = rothConversion.replace("ROR_AF_TAX", t.percent(this.nROR_AF_TAX, 2), i), i = rothConversion.replace("IRA_TOT_ATR", t.dollars(this.nIRA_TOT_ATR), i), i = rothConversion.replace("IRA_TOT_AMRT", t.dollars(this.nIRA_TOT_AMRT), i), i = rothConversion.replace("IRA_TAX_PMT_RTN_ATR", t.dollars(this.nIRA_TAX_PMT_RTN_ATR), i), i = rothConversion.replace("IRA_TAX_ATR", t.dollars(this.nIRA_TAX_ATR), i), i = rothConversion.replace("IRA_BF_TAX_ATR", t.dollars(this.nIRA_BF_TAX_ATR), i), i = rothConversion.replace("IRA_BF_TAX_AMRT_PMT", t.dollars(this.nIRA_BF_TAX_AMRT_PMT), i), i = rothConversion.replace("IRA_AMRT_TAX", t.dollars(this.nIRA_AMRT_TAX), i), i = rothConversion.replace("IRA_AF_TAX_ATR", t.dollars(this.nIRA_AF_TAX_ATR), i), i = rothConversion.replace("IRA_AF_TAX_AMRT_TOT", t.dollars(this.nIRA_AF_TAX_AMRT_TOT), i), i = rothConversion.replace("IRA_AF_TAX_AMRT_PMT", t.dollars(this.nIRA_AF_TAX_AMRT_PMT), i), i = rothConversion.replace("ATR_PERC_DIFF", t.percent(this.nATR_PERC_DIFF, 1), i), i = rothConversion.replace("ATR_NPV", t.dollars(this.nATR_NPV), i), i = rothConversion.replace("ATR_ADV_MSG", this.sATR_ADV_MSG, i), i = rothConversion.replace("ATR_$_DIFF", t.dollars(this.nATR_$_DIFF), i), i = rothConversion.replace("AMT_AF_TAX", t.dollars(this.nAMT_AF_TAX), i), i = rothConversion.replace("AMT", t.dollars(this.nAMT), i), i = rothConversion.replace("AMRT_PERC_DIFF", t.percent(this.nAMRT_PERC_DIFF, 1), i), i = rothConversion.replace("AMRT_NPV", t.dollars(this.nAMRT_NPV), i), i = rothConversion.replace("AMRT_ADV_MSG", this.sAMRT_ADV_MSG, i), i = rothConversion.replace("AMRT_$_DIFF", t.dollars(this.nAMRT_$_DIFF), i), i = rothConversion.replace("AGE_DEATH", t.number(this.nAGE_DEATH), i), i = rothConversion.replace("AGE_ATR", t.number(this.nAGE_ATR), i), i = rothConversion.replace("AGE", t.number(this.nAGE), i), i = rothConversion.replace("ATR_DIFF_MSG", this.ATR_DIFF_MSG, i), rothConversion.replace("MSG_BREAKEVEN", this.MSG_BREAKEVEN, i);
}, rothConversion.RothTransferCalc.prototype.calcValues = function (e, t, i, a, r, n, o) {
    this.nIRA_BF_TAX_ATR = n / Math.pow(1 + a / 100, -1 * e), this.nIRA_TAX_ATR = (this.nIRA_BF_TAX_ATR - o) * (r / 100), this.DELAY_TAXES ? (this.nIRA_TAX_PMT_RTN_ATR = rothConversion.FV_AMT(t, e - 1, i / 2), this.nIRA_TAX_PMT_RTN_ATR += rothConversion.FV_AMT(t, e - 2, i / 2), this.nROTH_TAX_PMT_CNT = 2) : (this.nIRA_TAX_PMT_RTN_ATR = rothConversion.FV_AMT(t, e, i), this.nROTH_TAX_PMT_CNT = 1), this.nIRA_AF_TAX_ATR = this.nIRA_BF_TAX_ATR - this.nIRA_TAX_ATR, this.nIRA_TOT_ATR = this.nIRA_AF_TAX_ATR + this.nIRA_TAX_PMT_RTN_ATR, this.nROTH_TOT_ATR = this.nIRA_BF_TAX_ATR, this.nATR_$_DIFF = this.nROTH_TOT_ATR - this.nIRA_TOT_ATR;
}, rothConversion.CalcName = "Roth IRA Conversion", rothConversion.CalcType = "rothiratransfer", rothConversion.CalculatorTitleTemplate = "Your IRA could rothConversion1 with a Roth Conversion.", rothConversion.parseInputs = function (e) {
    return e;
}, rothConversion.initialize = function () {
    rothConversion.CalcControl = new rothConversion.RothTransferCalc, rothConversion.GuiControl = new rothConversion.RothTransfer(rothConversion.CalcControl);
}, rothConversion.RothTransfer = function (e) {
    var t = rothConversion.gLegend;
    rothConversion.inputs.items, this.MSG_GRAPH2 = rothConversion.parameters.get("MSG_GRAPH2", "After tax net return from Roth IRA"), this.MSG_GRAPH3 = rothConversion.parameters.get("MSG_GRAPH3", "After tax net return from Traditional IRA"), this.MSG_GRAPH4 = rothConversion.parameters.get("MSG_GRAPH4", "Traditional IRA + invest"), this.MSG_GRAPH5 = rothConversion.parameters.get("MSG_GRAPH5", "Roth tax payment"), rothConversion.DollarSlider("AMT", "Amount to convert", 0, 1e7, 0, 0, 4), rothConversion.PercentSlider("TAX_RATE", "Current tax rate", 0, 50, 2), rothConversion.PercentSlider("TAX_RATE_ATR", "Tax rate at retirement", 0, 50, 2), rothConversion.PercentSlider("TAX_RATE_INVEST", "Investment tax rate", 0, 50, 2), rothConversion.NumberSlider("AGE", "Current age", 1, 70, 0), rothConversion.NumberSlider("AGE_ATR", "Age at retirement", 13, 115, 0), rothConversion.InvestRateSlider("ROR_INVEST", "Rate of return"), rothConversion.DollarSlider("AMT_AF_TAX", "Non-deductible contributions", 0, 1e6, 0, 0, 4);
    var i = rothConversion.gNewGraph(rothConversion.gCOLUMN, "GRAPH1", true, false, rothConversion.colorList[1], rothConversion.parameters.get("MSG_GRAPH1", "Roth Conversion Results at Retirement"));
    i._legend._iOrientation = t.BOTTOM, i._showItemLabel = true, i._axisX.setVisible(false), i._axisX._fSpacingPercent = 0.25;
    var a = rothConversion.parameters.get("MSG_DROPPER_TITLE", "Roth IRA Conversion Inputs:"),
        r = (rothConversion.parameters.get("MSG_DROPPER_CLOSETITLE", "Total savings rothConversion1"), function () {
            return a;
        });
    rothConversion.addDropper(new rothConversion.Dropper("INPUTS", true, r, r), rothConversion.colorList[0]);
}, rothConversion.RothTransfer.prototype.setValues = function (e) {
    var t = rothConversion.inputs.items;
    e.nAMT = t.AMT.getValue(), e.nTAX_RATE = t.TAX_RATE.getValue(), e.nTAX_RATE_ATR = t.TAX_RATE_ATR.getValue(), e.nTAX_RATE_INVEST = t.TAX_RATE_INVEST.getValue(), e.nAGE = t.AGE.getValue(), e.nAGE_ATR = t.AGE_ATR.getValue(), e.nROR_INVEST = t.ROR_INVEST.getValue(), e.nAMT_AF_TAX = t.AMT_AF_TAX.getValue(), e.nYRS_AF_RTR = 30;
}, rothConversion.RothTransfer.prototype.refresh = function (e) {
    var t = rothConversion,
        i = (rothConversion.gLegend, rothConversion.inputs.items, rothConversion.gGraphs[0]);
    rothConversion.setTitleTemplate(e.ATR_DIFF_MSG), i.removeAll(), i.setGraphCategories(e.cats), i.add(new rothConversion.gGraphDataSeries(e.fRothNumbers, this.MSG_GRAPH2 + " ", i.getColor(1), t.dollars(e.nROTH_TOT_ATR))), i.add(new rothConversion.gGraphDataSeries(e.fIraNumbers, this.MSG_GRAPH3 + " ", i.getColor(3), t.dollars(e.nIRA_AF_TAX_ATR))), i.add(new rothConversion.gGraphDataSeries(e.fWithTaxesInvestedNumbers, this.MSG_GRAPH4 + " " + t.dollars(e.nROTH_TAX_TOT) + " " + this.MSG_GRAPH5 + " ", i.getColor(2), t.dollars(e.nIRA_TOT_ATR))), i.paint();
}, rothConversion.InputScreenText = " <div id=rothConversion-D-INPUTS><div id=rothConversion-P-INPUTS>Input information:</div></div> <div id=rothConversion-E-INPUTS > <div id='rothConversion-C-AMT'><input id='rothConversion-AMT' /></div> <div id='rothConversion-C-AMT_AF_TAX'><input id='rothConversion-AMT_AF_TAX' /></div> <div id='rothConversion-C-AGE'><input id='rothConversion-AGE' /></div> <div id='rothConversion-C-AGE_ATR'><input id='rothConversion-AGE_ATR' /></div> <div id='rothConversion-C-ROR_INVEST'><input id='rothConversion-ROR_INVEST' /></div> <div id='rothConversion-C-TAX_RATE'><input id='rothConversion-TAX_RATE' /></div> <div id='rothConversion-C-TAX_RATE_ATR'><input id='rothConversion-TAX_RATE_ATR' /></div> <div id='rothConversion-C-TAX_RATE_INVEST'><input id='rothConversion-TAX_RATE_INVEST' /></div> <div style=\"height:10px\"></div> </div> **GRAPH1** ", rothConversion.DefinitionText = " <div id='rothConversion-D-' ><dt>Please note the following important information regarding any Roth conversion</dt><dd><UL><li>You must pay ordinary income tax on the amount converted (specifically, on pre-tax contributions and investment gains). <li>If you pay the taxes using money from the traditional IRA, you will lose the potential benefits of tax-free growth on that amount. <li>If you are under age 59&frac12;, you may be subject to a 10% federal tax penalty if you withdraw money from your traditional IRA to pay the tax on the conversion. You may also have to pay state tax penalties. <li>If you converted in 2010, you had the option to include the conversion amount as income in 2010 or elect to split the income on tax returns for 2011 and 2012. This option was only available in 2010. <li>For an investor in a lower tax bracket, traditional IRA contributions may be tax deductible while Roth IRA contributions are not. <li>After conversion in order to take any distributions that include earnings that are tax free, the Roth IRA must be opened for 5 tax years. Eligible tax free distributions include those taken for death or disability, after age 59&frac12;, or for a first time home purchase. </UL></dd></div> <div id='rothConversion-D-AMT' ><dt>Amount to convert</dt><dd>Amount to convert from a traditional IRA account to a Roth IRA. We assume that you are paying any taxes owed with funds that you have available outside of the account you are converting. If you are under 59&frac12;, the IRS treats any money not directly rolled over to the Roth IRA as an early withdrawal &ndash; even if that money is used to pay the tax bill caused by the conversion and, except in the case of a rollover from a governmental 457(b) plan, the funds will be subject to a federal tax penalty unless an exception applies.</dd></div> <div id='rothConversion-D-AMT_AF_TAX' ><dt>Non-deductible contributions</dt><dd>The amounts, if any, contributed to your traditional IRAs or employer-sponsored accounts made with after-tax contributions. It is important to note that you may not \"cherry pick\" funds that are either after-tax or pre-tax to convert. If you are not converting all of your IRAs or the entire amount in your employer-sponsored plan, you must convert a prorated amount of the pre-tax (deductible) and after-tax (nondeductible) balance. All of your IRAs are added together and treated as one for this purpose.</dd></div> <div id='rothConversion-D-AGE' ><dt>Current age</dt><dd>Current age. This age must be less than 70. Since this calculator does not take Required Minimum Distributions (RMD) into account, which begin at age 70&frac12;, it is not designed for individuals that are currently required to begin making these distributions.</dd></div> <div id='rothConversion-D-AGE_ATR' ><dt>Age at retirement</dt><dd>Desired age at retirement.</dd></div> <div id='rothConversion-D-ROR_INVEST' ><dt>Rate of return</dt><dd>The annual rate of return for your IRA. This calculator assumes that your return is compounded annually. **ROR_DEFINITION** <!--MSG_SALES_FEES--><p> <!--</dd></div> <div id='rothConversion-D-' ><dt>Total IRA Balance (for all IRAs)</dt><dd>The current balance of all of your Traditional IRAs, SEP IRAs and rollover IRAs. If you are not converting all of your IRAs we use this balance to calculate the percentage of partial conversion that was made as non-deductible contributions.<p>--></dd></div> <div id='rothConversion-D-TAX_RATE' ><dt><!--MSG_TAX_RATE_DEFN-->Current tax rate</dt><dd>Current marginal income tax rate that will apply to conversion amount. Please note that the marginal tax rate for your conversion may be higher than your current marginal tax rate if the conversion moves your AGI into a higher income tax bracket. It is also possible, especially on very large conversions, that part of your conversion be subject to more than one tax rate. **TAXTABLE_CURRENT_DEFINITION**</dd></div> <div id='rothConversion-D-TAX_RATE_ATR' ><dt>Tax rate at retirement</dt><dd>Expected marginal income tax rate at retirement.</dd></div> <div id='rothConversion-D-TAX_RATE_INVEST' ><dt>Investment tax rate</dt><dd>Expected marginal tax rate (base this on expected capital gains rate) for investments. This calculator assumes that you invest the amount that you would have had to pay in taxes in a taxable investment account. The investment tax rate is used for calculating the annual return on these taxable investments. For many, this will be the same as their income tax rate. If you expect your non-IRA investments to be primarily from long-term capital gains or dividends, enter your expected capital gains rate here.</dd></div> ", rothConversion.ReportText = ' <p> <!--HEADING "Roth IRA Conversion Results" HEADING--> <h2 class=\'rothConversionReportHeader rothConversionFontHeading\'>IRA could ATR_DIFF_MSG at retirement.</h2> Your retirement total savings, after taxes, would ATR_DIFF_MSG by converting your existing IRA to a Roth IRA. That equals a ATR_PERC_DIFF difference. ATR_EXTENDED_MSG **GRAPH** MSG_BREAKEVEN <div class=rothConversionReportTableDiv><table class=rothConversionReportTable><caption class=\'rothConversionHeaderRow rothConversionHeading\'>IRA Values at Retirement</caption> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder rothConversionCell60" >Traditional IRA before taxes</th><td class="rothConversionCell rothConversionCell40" >IRA_BF_TAX_ATR</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Traditional IRA tax liability at retirement</th><td class="rothConversionCell" >IRA_TAX_ATR</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Return on ROTH_TAX_TOT "tax investment"</th><td class="rothConversionCell" >IRA_TAX_PMT_RTN_ATR</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Traditional IRA Total portfolio value at retirement</th><td class="rothConversionCellStrong" >IRA_TOT_ATR</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Roth IRA value at retirement</th><td class="rothConversionCellStrong" >ROTH_TOT_ATR</td></tr> <tr class=rothConversionFooterRow><th class="rothConversionLabel rothConversionCellBorder">Total difference at retirement</th><td class="rothConversionCellStrong" >ATR_$_DIFF<br>ATR_PERC_DIFF</td></tr></table> </div> <div class=rothConversionInset> <P class=rothConversionFooter>*This calculator assumes that you invest the amount that you would have had to pay in taxes in a taxable investment account. The investment tax rate of TAX_RATE_INVEST is used to calculate the annual return on this taxable investment. </div> <div class=rothConversionReportTableDiv><table class=rothConversionReportTable><caption class=\'rothConversionHeaderRow rothConversionHeading\'>Input Values</caption> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder rothConversionCell60" >Amount to convert</th><td class="rothConversionCell rothConversionCell40" >AMT</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Non-deductible contributions</th><td class="rothConversionCell" >AMT_AF_TAX</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Current tax rate<sup>1</sup></th><td class="rothConversionCell" >TAX_RATE</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Tax rate at retirement<sup>2</sup></th><td class="rothConversionCell" >TAX_RATE_ATR</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Investment tax rate<sup>3</sup></th><td class="rothConversionCell" >TAX_RATE_INVEST</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Current age&nbsp;</th><td class="rothConversionCell" >AGE</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Age at retirement&nbsp;</th><td class="rothConversionCell" >AGE_ATR</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Rate of return</th><td class="rothConversionCell" >ROR_INVEST&nbsp;</td></tr> <tr class=rothConversionOddRow><th class="rothConversionLabel rothConversionCellBorder">Roth tax liability<sup>4</sup></th><td class="rothConversionCell" >ROTH_TAX_TOT</td></tr> <tr class=rothConversionEvenRow><th class="rothConversionLabel rothConversionCellBorder">Taxes are due</th><td class="rothConversionCell" >YEAR_TAX_DUE</td></tr></table> </div> <div class=rothConversionInset></div> <sup>1</sup>Current marginal income tax rate that will apply to conversion amount. <sup>2</sup>Expected marginal income tax rate at retirement. <sup>3</sup>Expected marginal tax rate (based this on expected capital gains rate) for investment. <sup>4</sup>Estimated tax amount due based on Roth IRA conversion amount. </OL> </div> ';