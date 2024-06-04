"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{

/***/ 74353:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/guest-listing.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestListingComponent: () => (/* binding */ GuestListingComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors-state.service */ 13511);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);

















const _c0 = a0 => ({
  key: "state",
  name: "Checked In",
  content: a0,
  size: "5.5rem",
  sortable: false
});
const _c1 = a0 => ({
  key: "date",
  name: "Time",
  content: a0,
  size: "8rem"
});
const _c2 = () => ({
  key: "asset_name",
  name: "Person"
});
const _c3 = () => ({
  key: "user_name",
  name: "Host"
});
const _c4 = a0 => ({
  key: "status",
  name: "State",
  content: a0,
  size: "9.25rem"
});
const _c5 = (a0, a1) => ({
  key: "induction",
  name: "Inducted",
  content: a0,
  show: a1,
  size: "5.5rem"
});
const _c6 = (a0, a1) => ({
  key: "parking_space",
  name: "Parking",
  content: a0,
  show: a1,
  size: "5.5rem"
});
const _c7 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "3.25rem",
  sortable: false
});
const _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function GuestListingComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", "Checked out at " + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 1, row_r1.checked_out_at, ctx_r1.time_format));
  }
}
function GuestListingComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "question_mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GuestListingComponent_ng_template_3_div_0_Template, 4, 4, "div", 14)(1, GuestListingComponent_ng_template_3_div_1_Template, 3, 0, "div", 15)(2, GuestListingComponent_ng_template_3_div_2_Template, 3, 0, "div", 16);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r1 == null ? null : row_r1.checked_in);
  }
}
function GuestListingComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r3.extension_data == null ? null : row_r3.extension_data.host, " ");
  }
}
function GuestListingComponent_ng_template_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (row_r4.extension_data == null ? null : row_r4.extension_data.id_confirmed) ? "Confirmed" : (row_r4.extension_data == null ? null : row_r4.extension_data.id_confirmed) === false ? "Rejected" : "Submitted", " ");
  }
}
function GuestListingComponent_ng_template_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_7_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setExt(row_r4, "id_confirmed", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Confirm ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_7_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setExt(row_r4, "id_confirmed", false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Reject ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", row_r4.extension_data == null ? null : row_r4.extension_data.id_data == null ? null : row_r4.extension_data.id_data.url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function GuestListingComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GuestListingComponent_ng_template_7_button_1_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, GuestListingComponent_ng_template_7_ng_template_2_Template, 6, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const id_confirmation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("content", id_confirmation_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r4.extension_data == null ? null : row_r4.extension_data.id_data == null ? null : row_r4.extension_data.id_data.url);
  }
}
function GuestListingComponent_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GuestListingComponent_ng_template_9_div_1_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r7.extension_data.parking_booking_id);
  }
}
function GuestListingComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "question_mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GuestListingComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GuestListingComponent_ng_template_11_div_0_Template, 3, 0, "div", 28)(1, GuestListingComponent_ng_template_11_div_1_Template, 3, 0, "div", 30)(2, GuestListingComponent_ng_template_11_div_2_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r8.induction);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !row_r8.induction && !row_r8.process_state.includes("declined"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !row_r8.induction && row_r8.process_state.includes("declined"));
  }
}
function GuestListingComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "button", 34)(2, "div", 35)(3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-menu", null, 9)(9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_13_Template_button_click_9_listener() {
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.approveVisitor(row_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 39)(11, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Approve Visitor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_13_Template_button_click_15_listener() {
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.declineVisitor(row_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 39)(17, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Decline Visitor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("!text-success-content", (row_r10 == null ? null : row_r10.status) === "approved")("!bg-success", (row_r10 == null ? null : row_r10.status) === "approved")("!text-error-content", (row_r10 == null ? null : row_r10.status) === "declined")("!bg-error", (row_r10 == null ? null : row_r10.status) === "declined")("!text-neutral-content", (row_r10 == null ? null : row_r10.status) === "ended")("!bg-neutral", (row_r10 == null ? null : row_r10.status) === "ended")("opacity-60", (row_r10 == null ? null : row_r10.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", menu_r11)("disabled", (row_r10 == null ? null : row_r10.status) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (row_r10 == null ? null : row_r10.status) === "ended" ? "Ended" : (row_r10 == null ? null : row_r10.status) === "approved" ? "Approved" : (row_r10 == null ? null : row_r10.status) === "declined" ? "Declined" : "Pending", " ");
  }
}
function GuestListingComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const row_r12 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 3, row_r12.date, ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.filters)) == null ? null : tmp_10_0.period) > 1 ? "MMM d, " + ctx_r1.time_format : ctx_r1.time_format), " ");
  }
}
function GuestListingComponent_ng_template_17_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 49)(1, "div", 39)(2, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "directions_car");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Assign Parking Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", ctx_r1.attachment_menu);
  }
}
function GuestListingComponent_ng_template_17_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", item_r14.url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.name, " ");
  }
}
function GuestListingComponent_ng_template_17_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_17_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.printQRCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 39)(2, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Print QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function GuestListingComponent_ng_template_17_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_17_ng_container_35_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.checkinAllVisitors(row_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 39)(3, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " event_available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Checkin all for Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_17_ng_container_35_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.checkoutAllVisitors(row_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 39)(9, "app-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " event_busy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Checkout all for Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function GuestListingComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41)(1, "button", 42)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-menu", null, 10)(6, "button", 43)(7, "div", 39)(8, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "View Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, GuestListingComponent_ng_template_17_button_12_Template, 6, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-menu", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, GuestListingComponent_ng_template_17_a_15_Template, 2, 2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_17_Template_button_click_16_listener() {
      const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setExt(row_r15, "remote", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 39)(18, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, GuestListingComponent_ng_template_17_button_22_Template, 6, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 47)(24, "div", 39)(25, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_ng_template_17_Template_button_click_29_listener() {
      const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](row_r15.checked_in ? ctx_r1.checkout(row_r15) : ctx_r1.checkin(row_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 39)(31, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, GuestListingComponent_ng_template_17_ng_container_35_Template, 13, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const guest_menu_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", guest_menu_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !(row_r15.attachment == null ? null : row_r15.attachment.length))("matMenuTriggerFor", ctx_r1.attachment_menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.has_parking && !row_r15.extension_data.parking_booking_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", row_r15.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r15.extension_data.remote ? "business" : "laptop", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Set as ", row_r15.extension_data.remote ? "Onsite" : "Remote", " Visitor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.can_print);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "mailto:" + (row_r15 == null ? null : row_r15.asset_id), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Email ", (row_r15 == null ? null : row_r15.user_email) === (row_r15 == null ? null : row_r15.asset_id) ? "Host" : "Guest", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r15.checked_in ? "event_busy" : "event_available", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r15.checked_in ? "Checkout" : "Checkin", " Guest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r15.linked_event);
  }
}
function GuestListingComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GuestListingComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.downloadVisitorList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class GuestListingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get has_parking() {
    return this._settings.get('app.features')?.includes('parking') && this._settings.get('app.visitors.has_parking');
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings, _org) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._settings = _settings;
    this._org = _org;
    this.guests = this._state.filtered_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(_ => console.log(_)));
    this.search = this._state.search;
    this.filters = this._state.filters;
    this.inductions_enabled = false;
    this.downloadVisitorList = () => this._state.downloadVisitorsList();
    this.approveVisitor = u => this._state.approveVisitor(u);
    this.declineVisitor = u => this._state.declineVisitor(u);
    this.checkinAllVisitors = u => this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    this.checkoutAllVisitors = u => this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    this.setExt = (u, f, v) => this._state.setExt(u, f, v);
    this.checkin = /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
        yield _this._state.setCheckinState(item, true);
        _this._state.poll();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.checkout = /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
        yield _this._state.setCheckinState(item, false);
        _this._state.poll();
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
  ngOnInit() {
    var _this2 = this;
    this.subscription('building', this._org.active_building.subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bld) {
        if (!bld) return;
        const visitor_kiosk_app = _this2._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, visitor_kiosk_app).toPromise();
        _this2.inductions_enabled = metadata.details?.induction_enabled && metadata.details?.induction_details;
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()));
  }
  static #_ = this.ɵfac = function GuestListingComponent_Factory(t) {
    return new (t || GuestListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_2__.VisitorsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: GuestListingComponent,
    selectors: [["guest-listings"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 21,
    vars: 34,
    consts: [["state_template", ""], ["host_template", ""], ["id_template", ""], ["parking_template", ""], ["boolean_template", ""], ["status_template", ""], ["date_template", ""], ["action_template", ""], ["id_confirmation", ""], ["menu", "matMenu"], ["guest_menu", "matMenu"], [1, "w-full", "min-h-full", "flex", "flex-col", "flex-1", "text-sm", "h-full", "overflow-auto", "pb-20"], [1, "min-w-[64rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["class", "bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12", "matTooltip", "Download Visitor List", "matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-content text-base-100 mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", "matTooltip", "Not checked in", "matTooltipPosition", "right", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", "matTooltip", "Checked In", "matTooltipPosition", "right", 4, "ngIf"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-base-content", "text-base-100", "mx-auto", 3, "matTooltip"], ["matTooltip", "Not checked in", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto"], ["matTooltip", "Checked In", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], ["customTooltip", "", 3, "content"], ["matRipple", "", "class", "bg-success rounded-3xl px-4 py-2 text-white", 4, "ngIf"], ["matRipple", "", 1, "bg-success", "rounded-3xl", "px-4", "py-2", "text-white"], [1, "bg-base-100", "rounded", "p-2", "flex", "flex-col", "space-y-2", "my-2", "w-[20rem]"], [1, "max-w-[20rem]", "max-h-[20rem]", "object-contain", 3, "src"], ["matRipple", "", 3, "click"], ["matRipple", "", 1, "inverse", "mt-2", 3, "click"], [1, "px-4"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-2"], [1, "mx-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "flex", "items-center", "justify-end", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href"], [4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-2xl", "text-error"], ["matTooltip", "Download Visitor List", "matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "bg-secondary", "hover:shadow-lg", "shadow", "absolute", "bottom-4", "right-4", "text-white", "h-12", "w-12", 3, "click"]],
    template: function GuestListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "simple-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, GuestListingComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(5, GuestListingComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(7, GuestListingComponent_ng_template_7_Template, 4, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(9, GuestListingComponent_ng_template_9_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(11, GuestListingComponent_ng_template_11_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(13, GuestListingComponent_ng_template_13_Template, 21, 17, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(15, GuestListingComponent_ng_template_15_Template, 4, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(17, GuestListingComponent_ng_template_17_Template, 36, 13, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(19, GuestListingComponent_button_19_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "async");
      }
      if (rf & 2) {
        let tmp_12_0;
        const state_template_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
        const parking_template_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
        const boolean_template_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
        const status_template_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
        const date_template_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
        const action_template_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.guests)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction8"](25, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, state_template_r20), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, date_template_r24), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](14, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c4, status_template_r23), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c5, boolean_template_r22, !!ctx.inductions_enabled), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](20, _c6, parking_template_r21, !!ctx.has_parking), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c7, action_template_r25)))("filter", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 5, ctx.search))("sortable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 7, ctx.guests)) == null ? null : tmp_12_0.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_6__.CustomTooltipComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_7__.SimpleTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
  });
}

