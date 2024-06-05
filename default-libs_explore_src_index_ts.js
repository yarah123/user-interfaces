"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-libs_explore_src_index_ts"],{

/***/ 27009:
/*!***********************************!*\
  !*** ./libs/explore/src/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_COLOURS: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_COLOURS),
/* harmony export */   ExploreDesksService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreDesksService),
/* harmony export */   ExploreLockersService: () => (/* reexport safe */ _lib_explore_lockers_service__WEBPACK_IMPORTED_MODULE_2__.ExploreLockersService),
/* harmony export */   ExploreMapControlComponent: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreMapControlComponent),
/* harmony export */   ExploreMapViewComponent: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreMapViewComponent),
/* harmony export */   ExploreParkingService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreParkingService),
/* harmony export */   ExploreSearchComponent: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSearchComponent),
/* harmony export */   ExploreSearchService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSearchService),
/* harmony export */   ExploreSpaceInfoComponent: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSpaceInfoComponent),
/* harmony export */   ExploreSpacesService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSpacesService),
/* harmony export */   ExploreStateService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreStateService),
/* harmony export */   ExploreZonesService: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreZonesService),
/* harmony export */   ExploreZoomControlComponent: () => (/* reexport safe */ _lib_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreZoomControlComponent),
/* harmony export */   SharedExploreModule: () => (/* reexport safe */ _lib_explore_module__WEBPACK_IMPORTED_MODULE_0__.SharedExploreModule)
/* harmony export */ });
/* harmony import */ var _lib_explore_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/explore.module */ 42434);
/* harmony import */ var _lib_explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/explore */ 11874);
/* harmony import */ var _lib_explore_lockers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/explore-lockers.service */ 49591);




/***/ }),

/***/ 61104:
/*!*******************************************************!*\
  !*** ./libs/explore/src/lib/explore-desks.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreDesksService: () => (/* binding */ ExploreDesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ 88402);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var libs_bookings_src_lib_booking_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/bookings/src/lib/booking-form.service */ 18379);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var libs_organisation_src_lib_desk_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/organisation/src/lib/desk.class */ 47451);
/* harmony import */ var libs_explore_src_lib_set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/explore/src/lib/set-datetime-modal.component */ 27146);
/* harmony import */ var _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-desk-info.component */ 82882);
/* harmony import */ var _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-device-info.component */ 51207);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! libs/bookings/src/lib/bookings.fn */ 18026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 12587);






















