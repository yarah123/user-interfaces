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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "nav", 8)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Spaces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 9);
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
function NewParkingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "p");
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
    decls: 11,
    vars: 4,
    consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], ["class", "px-8 pb-2", 4, "ngIf"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "px-8"], [1, "w-full", "h-full", "overflow-auto"], ["class", "absolute inset-0 bg-base-100/80/20 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "px-8", "pb-2"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "absolute", "inset-0", "bg-base-100/80/20", "flex", "flex-col", "items-center", "justify-center", "z-50"]],
    template: function NewParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "parking-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewParkingComponent_div_5_Template, 10, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, NewParkingComponent_div_9_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.path !== "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 2, ctx.levels)) == null ? null : tmp_1_0.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationSidebarComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _parking_topbar_component__WEBPACK_IMPORTED_MODULE_4__.ParkingTopbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcGFya2luZy9uZXctcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztZQUVBO2dCQUNJLFlBQVk7WUFDaEI7O1lBRUE7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLE9BQU87Z0JBQ1AsY0FBYztnQkFDZCxZQUFZO1lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpZGViYXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
const _c2 = a0 => ({
  key: "user_name",
  name: "Reverved For",
  content: a0
});
const _c3 = a0 => ({
  key: "booked_by_name",
  name: "Reserved By",
  content: a0
});
const _c4 = a0 => ({
  key: "plate_number",
  name: "Plate Number",
  content: a0,
  size: "10rem"
});
const _c5 = a0 => ({
  key: "status",
  name: "Status",
  content: a0,
  size: "9.5rem"
});
const _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingBookingsListComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r1.user_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingBookingsListComponent_ng_template_4_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r1.user_name || row_r1.user_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r1.user_name && row_r1.user_email);
  }
}
function ParkingBookingsListComponent_ng_template_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r2.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ParkingBookingsListComponent_ng_template_6_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.booked_by_name || row_r2.booked_by_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r2.booked_by_name && row_r2.booked_by_email);
  }
}
function ParkingBookingsListComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().row;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Left at " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, row_r3.checked_out_at, ctx_r3.time_format));
  }
}
function ParkingBookingsListComponent_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "question_mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingsListComponent_ng_template_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingBookingsListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ParkingBookingsListComponent_ng_template_8_div_0_Template, 4, 4, "div", 12)(1, ParkingBookingsListComponent_ng_template_8_div_1_Template, 3, 0, "div", 13)(2, ParkingBookingsListComponent_ng_template_8_div_2_Template, 3, 0, "div", 14);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r3 == null ? null : row_r3.checked_in) && row_r3.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r3 == null ? null : row_r3.checked_in) && !row_r3.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r3 == null ? null : row_r3.checked_in);
  }
}
function ParkingBookingsListComponent_ng_template_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ParkingBookingsListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ParkingBookingsListComponent_ng_template_10_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r5 == null ? null : row_r5.extension_data == null ? null : row_r5.extension_data.plate_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(row_r5 == null ? null : row_r5.extension_data == null ? null : row_r5.extension_data.plate_number));
  }
}
function ParkingBookingsListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "button", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-menu", null, 5)(9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_12_Template_button_click_9_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.approve(row_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 27)(11, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Approve Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingBookingsListComponent_ng_template_12_Template_button_click_15_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.reject(row_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27)(17, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Decline Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("!text-success-content", (row_r7 == null ? null : row_r7.status) === "approved")("!bg-success", (row_r7 == null ? null : row_r7.status) === "approved")("!text-error-content", (row_r7 == null ? null : row_r7.status) === "declined")("!bg-error", (row_r7 == null ? null : row_r7.status) === "declined")("!text-neutral-content", (row_r7 == null ? null : row_r7.status) === "ended")("!bg-neutral", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (row_r7 == null ? null : row_r7.status) === "ended" ? "Ended" : (row_r7 == null ? null : row_r7.status) === "approved" ? "Approved" : (row_r7 == null ? null : row_r7.status) === "declined" ? "Declined" : "Pending", " ");
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
    decls: 15,
    vars: 28,
    consts: [["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["menu", "matMenu"], [1, "w-full"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-300 text-base-100 mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", "matTooltip", "Has not arrived at space", "matTooltipPosition", "right", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", "matTooltip", "Arrived at space", "matTooltipPosition", "right", 4, "ngIf"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-base-300", "text-base-100", "mx-auto", 3, "matTooltip"], ["matTooltip", "Has not arrived at space", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto"], ["matTooltip", "Arrived at space", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], [1, "p-4", "font-mono", "text-sm"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"]],
    template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "simple-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ParkingBookingsListComponent_ng_template_4_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(6, ParkingBookingsListComponent_ng_template_6_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(8, ParkingBookingsListComponent_ng_template_8_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(10, ParkingBookingsListComponent_ng_template_10_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(12, ParkingBookingsListComponent_ng_template_12_Template, 21, 17, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 8);
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_8_0;
        const person_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        const host_template_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const state_template_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        const plate_template_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        const status_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-0", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, ctx.loading)) == null ? null : tmp_5_0.includes("bookings")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.events)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](21, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, state_template_r11), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, person_template_r9), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, host_template_r10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, plate_template_r12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c5, status_template_r13)))("filter", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, ctx.options)) == null ? null : tmp_8_0.search)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe]
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
    this.subscription('parking_poll', this._ex_parking.startPolling());
    this._ex_parking.on_book = space => this._parking.editReservation(undefined, {
      space
    });
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
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);











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
  key: "status",
  name: "Status Today",
  content: a0,
  sortable: false,
  size: "4.5rem"
});
const _c5 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  sortable: false,
  size: "7.5rem"
});
const _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingSpaceListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("!bg-success", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("!text-success-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("!bg-error", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"))("!text-error-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx_r1.statusTooltip(ctx_r1.space_status[row_r1.id]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("assigned")) ? "person" : (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("reuse")) ? "alert" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3);
  }
}
function ParkingSpaceListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_8_Template_button_click_1_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editSpace(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParkingSpaceListComponent_ng_template_8_Template_button_click_4_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.removeSpace(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class ParkingSpaceListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.space_status = {};
    this.editSpace = s => this._state.editSpace(s);
    this.removeSpace = s => this._state.removeSpace(s);
  }
  ngOnInit() {
    this.subscription('bookings', (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.spaces, this.bookings]).subscribe(([spaces, bookings]) => this._updateStatusList(spaces, bookings)));
  }
  statusTooltip(status) {
    switch (status) {
      case 'assigned_free':
        return 'Space is assigned to a user but available for use';
      case 'assigned_busy':
        return 'Space is assigned to a user and in use';
      case 'reuse_busy':
        return 'Space is assigned to a user and in use';
      case 'busy':
        return 'Space is unassigned and in use';
      case 'free':
        return 'Space is unassigned and available for use';
    }
    return 'Space is unassigned and available for use';
  }
  _updateStatusList(spaces, bookings) {
    for (const space of spaces) {
      const booking = bookings.find(_ => _.asset_id === space.id && _.status !== 'declined' && _.status !== 'cancelled');
      if (space.assigned_to && !booking) {
        this.space_status[space.id] = 'assigned_free';
      } else if (space.assigned_to && booking && booking.user_email === space.assigned_to) {
        this.space_status[space.id] = 'assigned_busy';
      } else if (space.assigned_to && booking && booking.user_email !== space.assigned_to) {
        this.space_status[space.id] = 'reuse_busy';
      } else if (!space.assigned_to && booking) {
        this.space_status[space.id] = 'busy';
      } else {
        this.space_status[space.id] = 'free';
      }
    }
    console.log('Space Status:', this.space_status);
  }
  static #_ = this.ɵfac = function ParkingSpaceListComponent_Factory(t) {
    return new (t || ParkingSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_parking_state_service__WEBPACK_IMPORTED_MODULE_0__.ParkingStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ParkingSpaceListComponent,
    selectors: [["parking-space-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 26,
    consts: [["status_template", ""], ["id_template", ""], ["action_template", ""], [1, "w-full"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "w-full", "h-20"], ["matTooltipPosition", "left", 1, "flex", "items-center", "justify-center", "h-8", "w-8", "rounded", "bg-warning", "text-warning-content", "mx-auto", 3, "matTooltip"], [1, "text-2xl"], [1, "font-mono", "text-sm", "p-4"], [1, "w-full", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["icon", "", "matRipple", "", "matTooltip", "Edit Parking Space", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Parking Space", 1, "text-error", 3, "click"]],
    template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ParkingSpaceListComponent_ng_template_4_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(6, ParkingSpaceListComponent_ng_template_6_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(8, ParkingSpaceListComponent_ng_template_8_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 5);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        const status_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        const id_template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        const action_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("opacity-0", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx.loading)) == null ? null : tmp_3_0.includes("spaces")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.spaces)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](19, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, id_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c4, status_template_r6), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c5, action_template_r8)))("filter", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, ctx.options)) == null ? null : tmp_6_0.search)("sortable", true);
      }
    },
    dependencies: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_3__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    encapsulation: 2
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
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
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
function ParkingUsersListComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ParkingUsersListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ParkingUsersListComponent_ng_template_4_div_0_Template, 3, 0, "div", 6);
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1);
  }
}
function ParkingUsersListComponent_ng_template_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ParkingUsersListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ParkingUsersListComponent_ng_template_6_span_2_Template, 2, 0, "span", 9);
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
function ParkingUsersListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_8_Template_button_click_1_listener() {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.editUser(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParkingUsersListComponent_ng_template_8_Template_button_click_4_listener() {
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
    decls: 11,
    vars: 30,
    consts: [["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "w-full", "h-20"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], [1, "p-4", "font-mono", "text-sm"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "w-full", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["icon", "", "matRipple", "", "matTooltip", "Edit User", 3, "click"], ["icon", "", "matTooltip", "Remove User", 1, "text-error", 3, "click"]],
    template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "simple-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ParkingUsersListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(6, ParkingUsersListComponent_ng_template_6_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(8, ParkingUsersListComponent_ng_template_8_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 5);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        const denied_template_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        const plate_template_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const action_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-0", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, ctx.loading)) == null ? null : tmp_3_0.includes("users")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.user_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](21, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, plate_template_r7), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c6, denied_template_r6), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c7, action_template_r8)))("filter", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, ctx.options)) == null ? null : tmp_6_0.search)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_2__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe]
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