/***/ }),

/***/ 21034:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/invite-visitor-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InviteVisitorModalComponent: () => (/* binding */ InviteVisitorModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _libs_bookings_src_lib_invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/bookings/src/lib/invite-visitor-form.component */ 68874);




class InviteVisitorModalComponent {
  constructor(_dialog_ref) {
    this._dialog_ref = _dialog_ref;
  }
  onDone() {
    this._dialog_ref.close();
  }
  static #_ = this.ɵfac = function InviteVisitorModalComponent_Factory(t) {
    return new (t || InviteVisitorModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InviteVisitorModalComponent,
    selectors: [["invite-visitor-modal"]],
    decls: 2,
    vars: 0,
    consts: [[1, "relative", "min-w-[40rem]", "min-h-[40rem]"], [3, "done"]],
    template: function InviteVisitorModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "invite-visitor-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("done", function InviteVisitorModalComponent_Template_invite_visitor_form_done_1_listener() {
          return ctx.onDone();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_libs_bookings_src_lib_invite_visitor_form_component__WEBPACK_IMPORTED_MODULE_0__.InviteVisitorFormComponent]
  });
}

/***/ }),

/***/ 49562:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/new-visitors.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewVisitorsComponent: () => (/* binding */ NewVisitorsComponent)
/* harmony export */ });
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitors-state.service */ 13511);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _invite_visitor_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-visitor-modal.component */ 21034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _guest_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guest-listing.component */ 74353);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);


