class ExploreDesksService extends _placeos_common__WEBPACK_IMPORTED_MODULE_3__.AsyncHandler {
  constructor(_state, _org, _settings, _bookings, _dialog) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._bookings = _bookings;
    this._dialog = _dialog;
    this._in_use = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject({});
    this._presence = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this._signs_of_life = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._checked_in = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this.booking_rules = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(bld => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(bld => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(bld.id, `desk_booking_rules`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
      details: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_ => _?.details instanceof Array ? _.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this.desk_list = this._state.level.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(lvl => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(lvl.id, 'desks').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
      details: []
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(i => (i?.details instanceof Array ? i.details : []).map(j => new libs_organisation_src_lib_desk_class__WEBPACK_IMPORTED_MODULE_5__.Desk({
      ...j,
      zone: lvl
    }))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(e => []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this._bind = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this._state.level, this._state.options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(([_, {
      is_public
    }]) => !!_ && !is_public), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(([lvl]) => {
      this._statuses = {};
      const system_id = this._org.binding('area_management');
      if (!system_id) return;
      let binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(system_id, 'AreaManagement')?.binding(lvl.id);
      if (!binding) return;
      this.subscription(`lvl-in_use`, binding.listen().subscribe(d => this.processBindingChange(d || {}, system_id)));
      this.subscription('lvl-in_use_bind', binding.bind());
    }));
    this._booking_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this._options, this._state.level]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(([_, lvl]) => (_.use_api || _.date > (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(Date.now()).valueOf()) && !!lvl), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([_, level]) => {
      return (0,libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_11__.queryBookings)({
        type: 'desk',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_23__["default"])(_.date || Date.now())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_22__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(_.date || Date.now())),
        zones: level.id
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.tap)(bookings => {
      this._in_use.next(bookings.map(_ => _.asset_id));
      this._checked_in.next(bookings.filter(_ => _.checked_in).map(_ => _.asset_id));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this._state_change = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.desk_list, this._in_use, this._presence, this._checked_in, this._signs_of_life, this.booking_rules, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([desks, in_use, presence, checked_in, signs, restrictions]) {
        _this._statuses = {};
        const level = yield _this._state.level.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)).toPromise();
        for (const {
          id,
          bookable
        } of desks) {
          const is_used = in_use.some(i => id === i);
          const has_presence = presence.some(i => id === i);
          const has_signs = signs.some(i => id === i);
          const is_checked_in = checked_in.some(i => id === i) || is_used && _this._settings.get(`app.desk.auto_checkin`);
          const is_restricted = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.rulesForResource)({
            date: Date.now(),
            duration: 60,
            host: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)(),
            resource: {
              id,
              zones: [level.parent_id, level.id]
            }
          }, restrictions)?.hidden;
          _this._statuses[id] = bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? 'signs-of-life' : 'free' : !has_presence && !is_checked_in ? 'pending' : 'busy' : 'not-bookable';
        }
        _this.processDesks(desks);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this.init();
  }
  init() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.first)(_ => _)).toPromise();
      _this2.setOptions({
        enable_booking: _this2._settings.get('app.desks.enable_maps') !== false
      });
      _this2.subscription('bookings', _this2._booking_list.subscribe());
      _this2.subscription('bind', _this2._bind.subscribe());
      _this2.subscription('booking_rules', _this2.booking_rules.subscribe());
      _this2.subscription('changes', _this2._state_change.subscribe());
      _this2.subscription('desks', _this2.desk_list.subscribe(desks => _this2.processDesks(desks)));
    })();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  processBindingChange({
    value
  }, system_id) {
    const devices = (value || []).filter(v => !['desk', 'booking'].includes(v.location));
    const desks = (value || []).filter(v => v.location === 'desk' || v.location === 'booking' && v.type === 'desk');
    const date = this._options.getValue().date || Date.now();
    if (date <= (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(Date.now()).valueOf() && !this._options.getValue().use_api) {
      this._in_use.next(desks.filter(v => v.location === 'booking').map(v => v.map_id || v.asset_id));
      this._checked_in.next(desks.filter(v => v.location === 'booking' && v.checked_in).map(v => v.map_id || v.asset_id));
      this._presence.next(desks.filter(v => v.at_location).map(v => v.map_id || v.asset_id));
      this._signs_of_life.next(desks.filter(v => v.signs_of_life).map(v => v.map_id || v.asset_id));
    }
    const departments = this._settings.get('app.department_map') || {};
    for (const desk of desks) {
      this._users[desk.map_id || desk.asset_id] = desk.staff_name;
      this._departments[desk.map_id || desk.asset_id] = departments[desk.department] || '';
    }
    this.processDevices(devices, system_id);
    this.timeout('update', () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get('app.explore.colors') || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id]) continue;
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${this._statuses[desk_id]}`] || colours[`${this._statuses[desk_id]}`] || _explore_spaces_service__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_COLOURS[`${this._statuses[desk_id]}`]
      };
    }
    this._state.setStyles('desks', style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes('right') ? 1 - x : x,
          y: device.coordinates_from?.includes('bottom') ? 1 - y : y
        },
        content: _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__.ExploreDeviceInfoComponent,
        z_index: 20,
        data: {
          ...device,
          system: system_id
        }
      });
    }
    this._state.setFeatures('devices', list);
  }
  processDesks(desks) {
    var _this3 = this;
    const list = [];
    const actions = [];
    const options = this._options.getValue();
    for (const desk of desks) {
      list.push({
        track_id: `desk:hover:${desk.map_id || desk.id}`,
        location: desk.id,
        content: _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_7__.ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._users[desk.map_id] || desk.staff_name,
          status: this._statuses[desk.map_id],
          department: this._departments[desk.map_id] || ''
        },
        z_index: 20
      });
      if (!desk.bookable) continue;
      let can_book = true;
      const book_fn = /*#__PURE__*/function () {
        var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!can_book) return;
          if (_this3._statuses[desk.id] !== 'free') {
            return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`${desk.name || 'Desk'} is unavailable at this time.`);
          }
          if (desk.groups?.length && !desk.groups.find(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)().groups.includes(_))) {
            return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`You are not allowed to book ${desk.name}.`);
          }
          _this3._bookings.newForm();
          _this3._bookings.setOptions({
            type: 'desk'
          });
          if (options.date) {
            _this3._bookings.form.patchValue({
              date: options.date
            });
            _this3._bookings.form.patchValue({
              all_day: !!options.all_day
            });
          }
          let {
            date,
            duration,
            user
          } = yield _this3._setBookingTime(_this3._bookings.form.value.date, _this3._bookings.form.value.duration, _this3._options.getValue()?.custom ?? false, desk);
          user = user || options.host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)();
          const user_email = user?.email;
          _this3._bookings.form.patchValue({
            resources: [desk],
            asset_id: desk.id,
            asset_name: desk.name,
            date,
            duration: options.all_day ? 12 * 60 : duration,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            user,
            user_email,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
          });
          yield _this3._bookings.confirmPost().catch(e => {
            console.log(e);
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(`Failed to book desk ${desk.name || desk.id}. ${e.message || e.error || e}`);
            throw e;
          });
          _this3._users[desk.map_id] = (options.host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)())?.name;
          (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)(`Successfully booked desk ${desk.name || desk.id}`);
        });
        return function book_fn() {
          return _ref2.apply(this, arguments);
        };
      }();
      ['mousedown', 'touchstart'].forEach(event => actions.push({
        id: desk.id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout('booking', () => can_book = false);
        }
      }));
      ['mouseup', 'touchend'].forEach(event => actions.push({
        id: desk.id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions('desks', this._options.getValue().enable_booking ? actions : []);
    this._state.setFeatures('desks', list);
    this.timeout('update', () => this.updateStatus(), 100);
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = null;
      if (!!_this4._settings.get('app.desks.allow_time_changes')) {
        const until = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_27__["default"])(Date.now(), _this4._settings.get('app.desks.available_period') || 90));
        const ref = _this4._dialog.open(libs_explore_src_lib_set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_6__.SetDatetimeModalComponent, {
          data: {
            date,
            duration,
            until,
            host,
            resource
          }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details) throw 'User cancelled';
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return {
        date,
        duration,
        user
      };
    })();
  }
  static #_ = this.ɵfac = function ExploreDesksService_Factory(t) {
    return new (t || ExploreDesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_10__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](libs_bookings_src_lib_booking_form_service__WEBPACK_IMPORTED_MODULE_2__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjectable"]({
    token: ExploreDesksService,
    factory: ExploreDesksService.ɵfac
  });
}

/***/ }),

/***/ 51207:
/*!***************************************************************!*\
  !*** ./libs/explore/src/lib/explore-device-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreDeviceInfoComponent: () => (/* binding */ ExploreDeviceInfoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 80293);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 75971);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/custom-tooltip.component */ 22238);










const _c0 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_ng_template_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 23)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 24)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 26)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 27)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r2.user == null ? null : ctx_r2.user.name) || (ctx_r2.user == null ? null : ctx_r2.user.username) || ctx_r2.username, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 28)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseleave", function ExploreDeviceInfoComponent_ng_template_5_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ExploreDeviceInfoComponent_ng_template_5_p_3_Template, 4, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p")(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p")(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](10, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ExploreDeviceInfoComponent_ng_template_5_p_12_Template, 4, 1, "p", 18)(13, ExploreDeviceInfoComponent_ng_template_5_p_13_Template, 4, 1, "p", 19)(14, ExploreDeviceInfoComponent_ng_template_5_p_14_Template, 4, 1, "p", 20)(15, ExploreDeviceInfoComponent_ng_template_5_p_15_Template, 4, 1, "p", 21)(16, ExploreDeviceInfoComponent_ng_template_5_p_16_Template, 4, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.mac && !ctx_r2.hide_fields.includes("mac"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.variance, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.last_seen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.manufacturer && !ctx_r2.hide_fields.includes("manufacturer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.os && !ctx_r2.hide_fields.includes("os"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.ssid && !ctx_r2.hide_fields.includes("ssid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.username && !ctx_r2.hide_fields.includes("username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.user && !ctx_r2.hide_fields.includes("user"));
  }
}
const EMPTY = [];
class ExploreDeviceInfoComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get hide_fields() {
    return this._settings.get('app.explore.hide_device_fields') || EMPTY;
  }
  /** Time of the last update */
  get last_seen() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((this._details.last_seen || 0) * 1000, {
      addSuffix: true
    });
  }
  /** Diameter of the radius circle */
  get diameter() {
    return this._details.variance * 100 * this.zoom;
  }
  get distance() {
    return Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((this._details.last_seen || 0) * 1000, new Date()));
  }
  get distance_color() {
    return this.distance < 10 ? '#43a047' : this.distance < 20 ? '#ffb300' : '#e53935';
  }
  constructor(_details, _settings, _element) {
    super();
    this._details = _details;
    this._settings = _settings;
    this._element = _element;
    /** Name of the user associated with the mac address */
    this.username = '';
    /** User details associated with device */
    this.user = this._details.user;
    /** Mac Address of the device */
    this.mac = this._details.mac;
    /** Mac Address of the device */
    this.manufacturer = this._details.manufacturer;
    /** Mac Address of the device */
    this.os = this._details.os;
    /** Mac Address of the device */
    this.ssid = this._details.ssid;
    /** Accuracy of the location data */
    this.variance = this._details.variance?.toFixed(2);
    /** Background color for the dot */
    this.bg_color = this._details.bg_color || this.distance_color;
    this.zoom = 1;
  }
  ngOnInit(tries = 0) {
    if (tries > 10) return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent) return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
      this.x_pos = position.x >= 0.5 ? 'end' : 'start';
      this.subscription('zoom', this._details.zoom$.subscribe(_ => this.zoom = _));
    }, 200);
  }
  loadUser() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.username) return;
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(_this._details.system, 'LocationServices');
      if (!mod) return;
      _this.username = 'Loading...';
      const details = yield mod.execute('check_ownership_of', [_this.mac]).catch(_ => null);
      _this.username = details && details.assigned_to ? details.assigned_to : '';
    })();
  }
  static #_ = this.ɵfac = function ExploreDeviceInfoComponent_Factory(t) {
    return new (t || ExploreDeviceInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_3__.MAP_FEATURE_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ExploreDeviceInfoComponent,
    selectors: [["", "explore-device-info", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 7,
    vars: 9,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1921442792032576180$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_0 = goog.getMsg("Accuracy:");
        i18n_0 = MSG_EXTERNAL_1921442792032576180$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟4e79bc7b2a23c2e4e80d256c8167411cf124bd20␟1921442792032576180:Accuracy:`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5291488112436395082$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_1 = goog.getMsg("Last Seen:");
        i18n_1 = MSG_EXTERNAL_5291488112436395082$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟1c564bebf178f9c70f2c66a80393137bfa0d2ea8␟5291488112436395082:Last Seen:`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5080596488336446120$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_2 = goog.getMsg("MAC:");
        i18n_2 = MSG_EXTERNAL_5080596488336446120$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟14802d5580219b4522c9c50e1a9f401aee191e1e␟5080596488336446120:MAC:`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6296767522110275448$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_3 = goog.getMsg("Manufacturer:");
        i18n_3 = MSG_EXTERNAL_6296767522110275448$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟a082daef9c0b66268ce56dfa8d96d47a04d2c4b1␟6296767522110275448:Manufacturer:`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2346706060395913038$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_4 = goog.getMsg("OS:");
        i18n_4 = MSG_EXTERNAL_2346706060395913038$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟5544405b325c518c94412239610d44250d5a223a␟2346706060395913038:OS:`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4345272263810420547$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_5 = goog.getMsg("SSID:");
        i18n_5 = MSG_EXTERNAL_4345272263810420547$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟afd0fc7b37f54299537ba2abc9babf749adf383e␟4345272263810420547:SSID:`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_140822705245800362$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_6 = goog.getMsg("Username:");
        i18n_6 = MSG_EXTERNAL_140822705245800362$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟67fc3fe0566f8700b84a908c35497759db78addc␟140822705245800362:Username:`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2736556170366900089$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_7 = goog.getMsg("Type:");
        i18n_7 = MSG_EXTERNAL_2736556170366900089$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_7;
      } else {
        i18n_7 = $localize`:␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`;
      }
      return [["dot", ""], ["device_tooltip", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, ["name", "radius", 1, "radius", "absolute", "center", "bg-info", "bg-opacity-25", "border-8", "border-dashed", "border-blue-600", "rounded-full"], ["shadow", "", 1, "absolute", "center", "bg-neutral", "h-8", "w-8", "rounded-full"], ["name", "dot", 1, "h-3", "w-3", "absolute", "center", "rounded-full", "shadow", "border-2", "border-white"], ["customTooltip", "", 1, "absolute", "inset-0", "pointer-events-auto", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "device-info", 1, "w-64", "rounded", "bg-base-100", "p-4", "top-0", "left-0", "shadow", "pointer-events-none", "mx-2", 3, "mouseleave"], [1, "arrow"], [1, "details"], ["class", "break-words", 4, "ngIf"], ["type", "", 4, "ngIf"], ["os", "", 4, "ngIf"], ["ssid", "", 4, "ngIf"], ["username", "", 4, "ngIf"], ["user", "", 4, "ngIf"], [1, "break-words"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]];
    },
    template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 10)(1, "div", 11)(2, "div", 12, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.loadUser());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ExploreDeviceInfoComponent_ng_template_5_Template, 17, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const device_tooltip_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"]("height: " + ctx.diameter + "%; width: " + ctx.diameter + "%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("content", device_tooltip_r4)("backdrop", false)("xPosition", ctx.x_pos)("yPosition", ctx.y_pos)("hover", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_4__.CustomTooltipComponent],
    styles: ["[_nghost-%COMP%] {\n                pointer-events: auto;\n            }\n\n            [_nghost-%COMP%]    > [name='dot'][_ngcontent-%COMP%] {\n                background-color: #616161;\n            }\n\n            [_nghost-%COMP%]:hover    > [name='radius'][_ngcontent-%COMP%] {\n                opacity: 1;\n            }\n\n            [name='radius'][_ngcontent-%COMP%] {\n                opacity: 0;\n                transition: opacity 200ms;\n                pointer-events: none;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtZGV2aWNlLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxvQkFBb0I7WUFDeEI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxVQUFVO2dCQUNWLHlCQUF5QjtnQkFDekIsb0JBQW9CO1lBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0ID4gW25hbWU9J2RvdCddIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdDpob3ZlciA+IFtuYW1lPSdyYWRpdXMnXSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J3JhZGl1cyddIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 49591:
/*!*********************************************************!*\
  !*** ./libs/explore/src/lib/explore-lockers.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreLockersService: () => (/* binding */ ExploreLockersService)
