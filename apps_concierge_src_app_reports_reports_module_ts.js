"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_reports_reports_module_ts"],{

/***/ 74065:
/*!************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/catering/catering-report-items.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringReportItemsComponent: () => (/* binding */ CateringReportItemsComponent)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-report-state.service */ 47552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);








const _c0 = () => ({
  key: "name",
  name: "Name"
});
const _c1 = a0 => ({
  key: "options",
  name: "Options",
  content: a0
});
const _c2 = () => ({
  key: "quantity",
  name: "Quantity"
});
const _c3 = a0 => ({
  key: "unit_price",
  name: "Unit Price",
  content: a0
});
const _c4 = a0 => ({
  key: "total_cost",
  name: "Total Cost",
  content: a0
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function CateringReportItemsComponent_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().data;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r1.options(data_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r1.length, " option(s) ");
  }
}
function CateringReportItemsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CateringReportItemsComponent_ng_template_5_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1.length);
  }
}
function CateringReportItemsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, (data_r3 || 0) / 100, ctx_r1.code));
  }
}
class CateringReportItemsComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_report, _org) {
    this._report = _report;
    this._org = _org;
    this.print = false;
    this.items = this._report.catering_items;
  }
  options(opts) {
    return opts.map(_ => _.name).join('\n');
  }
  static #_ = this.ɵfac = function CateringReportItemsComponent_Factory(t) {
    return new (t || CateringReportItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringReportStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringReportItemsComponent,
    selectors: [["catering-report-items"]],
    inputs: {
      print: "print"
    },
    decls: 9,
    vars: 18,
    consts: [["option_template", ""], ["cost_template", ""], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "rounded", "overflow-hidden", "bg-base-100", "border", "border-base-200", "mx-auto", "my-2"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["empty_message", "No orders for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], [1, "p-4"], ["class", "text-xs px-2 py-1 rounded bg-base-200", 3, "matTooltip", 4, "ngIf"], [1, "text-xs", "px-2", "py-1", "rounded", "bg-base-200", 3, "matTooltip"]],
    template: function CateringReportItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Ordered Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "simple-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CateringReportItemsComponent_ng_template_5_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, CateringReportItemsComponent_ng_template_7_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const option_template_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        const cost_template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.items)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](12, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, option_template_r4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c3, cost_template_r5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c4, cost_template_r5)))("page_size", ctx.print ? 0 : 10)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe]
  });
}

/***/ }),

/***/ 53366:
/*!*************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/catering/catering-report-orders.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringReportOrdersComponent: () => (/* binding */ CateringReportOrdersComponent)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-report-state.service */ 47552);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);











const _c0 = a0 => ({
  key: "deliver_at",
  name: "Deliver At",
  content: a0
});
const _c1 = () => ({
  key: "item_count",
  name: "Items"
});
const _c2 = a0 => ({
  key: "total_cost",
  name: "Total Cost",
  content: a0
});
const _c3 = (a0, a1, a2) => [a0, a1, a2];
function CateringReportOrdersComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, data_r2), " at ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, data_r2, ctx_r2.time_format), " ");
  }
}
function CateringReportOrdersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, data_r4 / 100, ctx_r2.code), " ");
  }
}
class CateringReportOrdersComponent {
  get code() {
    return this._org.currency_code;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_report, _org, _settings) {
    this._report = _report;
    this._org = _org;
    this._settings = _settings;
    this.print = false;
    this.orders = this._report.catering_orders;
    this.download = () => this._report.downloadOrders();
  }
  static #_ = this.ɵfac = function CateringReportOrdersComponent_Factory(t) {
    return new (t || CateringReportOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringReportStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringReportOrdersComponent,
    selectors: [["catering-report-orders"]],
    inputs: {
      print: "print"
    },
    decls: 12,
    vars: 13,
    consts: [["date_template", ""], ["cost_template", ""], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "rounded", "overflow-hidden", "bg-base-100", "border", "border-base-200", "mx-auto", "my-2"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["matRipple-icon", "", "matTooltip", "Download list", 1, "print:hidden", 3, "click"], ["empty_message", "No orders for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"]],
    template: function CateringReportOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringReportOrdersComponent_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.download());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "simple-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CateringReportOrdersComponent_ng_template_8_Template, 4, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(10, CateringReportOrdersComponent_ng_template_10_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const date_template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        const cost_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.orders)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, date_template_r5), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, cost_template_r6)))("sortable", true)("page_size", ctx.print ? 0 : 10);
      }
    },
    dependencies: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
  });
}

/***/ }),

/***/ 6172:
/*!**************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/catering/catering-report-overall.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringReportOverallComponent: () => (/* binding */ CateringReportOverallComponent)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-report-state.service */ 47552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);






class CateringReportOverallComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_report, _org) {
    this._report = _report;
    this._org = _org;
    this.stats = this._report.stats;
  }
  static #_ = this.ɵfac = function CateringReportOverallComponent_Factory(t) {
    return new (t || CateringReportOverallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_catering_report_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringReportStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringReportOverallComponent,
    selectors: [["catering-report-overall"]],
    decls: 32,
    vars: 21,
    consts: [["item", "", 1, "flex", "flex-col", "flex-1", "items-center", "justify-center"], ["count", "", 1, "text-3xl"], [1, "print:text-sm"], ["unique", "", 1, "text-3xl"], ["items", "", 1, "text-3xl"], ["total", "", 1, "text-3xl"], ["average", "", 1, "text-3xl"]],
    template: function CateringReportOverallComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Unique Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Ordered Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 0)(19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 0)(26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Order Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.stats)) == null ? null : tmp_0_0.order_count) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx.stats)) == null ? null : tmp_1_0.unique_items) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 9, ctx.stats)) == null ? null : tmp_2_0.item_count) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 13, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 11, ctx.stats)) == null ? null : tmp_3_0.total_cost) / 100 || 0, ctx.code), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 18, ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 16, ctx.stats)) == null ? null : tmp_4_0.avg_cost) / 100 || 0, ctx.code), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-wrap: wrap;\n                align-items: center;\n                justify-content: center;\n                padding: 0.5rem;\n                max-width: 64rem;\n                margin: 0 auto;\n            }\n\n            [item][_ngcontent-%COMP%] {\n                border: 1px solid var(--b2);\n                border-radius: 0.5rem;\n                padding: 1rem;\n                margin: 0.5rem;\n                height: 6rem;\n                width: 12rem;\n                min-width: 7rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9jYXRlcmluZy9jYXRlcmluZy1yZXBvcnQtb3ZlcmFsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLHVCQUF1QjtnQkFDdkIsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGNBQWM7WUFDbEI7O1lBRUE7Z0JBQ0ksMkJBQTJCO2dCQUMzQixxQkFBcUI7Z0JBQ3JCLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osZUFBZTtZQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjRyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtpdGVtXSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 47552:
/*!**********************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/catering/catering-report-state.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringReportStateService: () => (/* binding */ CateringReportStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/catering */ 4157);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);









class CateringReportStateService {
  constructor(_reports) {
    this._reports = _reports;
    /** List of catering orders for the selected period and levels */
    this.catering_orders = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._reports.options, this._reports.bookings]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([{
      start,
      end
    }, list]) => {
      const start_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(start).valueOf();
      const end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(end).valueOf();
      const orders = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.flatten)(list.map(_ => _.valid_catering || []));
      const out = orders.filter(_ => _.deliver_at_time >= start_date && _.deliver_at_time < end_date && _.status !== 'cancelled').sort((a, b) => a.event?.date - b.event?.date);
      return out;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1));
    /** List of catering items for the selected period and levels */
    this.catering_items = this.catering_orders.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(orders => {
      const items = [];
      for (const order of orders) {
        for (const item of order?.items || []) {
          const index = items.findIndex(_ => item.options_string === _.options_string);
          if (index >= 0) {
            item[index] = new _placeos_catering__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
              ...item,
              quantity: item?.quantity + item[index]?.quantity
            });
          } else {
            items.push(item);
          }
        }
      }
      return items.sort((a, b) => b.quantity - a.quantity);
    }));
    this.stats = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.catering_orders, this.catering_items]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([orders, items]) => {
      const total_cost = orders.reduce((c, i) => c + i.total_cost, 0);
      return {
        order_count: orders.length,
        unique_items: items.length,
        item_count: orders.reduce((c, i) => c + i.item_count, 0),
        total_cost,
        avg_cost: total_cost / orders.length
      };
    }));
  }
  downloadOrders() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const orders = yield _this.catering_orders.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).toPromise();
      const csv_data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.jsonToCsv)(orders);
      return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.downloadFile)('catering-orders.csv', csv_data);
    })();
  }
  static #_ = this.ɵfac = function CateringReportStateService_Factory(t) {
    return new (t || CateringReportStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_3__.ReportsStateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: CateringReportStateService,
    factory: CateringReportStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 53984:
/*!******************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/catering/catering-report.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringReportComponent: () => (/* binding */ CateringReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _reports_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-options.component */ 5956);
/* harmony import */ var _catering_report_overall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-report-overall.component */ 6172);
/* harmony import */ var _catering_report_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-report-orders.component */ 53366);
/* harmony import */ var _catering_report_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-report-items.component */ 74065);












function CateringReportComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "catering-report-overall")(2, "catering-report-orders", 10)(3, "catering-report-items", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("print", ctx_r1.printing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("print", ctx_r1.printing);
  }
}
function CateringReportComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CateringReportComponent_ng_container_8_ng_container_1_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const empty_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function CateringReportComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading report data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
  }
}
function CateringReportComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Select levels and time period to generate a report. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class CateringReportComponent {
  get logo() {
    return this._settings.get('app.logo_light') || {};
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.printing = false;
    this.total_count = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(i => i.count || 0));
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.setOptions({
      type: 'events'
    });
  }
  static #_ = this.ɵfac = function CateringReportComponent_Factory(t) {
    return new (t || CateringReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_0__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CateringReportComponent,
    selectors: [["catering-report"]],
    decls: 14,
    vars: 5,
    consts: [["load_state", ""], ["empty_state", ""], [3, "printing"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200", "overflow-hidden"], [1, "h-12", 3, "src"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]],
    template: function CateringReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "reports-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("printing", function CateringReportComponent_Template_reports_options_printing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.printing = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 6)(5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Catering Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CateringReportComponent_ng_container_8_Template, 3, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CateringReportComponent_ng_template_10_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(12, CateringReportComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, ctx.loading))("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _reports_options_component__WEBPACK_IMPORTED_MODULE_2__.ReportsOptionsComponent, _catering_report_overall_component__WEBPACK_IMPORTED_MODULE_3__.CateringReportOverallComponent, _catering_report_orders_component__WEBPACK_IMPORTED_MODULE_4__.CateringReportOrdersComponent, _catering_report_items_component__WEBPACK_IMPORTED_MODULE_5__.CateringReportItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9jYXRlcmluZy9jYXRlcmluZy1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8528:
/*!*********************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactTracingOptionsComponent: () => (/* binding */ ContactTracingOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _contact_tracing_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-tracing-state.service */ 90003);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_form_fields_src_lib_date_range_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/date-range-field.component */ 5472);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);











class ContactTracingOptionsComponent {
  constructor(_state) {
    this._state = _state;
    this.printing = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = this._state.options;
    this.setOptions = _ => this._state.setOptions(_);
    this.generate = () => this._state.generateReport();
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
  static #_ = this.ɵfac = function ContactTracingOptionsComponent_Factory(t) {
    return new (t || ContactTracingOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_contact_tracing_state_service__WEBPACK_IMPORTED_MODULE_0__.ContactTracingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContactTracingOptionsComponent,
    selectors: [["contact-tracing-options"]],
    outputs: {
      printing: "printing",
      download: "download"
    },
    decls: 19,
    vars: 15,
    consts: [["startDate", ""], ["endDate", ""], [1, "flex", "items-center", "space-x-2", "w-full", "p-4", "bg-base-100", "shadow"], [3, "ngModelChange", "ngModel"], ["placeholder", "Search for user to trace...", 1, "w-64", 3, "ngModelChange", "ngModel"], [1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"]],
    template: function ContactTracingOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "date-range-field")(2, "input", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event ? ctx.setOptions({
            start: $event,
            user: null
          }) : "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event ? ctx.setOptions({
            end: $event,
            user: null
          }) : "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a-user-search-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ContactTracingOptionsComponent_Template_a_user_search_field_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.setOptions({
            user: $event
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactTracingOptionsComponent_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.download.emit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactTracingOptionsComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.print());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx.options)) == null ? null : tmp_2_0.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, ctx.options)) == null ? null : tmp_3_0.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, ctx.options)) == null ? null : tmp_4_0.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, ctx.options)) == null ? null : tmp_5_0.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 13, ctx.options)) == null ? null : tmp_6_0.user));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _libs_form_fields_src_lib_date_range_field_component__WEBPACK_IMPORTED_MODULE_1__.DateRangeFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25rem;\n            }\n\n            button[icon][disabled][_ngcontent-%COMP%] {\n                background-color: var(--n) !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9jb250YWN0LXRyYWNpbmcvY29udGFjdC10cmFjaW5nLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxlQUFlO1lBQ25COztZQUVBO2dCQUNJLHFDQUFxQztZQUN6QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uW2ljb25dW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 63052:
/*!********************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactTracingReportComponent: () => (/* binding */ ContactTracingReportComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 5689);
/* harmony import */ var _contact_tracing_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-tracing-state.service */ 90003);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _contact_tracing_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-tracing-options.component */ 8528);
/* harmony import */ var _get_user_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-user.pipe */ 29819);










const _c0 = a0 => ({
  key: "date",
  name: "Time of Contact",
  content: a0
});
const _c1 = a0 => ({
  key: "user_id",
  name: "Person",
  content: a0
});
const _c2 = a0 => ({
  key: "contact_id",
  name: "Close Contact",
  content: a0
});
const _c3 = a0 => ({
  key: "duration",
  name: "Duration",
  content: a0
});
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const data_r2 = ctx.data;
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, data_r2))) == null ? null : tmp_10_0.name) || row_r3.mac_address, " ");
  }
}
function ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, data_r4, "mediumDate"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, data_r4, ctx_r4.time_format), " ");
  }
}
function ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.formatDuration(data_r6 || 0) || "Less than a minute", " ");
  }
}
function ContactTracingReportComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13)(2, "div", 14)(3, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Contact Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "simple-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_6_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(8, ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_8_Template, 4, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(10, ContactTracingReportComponent_ng_container_8_ng_container_1_ng_template_10_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const date_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const duration_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r4.tracing_events)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](12, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, date_template_r8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, user_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, user_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, duration_template_r9)))("sortable", true)("page_size", ctx_r4.print ? 0 : 30);
  }
}
function ContactTracingReportComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactTracingReportComponent_ng_container_8_ng_container_1_Template, 12, 17, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const empty_state_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r4.options)) == null ? null : tmp_3_0.user)("ngIfElse", empty_state_r10);
  }
}
function ContactTracingReportComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "map-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, ctx_r4.loading));
  }
}
function ContactTracingReportComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select a user from the topbar to begin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class ContactTracingReportComponent {
  get time_format() {
    return this._settings.time_format;
  }
  get logo() {
    return this._settings.get('app.logo_light') || {};
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.printing = false;
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.tracing_events = this._state.events;
    this.setOptions = _ => this._state.setOptions(_);
    this.downloadReport = () => this._state.downloadReport();
    this.formatDuration = d => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])({
      hours: Math.floor(d / 60),
      minutes: d % 60
    });
  }
  static #_ = this.ɵfac = function ContactTracingReportComponent_Factory(t) {
    return new (t || ContactTracingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_contact_tracing_state_service__WEBPACK_IMPORTED_MODULE_0__.ContactTracingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ContactTracingReportComponent,
    selectors: [["app-contact-tracing-report"]],
    decls: 14,
    vars: 5,
    consts: [["load_state", ""], ["empty_state", ""], ["user_template", ""], ["date_template", ""], ["duration_template", ""], [1, "print:hidden", 3, "printing", "download"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200", "overflow-hidden"], [1, "h-12", 3, "src"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "my-2", "rounded-lg", "border", "border-base-200"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["empty_message", "No contact tracing events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"], [1, "opacity-30"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "screen-only"]],
    template: function ContactTracingReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "contact-tracing-options", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("printing", function ContactTracingReportComponent_Template_contact_tracing_options_printing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.printing = $event);
        })("download", function ContactTracingReportComponent_Template_contact_tracing_options_download_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.downloadReport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 9)(5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Contact Tracing Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ContactTracingReportComponent_ng_container_8_Template, 3, 4, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ContactTracingReportComponent_ng_template_10_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(12, ContactTracingReportComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 3, ctx.loading))("ngIfElse", load_state_r11);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _contact_tracing_options_component__WEBPACK_IMPORTED_MODULE_3__.ContactTracingOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _get_user_pipe__WEBPACK_IMPORTED_MODULE_4__.GetUserPipe],
    styles: ["[_nghost-%COMP%] {\n                width: 100%;\n                height: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9jb250YWN0LXRyYWNpbmcvY29udGFjdC10cmFjaW5nLXJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 90003:
/*!*****************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactTracingStateService: () => (/* binding */ ContactTracingStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _get_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-user.pipe */ 29819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);













