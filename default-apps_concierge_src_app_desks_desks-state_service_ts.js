"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-apps_concierge_src_app_desks_desks-state_service_ts"],{

/***/ 85510:
/*!**************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desk-modal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskModalComponent: () => (/* binding */ DeskModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_form_fields_src_lib_item_list_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/item-list-field.component */ 20212);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);













function DeskModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DeskModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 7)(1, "div", 8)(2, "div", 9)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Desk Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "A name is required for desks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Map ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " A Map ID is required for desks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "item-list-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "item-list-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeskModalComponent_main_5_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.postForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
  }
}
function DeskModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saving desk details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DeskModalComponent {
  get id() {
    return this._data?.desk?.id || '';
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      map_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      groups: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([]),
      features: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([]),
      notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
    if (_data?.desk) this.form.patchValue(_data.desk);
  }
  postForm() {
    if (!this.form.valid) return;
    this.loading = true;
    const value = this.form.value;
    this._dialog_ref.disableClose = true;
    this.event.emit({
      reason: 'done',
      metadata: value
    });
  }
  static #_ = this.ɵfac = function DeskModalComponent_Factory(t) {
    return new (t || DeskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DeskModalComponent,
    selectors: [["desk-modal"]],
    outputs: {
      event: "event"
    },
    decls: 8,
    vars: 4,
    consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], [1, "flex", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "e.g. Office Desk"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", "placeholder", "e.g. table-01.012"], ["for", "notes"], ["formControlName", "groups", 1, "w-full"], ["formControlName", "features", 1, "w-full"], ["appearance", "outline"], ["matInput", "", "name", "notes", "formControlName", "notes"], [1, "flex", "items-center", "justify-end", "space-x-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]],
    template: function DeskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DeskModalComponent_button_4_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DeskModalComponent_main_5_Template, 35, 1, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DeskModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.id ? "Edit" : "New", " Desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_form_fields_src_lib_item_list_field_component__WEBPACK_IMPORTED_MODULE_0__.ItemListFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent]
  });
}

/***/ }),

/***/ 20631:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/desks/desks-state.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksStateService: () => (/* binding */ DesksStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 22508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 75774);
/* harmony import */ var _desk_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-modal.component */ 85510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 12587);