/* harmony export */ });
/* harmony import */ var libs_bookings_src_lib_lockers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/bookings/src/lib/lockers.service */ 98796);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-locker-bank-info.component */ 84810);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);














class ExploreLockersService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_lockers, _explore, _org, _settings) {
    super();
    this._lockers = _lockers;
    this._explore = _explore;
    this._org = _org;
    this._settings = _settings;
    this._status = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    this.lockers$ = this._lockers.filtered_lockers$;
    this.status = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._explore.level, this._explore.options, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([lvl, {
      is_public
    }]) => {
      if (!lvl || is_public) return [];
      const sys_id = this._org.binding('area_management');
      if (!sys_id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({});
      let binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.getModule)(sys_id, 'AreaManagement').binding(lvl.id);
      this.subscription(`lvl-in_use`, binding.listen().subscribe(data => this._status.next(data?.value?.filter(_ => _.location === 'locker') || [])));
      this.subscription('lvl-in_use_bind', binding.bind());
    }));
    this.locker_status = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._explore.level, this._lockers.lockers_banks$, this.lockers$, this._status]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([lvl, locker_banks, lockers, status]) => {
      if (!lvl) return [];
      const features = [];
      const map_status = {};
      const colours = this._settings.get('app.explore.colors') || {};
      const banks = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(locker_banks.filter(_ => _.level_id === lvl.id).map(_ => _.id));
      for (const bank of banks) {
        const bank_lockers = lockers.filter(_ => _.bank_id === bank);
        let in_use_count = 0;
        for (const locker of bank_lockers) {
          const in_use = status.find(_ => _.locker_id === locker.id && _.allocated);
          in_use_count += in_use ? 1 : 0;
        }
        const bank_info = locker_banks.find(_ => _.id === bank);
        features.push({
          location: bank_info.map_id,
          content: _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_5__.ExploreLockerBankInfoComponent,
          full_size: true,
          no_scale: true,
          z_index: 20,
          data: {
            bank: bank_info,
            lockers,
            in_use_count,
            locker_count: bank_lockers.length,
            system: this._org.binding('area_management')
          }
        });
        const in_use_percent = in_use_count / bank_lockers.length;
        const value = in_use_percent > 0.8 ? 'busy' : in_use_percent > 0.3 ? 'pending' : 'free';
        map_status[`#${bank_info.map_id}`] = {
          fill: colours[`lockers-${value}`] || colours[`${value}`] || _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_COLOURS[`${value}`]
        };
      }
      this._explore.setStyles('lockers', map_status);
      this._explore.setFeatures('lockers', features);
    }));
    this.subscription('level', this._explore.level.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(_ => !!_)).subscribe(level => this._lockers.setLevel(level.id)));
    this.subscription('status', this.status.subscribe());
    this.subscription('locker_status', this.locker_status.subscribe());
  }
  static #_ = this.ɵfac = function ExploreLockersService_Factory(t) {
    return new (t || ExploreLockersService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](libs_bookings_src_lib_lockers_service__WEBPACK_IMPORTED_MODULE_0__.LockersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_1__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: ExploreLockersService,
    factory: ExploreLockersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60468:
/*!***************************************************************!*\
  !*** ./libs/explore/src/lib/explore-map-control.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreMapControlComponent: () => (/* binding */ ExploreMapControlComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);















function ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", bld_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r1.building));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r1.buildings));
  }
}
function ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lvl_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_3_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.setLevel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("has-bld", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx_r1.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, ctx_r1.levels));
  }
}
class ExploreMapControlComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_org, _state, _router, _route) {
    super();
    this._org = _org;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    /** List of available buildings */
    this.buildings = this._org.active_buildings;
    /** Currently active building */
    this.building = this._org.active_building;
    /** List of availabel levels */
    this.levels = this._org.active_levels;
    /** Currently active level */
    this.level = this._state.level;
    /** Set the currently active level */
    this.setLevel = lvl => {
      this._state.setFeatures('_located', []);
      this.timeout('set_level', () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone: lvl.id
        }
      }), 201);
    };
    /** Set the currenly active building */
    this.setBuilding = bld => this._org.building = bld;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => params.has('zone') ? _this._state.setLevel(params.get('zone')) : ''));
    })();
  }
  static #_ = this.ɵfac = function ExploreMapControlComponent_Factory(t) {
    return new (t || ExploreMapControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_3__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExploreMapControlComponent,
    selectors: [["explore-map-controls"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 6,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1533056789917995243$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_0 = goog.getMsg("Select Building...");
        i18n_0 = MSG_EXTERNAL_1533056789917995243$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟dea1f8bc2b32584fadf07ef815709b946d3726ff␟1533056789917995243:Select Building...`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7854898325453225869$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_1 = goog.getMsg("Select Level...");
        i18n_1 = MSG_EXTERNAL_7854898325453225869$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟025373b97845a8c2b54d2eb17d9c479f64207b11␟7854898325453225869:Select Level...`;
      }
      return [[1, "flex", "space-x-2", "w-full"], ["overlay", "", "buildings", "", "class", "flex-1 min-w-[10.5rem] no-subscript", "has-bld", "true", "appearance", "outline", 4, "ngIf"], ["overlay", "", "levels", "", "class", "flex-1 min-w-[10.25rem] no-subscript", "appearance", "outline", 4, "ngIf"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "flex-1", "min-w-[10.5rem]", "no-subscript"], ["placeholder", i18n_0, 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["overlay", "", "levels", "", "appearance", "outline", 1, "flex-1", "min-w-[10.25rem]", "no-subscript"], ["placeholder", i18n_1, 3, "ngModelChange", "ngModel"]];
    },
    template: function ExploreMapControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExploreMapControlComponent_mat_form_field_1_Template, 5, 6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_3_Template, 6, 9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.levels)) == null ? null : tmp_1_0.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["mat-form-field[has-bld='true'][_ngcontent-%COMP%] {\n                max-width: calc(50vw - 2.5rem);\n            }\n\n            [full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n                max-width: calc(50% - 2.5rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtbWFwLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSw4QkFBOEI7WUFDbEM7O1lBRUE7Z0JBQ0ksNkJBQTZCO1lBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZFtoYXMtYmxkPSd0cnVlJ10ge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MHZ3IC0gMi41cmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3RbZnVsbF0gbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyLjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 83134:
/*!************************************************************!*\
  !*** ./libs/explore/src/lib/explore-map-view.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreMapViewComponent: () => (/* binding */ ExploreMapViewComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/users */ 63870);
/* harmony import */ var libs_spaces_src_lib_spaces_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/spaces/src/lib/spaces.service */ 7401);
/* harmony import */ var libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/components/src/lib/map-pin.component */ 71865);
/* harmony import */ var libs_components_src_lib_map_radius_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/components/src/lib/map-radius.component */ 95384);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! libs/spaces/src/lib/space.pipe */ 22011);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var _explore_zones_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explore-zones.service */ 61369);
/* harmony import */ var _explore_desks_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./explore-desks.service */ 61104);
/* harmony import */ var _explore_parking_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./explore-parking.service */ 34498);
/* harmony import */ var _explore_lockers_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./explore-lockers.service */ 49591);
/* harmony import */ var libs_common_src_lib_mapspeople_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! libs/common/src/lib/mapspeople.service */ 99420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/src/lib/interactive-map.component */ 24918);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./explore-map-control.component */ 60468);




