class ContactTracingStateService {
  get system_id() {
    return this._org.binding('contact_tracing');
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_org, _reports, _settings) {
    this._org = _org;
    this._reports = _reports;
    this._settings = _settings;
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this._generate = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(Date.now()),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(Date.now())
    });
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._options, this._generate]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)((a, b) => a[1] === b[1]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([_, gen]) => !!gen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([{
      start,
      end,
      user
    }]) => {
      if (!user) return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
      this._loading.next('Loading contact events...');
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.getModule)(this.system_id, 'ContactTracing');
      user = user || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      _get_user_pipe__WEBPACK_IMPORTED_MODULE_5__.GetUserPipe.addUser(user);
      return this.system_id && mod ? mod.execute('close_contacts', [user.email, user.username, (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(start), (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(end)]).catch(err => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`${err?.msg || JSON.stringify(err)}`);
        return [];
      }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(list => {
      const user = this._options.getValue().user || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      return list.map(_ => ({
        mac_address: _.mac_address,
        date: _.contact_time * 1000,
        duration: Math.floor(_.duration / 60) || 0,
        user_id: user.id,
        user: user.name,
        contact_id: _.username,
        distance: 1
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(_ => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  downloadReport() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        start,
        end
      } = yield _this._reports.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).toPromise();
      const events = yield _this.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).toPromise();
      const pipe = new _get_user_pipe__WEBPACK_IMPORTED_MODULE_5__.GetUserPipe();
      const processed_events = yield Promise.all(events.map( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
          return {
            'MAC Address': _.mac_address,
            Date: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(_.date, 'dd MMM yyyy, ' + _this.time_format),
            'User Name': _.user,
            'Contact Name': (yield pipe.transform(_.contact_id).toPromise())?.name || (_.contact_id !== 'null' ? _.contact_id : null) || _.mac_address,
            Duration: `${Math.floor(_.duration / 60) ? Math.floor(_.duration / 60) + 'h ' : ''}${Math.floor(_.duration % 60) + 'm'}`,
            Distance: _.distance
          };
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      if (!processed_events?.length) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyWarn)('No events to download.');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)(`report+contact-tracing+${(0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(start, 'yyyy-MM-dd')}+${(0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(end, 'yyyy-MM-dd')}.csv`, (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(processed_events));
    })();
  }
  static #_ = this.ɵfac = function ContactTracingStateService_Factory(t) {
    return new (t || ContactTracingStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_4__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({
    token: ContactTracingStateService,
    factory: ContactTracingStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 29819:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/contact-tracing/get-user.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetUserPipe: () => (/* binding */ GetUserPipe)
/* harmony export */ });
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/users */ 63870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);




const USER_LIST = {};
class GetUserPipe {
  /**
   * Get staff memeber details
   * @param id ID, Email or Staff ID of the user
   */
  transform(id) {
    if (!id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    if (!USER_LIST[id]) {
      USER_LIST[id] = (0,_placeos_users__WEBPACK_IMPORTED_MODULE_0__.searchStaff)(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(_ => _[0] || new _placeos_users__WEBPACK_IMPORTED_MODULE_0__.StaffUser({
        id,
        name: id
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _placeos_users__WEBPACK_IMPORTED_MODULE_0__.StaffUser({
        id,
        name: id
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    }
    return USER_LIST[id];
  }
  static addUser(user) {
    USER_LIST[user.id] = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
  }
  static #_ = this.ɵfac = function GetUserPipe_Factory(t) {
    return new (t || GetUserPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefinePipe"]({
    name: "user",
    type: GetUserPipe,
    pure: true
  });
}

/***/ }),

/***/ 41200:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/reports/custom-report.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomReportComponent: () => (/* binding */ CustomReportComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 26781);







function CustomReportComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, ctx_r0.report_url, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
  }
}
const EMPTY = {};
class CustomReportComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get report_url() {
    let report = (this._settings.get('app.custom_reports') || []).find(_ => _.id === this.id) || EMPTY;
    if (!report.url) return '';
    const url = report.url + (report.url.includes('?') ? '&' : '?') + `kiosk=tv`;
    return url + (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : '');
  }
  constructor(_settings, _route) {
    super();
    this._settings = _settings;
    this._route = _route;
    this.id = '';
  }
  ngOnInit() {
    this.subscription('route.params', this._route.paramMap.subscribe(params => this.id = params.get('id') || ''));
  }
  static #_ = this.ɵfac = function CustomReportComponent_Factory(t) {
    return new (t || CustomReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CustomReportComponent,
    selectors: [["custom-report"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "w-full h-full", 3, "src", 4, "ngIf"], [1, "w-full", "h-full", 3, "src"]],
    template: function CustomReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CustomReportComponent_iframe_0_Template, 2, 4, "iframe", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9jdXN0b20tcmVwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 56508:
/*!*******************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/desks/report-desks-charts.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDesksChartsComponent: () => (/* binding */ ReportDesksChartsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartist */ 63395);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);












class ReportDesksChartsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_state, _org) {
    super();
    this._state = _state;
    this._org = _org;
    this.print = false;
    this.day_list = this._state.day_list;
    this.stats = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._state.options, this._state.counts]);
  }
  ngOnInit() {
    this.subscription('charts', (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.day_list, this.stats]).subscribe(() => this.updateCharts()));
  }
  ngOnChanges(changes) {
    if (changes.print && changes.print.currentValue !== changes.print.previousValue) {
      this.updateCharts();
    }
  }
  updateCharts() {
    var _this = this;
    this.timeout('update_charts', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const day_list = yield _this.day_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise();
      _this.updateDailyChart(day_list);
      const [mappings, counts] = yield _this.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise();
      _this.updateLevelChart(mappings, counts);
      _this.timeout('update_charts', () => _this.updateDailyChart(day_list), 500);
    }), 50);
  }
  updateDailyChart(list) {
    const data = {
      labels: list.map(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_.date, 'dd MMM')),
      series: [list.map(_ => +_.utilisation)]
    };
    this._day_chart = new chartist__WEBPACK_IMPORTED_MODULE_7__.LineChart('#daily-chart', data);
  }
  updateLevelChart(mapping, count) {
    let {
      zones
    } = mapping || {};
    if (zones.includes('All')) zones = this._org.levels.filter(_ => _.parent_id === this._org.building.id).map(_ => _.id);
    const zone_list = (zones || []).filter(_ => (count[_] || 0) > 0);
    const data = {
      labels: zone_list.map(_ => {
        const level = this._org.levelWithID([_]);
        return level?.display_name || level.name || '';
      }),
      series: zone_list.map(_ => count[_] || 0)
    };
    this._level_chart = new chartist__WEBPACK_IMPORTED_MODULE_7__.PieChart('#level-chart', data);
  }
  static #_ = this.ɵfac = function ReportDesksChartsComponent_Factory(t) {
    return new (t || ReportDesksChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_1__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ReportDesksChartsComponent,
    selectors: [["report-desks-charts"]],
    inputs: {
      print: "print"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    decls: 9,
    vars: 2,
    consts: [[1, "flex", "items-center", "space-x-4", "w-full", "px-4", 3, "resize"], [1, "bg-base-100", "border", "border-base-200", "rounded", "flex-1", "h-[18rem]"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-full", "h-56", "mx-auto"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-[24rem]", "h-56", "mx-auto"]],
    template: function ReportDesksChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function ReportDesksChartsComponent_Template_div_resize_0_listener() {
          return ctx.updateCharts();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Daily Utilisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Level Utilisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-print", ctx.print);
      }
    },
    styles: ["[_nghost-%COMP%] {\n                display: block;\n            }\n\n            .is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n                width: 8cm !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9kZXNrcy9yZXBvcnQtZGVza3MtY2hhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztZQUNsQjs7WUFFQTtnQkFDSSxxQkFBcUI7WUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzLXByaW50IC5jdC1jaGFydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhjbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 27124:
/*!***********************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDesksLevelListComponent: () => (/* binding */ ReportDesksLevelListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 92793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);














const _c0 = () => ({
  key: "name",
  name: "Level"
});
const _c1 = () => ({
  key: "avg_usage",
  name: "Avg. Used Desks"
});
const _c2 = () => ({
  key: "approved",
  name: "Approved Bookings"
});
const _c3 = () => ({
  key: "count",
  name: "Total Requests"
});
const _c4 = a0 => ({
  key: "utilisation",
  name: "Utilisation",
  content: a0
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportDesksLevelListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReportDesksLevelListComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ReportDesksLevelListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", data_r3 || "0", "%");
  }
}
class ReportDesksLevelListComponent {
  constructor(_state, _org) {
    var _this = this;
    this._state = _state;
    this._org = _org;
    this.print = false;
    this.level_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._state.options, this._state.stats, this._state.counts]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, stats, counts]) => {
      const {
        start,
        end,
        zones
      } = options;
      const duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(end, start) || 1;
      const levels = [];
      for (const zone of zones) {
        if (zone === 'All') continue;
        const lvl = this._org.levelWithID([zone]);
        const count = counts[zone] || 0;
        const events = stats.events.filter(bkn => bkn.zones.includes(zone));
        let free = (count * duration - events.length) / duration;
        if (free % 1 !== 0) {
          free = free.toFixed(2);
        }
        levels.push({
          name: lvl?.display_name || lvl?.name,
          free,
          approved: events.filter(_ => _.approved).length || 0,
          avg_usage: (events.length / duration || 0).toFixed(2),
          total: count,
          count: events.length,
          utilisation: (events.length / ((count || 1) * duration) * 100 || 0).toFixed(2)
        });
      }
      return levels;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.download = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.level_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('desks-levels-usage.csv', (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(data));
    });
  }
  static #_ = this.ɵfac = function ReportDesksLevelListComponent_Factory(t) {
    return new (t || ReportDesksLevelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_3__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ReportDesksLevelListComponent,
    selectors: [["report-desks-levels-list"]],
    inputs: {
      print: "print"
    },
    decls: 9,
    vars: 17,
    consts: [["percent_view", ""], [1, "px-4", "pb-2", "w-full"], [1, "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden", "w-full"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], [1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]],
    template: function ReportDesksLevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Level Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ReportDesksLevelListComponent_button_5_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "simple-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ReportDesksLevelListComponent_ng_template_7_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const percent_view_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.level_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction5"](11, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c4, percent_view_r4)))("page_size", ctx.print ? 0 : 10)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_5__.SimpleTableComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 97157:
/*!*************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDesksOverallListComponent: () => (/* binding */ ReportDesksOverallListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);











const _c0 = a0 => ({
  key: "date",
  name: "Date",
  content: a0
});
const _c1 = () => ({
  key: "approved",
  name: "Approved Bookings"
});
const _c2 = () => ({
  key: "count",
  name: "Total Requests"
});
const _c3 = a0 => ({
  key: "utilisation",
  name: "Utilisation",
  content: a0
});
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportDesksOverallListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportDesksOverallListComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ReportDesksOverallListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, data_r3, "mediumDate"));
  }
}
function ReportDesksOverallListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", data_r4 || "0", "%");
  }
}
class ReportDesksOverallListComponent {
  constructor(_state) {
    var _this = this;
    this._state = _state;
    this.print = false;
    this.day_list = this._state.day_list;
    this.download = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.day_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise();
      data = data.map(d => ({
        ...d,
        date: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(d.date, 'MMMM d, y(EEE)')
      }));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('desks-usage.csv', (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(data));
    });
  }
  static #_ = this.ɵfac = function ReportDesksOverallListComponent_Factory(t) {
    return new (t || ReportDesksOverallListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_2__.ReportsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReportDesksOverallListComponent,
    selectors: [["report-desks-overall-list"]],
    inputs: {
      print: "print"
    },
    decls: 11,
    vars: 16,
    consts: [["date_template", ""], ["percent_template", ""], [1, "pb-2", "w-full"], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], [1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]],
    template: function ReportDesksOverallListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Daily Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ReportDesksOverallListComponent_button_5_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "simple-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ReportDesksOverallListComponent_ng_template_7_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(9, ReportDesksOverallListComponent_ng_template_9_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const date_template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const percent_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.day_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](11, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, date_template_r5), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, percent_template_r6)))("page_size", ctx.print ? 0 : 10)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78302:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/desks/report-desks.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDesksComponent: () => (/* binding */ ReportDesksComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _reports_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-options.component */ 5956);
/* harmony import */ var _report_desks_overall_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-desks-overall-list.component */ 97157);
/* harmony import */ var _report_desks_level_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-desks-level-list.component */ 27124);
/* harmony import */ var _report_desks_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-desks-charts.component */ 56508);












const _c0 = ["report-desks", ""];
function ReportDesksComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10)(2, "div", 11)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Total Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 11)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Utilisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "report-desks-charts", 12)(15, "report-desks-overall-list", 12)(16, "report-desks-levels-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 5, ctx_r1.total_count) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 7, ctx_r1.utilisation) || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("print", ctx_r1.printing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("print", ctx_r1.printing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("print", ctx_r1.printing);
  }
}
function ReportDesksComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ReportDesksComponent_ng_container_8_ng_container_1_Template, 17, 9, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const empty_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function ReportDesksComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading report data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
  }
}
function ReportDesksComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Select levels and time period to generate a report. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class ReportDesksComponent {
  get logo() {
    return this._settings.get('app.logo_light') || {};
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.printing = false;
    this.total_count = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(i => i.count || 0));
    this.utilisation = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(i => ((i.utilisation || 0) * 100).toFixed(1)));
    this.loading = this._state.loading;
  }
  print() {
    this.printing = true;
    setTimeout(() => {
      window.print();
      this.printing = false;
    }, 300);
  }
  ngOnInit() {
    this._state.setOptions({
      type: 'desks'
    });
  }
  static #_ = this.ɵfac = function ReportDesksComponent_Factory(t) {
    return new (t || ReportDesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_0__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ReportDesksComponent,
    selectors: [["", "report-desks", ""]],
    attrs: _c0,
    decls: 14,
    vars: 5,
    consts: [["load_state", ""], ["empty_state", ""], [3, "printing"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], [1, "h-12", 3, "src"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]],
    template: function ReportDesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "reports-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("printing", function ReportDesksComponent_Template_reports_options_printing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.printing = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 6)(5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Desks Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ReportDesksComponent_ng_container_8_Template, 3, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ReportDesksComponent_ng_template_10_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(12, ReportDesksComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, ctx.loading))("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _reports_options_component__WEBPACK_IMPORTED_MODULE_2__.ReportsOptionsComponent, _report_desks_overall_list_component__WEBPACK_IMPORTED_MODULE_3__.ReportDesksOverallListComponent, _report_desks_level_list_component__WEBPACK_IMPORTED_MODULE_4__.ReportDesksLevelListComponent, _report_desks_charts_component__WEBPACK_IMPORTED_MODULE_5__.ReportDesksChartsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n            h3[_ngcontent-%COMP%] {\n                font-weight: 500;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9kZXNrcy9yZXBvcnQtZGVza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxnQkFBZ0I7WUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 77332:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/reports/new-reports.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewReportsComponent: () => (/* binding */ NewReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _reports_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-menu.component */ 72485);







const _c0 = ["app-new-reports", ""];
function NewReportsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 4);
  }
}
class NewReportsComponent {
  get path() {
    const parts = this._router.url.split('/');
    return parts[parts.length - 1];
  }
  constructor(_router) {
    this._router = _router;
  }
  static #_ = this.ɵfac = function NewReportsComponent_Factory(t) {
    return new (t || NewReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NewReportsComponent,
    selectors: [["", "app-new-reports", ""]],
    attrs: _c0,
    decls: 6,
    vars: 1,
    consts: [[1, "screen-only"], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], ["reports-menu", "", "class", "absolute inset-0 screen-only", 4, "ngIf"], ["reports-menu", "", 1, "absolute", "inset-0", "screen-only"]],
    template: function NewReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NewReportsComponent_div_5_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.path === "reports");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _reports_menu_component__WEBPACK_IMPORTED_MODULE_2__.ReportsMenuComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9uZXctcmVwb3J0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixXQUFXO2dCQUNYLFlBQVk7WUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiA+ICo6bm90KHJvdXRlci1vdXRsZXQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 72485:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports-menu.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsMenuComponent: () => (/* binding */ ReportsMenuComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);







const _c0 = () => ["/reports", "desks"];
const _c1 = () => ["/reports", "bookings"];
const _c2 = () => ["/reports", "catering"];
const _c3 = () => ["/reports", "contact-tracing"];
const _c4 = a0 => ["/reports", a0];
function ReportsMenuComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "room");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Desks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function ReportsMenuComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "meeting_room");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
function ReportsMenuComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "room_service");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Catering");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
  }
}
function ReportsMenuComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "connect_without_contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Contact Tracing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
  }
}
function ReportsMenuComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c4, report_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](report_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](report_r1.name);
  }
}
const DEFAULT_FEATURES = ['desks', 'spaces', 'catering', 'contact-tracing'];
class ReportsMenuComponent {
  get custom_reports() {
    return this._settings.get('app.custom_reports') || [];
  }
  get features() {
    return this._settings.get('app.reports.features') || DEFAULT_FEATURES;
  }
  constructor(_settings) {
    this._settings = _settings;
  }
  static #_ = this.ɵfac = function ReportsMenuComponent_Factory(t) {
    return new (t || ReportsMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReportsMenuComponent,
    selectors: [["reports-menu"], ["", "reports-menu", ""]],
    decls: 7,
    vars: 5,
    consts: [[1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-base-200", "overflow-auto"], [1, "grid", "w-full", "justify-items-center"], ["matRipple", "", "class", "h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200", 3, "routerLink", 4, "ngIf"], ["matRipple", "", "class", "h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "h-64", "w-64", "p-4", "flex", "flex-col", "items-center", "justify-center", "bg-base-100", "rounded", "shadow", "hover:opacity-80", "border", "border-base-200", 3, "routerLink"], [1, "text-8xl"], [1, "text-xl", "font-bold", "mb-4"], [1, "flex", "items-center"], [1, "ml-2"]],
    template: function ReportsMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReportsMenuComponent_a_2_Template, 10, 2, "a", 2)(3, ReportsMenuComponent_a_3_Template, 10, 2, "a", 2)(4, ReportsMenuComponent_a_4_Template, 10, 2, "a", 2)(5, ReportsMenuComponent_a_5_Template, 10, 2, "a", 2)(6, ReportsMenuComponent_a_6_Template, 10, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.features.includes("desks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.features.includes("spaces"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.features.includes("catering"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.features.includes("contact-tracing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.custom_reports);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: row !important;\n                align-items: center;\n                justify-content: center;\n                background: inherit;\n            }\n\n            .grid[_ngcontent-%COMP%] {\n                display: grid;\n                grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n                \n\n                \n\n                gap: 1rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjtZQUN2Qjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLDREQUE0RDtnQkFDNUQscUVBQXFFO2dCQUNyRSw2RUFBNkU7Z0JBQzdFLFNBQVM7WUFDYiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTZyZW0sIDFmcikpO1xuICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgYmV0dGVyIGZvciBzbWFsbCBzY3JlZW5zLCBvbmNlIG1pbigpIGlzIGJldHRlciBzdXBwb3J0ZWQgKi9cbiAgICAgICAgICAgICAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChtaW4oMjAwcHgsIDEwMCUpLCAxZnIpKTsgKi9cbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5956:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports-options.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsOptionsComponent: () => (/* binding */ ReportsOptionsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-state.service */ 58255);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_date_range_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-range-field.component */ 5472);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);























function ReportsOptionsComponent_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const level_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, level_r2.parent_id)) == null ? null : tmp_5_0.display_name, " ");
  }
}
function ReportsOptionsComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ReportsOptionsComponent_mat_option_3_div_2_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", level_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](level_r2.display_name || level_r2.name);
  }
}
function ReportsOptionsComponent_mat_spinner_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 32);
  }
}
function ReportsOptionsComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Generate Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class ReportsOptionsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_state, _org, _settings, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._route = _route;
    this._router = _router;
    this.printing = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /** List of selected levels */
    this.zones = [];
    this.types = [{
      id: 'internal',
      name: 'Internal'
    }, {
      id: 'external',
      name: 'External'
    }, {
      id: 'cancelled',
      name: 'Cancelled'
    }];
    /** List of selected types */
    this.type_list = this.types.map(i => `${i.id}`);
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._org.active_building, this._org.active_region]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([bld, region]) => this._settings.get('app.use_region') ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.options = this._state.options;
    this.page = '';
    this.generateReport = () => this._state.generateReport();
    this.downloadReport = () => this._state.downloadReport();
    this.setStartDate = date => {
      if (date instanceof Date) date = date.valueOf();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          start: date
        },
        queryParamsHandling: 'merge'
      });
    };
    this.setEndDate = date => {
      if (date instanceof Date) date = date.valueOf();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          end: date
        },
        queryParamsHandling: 'merge'
      });
    };
    this.setZones = zones => {
      this._state.setOptions({
        zones
      });
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        },
        queryParamsHandling: 'merge'
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)(_ => _)).toPromise();
      _this.page = _this._router.url;
      _this.subscription('routing', _this._router.events.subscribe(() => {
        _this.page = _this._router.url;
      }));
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
            _this.setZones(zones);
          }
        }
        if (params.has('start')) _this._state.setOptions({
          start: new Date(+params.get('start'))
        });
        if (params.has('end')) _this._state.setOptions({
          end: new Date(+params.get('end'))
        });
      }));
    })();
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
  static #_ = this.ɵfac = function ReportsOptionsComponent_Factory(t) {
    return new (t || ReportsOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_3__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ReportsOptionsComponent,
    selectors: [["reports-options"]],
    outputs: {
      printing: "printing"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 28,
    vars: 27,
    consts: [["startDate", ""], ["endDate", ""], [1, "bg-base-100", "h-20", "w-full", "flex", "items-center", "space-x-2", "p-4", "shadow", "z-20", "border-b", "border-base-200", "print:hidden"], ["appearance", "outline", 1, "w-60", "no-subscript"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Report Data", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "diameter"]],
    template: function ReportsOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "mat-form-field", 3)(2, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setZones($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ReportsOptionsComponent_mat_option_3_Template, 5, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "date-range-field")(6, "input", 6, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event ? ctx.setStartDate($event) : "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event ? ctx.setEndDate($event) : "");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReportsOptionsComponent_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.generateReport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ReportsOptionsComponent_mat_spinner_15_Template, 1, 1, "mat-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ReportsOptionsComponent_p_17_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReportsOptionsComponent_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.downloadReport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReportsOptionsComponent_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.print());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_9_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 9, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 11, ctx.options)) == null ? null : tmp_4_0.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 13, ctx.options)) == null ? null : tmp_5_0.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !!_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 15, ctx.loading) || !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 17, ctx.options)) == null ? null : tmp_6_0.zones == null ? null : tmp_6_0.zones.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 19, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 21, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 23, ctx.bookings)) == null ? null : tmp_9_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 25, ctx.bookings)) == null ? null : tmp_10_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _libs_form_fields_src_lib_date_range_field_component__WEBPACK_IMPORTED_MODULE_4__.DateRangeFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_6__.BuildingPipe],
    styles: ["button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            button[icon][disabled][_ngcontent-%COMP%] {\n                background-color: var(--n) !important;\n            }\n\n            mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n                width: 5.5em;\n                white-space: initial;\n                line-height: 1.2em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxxQ0FBcUM7WUFDekM7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGtCQUFrQjtZQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjg1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b25baWNvbl1bZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc2xpZGUtdG9nZ2xlIGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUuNWVtO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 58255:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsStateService: () => (/* binding */ ReportsStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 38216);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 53838);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 88402);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ 92561);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _reports_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.utilities */ 41360);
/* harmony import */ var libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libs/spaces/src/lib/space.pipe */ 22011);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 37580);















