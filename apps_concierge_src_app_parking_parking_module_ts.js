"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_parking_parking_module_ts"],{

/***/ 52336:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/parking/new-parking.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewParkingComponent: () => (/* binding */ NewParkingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parking-topbar.component */ 64546);











const _c0 = () => ["/book", "parking", "new", "manage"];
const _c1 = () => ["/book", "parking", "new", "manage", "users"];
const _c2 = () => ["/book", "parking", "new", "manage", "map"];
function NewParkingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "nav", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Spaces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-tab-nav-panel", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tabPanel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabPanel", tabPanel_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0))("active", ctx_r1.path === "manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c1))("active", ctx_r1.path === "users");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2))("active", ctx_r1.path === "map");
  }
}
function NewParkingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No parking floors for the currently selected building");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class NewParkingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    /** List of levels for the active building */
    this.levels = this._state.levels;
    this.path = '';
  }
  ngOnInit() {
    this._state.startPolling();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) this._updatePath();
    }));
    this._updatePath();
  }
  _updatePath() {
    this.timeout('update_path', () => {
      const parts = this._router.url?.split('/') || [''];
      this.path = parts[parts.length - 1].split('?')[0];
    }, 50);
  }
  static #_ = this.ɵfac = function NewParkingComponent_Factory(t) {
    return new (t || NewParkingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_1__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NewParkingComponent,
    selectors: [["app-new-parking"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 4,
    consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], ["class", "px-8 pb-2", 4, "ngIf"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "px-8"], ["class", "absolute inset-0 bg-base-100/80/20 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "px-8", "pb-2"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "absolute", "inset-0", "bg-base-100/80/20", "flex", "flex-col", "items-center", "justify-center", "z-50"]],
    template: function NewParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "parking-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewParkingComponent_div_5_Template, 10, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, NewParkingComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.path !== "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 2, ctx.levels)) == null ? null : tmp_1_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationSidebarComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_4__.ParkingTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9uZXctcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztZQUVBO2dCQUNJLFlBQVk7WUFDaEI7O1lBRUE7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLE9BQU87Z0JBQ1AsY0FBYztnQkFDZCxZQUFZO1lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpZGViYXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 96685:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-booking-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingBookingModalComponent: () => (/* binding */ ParkingBookingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_bookings_src_lib_parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/bookings/src/lib/parking-space-list-field.component */ 24844);

















function ParkingBookingModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 7)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingModalComponent_main_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "a-user-search-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingBookingModalComponent_main_5_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.form.patchValue({
        user: null,
        user_email: null,
        user_name: null,
        phone: null
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " person_cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ParkingBookingModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ParkingBookingModalComponent_main_5_div_1_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "A name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 11)(11, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "An email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "a-date-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Parking Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "parking-space-list-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "A plate number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.user);
  }
}
function ParkingBookingModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ParkingBookingModalComponent_footer_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.postForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Saving parking reservation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class ParkingBookingModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get id() {
    return this.form.value.id;
  }
  constructor(_data, _booking_form, _dialog_ref) {
    super();
    this._data = _data;
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.user = this._data.user;
    this.date = this._data.date;
    this.form = this._booking_form.form;
  }
  ngOnInit() {
    this._booking_form.newForm(this._data.booking);
    this._booking_form.setOptions({
      type: 'parking'
    });
    this.subscription('user_changes', this.form.controls.user.valueChanges.subscribe(user => {
      if (!user) return;
      this.form.patchValue({
        user_name: user.name,
        user_email: user.email,
        user_id: user.id || user.email,
        attendees: [user]
      });
    }));
    this.form.patchValue({
      all_day: true,
      booking_type: 'parking',
      user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()
    });
    if (this._data.user) {
      this.form.patchValue({
        user_email: this._data.user.email,
        user_id: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      });
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.link_id) {
      this.form.patchValue({
        parent_id: this._data.link_id
      });
    }
    if (this._data.date) {
      this.form.patchValue({
        date: this._data.date
      });
      this.form.controls.date.disable();
    }
  }
  postForm() {
    this.form.updateValueAndValidity();
    if (!this.form.valid) return;
    this.loading = true;
    this._booking_form.postForm().catch(e => {
      this.loading = false;
      throw e;
    });
    this._dialog_ref.close();
  }
  static #_ = this.ɵfac = function ParkingBookingModalComponent_Factory(t) {
    return new (t || ParkingBookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ParkingBookingModalComponent,
    selectors: [["parking-booking-modal"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 5,
    consts: [["load_state", ""], [1, "w-[32rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", "placeholder", "Email"], ["for", "date"], ["formControlName", "date"], ["for", "parking-space"], ["name", "parking-space", "formControlName", "resources", 1, "mb-2"], ["for", "plate-number"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", "placeholder", "Plate Number"], ["name", "user", "formControlName", "user"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "mb-5", "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "user-y-2"], ["diameter", "32"]],
    template: function ParkingBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ParkingBookingModalComponent_button_4_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ParkingBookingModalComponent_main_5_Template, 29, 2, "main", 5)(6, ParkingBookingModalComponent_footer_6_Template, 5, 0, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ParkingBookingModalComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.id ? "Edit" : "New", " Parking Reservation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__.DateFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_3__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_bookings_src_lib_parking_space_list_field_component__WEBPACK_IMPORTED_MODULE_5__.ParkingSpaceListFieldComponent]
  });
}