const _c0 = ["app-new-visitors", ""];
function NewVisitorsComponent_mat_option_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, level_r1.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function NewVisitorsComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NewVisitorsComponent_mat_option_15_div_2_Template, 5, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.use_region);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
function NewVisitorsComponent_mat_progress_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 20);
  }
}
class NewVisitorsComponent {
  get use_region() {
    return !!this._settings.get('app.use_region');
  }
  constructor(_state, _org, _router, _route, _dialog, _settings) {
    this._state = _state;
    this._org = _org;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this._org.active_building, this._org.active_region]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([bld, region]) => this._settings.get('app.use_region') ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    /** Set filtered date */
    this.setDate = date => this._state.setFilters({
      date
    });
    /** Set filtered date */
    this.setFilters = filters => this._state.setFilters(filters);
    /** Set filter string */
    this.setSearch = str => this._state.setSearchString(str);
    /** Update active zones for desks */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        }
      });
      this._state.setFilters({
        zones
      });
    };
  }
  inviteVisitor() {
    this._dialog.open(_invite_visitor_modal_component__WEBPACK_IMPORTED_MODULE_2__.InviteVisitorModalComponent);
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static #_ = this.ɵfac = function NewVisitorsComponent_Factory(t) {
    return new (t || NewVisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_0__.VisitorsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: NewVisitorsComponent,
    selectors: [["", "app-new-visitors", ""]],
    attrs: _c0,
    decls: 23,
    vars: 9,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "px-8", "py-4", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "dateChange"], [1, "px-8"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["mode", "indeterminate", 1, "w-full"]],
    template: function NewVisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "main", 1)(4, "div", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "searchbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("modelChange", function NewVisitorsComponent_Template_searchbar_modelChange_8_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewVisitorsComponent_Template_button_click_9_listener() {
          return ctx.inviteVisitor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Invite Visitor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 7)(12, "mat-form-field", 8)(13, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function NewVisitorsComponent_Template_mat_select_ngModelChange_13_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, NewVisitorsComponent_mat_option_15_Template, 5, 3, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "date-options", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dateChange", function NewVisitorsComponent_Template_date_options_dateChange_18_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "guest-listings", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, NewVisitorsComponent_mat_progress_bar_21_Template, 1, 0, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 3, ctx.filters)) == null ? null : tmp_0_0.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 5, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 7, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SearchbarComponent, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_6__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.ApplicationSidebarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _guest_listing_component__WEBPACK_IMPORTED_MODULE_8__.GuestListingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_9__.BuildingPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvdmlzaXRvcnMvbmV3LXZpc2l0b3JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13511:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/visitors-state.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsStateService: () => (/* binding */ VisitorsStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 88402);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 63870);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 12587);













class VisitorsStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_dialog, _org, _settings) {
    super();
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this._search = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._org.active_building, this._filters, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([building]) => !!building), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([bld, filters]) => {
      this._loading.next(true);
      const date = filters.date ? new Date(filters.date) : new Date();
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date);
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(start, filters.period || 1);
      return (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
        type: 'visitor',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(start),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(end),
        zones: (filters.zones || []).join(',') || bld.id,
        include_checked_out: true,
        limit: 1000
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1));
    this.filtered_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._search, this.bookings]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(([search, guest_list]) => {
      const filter = search.toLowerCase();
      const out = guest_list.filter(_ => _.asset_name?.toLowerCase().includes(filter) || _.user_name?.toLowerCase().includes(filter) || _.user_email?.toLowerCase().includes(filter) || _.asset_id?.toLowerCase().includes(filter)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  setFilters(filters) {
    this._filters.next({
      ...this._filters.getValue(),
      ...filters
    });
  }
  setSearchString(search) {
    this._search.next(search);
  }
  poll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 30 * 1000) {
    this.interval('poll', () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  setExt(guest, field, value) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const extension_data = {
        ...guest.extension_data
      };
      extension_data[field] = value;
      yield (0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.updateGuest)(guest.id, {
        ...guest,
        extension_data
      }).toPromise();
      _this._poll.next(Date.now());
    })();
  }
  approveVisitor(item) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Approve Visitor',
        content: `Approve attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: {
          content: 'event_available'
        }
      }, _this2._dialog);
      if (details.reason !== 'done') return details.close();
      details.loading('Updating guest details');
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.approveBooking)(item.id).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error approving visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully approved visitor`);
      _this2._poll.next(Date.now());
      details.close();
    })();
  }
  declineVisitor(item) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Decline Visitor',
        content: `Decline attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: {
          content: 'event_available'
        }
      }, _this3._dialog);
      if (details.reason !== 'done') return details.close();
      details.loading('Updating guest details');
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.rejectBooking)(item.id).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error declining visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully declining visitor`);
      _this3._poll.next(Date.now());
      details.close();
    })();
  }
  setCheckinState(item, state = true) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const new_user = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.checkinBooking)(item.id, state).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error checking ${state ? 'in' : 'out'} ${item.asset_name || item.asset_id} for ${item.user_name}'s meeting`);
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully checked ${state ? 'in' : 'out'} ${item.asset_name || item.asset_id} from ${item.user_name}'s meeting`);
    })();
  }
  setCheckinStateForEvent(event_id, state = true) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!event_id) return;
      const bookings = yield _this4.bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      const event_bookings = bookings.filter(_ => _.parent_id === event_id || _.extension_data.parent_id === event_id || _.linked_event?.id === event_id || _.linked_event?.event_id === event_id);
      if (!event_bookings.length) return;
      yield Promise.all(event_bookings.map(_ => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.checkinBooking)(_.id, state).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error checking ${state ? 'in' : 'out'} ${_.asset_name || _.asset_id} for ${_.user_name}'s meeting`);
        throw e;
      })));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully checked ${state ? 'in' : 'out'} all visitors from ${event_bookings[0].user_name}'s meeting`);
      _this4._poll.next(Date.now());
    })();
  }
  downloadVisitorsList() {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bookings = yield _this5.filtered_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      if (!bookings.length) return;
      const {
        date
      } = _this5._filters.getValue();
      const list = bookings.map(_ => ({
        Name: _.asset_name,
        Email: _.asset_id,
        'Checked In': _.checked_in,
        Host: _.user_email || '',
        Status: _.status,
        Date: (0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(_.date, 'dd MMM ' + _this5.time_format)
      }));
      const data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.jsonToCsv)(list);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.downloadFile)(`visitor-list-${(0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(date || Date.now(), 'MMM-dd')}.csv`, data);
    })();
  }
  static #_ = this.ɵfac = function VisitorsStateService_Factory(t) {
    return new (t || VisitorsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
    token: VisitorsStateService,
    factory: VisitorsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85442:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/visitors-topbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsTopbarComponent: () => (/* binding */ VisitorsTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitors-state.service */ 13511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/searchbar.component */ 12236);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);

















function VisitorsTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
class VisitorsTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
    /** Set filtered date */
    this.setDate = date => this._state.setFilters({
      date
    });
    /** Set filtered date */
    this.setFilters = filters => this._state.setFilters(filters);
    /** Set filter string */
    this.setSearch = str => this._state.setSearchString(str);
    /** Update active zones for desks */
    this.updateZones = zones => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.join(',')
        }
      });
      this._state.setFilters({
        zones
      });
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => _)).toPromise();
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
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
      _this.setSearch('');
    })();
  }
  static #_ = this.ɵfac = function VisitorsTopbarComponent_Factory(t) {
    return new (t || VisitorsTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_3__.VisitorsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: VisitorsTopbarComponent,
    selectors: [["visitors-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 17,
    vars: 10,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Viewing Period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "dateChange"]],
    template: function VisitorsTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, VisitorsTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 1)(6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) {
          return ctx.setFilters({
            period: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Show Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Show Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Show Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "searchbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("modelChange", function VisitorsTopbarComponent_Template_searchbar_modelChange_15_listener($event) {
          return ctx.setSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "date-options", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function VisitorsTopbarComponent_Template_date_options_dateChange_16_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 8, ctx.filters)) == null ? null : tmp_2_0.period) || 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 30);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SearchbarComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvdmlzaXRvcnMvdmlzaXRvcnMtdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 84979:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/visitors.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsComponent: () => (/* binding */ VisitorsComponent)