const DAYS_OF_WEEK = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thurday: 4,
  friday: 5,
  saturday: 6
};
const DAYS_OF_WEEK_INDEX = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thurday',
  5: 'friday',
  6: 'saturday'
};
class ReportsStateService {
  get duration() {
    const opts = this._options.getValue();
    const ignore_days = this._settings.get('app.reports.ignore_days')?.map(_ => typeof _ === 'string' ? _.toLowerCase() : (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), _), 'eeee').toLowerCase()) || [];
    let start = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(opts.start);
    const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(opts.end), 1);
    let count = 0;
    while (start.valueOf() < end.valueOf()) {
      if (!ignore_days.includes(DAYS_OF_WEEK_INDEX[start.getDay()])) {
        count++;
      }
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(start, 1);
    }
    return Math.max(1, count);
  }
  constructor(_org, _settings) {
    var _this = this;
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = new libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_7__.SpacePipe(this._org);
    this._generate = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject('');
    this._active_bookings = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject([]);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject({
      start: new Date(),
      end: new Date()
    });
    this._bookings_list = this._generate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(_ => {
      const options = this._options.getValue();
      this._loading.next('Loading report details...');
      if (!options?.type && !options?.zones?.length) return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(options.start || Date.now());
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(options.end || start);
      const zones = options?.zones ? options.zones.filter(z => z !== 'All').join(',') : '';
      const query = {
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(start),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(end)
      };
      return options.type === 'desks' ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.queryAllBookings)({
        ...query,
        zones: zones,
        type: 'desk',
        limit: 1000
      }) : (0,_placeos_events__WEBPACK_IMPORTED_MODULE_4__.queryAllEvents)({
        ...query,
        zone_ids: zones,
        limit: 1000
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (l) {
          return Promise.all(l.map( /*#__PURE__*/function () {
            var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
              return new _placeos_events__WEBPACK_IMPORTED_MODULE_4__.CalendarEvent({
                ..._,
                resources: (yield Promise.all(_.resources.map(r => _this._space_pipe.transform(r.id || r.email)))).filter(s => options.zones.find(z => s.zones.includes(z)))
              });
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }()));
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)(_ => []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => {
      this._loading.next('');
      if (!list?.length) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('No bookings for the selected levels and period');
      }
      const ignore_days = this._settings.get('app.reports.ignore_days')?.map(_ => typeof _ === 'string' ? _.toLowerCase() : (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(), _), 'eeee').toLowerCase()) || [];
      list = list.filter(bkn => !ignore_days.includes(DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()]));
      this._active_bookings.next(list || []);
      return list;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.shareReplay)(1));
    this.loading = this._loading.asObservable();
    this.options = this._options.asObservable();
    this.bookings = this._active_bookings.asObservable();
    this.spaces = this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(({
      zones
    }) => {
      const use_region = this._settings.get('app.use_region');
      if (!zones?.length) {
        zones = [(use_region ? this._org.building?.parent_id : this._org.building?.id) || this._org.building?.id];
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.forkJoin)(zones.map(id => (0,_placeos_spaces__WEBPACK_IMPORTED_MODULE_8__.requestSpacesForZone)(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([])))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(l => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.flatten)(l)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.shareReplay)(1));
    this.counts = this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(filters => {
      const zones = (filters.zones || []).filter(z => z !== -1 && z !== 'All');
      if (filters.type === 'events') {
        return this.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(_ => zones.map(z => [z, _.filter(s => s.zones.includes(z)).length])));
      }
      return Promise.all(zones.map(z => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(z, 'desks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({
        details: []
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(m => [z, m.details.length])).toPromise()));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => {
      const map = {};
      this._active_bookings.next([]);
      list.forEach(([id, count]) => map[id] = count);
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.shareReplay)(1));
    this.stats = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.combineLatest)([this.counts, this.bookings]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)( /*#__PURE__*/function () {
      var _ref3 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([counts, list]) {
        if (list[0] instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_4__.CalendarEvent) {
          return (0,_reports_utilities__WEBPACK_IMPORTED_MODULE_6__.generateReportForBookings)(list, _this.duration * 8, counts);
        }
        return (0,_reports_utilities__WEBPACK_IMPORTED_MODULE_6__.generateReportForDeskBookings)(list || [], _this.duration, counts);
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()));
    this.day_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.combineLatest)([this.options, this.stats]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([options, stats]) => {
      const {
        start
      } = options;
      let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(start);
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(options.end || date);
      const dates = [];
      const ignore_days = this._settings.get('app.reports.ignore_days')?.map(_ => _.toLowerCase()) || [];
      while ((0,date_fns__WEBPACK_IMPORTED_MODULE_26__["default"])(date, end)) {
        if (ignore_days.includes(DAYS_OF_WEEK_INDEX[date.getDay()])) {
          date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(date, 1);
          continue;
        }
        const s = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(date).valueOf();
        const e = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(s).valueOf();
        const events = stats.events.filter(bkn => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.timePeriodsIntersect)(s, e, bkn.date, bkn.date + bkn.duration * 60 * 1000));
        const usage = options.type === 'desks' ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.unique)(events, 'system_id').length : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.unique)(events, 'asset_id').length;
        dates.push({
          date: s,
          total: stats.total,
          usage,
          free: stats.total - events.length,
          approved: events.reduce((c, e) => c + (e.approved || e.status === 'approved' ? 1 : 0), 0),
          count: events.length,
          utilisation: (events.length / stats.total * 100).toFixed(1)
        });
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(date, 1);
      }
      return dates;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.shareReplay)(1));
    this._bookings_list.subscribe(_ => _);
  }
  generateReport() {
    this._generate.next(new Date().valueOf());
  }
  setOptions(options) {
    if (options.zones?.includes('All')) {
      options.zones = ['All', ...this._org.levelsForBuilding(this._org.building).map(lvl => lvl.id)];
    } else if (options.zones && this._options.getValue()?.zones?.includes('All')) {
      options.zones = [];
    }
    if (options.start?.valueOf() === this._options.getValue().start?.valueOf() || options.end?.valueOf() === this._options.getValue().end?.valueOf()) return;
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  downloadReport() {
    const options = this._options.getValue();
    const bookings = this._active_bookings.getValue();
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.downloadFile)(`report+${options.type}+${(0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(options.start, 'yyyy-MM-dd')}+${(0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(options.end, 'yyyy-MM-dd')}.tsv`, (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.jsonToCsv)(bookings.map(bkn => {
      const details = bkn.toJSON();
      delete details.zones;
      delete details.server_names;
      delete details.extension_data;
      return details;
    }), '\t'));
  }
  static #_ = this.ɵfac = function ReportsStateService_Factory(t) {
    return new (t || ReportsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_5__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjectable"]({
    token: ReportsStateService,
    factory: ReportsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99179:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _reports_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-menu.component */ 72485);






const _c0 = ["app-reports", ""];
function ReportsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
  }
}
class ReportsComponent {
  get path() {
    const parts = this._router.url.split('/');
    return parts[parts.length - 1];
  }
  constructor(_router) {
    this._router = _router;
  }
  static #_ = this.ɵfac = function ReportsComponent_Factory(t) {
    return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReportsComponent,
    selectors: [["", "app-reports", ""]],
    attrs: _c0,
    decls: 4,
    vars: 1,
    consts: [[1, "h-full", "screen-only"], [1, "relative", "overflow-hidden", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "bg-base-200"], ["reports-menu", "", "class", "absolute inset-0 screen-only", 4, "ngIf"], ["reports-menu", "", 1, "absolute", "inset-0", "screen-only"]],
    template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ReportsComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.path === "reports");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _reports_menu_component__WEBPACK_IMPORTED_MODULE_1__.ReportsMenuComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxZQUFZO1lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4gPiAqOm5vdChyb3V0ZXItb3V0bGV0KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9706:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsModule: () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component */ 99179);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/users */ 63870);
/* harmony import */ var _reports_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-options.component */ 5956);
/* harmony import */ var _spaces_report_spaces_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spaces/report-spaces.component */ 5938);
/* harmony import */ var _desks_report_desks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desks/report-desks.component */ 78302);
/* harmony import */ var _desks_report_desks_overall_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desks/report-desks-overall-list.component */ 97157);
/* harmony import */ var _desks_report_desks_level_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desks/report-desks-level-list.component */ 27124);
/* harmony import */ var _reports_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports-menu.component */ 72485);
/* harmony import */ var _spaces_report_spaces_overall_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spaces/report-spaces-overall.component */ 38946);
/* harmony import */ var _spaces_report_spaces_space_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spaces/report-spaces-space-listing.component */ 56872);
/* harmony import */ var _spaces_report_spaces_user_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spaces/report-spaces-user-listing.component */ 12223);
/* harmony import */ var _catering_catering_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering/catering-report.component */ 53984);
/* harmony import */ var _catering_catering_report_overall_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering/catering-report-overall.component */ 6172);
/* harmony import */ var _catering_catering_report_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering/catering-report-orders.component */ 53366);
/* harmony import */ var _catering_catering_report_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catering/catering-report-items.component */ 74065);
/* harmony import */ var _desks_report_desks_charts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./desks/report-desks-charts.component */ 56508);
/* harmony import */ var _contact_tracing_contact_tracing_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-tracing/contact-tracing-report.component */ 63052);
/* harmony import */ var _contact_tracing_get_user_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-tracing/get-user.pipe */ 29819);
/* harmony import */ var _contact_tracing_contact_tracing_options_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact-tracing/contact-tracing-options.component */ 8528);
/* harmony import */ var _custom_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./custom-report.component */ 41200);
/* harmony import */ var _new_reports_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-reports.component */ 77332);
/* harmony import */ var _spaces_report_spaces_overall_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./spaces/report-spaces-overall-list.component */ 1193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 37580);






























const children = [{
  path: '',
  component: _reports_options_component__WEBPACK_IMPORTED_MODULE_4__.ReportsOptionsComponent
}, {
  path: 'bookings',
  component: _spaces_report_spaces_component__WEBPACK_IMPORTED_MODULE_5__.ReportSpacesComponent
}, {
  path: 'desks',
  component: _desks_report_desks_component__WEBPACK_IMPORTED_MODULE_6__.ReportDesksComponent
}, {
  path: 'catering',
  component: _catering_catering_report_component__WEBPACK_IMPORTED_MODULE_13__.CateringReportComponent
}, {
  path: 'contact-tracing',
  component: _contact_tracing_contact_tracing_report_component__WEBPACK_IMPORTED_MODULE_18__.ContactTracingReportComponent
}, {
  path: ':id',
  component: _custom_report_component__WEBPACK_IMPORTED_MODULE_21__.CustomReportComponent
}, {
  path: '**',
  redirectTo: 'desks',
  pathMatch: 'full'
}];
const ROUTES = [{
  path: 'new',
  component: _new_reports_component__WEBPACK_IMPORTED_MODULE_22__.NewReportsComponent,
  children
}, {
  path: '',
  component: _reports_component__WEBPACK_IMPORTED_MODULE_1__.ReportsComponent,
  children
}];
class ReportsModule {
  static #_ = this.ɵfac = function ReportsModule_Factory(t) {
    return new (t || ReportsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: ReportsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_2__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_3__.SharedUsersModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](ReportsModule, {
    declarations: [_new_reports_component__WEBPACK_IMPORTED_MODULE_22__.NewReportsComponent, _reports_component__WEBPACK_IMPORTED_MODULE_1__.ReportsComponent, _reports_options_component__WEBPACK_IMPORTED_MODULE_4__.ReportsOptionsComponent, _spaces_report_spaces_component__WEBPACK_IMPORTED_MODULE_5__.ReportSpacesComponent, _spaces_report_spaces_overall_component__WEBPACK_IMPORTED_MODULE_10__.ReportSpacesOverallComponent, _spaces_report_spaces_overall_list_component__WEBPACK_IMPORTED_MODULE_23__.ReportSpacesOverallListComponent, _spaces_report_spaces_space_listing_component__WEBPACK_IMPORTED_MODULE_11__.ReportSpacesSpaceListing, _spaces_report_spaces_user_listing_component__WEBPACK_IMPORTED_MODULE_12__.ReportSpacesUserListingComponent, _desks_report_desks_component__WEBPACK_IMPORTED_MODULE_6__.ReportDesksComponent, _desks_report_desks_overall_list_component__WEBPACK_IMPORTED_MODULE_7__.ReportDesksOverallListComponent, _desks_report_desks_level_list_component__WEBPACK_IMPORTED_MODULE_8__.ReportDesksLevelListComponent, _desks_report_desks_charts_component__WEBPACK_IMPORTED_MODULE_17__.ReportDesksChartsComponent, _reports_menu_component__WEBPACK_IMPORTED_MODULE_9__.ReportsMenuComponent, _catering_catering_report_component__WEBPACK_IMPORTED_MODULE_13__.CateringReportComponent, _catering_catering_report_overall_component__WEBPACK_IMPORTED_MODULE_14__.CateringReportOverallComponent, _catering_catering_report_orders_component__WEBPACK_IMPORTED_MODULE_15__.CateringReportOrdersComponent, _catering_catering_report_items_component__WEBPACK_IMPORTED_MODULE_16__.CateringReportItemsComponent, _contact_tracing_contact_tracing_report_component__WEBPACK_IMPORTED_MODULE_18__.ContactTracingReportComponent, _contact_tracing_contact_tracing_options_component__WEBPACK_IMPORTED_MODULE_20__.ContactTracingOptionsComponent, _contact_tracing_get_user_pipe__WEBPACK_IMPORTED_MODULE_19__.GetUserPipe, _custom_report_component__WEBPACK_IMPORTED_MODULE_21__.CustomReportComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_2__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_3__.SharedUsersModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule]
  });
})();

/***/ }),

/***/ 41360:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/reports/reports.utilities.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateReportForBookings: () => (/* binding */ generateReportForBookings),
/* harmony export */   generateReportForDeskBookings: () => (/* binding */ generateReportForDeskBookings)
/* harmony export */ });
function generateReportForDeskBookings(bookings, util_period = 1, counts = {}) {
  util_period = Math.max(1, util_period);
  const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  const utilisation = Math.floor(bookings.length / total / util_period * 10000) / 10000;
  return {
    total,
    count: bookings.length,
    utilisation,
    events: bookings
  };
}
function generateReportForBookings(bookings, util_period = 8, counts = {}) {
  util_period = Math.max(1, util_period);
  const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
  const total_capacity = bookings.reduce((c, i) => c + i.system?.capacity, 0);
  const utilisation = Math.floor(bookings.reduce((c, i) => c + i.duration, 0) / (util_period * 60) * 100) / 100;
  const occupancy = Math.floor(total_users / total_capacity * 100) / 100;
  const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  return {
    count: bookings.length,
    avg_length: Math.floor(bookings.reduce((c, i) => c + i.duration, 0) / bookings.length * 100) / 100,
    efficiency: Math.floor((utilisation + occupancy) / 2 * 100) / 100,
    total,
    total_users,
    total_capacity,
    occupancy,
    utilisation,
    events: bookings
  };
}

/***/ }),

/***/ 1193:
/*!***************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportSpacesOverallListComponent: () => (/* binding */ ReportSpacesOverallListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);











const _c0 = a0 => ({
  key: "date",
  name: "Date",
  content: a0
});
const _c1 = () => ({
  key: "approved",
  name: "Approved Bookings"
});
const _c2 = () => ({
  key: "count",
  name: "Total Requests"
});
const _c3 = a0 => ({
  key: "utilisation",
  name: "Utilisation",
  content: a0
});
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportSpacesOverallListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportSpacesOverallListComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ReportSpacesOverallListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, data_r3, "mediumDate"));
  }
}
function ReportSpacesOverallListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", data_r4 || "0", "%");
  }
}
class ReportSpacesOverallListComponent {
  constructor(_state) {
    var _this = this;
    this._state = _state;
    this.print = false;
    this.day_list = this._state.day_list;
    this.download = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.day_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise();
      data = data.map(d => ({
        ...d,
        date: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(d.date, 'MMMM d, y(EEE)')
      }));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('spaces-usage.csv', (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(data));
    });
  }
  static #_ = this.ɵfac = function ReportSpacesOverallListComponent_Factory(t) {
    return new (t || ReportSpacesOverallListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_2__.ReportsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReportSpacesOverallListComponent,
    selectors: [["report-spaces-overall-list"]],
    inputs: {
      print: "print"
    },
    decls: 11,
    vars: 16,
    consts: [["date_template", ""], ["percent_template", ""], [1, "w-full"], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]],
    template: function ReportSpacesOverallListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Daily Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ReportSpacesOverallListComponent_button_5_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "simple-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ReportSpacesOverallListComponent_ng_template_7_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(9, ReportSpacesOverallListComponent_ng_template_9_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const date_template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const percent_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.day_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](11, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, date_template_r5), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, percent_template_r6)))("sortable", true)("page_size", ctx.print ? 0 : 10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38946:
/*!**********************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportSpacesOverallComponent: () => (/* binding */ ReportSpacesOverallComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 49407);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 5689);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);






function ReportSpacesOverallComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No show count");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "% of No show Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total in-room attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, ctx_r0.no_shows) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, ctx_r0.no_show_percent) || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 7, ctx_r0.attendance) || 0);
  }
}
class ReportSpacesOverallComponent {
  constructor(_state) {
    this._state = _state;
    this.business_days = this._state.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      start,
      end
    }) => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(end || Date.now()), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(start || Date.now())) || 1));
    this.total_count = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(i => i.count || 0));
    this.avg_length = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(i => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])({
      minutes: Math.floor(i.avg_length || 0)
    })));
    this.attendance = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      events
    }) => events.reduce((c, {
      extension_data
    }) => c + (+extension_data?.people_count?.max || 0), 0)));
    this.no_shows = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      events
    }) => events.reduce((c, {
      extension_data
    }) => c + +extension_data?.people_count?.max ? 1 : 0, 0)));
    this.no_show_percent = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      events
    }) => Math.floor(events.reduce((c, {
      extension_data
    }) => c + +extension_data?.people_count?.max ? 1 : 0, 0) / events.length * 10000) / 100));
    this.has_attendance = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      events
    }) => !!events.find(({
      extension_data
    }) => !!extension_data?.people_count)));
  }
  static #_ = this.ɵfac = function ReportSpacesOverallComponent_Factory(t) {
    return new (t || ReportSpacesOverallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_0__.ReportsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ReportSpacesOverallComponent,
    selectors: [["report-spaces-overall"]],
    decls: 21,
    vars: 12,
    consts: [[1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], ["class", "m-4 p-4 rounded bg-base-100 flex justify-center items-center space-x-2", 4, "ngIf"], [1, "m-4", "p-4", "rounded", "bg-base-100", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center"]],
    template: function ReportSpacesOverallComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Business Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Total Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Average Booking Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ReportSpacesOverallComponent_div_19_Template, 19, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.business_days) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, ctx.total_count) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 8, ctx.avg_length) || "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, ctx.has_attendance));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["h3[_ngcontent-%COMP%] {\n                font-weight: 500;\n            }\n\n            p[_ngcontent-%COMP%]:not([simple]) {\n                font-size: 1.75rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9zcGFjZXMvcmVwb3J0LXNwYWNlcy1vdmVyYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLGtCQUFrQjtZQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHA6bm90KFtzaW1wbGVdKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56872:
/*!****************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportSpacesSpaceListing: () => (/* binding */ ReportSpacesSpaceListing)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 92793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);