const _c0 = () => ({
  controls: true
});
function ExploreMapViewComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "mat-slide-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ExploreMapViewComponent_div_6_div_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleZones($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, ctx_r1.options)) == null ? null : tmp_2_0.disable == null ? null : tmp_2_0.disable.includes("zones")));
  }
}
function ExploreMapViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "explore-map-controls");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ExploreMapViewComponent_div_6_div_2_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.hide_zones);
  }
}
function ExploreMapViewComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("background-color", pair_r3[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](pair_r3[0]);
  }
}
function ExploreMapViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ExploreMapViewComponent_div_8_div_3_Template, 4, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.legend);
  }
}
const EMPTY = [];
class ExploreMapViewComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  toggleZones(enabled) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = yield _this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).toPromise();
      const disable = !enabled ? (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)([...(options.disable || []), 'zones', 'devices']) : options.disable?.filter(_ => _ !== 'zones' && _ !== 'devices') || [];
      _this.setOptions({
        disable
      });
    })();
  }
  get show_legend() {
    return !!this._settings.get('app.explore.show_legend');
  }
  get hide_zones() {
    return !!this._settings.get('app.explore.hide_zones');
  }
  get legend() {
    return this._settings.get('app.explore.legend') || EMPTY;
  }
  constructor(_state, _s, _desks, _zones, _parking, _lockers, _route, _router, _spaces, _org, _settings, _space_pipe, _maps) {
    super();
    this._state = _state;
    this._s = _s;
    this._desks = _desks;
    this._zones = _zones;
    this._parking = _parking;
    this._lockers = _lockers;
    this._route = _route;
    this._router = _router;
    this._spaces = _spaces;
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = _space_pipe;
    this._maps = _maps;
    /** Observable for the active map */
    this.url = this._state.map_url;
    /** Observable for the active map */
    this.styles = this._state.map_styles;
    /** Observable for the active map */
    this.positions = this._state.map_positions;
    /** Observable for the active map */
    this.features = this._state.map_features;
    /** Observable for the active map */
    this.actions = this._state.map_actions;
    /** Observable for the labels map */
    this.labels = this._state.map_labels;
    /** Observable for the active map */
    this.options = this._state.options;
    /** Observable for user messages */
    this.message = this._state.message;
    this.setOptions = o => this._state.setOptions(o);
    this.locate = '';
    this.use_mapsindoors$ = this._maps.available$;
  }
  ngOnInit() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._state.reset();
      yield _this2._spaces.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.first)(_ => _)).toPromise();
      _this2.toggleZones(false);
      _this2.subscription('route.query', _this2._route.queryParamMap.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          if (params.has('level') || params.has('zone')) {
            _this2._state.setLevel(params.get('level') || params.get('zone'));
          }
          _this2._state.setFeatures('_located', []);
          if (params.has('space')) {
            _this2.locateSpace(params.get('space'));
          } else if (params.has('user')) {
            let user = _this2._settings.value('last_search');
            if (!user || params.get('user') !== user.email) {
              user = null;
              user = yield (0,_placeos_users__WEBPACK_IMPORTED_MODULE_3__.showStaff)(params.get('user')).toPromise();
            }
            if (!user) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to user details for ${params.get('user')}`);
            _this2.locateUser(user instanceof Array ? user[0] : user).catch(_ => {
              (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to locate ${params.get('user')}`);
              _this2._router.navigate([], {
                relativeTo: _this2._route,
                queryParams: {}
              });
            });
          } else if (params.has('locate')) {
            _this2._locateFeature(params.get('locate'), params.get('name'));
          } else {
            _this2.timeout('update_location', () => {
              _this2._state.setFeatures('_located', []);
            });
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  _locateFeature(id, name = '') {
    const has_coordinates = id.includes(',');
    const parts = id.split(',');
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? {
        x: parseFloat(parts[0]),
        y: parseFloat(parts[1])
      } : id,
      content: libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_5__.MapPinComponent,
      z_index: 99,
      data: {
        message: name
      }
    };
    this.locate = id;
    this.timeout('update_location', () => this._state.setFeatures('_located', [feature]));
  }
  locateSpace(id) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const space = yield _this3._space_pipe.transform(id);
      if (!space) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Unable to load space details.');
      _this3._state.setLevel(_this3._org.levelWithID(space.zones)?.id);
      const feature = {
        track_id: `locate-${space.id}`,
        location: space.map_id,
        content: libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_5__.MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      };
      _this3.timeout('update_location', () => _this3._state.setFeatures('_located', [feature]));
    })();
  }
  locateUser(user) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let locate_details = _this4._org.binding('location_services');
      if (!locate_details) throw 'Location services is not setup for this application.';
      if (typeof locate_details === 'string') {
        locate_details = {
          system_id: locate_details,
          module: 'LocationServices',
          priority: []
        };
      }
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(locate_details.system_id, locate_details.module);
      const locations = (yield mod.execute('locate_user', [user.email, user.username || user.id])).map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_3__.MapLocation(i));
      locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
      if (!locations?.length) {
        throw 'No locations for the given user';
      }
      _this4._state.setLevel(_this4._org.levelWithID([locations[0]?.level])?.id);
      const pos = locations[0].position;
      const {
        coordinates_from
      } = locations[0];
      const feature = {
        track_id: `locate-${user.id}`,
        location: locations[0].type === 'wireless' ? {
          x: coordinates_from?.includes('right') ? 1 - pos.x : pos.x,
          y: coordinates_from?.includes('bottom') ? 1 - pos.y : pos.y
        } : pos,
        content: locations[0].type === 'wireless' ? libs_components_src_lib_map_radius_component__WEBPACK_IMPORTED_MODULE_6__.MapRadiusComponent : libs_components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_5__.MapPinComponent,
        z_index: 99,
        data: {
          message: `${user.name} is here`,
          radius: locations[0].variance,
          last_seen: locations[0].last_seen
        }
      };
      _this4.timeout('update_location', () => {
        _this4._state.setFeatures('_located', [feature]);
      });
    })();
  }
  static #_ = this.ɵfac = function ExploreMapViewComponent_Factory(t) {
    return new (t || ExploreMapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_9__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_spaces_service__WEBPACK_IMPORTED_MODULE_10__.ExploreSpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_desks_service__WEBPACK_IMPORTED_MODULE_12__.ExploreDesksService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_zones_service__WEBPACK_IMPORTED_MODULE_11__.ExploreZonesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_parking_service__WEBPACK_IMPORTED_MODULE_13__.ExploreParkingService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_explore_lockers_service__WEBPACK_IMPORTED_MODULE_14__.ExploreLockersService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](libs_spaces_src_lib_spaces_service__WEBPACK_IMPORTED_MODULE_4__.SpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_7__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_8__.SpacePipe), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](libs_common_src_lib_mapspeople_service__WEBPACK_IMPORTED_MODULE_15__.MapsPeopleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: ExploreMapViewComponent,
    selectors: [["explore-map-view"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([_explore_desks_service__WEBPACK_IMPORTED_MODULE_12__.ExploreDesksService, _explore_spaces_service__WEBPACK_IMPORTED_MODULE_10__.ExploreSpacesService, _explore_zones_service__WEBPACK_IMPORTED_MODULE_11__.ExploreZonesService, _explore_parking_service__WEBPACK_IMPORTED_MODULE_13__.ExploreParkingService, _explore_lockers_service__WEBPACK_IMPORTED_MODULE_14__.ExploreLockersService, libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_8__.SpacePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 9,
    vars: 22,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4377629928032707348$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_0 = goog.getMsg("Zones");
        i18n_0 = MSG_EXTERNAL_4377629928032707348$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟dab9a30ea9f109a7395ec84fe144c4f70d50c32d␟4377629928032707348:Zones`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7297822327994766046$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_1 = goog.getMsg("Legend");
        i18n_1 = MSG_EXTERNAL_7297822327994766046$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟5c5419db944ed6a96f9515a2ac0ee390ec8cf3b5␟7297822327994766046:Legend`;
      }
      return [i18n_0, i18n_1, [3, "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", "class", "absolute top-2 left-2 max-w-[calc(100vw-1rem)] bg-base-100 border border-base-200 rounded p-2 space-y-2 overflow-hidden", 4, "ngIf"], ["legend", "", "class", "absolute bottom-2 left-2 p-2 rounded bg-base-100 border border-base-200", 4, "ngIf"], ["controls", "", 1, "absolute", "top-2", "left-2", "max-w-[calc(100vw-1rem)]", "bg-base-100", "border", "border-base-200", "rounded", "p-2", "space-y-2", "overflow-hidden"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["name", "zones", 1, "ml-2", 3, "ngModelChange", "ngModel"], ["for", "zones", 1, "mb-0"], ["legend", "", 1, "absolute", "bottom-2", "left-2", "p-2", "rounded", "bg-base-100", "border", "border-base-200"], [1, "mb-2", "font-medium"], ["class", "flex items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "w-3", "h-3", "rounded-full", "border", "border-base-200"], [1, "text-sm"]];
    },
    template: function ExploreMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "interactive-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ExploreMapViewComponent_div_6_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ExploreMapViewComponent_div_8_Template, 4, 1, "div", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 9, ctx.url))("styles", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 11, ctx.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 13, ctx.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 15, ctx.actions))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 17, ctx.labels))("focus", ctx.locate)("options", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 19, ctx.use_mapsindoors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.show_legend && ctx.legend.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_16__.InteractiveMapComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _explore_map_control_component__WEBPACK_IMPORTED_MODULE_17__.ExploreMapControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n            }\n\n            [zones][_ngcontent-%COMP%] {\n                top: 3.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtbWFwLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxXQUFXO1lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFt6b25lc10ge1xuICAgICAgICAgICAgICAgIHRvcDogMy41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 34498:
/*!*********************************************************!*\
  !*** ./libs/explore/src/lib/explore-parking.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreParkingService: () => (/* binding */ ExploreParkingService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 73725);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 46247);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 2250);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 27419);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 13264);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 88402);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/bookings/src/lib/bookings.fn */ 18026);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var libs_bookings_src_lib_booking_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libs/bookings/src/lib/booking-form.service */ 18379);
/* harmony import */ var _set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set-datetime-modal.component */ 27146);
/* harmony import */ var _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-desk-info.component */ 82882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 12587);




