/* harmony export */ });
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitors-state.service */ 13511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors-topbar.component */ 85442);
/* harmony import */ var _guest_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest-listing.component */ 74353);








const _c0 = ["app-visitors", ""];
function VisitorsComponent_mat_progress_bar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 4);
  }
}
class VisitorsComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static #_ = this.ɵfac = function VisitorsComponent_Factory(t) {
    return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_0__.VisitorsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: VisitorsComponent,
    selectors: [["", "app-visitors", ""]],
    attrs: _c0,
    decls: 6,
    vars: 3,
    consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]],
    template: function VisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "visitors-topbar", 1)(3, "guest-listings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VisitorsComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_2__.VisitorsTopbarComponent, _guest_listing_component__WEBPACK_IMPORTED_MODULE_3__.GuestListingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvdmlzaXRvcnMvdmlzaXRvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 43554:
/*!************************************************************!*\
  !*** ./apps/concierge/src/app/visitors/visitors.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsModule: () => (/* binding */ VisitorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _visitors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors.component */ 84979);
/* harmony import */ var _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors-topbar.component */ 85442);
/* harmony import */ var _guest_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest-listing.component */ 74353);
/* harmony import */ var _new_visitors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-visitors.component */ 49562);
/* harmony import */ var _invite_visitor_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-visitor-modal.component */ 21034);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);












const ROUTES = [{
  path: '',
  component: _visitors_component__WEBPACK_IMPORTED_MODULE_1__.VisitorsComponent
}, {
  path: 'new',
  component: _new_visitors_component__WEBPACK_IMPORTED_MODULE_4__.NewVisitorsComponent
}];
class VisitorsModule {
  static #_ = this.ɵfac = function VisitorsModule_Factory(t) {
    return new (t || VisitorsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: VisitorsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_6__.SharedBookingsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](VisitorsModule, {
    declarations: [_new_visitors_component__WEBPACK_IMPORTED_MODULE_4__.NewVisitorsComponent, _visitors_component__WEBPACK_IMPORTED_MODULE_1__.VisitorsComponent, _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_2__.VisitorsTopbarComponent, _guest_listing_component__WEBPACK_IMPORTED_MODULE_3__.GuestListingComponent, _invite_visitor_modal_component__WEBPACK_IMPORTED_MODULE_5__.InviteVisitorModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_6__.SharedBookingsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

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

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map