const _c0 = () => ({
  key: "name",
  name: "Name"
});
const _c1 = () => ({
  key: "capacity",
  name: "Capacity"
});
const _c2 = () => ({
  key: "booking_count",
  name: "Bookings"
});
const _c3 = () => ({
  key: "utilisation",
  name: "Utilisation"
});
const _c4 = () => ({
  key: "avg_attendees",
  name: "Avg. Invitees per Booking"
});
const _c5 = a0 => ({
  key: "no_shows",
  name: "No Shows",
  show: a0
});
const _c6 = a0 => ({
  key: "min_attendance",
  name: "Min. In-Room Attendance",
  show: a0
});
const _c7 = a0 => ({
  key: "max_attendance",
  name: "Max. In-Room Attendance",
  show: a0
});
const _c8 = () => ({
  key: "occupancy",
  name: "Occupancy %"
});
const _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function ReportSpacesSpaceListing_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportSpacesSpaceListing_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class ReportSpacesSpaceListing {
  constructor(_reports) {
    var _this = this;
    this._reports = _reports;
    this.print = false;
    this.space_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._reports.stats, this._reports.options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([stats, {
      start,
      end
    }]) => {
      let list = [];
      let has_attendance = false;
      for (const booking of stats.events) {
        const resources = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(booking.resources, 'email') || [booking.system];
        for (const space of resources) {
          let details = list.find(_ => _.id === space.id || _.id?.toLowerCase() === space.email.toLowerCase());
          if (!details) {
            details = {
              id: space.id || space.email,
              name: space.display_name || space.name,
              capacity: space.capacity || 1,
              booking_count: 0,
              attendance: 0,
              avg_attendance: 0,
              min_attendance: 99,
              max_attendance: 0,
              attendees: 0,
              avg_attendees: 0,
              usage: 0,
              no_shows: 0,
              utilisation: 0,
              occupancy: 0
            };
            if (!details.id || !details.name) continue;
            list.push(details);
          }
          if (booking.extension_data?.people_count?.max === 0) {
            details.no_shows += 1;
          }
          details.booking_count += 1;
          details.attendance += booking.extension_data?.people_count?.max ?? 0;
          details.avg_attendance += booking.extension_data?.people_count?.avg ?? 0;
          details.min_attendance = Math.min(details.max_attendance, booking.extension_data?.people_count?.max ?? 99);
          details.max_attendance = Math.max(details.max_attendance, booking.extension_data?.people_count?.max ?? 0);
          details.usage += booking.duration;
          details.attendees += booking.attendees.length;
          has_attendance = has_attendance || !!booking.extension_data.people_count;
        }
      }
      const period_in_days = Math.max(1, (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(end, start) + 1);
      for (const space of list) {
        space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
        space.avg_attendance = Math.floor(space.attendance / space.booking_count * 100) / 100;
        space.utilisation = `${Math.floor(space.usage / 60 / 8 / period_in_days * 100)}%`;
        space.min_attendance = space.min_attendance === 99 ? '?' : space.min_attendance;
        space.occupancy = `${Math.floor(space.avg_attendees / space.capacity * 1000) / 10}%`;
        if (space.attendance < 0 || !has_attendance) {
          space.attendance = '?';
          space.avg_attendance = '?';
        }
      }
      return list;
    }));
    this.has_attendance = this.space_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => !!_.find(({
      attendance
    }) => attendance !== '?')));
    this.download = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this.space_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.no_shows;
        delete item.min_attendance;
        delete item.max_attendance;
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('report-spaces-usage.csv', (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(data));
    });
  }
  static #_ = this.ɵfac = function ReportSpacesSpaceListing_Factory(t) {
    return new (t || ReportSpacesSpaceListing)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_2__.ReportsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReportSpacesSpaceListing,
    selectors: [["report-spaces-space-listing"]],
    inputs: {
      print: "print"
    },
    decls: 9,
    vars: 33,
    consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]],
    template: function ReportSpacesSpaceListing_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Room Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ReportSpacesSpaceListing_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.space_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunctionV"](23, _c9, [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, ctx.has_attendance)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 7, ctx.has_attendance)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx.has_attendance)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c8)]))("sortable", true)("page_size", ctx.print ? 0 : 10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe]
  });
}

/***/ }),

/***/ 12223:
/*!***************************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportSpacesUserListingComponent: () => (/* binding */ ReportSpacesUserListingComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 5689);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/simple-table.component */ 88328);












const _c0 = () => ({
  key: "name",
  name: "Name"
});
const _c1 = () => ({
  key: "booking_count",
  name: "Bookings"
});
const _c2 = () => ({
  key: "avg_attendees",
  name: "Avg. Invitees per Booking"
});
const _c3 = () => ({
  key: "total_time",
  name: "Total Booked Time"
});
const _c4 = () => ({
  key: "no_shows",
  name: "No Shows"
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportSpacesUserListingComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportSpacesUserListingComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class ReportSpacesUserListingComponent {
  constructor(_reports) {
    var _this = this;
    this._reports = _reports;
    this.print = false;
    this.user_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._reports.stats]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([stats]) => {
      let list = [];
      for (const booking of stats.events) {
        const host = booking.attendees?.find(_ => _.email === booking.extension_data?.host_override || _.email === booking.host);
        if (!host) continue;
        const capacity = Math.max(booking.resources.reduce((c, s) => c + s.capacity, 0) || 1, 1);
        let details = list.find(_ => _.id?.toLowerCase() === host.email.toLowerCase());
        if (!details) {
          details = {
            id: host.email,
            name: host.name,
            capacity,
            booking_count: 0,
            attendees: 0,
            avg_attendees: 0,
            no_shows: 0,
            occupancy: 0,
            total_time: 0
          };
          list.push(details);
        }
        if (booking.extension_data?.people_count?.max === 0) {
          details.no_shows += 1;
        }
        details.booking_count += 1;
        details.attendees += booking.attendees.length;
        details.total_time += booking.duration || 15;
      }
      for (const space of list) {
        space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
        space.occupancy = Math.floor(space.avg_attendees / space.capacity * 100) / 100;
        space.total_time = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])({
          hours: Math.floor(space.total_time / 60),
          minutes: space.total_time % 60
        });
      }
      return list;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.download = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this.user_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy;
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)('report-space-attendee-usage.csv', (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(data));
    });
  }
  static #_ = this.ɵfac = function ReportSpacesUserListingComponent_Factory(t) {
    return new (t || ReportSpacesUserListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_2__.ReportsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReportSpacesUserListingComponent,
    selectors: [["report-spaces-user-listing"]],
    inputs: {
      print: "print"
    },
    decls: 6,
    vars: 16,
    consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]],
    template: function ReportSpacesUserListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Meeting Organisers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ReportSpacesUserListingComponent_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](10, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c4)))("sortable", true)("page_size", ctx.print ? 0 : 10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent]
  });
}

/***/ }),

/***/ 5938:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/reports/spaces/report-spaces.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportSpacesComponent: () => (/* binding */ ReportSpacesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _reports_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports-state.service */ 58255);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _reports_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports-options.component */ 5956);
/* harmony import */ var _report_spaces_overall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-spaces-overall.component */ 38946);
/* harmony import */ var _report_spaces_overall_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-spaces-overall-list.component */ 1193);
/* harmony import */ var _report_spaces_space_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-spaces-space-listing.component */ 56872);
/* harmony import */ var _report_spaces_user_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-spaces-user-listing.component */ 12223);













const _c0 = ["report-spaces", ""];
function ReportSpacesComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "report-spaces-overall")(2, "report-spaces-overall-list", 10)(3, "report-spaces-space-listing", 10)(4, "report-spaces-user-listing", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("print", ctx_r1.printing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("print", ctx_r1.printing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("print", ctx_r1.printing);
  }
}
function ReportSpacesComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ReportSpacesComponent_ng_container_8_ng_container_1_Template, 5, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const empty_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function ReportSpacesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading report data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 32);
  }
}
function ReportSpacesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Select levels and time period to generate a report. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class ReportSpacesComponent {
  get logo() {
    return this._settings.get('app.logo_light') || {};
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.printing = false;
    this.total_count = this._state.stats.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(i => i.count || 0));
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.setOptions({
      type: 'events'
    });
  }
  static #_ = this.ɵfac = function ReportSpacesComponent_Factory(t) {
    return new (t || ReportSpacesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reports_state_service__WEBPACK_IMPORTED_MODULE_0__.ReportsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ReportSpacesComponent,
    selectors: [["", "report-spaces", ""]],
    attrs: _c0,
    decls: 14,
    vars: 5,
    consts: [["load_state", ""], ["empty_state", ""], [3, "printing"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], [1, "h-12", 3, "src"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]],
    template: function ReportSpacesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "reports-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("printing", function ReportSpacesComponent_Template_reports_options_printing_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.printing = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 6)(5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Rooms Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ReportSpacesComponent_ng_container_8_Template, 3, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ReportSpacesComponent_ng_template_10_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(12, ReportSpacesComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 3, ctx.loading))("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _reports_options_component__WEBPACK_IMPORTED_MODULE_2__.ReportsOptionsComponent, _report_spaces_overall_component__WEBPACK_IMPORTED_MODULE_3__.ReportSpacesOverallComponent, _report_spaces_overall_list_component__WEBPACK_IMPORTED_MODULE_4__.ReportSpacesOverallListComponent, _report_spaces_space_listing_component__WEBPACK_IMPORTED_MODULE_5__.ReportSpacesSpaceListing, _report_spaces_user_listing_component__WEBPACK_IMPORTED_MODULE_6__.ReportSpacesUserListingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcmVwb3J0cy9zcGFjZXMvcmVwb3J0LXNwYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO1lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 85616:
/*!************************************!*\
  !*** ./libs/bookings/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.Booking),
/* harmony export */   BookingCardComponent: () => (/* reexport safe */ _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent),
/* harmony export */   BookingDetailsModalComponent: () => (/* reexport safe */ _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__.BookingDetailsModalComponent),
/* harmony export */   BookingFormService: () => (/* reexport safe */ _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService),
/* harmony export */   DesksService: () => (/* reexport safe */ _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__.DesksService),
/* harmony export */   FAV_PARKING_KEY: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.FAV_PARKING_KEY),
/* harmony export */   LockersService: () => (/* reexport safe */ _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__.LockersService),
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingSpaceSelectModalComponent),
/* harmony export */   SharedBookingsModule: () => (/* reexport safe */ _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__.SharedBookingsModule),
/* harmony export */   approveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBooking),
/* harmony export */   bookingAddGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingAddGuest),
/* harmony export */   bookingRemoveGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingRemoveGuest),
/* harmony export */   checkinBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBooking),
/* harmony export */   checkinBookingAttendee: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingAttendee),
/* harmony export */   checkinBookingGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingGuest),
/* harmony export */   createBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBooking),
/* harmony export */   createBookingsForEvent: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBookingsForEvent),
/* harmony export */   findNearbyFeature: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.findNearbyFeature),
/* harmony export */   generateBookingForm: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.generateBookingForm),
/* harmony export */   isResourceAvailable: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.isResourceAvailable),
/* harmony export */   newBookingFromCalendarEvent: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.newBookingFromCalendarEvent),
/* harmony export */   queryAllBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryAllBookings),
/* harmony export */   queryBookingGuests: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookingGuests),
/* harmony export */   queryBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings),
/* harmony export */   queryPagedBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryPagedBookings),
/* harmony export */   queryResourceAvailability: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryResourceAvailability),
/* harmony export */   rejectBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBooking),
/* harmony export */   removeBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBooking),
/* harmony export */   saveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.saveBooking),
/* harmony export */   setBookingState: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.setBookingState),
/* harmony export */   showBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.showBooking),
/* harmony export */   updateBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBooking)
/* harmony export */ });
/* harmony import */ var _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings.module */ 38742);
/* harmony import */ var _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/booking-form.service */ 18379);
/* harmony import */ var _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/booking.class */ 53857);
/* harmony import */ var _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/booking.utilities */ 17141);
/* harmony import */ var _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/bookings.fn */ 18026);
/* harmony import */ var _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/desk.service */ 74350);
/* harmony import */ var _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lockers.service */ 98796);
/* harmony import */ var _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/booking-details-modal.component */ 1781);
/* harmony import */ var _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/booking-card.component */ 27547);
/* harmony import */ var _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parking-select-modal/parking-select-modal.component */ 67642);












/***/ }),

/***/ 74350:
/*!***********************************************!*\
  !*** ./libs/bookings/src/lib/desk.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksService: () => (/* binding */ DesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 3367);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












class DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk({
    desks,
    host,
    reason,
    attendees,
    date
  }) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.error_on_host && !host) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk.');
      } else {
        host = host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      }
      reason = reason || '';
      const level = _this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = _this._dialog.open(_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeskQuestionsModalComponent);
      let success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      ref.close();
      ref = _this._dialog.open(_desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : new Date(),
          reason,
          level,
          can_set_date: _this.can_set_date
        }
      });
      success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk. ');
      }
      ref.componentInstance.loading = 'Checking for existing desk bookings...';
      const bookings = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
        type: 'desk',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date || new Date())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date || new Date()))
      }).toPromise();
      const desk_list = bookings.filter(d => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You currently already have a desk booked for the selected date.');
      }
      ref.componentInstance.loading = 'Booking desk...';
      const users = [host, ...(attendees || [])];
      yield Promise.all([desks.map((desk, idx) => _this.makeDeskBooking(desk, host, date.valueOf() || new Date().valueOf(), reason, users[idx]))]);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully booked desk');
      ref.close();
      return true;
    })();
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = _this2._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date).valueOf() / 1000),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: 'desk',
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.saveBooking)(booking_data).toPromise();
    })();
  }
  static #_ = this.ɵfac = function DesksService_Factory(t) {
    return new (t || DesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: DesksService,
    factory: DesksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 63870:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindAvailabilityModalComponent: () => (/* reexport safe */ _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__.FindAvailabilityModalComponent),
/* harmony export */   GuestUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.GuestUser),
/* harmony export */   MapLocation: () => (/* reexport safe */ _lib_location_class__WEBPACK_IMPORTED_MODULE_4__.MapLocation),
/* harmony export */   NewUserModalComponent: () => (/* reexport safe */ _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__.NewUserModalComponent),
/* harmony export */   SharedUsersModule: () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_0__.SharedUsersModule),
/* harmony export */   StaffUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.StaffUser),
/* harmony export */   USER_DOMAIN: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.USER_DOMAIN),
/* harmony export */   User: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.User),
/* harmony export */   UserFormComponent: () => (/* reexport safe */ _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent),
/* harmony export */   generateGuestForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateGuestForm),
/* harmony export */   generateMockUser: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateMockUser),
/* harmony export */   generateUserForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateUserForm),
/* harmony export */   listGuestMeetings: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.listGuestMeetings),
/* harmony export */   locateStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.locateStaff),
/* harmony export */   queryGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.queryGuests),
/* harmony export */   removeGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.removeGuest),
/* harmony export */   searchGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.searchGuests),
/* harmony export */   searchStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.searchStaff),
/* harmony export */   setInternalUserDomain: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.setInternalUserDomain),
/* harmony export */   showGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.showGuest),
/* harmony export */   showStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.showStaff),
/* harmony export */   updateGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.updateGuest)
/* harmony export */ });
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ 34426);
/* harmony import */ var _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/new-user-modal.component */ 11543);
/* harmony import */ var _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/find-availability-modal/find-availability-modal.component */ 12716);
/* harmony import */ var _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/user-form.component */ 7111);
/* harmony import */ var _lib_location_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/location.class */ 74529);
/* harmony import */ var _lib_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user.class */ 93693);
/* harmony import */ var _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/user.utilities */ 24129);
/* harmony import */ var _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/guests.fn */ 86039);
/* harmony import */ var _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/staff.fn */ 2372);











/***/ }),

/***/ 74529:
/*!**********************************************!*\
  !*** ./libs/users/src/lib/location.class.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLocation: () => (/* binding */ MapLocation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 73725);

class MapLocation {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || 'other';
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || 'top-left';
  }
}

/***/ }),

/***/ 49407:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInBusinessDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInBusinessDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addDays/index.js */ 88402);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 25395);
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isSameDay/index.js */ 26078);
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isValid/index.js */ 47576);
/* harmony import */ var _isWeekend_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../isWeekend/index.js */ 2363);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 59103);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 64507);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 13144);








/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft) || !(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateRight)) return NaN;
  var calendarDifference = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight);
  var sign = calendarDifference < 0 ? -1 : 1;
  var weeks = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(calendarDifference / 7);
  var result = weeks * 5;
  dateRight = (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, weeks * 7);

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!(0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += (0,_isWeekend_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight) ? 0 : sign;
    dateRight = (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, sign);
  }
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 2363:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isWeekend/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWeekend)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 59103);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 64507);


/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}

/***/ }),

/***/ 63395:
/*!*********************************************!*\
  !*** ./node_modules/chartist/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoScaleAxis: () => (/* binding */ AutoScaleAxis),
/* harmony export */   Axis: () => (/* binding */ Axis),
/* harmony export */   BarChart: () => (/* binding */ BarChart),
/* harmony export */   BaseChart: () => (/* binding */ BaseChart),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter),
/* harmony export */   FixedScaleAxis: () => (/* binding */ FixedScaleAxis),
/* harmony export */   Interpolation: () => (/* binding */ index),
/* harmony export */   LineChart: () => (/* binding */ LineChart),
/* harmony export */   PieChart: () => (/* binding */ PieChart),
/* harmony export */   StepAxis: () => (/* binding */ StepAxis),
/* harmony export */   Svg: () => (/* binding */ Svg),
/* harmony export */   SvgList: () => (/* binding */ SvgList),
/* harmony export */   SvgPath: () => (/* binding */ SvgPath),
/* harmony export */   alphaNumerate: () => (/* binding */ alphaNumerate),
/* harmony export */   axisUnits: () => (/* binding */ axisUnits),
/* harmony export */   createChartRect: () => (/* binding */ createChartRect),
/* harmony export */   createGrid: () => (/* binding */ createGrid),
/* harmony export */   createGridBackground: () => (/* binding */ createGridBackground),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createSvg: () => (/* binding */ createSvg),
/* harmony export */   deserialize: () => (/* binding */ deserialize),
/* harmony export */   determineAnchorPosition: () => (/* binding */ determineAnchorPosition),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   easings: () => (/* binding */ easings),
/* harmony export */   ensureUnit: () => (/* binding */ ensureUnit),
/* harmony export */   escapingMap: () => (/* binding */ escapingMap),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   getBounds: () => (/* binding */ getBounds),
/* harmony export */   getHighLow: () => (/* binding */ getHighLow),
/* harmony export */   getMetaData: () => (/* binding */ getMetaData),
/* harmony export */   getMultiValue: () => (/* binding */ getMultiValue),
/* harmony export */   getNumberOrUndefined: () => (/* binding */ getNumberOrUndefined),
/* harmony export */   getSeriesOption: () => (/* binding */ getSeriesOption),
/* harmony export */   isArrayOfArrays: () => (/* binding */ isArrayOfArrays),
/* harmony export */   isArrayOfSeries: () => (/* binding */ isArrayOfSeries),
/* harmony export */   isDataHoleValue: () => (/* binding */ isDataHoleValue),
/* harmony export */   isFalseyButZero: () => (/* binding */ isFalseyButZero),
/* harmony export */   isMultiValue: () => (/* binding */ isMultiValue),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric),
/* harmony export */   namespaces: () => (/* binding */ namespaces),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   normalizeData: () => (/* binding */ normalizeData),
/* harmony export */   normalizePadding: () => (/* binding */ normalizePadding),
/* harmony export */   optionsProvider: () => (/* binding */ optionsProvider),
/* harmony export */   orderOfMagnitude: () => (/* binding */ orderOfMagnitude),
/* harmony export */   polarToCartesian: () => (/* binding */ polarToCartesian),
/* harmony export */   precision: () => (/* binding */ precision),
/* harmony export */   projectLength: () => (/* binding */ projectLength),
/* harmony export */   quantity: () => (/* binding */ quantity),
/* harmony export */   rho: () => (/* binding */ rho),
/* harmony export */   roundWithPrecision: () => (/* binding */ roundWithPrecision),
/* harmony export */   safeHasProperty: () => (/* binding */ safeHasProperty),
/* harmony export */   serialMap: () => (/* binding */ serialMap),
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   splitIntoSegments: () => (/* binding */ splitIntoSegments),
/* harmony export */   sum: () => (/* binding */ sum),
/* harmony export */   times: () => (/* binding */ times)
/* harmony export */ });
/**
 * This object contains all namespaces used within Chartist.
 */const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xmlns: "http://www.w3.org/2000/xmlns/",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  ct: "http://gionkunz.github.com/chartist-js/ct"
};
/**
 * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
 */