/***/ }),

/***/ 5333:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-bookings-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingBookingsListComponent: () => (/* binding */ ParkingBookingsListComponent)
/* harmony export */ });
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);










const _c0 = a0 => ({
  key: "state",
  name: "In Use",
  content: a0,
  size: "4.75rem",
  sortable: false
});
const _c1 = () => ({
  key: "description",
  name: "Bay Number"
});
const _c2 = () => ({
  key: "booked_by_name",
  name: "Reserved By"
});
const _c3 = () => ({
  key: "user_name",
  name: "Reverved For"
});
const _c4 = a0 => ({
  key: "plate_number",
  name: "Plate Number",
  content: a0
});
const _c5 = a0 => ({
  key: "status",
  name: "Status",
  content: a0,
  size: "9.5rem"
});
const _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingBookingsListComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Left at " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, row_r1.checked_out_at, ctx_r1.time_format));
  }
}
function ParkingBookingsListComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "question_mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingsListComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingsListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ParkingBookingsListComponent_ng_template_2_div_0_Template, 4, 4, "div", 6)(1, ParkingBookingsListComponent_ng_template_2_div_1_Template, 3, 0, "div", 7)(2, ParkingBookingsListComponent_ng_template_2_div_2_Template, 3, 0, "div", 8);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r1 == null ? null : row_r1.checked_in);
  }
}
function ParkingBookingsListComponent_ng_template_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ParkingBookingsListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ParkingBookingsListComponent_ng_template_4_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r3 == null ? null : row_r3.extension_data == null ? null : row_r3.extension_data.plate_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r3 == null ? null : row_r3.extension_data == null ? null : row_r3.extension_data.plate_number));
  }
}
function ParkingBookingsListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "button", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-menu", null, 3)(9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_6_Template_button_click_9_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.approve(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 21)(11, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Approve Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_6_Template_button_click_15_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.reject(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 21)(17, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Decline Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("!text-success-content", (row_r5 == null ? null : row_r5.status) === "approved")("!bg-success", (row_r5 == null ? null : row_r5.status) === "approved")("!text-error-content", (row_r5 == null ? null : row_r5.status) === "declined")("!bg-error", (row_r5 == null ? null : row_r5.status) === "declined")("!text-neutral-content", (row_r5 == null ? null : row_r5.status) === "ended")("!bg-neutral", (row_r5 == null ? null : row_r5.status) === "ended")("opacity-30", (row_r5 == null ? null : row_r5.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", menu_r6)("disabled", (row_r5 == null ? null : row_r5.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (row_r5 == null ? null : row_r5.status) === "ended" ? "Ended" : (row_r5 == null ? null : row_r5.status) === "approved" ? "Approved" : (row_r5 == null ? null : row_r5.status) === "declined" ? "Declined" : "Pending", " ");
  }
}
function ParkingBookingsListComponent_mat_progress_bar_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 23);
  }
}
class ParkingBookingsListComponent {
  constructor(_state) {
    this._state = _state;
    this.events = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.reject = e => this._state.rejectBooking(e);
    this.approve = e => this._state.approveBooking(e);
  }
  static #_ = this.ɵfac = function ParkingBookingsListComponent_Factory(t) {
    return new (t || ParkingBookingsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingBookingsListComponent,
    selectors: [["parking-bookings-list"]],
    decls: 10,
    vars: 25,
    consts: [["state_template", ""], ["plate_template", ""], ["status_template", ""], ["menu", "matMenu"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["class", "absolute bottom-0 inset-x-0", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-content text-base-100 mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", "matTooltip", "Has not arrived at space", "matTooltipPosition", "right", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", "matTooltip", "Arrived at space", "matTooltipPosition", "right", 4, "ngIf"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-base-content", "text-base-100", "mx-auto", 3, "matTooltip"], ["matTooltip", "Has not arrived at space", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto"], ["matTooltip", "Arrived at space", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], [1, "p-4", "font-mono", "text-sm"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "absolute", "bottom-0", "inset-x-0"]],
    template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ParkingBookingsListComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(4, ParkingBookingsListComponent_ng_template_4_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(6, ParkingBookingsListComponent_ng_template_6_Template, 21, 17, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(8, ParkingBookingsListComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_7_0;
        const state_template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        const plate_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        const status_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.events)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](18, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, state_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, plate_template_r8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c5, status_template_r9)))("filter", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx.options)) == null ? null : tmp_5_0.search)("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, ctx.loading)) == null ? null : tmp_7_0.includes("bookings"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: block;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLWJvb2tpbmdzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixjQUFjO1lBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 70172:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-map.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingMapComponent: () => (/* binding */ ParkingMapComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/explore */ 27009);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);










const _c0 = () => ({
  controls: true
});
class ParkingMapComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_explore, _ex_parking, _parking, _org) {
    super();
    this._explore = _explore;
    this._ex_parking = _ex_parking;
    this._parking = _parking;
    this._org = _org;
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.locate = '';
  }
  ngOnInit() {
    this.subscription('parking_level', this._parking.options.subscribe(_ => {
      const zone = _.zones[0] || this._org.levelsForBuilding()[0].id;
      this._explore.setLevel(_.zones[0]);
    }));
  }
  static #_ = this.ɵfac = function ParkingMapComponent_Factory(t) {
    return new (t || ParkingMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreParkingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_2__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ParkingMapComponent,
    selectors: [["parking-map"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_placeos_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreParkingService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 18,
    consts: [[1, "relative", "w-full", "h-[calc(100%-1.5rem)]", "my-2", "bg-base-200", "rounded-xl", "shadow"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]],
    template: function ParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "interactive-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, ctx.url))("styles", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, ctx.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 11, ctx.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 13, ctx.actions))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 15, ctx.labels))("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c0))("focus", ctx.locate);
      }
    },
    dependencies: [_libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_4__.InteractiveMapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe]
  });
}