function addQRCodeToBooking(booking) {
  return new _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.Booking({
    ...booking,
    extension_data: {
      ...booking.extension_data,
      checkin_qr_code: (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_5__.generateQRCode)(`/workplace/#/book/code?asset_id=${encodeURIComponent(booking.asset_id)}`)
    }
  });
}
class DesksStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({});
    this._desk_bookings = [];
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.desks = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._filters, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([filters]) => {
      const zones = filters.zones || [];
      return zones && !zones.includes('All') ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(zones[0], 'desks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(m => m.details instanceof Array ? m.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]))) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.listChildMetadata)(this._org.building?.id, {
        name: 'desks'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(m => m.map(i => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(list => {
      if (!(list instanceof Array)) list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      return list.map(i => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
        ...i,
        qr_code: ''
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this._next_page = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this._call_next_page = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this._all_zones_keys = ['All', -1, '-1'];
    this.setup_paging = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._filters, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(([filters, loaded]) => {
      if (!loaded) return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some(z => this._all_zones_keys.includes(z)) ? this._settings.get('app.use_region') ? this._org.buildingsForRegion().map(_ => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.queryPagedBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(date)),
        type: 'desk',
        zones: zones.join(','),
        include_checked_out: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        data: [],
        total: 0,
        next: null
      }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._next_page, this._call_next_page]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)((a, b) => a[1] === b[1]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
          data: [],
          total: 0,
          next: null,
          reset: action.includes('RESET')
        });
      }
      // If reset is true, start over
      if (action.includes('RESET')) {
        return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => ({
          ...data,
          reset: true
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
          data: [],
          total: 0,
          next: null
        })));
      }
      return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => ({
        ...data,
        reset: false
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        data: [],
        total: 0,
        next: null
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.scan)((acc, {
      data,
      total,
      next,
      reset
    }) => {
      const list = data;
      this._next_page.next(next); // Set the next page function
      if (reset) return {
        list,
        total
      }; // Reset the items array
      return {
        list: [...acc.list, ...list],
        total
      };
    }, {
      list: [],
      total: 0
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(_ => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.has_more_pages = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => _.list.length < _.total));
    this.bookings = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(i => i.list));
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes('All')) {
      filters.zones = ['All', ...this._org.levelsForBuilding(this._org.building).map(lvl => lvl.id)];
    } else if (filters.zones && this._filters.getValue()?.zones?.includes('All')) {
      filters.zones = [];
    }
    this._filters.next({
      ...this._filters.getValue(),
      ...filters
    });
  }
  refresh() {
    this._loading.next(true);
    this.timeout('poll', () => this.setFilters(this._filters.getValue()));
  }
  addDesks(list) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const zone = _this._filters.getValue().zones[0];
      const desk_list = yield _this.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).toPromise();
      for (const desk of list) {
        const idx = desk_list.findIndex(_ => _.id === desk.id);
        if (idx >= 0) desk_list[idx] = desk;else desk_list.push(desk);
      }
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(zone, {
        name: 'desks',
        details: desk_list,
        description: 'List of available desks'
      }).toPromise();
      _this._change.next(Date.now());
    })();
  }
  editDesk(desk) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this2._dialog.open(_desk_modal_component__WEBPACK_IMPORTED_MODULE_6__.DeskModalComponent, {
        data: {
          desk
        }
      });
      const state = yield Promise.race([ref.afterClosed().toPromise(), ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.first)(_ => _.reason === 'done')).toPromise()]);
      if (state?.reason !== 'done') return;
      const zone = _this2._filters.getValue().zones[0];
      const new_space = {
        ...state.metadata,
        id: state.metadata.id || `parking-${zone}.${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.randomInt)(999_999)}`
      };
      const desk_list = yield _this2.desks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).toPromise();
      const idx = desk_list.findIndex(_ => _.id === new_space.id);
      if (idx >= 0) desk_list[idx] = new_space;else desk_list.push(new_space);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(zone, {
        name: 'desks',
        details: desk_list,
        description: 'List of available desks'
      }).toPromise();
      _this2._change.next(Date.now());
      ref.close();
    })();
  }
  checkinDesk(desk, state = true) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.checkinBooking)(desk.id, state ?? true).toPromise().catch(_ => ({
        failed: true,
        error: _
      }));
      if (status.failed) {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(status.error ? `Error: ${status.error}` : `Error checking ${state ? 'in' : 'out'} desk booking`);
        throw status.error;
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Checked ${state ? 'in' : 'out'} ${desk.user_name}.`);
    })();
  }
  approveDesk(desk) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.approveBooking)(desk.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error approving in desk booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Approved desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_24__["default"])(desk.date, 'MMM do')}.`);
      desk.approved = true;
      desk.rejected = false;
    })();
  }
  rejectDesk(desk) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.rejectBooking)(desk.id).toPromise().catch(_ => 'failed');
      if (success === 'failed') {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error rejecting in desk booking');
      }
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Rejected desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_24__["default"])(desk.date, 'MMM do')}.`);
      desk.approved = false;
      desk.rejected = true;
    })();
  }
  giveAccess(desk) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.saveBooking)(new _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.Booking({
        ...desk,
        access: true
      })).toPromise().catch(_ => 'failed');
      if (success === 'failed') return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error giving building access booking host');
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Successfully gave building access to ${desk.user_name} for desk booking.`);
      _this3._desk_bookings = [..._this3._desk_bookings, success];
    })();
  }
  rejectAllDesks() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const list = _this4._desk_bookings || [];
      if (list.length <= 0) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyInfo)('No desks to reject for the selected date');
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.openConfirmModal)({
        title: 'Cancel all desk bookings',
        content: 'Are you sure you want to cancel all bookings for the selected date?',
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this4._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Rejecting all desks for selected date...');
      yield Promise.all(list.map(desk => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.rejectBooking)(desk.id).toPromise()));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully rejected all desk bookings for selected date.');
      resp.close();
    })();
  }
  static #_ = this.ɵfac = function DesksStateService_Factory(t) {
    return new (t || DesksStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjectable"]({
    token: DesksStateService,
    factory: DesksStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-apps_concierge_src_app_desks_desks-state_service_ts.js.map