const precision = 8;
/**
 * A map with characters to escape for strings to be safely used as attribute values.
 */
const escapingMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};

/**
 * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
 * @return Returns the passed number value with unit.
 */
function ensureUnit(value, unit) {
  if (typeof value === "number") {
    return value + unit;
  }
  return value;
}
/**
 * Converts a number or string to a quantity object.
 * @return Returns an object containing the value as number and the unit as string.
 */
function quantity(input) {
  if (typeof input === "string") {
    const match = /^(\d+)\s*(.*)$/g.exec(input);
    return {
      value: match ? +match[1] : 0,
      unit: (match === null || match === void 0 ? void 0 : match[2]) || undefined
    };
  }
  return {
    value: Number(input)
  };
}
/**
 * Generates a-z from a number 0 to 26
 * @param n A number from 0 to 26 that will result in a letter a-z
 * @return A character from a-z based on the input number n
 */
function alphaNumerate(n) {
  // Limit to a-z
  return String.fromCharCode(97 + n % 26);
}
const EPSILON = 2.221e-16;
/**
 * Calculate the order of magnitude for the chart scale
 * @param value The value Range of the chart
 * @return The order of magnitude
 */
function orderOfMagnitude(value) {
  return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
}
/**
 * Project a data length into screen coordinates (pixels)
 * @param axisLength The svg element for the chart
 * @param length Single data value from a series array
 * @param bounds All the values to set the bounds of the chart
 * @return The projected data length in pixels
 */
function projectLength(axisLength, length, bounds) {
  return length / bounds.range * axisLength;
}
/**
 * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
 * @param value The value that should be rounded with precision
 * @param [digits] The number of digits after decimal used to do the rounding
 * @returns Rounded value
 */
function roundWithPrecision(value, digits) {
  const precision$1 = Math.pow(10, digits || precision);
  return Math.round(value * precision$1) / precision$1;
}
/**
 * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
 * @param num An integer number where the smallest factor should be searched for
 * @returns The smallest integer factor of the parameter num.
 */
function rho(num) {
  if (num === 1) {
    return num;
  }
  function gcd(p, q) {
    if (p % q === 0) {
      return q;
    } else {
      return gcd(q, p % q);
    }
  }
  function f(x) {
    return x * x + 1;
  }
  let x1 = 2;
  let x2 = 2;
  let divisor;
  if (num % 2 === 0) {
    return 2;
  }
  do {
    x1 = f(x1) % num;
    x2 = f(f(x2)) % num;
    divisor = gcd(Math.abs(x1 - x2), num);
  } while (divisor === 1);
  return divisor;
}
/**
 * Calculate cartesian coordinates of polar coordinates
 * @param centerX X-axis coordinates of center point of circle segment
 * @param centerY X-axis coordinates of center point of circle segment
 * @param radius Radius of circle segment
 * @param angleInDegrees Angle of circle segment in degrees
 * @return Coordinates of point on circumference
 */
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

/**
 * Calculate and retrieve all the bounds for the chart and return them in one array
 * @param axisLength The length of the Axis used for
 * @param highLow An object containing a high and low property indicating the value range of the chart.
 * @param scaleMinSpace The minimum projected length a step should result in
 * @param onlyInteger
 * @return All the values to set the bounds of the chart
 */
function getBounds(axisLength, highLow, scaleMinSpace) {
  let onlyInteger = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const bounds = {
    high: highLow.high,
    low: highLow.low,
    valueRange: 0,
    oom: 0,
    step: 0,
    min: 0,
    max: 0,
    range: 0,
    numberOfSteps: 0,
    values: []
  };
  bounds.valueRange = bounds.high - bounds.low;
  bounds.oom = orderOfMagnitude(bounds.valueRange);
  bounds.step = Math.pow(10, bounds.oom);
  bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
  bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
  bounds.range = bounds.max - bounds.min;
  bounds.numberOfSteps = Math.round(bounds.range / bounds.step);
  // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
  // If we are already below the scaleMinSpace value we will scale up
  const length = projectLength(axisLength, bounds.step, bounds);
  const scaleUp = length < scaleMinSpace;
  const smallestFactor = onlyInteger ? rho(bounds.range) : 0;
  // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
  if (onlyInteger && projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
    bounds.step = 1;
  } else if (onlyInteger && smallestFactor < bounds.step && projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
    // If step 1 was too small, we can try the smallest factor of range
    // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
    // is larger than the scaleMinSpace we should go for it.
    bounds.step = smallestFactor;
  } else {
    // Trying to divide or multiply by 2 and find the best step value
    let optimizationCounter = 0;
    for (;;) {
      if (scaleUp && projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
        bounds.step *= 2;
      } else if (!scaleUp && projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
        bounds.step /= 2;
        if (onlyInteger && bounds.step % 1 !== 0) {
          bounds.step *= 2;
          break;
        }
      } else {
        break;
      }
      if (optimizationCounter++ > 1000) {
        throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
      }
    }
  }
  bounds.step = Math.max(bounds.step, EPSILON);
  function safeIncrement(value, increment) {
    // If increment is too small use *= (1+EPSILON) as a simple nextafter
    if (value === (value += increment)) {
      value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
    }
    return value;
  }
  // Narrow min and max based on new step
  let newMin = bounds.min;
  let newMax = bounds.max;
  while (newMin + bounds.step <= bounds.low) {
    newMin = safeIncrement(newMin, bounds.step);
  }
  while (newMax - bounds.step >= bounds.high) {
    newMax = safeIncrement(newMax, -bounds.step);
  }
  bounds.min = newMin;
  bounds.max = newMax;
  bounds.range = bounds.max - bounds.min;
  const values = [];
  for (let i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
    const value = roundWithPrecision(i);
    if (value !== values[values.length - 1]) {
      values.push(value);
    }
  }
  bounds.values = values;
  return bounds;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend() {
  let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    for (const prop in source) {
      const sourceProp = source[prop];
      if (typeof sourceProp === "object" && sourceProp !== null && !(sourceProp instanceof Array)) {
        target[prop] = extend(target[prop], sourceProp);
      } else {
        target[prop] = sourceProp;
      }
    }
  }
  return target;
}

/**
 * Helps to simplify functional style code
 * @param n This exact value will be returned by the noop function
 * @return The same value that was provided to the n parameter
 */
const noop = n => n;
function times(length, filler) {
  return Array.from({
    length
  }, filler ? (_, i) => filler(i) : () => void 0);
}
/**
 * Sum helper to be used in reduce functions
 */
const sum = (previous, current) => previous + (current ? current : 0);
/**
 * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
 *
 * For example:
 * @example
 * ```ts
 * const data = [[1, 2], [3], []];
 * serialMap(data, cb);
 *
 * // where cb will be called 2 times
 * // 1. call arguments: (1, 3, undefined)
 * // 2. call arguments: (2, undefined, undefined)
 * ```
 */
const serialMap = (array, callback) => times(Math.max(...array.map(element => element.length)), index => callback(...array.map(element => element[index])));
function safeHasProperty(target, property) {
  return target !== null && typeof target === "object" && Reflect.has(target, property);
}
function isNumeric(value) {
  return value !== null && isFinite(value);
}
/**
 * Returns true on all falsey values except the numeric value 0.
 */
function isFalseyButZero(value) {
  return !value && value !== 0;
}
function getNumberOrUndefined(value) {
  return isNumeric(value) ? Number(value) : undefined;
}
/**
 * Checks if value is array of arrays or not.
 */
function isArrayOfArrays(data) {
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every(Array.isArray);
}
/**
 * Loop over array.
 */
function each(list, callback) {
  let reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let index = 0;
  list[reverse ? "reduceRight" : "reduce"]((_, item, itemIndex) => callback(item, index++, itemIndex), void 0);
}

/**
 * Get meta data of a specific value in a series.
 */
function getMetaData(seriesData, index) {
  const value = Array.isArray(seriesData) ? seriesData[index] : safeHasProperty(seriesData, "data") ? seriesData.data[index] : null;
  return safeHasProperty(value, "meta") ? value.meta : undefined;
}
function isDataHoleValue(value) {
  return value === null || value === undefined || typeof value === "number" && isNaN(value);
}
/**
 * Checks if value is array of series objects.
 */
function isArrayOfSeries(value) {
  return Array.isArray(value) && value.every(_ => Array.isArray(_) || safeHasProperty(_, "data"));
}
/**
 * Checks if provided value object is multi value (contains x or y properties)
 */
function isMultiValue(value) {
  return typeof value === "object" && value !== null && (Reflect.has(value, "x") || Reflect.has(value, "y"));
}
/**
 * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
 */
function getMultiValue(value) {
  let dimension = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  if (isMultiValue(value) && safeHasProperty(value, dimension)) {
    return getNumberOrUndefined(value[dimension]);
  } else {
    return getNumberOrUndefined(value);
  }
}

/**
 * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
 * @param data The array that contains the data to be visualized in the chart
 * @param options The Object that contains the chart options
 * @param dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
 * @return An object that contains the highest and lowest value that will be visualized on the chart.
 */
function getHighLow(data, options, dimension) {
  // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
  options = {
    ...options,
    ...(dimension ? dimension === "x" ? options.axisX : options.axisY : {})
  };
  const highLow = {
    high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
    low: options.low === undefined ? Number.MAX_VALUE : +options.low
  };
  const findHigh = options.high === undefined;
  const findLow = options.low === undefined;
  // Function to recursively walk through arrays and find highest and lowest number
  function recursiveHighLow(sourceData) {
    if (isDataHoleValue(sourceData)) {
      return;
    } else if (Array.isArray(sourceData)) {
      for (let i = 0; i < sourceData.length; i++) {
        recursiveHighLow(sourceData[i]);
      }
    } else {
      const value = Number(dimension && safeHasProperty(sourceData, dimension) ? sourceData[dimension] : sourceData);
      if (findHigh && value > highLow.high) {
        highLow.high = value;
      }
      if (findLow && value < highLow.low) {
        highLow.low = value;
      }
    }
  }
  // Start to find highest and lowest number recursively
  if (findHigh || findLow) {
    recursiveHighLow(data);
  }
  // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
  // used to generate the chart. This is useful when the chart always needs to contain the position of the
  // invisible reference value in the view i.e. for bipolar scales.
  if (options.referenceValue || options.referenceValue === 0) {
    highLow.high = Math.max(options.referenceValue, highLow.high);
    highLow.low = Math.min(options.referenceValue, highLow.low);
  }
  // If high and low are the same because of misconfiguration or flat data (only the same value) we need
  // to set the high or low to 0 depending on the polarity
  if (highLow.high <= highLow.low) {
    // If both values are 0 we set high to 1
    if (highLow.low === 0) {
      highLow.high = 1;
    } else if (highLow.low < 0) {
      // If we have the same negative value for the bounds we set bounds.high to 0
      highLow.high = 0;
    } else if (highLow.high > 0) {
      // If we have the same positive value for the bounds we set bounds.low to 0
      highLow.low = 0;
    } else {
      // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
      highLow.high = 1;
      highLow.low = 0;
    }
  }
  return highLow;
}
function normalizeData(data) {
  let reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false,
    multi = arguments.length > 2 ? arguments[2] : void 0,
    distributed = arguments.length > 3 ? arguments[3] : void 0;
  let labelCount;
  const normalized = {
    labels: (data.labels || []).slice(),
    series: normalizeSeries(data.series, multi, distributed)
  };
  const inputLabelCount = normalized.labels.length;
  // If all elements of the normalized data array are arrays we're dealing with
  // multi series data and we need to find the largest series if they are un-even
  if (isArrayOfArrays(normalized.series)) {
    // Getting the series with the the most elements
    labelCount = Math.max(inputLabelCount, ...normalized.series.map(series => series.length));
    normalized.series.forEach(series => {
      series.push(...times(Math.max(0, labelCount - series.length)));
    });
  } else {
    // We're dealing with Pie data so we just take the normalized array length
    labelCount = normalized.series.length;
  }
  // Padding the labels to labelCount with empty strings
  normalized.labels.push(...times(Math.max(0, labelCount - inputLabelCount), () => ""));
  if (reverse) {
    reverseData(normalized);
  }
  return normalized;
}
/**
 * Reverses the series, labels and series data arrays.
 */
function reverseData(data) {
  var ref;
  (ref = data.labels) === null || ref === void 0 ? void 0 : ref.reverse();
  data.series.reverse();
  for (const series of data.series) {
    if (safeHasProperty(series, "data")) {
      series.data.reverse();
    } else if (Array.isArray(series)) {
      series.reverse();
    }
  }
}
function normalizeMulti(value, multi) {
  // We need to prepare multi value output (x and y data)
  let x;
  let y;
  // Single series value arrays are assumed to specify the Y-Axis value
  // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
  // If multi is a string then it's assumed that it specified which dimension should be filled as default
  if (typeof value !== "object") {
    const num = getNumberOrUndefined(value);
    if (multi === "x") {
      x = num;
    } else {
      y = num;
    }
  } else {
    if (safeHasProperty(value, "x")) {
      x = getNumberOrUndefined(value.x);
    }
    if (safeHasProperty(value, "y")) {
      y = getNumberOrUndefined(value.y);
    }
  }
  if (x === undefined && y === undefined) {
    return undefined;
  }
  return {
    x,
    y
  };
}
function normalizePrimitive(value, multi) {
  if (isDataHoleValue(value)) {
    // We're dealing with a hole in the data and therefore need to return undefined
    // We're also returning undefined for multi value output
    return undefined;
  }
  if (multi) {
    return normalizeMulti(value, multi);
  }
  return getNumberOrUndefined(value);
}
function normalizeSingleSeries(series, multi) {
  if (!Array.isArray(series)) {
    // We are dealing with series object notation so we need to recurse on data property
    return normalizeSingleSeries(series.data, multi);
  }
  return series.map(value => {
    if (safeHasProperty(value, "value")) {
      // We are dealing with value object notation so we need to recurse on value property
      return normalizePrimitive(value.value, multi);
    }
    return normalizePrimitive(value, multi);
  });
}
function normalizeSeries(series, multi, distributed) {
  if (isArrayOfSeries(series)) {
    return series.map(_ => normalizeSingleSeries(_, multi));
  }
  const normalizedSeries = normalizeSingleSeries(series, multi);
  if (distributed) {
    return normalizedSeries.map(value => [value]);
  }
  return normalizedSeries;
}

/**
 * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
 * valueData property describing the segment.
 *
 * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
 * points with undefined values are discarded.
 *
 * **Options**
 * The following options are used to determine how segments are formed
 * ```javascript
 * var options = {
 *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
 *   fillHoles: false,
 *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
 *   increasingX: false
 * };
 * ```
 *
 * @param pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
 * @param valueData List of associated point values in the form [v1, v2 .. vn]
 * @param options Options set by user
 * @return List of segments, each containing a pathCoordinates and valueData property.
 */
function splitIntoSegments(pathCoordinates, valueData, options) {
  const finalOptions = {
    increasingX: false,
    fillHoles: false,
    ...options
  };
  const segments = [];
  let hole = true;
  for (let i = 0; i < pathCoordinates.length; i += 2) {
    // If this value is a "hole" we set the hole flag
    if (getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
      if (!finalOptions.fillHoles) {
        hole = true;
      }
    } else {
      if (finalOptions.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
        // X is not increasing, so we need to make sure we start a new segment
        hole = true;
      }
      // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
      if (hole) {
        segments.push({
          pathCoordinates: [],
          valueData: []
        });
        // As we have a valid value now, we are not in a "hole" anymore
        hole = false;
      }
      // Add to the segment pathCoordinates and valueData
      segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
      segments[segments.length - 1].valueData.push(valueData[i / 2]);
    }
  }
  return segments;
}
function serialize(data) {
  let serialized = "";
  if (data === null || data === undefined) {
    return data;
  } else if (typeof data === "number") {
    serialized = "" + data;
  } else if (typeof data === "object") {
    serialized = JSON.stringify({
      data: data
    });
  } else {
    serialized = String(data);
  }
  return Object.keys(escapingMap).reduce((result, key) => result.replaceAll(key, escapingMap[key]), serialized);
}
function deserialize(data) {
  if (typeof data !== "string") {
    return data;
  }
  if (data === "NaN") {
    return NaN;
  }
  data = Object.keys(escapingMap).reduce((result, key) => result.replaceAll(escapingMap[key], key), data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let parsedData = data;
  if (typeof data === "string") {
    try {
      parsedData = JSON.parse(data);
      parsedData = parsedData.data !== undefined ? parsedData.data : parsedData;
    } catch (e) {
      /* Ingore */}
  }
  return parsedData;
}

/**
 * This helper class is to wrap multiple `Svg` elements into a list where you can call the `Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Svg` on multiple elements.
 * An instance of this class is also returned by `Svg.querySelectorAll`.
 */
class SvgList {
  call(method, args) {
    this.svgElements.forEach(element => Reflect.apply(element[method], element, args));
    return this;
  }
  attr() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("attr", args);
  }
  elem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("elem", args);
  }
  root() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("root", args);
  }
  getNode() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("getNode", args);
  }
  foreignObject() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("foreignObject", args);
  }
  text() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("text", args);
  }
  empty() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("empty", args);
  }
  remove() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("remove", args);
  }
  addClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("addClass", args);
  }
  removeClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeClass", args);
  }
  removeAllClasses() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeAllClasses", args);
  }
  animate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("animate", args);
  }
  /**
  * @param nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
  */
  constructor(nodeList) {
    this.svgElements = [];
    for (let i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Svg(nodeList[i]));
    }
  }
}

/**
 * This Object contains some standard easing cubic bezier curves.
 * Then can be used with their name in the `Svg.animate`.
 * You can also extend the list and use your own name in the `animate` function.
 * Click the show code button to see the available bezier functions.
 */