/***/ }),

/***/ 32979:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-space-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceListComponent: () => (/* binding */ ParkingSpaceListComponent)
/* harmony export */ });
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);









const _c0 = () => ({
  key: "name",
  name: "Name"
});
const _c1 = a0 => ({
  key: "map_id",
  name: "Bay Number",
  content: a0
});
const _c2 = () => ({
  key: "assigned_to",
  name: "Assigned"
});
const _c3 = () => ({
  key: "notes",
  name: "Notes"
});
const _c4 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  sortable: false,
  size: "7.5rem"
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingSpaceListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1);
  }
}
function ParkingSpaceListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_5_Template_button_click_1_listener() {
      const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.editSpace(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_5_Template_button_click_4_listener() {
      const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeSpace(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ParkingSpaceListComponent_mat_progress_bar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 9);
  }
}
class ParkingSpaceListComponent {
  constructor(_state) {
    this._state = _state;
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.editSpace = s => this._state.editSpace(s);
    this.removeSpace = s => this._state.removeSpace(s);
  }
  static #_ = this.ɵfac = function ParkingSpaceListComponent_Factory(t) {
    return new (t || ParkingSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingSpaceListComponent,
    selectors: [["parking-space-list"]],
    decls: 9,
    vars: 22,
    consts: [["id_template", ""], ["action_template", ""], [1, "h-full", "w-full", "overflow-auto"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["class", "absolute bottom-0 inset-x-0", 4, "ngIf"], [1, "font-mono", "text-sm", "p-4"], [1, "w-full", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["icon", "", "matRipple", "", "matTooltip", "Edit Parking Space", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Parking Space", 1, "text-error", 3, "click"], [1, "absolute", "bottom-0", "inset-x-0"]],
    template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "simple-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingSpaceListComponent_ng_template_3_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(5, ParkingSpaceListComponent_ng_template_5_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, ParkingSpaceListComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_6_0;
        const id_template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const action_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.spaces)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](16, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, id_template_r5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, action_template_r6)))("filter", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.options)) == null ? null : tmp_4_0.search)("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, ctx.loading)) == null ? null : tmp_6_0.includes("spaces"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34836:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-space-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingSpaceModalComponent: () => (/* binding */ ParkingSpaceModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);














function ParkingSpaceModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ParkingSpaceModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Parking Space Name/Bay Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "A name is required for parking spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Map ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " A map ID is required for parking spaces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Assigned User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a-user-search-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParkingSpaceModalComponent_main_5_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.form.patchValue({
        assigned_user: null,
        assigned_to: null,
        assigned_name: null
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " person_cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20)(25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParkingSpaceModalComponent_main_5_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.postForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
  }
}
function ParkingSpaceModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saving parking space details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || '';
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      map_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      assigned_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      assigned_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      assigned_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      map_rotation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0)
    });
    if (_data) this.form.patchValue(_data);
  }
  postForm() {
    if (!this.form.valid) return;
    this.loading = true;
    const value = this.form.value;
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({
      reason: 'done',
      metadata: value
    });
  }
  static #_ = this.ɵfac = function ParkingSpaceModalComponent_Factory(t) {
    return new (t || ParkingSpaceModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ParkingSpaceModalComponent,
    selectors: [["parking-space-modal"]],
    outputs: {
      event: "event"
    },
    decls: 8,
    vars: 4,
    consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id"], ["for", "user"], [1, "flex", "items-center", "space-x-2"], ["name", "user", "formControlName", "assigned_user"], ["icon", "", "matRipple", "", "matTooltip", "Clear Assigned User", 1, "mb-5", "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]],
    template: function ParkingSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ParkingSpaceModalComponent_button_4_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ParkingSpaceModalComponent_main_5_Template, 29, 1, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ParkingSpaceModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.id ? "Edit" : "New", " Parking Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_0__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent]
  });
}

