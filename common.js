"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["common"],{

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 22508);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 30417);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 75774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 12587);














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
  get new_desk_count() {
    return this._new_desks.getValue()?.length || 0;
  }
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._new_desks = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this._desk_bookings = [];
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.new_desks = this._new_desks.asObservable();
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.desks = this._filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(filters => {
      const zones = filters.zones || [];
      return zones && !zones.includes('All') ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(zones[0], 'desks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.details instanceof Array ? m.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]))) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.listChildMetadata)(this._org.building?.id, {
        name: 'desks'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.map(i => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(list => {
      if (!(list instanceof Array)) list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      return list.map(i => new _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.Desk({
        ...i,
        qr_code: ''
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this._next_page = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this._call_next_page = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this._all_zones_keys = ['All', -1, '-1'];
    this.setup_paging = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._filters, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(([filters, loaded]) => {
      if (!loaded) return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some(z => this._all_zones_keys.includes(z)) ? this._settings.get('app.use_region') ? this._org.buildingsForRegion().map(_ => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.queryPagedBookings)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_18__["default"])(date)),
        type: 'desk',
        zones: zones.join(','),
        include_checked_out: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        data: [],
        total: 0,
        next: null
      }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._next_page, this._call_next_page]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)((a, b) => a[1] === b[1]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          data: [],
          total: 0,
          next: null,
          reset: action.includes('RESET')
        });
      }
      // If reset is true, start over
      if (action.includes('RESET')) {
        return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => ({
          ...data,
          reset: true
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          data: [],
          total: 0,
          next: null
        })));
      }
      return next_page().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => ({
        ...data,
        reset: false
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        data: [],
        total: 0,
        next: null
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.scan)((acc, {
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
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(_ => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.has_more_pages = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(_ => _.list.length < _.total));
    this.bookings = this.paged_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(i => i.list));
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
    this._new_desks.next(this._new_desks.getValue().concat(list));
  }
  removeNewDesk(desk) {
    this._filters.next(this._filters.getValue());
    this._new_desks.next(this._new_desks.getValue().filter(d => d.id !== desk.id));
  }
  clearNewDesks() {
    this._filters.next(this._filters.getValue());
    this._new_desks.next([]);
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
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Approved desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(desk.date, 'MMM do')}.`);
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
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Rejected desk booking for ${desk.user_name} on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(desk.date, 'MMM do')}.`);
      desk.approved = false;
      desk.rejected = true;
    })();
  }
  giveAccess(desk) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const success = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.saveBooking)(new _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.Booking({
        ...desk,
        access: true
      })).toPromise().catch(_ => 'failed');
      if (success === 'failed') return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error giving building access booking host');
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Successfully gave building access to ${desk.user_name} for desk booking.`);
      _this._desk_bookings = [..._this._desk_bookings, success];
    })();
  }
  rejectAllDesks() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const list = _this2._desk_bookings || [];
      if (list.length <= 0) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyInfo)('No desks to reject for the selected date');
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.openConfirmModal)({
        title: 'Cancel all desk bookings',
        content: 'Are you sure you want to cancel all bookings for the selected date?',
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Rejecting all desks for selected date...');
      yield Promise.all(list.map(desk => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.rejectBooking)(desk.id).toPromise()));
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully rejected all desk bookings for selected date.');
      resp.close();
    })();
  }
  static #_ = this.ɵfac = function DesksStateService_Factory(t) {
    return new (t || DesksStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
    token: DesksStateService,
    factory: DesksStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map