const easings = {
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [1, 0, 0, 1],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
};
function createAnimation(element, attribute, animationDefinition) {
  let createGuided = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false,
    eventEmitter = arguments.length > 4 ? arguments[4] : void 0;
  const {
    easing,
    ...def
  } = animationDefinition;
  const attributeProperties = {};
  let animationEasing;
  let timeout;
  // Check if an easing is specified in the definition object and delete it from the object as it will not
  // be part of the animate element attributes.
  if (easing) {
    // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
    animationEasing = Array.isArray(easing) ? easing : easings[easing];
  }
  // If numeric dur or begin was provided we assume milli seconds
  def.begin = ensureUnit(def.begin, "ms");
  def.dur = ensureUnit(def.dur, "ms");
  if (animationEasing) {
    def.calcMode = "spline";
    def.keySplines = animationEasing.join(" ");
    def.keyTimes = "0;1";
  }
  // Adding "fill: freeze" if we are in guided mode and set initial attribute values
  if (createGuided) {
    def.fill = "freeze";
    // Animated property on our element should already be set to the animation from value in guided mode
    attributeProperties[attribute] = def.from;
    element.attr(attributeProperties);
    // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
    // which needs to be in ms aside
    timeout = quantity(def.begin || 0).value;
    def.begin = "indefinite";
  }
  const animate = element.elem("animate", {
    attributeName: attribute,
    ...def
  });
  if (createGuided) {
    // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
    setTimeout(() => {
      // If beginElement fails we set the animated attribute to the end position and remove the animate element
      // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occurred in
      // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
      try {
        // @ts-expect-error Try legacy API.
        animate._node.beginElement();
      } catch (err) {
        // Set animated attribute to current animated value
        attributeProperties[attribute] = def.to;
        element.attr(attributeProperties);
        // Remove the animate element as it's no longer required
        animate.remove();
      }
    }, timeout);
  }
  const animateNode = animate.getNode();
  if (eventEmitter) {
    animateNode.addEventListener("beginEvent", () => eventEmitter.emit("animationBegin", {
      element: element,
      animate: animateNode,
      params: animationDefinition
    }));
  }
  animateNode.addEventListener("endEvent", () => {
    if (eventEmitter) {
      eventEmitter.emit("animationEnd", {
        element: element,
        animate: animateNode,
        params: animationDefinition
      });
    }
    if (createGuided) {
      // Set animated attribute to current animated value
      attributeProperties[attribute] = def.to;
      element.attr(attributeProperties);
      // Remove the animate element as it's no longer required
      animate.remove();
    }
  });
}

/**
 * Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
 */
class Svg {
  attr(attributes, ns) {
    if (typeof attributes === "string") {
      if (ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }
    Object.keys(attributes).forEach(key => {
      // If the attribute value is undefined we can skip this one
      if (attributes[key] === undefined) {
        return;
      }
      if (key.indexOf(":") !== -1) {
        const namespacedAttribute = key.split(":");
        this._node.setAttributeNS(namespaces[namespacedAttribute[0]], key, String(attributes[key]));
      } else {
        this._node.setAttribute(key, String(attributes[key]));
      }
    });
    return this;
  }
  /**
  * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
  * @param name The name of the SVG element that should be created as child element of the currently selected element wrapper
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  * @return Returns a Svg wrapper object that can be used to modify the containing SVG data
  */
  elem(name, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return new Svg(name, attributes, className, this, insertFirst);
  }
  /**
  * Returns the parent Chartist.SVG wrapper object
  * @return Returns a Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
  */
  parent() {
    return this._node.parentNode instanceof SVGElement ? new Svg(this._node.parentNode) : null;
  }
  /**
  * This method returns a Svg wrapper around the root SVG element of the current tree.
  * @return The root SVG element wrapped in a Svg element
  */
  root() {
    let node = this._node;
    while (node.nodeName !== "svg") {
      if (node.parentElement) {
        node = node.parentElement;
      } else {
        break;
      }
    }
    return new Svg(node);
  }
  /**
  * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Svg wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper for the element found or null if no element was found
  */
  querySelector(selector) {
    const foundNode = this._node.querySelector(selector);
    return foundNode ? new Svg(foundNode) : null;
  }
  /**
  * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Svg.List wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper list for the element found or null if no element was found
  */
  querySelectorAll(selector) {
    const foundNodes = this._node.querySelectorAll(selector);
    return new SvgList(foundNodes);
  }
  /**
  * Returns the underlying SVG node for the current element.
  */
  getNode() {
    return this._node;
  }
  /**
  * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
  * @param content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
  * @param attributes An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst Specifies if the foreignObject should be inserted as first child
  * @return New wrapper object that wraps the foreignObject element
  */
  foreignObject(content, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let contentNode;
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if (typeof content === "string") {
      const container = document.createElement("div");
      container.innerHTML = content;
      contentNode = container.firstChild;
    } else {
      contentNode = content;
    }
    if (contentNode instanceof Element) {
      // Adding namespace to content element
      contentNode.setAttribute("xmlns", namespaces.xmlns);
    }
    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    const fnObj = this.elem("foreignObject", attributes, className, insertFirst);
    // Add content to foreignObjectElement
    fnObj._node.appendChild(contentNode);
    return fnObj;
  }
  /**
  * This method adds a new text element to the current Svg wrapper.
  * @param t The text that should be added to the text element that is created
  * @return The same wrapper object that was used to add the newly created element
  */
  text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }
  /**
  * This method will clear all child nodes of the current wrapper object.
  * @return The same wrapper object that got emptied
  */
  empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }
    return this;
  }
  /**
  * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
  * @return The parent wrapper object of the element that got removed
  */
  remove() {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.removeChild(this._node);
    return this.parent();
  }
  /**
  * This method will replace the element with a new element that can be created outside of the current DOM.
  * @param newElement The new Svg object that will be used to replace the current wrapper object
  * @return The wrapper of the new element
  */
  replace(newElement) {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.replaceChild(newElement._node, this._node);
    return newElement;
  }
  /**
  * This method will append an element to the current element as a child.
  * @param element The Svg element that should be added as a child
  * @param insertFirst Specifies if the element should be inserted as first child
  * @return The wrapper of the appended object
  */
  append(element) {
    let insertFirst = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }
    return this;
  }
  /**
  * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
  * @return A list of classes or an empty array if there are no classes on the current element
  */
  classes() {
    const classNames = this._node.getAttribute("class");
    return classNames ? classNames.trim().split(/\s+/) : [];
  }
  /**
  * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  addClass(names) {
    this._node.setAttribute("class", this.classes().concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
      return self.indexOf(elem) === pos;
    }).join(" "));
    return this;
  }
  /**
  * Removes one or a space separated list of classes from the current element.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  removeClass(names) {
    const removedClasses = names.trim().split(/\s+/);
    this._node.setAttribute("class", this.classes().filter(name => removedClasses.indexOf(name) === -1).join(" "));
    return this;
  }
  /**
  * Removes all classes from the current element.
  * @return The wrapper of the current element
  */
  removeAllClasses() {
    this._node.setAttribute("class", "");
    return this;
  }
  /**
  * Get element height using `getBoundingClientRect`
  * @return The elements height in pixels
  */
  height() {
    return this._node.getBoundingClientRect().height;
  }
  /**
  * Get element width using `getBoundingClientRect`
  * @return The elements width in pixels
  */
  width() {
    return this._node.getBoundingClientRect().width;
  }
  /**
  * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
  * **An animations object could look like this:**
  * ```javascript
  * element.animate({
  *   opacity: {
  *     dur: 1000,
  *     from: 0,
  *     to: 1
  *   },
  *   x1: {
  *     dur: '1000ms',
  *     from: 100,
  *     to: 200,
  *     easing: 'easeOutQuart'
  *   },
  *   y1: {
  *     dur: '2s',
  *     from: 0,
  *     to: 100
  *   }
  * });
  * ```
  * **Automatic unit conversion**
  * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
  * **Guided mode**
  * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
  * If guided mode is enabled the following behavior is added:
  * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
  * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
  * - The animate element will be forced to use `fill="freeze"`
  * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
  * - After the animation the element attribute value will be set to the `to` value of the animation
  * - The animate element is deleted from the DOM
  * @param animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
  * @param guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
  * @param eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
  * @return The current element where the animation was added
  */
  animate(animations) {
    let guided = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true,
      eventEmitter = arguments.length > 2 ? arguments[2] : void 0;
    Object.keys(animations).forEach(attribute => {
      const attributeAnimation = animations[attribute];
      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if (Array.isArray(attributeAnimation)) {
        attributeAnimation.forEach(animationDefinition => createAnimation(this, attribute, animationDefinition, false, eventEmitter));
      } else {
        createAnimation(this, attribute, attributeAnimation, guided, eventEmitter);
      }
    });
    return this;
  }
  /**
  * @param name The name of the SVG element to create or an SVG dom element which should be wrapped into Svg
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  */
  constructor(name, attributes, className, parent, insertFirst = false) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if (name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(namespaces.svg, name);
      // If this is an SVG element created then custom namespace
      if (name === "svg") {
        this.attr({
          "xmlns:ct": namespaces.ct
        });
      }
    }
    if (attributes) {
      this.attr(attributes);
    }
    if (className) {
      this.addClass(className);
    }
    if (parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }
}
/**
   * @todo Only there for chartist <1 compatibility. Remove after deprecation warining.
   * @deprecated Use the animation module export `easings` directly.
   */
Svg.Easing = easings;

/**
 * Create or reinitialize the SVG element for the chart
 * @param container The containing DOM Node object that will be used to plant the SVG element
 * @param width Set the width of the SVG element. Default is 100%
 * @param height Set the height of the SVG element. Default is 100%
 * @param className Specify a class to be added to the SVG element
 * @return The created/reinitialized SVG element
 */
function createSvg(container) {
  let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "100%",
    height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "100%",
    className = arguments.length > 3 ? arguments[3] : void 0;
  // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
  // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
  Array.from(container.querySelectorAll("svg")).filter(svg => svg.getAttributeNS(namespaces.xmlns, "ct")).forEach(svg => container.removeChild(svg));
  // Create svg object with width and height or use 100% as default
  const svg1 = new Svg("svg").attr({
    width,
    height
  }).attr({
    // TODO: Check better solution (browser support) and remove inline styles due to CSP
    style: "width: ".concat(width, "; height: ").concat(height, ";")
  });
  if (className) {
    svg1.addClass(className);
  }
  // Add the DOM node to our container
  container.appendChild(svg1.getNode());
  return svg1;
}
/**
 * Converts a number into a padding object.
 * @param padding
 * @param fallback This value is used to fill missing values if a incomplete padding object was passed
 * @returns Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
 */
function normalizePadding(padding) {
  return typeof padding === "number" ? {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  } : padding === undefined ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } : {
    top: typeof padding.top === "number" ? padding.top : 0,
    right: typeof padding.right === "number" ? padding.right : 0,
    bottom: typeof padding.bottom === "number" ? padding.bottom : 0,
    left: typeof padding.left === "number" ? padding.left : 0
  };
}
/**
 * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
 * @param svg The svg element for the chart
 * @param options The Object that contains all the optional values for the chart
 * @return The chart rectangles coordinates inside the svg element plus the rectangles measurements
 */
function createChartRect(svg, options) {
  var ref, ref1, ref2, ref3;
  const hasAxis = Boolean(options.axisX || options.axisY);
  const yAxisOffset = ((ref = options.axisY) === null || ref === void 0 ? void 0 : ref.offset) || 0;
  const xAxisOffset = ((ref1 = options.axisX) === null || ref1 === void 0 ? void 0 : ref1.offset) || 0;
  const yAxisPosition = (ref2 = options.axisY) === null || ref2 === void 0 ? void 0 : ref2.position;
  const xAxisPosition = (ref3 = options.axisX) === null || ref3 === void 0 ? void 0 : ref3.position;
  // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
  let width = svg.width() || quantity(options.width).value || 0;
  let height = svg.height() || quantity(options.height).value || 0;
  const normalizedPadding = normalizePadding(options.chartPadding);
  // If settings were to small to cope with offset (legacy) and padding, we'll adjust
  width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
  height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
  const chartRect = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    padding: normalizedPadding,
    width() {
      return this.x2 - this.x1;
    },
    height() {
      return this.y1 - this.y2;
    }
  };
  if (hasAxis) {
    if (xAxisPosition === "start") {
      chartRect.y2 = normalizedPadding.top + xAxisOffset;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    } else {
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
    }
    if (yAxisPosition === "start") {
      chartRect.x1 = normalizedPadding.left + yAxisOffset;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
    }
  } else {
    chartRect.x1 = normalizedPadding.left;
    chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    chartRect.y2 = normalizedPadding.top;
    chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
  }
  return chartRect;
}
/**
 * Creates a grid line based on a projected value.
 */
function createGrid(position, index, axis, offset, length, group, classes, eventEmitter) {
  const positionalData = {
    ["".concat(axis.units.pos, "1")]: position,
    ["".concat(axis.units.pos, "2")]: position,
    ["".concat(axis.counterUnits.pos, "1")]: offset,
    ["".concat(axis.counterUnits.pos, "2")]: offset + length
  };
  const gridElement = group.elem("line", positionalData, classes.join(" "));
  // Event for grid draw
  eventEmitter.emit("draw", {
    type: "grid",
    axis,
    index,
    group,
    element: gridElement,
    ...positionalData
  });
}
/**
 * Creates a grid background rect and emits the draw event.
 */
function createGridBackground(gridGroup, chartRect, className, eventEmitter) {
  const gridBackground = gridGroup.elem("rect", {
    x: chartRect.x1,
    y: chartRect.y2,
    width: chartRect.width(),
    height: chartRect.height()
  }, className, true);
  // Event for grid background draw
  eventEmitter.emit("draw", {
    type: "gridBackground",
    group: gridGroup,
    element: gridBackground
  });
}
/**
 * Creates a label based on a projected value and an axis.
 */
function createLabel(position, length, index, label, axis, axisOffset, labelOffset, group, classes, eventEmitter) {
  const positionalData = {
    [axis.units.pos]: position + labelOffset[axis.units.pos],
    [axis.counterUnits.pos]: labelOffset[axis.counterUnits.pos],
    [axis.units.len]: length,
    [axis.counterUnits.len]: Math.max(0, axisOffset - 10)
  };
  // We need to set width and height explicitly to px as span will not expand with width and height being
  // 100% in all browsers
  const stepLength = Math.round(positionalData[axis.units.len]);
  const stepCounterLength = Math.round(positionalData[axis.counterUnits.len]);
  const content = document.createElement("span");
  content.className = classes.join(" ");
  content.style[axis.units.len] = stepLength + "px";
  content.style[axis.counterUnits.len] = stepCounterLength + "px";
  content.textContent = String(label);
  const labelElement = group.foreignObject(content, {
    style: "overflow: visible;",
    ...positionalData
  });
  eventEmitter.emit("draw", {
    type: "label",
    axis,
    index,
    group,
    element: labelElement,
    text: label,
    ...positionalData
  });
}

/**
 * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
 * @param options Options set by user
 * @param responsiveOptions Optional functions to add responsive behavior to chart
 * @param eventEmitter The event emitter that will be used to emit the options changed events
 * @return The consolidated options object from the defaults, base and matching responsive options
 */
function optionsProvider(options, responsiveOptions, eventEmitter) {
  let currentOptions;
  const mediaQueryListeners = [];
  function updateCurrentOptions(mediaEvent) {
    const previousOptions = currentOptions;
    currentOptions = extend({}, options);
    if (responsiveOptions) {
      responsiveOptions.forEach(responsiveOption => {
        const mql = window.matchMedia(responsiveOption[0]);
        if (mql.matches) {
          currentOptions = extend(currentOptions, responsiveOption[1]);
        }
      });
    }
    if (eventEmitter && mediaEvent) {
      eventEmitter.emit("optionsChanged", {
        previousOptions,
        currentOptions
      });
    }
  }
  function removeMediaQueryListeners() {
    mediaQueryListeners.forEach(mql => mql.removeEventListener("change", updateCurrentOptions));
  }
  if (!window.matchMedia) {
    throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");
  } else if (responsiveOptions) {
    responsiveOptions.forEach(responsiveOption => {
      const mql = window.matchMedia(responsiveOption[0]);
      mql.addEventListener("change", updateCurrentOptions);
      mediaQueryListeners.push(mql);
    });
  }
  // Execute initially without an event argument so we get the correct options
  updateCurrentOptions();
  return {
    removeMediaQueryListeners,
    getCurrentOptions() {
      return currentOptions;
    }
  };
}

/**
 * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
 */
const elementDescriptions = {
  m: ["x", "y"],
  l: ["x", "y"],
  c: ["x1", "y1", "x2", "y2", "x", "y"],
  a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"]
};
/**
 * Default options for newly created SVG path objects.
 */