/***/ }),

/***/ 28007:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingStateService: () => (/* binding */ ParkingStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-space-modal.component */ 34836);
/* harmony import */ var _parking_user_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking-user-modal.component */ 6233);
/* harmony import */ var _parking_booking_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parking-booking-modal.component */ 96685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 12587);

















class ParkingStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject({
      date: Date.now(),
      search: '',
      zones: []
    });
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    /** List of available parking levels for the current building */
    this.levels = this._org.level_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(_ => {
      if (!this._settings.get('app.use_region')) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map(bld => bld.id);
        const list = _.filter(lvl => bld_ids.includes(lvl.parent_id) && lvl.tags.includes('parking'));
        list.map(lvl => ({
          ...lvl,
          display_name: `${blds.find(_ => _.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter(lvl => lvl.parent_id === this._org.building.id && lvl.tags.includes('parking'));
    }));
    /** List of parking spaces for the current building/level */
    this.spaces = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.levels, this._options, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([lvls, options]) => !!(options.zones[0] || lvls[0]?.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([levels, options]) => {
      this._loading.next([...this._loading.getValue(), 'spaces']);
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(options.zones[0] || levels[0]?.id, 'parking-spaces');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(metadata => metadata.details instanceof Array ? metadata.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'spaces'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    /** List of parking spaces for the current building/level */
    this.users = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([bld]) => !!bld?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([bld]) => {
      this._loading.next([...this._loading.getValue(), 'users']);
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(bld.id, 'parking-users');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(metadata => metadata.details instanceof Array ? metadata.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'users'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    /** List of parking bookings for the current building/level */
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._org.active_building, this._options, this.users, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([bld, options, users]) => {
      this._loading.next([...this._loading.getValue(), 'bookings']);
      return (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.queryBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(options.date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(options.date)),
        type: 'parking',
        zones: options.zones?.length ? options.zones.join(',') : (this._settings.get('app.use_region') ? this._org.region?.id : '') || bld?.id
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(list => {
        for (const booking of list) {
          const user = users.find(_ => _.email.toLowerCase() === booking.user_email.toLowerCase());
          console.log('User:', user, users);
          if (user) {
            booking.extension_data.plate_number = booking.extension_data.plate_number || user.plate_number;
          }
        }
        return list;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(this._loading.getValue().filter(_ => _ !== 'bookings'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  startPolling(delay = 5000) {
    this._poll.next(Date.now());
    this.interval('poll', () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  /** Add or update a space in the available list */
  editSpace(space) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_parking_space_modal_component__WEBPACK_IMPORTED_MODULE_5__.ParkingSpaceModalComponent, {
        data: space
      });
      const state = yield Promise.race([ref.afterClosed().toPromise(), ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.first)(_ => _.reason === 'done')).toPromise()]);
      if (state?.reason !== 'done') return;
      const zone = _this._options.getValue().zones[0];
      const new_space = {
        ...state.metadata,
        id: state.metadata.id || `parking-${zone}.${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.randomInt)(999_999)}`
      };
      const spaces = yield _this.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).toPromise();
      const idx = spaces.findIndex(_ => _.id === new_space.id);
      if (idx >= 0) spaces[idx] = new_space;else spaces.push(new_space);
      const new_space_list = spaces;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-spaces',
        details: new_space_list,
        description: 'List of available parking spaces'
      }).toPromise();
      _this._change.next(Date.now());
      ref.close();
    })();
  }
  /** Remove the given space from the available list */
  removeSpace(space) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const state = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Remove Parking Space',
        content: `Are you sure you wish to remove the parking space "${space.name}"?`,
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (state?.reason !== 'done') return;
      state.loading('Removing parking space...');
      const zone = _this2._options.getValue().zones[0];
      const spaces = yield _this2.spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-spaces',
        details: spaces.filter(_ => _.id !== space.id),
        description: 'List of available parking spaces'
      }).toPromise();
      state.close();
    })();
  }
  /** Add or update a space in the available list */
  editUser(user) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Edit User', user);
      const ref = _this3._dialog.open(_parking_user_modal_component__WEBPACK_IMPORTED_MODULE_6__.ParkingUserModalComponent, {
        data: user
      });
      const state = yield Promise.race([ref.afterClosed().toPromise(), ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.first)(_ => _.reason === 'done')).toPromise()]);
      if (state?.reason !== 'done') return;
      const zone = _this3._org.building.id;
      const new_user = {
        ...state.metadata,
        id: state.metadata.id || `P:USR-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.randomInt)(999_999)}`
      };
      if ('user' in new_user) delete new_user.user;
      const users = yield _this3.users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).toPromise();
      const idx = users.findIndex(_ => _.id === new_user.id);
      if (idx >= 0) users[idx] = new_user;else users.push(new_user);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-users',
        details: users,
        description: 'List of available parking users'
      }).toPromise();
      _this3._change.next(Date.now());
      ref.close();
    })();
  }
  /** Remove the given space from the available list */
  removeUser(user) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const state = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Remove Parking User',
        content: `Are you sure you wish to remove the parking user "${user.name}"?`,
        icon: {
          content: 'delete'
        }
      }, _this4._dialog);
      if (state?.reason !== 'done') return;
      state.loading('Removing parking user...');
      const zone = _this4._options.getValue().zones[0];
      const users = yield _this4.users.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).toPromise();
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(zone, {
        name: 'parking-users',
        details: users.filter(_ => _.id !== user.id),
        description: 'List of available parking users'
      }).toPromise();
      state.close();
    })();
  }
  editReservation(reservation, user = null, link_id) {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5._dialog.open(_parking_booking_modal_component__WEBPACK_IMPORTED_MODULE_7__.ParkingBookingModalComponent, {
        data: {
          booking: reservation,
          user,
          link_id
        }
      });
    })();
  }
  approveBooking(booking) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.approveBooking)(booking.id).toPromise().catch(_ => 'failed');
      success === 'failed' ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error approving in desk booking') : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Approved parking reservation for ${booking.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(booking.date, 'MMM Do')}.`);
    })();
  }
  rejectBooking(bookings) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(bookings.id).toPromise().catch(_ => 'failed');
      success === 'failed' ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error rejecting in desk booking') : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Rejected parking reservation for ${bookings.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(bookings.date, 'MMM Do')}.`);
    })();
  }
  static #_ = this.ɵfac = function ParkingStateService_Factory(t) {
    return new (t || ParkingStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
    token: ParkingStateService,
    factory: ParkingStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 64546:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-topbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingTopbarComponent: () => (/* binding */ ParkingTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);




















function ParkingTopbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingTopbarComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.newParkingSpace());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ParkingTopbarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingTopbarComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.newParkingUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ParkingTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ParkingTopbarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.newReservation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ParkingTopbarComponent_mat_option_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, level_r5.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function ParkingTopbarComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ParkingTopbarComponent_mat_option_12_div_2_Template, 5, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", level_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](level_r5.display_name || level_r5.name);
  }
}
function ParkingTopbarComponent_date_options_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "date-options", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dateChange", function ParkingTopbarComponent_date_options_15_Template_date_options_dateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class ParkingTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_state, _org, _route, _router, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._settings = _settings;
    this.path = '';
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._state.levels;
    /** Options set for week view */
    this.options = this._state.options;
    /** Set filtered date */
    this.setDate = d => this._state.setOptions({
      date: d
    });
    /** Set filter string */
    this.setSearch = str => this._state.setOptions({
      search: str
    });
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._state.setOptions({
        zones: z
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            _this.zones = zones;
            if (!level) return;
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
          }
        }
      }));
      _this.subscription('levels', _this._state.levels.subscribe(levels => {
        if (_this.use_region) return;
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
      _this.subscription('router.events', _this._router.events.subscribe(e => {
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd) _this._updatePath();
      }));
      _this._updatePath();
    })();
  }
  newParkingSpace() {
    this._state.editSpace();
  }
  newParkingUser() {
    this._state.editUser();
  }
  newReservation() {
    this._state.editReservation();
  }
  _updatePath() {
    this.timeout('update_path', () => {
      const parts = this._router.url?.split('/') || [''];
      this.path = parts[parts.length - 1].split('?')[0];
    }, 50);
  }
  static #_ = this.ɵfac = function ParkingTopbarComponent_Factory(t) {
    return new (t || ParkingTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_3__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ParkingTopbarComponent,
    selectors: [["parking-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 16,
    vars: 12,
    consts: [[1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", "class", "space-x-2 w-40", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "space-x-2 w-48", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "bg-base-100", "px-8", "mb-2", "h-14"], ["appearance", "outline", 1, "w-56", "no-subscript"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-0"], [3, "dateChange", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-40", 3, "click"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-48", 3, "click"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "dateChange"]],
    template: function ParkingTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "searchbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_4_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ParkingTopbarComponent_button_6_Template, 5, 0, "button", 4)(7, ParkingTopbarComponent_button_7_Template, 5, 0, "button", 4)(8, ParkingTopbarComponent_button_8_Template, 5, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "mat-form-field", 7)(11, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ParkingTopbarComponent_mat_option_12_Template, 5, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ParkingTopbarComponent_date_options_15_Template, 1, 0, "date-options", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.path === "events" ? "Parking Management" : "Parking Reservations", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("model", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 8, ctx.options)) == null ? null : tmp_1_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.path === "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.path === "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 10, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.path === "events" || ctx.path === "map");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__.BuildingPipe],
    styles: ["button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuODVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6233:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-user-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingUserModalComponent: () => (/* binding */ ParkingUserModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
















function ParkingUserModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 8)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingUserModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "a-user-search-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUserModalComponent_main_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.form.patchValue({
        user: null,
        email: null,
        name: null,
        phone: null
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " person_cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "A name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "An email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10)(19, "div", 19)(20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Car Number Plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19)(25, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Car Colour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 27)(34, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](35, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.form);
  }
}
function ParkingUserModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUserModalComponent_footer_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.postForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingUserModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Saving parking user details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ParkingUserModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get id() {
    return this._data?.id || '';
  }
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.loading = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      plate_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      car_color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      deny: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false)
    });
    if (_data) this.form.patchValue(_data);
    console.log('User Modal', this.form.value, _data);
  }
  ngOnInit() {
    this.subscription('user', this.form.valueChanges.subscribe(value => {
      if (value.user) {
        this.form.patchValue({
          email: value.user.email,
          name: value.user.name
        });
      }
    }));
  }
  postForm() {
    if (!this.form.valid) return;
    this.loading = true;
    const value = this.form.value;
    if (value.user) {
      value.email = value.user.email;
      value.name = value.user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({
      reason: 'done',
      metadata: value
    });
  }
  static #_ = this.ɵfac = function ParkingUserModalComponent_Factory(t) {
    return new (t || ParkingUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingUserModalComponent,
    selectors: [["parking-user-modal"]],
    outputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 5,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_deny$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_USER_MODAL_COMPONENT_TS_0 = goog.getMsg(" Deny User Parking Access ");
        i18n_0 = MSG_EXTERNAL_deny$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_USER_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:@@deny␟52641a66d27267c758ce08ae66f779767c90552f␟5404152440006125242: Deny User Parking Access `;
      }
      return [["load_state", ""], i18n_0, [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], [1, "flex", "items-center", "space-x-2"], ["name", "user", "formControlName", "user"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "mb-5", "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "email", "placeholder", "Email"], [1, "flex-1", "w-1/3"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", "placeholder", "Car Plate Number"], ["for", "car-color"], ["matInput", "", "name", "car-color", "formControlName", "car_color", "placeholder", "Car Colour"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", "placeholder", "User's Notes"], [1, "px-2", "pb-2"], ["name", "deny", "formControlName", "deny"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "user-y-2"], ["diameter", "32"]];
    },
    template: function ParkingUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "header", 3)(2, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ParkingUserModalComponent_button_4_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ParkingUserModalComponent_main_5_Template, 36, 1, "main", 6)(6, ParkingUserModalComponent_footer_6_Template, 5, 0, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ParkingUserModalComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.id ? "Edit" : "New", " Parking User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_1__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent]
  });
}

/***/ }),

/***/ 33921:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking-users-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingUsersListComponent: () => (/* binding */ ParkingUsersListComponent)
/* harmony export */ });
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);









const _c0 = () => ({
  key: "name",
  name: "Name"
});
const _c1 = () => ({
  key: "email",
  name: "Email"
});
const _c2 = () => ({
  key: "car_color",
  name: "Car Colour"
});
const _c3 = a0 => ({
  key: "plate_number",
  name: "Plate Number",
  content: a0
});
const _c4 = () => ({
  key: "phone",
  name: "Phone"
});
const _c5 = () => ({
  key: "notes",
  name: "Notes"
});
const _c6 = a0 => ({
  key: "deny",
  name: "Deny",
  size: "4.5rem",
  content: a0
});
const _c7 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  sortable: false,
  size: "7.5rem"
});
const _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function ParkingUsersListComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingUsersListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ParkingUsersListComponent_ng_template_3_div_0_Template, 3, 0, "div", 5);
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1);
  }
}
function ParkingUsersListComponent_ng_template_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ParkingUsersListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ParkingUsersListComponent_ng_template_5_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r2);
  }
}
function ParkingUsersListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_7_Template_button_click_1_listener() {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.editUser(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_7_Template_button_click_4_listener() {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.removeUser(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
class ParkingUsersListComponent {
  constructor(_state) {
    this._state = _state;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.new_items = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.user_list = this._state.users;
    this.editUser = u => this._state.editUser(u);
    this.removeUser = u => this._state.removeUser(u);
  }
  static #_ = this.ɵfac = function ParkingUsersListComponent_Factory(t) {
    return new (t || ParkingUsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ParkingUsersListComponent,
    selectors: [["parking-users-list"]],
    decls: 9,
    vars: 26,
    consts: [["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], [1, "p-4", "font-mono", "text-sm"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "w-full", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["icon", "", "matRipple", "", "matTooltip", "Edit User", 3, "click"], ["icon", "", "matTooltip", "Remove User", 1, "text-error", 3, "click"]],
    template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingUsersListComponent_ng_template_3_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(5, ParkingUsersListComponent_ng_template_5_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, ParkingUsersListComponent_ng_template_7_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_5_0;
        const denied_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const plate_template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        const action_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.user_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](17, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c3, plate_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c6, denied_template_r6), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c7, action_template_r8)))("filter", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx.options)) == null ? null : tmp_5_0.search)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe]
  });
}

/***/ }),

/***/ 12275:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParkingComponent: () => (/* binding */ ParkingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _parking_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parking-state.service */ 28007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-topbar.component */ 64546);










const _c0 = () => ["/parking", "events"];
const _c1 = () => ["/parking", "spaces"];
function ParkingComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No parking floors for the currently selected building");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ParkingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    /** List of levels for the active building */
    this.levels = this._state.levels;
    this.path = '';
  }
  ngOnInit() {
    this._state.startPolling();
    this.subscription('router.events', this._router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        const url_parts = this._router.url?.split('/') || [''];
        this.path = url_parts[parts.length - 1].split('?')[0];
      }
    }));
    const parts = this._router.url?.split('/') || [''];
    this.path = parts[parts.length - 1].split('?')[0];
  }
  static #_ = this.ɵfac = function ParkingComponent_Factory(t) {
    return new (t || ParkingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_1__.ParkingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ParkingComponent,
    selectors: [["app-parking"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 9,
    consts: [[1, "relative", "overflow-hidden", "bg-base-100"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-4"], ["class", "absolute inset-0 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "z-50"], [1, "absolute", "inset-0", "bg-base-100", "opacity-50", "z-0"]],
    template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "parking-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "nav", 2)(5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Bookings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Manage Spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ParkingComponent_div_11_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("active", ctx.path === "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1))("active", ctx.path === "spaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 5, ctx.levels)) == null ? null : tmp_4_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_3__.ParkingTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9wYXJraW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33666:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/parking/parking.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppParkingModule: () => (/* binding */ AppParkingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parking-bookings-list.component */ 5333);
/* harmony import */ var _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-space-list.component */ 32979);
/* harmony import */ var _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parking-space-modal.component */ 34836);
/* harmony import */ var _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-topbar.component */ 64546);
/* harmony import */ var _parking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking.component */ 12275);
/* harmony import */ var _new_parking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-parking.component */ 52336);
/* harmony import */ var _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parking-users-list.component */ 33921);
/* harmony import */ var _parking_user_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parking-user-modal.component */ 6233);
/* harmony import */ var _parking_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parking-map.component */ 70172);
/* harmony import */ var _parking_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parking-booking-modal.component */ 96685);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);




















const COMPONENTS = [_new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent, _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent, _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent, _parking_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__.ParkingBookingModalComponent, _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent, _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__.ParkingTopbarComponent, _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__.ParkingSpaceModalComponent, _parking_user_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingUserModalComponent, _parking_map_component__WEBPACK_IMPORTED_MODULE_10__.ParkingMapComponent];
const ROUTES = [{
  path: 'new',
  component: _new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent,
  children: [{
    path: 'events',
    component: _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent
  }, {
    path: 'manage/users',
    component: _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent
  }, {
    path: 'manage/map',
    component: _parking_map_component__WEBPACK_IMPORTED_MODULE_10__.ParkingMapComponent
  }, {
    path: 'manage',
    component: _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '',
  component: _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent,
  children: [{
    path: 'events',
    component: _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent
  }, {
    path: 'users',
    component: _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent
  }, {
    path: 'manage',
    component: _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent
  }, {
    path: '**',
    redirectTo: 'events'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class AppParkingModule {
  static #_ = this.ɵfac = function AppParkingModule_Factory(t) {
    return new (t || AppParkingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppParkingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_12__.SharedBookingsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppParkingModule, {
    declarations: [_new_parking_component__WEBPACK_IMPORTED_MODULE_7__.NewParkingComponent, _parking_component__WEBPACK_IMPORTED_MODULE_6__.ParkingComponent, _parking_bookings_list_component__WEBPACK_IMPORTED_MODULE_2__.ParkingBookingsListComponent, _parking_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__.ParkingBookingModalComponent, _parking_space_list_component__WEBPACK_IMPORTED_MODULE_3__.ParkingSpaceListComponent, _parking_users_list_component__WEBPACK_IMPORTED_MODULE_8__.ParkingUsersListComponent, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_5__.ParkingTopbarComponent, _parking_space_modal_component__WEBPACK_IMPORTED_MODULE_4__.ParkingSpaceModalComponent, _parking_user_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingUserModalComponent, _parking_map_component__WEBPACK_IMPORTED_MODULE_10__.ParkingMapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_12__.SharedBookingsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map