class ExploreParkingService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_org, _state, _settings, _bookings, _dialog) {
    super();
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this._bookings = _bookings;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject({});
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    /** List of available parking levels for the active building */
    this.levels = this._org.active_levels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(l => l.filter(_ => _.tags.includes('parking'))));
    /** List of current bookings for the current building */
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._org.active_building, this._options, this._poll, this._state.options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([bld, _, __, {
      is_public
    }]) => is_public ? (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]) : (0,libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(_.date || Date.now())),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(_.date || Date.now())),
      type: 'parking',
      zones: bld?.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** Any event that the selected user has for the current date */
    this.existing_event = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([_]) => (0,libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(_.date || Date.now())),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(_.date || Date.now())),
      type: 'parking',
      email: _?.user || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)()?.email
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of current bookings for the current building */
    this.week_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this._org.active_building, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([bld, _]) => (0,libs_bookings_src_lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_19__["default"])(_.date || Date.now())),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])(_.date || Date.now()), 6)),
      type: 'parking',
      zones: bld?.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    /** List of parking spaces for the active building */
    this.spaces = this.levels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.forkJoin)(_.map(l => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.showMetadata)(l.id, 'parking-spaces').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(d => (d.details instanceof Array ? d.details : []).map(s => ({
      ...s,
      zone_id: l.id
    }))))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(_)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this.active_spaces = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.spaces, this._state.level]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([spaces, level]) => spaces.filter(_ => _.zone_id === level.id)));
    this._users = {};
    /** Available parking spaces for the current level and date */
    this.available_spaces = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.events, this.active_spaces]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([events, spaces]) => spaces.filter(_ => {
      const assigned = events.find(e => e.asset_id === _.id)?.user_name || _.assigned_to;
      this._users[_.id] = assigned;
      return !assigned;
    })));
    this.week_availablility = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.week_events, this.spaces, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([events, spaces, {
      date
    }]) => {
      const availability = {};
      for (let i = 0; i < 7; i++) {
        const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(date, i);
        const day_events = events.filter(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_23__["default"])(day, _.date));
        availability[day.valueOf()] = spaces.filter(_ => !day_events.find(e => e.asset_id === _.id)).length;
      }
      return availability;
    }));
    this.subscription('spaces', (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.spaces, this.available_spaces]).subscribe(([spaces, available]) => this._updateParkingSpaces(spaces, available)));
    this.setOptions({
      enable_booking: this._settings.get('app.parking.enable_maps') !== false
    });
    this.interval('poll', () => this._poll.next(Date.now()), 10 * 1000);
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  _updateParkingSpaces(spaces, available) {
    var _this = this;
    const styles = {};
    const features = [];
    const labels = [];
    const actions = [];
    const colours = this._settings.get('app.explore.colors') || {};
    const options = this._options.getValue();
    for (const space of spaces) {
      const can_book = !!available.find(_ => _.id === space.id);
      const status = can_book ? 'free' : 'busy';
      styles[`#${space.map_id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
      features.push({
        track_id: `parking:hover:${space.map_id}`,
        location: `${space.map_id}`,
        content: _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_9__.ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        z_index: 20,
        data: {
          ...space,
          user: this._users[space.id],
          status
        }
      });
      if (!can_book) continue;
      const book_fn = /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (status !== 'free') {
            return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`${space.name || 'Parking Space'} is unavailable at this time.`);
          }
          if (space.groups?.length && !space.groups.find(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)().groups.includes(_))) {
            return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`You are not allowed to book ${space.name}.`);
          }
          _this._bookings.newForm();
          _this._bookings.setOptions({
            type: 'parking'
          });
          if (options.date) {
            _this._bookings.form.patchValue({
              date: options.date
            });
            _this._bookings.form.patchValue({
              all_day: !!options.all_day
            });
          }
          let {
            date,
            duration,
            user
          } = yield _this._setBookingTime(_this._bookings.form.value.date, _this._bookings.form.value.duration, _this._options.getValue()?.custom ?? false, space);
          user = user || options.host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
          const user_email = user?.email;
          const lvl = _this._state.active_level;
          _this._bookings.form.patchValue({
            resources: [space],
            asset_id: space.id,
            asset_name: space.name,
            date,
            duration: options.all_day ? 12 * 60 : duration,
            map_id: space?.map_id || space?.id,
            description: space.name,
            user,
            user_email,
            booking_type: 'parking',
            zones: space.zone ? [space.zone?.parent_id, space.zone?.id] : [lvl.parent_id, lvl.id]
          });
          yield _this._bookings.confirmPost().catch(e => {
            console.log(e);
            (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Failed to book parking space ${space.name || space.id}. ${e.message || e.error || e}`);
            throw e;
          });
          (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully booked parking space ${space.name || space.id}`);
        });
        return function book_fn() {
          return _ref.apply(this, arguments);
        };
      }();
      actions.push({
        id: space?.map_id || space?.id,
        action: 'click',
        priority: 10,
        callback: book_fn
      });
    }
    this._state.setActions('parking', options.enable_booking ? actions : []);
    this._state.setStyles('parking', styles);
    this._state.setLabels('parking', labels);
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = null;
      if (!!_this2._settings.get('app.parking.allow_time_changes')) {
        const until = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_21__["default"])(Date.now(), _this2._settings.get('app.parking.available_period') || 90));
        const ref = _this2._dialog.open(_set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_8__.SetDatetimeModalComponent, {
          data: {
            date,
            duration,
            until,
            host,
            resource
          }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details) throw 'User cancelled';
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return {
        date,
        duration,
        user
      };
    })();
  }
  static #_ = this.ɵfac = function ExploreParkingService_Factory(t) {
    return new (t || ExploreParkingService)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_5__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](libs_bookings_src_lib_booking_form_service__WEBPACK_IMPORTED_MODULE_7__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjectable"]({
    token: ExploreParkingService,
    factory: ExploreParkingService.ɵfac
  });
}

/***/ }),

/***/ 64114:
/*!**********************************************************!*\
  !*** ./libs/explore/src/lib/explore-search.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreSearchComponent: () => (/* binding */ ExploreSearchComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _explore_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-search.service */ 35446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/virtual-keyboard.component */ 75080);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);














const _c0 = ["input"];
const _c1 = ["button"];
function ExploreSearchComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 32);
  }
}
function ExploreSearchComponent_ng_container_12_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExploreSearchComponent_ng_container_12_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r2.type, " ");
  }
}
function ExploreSearchComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExploreSearchComponent_ng_container_12_mat_option_1_Template, 2, 0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExploreSearchComponent_ng_container_12_mat_option_3_Template, 9, 4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r2.results)) == null ? null : tmp_5_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r2.results), 0, 5));
  }
}
class ExploreSearchComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  checkClick(event) {
    if (!this._el?.nativeElement?.contains(event.target)) {
      this.show = false;
      this._input_el?.nativeElement?.blur();
    }
  }
  constructor(_el, _search, _router, _route) {
    super();
    this._el = _el;
    this._search = _search;
    this._router = _router;
    this._route = _route;
    this.show = false;
    this.search_str = '';
    this.right_size = false;
    this.results = this._search.search_results;
    this.loading = this._search.loading;
    this.setFilter = s => this._search.setFilter(s);
    this.setItem = i => i instanceof Object ? this.select(i) : this.setFilter(i);
    this.onTouch = e => this.checkClick(e);
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  focusInput() {
    if (this._input_el?.nativeElement) {
      this.timeout('focus', () => this._input_el.nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show = true;
    this.focusInput();
  }
  closeSearch(e) {
    this.show = false;
    this.search_str = '';
    this.setFilter('');
    if (this._input_el?.nativeElement) {
      this._input_el.nativeElement.focus();
      this._input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str = item.name;
    const query = {};
    const type = item.type === 'space' ? 'space' : item.type === 'feature' ? 'feature' : 'user';
    query[type] = item.id;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el.nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size = x_center > window_width / 2;
  }
  static #_ = this.ɵfac = function ExploreSearchComponent_Factory(t) {
    return new (t || ExploreSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_explore_search_service__WEBPACK_IMPORTED_MODULE_1__.ExploreSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExploreSearchComponent,
    selectors: [["explore-search"]],
    viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._input_el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button_el = _t.first);
      }
    },
    hostBindings: function ExploreSearchComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExploreSearchComponent_click_HostBindingHandler($event) {
          return ctx.checkClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"])("touchstart", function ExploreSearchComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouch($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 20,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6939663044582448373$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_0 = goog.getMsg("Search for...");
        i18n_0 = MSG_EXTERNAL_6939663044582448373$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟7a428104a6c33787961fda306f9c518f89fb0261␟6939663044582448373:Search for...`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3411517965707112535$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_1 = goog.getMsg(" No matches found ");
        i18n_1 = MSG_EXTERNAL_3411517965707112535$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟0c720c4e60410fcfcd8582a32297bdd397620830␟3411517965707112535: No matches found `;
      }
      return [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], i18n_1, ["icon", "", "matRipple", "", 1, "bg-base-200", "m-2", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "absolute", "top-1/2", "-translate-y-1/2", "bg-base-100", "flex", "items-center", "z-10", "overflow-hidden", "outline-none", "px-4", "max-w-[calc(100vw-7rem)]", 3, "click"], ["keyboard", "", "placeholder", i18n_0, 1, "flex-1", "text-base", "border-none", "outline-none", 3, "ngModelChange", "blur", "ngModel", "matAutocomplete", "matAutocompleteConnectedTo"], ["class", "mr-2", 3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "mr-2", 3, "diameter"], ["class", "pointer-events-none", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pointer-events-none"], [3, "value"], [1, "flex", "items-center", "leading-tight", "w-[22rem]", "max-w-[calc(100vw-2rem)]"], [1, "flex-1", "w-1/2", "overflow-hidden"], [1, "truncate", "w-full"], [1, "text-xs"], [1, "text-xs", "font-bold", "p-2", "capitalize", "text-white", "bg-base-300", "rounded"]];
    },
    template: function ExploreSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.checkButtonPosition());
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.show ? ctx.closeSearch($event) : ctx.showSearch());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExploreSearchComponent_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.focusInput());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 7, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.search_str, $event) || (ctx.search_str = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.setItem($event));
        })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.show = !!ctx.search_str);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExploreSearchComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-autocomplete", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExploreSearchComponent_ng_container_12_Template, 6, 10, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const origin_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        const auto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.show || ctx.search_str ? "close" : "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", auto_r5)("matAutocompleteConnectedTo", origin_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 16, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, ctx.loading) !== true && (ctx.show || ctx.search_str));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_virtual_keyboard_component__WEBPACK_IMPORTED_MODULE_3__.VirtualKeyboardComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
    styles: ["[_nghost-%COMP%] {\n                z-index: 99;\n                position: relative;\n            }\n\n            [role='search'][_ngcontent-%COMP%] {\n                height: 3rem;\n                width: 0;\n                border-radius: 1.5rem;\n                border: 1px solid var(--b3);\n                transition: width 200ms opacity 200ms;\n                opacity: 0;\n                pointer-events: none;\n            }\n\n            [role='search'].show[_ngcontent-%COMP%] {\n                width: 24rem;\n                opacity: 1;\n                pointer-events: auto;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksV0FBVztnQkFDWCxrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixRQUFRO2dCQUNSLHFCQUFxQjtnQkFDckIsMkJBQTJCO2dCQUMzQixxQ0FBcUM7Z0JBQ3JDLFVBQVU7Z0JBQ1Ysb0JBQW9CO1lBQ3hCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixvQkFBb0I7WUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtyb2xlPSdzZWFyY2gnXSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iMyk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMgb3BhY2l0eSAyMDBtcztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbcm9sZT0nc2VhcmNoJ10uc2hvdyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cmVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 35446:
/*!********************************************************!*\
  !*** ./libs/explore/src/lib/explore-search.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreSearchService: () => (/* binding */ ExploreSearchService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var libs_spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/spaces/src/lib/space.class */ 30735);
/* harmony import */ var libs_users_src_lib_staff_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/users/src/lib/staff.fn */ 2372);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);












class ExploreSearchService {
  constructor(_org, _settings, _maps_people) {
    this._org = _org;
    this._settings = _settings;
    this._maps_people = _maps_people;
    /** Current search results for staff users */
    this._emergency_contacts = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    /** Filter string for results */
    this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('');
    /** Whether results are being loaded */
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    this.emergency_contacts = this._emergency_contacts.asObservable();
    this._role_assigned_contacts = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(bld => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(bld => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(bld.id, 'emergency_contacts')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(({
      details
    }) => details?.contacts || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this._user_search = this._filter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(q => q?.length > 2 ? this.search_fn(q).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this._space_search = this._filter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(q => q?.length > 2 ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.querySystems)({
      q,
      zone_id: this._org.organisation.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(({
      data
    }) => data.filter(_ => _.map_id).map(_ => new libs_spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_3__.Space({
      ..._,
      level: this._org.levelWithID(_.zones)
    })))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => []));
    this._maps_people_search = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this._maps_people.available$, this._filter, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([available, q]) => available && q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({
      q
    }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(list => {
      return list.map(_ => ({
        id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
        map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || '',
        type: 'feature',
        name: _.properties?.name || '',
        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this._points_of_interest = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(bld => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.listChildMetadata)(this._org.building.id, {
      name: 'maps_features'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)({
      details: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(data => {
      const list = [];
      for (const item of data) {
        const metadata = item.metadata.points_of_interest;
        if (!metadata) continue;
        for (const poi of metadata.details) {
          list.push({
            id: poi.id,
            type: 'feature',
            name: poi.name,
            description: '',
            zone: item.zone
          });
        }
      }
      return list;
    }));
    this.search_results = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this._filter, this._space_search, this._user_search, this._emergency_contacts, this._role_assigned_contacts, this._points_of_interest, this._maps_people_search]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([filter, spaces, users, contacts, roled_contacts, features, mapspeople_items]) => {
      const search = filter.toLowerCase();
      const results = [...mapspeople_items, ...spaces.filter(_ => _.email.toLowerCase().includes(search) || _.name.toLowerCase().includes(search) || _.display_name.toLowerCase().includes(search)).map(s => ({
        id: s.id,
        type: 'space',
        name: s.display_name || s.name,
        description: `Capacity: ${s.capacity} `
      })), ...(0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.flatten)(roled_contacts.map(u => u.roles.map(role => ({
        id: u.email,
        type: role || 'contact',
        is_role: true,
        name: u.name,
        description: u.email
      })))).filter(_ => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || _.type.toLowerCase().includes(search)), ...contacts.map(u => ({
        id: u.email,
        type: u.type || 'contact',
        is_role: true,
        name: u.name,
        description: u.email
      })).filter(_ => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || _.type.toLowerCase().includes(search)), ...users.map(u => ({
        id: u.email,
        type: 'user',
        name: u.name,
        description: u.email
      })), ...features.filter(_ => _.name.toLowerCase().includes(search)).map(s => ({
        id: s.id,
        type: 'feature',
        name: s.name,
        description: '',
        zone: s.zone?.id
      }))];
      results.sort((a, b) => a.name.localeCompare(b.name));
      return results;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    /** Obverable for whether results are being loaded */
    this.loading = this._loading.asObservable();
    /** Function used to query for users */
    this.search_fn = q => this._settings.get('app.basic_user_search') ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.queryUsers)({
      q,
      authority_id: (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.authority)()?.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(_ => _.data)) : (0,libs_users_src_lib_staff_fn__WEBPACK_IMPORTED_MODULE_4__.searchStaff)(q);
    this.search_results.subscribe();
    this.init();
  }
  init() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.first)(_ => _)).toPromise();
      const mod = (0,_placeos_organisation__WEBPACK_IMPORTED_MODULE_6__.moduleFromMetadata)(_this._org.binding('location_services'), 'LocationServices');
      if (mod) {
        const binding = mod.binding('emergency_contacts');
        binding.listen().subscribe(contacts_map => {
          const list = [];
          for (const type in contacts_map) {
            for (const user of contacts_map[type]) {
              list.push({
                ...user,
                type
              });
            }
          }
          _this._emergency_contacts.next(list);
        });
        binding.bind();
      }
    })();
  }
  setFilter(str) {
    this._filter.next(str);
  }
  static #_ = this.ɵfac = function ExploreSearchService_Factory(t) {
    return new (t || ExploreSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_5__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.MapsPeopleService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({
    token: ExploreSearchService,
    factory: ExploreSearchService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 79303:
/*!***************************************************************!*\
  !*** ./libs/explore/src/lib/explore-sensor-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreSensorInfoComponent: () => (/* binding */ ExploreSensorInfoComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);







function ExploreSensorInfoComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "thermostat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.temp, "\u02DAF");
  }
}
function ExploreSensorInfoComponent_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "opacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.humidity, "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExploreSensorInfoComponent_ng_template_3_div_1_Template, 5, 1, "div", 3)(2, ExploreSensorInfoComponent_ng_template_3_div_2_Template, 5, 1, "div", 3)(3, ExploreSensorInfoComponent_ng_template_3_div_3_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.temp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.humidity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.temp > 82);
  }
}
let shown_id = '';
class ExploreSensorInfoComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get show() {
    return shown_id === this._details.id;
  }
  set show(value) {
    this.timeout('show', () => shown_id = value ? this._details.id : '');
  }
  constructor(_details) {
    super();
    this._details = _details;
    this.temp = this._details.temp || 0;
    this.humidity = this._details.humidity || 0;
  }
  static #_ = this.ɵfac = function ExploreSensorInfoComponent_Factory(t) {
    return new (t || ExploreSensorInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_components__WEBPACK_IMPORTED_MODULE_1__.MAP_FEATURE_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExploreSensorInfoComponent,
    selectors: [["explore-sensor-info"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 1,
    consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "absolute", "top-1/2", "left-1/2", "w-7", "h-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "shadow", "pointer-events-auto", 3, "content"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "rounded-lg", "border", "border-base-200", "p-2", "text-xl"], ["class", "flex items-center space-x-2 whitespace-nowrap pr-2", 4, "ngIf"], ["class", "absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2 bg-base-100 border border-base-200", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "whitespace-nowrap", "pr-2"], [1, ""], [1, "absolute", "top-0", "right-0", "rounded-full", "translate-x-1/2", "-translate-y-1/2", "bg-base-100", "border", "border-base-200"], [1, "text-error", "text-xl"]],
    template: function ExploreSensorInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 1)(1, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " visibility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const stats_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", stats_r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_3__.CustomTooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple]
  });
}

/***/ }),

/***/ 61369:
/*!*******************************************************!*\
  !*** ./libs/explore/src/lib/explore-zones.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreZonesService: () => (/* binding */ ExploreZonesService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-sensor-info.component */ 79303);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var libs_components_src_lib_map_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libs/components/src/lib/map-canvas.component */ 37558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);














class ExploreZonesService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this._bind = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._state.level, this._state.options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([bld, lvl, {
      is_public
    }]) => !!bld && !!lvl && !is_public), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([_, lvl]) => {
      this._statuses = {};
      let system_id = this._org.binding('area_management');
      if (!system_id) return;
      const bind_areas = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(system_id, 'AreaManagement').binding(`${lvl.id}:areas`);
      const bind_zone = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(system_id, 'AreaManagement').binding(`${lvl.id}`);
      const zones = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([bind_areas.listen(), bind_zone.listen()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([a, z]) => [...(a?.value || []), ...(z?.value || []).filter(_ => _.location === 'area')]));
      this.subscription(`zones-status`, zones.subscribe(l => this.parseData(l)));
      this.subscription('binding', bind_areas.bind());
      this.subscription('zone-binding', bind_zone.bind());
    }));
    this.init();
  }
  init() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)(_ => _)).toPromise();
      const zone_metadata = yield Promise.all(_this._org.levels.map(bld => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(bld.id, 'map_regions').toPromise()));
      _this._area_list = [];
      for (const zone of zone_metadata) {
        const areas = zone?.details?.areas;
        if (!areas) continue;
        for (const area of areas) {
          const {
            capacity,
            hide_label,
            label_location,
            draw_polygon,
            area_count_key
          } = area.properties || {};
          const {
            coordinates
          } = area.geometry || {};
          _this._capacity[area.id] = capacity || 100;
          _this._count_key[area.id] = area_count_key || '';
          _this._location[area.id] = coordinates?.length ? getCenterPoint(coordinates) : null;
          _this._label_location[area.id] = hide_label === false ? label_location || _this._location[area.id] : null;
          _this._draw[area.id] = !!draw_polygon || _this._settings.get('app.explore.use_zone_polygons');
          _this._points[area.id] = coordinates || [];
          _this._area_list.push(area.map_id || area.id);
        }
      }
      _this._state.setFeatures('zones-canvas', [{
        track_id: 'zones-canvas',
        location: {
          x: 0.5,
          y: 0.5
        },
        content: libs_components_src_lib_map_canvas_component__WEBPACK_IMPORTED_MODULE_7__.MapCanvasComponent,
        data: {
          polygons$: _this._polygons$,
          draw_points: false,
          draw_labels: false
        }
      }]);
      _this.updateStatus();
      _this.subscription('bind', _this._bind.subscribe());
    })();
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      // if (!this._area_list.includes(id)) continue;
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = zone[this._count_key[id] || this._settings.get('app.explore.area_count_key') || 'count'] || 0;
      const filled = count / capacity;
      this._statuses[id] = zone.at_location ? 'busy' : filled < 0.4 ? 'free' : filled < 0.75 ? 'pending' : 'busy';
      if (!this._location[id]) continue;
      let content = '';
      if (zone.count) {
        content += `${zone.count || 0} User Device${zone.count === 1 ? '' : 's'}\n`;
      }
      if (zone.temperature) content += `Temperature: ${zone.temperature} ˚C\n`;
      if (zone.people_count > 0) content += `${zone.people_count_sum} ${zone.people_count_sum === 1 ? 'Person' : 'People'}\n`;
      if (zone.humidity) content += `Humidity: ${zone.humidity}%\n`;
      if (zone.queue_size) content += `Queue Size: ${zone.queue_size}%\n`;
      if (zone.counter) content += `Count: ${zone.counter}\n`;
      if (this._label_location[id] && !this._settings.get('app.explore.show_zone_labels')) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (this._settings.get('app.explore.show_zone_sensor_info') && (zone.temperature || zone.humidity)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_6__.ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature || 10,
            humidity: zone.humidity || 10
          },
          z_index: 98
        });
      }
    }
    this._features = features;
    this._state.setLabels('zones', labels);
    this.updateStatus();
  }
  updateStatus() {
    const style_map = {};
    const features = [];
    const colours = this._settings.get('app.explore.colors') || {};
    const polygons = [];
    for (const zone_id in this._statuses) {
      const colour = colours[`zone-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`] || _explore_spaces_service__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else {
        style_map[`#${zone_id}`] = {
          fill: colour,
          opacity: 0.6
        };
      }
    }
    this._polygons$.next(polygons);
    this._state.setFeatures('zones', [...features, ...this._features]);
    this._state.setStyles('zones-styles', style_map);
  }
  static #_ = this.ɵfac = function ExploreZonesService_Factory(t) {
    return new (t || ExploreZonesService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_4__.ExploreStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: ExploreZonesService,
    factory: ExploreZonesService.ɵfac
  });
}
function getCenterPoint(points) {
  const diff = (points || []).reduce((m, [x, y]) => ({
    x_min: x < m.x_min ? x : m.x_min,
    x_max: x > m.x_max ? x : m.x_max,
    y_min: y < m.y_min ? y : m.y_min,
    y_max: y > m.y_max ? y : m.y_max
  }), {
    x_min: 100,
    x_max: -100,
    y_min: 100,
    y_max: -100
  });
  return {
    x: diff.x_min + (diff.x_max - diff.x_min) / 2,
    y: diff.y_min + (diff.y_max - diff.y_min) / 2
  };
}