const defaultOptions$3 = {
  // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
  accuracy: 3
};
function element(command, params, pathElements, pos, relative, data) {
  const pathElement = {
    command: relative ? command.toLowerCase() : command.toUpperCase(),
    ...params,
    ...(data ? {
      data
    } : {})
  };
  pathElements.splice(pos, 0, pathElement);
}
function forEachParam(pathElements, cb) {
  pathElements.forEach((pathElement, pathElementIndex) => {
    elementDescriptions[pathElement.command.toLowerCase()].forEach((paramName, paramIndex) => {
      cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
    });
  });
}
class SvgPath {
  /**
  * This static function on `SvgPath` is joining multiple paths together into one paths.
  * @param paths A list of paths to be joined together. The order is important.
  * @param close If the newly created path should be a closed path
  * @param options Path options for the newly created path.
  */
  static join(paths) {
    let close = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false,
      options = arguments.length > 2 ? arguments[2] : void 0;
    const joinedPath = new SvgPath(close, options);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      for (let j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }
  position(pos) {
    if (pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }
  /**
  * Removes elements from the path starting at the current position.
  * @param count Number of path elements that should be removed from the current position.
  * @return The current path object for easy call chaining.
  */
  remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }
  /**
  * Use this function to add a new move SVG path element.
  * @param x The x coordinate for the move element.
  * @param y The y coordinate for the move element.
  * @param relative If set to true the move element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  move(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false,
      data = arguments.length > 3 ? arguments[3] : void 0;
    element("M", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new line SVG path element.
  * @param x The x coordinate for the line element.
  * @param y The y coordinate for the line element.
  * @param relative If set to true the line element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  line(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false,
      data = arguments.length > 3 ? arguments[3] : void 0;
    element("L", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new curve SVG path element.
  * @param x1 The x coordinate for the first control point of the bezier curve.
  * @param y1 The y coordinate for the first control point of the bezier curve.
  * @param x2 The x coordinate for the second control point of the bezier curve.
  * @param y2 The y coordinate for the second control point of the bezier curve.
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  curve(x1, y1, x2, y2, x, y) {
    let relative = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false,
      data = arguments.length > 7 ? arguments[7] : void 0;
    element("C", {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new non-bezier curve SVG path element.
  * @param rx The radius to be used for the x-axis of the arc.
  * @param ry The radius to be used for the y-axis of the arc.
  * @param xAr Defines the orientation of the arc
  * @param lAf Large arc flag
  * @param sf Sweep flag
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  arc(rx, ry, xAr, lAf, sf, x, y) {
    let relative = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false,
      data = arguments.length > 8 ? arguments[8] : void 0;
    element("A", {
      rx,
      ry,
      xAr,
      lAf,
      sf,
      x,
      y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
  * @param path Any SVG path that contains move (m), line (l) or curve (c) components.
  * @return The current path object for easy call chaining.
  */
  parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    const chunks = path.replace(/([A-Za-z])(-?[0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce((result, pathElement) => {
      if (pathElement.match(/[A-Za-z]/)) {
        result.push([]);
      }
      result[result.length - 1].push(pathElement);
      return result;
    }, []);
    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if (chunks[chunks.length - 1][0].toUpperCase() === "Z") {
      chunks.pop();
    }
    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    const elements = chunks.map(chunk => {
      const command = chunk.shift();
      const description = elementDescriptions[command.toLowerCase()];
      return {
        command,
        ...description.reduce((result, paramName, index) => {
          result[paramName] = +chunk[index];
          return result;
        }, {})
      };
    });
    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    this.pathElements.splice(this.pos, 0, ...elements);
    // Increase the internal position by the element count
    this.pos += elements.length;
    return this;
  }
  /**
  * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
  */
  stringify() {
    const accuracyMultiplier = Math.pow(10, this.options.accuracy);
    return this.pathElements.reduce((path, pathElement) => {
      const params = elementDescriptions[pathElement.command.toLowerCase()].map(paramName => {
        const value = pathElement[paramName];
        return this.options.accuracy ? Math.round(value * accuracyMultiplier) / accuracyMultiplier : value;
      });
      return path + pathElement.command + params.join(",");
    }, "") + (this.close ? "Z" : "");
  }
  /**
  * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to scale the x, x1 and x2 of all path elements.
  * @param y The number which will be used to scale the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  scale(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] *= paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to translate the x, x1 and x2 of all path elements.
  * @param y The number which will be used to translate the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  translate(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] += paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
  * The method signature of the callback function looks like this:
  * ```javascript
  * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
  * ```
  * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
  * @param transformFnc The callback function for the transformation. Check the signature in the function description.
  * @return The current path object for easy call chaining.
  */
  transform(transformFnc) {
    forEachParam(this.pathElements, (pathElement, paramName, pathElementIndex, paramIndex, pathElements) => {
      const transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if (transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }
  /**
  * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
  * @param close Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
  */
  clone() {
    let close = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const clone = new SvgPath(close || this.close);
    clone.pos = this.pos;
    clone.pathElements = this.pathElements.slice().map(pathElement => ({
      ...pathElement
    }));
    clone.options = {
      ...this.options
    };
    return clone;
  }
  /**
  * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
  * @param command The command you'd like to use to split the path
  */
  splitByCommand(command) {
    const split = [new SvgPath()];
    this.pathElements.forEach(pathElement => {
      if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new SvgPath());
      }
      split[split.length - 1].pathElements.push(pathElement);
    });
    return split;
  }
  /**
  * Used to construct a new path object.
  * @param close If set to true then this path will be closed when stringified (with a Z at the end)
  * @param options Options object that overrides the default objects. See default options for more details.
  */
  constructor(close = false, options) {
    this.close = close;
    this.pathElements = [];
    this.pos = 0;
    this.options = {
      ...defaultOptions$3,
      ...options
    };
  }
}

/**
 * This interpolation function does not smooth the path and the result is only containing lines and no curves.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.none({
 *     fillHoles: false
 *   })
 * });
 * ```
 */
function none(options) {
  const finalOptions = {
    fillHoles: false,
    ...options
  };
  return function noneInterpolation(pathCoordinates, valueData) {
    const path = new SvgPath();
    let hole = true;
    for (let i = 0; i < pathCoordinates.length; i += 2) {
      const currX = pathCoordinates[i];
      const currY = pathCoordinates[i + 1];
      const currData = valueData[i / 2];
      if (getMultiValue(currData.value) !== undefined) {
        if (hole) {
          path.move(currX, currY, false, currData);
        } else {
          path.line(currX, currY, false, currData);
        }
        hole = false;
      } else if (!finalOptions.fillHoles) {
        hole = true;
      }
    }
    return path;
  };
}

/**
 * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
 *
 * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.simple({
 *     divisor: 2,
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the simple interpolation factory function.
 */
function simple(options) {
  const finalOptions = {
    divisor: 2,
    fillHoles: false,
    ...options
  };
  const d = 1 / Math.max(1, finalOptions.divisor);
  return function simpleInterpolation(pathCoordinates, valueData) {
    const path = new SvgPath();
    let prevX = 0;
    let prevY = 0;
    let prevData;
    for (let i = 0; i < pathCoordinates.length; i += 2) {
      const currX = pathCoordinates[i];
      const currY = pathCoordinates[i + 1];
      const length = (currX - prevX) * d;
      const currData = valueData[i / 2];
      if (currData.value !== undefined) {
        if (prevData === undefined) {
          path.move(currX, currY, false, currData);
        } else {
          path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
        }
        prevX = currX;
        prevY = currY;
        prevData = currData;
      } else if (!finalOptions.fillHoles) {
        prevX = prevY = 0;
        prevData = undefined;
      }
    }
    return path;
  };
}

/**
 * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
 *
 * @example
 * ```ts
 * const chart = new Chartist.Line('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.step({
 *     postpone: true,
 *     fillHoles: false
 *   })
 * });
 * ```
 */
function step(options) {
  const finalOptions = {
    postpone: true,
    fillHoles: false,
    ...options
  };
  return function stepInterpolation(pathCoordinates, valueData) {
    const path = new SvgPath();
    let prevX = 0;
    let prevY = 0;
    let prevData;
    for (let i = 0; i < pathCoordinates.length; i += 2) {
      const currX = pathCoordinates[i];
      const currY = pathCoordinates[i + 1];
      const currData = valueData[i / 2];
      // If the current point is also not a hole we can draw the step lines
      if (currData.value !== undefined) {
        if (prevData === undefined) {
          path.move(currX, currY, false, currData);
        } else {
          if (finalOptions.postpone) {
            // If postponed we should draw the step line with the value of the previous value
            path.line(currX, prevY, false, prevData);
          } else {
            // If not postponed we should draw the step line with the value of the current value
            path.line(prevX, currY, false, currData);
          }
          // Line to the actual point (this should only be a Y-Axis movement
          path.line(currX, currY, false, currData);
        }
        prevX = currX;
        prevY = currY;
        prevData = currData;
      } else if (!finalOptions.fillHoles) {
        prevX = prevY = 0;
        prevData = undefined;
      }
    }
    return path;
  };
}

/**
 * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
 *
 * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.cardinal({
 *     tension: 1,
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the cardinal factory function.
 */
function cardinal(options) {
  const finalOptions = {
    tension: 1,
    fillHoles: false,
    ...options
  };
  const t = Math.min(1, Math.max(0, finalOptions.tension));
  const c = 1 - t;
  return function cardinalInterpolation(pathCoordinates, valueData) {
    // First we try to split the coordinates into segments
    // This is necessary to treat "holes" in line charts
    const segments = splitIntoSegments(pathCoordinates, valueData, {
      fillHoles: finalOptions.fillHoles
    });
    if (!segments.length) {
      // If there were no segments return 'none' interpolation
      return none()([], []);
    } else if (segments.length > 1) {
      // If the split resulted in more that one segment we need to interpolate each segment individually and join them
      // afterwards together into a single path.
      // For each segment we will recurse the cardinal function
      // Join the segment path data into a single path and return
      return SvgPath.join(segments.map(segment => cardinalInterpolation(segment.pathCoordinates, segment.valueData)));
    } else {
      // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
      // segment
      pathCoordinates = segments[0].pathCoordinates;
      valueData = segments[0].valueData;
      // If less than two points we need to fallback to no smoothing
      if (pathCoordinates.length <= 4) {
        return none()(pathCoordinates, valueData);
      }
      const path = new SvgPath().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]);
      const z = false;
      for (let i = 0, iLen = pathCoordinates.length; iLen - 2 * Number(!z) > i; i += 2) {
        const p = [{
          x: +pathCoordinates[i - 2],
          y: +pathCoordinates[i - 1]
        }, {
          x: +pathCoordinates[i],
          y: +pathCoordinates[i + 1]
        }, {
          x: +pathCoordinates[i + 2],
          y: +pathCoordinates[i + 3]
        }, {
          x: +pathCoordinates[i + 4],
          y: +pathCoordinates[i + 5]
        }];
        {
          if (iLen - 4 === i) {
            p[3] = p[2];
          } else if (!i) {
            p[0] = {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            };
          }
        }
        path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
      }
      return path;
    }
  };
}

/**
 * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
 *
 * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
 *
 * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.monotoneCubic({
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the monotoneCubic factory function.
 */
function monotoneCubic(options) {
  const finalOptions = {
    fillHoles: false,
    ...options
  };
  return function monotoneCubicInterpolation(pathCoordinates, valueData) {
    // First we try to split the coordinates into segments
    // This is necessary to treat "holes" in line charts
    const segments = splitIntoSegments(pathCoordinates, valueData, {
      fillHoles: finalOptions.fillHoles,
      increasingX: true
    });
    if (!segments.length) {
      // If there were no segments return 'Chartist.Interpolation.none'
      return none()([], []);
    } else if (segments.length > 1) {
      // If the split resulted in more that one segment we need to interpolate each segment individually and join them
      // afterwards together into a single path.
      // For each segment we will recurse the monotoneCubic fn function
      // Join the segment path data into a single path and return
      return SvgPath.join(segments.map(segment => monotoneCubicInterpolation(segment.pathCoordinates, segment.valueData)));
    } else {
      // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
      // segment
      pathCoordinates = segments[0].pathCoordinates;
      valueData = segments[0].valueData;
      // If less than three points we need to fallback to no smoothing
      if (pathCoordinates.length <= 4) {
        return none()(pathCoordinates, valueData);
      }
      const xs = [];
      const ys = [];
      const n = pathCoordinates.length / 2;
      const ms = [];
      const ds = [];
      const dys = [];
      const dxs = [];
      // Populate x and y coordinates into separate arrays, for readability
      for (let i = 0; i < n; i++) {
        xs[i] = pathCoordinates[i * 2];
        ys[i] = pathCoordinates[i * 2 + 1];
      }
      // Calculate deltas and derivative
      for (let i1 = 0; i1 < n - 1; i1++) {
        dys[i1] = ys[i1 + 1] - ys[i1];
        dxs[i1] = xs[i1 + 1] - xs[i1];
        ds[i1] = dys[i1] / dxs[i1];
      }
      // Determine desired slope (m) at each point using Fritsch-Carlson method
      // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation
      ms[0] = ds[0];
      ms[n - 1] = ds[n - 2];
      for (let i2 = 1; i2 < n - 1; i2++) {
        if (ds[i2] === 0 || ds[i2 - 1] === 0 || ds[i2 - 1] > 0 !== ds[i2] > 0) {
          ms[i2] = 0;
        } else {
          ms[i2] = 3 * (dxs[i2 - 1] + dxs[i2]) / ((2 * dxs[i2] + dxs[i2 - 1]) / ds[i2 - 1] + (dxs[i2] + 2 * dxs[i2 - 1]) / ds[i2]);
          if (!isFinite(ms[i2])) {
            ms[i2] = 0;
          }
        }
      }
      // Now build a path from the slopes
      const path = new SvgPath().move(xs[0], ys[0], false, valueData[0]);
      for (let i3 = 0; i3 < n - 1; i3++) {
        path.curve(
        // First control point
        xs[i3] + dxs[i3] / 3, ys[i3] + ms[i3] * dxs[i3] / 3,
        // Second control point
        xs[i3 + 1] - dxs[i3] / 3, ys[i3 + 1] - ms[i3 + 1] * dxs[i3] / 3,
        // End point
        xs[i3 + 1], ys[i3 + 1], false, valueData[i3 + 1]);
      }
      return path;
    }
  };
}
var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  simple: simple,
  step: step,
  cardinal: cardinal,
  monotoneCubic: monotoneCubic
});
class EventEmitter {
  on(event, listener) {
    const {
      allListeners,
      listeners
    } = this;
    if (event === "*") {
      allListeners.add(listener);
    } else {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event).add(listener);
    }
  }
  off(event, listener) {
    const {
      allListeners,
      listeners
    } = this;
    if (event === "*") {
      if (listener) {
        allListeners.delete(listener);
      } else {
        allListeners.clear();
      }
    } else if (listeners.has(event)) {
      const eventListeners = listeners.get(event);
      if (listener) {
        eventListeners.delete(listener);
      } else {
        eventListeners.clear();
      }
      if (!eventListeners.size) {
        listeners.delete(event);
      }
    }
  }
  /**
  * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
  * @param event The event name that should be triggered
  * @param data Arbitrary data that will be passed to the event handler callback functions
  */
  emit(event, data) {
    const {
      allListeners,
      listeners
    } = this;
    // Only do something if there are event handlers with this name existing
    if (listeners.has(event)) {
      listeners.get(event).forEach(listener => listener(data));
    }
    // Emit event to star event handlers
    allListeners.forEach(listener => listener(event, data));
  }
  constructor() {
    this.listeners = new Map();
    this.allListeners = new Set();
  }
}
const instances = new WeakMap();
class BaseChart {
  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
  * Updates the chart which currently does a full reconstruction of the SVG DOM
  * @param data Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
  * @param options Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
  * @param override If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
  */
  update(data, options) {
    let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit("data", {
        type: "update",
        data: this.data
      });
    }
    if (options) {
      this.options = extend({}, override ? this.options : this.defaultOptions, options);
      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if (!this.initializeTimeoutId) {
        var ref;
        (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
        this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }
    // Only re-created the chart if it has been initialized yet
    if (!this.initializeTimeoutId && this.optionsProvider) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }
    // Return a reference to the chart object to chain up calls
    return this;
  }
  /**
  * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
  */
  detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if (!this.initializeTimeoutId) {
      var ref;
      window.removeEventListener("resize", this.resizeListener);
      (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }
    instances.delete(this.container);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    this.eventEmitter.on(event, listener);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event, listener) {
    this.eventEmitter.off(event, listener);
    return this;
  }
  initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener("resize", this.resizeListener);
    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.on("optionsChanged", () => this.update());
    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if (this.options.plugins) {
      this.options.plugins.forEach(plugin => {
        if (Array.isArray(plugin)) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      });
    }
    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit("data", {
      type: "initial",
      data: this.data
    });
    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());
    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = null;
  }
  constructor(query, data, defaultOptions, options, responsiveOptions) {
    this.data = data;
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = new EventEmitter();
    this.resizeListener = () => this.update();
    this.initializeTimeoutId = setTimeout(() => this.initialize(), 0);
    const container = typeof query === "string" ? document.querySelector(query) : query;
    if (!container) {
      throw new Error("Target element is not found");
    }
    this.container = container;
    const prevInstance = instances.get(container);
    // If chartist was already initialized in this container we are detaching all event listeners first
    if (prevInstance) {
      prevInstance.detach();
    }
    instances.set(container, this);
  }
}
const axisUnits = {
  x: {
    pos: "x",
    len: "width",
    dir: "horizontal",
    rectStart: "x1",
    rectEnd: "x2",
    rectOffset: "y2"
  },
  y: {
    pos: "y",
    len: "height",
    dir: "vertical",
    rectStart: "y2",
    rectEnd: "y1",
    rectOffset: "x1"
  }
};
class Axis {
  createGridAndLabels(gridGroup, labelGroup, chartOptions, eventEmitter) {
    const axisOptions = this.units.pos === "x" ? chartOptions.axisX : chartOptions.axisY;
    const projectedValues = this.ticks.map((tick, i) => this.projectValue(tick, i));
    const labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
    projectedValues.forEach((projectedValue, index) => {
      const labelValue = labelValues[index];
      const labelOffset = {
        x: 0,
        y: 0
      };
      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      let labelLength;
      if (projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, this.axisLength / this.ticks.length);
      }
      // Skip grid lines and labels where interpolated label values are falsey (except for 0)
      if (labelValue !== "" && isFalseyButZero(labelValue)) {
        return;
      }
      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if (this.units.pos === "x") {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;
        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if (chartOptions.axisX.position === "start") {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + 5;
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + 5;
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - labelLength;
        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if (chartOptions.axisY.position === "start") {
          labelOffset.x = this.chartRect.padding.left + chartOptions.axisY.labelOffset.x;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }
      if (axisOptions.showGrid) {
        createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
      }
      if (axisOptions.showLabel) {
        createLabel(projectedValue, labelLength, index, labelValue, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === "start" ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames.end], eventEmitter);
      }
    });
  }
  constructor(units, chartRect, ticks) {
    this.units = units;
    this.chartRect = chartRect;
    this.ticks = ticks;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.axisLength = chartRect[this.units.rectEnd] - chartRect[this.units.rectStart];
    this.gridOffset = chartRect[this.units.rectOffset];
  }
}
class AutoScaleAxis extends Axis {
  projectValue(value) {
    const finalValue = Number(getMultiValue(value, this.units.pos));
    return this.axisLength * (finalValue - this.bounds.min) / this.bounds.range;
  }
  constructor(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    const highLow = options.highLow || getHighLow(data, options, axisUnit.pos);
    const bounds = getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    const range = {
      min: bounds.min,
      max: bounds.max
    };
    super(axisUnit, chartRect, bounds.values);
    this.bounds = bounds;
    this.range = range;
  }
}
class FixedScaleAxis extends Axis {
  projectValue(value) {
    const finalValue = Number(getMultiValue(value, this.units.pos));
    return this.axisLength * (finalValue - this.range.min) / (this.range.max - this.range.min);
  }
  constructor(axisUnit, data, chartRect, options) {
    const highLow = options.highLow || getHighLow(data, options, axisUnit.pos);
    const divisor = options.divisor || 1;
    const ticks = (options.ticks || times(divisor, index => highLow.low + (highLow.high - highLow.low) / divisor * index)).sort((a, b) => Number(a) - Number(b));
    const range = {
      min: highLow.low,
      max: highLow.high
    };
    super(axisUnit, chartRect, ticks);
    this.range = range;
  }
}
class StepAxis extends Axis {
  projectValue(_value, index) {
    return this.stepLength * index;
  }
  constructor(axisUnit, _data, chartRect, options) {
    const ticks = options.ticks || [];
    super(axisUnit, chartRect, ticks);
    const calc = Math.max(1, ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
    this.stretch = Boolean(options.stretch);
  }
}
function getSeriesOption(series, options, key) {
  var ref;
  if (safeHasProperty(series, "name") && series.name && ((ref = options.series) === null || ref === void 0 ? void 0 : ref[series.name])) {
    const seriesOptions = options === null || options === void 0 ? void 0 : options.series[series.name];
    const value = seriesOptions[key];
    const result = value === undefined ? options[key] : value;
    return result;
  } else {
    return options[key];
  }
}
/**
 * Default options in line charts. Expand the code view to see a detailed list of options with comments.
 */
const defaultOptions$2 = {
  // Options for X-Axis
  axisX: {
    // The offset of the labels to the chart area
    offset: 30,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "end",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: undefined
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the labels to the chart area
    offset: 40,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "start",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: undefined,
    // This value specifies the minimum height in pixel of the scale steps
    scaleMinSpace: 20,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: undefined,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: undefined,
  // If the line should be drawn or not
  showLine: true,
  // If dots should be drawn or not
  showPoint: true,
  // If the line chart should draw an area
  showArea: false,
  // The base for the area chart that will be used to close the area shape (is normally 0)
  areaBase: 0,
  // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
  lineSmooth: true,
  // If the line chart should add a background fill to the .ct-grids group.
  showGridBackground: false,
  // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
  low: undefined,
  // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
  high: undefined,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: {
    top: 15,
    right: 15,
    bottom: 5,
    left: 10
  },
  // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
  fullWidth: false,
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // Override the class names that get used to generate the SVG structure of the chart
  classNames: {
    chart: "ct-chart-line",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    line: "ct-line",
    point: "ct-point",
    area: "ct-area",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end"
  }
};
class LineChart extends BaseChart {
  /**
  * Creates a new chart
  */
  createChart(options) {
    const {
      data
    } = this;
    const normalizedData = normalizeData(data, options.reverseData, true);
    // Create new svg object
    const svg = createSvg(this.container, options.width, options.height, options.classNames.chart);
    this.svg = svg;
    // Create groups for labels, grid and series
    const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
    const seriesGroup = svg.elem("g");
    const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
    const chartRect = createChartRect(svg, options);
    let axisX;
    let axisY;
    if (options.axisX.type === undefined) {
      axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, {
        ...options.axisX,
        ticks: normalizedData.labels,
        stretch: options.fullWidth
      });
    } else {
      // eslint-disable-next-line new-cap
      axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
    }
    if (options.axisY.type === undefined) {
      axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, {
        ...options.axisY,
        high: isNumeric(options.high) ? options.high : options.axisY.high,
        low: isNumeric(options.low) ? options.low : options.axisY.low
      });
    } else {
      // eslint-disable-next-line new-cap
      axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
    }
    axisX.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    if (options.showGridBackground) {
      createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }
    // Draw the series
    each(data.series, (series, seriesIndex) => {
      const seriesElement = seriesGroup.elem("g");
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      if (seriesName) {
        seriesElement.attr({
          "ct:series-name": seriesName
        });
      }
      if (seriesMeta) {
        seriesElement.attr({
          "ct:meta": serialize(seriesMeta)
        });
      }
      // Use series class from series data or if not set generate one
      seriesElement.addClass([options.classNames.series, seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))].join(" "));
      const pathCoordinates = [];
      const pathData = [];
      normalizedData.series[seriesIndex].forEach((value, valueIndex) => {
        const p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, normalizedData.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, normalizedData.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value,
          valueIndex,
          meta: getMetaData(series, valueIndex)
        });
      });
      const seriesOptions = {
        lineSmooth: getSeriesOption(series, options, "lineSmooth"),
        showPoint: getSeriesOption(series, options, "showPoint"),
        showLine: getSeriesOption(series, options, "showLine"),
        showArea: getSeriesOption(series, options, "showArea"),
        areaBase: getSeriesOption(series, options, "areaBase")
      };
      let smoothing;
      if (typeof seriesOptions.lineSmooth === "function") {
        smoothing = seriesOptions.lineSmooth;
      } else {
        smoothing = seriesOptions.lineSmooth ? monotoneCubic() : none();
      }
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      const path = smoothing(pathCoordinates, pathData);
      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {
        path.pathElements.forEach(pathElement => {
          const {
            data: pathElementData
          } = pathElement;
          const point = seriesElement.elem("line", {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point);
          if (pathElementData) {
            let x;
            let y;
            if (safeHasProperty(pathElementData.value, "x")) {
              x = pathElementData.value.x;
            }
            if (safeHasProperty(pathElementData.value, "y")) {
              y = pathElementData.value.y;
            }
            point.attr({
              "ct:value": [x, y].filter(isNumeric).join(","),
              "ct:meta": serialize(pathElementData.meta)
            });
          }
          this.eventEmitter.emit("draw", {
            type: "point",
            value: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.value,
            index: (pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.valueIndex) || 0,
            meta: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.meta,
            series,
            seriesIndex,
            axisX,
            axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y,
            chartRect
          });
        });
      }
      if (seriesOptions.showLine) {
        const line = seriesElement.elem("path", {
          d: path.stringify()
        }, options.classNames.line, true);
        this.eventEmitter.emit("draw", {
          type: "line",
          values: normalizedData.series[seriesIndex],
          path: path.clone(),
          chartRect,
          // TODO: Remove redundant
          index: seriesIndex,
          series,
          seriesIndex,
          meta: seriesMeta,
          axisX,
          axisY,
          group: seriesElement,
          element: line
        });
      }
      // Area currently only works with axes that support a range!
      if (seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        const areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);
        // We project the areaBase value into screen coordinates
        const areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);
        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand("M") // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
        .filter(pathSegment => pathSegment.pathElements.length > 1).map(solidPathSegments => {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          const firstElement = solidPathSegments.pathElements[0];
          const lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];
          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
        }).forEach(areaPath => {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          const area = seriesElement.elem("path", {
            d: areaPath.stringify()
          }, options.classNames.area, true);
          // Emit an event for each area that was drawn
          this.eventEmitter.emit("draw", {
            type: "area",
            values: normalizedData.series[seriesIndex],
            path: areaPath.clone(),
            series,
            seriesIndex,
            axisX,
            axisY,
            chartRect,
            // TODO: Remove redundant
            index: seriesIndex,
            group: seriesElement,
            element: area,
            meta: seriesMeta
          });
        });
      }
    }, options.reverseData);
    this.eventEmitter.emit("created", {
      chartRect,
      axisX,
      axisY,
      svg,
      options
    });
  }
  /**
  * This method creates a new line chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object that needs to consist of a labels and a series array
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  * @return An object which exposes the API for the created chart
  *
  * @example
  * ```ts
  * // Create a simple line chart
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // As options we currently only set a static size of 300x200 px
  * const options = {
  *   width: '300px',
  *   height: '200px'
  * };
  *
  * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
  * new LineChart('.ct-chart', data, options);
  * ```
  *
  * @example
  * ```ts
  * // Use specific interpolation function with configuration from the Chartist.Interpolation module
  *
  * const chart = new LineChart('.ct-chart', {
  *   labels: [1, 2, 3, 4, 5],
  *   series: [
  *     [1, 1, 8, 1, 7]
  *   ]
  * }, {
  *   lineSmooth: Chartist.Interpolation.cardinal({
  *     tension: 0.2
  *   })
  * });
  * ```
  *
  * @example
  * ```ts
  * // Create a line chart with responsive options
  *
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
  * const responsiveOptions = [
  *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
  *     showPoint: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return Mon, Tue, Wed etc. on medium screens
  *         return value.slice(0, 3);
  *       }
  *     }
  *   }],
  *   ['screen and (max-width: 640px)', {
  *     showLine: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return M, T, W etc. on small screens
  *         return value[0];
  *       }
  *     }
  *   }]
  * ];
  *
  * new LineChart('.ct-chart', data, null, responsiveOptions);
  * ```
  */
  constructor(query, data, options, responsiveOptions) {
    super(query, data, defaultOptions$2, extend({}, defaultOptions$2, options), responsiveOptions);
    this.data = data;
  }
}
function getSerialSums(series) {
  return serialMap(series, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return Array.from(args).reduce((prev, curr) => {
      return {
        x: prev.x + (safeHasProperty(curr, "x") ? curr.x : 0),
        y: prev.y + (safeHasProperty(curr, "y") ? curr.y : 0)
      };
    }, {
      x: 0,
      y: 0
    });
  });
}
/**
 * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
 */
const defaultOptions$1 = {
  // Options for X-Axis
  axisX: {
    // The offset of the chart drawing area to the border of the container
    offset: 30,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "end",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // This value specifies the minimum width in pixel of the scale steps
    scaleMinSpace: 30,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the chart drawing area to the border of the container
    offset: 40,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "start",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // This value specifies the minimum height in pixel of the scale steps
    scaleMinSpace: 20,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: undefined,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: undefined,
  // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
  high: undefined,
  // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
  low: undefined,
  // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
  referenceValue: 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: {
    top: 15,
    right: 15,
    bottom: 5,
    left: 10
  },
  // Specify the distance in pixel of bars in a group
  seriesBarDistance: 15,
  // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
  stackBars: false,
  // If set to true this property will force the stacked bars to draw from the zero line.
  // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
  // If set to 'accumulate-relative' positive and negative values will be handled separately.
  stackMode: "accumulate",
  // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
  horizontalBars: false,
  // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
  distributeSeries: false,
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // If the bar chart should add a background fill to the .ct-grids group.
  showGridBackground: false,
  // Override the class names that get used to generate the SVG structure of the chart
  classNames: {
    chart: "ct-chart-bar",
    horizontalBars: "ct-horizontal-bars",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    bar: "ct-bar",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end"
  }
};
class BarChart extends BaseChart {
  /**
  * Creates a new chart
  */
  createChart(options) {
    const {
      data
    } = this;
    const normalizedData = normalizeData(data, options.reverseData, options.horizontalBars ? "x" : "y", true);
    // Create new svg element
    const svg = createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? " " + options.classNames.horizontalBars : ""));
    const highLow = options.stackBars && options.stackMode !== true && normalizedData.series.length ? getHighLow([getSerialSums(normalizedData.series)], options, options.horizontalBars ? "x" : "y") : getHighLow(normalizedData.series, options, options.horizontalBars ? "x" : "y");
    this.svg = svg;
    // Drawing groups in correct order
    const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
    const seriesGroup = svg.elem("g");
    const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
    // Overrides of high / low from settings
    if (typeof options.high === "number") {
      highLow.high = options.high;
    }
    if (typeof options.low === "number") {
      highLow.low = options.low;
    }
    const chartRect = createChartRect(svg, options);
    let valueAxis;
    const labelAxisTicks = options.distributeSeries && options.stackBars ?
    // use only the first label for the step axis
    normalizedData.labels.slice(0, 1) :
    // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
    // as the bars are normalized
    normalizedData.labels;
    let labelAxis;
    let axisX;
    let axisY;
    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if (options.horizontalBars) {
      if (options.axisX.type === undefined) {
        valueAxis = axisX = new AutoScaleAxis(axisUnits.x, normalizedData.series, chartRect, {
          ...options.axisX,
          highLow: highLow,
          referenceValue: 0
        });
      } else {
        // eslint-disable-next-line new-cap
        valueAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, {
          ...options.axisX,
          highLow: highLow,
          referenceValue: 0
        });
      }
      if (options.axisY.type === undefined) {
        labelAxis = axisY = new StepAxis(axisUnits.y, normalizedData.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        // eslint-disable-next-line new-cap
        labelAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
      }
    } else {
      if (options.axisX.type === undefined) {
        labelAxis = axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        // eslint-disable-next-line new-cap
        labelAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
      }
      if (options.axisY.type === undefined) {
        valueAxis = axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, {
          ...options.axisY,
          highLow: highLow,
          referenceValue: 0
        });
      } else {
        // eslint-disable-next-line new-cap
        valueAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, {
          ...options.axisY,
          highLow: highLow,
          referenceValue: 0
        });
      }
    }
    // Projected 0 point
    const zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0);
    const isAccumulateStackMode = options.stackMode === "accumulate";
    const isAccumulateRelativeStackMode = options.stackMode === "accumulate-relative";
    // Used to track the screen coordinates of stacked bars
    const posStackedBarValues = [];
    const negStackedBarValues = [];
    let stackedBarValues = posStackedBarValues;
    labelAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    if (options.showGridBackground) {
      createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }
    // Draw the series
    each(data.series, (series, seriesIndex) => {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      const biPol = seriesIndex - (data.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      let periodHalfLength;
      // We need to set periodHalfLength based on some options combinations
      if (options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / normalizedData.series.length / 2;
      } else if (options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / normalizedData.series[seriesIndex].length / 2;
      }
      // Adding the series group to the series element
      const seriesElement = seriesGroup.elem("g");
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      if (seriesName) {
        seriesElement.attr({
          "ct:series-name": seriesName
        });
      }
      if (seriesMeta) {
        seriesElement.attr({
          "ct:meta": serialize(seriesMeta)
        });
      }
      // Use series class from series data or if not set generate one
      seriesElement.addClass([options.classNames.series, seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))].join(" "));
      normalizedData.series[seriesIndex].forEach((value, valueIndex) => {
        const valueX = safeHasProperty(value, "x") && value.x;
        const valueY = safeHasProperty(value, "y") && value.y;
        let labelAxisValueIndex;
        // We need to set labelAxisValueIndex based on some options combinations
        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }
        let projected;
        // We need to transform coordinates differently based on the chart layout
        if (options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(valueX || 0, valueIndex, normalizedData.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(valueY || 0, labelAxisValueIndex, normalizedData.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(valueX || 0, labelAxisValueIndex, normalizedData.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(valueY || 0, valueIndex, normalizedData.series[seriesIndex])
          };
        }
        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if (labelAxis instanceof StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if (!labelAxis.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }
        // distinguish between positive and negative values in relative stack mode
        if (isAccumulateRelativeStackMode) {
          stackedBarValues = valueY >= 0 || valueX >= 0 ? posStackedBarValues : negStackedBarValues;
        }
        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        const previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);
        // Skip if value is undefined
        if (value === undefined) {
          return;
        }
        const positions = {
          ["".concat(labelAxis.units.pos, "1")]: projected[labelAxis.units.pos],
          ["".concat(labelAxis.units.pos, "2")]: projected[labelAxis.units.pos]
        };
        if (options.stackBars && (isAccumulateStackMode || isAccumulateRelativeStackMode || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions["".concat(labelAxis.counterUnits.pos, "1")] = previousStack;
          positions["".concat(labelAxis.counterUnits.pos, "2")] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions["".concat(labelAxis.counterUnits.pos, "1")] = zeroPoint;
          positions["".concat(labelAxis.counterUnits.pos, "2")] = projected[labelAxis.counterUnits.pos];
        }
        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
        const metaData = getMetaData(series, valueIndex);
        // Create bar element
        const bar = seriesElement.elem("line", positions, options.classNames.bar).attr({
          "ct:value": [valueX, valueY].filter(isNumeric).join(","),
          "ct:meta": serialize(metaData)
        });
        this.eventEmitter.emit("draw", {
          type: "bar",
          value,
          index: valueIndex,
          meta: metaData,
          series,
          seriesIndex,
          axisX,
          axisY,
          chartRect,
          group: seriesElement,
          element: bar,
          ...positions
        });
      });
    }, options.reverseData);
    this.eventEmitter.emit("created", {
      chartRect,
      axisX,
      axisY,
      svg,
      options
    });
  }
  /**
  * This method creates a new bar chart and returns API object that you can use for later changes.
  * @param query A selector query string or directly a DOM element
  * @param data The data object that needs to consist of a labels and a series array
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  * @return An object which exposes the API for the created chart
  *
  * @example
  * ```ts
  * // Create a simple bar chart
  * const data = {
  *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
  * new BarChart('.ct-chart', data);
  * ```
  *
  * @example
  * ```ts
  * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
  * new BarChart('.ct-chart', {
  *   labels: [1, 2, 3, 4, 5, 6, 7],
  *   series: [
  *     [1, 3, 2, -5, -3, 1, -6],
  *     [-5, -2, -4, -1, 2, -3, 1]
  *   ]
  * }, {
  *   seriesBarDistance: 12,
  *   low: -10,
  *   high: 10
  * });
  * ```
  */
  constructor(query, data, options, responsiveOptions) {
    super(query, data, defaultOptions$1, extend({}, defaultOptions$1, options), responsiveOptions);
    this.data = data;
  }
}

/**
 * Default options in line charts. Expand the code view to see a detailed list of options with comments.
 */
const defaultOptions = {
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: undefined,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: undefined,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: 5,
  // Override the class names that are used to generate the SVG structure of the chart
  classNames: {
    chartPie: "ct-chart-pie",
    chartDonut: "ct-chart-donut",
    series: "ct-series",
    slicePie: "ct-slice-pie",
    sliceDonut: "ct-slice-donut",
    label: "ct-label"
  },
  // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
  startAngle: 0,
  // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
  total: undefined,
  // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
  donut: false,
  // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
  // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
  donutWidth: 60,
  // If a label should be shown or not
  showLabel: true,
  // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
  labelOffset: 0,
  // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
  labelPosition: "inside",
  // An interpolation function for the label value
  labelInterpolationFnc: noop,
  // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
  labelDirection: "neutral",
  // If true empty values will be ignored to avoid drawing unnecessary slices and labels
  ignoreEmptyValues: false
};
/**
 * Determines SVG anchor position based on direction and center parameter
 */
function determineAnchorPosition(center, label, direction) {
  const toTheRight = label.x > center.x;
  if (toTheRight && direction === "explode" || !toTheRight && direction === "implode") {
    return "start";
  } else if (toTheRight && direction === "implode" || !toTheRight && direction === "explode") {
    return "end";
  } else {
    return "middle";
  }
}
class PieChart extends BaseChart {
  /**
  * Creates the pie chart
  *
  * @param options
  */
  createChart(options) {
    const {
      data
    } = this;
    const normalizedData = normalizeData(data);
    const seriesGroups = [];
    let labelsGroup;
    let labelRadius;
    let startAngle = options.startAngle;
    // Create SVG.js draw
    const svg = createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    this.svg = svg;
    // Calculate charting rect
    const chartRect = createChartRect(svg, options);
    // Get biggest circle radius possible within chartRect
    let radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    const totalDataSum = options.total || normalizedData.series.reduce(sum, 0);
    const donutWidth = quantity(options.donutWidth);
    if (donutWidth.unit === "%") {
      donutWidth.value *= radius / 100;
    }
    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut ? donutWidth.value / 2 : 0;
    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if (options.labelPosition === "outside" || options.donut) {
      labelRadius = radius;
    } else if (options.labelPosition === "center") {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    if (options.labelOffset) {
      labelRadius += options.labelOffset;
    }
    // Calculate end angle based on total sum and current data value and offset with padding
    const center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };
    // Check if there is only one non-zero value in the series array.
    const hasSingleValInSeries = data.series.filter(val => safeHasProperty(val, "value") ? val.value !== 0 : val !== 0).length === 1;
    // Creating the series groups
    data.series.forEach((_, index) => seriesGroups[index] = svg.elem("g"));
    // if we need to show labels we create the label group now
    if (options.showLabel) {
      labelsGroup = svg.elem("g");
    }
    // Draw the series
    // initialize series groups
    data.series.forEach((series, index) => {
      var ref, ref1;
      // If current value is zero and we are ignoring empty values then skip to next value
      if (normalizedData.series[index] === 0 && options.ignoreEmptyValues) {
        return;
      }
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
      // If the series is an object and contains a name or meta data we add a custom attribute
      if (seriesName) {
        seriesGroups[index].attr({
          "ct:series-name": seriesName
        });
      }
      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([(ref = options.classNames) === null || ref === void 0 ? void 0 : ref.series, seriesClassName || "".concat((ref1 = options.classNames) === null || ref1 === void 0 ? void 0 : ref1.series, "-").concat(alphaNumerate(index))].join(" "));
      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      let endAngle = totalDataSum > 0 ? startAngle + normalizedData.series[index] / totalDataSum * 360 : 0;
      // Use slight offset so there are no transparent hairline issues
      const overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if (endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }
      const start = polarToCartesian(center.x, center.y, radius, overlappigStartAngle);
      const end = polarToCartesian(center.x, center.y, radius, endAngle);
      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      const path = new SvgPath(!options.donut).move(end.x, end.y).arc(radius, radius, 0, Number(endAngle - startAngle > 180), 0, start.x, start.y);
      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if (!options.donut) {
        path.line(center.x, center.y);
      }
      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      const pathElement = seriesGroups[index].elem("path", {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);
      // Adding the pie series value to the path
      pathElement.attr({
        "ct:value": normalizedData.series[index],
        "ct:meta": serialize(seriesMeta)
      });
      // If this is a donut, we add the stroke-width as style attribute
      if (options.donut) {
        pathElement.attr({
          style: "stroke-width: " + donutWidth.value + "px"
        });
      }
      // Fire off draw event
      this.eventEmitter.emit("draw", {
        type: "slice",
        value: normalizedData.series[index],
        totalDataSum: totalDataSum,
        index,
        meta: seriesMeta,
        series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center,
        radius,
        startAngle,
        endAngle,
        chartRect
      });
      // If we need to show labels we need to add the label for this slice now
      if (options.showLabel) {
        let labelPosition;
        if (data.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
        }
        let rawValue;
        if (normalizedData.labels && !isFalseyButZero(normalizedData.labels[index])) {
          rawValue = normalizedData.labels[index];
        } else {
          rawValue = normalizedData.series[index];
        }
        const interpolatedValue = options.labelInterpolationFnc(rawValue, index);
        if (interpolatedValue || interpolatedValue === 0) {
          const labelElement = labelsGroup.elem("text", {
            dx: labelPosition.x,
            dy: labelPosition.y,
            "text-anchor": determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text(String(interpolatedValue));
          // Fire off draw event
          this.eventEmitter.emit("draw", {
            type: "label",
            index,
            group: labelsGroup,
            element: labelElement,
            text: "" + interpolatedValue,
            chartRect,
            series,
            meta: seriesMeta,
            ...labelPosition
          });
        }
      }
      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    });
    this.eventEmitter.emit("created", {
      chartRect,
      svg: svg,
      options
    });
  }
  /**
  * This method creates a new pie chart and returns an object that can be used to redraw the chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  *
  * @example
  * ```ts
  * // Simple pie chart example with four series
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a donut chart
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * }, {
  *   donut: true
  * });
  * ```
  *
  * @example
  * ```ts
  * // Using donut, startAngle and total to draw a gauge chart
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   donut: true,
  *   donutWidth: 20,
  *   startAngle: 270,
  *   total: 200
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a pie chart with padding and labels that are outside the pie
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   chartPadding: 30,
  *   labelOffset: 50,
  *   labelDirection: 'explode'
  * });
  * ```
  *
  * @example
  * ```ts
  * // Overriding the class names for individual series as well as a name and meta data.
  * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
  * // to a ct:meta attribute.
  * new PieChart('.ct-chart', {
  *   series: [{
  *     value: 20,
  *     name: 'Series 1',
  *     className: 'my-custom-class-one',
  *     meta: 'Meta One'
  *   }, {
  *     value: 10,
  *     name: 'Series 2',
  *     className: 'my-custom-class-two',
  *     meta: 'Meta Two'
  *   }, {
  *     value: 70,
  *     name: 'Series 3',
  *     className: 'my-custom-class-three',
  *     meta: 'Meta Three'
  *   }]
  * });
  * ```
  */
  constructor(query, data, options, responsiveOptions) {
    super(query, data, defaultOptions, extend({}, defaultOptions, options), responsiveOptions);
    this.data = data;
  }
}


/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_reports_reports_module_ts.js.map