/***/ }),

/***/ 69801:
/*!****************************************************************!*\
  !*** ./libs/explore/src/lib/explore-zoom-control.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreZoomControlComponent: () => (/* binding */ ExploreZoomControlComponent)
/* harmony export */ });
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);






class ExploreZoomControlComponent {
  constructor(_state) {
    this._state = _state;
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, {
      x: 0.5,
      y: 0.5
    });
  }
  static #_ = this.ɵfac = function ExploreZoomControlComponent_Factory(t) {
    return new (t || ExploreZoomControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_0__.ExploreStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExploreZoomControlComponent,
    selectors: [["explore-zoom-controls"]],
    decls: 9,
    vars: 0,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1470758907984185227$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_0 = goog.getMsg("Zoom In");
        i18n_0 = MSG_EXTERNAL_1470758907984185227$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟34fb6028a6630cf3a7308084b31e86e89d057965␟1470758907984185227:Zoom In`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1356460275822781324$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_1 = goog.getMsg("Zoom Out");
        i18n_1 = MSG_EXTERNAL_1356460275822781324$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟677ce9c57b5558cb10f0b39327d5a965bfb21dc5␟1356460275822781324:Zoom Out`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5016012668378976433$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_2 = goog.getMsg("Reset Zoom & Center");
        i18n_2 = MSG_EXTERNAL_5016012668378976433$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟77981432124895c410e5b9157b3deb948831ffc6␟5016012668378976433:Reset Zoom & Center`;
      }
      return [["z-in", "", "icon", "", "matRipple", "", "matTooltip", i18n_0, 1, "bg-base-100", 3, "click"], ["z-out", "", "icon", "", "matRipple", "", "matTooltip", i18n_1, 1, "bg-base-100", 3, "click"], ["reset", "", "icon", "", "matRipple", "", "matTooltip", i18n_2, 1, "bg-base-100", 3, "click"]];
    },
    template: function ExploreZoomControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
          return ctx.zoomIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_3_listener() {
          return ctx.zoomOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_6_listener() {
          return ctx.reset();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n            }\n\n            button[_ngcontent-%COMP%] {\n                border: 1px solid #9998;\n                border-radius: 0;\n            }\n\n            button[_ngcontent-%COMP%]:first-child {\n                border-radius: 0.25rem 0.25rem 0 0;\n                border-bottom: none;\n            }\n\n            button[_ngcontent-%COMP%]:last-child {\n                border-radius: 0 0 0.25rem 0.25rem;\n                border-top: none;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZXhwbG9yZS9zcmMvbGliL2V4cGxvcmUtem9vbS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0ksdUJBQXVCO2dCQUN2QixnQkFBZ0I7WUFDcEI7O1lBRUE7Z0JBQ0ksa0NBQWtDO2dCQUNsQyxtQkFBbUI7WUFDdkI7O1lBRUE7Z0JBQ0ksa0NBQWtDO2dCQUNsQyxnQkFBZ0I7WUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC4yNXJlbSAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 42434:
/*!************************************************!*\
  !*** ./libs/explore/src/lib/explore.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedExploreModule: () => (/* binding */ SharedExploreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/form-fields/src/lib/form-fields.module */ 77066);
/* harmony import */ var libs_bookings_src_lib_bookings_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/bookings/src/lib/bookings.module */ 38742);
/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-map-control.component */ 60468);
/* harmony import */ var _explore_map_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-map-view.component */ 83134);
/* harmony import */ var _explore_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-search.component */ 64114);
/* harmony import */ var _explore_space_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-space-info.component */ 48303);
/* harmony import */ var _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-zoom-control.component */ 69801);
/* harmony import */ var _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-device-info.component */ 51207);
/* harmony import */ var _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-booking-modal.component */ 76301);
/* harmony import */ var _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore-desk-info.component */ 82882);
/* harmony import */ var _set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set-datetime-modal.component */ 27146);
/* harmony import */ var _explore_book_qr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./explore-book-qr.component */ 72213);
/* harmony import */ var _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./explore-sensor-info.component */ 79303);
/* harmony import */ var _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./explore-locker-bank-info.component */ 84810);
/* harmony import */ var _explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./explore-locker-bank-modal.component */ 50795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);























const COMPONENTS = [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_3__.ExploreMapControlComponent, _explore_map_view_component__WEBPACK_IMPORTED_MODULE_4__.ExploreMapViewComponent, _explore_search_component__WEBPACK_IMPORTED_MODULE_5__.ExploreSearchComponent, _explore_space_info_component__WEBPACK_IMPORTED_MODULE_6__.ExploreSpaceInfoComponent, _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__.ExploreDeviceInfoComponent, _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_10__.ExploreDeskInfoComponent, _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_7__.ExploreZoomControlComponent, _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_9__.ExploreBookingModalComponent, _set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_11__.SetDatetimeModalComponent, _explore_book_qr_component__WEBPACK_IMPORTED_MODULE_12__.ExploreBookQrComponent, _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_13__.ExploreSensorInfoComponent, _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_14__.ExploreLockerBankInfoComponent, _explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExploreLockerBankModalComponent];
class SharedExploreModule {
  static #_ = this.ɵfac = function SharedExploreModule_Factory(t) {
    return new (t || SharedExploreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: SharedExploreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _placeos_components__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.PortalModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_bookings_src_lib_bookings_module__WEBPACK_IMPORTED_MODULE_2__.SharedBookingsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedExploreModule, {
    declarations: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_3__.ExploreMapControlComponent, _explore_map_view_component__WEBPACK_IMPORTED_MODULE_4__.ExploreMapViewComponent, _explore_search_component__WEBPACK_IMPORTED_MODULE_5__.ExploreSearchComponent, _explore_space_info_component__WEBPACK_IMPORTED_MODULE_6__.ExploreSpaceInfoComponent, _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__.ExploreDeviceInfoComponent, _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_10__.ExploreDeskInfoComponent, _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_7__.ExploreZoomControlComponent, _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_9__.ExploreBookingModalComponent, _set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_11__.SetDatetimeModalComponent, _explore_book_qr_component__WEBPACK_IMPORTED_MODULE_12__.ExploreBookQrComponent, _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_13__.ExploreSensorInfoComponent, _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_14__.ExploreLockerBankInfoComponent, _explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExploreLockerBankModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _placeos_components__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.PortalModule, libs_form_fields_src_lib_form_fields_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, libs_bookings_src_lib_bookings_module__WEBPACK_IMPORTED_MODULE_2__.SharedBookingsModule],
    exports: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_3__.ExploreMapControlComponent, _explore_map_view_component__WEBPACK_IMPORTED_MODULE_4__.ExploreMapViewComponent, _explore_search_component__WEBPACK_IMPORTED_MODULE_5__.ExploreSearchComponent, _explore_space_info_component__WEBPACK_IMPORTED_MODULE_6__.ExploreSpaceInfoComponent, _explore_device_info_component__WEBPACK_IMPORTED_MODULE_8__.ExploreDeviceInfoComponent, _explore_desk_info_component__WEBPACK_IMPORTED_MODULE_10__.ExploreDeskInfoComponent, _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_7__.ExploreZoomControlComponent, _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_9__.ExploreBookingModalComponent, _set_datetime_modal_component__WEBPACK_IMPORTED_MODULE_11__.SetDatetimeModalComponent, _explore_book_qr_component__WEBPACK_IMPORTED_MODULE_12__.ExploreBookQrComponent, _explore_sensor_info_component__WEBPACK_IMPORTED_MODULE_13__.ExploreSensorInfoComponent, _explore_locker_bank_info_component__WEBPACK_IMPORTED_MODULE_14__.ExploreLockerBankInfoComponent, _explore_locker_bank_modal_component__WEBPACK_IMPORTED_MODULE_15__.ExploreLockerBankModalComponent]
  });
})();

/***/ }),

/***/ 11874:
/*!*****************************************!*\
  !*** ./libs/explore/src/lib/explore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_COLOURS: () => (/* reexport safe */ _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_COLOURS),
/* harmony export */   ExploreDesksService: () => (/* reexport safe */ _explore_desks_service__WEBPACK_IMPORTED_MODULE_0__.ExploreDesksService),
/* harmony export */   ExploreMapControlComponent: () => (/* reexport safe */ _explore_map_control_component__WEBPACK_IMPORTED_MODULE_1__.ExploreMapControlComponent),
/* harmony export */   ExploreMapViewComponent: () => (/* reexport safe */ _explore_map_view_component__WEBPACK_IMPORTED_MODULE_2__.ExploreMapViewComponent),
/* harmony export */   ExploreParkingService: () => (/* reexport safe */ _explore_parking_service__WEBPACK_IMPORTED_MODULE_10__.ExploreParkingService),
/* harmony export */   ExploreSearchComponent: () => (/* reexport safe */ _explore_search_component__WEBPACK_IMPORTED_MODULE_3__.ExploreSearchComponent),
/* harmony export */   ExploreSearchService: () => (/* reexport safe */ _explore_search_service__WEBPACK_IMPORTED_MODULE_4__.ExploreSearchService),
/* harmony export */   ExploreSpaceInfoComponent: () => (/* reexport safe */ _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__.ExploreSpaceInfoComponent),
/* harmony export */   ExploreSpacesService: () => (/* reexport safe */ _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__.ExploreSpacesService),
/* harmony export */   ExploreStateService: () => (/* reexport safe */ _explore_state_service__WEBPACK_IMPORTED_MODULE_7__.ExploreStateService),
/* harmony export */   ExploreZonesService: () => (/* reexport safe */ _explore_zones_service__WEBPACK_IMPORTED_MODULE_8__.ExploreZonesService),
/* harmony export */   ExploreZoomControlComponent: () => (/* reexport safe */ _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__.ExploreZoomControlComponent),
/* harmony export */   SharedExploreModule: () => (/* reexport safe */ _explore_module__WEBPACK_IMPORTED_MODULE_11__.SharedExploreModule)
/* harmony export */ });
/* harmony import */ var _explore_desks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-desks.service */ 61104);
/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-map-control.component */ 60468);
/* harmony import */ var _explore_map_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-map-view.component */ 83134);
/* harmony import */ var _explore_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-search.component */ 64114);
/* harmony import */ var _explore_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-search.service */ 35446);
/* harmony import */ var _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-space-info.component */ 48303);
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-spaces.service */ 65897);
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-state.service */ 12455);
/* harmony import */ var _explore_zones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-zones.service */ 61369);
/* harmony import */ var _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-zoom-control.component */ 69801);
/* harmony import */ var _explore_parking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore-parking.service */ 34498);
/* harmony import */ var _explore_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explore.module */ 42434);













/***/ }),

/***/ 27146:
/*!**************************************************************!*\
  !*** ./libs/explore/src/lib/set-datetime-modal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetDatetimeModalComponent: () => (/* binding */ SetDatetimeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form-fields/src/lib/duration-field.component */ 83476);
/* harmony import */ var _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../form-fields/src/lib/user-search-field.component */ 18000);














const _c0 = () => ({
  standalone: true
});
function SetDatetimeModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 13)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Resource:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.resource.name || ctx_r1.resource.map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_main_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "a-user-search-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SetDatetimeModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SetDatetimeModalComponent_main_6_div_1_Template, 6, 1, "div", 6)(2, SetDatetimeModalComponent_main_6_div_2_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a-date-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Date and time must be in the future ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "div", 10)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a-time-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SetDatetimeModalComponent_main_6_Template_a_time_field_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "a-duration-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.resource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.host);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("to", ctx_r1.book_until);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.form.value.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0))("use_24hr", ctx_r1.use_24hr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr_time);
  }
}
class SetDatetimeModalComponent {
  get use_24hr_time() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_data, _settings) {
    this._data = _data;
    this._settings = _settings;
    this.host = this._data.host;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.user),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.date),
      duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this._data.duration)
    });
    this.book_until = this._data.until;
    this.resource = this._data.resource;
  }
  static #_ = this.ɵfac = function SetDatetimeModalComponent_Factory(t) {
    return new (t || SetDatetimeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SetDatetimeModalComponent,
    selectors: [["set-datetime-modal"]],
    decls: 10,
    vars: 2,
    consts: [["classs", "flex items-center justify-between"], ["icon", "", "mat-dialog-close", ""], ["class", "w-[24rem] max-w-[85vw] pt-4", 3, "formGroup", 4, "ngIf"], [1, "w-full", "p-2", "border-t", "border-base-200", "flex", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "w-[24rem]", "max-w-[85vw]", "pt-4", 3, "formGroup"], ["class", "flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "space-x-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/4", "mb-2"], [1, "px-4", "py-3", "border", "border-base-200", "rounded", "w-full", "mb-4"], ["formControlName", "user", 1, "mb-4"]],
    template: function SetDatetimeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Set date and time");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SetDatetimeModalComponent_main_6_Template, 18, 13, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "footer", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", ctx.form.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_2__.DateFieldComponent, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_3__.DurationFieldComponent, _form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldComponent, _form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_5__.UserSearchFieldComponent]
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

/***/ })

}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map