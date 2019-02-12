(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('example-npm-module', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/router'], factory) :
    (factory((global['example-npm-module'] = {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.router));
}(this, (function (exports,i0,forms,i1,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsFormBuilderService = (function () {
        function HmctsFormBuilderService() {
        }
        HmctsFormBuilderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        HmctsFormBuilderService.ctorParameters = function () { return []; };
        /** @nocollapse */ HmctsFormBuilderService.ngInjectableDef = i0.defineInjectable({ factory: function HmctsFormBuilderService_Factory() { return new HmctsFormBuilderService(); }, token: HmctsFormBuilderService, providedIn: "root" });
        return HmctsFormBuilderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HmctsFormBuilderComponent = (function () {
        function HmctsFormBuilderComponent() {
        }
        /**
         * @return {?}
         */
        HmctsFormBuilderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HmctsFormBuilderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'hmcts-hmcts-form-builder',
                        template: "\n    <p>\n      hmcts-form-builder works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        HmctsFormBuilderComponent.ctorParameters = function () { return []; };
        return HmctsFormBuilderComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValidationService = (function () {
        function ValidationService(datePipe) {
            this.datePipe = datePipe;
            /**
             * Custom validators can be added to this.
             *
             * TODO : Define interface for array.
             * TODO : Add a Custom Validator example.
             *
             * @see https://angular.io/guide/form-validation#custom-validators
             */
            this.ngValidatorFunctionMap = [
                {
                    simpleName: 'required',
                    ngValidatorFunction: forms.Validators.required
                },
                {
                    simpleName: 'email',
                    ngValidatorFunction: forms.Validators.email
                }
            ];
        }
        /**
         * Returns a map of how we've mapped simple names to Ng Validators, and in the future custom validators.
         *
         * TODO: Check return in Unit test.
         *
         * // @returnArray
         */
        /**
         * Returns a map of how we've mapped simple names to Ng Validators, and in the future custom validators.
         *
         * TODO: Check return in Unit test.
         *
         * // \@returnArray
         * @return {?}
         */
        ValidationService.prototype.getNgValidationFunctionMap = /**
         * Returns a map of how we've mapped simple names to Ng Validators, and in the future custom validators.
         *
         * TODO: Check return in Unit test.
         *
         * // \@returnArray
         * @return {?}
         */
            function () {
                return this.ngValidatorFunctionMap;
            };
        /**
         * Takes in an array of simple validation names.
         *
         * These names map to Ng Validation functions, and can map to more complex custom validation functions.
         *
         * This allows us to leverage the power of Ng Validation, and custom validation, as well as giving us
         * the ability to create reusable validators, that can be used throughout our forms.
         *
         * Note: Validators.minLength requires Validators.required
         *
         * TODO: Unit test.
         *
         * @see state_meta
         * // @param validators - ie. ['required', 'email']
         */
        /**
         * Takes in an array of simple validation names.
         *
         * These names map to Ng Validation functions, and can map to more complex custom validation functions.
         *
         * This allows us to leverage the power of Ng Validation, and custom validation, as well as giving us
         * the ability to create reusable validators, that can be used throughout our forms.
         *
         * Note: Validators.minLength requires Validators.required
         *
         * TODO: Unit test.
         *
         * @see state_meta
         * // \@param validators - ie. ['required', 'email']
         * @param {?} validators
         * @return {?}
         */
        ValidationService.prototype.getNgValidators = /**
         * Takes in an array of simple validation names.
         *
         * These names map to Ng Validation functions, and can map to more complex custom validation functions.
         *
         * This allows us to leverage the power of Ng Validation, and custom validation, as well as giving us
         * the ability to create reusable validators, that can be used throughout our forms.
         *
         * Note: Validators.minLength requires Validators.required
         *
         * TODO: Unit test.
         *
         * @see state_meta
         * // \@param validators - ie. ['required', 'email']
         * @param {?} validators
         * @return {?}
         */
            function (validators) {
                var _this = this;
                /** @type {?} */
                var ngValidators = [];
                validators.forEach(function (validatorName) {
                    try {
                        for (var _a = __values(_this.getNgValidationFunctionMap()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var ngValidatorFunction = _b.value;
                            if (ngValidatorFunction.simpleName === validatorName) {
                                ngValidators.push(ngValidatorFunction.ngValidatorFunction);
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    var e_1, _c;
                });
                return ngValidators;
            };
        /**
         * Checks if validators have been set on the control, an example of a validator being set on a control is:
         *
         * {
           *  control: 'informationNeeded',
           *  value: 'Information text',
           *  validators: ['required']
           * }
         *
         * TODO: Unit test.
         *
         * //@param {Array} validators - ['required']
         * //@return {boolean}
         */
        /**
         * Checks if validators have been set on the control, an example of a validator being set on a control is:
         *
         * {
         *  control: 'informationNeeded',
         *  value: 'Information text',
         *  validators: ['required']
         * }
         *
         * TODO: Unit test.
         *
         * //\@param {Array} validators - ['required']
         * //\@return {boolean}
         * @param {?} validators
         * @return {?}
         */
        ValidationService.prototype.controlHasValidation = /**
         * Checks if validators have been set on the control, an example of a validator being set on a control is:
         *
         * {
         *  control: 'informationNeeded',
         *  value: 'Information text',
         *  validators: ['required']
         * }
         *
         * TODO: Unit test.
         *
         * //\@param {Array} validators - ['required']
         * //\@return {boolean}
         * @param {?} validators
         * @return {?}
         */
            function (validators) {
                return validators && validators.length > 0;
            };
        /**
         * Checks if the control is valid.
         *
         * Returns a boolean, based on if the control which is part
         * of a form group is valid or not.
         *
         * TODO: Unit test.
         *
         * // @param {FormGroup} formGroup
         * // @param {String} control - 'informationNeeded'
         * // @return {boolean}
         */
        /**
         * Checks if the control is valid.
         *
         * Returns a boolean, based on if the control which is part
         * of a form group is valid or not.
         *
         * TODO: Unit test.
         *
         * // \@param {FormGroup} formGroup
         * // \@param {String} control - 'informationNeeded'
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
        ValidationService.prototype.isFormControlValid = /**
         * Checks if the control is valid.
         *
         * Returns a boolean, based on if the control which is part
         * of a form group is valid or not.
         *
         * TODO: Unit test.
         *
         * // \@param {FormGroup} formGroup
         * // \@param {String} control - 'informationNeeded'
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
            function (formGroup, control) {
                return formGroup.get(control).valid;
            };
        // FOR MULTIPLY CONTROLS - formGroup level validation.
        /**
         * Is Form Group Invalid
         *
         * Checks if a validation error has been thrown on the pages Angular FormGroup.
         *
         * FormGroup is a the parent of FormControls, and therefore and according to the Angular
         * Docs the best place to validate against multiply controls, that have dependencies upon one
         * another is on the FormGroup level.
         *
         * An example being; we should check if a user has checked one of eight checkboxes.
         *
         * TODO : Unit Test
         *
         * @see ValidationService
         * // @param {FormGroup} formGroup
         * // @param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // @return{boolean}
         */
        /**
         * Is Form Group Invalid
         *
         * Checks if a validation error has been thrown on the pages Angular FormGroup.
         *
         * FormGroup is a the parent of FormControls, and therefore and according to the Angular
         * Docs the best place to validate against multiply controls, that have dependencies upon one
         * another is on the FormGroup level.
         *
         * An example being; we should check if a user has checked one of eight checkboxes.
         *
         * TODO : Unit Test
         *
         * @see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // \@return{boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
        ValidationService.prototype.isFormGroupInvalid = /**
         * Is Form Group Invalid
         *
         * Checks if a validation error has been thrown on the pages Angular FormGroup.
         *
         * FormGroup is a the parent of FormControls, and therefore and according to the Angular
         * Docs the best place to validate against multiply controls, that have dependencies upon one
         * another is on the FormGroup level.
         *
         * An example being; we should check if a user has checked one of eight checkboxes.
         *
         * TODO : Unit Test
         *
         * @see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // \@return{boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
            function (formGroup, validationErrorId) {
                if (formGroup.errors && formGroup.errors.hasOwnProperty(validationErrorId)) {
                    return formGroup.errors[validationErrorId];
                }
                else {
                    return null;
                }
            };
        /**
         * isAnyCheckboxChecked
         *
         * Checks if any of the checkbox controls passed to this function are checked ie. have a boolean value
         * of true.
         *
         * This is due to the fact that we might have multiply checkboxes within the view, and the user needs to
         * select at least one of these checkboxes to have entered a valid input.
         *
         * Note that we validate on the formGroup level, and not the control level for this as we are concerned with
         * multiple controls and the Ng 6 way is to have the validator on a common ancestor of controls; in this
         * case our formGroup.
         *
         * If the user has checked a checked box this function returns null and therefore no validation error is returned.
         * If the user has NOT checked a checkbox this function returns a validation error.
         *
         * // @param formGroup
         * // @param {string} validationIdentifier - An error name assigned by the developer, this name can then be referred
         * to display the error in the  view.
         * // @return{any}
         */
        /**
         * isAnyCheckboxChecked
         *
         * Checks if any of the checkbox controls passed to this function are checked ie. have a boolean value
         * of true.
         *
         * This is due to the fact that we might have multiply checkboxes within the view, and the user needs to
         * select at least one of these checkboxes to have entered a valid input.
         *
         * Note that we validate on the formGroup level, and not the control level for this as we are concerned with
         * multiple controls and the Ng 6 way is to have the validator on a common ancestor of controls; in this
         * case our formGroup.
         *
         * If the user has checked a checked box this function returns null and therefore no validation error is returned.
         * If the user has NOT checked a checkbox this function returns a validation error.
         *
         * // \@param formGroup
         * // \@param {string} validationIdentifier - An error name assigned by the developer, this name can then be referred
         * to display the error in the  view.
         * // \@return{any}
         * @param {?} formGroup
         * @param {?} checkboxes
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isAnyCheckboxChecked = /**
         * isAnyCheckboxChecked
         *
         * Checks if any of the checkbox controls passed to this function are checked ie. have a boolean value
         * of true.
         *
         * This is due to the fact that we might have multiply checkboxes within the view, and the user needs to
         * select at least one of these checkboxes to have entered a valid input.
         *
         * Note that we validate on the formGroup level, and not the control level for this as we are concerned with
         * multiple controls and the Ng 6 way is to have the validator on a common ancestor of controls; in this
         * case our formGroup.
         *
         * If the user has checked a checked box this function returns null and therefore no validation error is returned.
         * If the user has NOT checked a checkbox this function returns a validation error.
         *
         * // \@param formGroup
         * // \@param {string} validationIdentifier - An error name assigned by the developer, this name can then be referred
         * to display the error in the  view.
         * // \@return{any}
         * @param {?} formGroup
         * @param {?} checkboxes
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (formGroup, checkboxes, validationIdentifier) {
                /** @type {?} */
                var isAnyCheckboxCheckedValidationFn = function (controls) {
                    try {
                        for (var checkboxes_1 = __values(checkboxes), checkboxes_1_1 = checkboxes_1.next(); !checkboxes_1_1.done; checkboxes_1_1 = checkboxes_1.next()) {
                            var checkbox = checkboxes_1_1.value;
                            if (controls.get(checkbox).value === true) {
                                return null;
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (checkboxes_1_1 && !checkboxes_1_1.done && (_a = checkboxes_1.return))
                                _a.call(checkboxes_1);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    return _b = {},
                        _b[validationIdentifier] = true,
                        _b;
                    var e_2, _a, _b;
                };
                return isAnyCheckboxCheckedValidationFn;
            };
        // Common function for validator
        // Returninng the validationIdentifier true if invalid and null if valid
        /**
         * @param {?} controls
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isAllFieldsRequiredValidationFn = /**
         * @param {?} controls
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (controls, fields, validationIdentifier) {
                if (controls !== null && fields !== null) {
                    try {
                        for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                            var field = fields_1_1.value;
                            if (!controls.get(field).value) {
                                return _a = {},
                                    _a[validationIdentifier] = true,
                                    _a;
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (fields_1_1 && !fields_1_1.done && (_b = fields_1.return))
                                _b.call(fields_1);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                }
                return null;
                var e_3, _b, _a;
            };
        /**
         * isAllFieldsRequired
         *
         * // @param formGroup
         * // @param controls is object
         * // @param validationIdentifier
         * // @return{any}
         */
        /**
         * isAllFieldsRequired
         *
         * // \@param formGroup
         * // \@param controls is object
         * // \@param validationIdentifier
         * // \@return{any}
         * @param {?} formGroup
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isAllFieldsRequired = /**
         * isAllFieldsRequired
         *
         * // \@param formGroup
         * // \@param controls is object
         * // \@param validationIdentifier
         * // \@return{any}
         * @param {?} formGroup
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (formGroup, fields, validationIdentifier) {
                var _this = this;
                /** @type {?} */
                var isAllFieldsRequiredValidationFn = function (controls) {
                    return _this.isAllFieldsRequiredValidationFn(controls, fields, validationIdentifier);
                };
                return isAllFieldsRequiredValidationFn;
            };
        /** Common function for date validator
         * Returninng the validationIdentifier true if invalid and null if valid
         *
         * yyyy/mm/dd
         *
         */
        /**
         * Common function for date validator
         * Returninng the validationIdentifier true if invalid and null if valid
         *
         * yyyy/mm/dd
         *
         * @param {?} controls
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isValidDateValidationFn = /**
         * Common function for date validator
         * Returninng the validationIdentifier true if invalid and null if valid
         *
         * yyyy/mm/dd
         *
         * @param {?} controls
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (controls, fields, validationIdentifier) {
                if (controls !== null && fields !== null) {
                    /** @type {?} */
                    var dateValueArray = [];
                    try {
                        for (var fields_2 = __values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                            var field = fields_2_1.value;
                            if (!controls.get(field).value) {
                                return _a = {},
                                    _a[validationIdentifier] = true,
                                    _a;
                            }
                            else {
                                // Form have valid values and we can create date
                                // Check is form controls matching the right lengh and then create array contained date
                                if (controls.get(field).value.length <= 2) {
                                    dateValueArray.push(controls.get(field).value);
                                }
                                else if (controls.get(field).value.length === 4) {
                                    dateValueArray.push(controls.get(field).value);
                                }
                                else {
                                    return _b = {},
                                        _b[validationIdentifier] = true,
                                        _b;
                                }
                                // Check if array is ready and convert to string
                                if (dateValueArray.length === 3) {
                                    try {
                                        //Return error if not numbers
                                        for (var dateValueArray_1 = __values(dateValueArray), dateValueArray_1_1 = dateValueArray_1.next(); !dateValueArray_1_1.done; dateValueArray_1_1 = dateValueArray_1.next()) {
                                            var element = dateValueArray_1_1.value;
                                            if (element != Number(element)) {
                                                return _c = {},
                                                    _c[validationIdentifier] = true,
                                                    _c;
                                            }
                                        }
                                    }
                                    catch (e_4_1) {
                                        e_4 = { error: e_4_1 };
                                    }
                                    finally {
                                        try {
                                            if (dateValueArray_1_1 && !dateValueArray_1_1.done && (_d = dateValueArray_1.return))
                                                _d.call(dateValueArray_1);
                                        }
                                        finally {
                                            if (e_4)
                                                throw e_4.error;
                                        }
                                    }
                                    // Convert user entered day and month to numbers
                                    dateValueArray[1] = Number(dateValueArray[1]);
                                    dateValueArray[2] = Number(dateValueArray[2]);
                                    // Return error if user entered months less than 0 and more than 12
                                    if (dateValueArray[1] <= 0 || dateValueArray[1] >= 12) {
                                        return _e = {},
                                            _e[validationIdentifier] = true,
                                            _e;
                                    }
                                    // Return error if user entered months less than 0 and more than 31
                                    if (dateValueArray[2] <= 0 || dateValueArray[2] >= 31) {
                                        return _f = {},
                                            _f[validationIdentifier] = true,
                                            _f;
                                    }
                                    // Here value might me invalid
                                    // Adding zeros in front if less than 10
                                    if (dateValueArray[1] < 10) {
                                        dateValueArray[1] = ("0" + (dateValueArray[1]).toString().slice(-2));
                                    }
                                    if (dateValueArray[2] < 10) {
                                        dateValueArray[2] = ("0" + (dateValueArray[2]).toString().slice(-2));
                                    }
                                    /** @type {?} */
                                    var dateStr = dateValueArray.toString();
                                    /** @type {?} */
                                    var dateObj = new Date(dateStr);
                                    /** @type {?} */
                                    var checkDateStr = dateObj.toISOString().slice(0, 10).replace(/-/g, ",").replace("T", " ");
                                    // Return null if valid date
                                    if (checkDateStr === dateStr) {
                                        return null;
                                    }
                                    return _g = {},
                                        _g[validationIdentifier] = true,
                                        _g;
                                }
                            }
                        }
                    }
                    catch (e_5_1) {
                        e_5 = { error: e_5_1 };
                    }
                    finally {
                        try {
                            if (fields_2_1 && !fields_2_1.done && (_h = fields_2.return))
                                _h.call(fields_2);
                        }
                        finally {
                            if (e_5)
                                throw e_5.error;
                        }
                    }
                }
                return null;
                var e_5, _h, _a, _b, e_4, _d, _c, _e, _f, _g;
            };
        /**
         * @param {?} formGroup
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isValidDate = /**
         * @param {?} formGroup
         * @param {?} fields
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (formGroup, fields, validationIdentifier) {
                var _this = this;
                /** @type {?} */
                var isValidDateValidationFn = function (controls) {
                    return _this.isValidDateValidationFn(controls, fields, validationIdentifier);
                };
                return isValidDateValidationFn;
            };
        /**
         * isTextAreaValidWhenCheckboxChecked
         *
         * // @param formGroup
         * // @param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // @param validationIdentifier
         * //@return {any}
         */
        /**
         * isTextAreaValidWhenCheckboxChecked
         *
         * // \@param formGroup
         * // \@param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // \@param validationIdentifier
         * //\@return {any}
         * @param {?} formGroup
         * @param {?} controls
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isTextAreaValidWhenCheckboxChecked = /**
         * isTextAreaValidWhenCheckboxChecked
         *
         * // \@param formGroup
         * // \@param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // \@param validationIdentifier
         * //\@return {any}
         * @param {?} formGroup
         * @param {?} controls
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (formGroup, controls, validationIdentifier) {
                /** @type {?} */
                var isTextAreaValidWhenCheckboxChecked = function (formControls) {
                    if (!formControls.get(controls.checkboxControl).value) {
                        return null;
                    }
                    if (formControls.get(controls.textareaControl).value && formControls.get(controls.textareaControl).value.length > 0) {
                        return null;
                    }
                    return _a = {},
                        _a[validationIdentifier] = true,
                        _a;
                    var _a;
                };
                return isTextAreaValidWhenCheckboxChecked;
            };
        /**
         * isRadioValidWhenSomeOptionSelected
         *
         * // @param formGroup
         * // @param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // @param validationIdentifier
         * // @return {any}
         */
        /**
         * isRadioValidWhenSomeOptionSelected
         *
         * // \@param formGroup
         * // \@param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // \@param validationIdentifier
         * // \@return {any}
         * @param {?} formGroup
         * @param {?} controls
         * @param {?} validationIdentifier
         * @return {?}
         */
        ValidationService.prototype.isRadioValidWhenSomeOptionSelected = /**
         * isRadioValidWhenSomeOptionSelected
         *
         * // \@param formGroup
         * // \@param controls is object
         * { checkboxControl : string, textareaControl : string }
         * // \@param validationIdentifier
         * // \@return {any}
         * @param {?} formGroup
         * @param {?} controls
         * @param {?} validationIdentifier
         * @return {?}
         */
            function (formGroup, controls, validationIdentifier) {
                var _this = this;
                /** @type {?} */
                var isRadioValidWhenSomeOptionSelected = function (formControls) {
                    try {
                        for (var _a = __values(controls.selectedOptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var option = _b.value;
                            if (formControls.get(controls.radioControl).value !== null && formControls.get(controls.radioControl).value !== option.selectedOption) {
                                // Do not validate child if parent is valid so
                                // Reset child validation to valid state here
                                // Add word "ValidationFn" to the name of validator when you extend child validation functions
                                if (option.childValidator.validatorFunc) {
                                    return _this[option.childValidator.validatorFunc + "ValidationFn"](null, null, option.childValidator.validationErrorId);
                                }
                                return null;
                            }
                            else {
                                if (option.childValidator.validatorFunc) {
                                    return _this[option.childValidator.validatorFunc + "ValidationFn"](formGroup, option.childValidator.controls, option.childValidator.validationErrorId);
                                }
                            }
                        }
                    }
                    catch (e_6_1) {
                        e_6 = { error: e_6_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_6)
                                throw e_6.error;
                        }
                    }
                    return _d = {},
                        _d[validationIdentifier] = true,
                        _d;
                    var e_6, _c, _d;
                };
                return isRadioValidWhenSomeOptionSelected;
            };
        /**
         * createFormGroupValidators
         *
         * FormGroup Validators are used for validation that involves more than one FormControl. ie. When a control
         * depends on another, or we need to validate a group of controls together. Validation for multiply controls is
         * required on the common ancestor as per the Angular Documentation.
         *
         * @see @see https://angular.io/guide/form-validation#adding-to-reactive-forms-1
         *
         * // @param {FormGroup} formGroup - Angular FormGroup
         * // @param formGroupValidators - [{
           *    validatorFunc: 'isAnyCheckboxChecked',
           *    validationErrorId: 'reasonsConstentOrderNotApproved',
           *    checkboxes: [
           *        'partiesNeedAttend', 'NotEnoughInformation', 'orderNotAppearOfS25ca1973', 'd81',
           *        'pensionAnnex', 'applicantTakenAdvice', 'respondentTakenAdvice', 'Other2'
           *    ]}]
         */
        /**
         * createFormGroupValidators
         *
         * FormGroup Validators are used for validation that involves more than one FormControl. ie. When a control
         * depends on another, or we need to validate a group of controls together. Validation for multiply controls is
         * required on the common ancestor as per the Angular Documentation.
         *
         * @see \@see https://angular.io/guide/form-validation#adding-to-reactive-forms-1
         *
         * // \@param {FormGroup} formGroup - Angular FormGroup
         * // \@param formGroupValidators - [{
         *    validatorFunc: 'isAnyCheckboxChecked',
         *    validationErrorId: 'reasonsConstentOrderNotApproved',
         *    checkboxes: [
         *        'partiesNeedAttend', 'NotEnoughInformation', 'orderNotAppearOfS25ca1973', 'd81',
         *        'pensionAnnex', 'applicantTakenAdvice', 'respondentTakenAdvice', 'Other2'
         *    ]}]
         * @param {?} formGroup
         * @param {?} formGroupValidators
         * @return {?}
         */
        ValidationService.prototype.createFormGroupValidators = /**
         * createFormGroupValidators
         *
         * FormGroup Validators are used for validation that involves more than one FormControl. ie. When a control
         * depends on another, or we need to validate a group of controls together. Validation for multiply controls is
         * required on the common ancestor as per the Angular Documentation.
         *
         * @see \@see https://angular.io/guide/form-validation#adding-to-reactive-forms-1
         *
         * // \@param {FormGroup} formGroup - Angular FormGroup
         * // \@param formGroupValidators - [{
         *    validatorFunc: 'isAnyCheckboxChecked',
         *    validationErrorId: 'reasonsConstentOrderNotApproved',
         *    checkboxes: [
         *        'partiesNeedAttend', 'NotEnoughInformation', 'orderNotAppearOfS25ca1973', 'd81',
         *        'pensionAnnex', 'applicantTakenAdvice', 'respondentTakenAdvice', 'Other2'
         *    ]}]
         * @param {?} formGroup
         * @param {?} formGroupValidators
         * @return {?}
         */
            function (formGroup, formGroupValidators) {
                var _this = this;
                return formGroupValidators.map(function (formGroupValidator) {
                    /** @type {?} */
                    var groupValidator = formGroupValidator;
                    return _this.createFormGroupValidator(formGroup, groupValidator.validatorFunc, groupValidator.controls, groupValidator.validationErrorId);
                });
            };
        /**
         * createFormGroupValidator
         *
         * You'll need to pass in the name of the validator function that you wish to use.
         *
         * @see state_meta.js
         *
         * // @param formGroup
         * // @param {String} validatorFunc - 'isAnyCheckboxChecked'
         * // @param {Array or Object} controls - ['partiesNeedAttend', 'NotEnoughInformation'] or { checkbox: 'controlName', textarea: 'controlName' }
         * // @param {String} validationErrorId - 'reasonsConstentOrderNotApproved'
         *
         * // @return {ValidatorFn}
         */
        /**
         * createFormGroupValidator
         *
         * You'll need to pass in the name of the validator function that you wish to use.
         *
         * @see state_meta.js
         *
         * // \@param formGroup
         * // \@param {String} validatorFunc - 'isAnyCheckboxChecked'
         * // \@param {Array or Object} controls - ['partiesNeedAttend', 'NotEnoughInformation'] or { checkbox: 'controlName', textarea: 'controlName' }
         * // \@param {String} validationErrorId - 'reasonsConstentOrderNotApproved'
         *
         * // \@return {ValidatorFn}
         * @param {?} formGroup
         * @param {?} validatorFunc
         * @param {?} controls
         * @param {?} validationErrorId
         * @return {?}
         */
        ValidationService.prototype.createFormGroupValidator = /**
         * createFormGroupValidator
         *
         * You'll need to pass in the name of the validator function that you wish to use.
         *
         * @see state_meta.js
         *
         * // \@param formGroup
         * // \@param {String} validatorFunc - 'isAnyCheckboxChecked'
         * // \@param {Array or Object} controls - ['partiesNeedAttend', 'NotEnoughInformation'] or { checkbox: 'controlName', textarea: 'controlName' }
         * // \@param {String} validationErrorId - 'reasonsConstentOrderNotApproved'
         *
         * // \@return {ValidatorFn}
         * @param {?} formGroup
         * @param {?} validatorFunc
         * @param {?} controls
         * @param {?} validationErrorId
         * @return {?}
         */
            function (formGroup, validatorFunc, controls, validationErrorId) {
                return this[validatorFunc](formGroup, controls, validationErrorId);
            };
        ValidationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ValidationService.ctorParameters = function () {
            return [
                { type: i1.DatePipe }
            ];
        };
        /** @nocollapse */ ValidationService.ngInjectableDef = i0.defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.inject(i1.DatePipe)); }, token: ValidationService, providedIn: "root" });
        return ValidationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormsService = (function () {
        function FormsService(validationService) {
            this.validationService = validationService;
            this.FormControls = [];
        }
        /**
         * Creation of FormControls for a FormGroup.
         * So first thing is how do we add Validation to a FormControl
         *
         * prop can be a fieldset, legend, text, idPrefix, name, header, checkboxes, if we
         *
         * Here is where the validation is applied to each of the controls of the form, based on the validators that
         * have been plaed into the state_meta.js.
         *
         * TODO: Name this something totally different, as create doesn't really explain what it does,
         * also there it's quite hard to work out.
         *
         * @param someJson
         * @param someData
         */
        /**
         * Creation of FormControls for a FormGroup.
         * So first thing is how do we add Validation to a FormControl
         *
         * prop can be a fieldset, legend, text, idPrefix, name, header, checkboxes, if we
         *
         * Here is where the validation is applied to each of the controls of the form, based on the validators that
         * have been plaed into the state_meta.js.
         *
         * TODO: Name this something totally different, as create doesn't really explain what it does,
         * also there it's quite hard to work out.
         *
         * @param {?} someJson
         * @param {?} someData
         * @return {?}
         */
        FormsService.prototype.create = /**
         * Creation of FormControls for a FormGroup.
         * So first thing is how do we add Validation to a FormControl
         *
         * prop can be a fieldset, legend, text, idPrefix, name, header, checkboxes, if we
         *
         * Here is where the validation is applied to each of the controls of the form, based on the validators that
         * have been plaed into the state_meta.js.
         *
         * TODO: Name this something totally different, as create doesn't really explain what it does,
         * also there it's quite hard to work out.
         *
         * @param {?} someJson
         * @param {?} someData
         * @return {?}
         */
            function (someJson, someData) {
                if (typeof someJson === 'object') {
                    for (var prop in someJson) {
                        if (prop === 'control') {
                            if (someJson.radioGroup !== undefined) {
                                // RadioButton Logic
                                if (Object.keys(someData).length !== 0) {
                                    try {
                                        for (var _a = __values(someJson.radioGroup), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            var radioEl = _b.value;
                                            if (radioEl.value === someData[someJson.control]) {
                                                this.FormControls[someJson.control] = new forms.FormControl(radioEl.value);
                                                break;
                                            }
                                            else {
                                                this.createFormControl(null, someJson.control, someJson.validators);
                                            }
                                        }
                                    }
                                    catch (e_1_1) {
                                        e_1 = { error: e_1_1 };
                                    }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_c = _a.return))
                                                _c.call(_a);
                                        }
                                        finally {
                                            if (e_1)
                                                throw e_1.error;
                                        }
                                    }
                                }
                                else {
                                    this.FormControls[someJson.control] = new forms.FormControl();
                                }
                            }
                            else {
                                if (someData[someJson.control]) {
                                    this.FormControls[someJson.control] = new forms.FormControl(someData[someJson.control]);
                                }
                                else {
                                    this.createFormControl(someJson.value, someJson.control, someJson.validators);
                                }
                            }
                        }
                        this.create(someJson[prop], someData);
                    }
                }
                if (someJson !== undefined && someJson.isArray) {
                    try {
                        for (var someJson_1 = __values(someJson), someJson_1_1 = someJson_1.next(); !someJson_1_1.done; someJson_1_1 = someJson_1.next()) {
                            var item = someJson_1_1.value;
                            this.create(someJson[item], someData);
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (someJson_1_1 && !someJson_1_1.done && (_d = someJson_1.return))
                                _d.call(someJson_1);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                }
                var e_1, _c, e_2, _d;
            };
        /**
         * Creates a new `FormControl` instance.
         * @param controlName - 'informationNeeded'
         * @param initialValue - ie. text if it's a textarea.
         */
        /**
         * Creates a new `FormControl` instance.
         * @param {?} initialValue - ie. text if it's a textarea.
         * @param {?} controlName - 'informationNeeded'
         * @param {?} validators
         * @return {?}
         */
        FormsService.prototype.createFormControl = /**
         * Creates a new `FormControl` instance.
         * @param {?} initialValue - ie. text if it's a textarea.
         * @param {?} controlName - 'informationNeeded'
         * @param {?} validators
         * @return {?}
         */
            function (initialValue, controlName, validators) {
                if (this.validationService.controlHasValidation(validators)) {
                    this.FormControls[controlName] = new forms.FormControl(initialValue, this.validationService.getNgValidators(validators));
                    return;
                }
                this.FormControls[controlName] = new forms.FormControl(initialValue);
            };
        /**
         * @param {?} someJson
         * @param {?} someData
         * @return {?}
         */
        FormsService.prototype.defineformControls = /**
         * @param {?} someJson
         * @param {?} someData
         * @return {?}
         */
            function (someJson, someData) {
                this.FormControls = [];
                this.create(someJson, someData);
                return this.FormControls;
            };
        FormsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FormsService.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        /** @nocollapse */ FormsService.ngInjectableDef = i0.defineInjectable({ factory: function FormsService_Factory() { return new FormsService(i0.inject(ValidationService)); }, token: FormsService, providedIn: "root" });
        return FormsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Form Builder Wrapper
     * Component accepts pageItems and pageValues for From Builder to process
     * and it emits form data to it's parent component.
     */
    var FromBuilderComponent = (function () {
        function FromBuilderComponent(formsService, validationService) {
            this.formsService = formsService;
            this.validationService = validationService;
            this.submitPage = new i0.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FromBuilderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["pageItems"] && changes["pageItems"].currentValue) {
                    this.createForm();
                }
            };
        /**
         * @return {?}
         */
        FromBuilderComponent.prototype.createForm = /**
         * @return {?}
         */
            function () {
                this.formDraft = new forms.FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));
                this.setValidators();
            };
        /**
         * @return {?}
         */
        FromBuilderComponent.prototype.setValidators = /**
         * @return {?}
         */
            function () {
                if (this.pageItems) {
                    /** @type {?} */
                    var formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, this.pageItems.formGroupValidators);
                    this.formDraft.setValidators(formGroupValidators);
                }
            };
        /**
         * @return {?}
         */
        FromBuilderComponent.prototype.onFormSubmit = /**
         * @return {?}
         */
            function () {
                this.submitPage.emit(this.formDraft);
            };
        FromBuilderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-form-builder',
                        template: "<ng-container *ngIf=\"isPageValid && formDraft.invalid\">\n  <app-validation-header [validationHeaderErrorMessages]=\"this.pageItems.validationHeaderErrorMessages\" [formGroup]=\"formDraft\">\n  </app-validation-header>\n</ng-container>\n\n<form *ngIf=\"pageItems\" [formGroup]=\"formDraft\" (ngSubmit)=\"onFormSubmit()\">\n  <div [ngClass]=\"{'govuk-form-group':true, 'govuk-form-group--error' : isPageValid && formDraft.invalid }\">\n    <h1 class=\"govuk-heading-xl\">\n      <span *ngIf=\"pageItems.caption\" [class]=\"pageItems.caption.classes\">{{ pageItems.caption.text }}</span>\n      {{pageItems.header}}\n    </h1>\n    <div class=\"govuk-form-group\" *ngFor=\"let group of pageItems.groups\">\n      <app-fieldset *ngIf=\"group.fieldset\"\n                    [classes]=\"'govuk-fieldset'\"\n                    [group]=\"formDraft\"\n                    [data]=\"group.fieldset\"\n                    [validate]=\"isPageValid\">\n      </app-fieldset>\n      <app-jui-form-elements [group]=\"formDraft\" [validate]=\"isPageValid\" [data]=\"group\"></app-jui-form-elements>\n    </div>\n  </div>\n</form>\n"
                    },] },
        ];
        /** @nocollapse */
        FromBuilderComponent.ctorParameters = function () {
            return [
                { type: FormsService },
                { type: ValidationService }
            ];
        };
        FromBuilderComponent.propDecorators = {
            pageItems: [{ type: i0.Input }],
            pageValues: [{ type: i0.Input }],
            isPageValid: [{ type: i0.Input }],
            submitPage: [{ type: i0.Output }]
        };
        return FromBuilderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FieldsetComponent = (function () {
        function FieldsetComponent() {
        }
        FieldsetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-fieldset',
                        template: "<fieldset [attr.validate]=\"validate\" [class]=\"classes\" [attr.data]=\"data\" [attr.group]=\"group\">\n    <ng-container *ngFor=\"let item of data\">\n        <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"item\"></app-jui-form-elements>\n    </ng-container>\n    <ng-content></ng-content>\n</fieldset>\n"
                    },] },
        ];
        FieldsetComponent.propDecorators = {
            classes: [{ type: i0.Input }],
            validate: [{ type: i0.Input }],
            group: [{ type: i0.Input }],
            data: [{ type: i0.Input }]
        };
        return FieldsetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JuiFormElementsComponent = (function () {
        function JuiFormElementsComponent() {
        }
        JuiFormElementsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-jui-form-elements',
                        template: "<div [attr.validate]=\"validate\" [attr.data]=\"data\" [attr.group]=\"group\">\n  <!--JUI FORM builder component -->\n  <app-legend *ngIf=\"data.legend\" [classes]=\"data.legend.classes\">\n    {{data.legend.text}}\n  </app-legend>\n  <app-hint *ngIf=\"data.hint\" [classes]=\"data.hint.classes\">\n    {{data.hint.text}}\n  </app-hint>\n  <ng-container *ngIf=\"data.validationError && validate\">\n    <app-validation-error-formgroup [group]=\"group\" [validationErrorId]=\"data.validationError.identifier\">\n      {{data.validationError.value}}\n    </app-validation-error-formgroup>\n  </ng-container>\n  <app-date *ngIf=\"data.date\"\n            [id]=\"data.date.formName\"\n            [data]=\"data.date\"\n            [group]=\"group\"\n            [validate]=\"validate\"\n            [validationError]=\"data.date.validationError\">\n  </app-date>\n  <app-inputs *ngIf=\"data.input\"\n              [item]=\"data.input\"\n              [showValidation]=\"validate\"\n              [validationError]=\"data.input.validationError\"\n              [group]=\"group\"\n              [hint]=\"data.input.hint\"\n              [label]=\"data.input.label\"\n              [labelFor]=\"data.input.control\"></app-inputs>\n  <app-radiobutton *ngIf=\"data.radios\" [classes]=\"'govuk-radios ' + data.radios.classes\"\n                   [items]=\"data.radios.radioGroup\"\n                   [group]=\"group\"\n                   [control]=\"data.radios.control\"\n                   [idPrefix]=\"data.radios.control\"\n                   [validate]=\"validate\"\n                   [showValidation]=\"validate\"\n                   [validationError]=\"data.radios.validationError\">\n  </app-radiobutton>\n  <div *ngIf=\"data.checkbox\" class=\"govuk-checkboxes\">\n    <app-checkbox [group]=\"group\"\n                  [validate]=\"validate\"\n                  [idPrefix]=\"data.checkbox.control\"\n                  [items]=\"data.checkbox\"\n                  [classes]=\"'govuk-checkboxes__item'\"\n                  [labelClasses]=\"'govuk-label govuk-checkboxes__label'\">\n      <div class=\"govuk-form-group\">\n        <div *ngIf=\"data.checkbox.groups && group.controls[data.checkbox.control].value\" class=\"govuk-checkboxes__conditional\"\n             [ngStyle] = \"{ 'border-left': (validate && group.invalid) ? '5px solid #b10e1e' : '' }\">\n          <ng-container  *ngFor=\"let subgroup of data.checkbox.groups\">\n            <app-fieldset *ngIf=\"subgroup.fieldset\"\n                          [validate]=\"validate\"\n                          [classes]=\"'govuk-fieldset'\"\n                          [group]=\"group\"\n                          [data]=\"subgroup.fieldset\"\n            >\n            </app-fieldset>\n            <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"subgroup\"></app-jui-form-elements>\n          </ng-container>\n        </div>\n      </div>\n    </app-checkbox>\n  </div>\n\n  <app-textareas *ngIf=\"data.textarea\" [classes]=\"'govuk-textarea'\"\n                 [showValidation]=\"validate\"\n                 [validationError]=\"data.textarea.validationError\"\n                 [group]=\"group\"\n                 [control]=\"data.textarea.control\"\n                 [label]=\"data.textarea.label\"\n                 [labelFor]=\"data.textarea.control\"\n                 [rows]=\"5\">\n  </app-textareas>\n  <app-buttons *ngIf=\"data.button\"\n               [classes]=\"'govuk-button'\"\n               [typeBtn]=\"data.button.type\"\n               [group]=\"group\"\n               [control]=\"data.button.control\"\n               [value]=\"data.button.value\">\n  </app-buttons>\n  <!--JUI FORM builder component -->\n</div>\n"
                    },] },
        ];
        JuiFormElementsComponent.propDecorators = {
            group: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            validate: [{ type: i0.Input }]
        };
        return JuiFormElementsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LegendComponent = (function () {
        function LegendComponent() {
        }
        LegendComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-legend',
                        template: "<legend [class]=\"'govuk-fieldset__legend ' + classes\">\n    <ng-content></ng-content>\n</legend>\n"
                    },] },
        ];
        LegendComponent.propDecorators = {
            classes: [{ type: i0.Input }]
        };
        return LegendComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HintComponent = (function () {
        function HintComponent() {
        }
        HintComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-hint',
                        template: "<span [class]=\"classes\">\n    <ng-content></ng-content>\n</span>\n",
                        styles: [""]
                    },] },
        ];
        HintComponent.propDecorators = {
            classes: [{ type: i0.Input }]
        };
        return HintComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DateComponent = (function () {
        function DateComponent() {
        }
        DateComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-date',
                        template: "<ng-container>\n    <app-validation-error-formgroup *ngIf=\"data.validationError && validate\" [group]=\"group\" [validationErrorId]=\"data.validationError.identifier\">\n        {{data.validationError.value}}\n    </app-validation-error-formgroup>\n    <div class=\"govuk-date-input\" [id]=\"id\" [attr.data]=\"data\">\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.day.input\"\n                            [group]=\"group\"\n                            [label]=\"data.day.input.label\"\n                            [labelFor]=\"data.day.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.month.input\"\n                            [group]=\"group\"\n                            [label]=\"data.month.input.label\"\n                            [labelFor]=\"data.month.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.year.input\"\n                            [group]=\"group\"\n                            [label]=\"data.year.input.label\"\n                            [labelFor]=\"data.year.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n    </div>\n</ng-container>\n"
                    },] },
        ];
        DateComponent.propDecorators = {
            group: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            validate: [{ type: i0.Input }],
            showValidation: [{ type: i0.Input }],
            validationError: [{ type: i0.Input }]
        };
        return DateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputsComponent = (function () {
        function InputsComponent(validationService) {
            this.validationService = validationService;
        }
        /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * //@param showValidation
         * //@param formGroup
         * //@param control
         * //@return {boolean}
         */
        /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * //\@param showValidation
         * //\@param formGroup
         * //\@param control
         * //\@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @param {?} showValidation
         * @return {?}
         */
        InputsComponent.prototype.isControlInvalidAndShowValidation = /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * //\@param showValidation
         * //\@param formGroup
         * //\@param control
         * //\@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @param {?} showValidation
         * @return {?}
         */
            function (formGroup, control, showValidation) {
                return !this.isFormControlValid(formGroup, control) && showValidation;
            };
        /**
         * Checks if this control is valid.
         *
         *  ValidationService
         */
        /**
         * Checks if this control is valid.
         *
         *  ValidationService
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
        InputsComponent.prototype.isFormControlValid = /**
         * Checks if this control is valid.
         *
         *  ValidationService
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
            function (formGroup, control) {
                return this.validationService.isFormControlValid(formGroup, control);
            };
        InputsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-inputs',
                        template: "<ng-container [formGroup]=\"group\">\n  <app-label [forElement]=\"labelFor\">{{label.text}}\n  </app-label>\n  <app-hint *ngIf=\"hint\" [classes]=\"hint.classes\">\n    {{hint.text}}\n  </app-hint>\n  <ng-container *ngIf=\"validationError\">\n    <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"item.control\" id=\"{{item.control}}\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <input [class]=\"'govuk-input ' + item.classes\"\n         [formControlName]=\"item.control\"\n         [id]=\"item.control\"\n         [name]=\"item.control\"\n         [ngClass]=\"{'govuk-input--error':isControlInvalidAndShowValidation(group, item.control, showValidation)}\"\n         type=\"text\">\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        InputsComponent.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        InputsComponent.propDecorators = {
            group: [{ type: i0.Input }],
            item: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            labelFor: [{ type: i0.Input }],
            showValidation: [{ type: i0.Input }],
            validationError: [{ type: i0.Input }]
        };
        return InputsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RadiobuttonComponent = (function () {
        function RadiobuttonComponent() {
            this.idPrefix = 'rb';
            this.name = 'rb';
        }
        RadiobuttonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-radiobutton',
                        template: "<ng-container>\n  <ng-container *ngIf=\"validationError\">\n      <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"control\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <div [class]=\"classes\" [formGroup]=\"group\">\n      <ng-container *ngFor=\"let data of items; let i = index\">\n        <div *ngIf=\"data.devider\" class=\"govuk-radios__divider\">{{data.devider}}</div>\n        <div *ngIf=\"!data.devider\" class=\"govuk-radios__item\">\n            <input class=\"govuk-radios__input\" id=\"{{control + data.value}}\" [formControlName]=\"control\" type=\"radio\" [value]= \"data.value\">\n            <label class=\"govuk-label govuk-radios__label\" for=\"{{control + data.value}}\">\n                {{data.text}}\n            </label>\n            <ul *ngIf=\"data.list\" [class]=\"'govuk-list' + data.list.classes\">\n              <li *ngFor=\"let item of data.list.text\">{{ item }}</li>\n            </ul>\n            <app-hint *ngIf=\"data.hint\" [classes]=\"data.hint.classes\">\n                {{data.hint.text}}\n            </app-hint>\n        </div>\n        <div class=\"govuk-form-group\">\n            <div *ngIf=\"data.groups && group.value[control]===data.value\" class=\"govuk-radios__conditional\">\n                <ng-container *ngFor=\"let subgroup of data.groups\">\n                    <app-fieldset *ngIf=\"subgroup.fieldset\"\n                                  [classes]=\"'govuk-fieldset'\"\n                                  [group]=\"group\"\n                                  [data]=\"subgroup.fieldset\"\n                                  [validate]=\"validate\"\n                                  >\n                    </app-fieldset>\n                    <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"subgroup\"></app-jui-form-elements>\n                </ng-container>\n            </div>\n        </div>\n      </ng-container>\n  </div>\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        RadiobuttonComponent.ctorParameters = function () { return []; };
        RadiobuttonComponent.propDecorators = {
            group: [{ type: i0.Input }],
            idPrefix: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            classes: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            validate: [{ type: i0.Input }],
            showValidation: [{ type: i0.Input }],
            validationError: [{ type: i0.Input }]
        };
        return RadiobuttonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = (function () {
        function CheckboxComponent() {
        }
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-checkbox',
                        template: "<ng-container>\n    <div  *ngIf=\"group\" class=\"govuk-checkboxes__item\" [formGroup]=\"group\">\n        <input class=\"govuk-checkboxes__input\" [formControlName]=\"items.control\" id=\"{{items.control}}\" type=\"checkbox\" [value]=\"items.value\">\n        <app-label [class]=\"labelClasses\" [forElement]=\"items.control\">{{items.text}}</app-label>\n    </div>\n    <ng-content></ng-content>\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            group: [{ type: i0.Input }],
            idPrefix: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            classes: [{ type: i0.Input }],
            labelClasses: [{ type: i0.Input }],
            validate: [{ type: i0.Input }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextareasComponent = (function () {
        function TextareasComponent(validationService) {
            this.validationService = validationService;
            this.idPrefix = 'ta';
            this.name = 'ta';
            this.id = 'ta';
        }
        /**
         * @param {?} formGroup
         * @param {?} showValidation
         * @return {?}
         */
        TextareasComponent.prototype.isGroupInvalidAndShowValidation = /**
         * @param {?} formGroup
         * @param {?} showValidation
         * @return {?}
         */
            function (formGroup, showValidation) {
                if (formGroup.errors && formGroup.errors[this.control] && showValidation) {
                    return true;
                }
                return false;
            };
        /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * // @param showValidation
         * // @param formGroup
         * // @param control
         * //@return {boolean}
         */
        /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * // \@param showValidation
         * // \@param formGroup
         * // \@param control
         * //\@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @param {?} showValidation
         * @return {?}
         */
        TextareasComponent.prototype.isControlInvalidAndShowValidation = /**
         * showValidationAndIsControlValid
         *
         * Return true if this component is required to show it's validation, and the users input is invalid.
         *
         * // \@param showValidation
         * // \@param formGroup
         * // \@param control
         * //\@return {boolean}
         * @param {?} formGroup
         * @param {?} control
         * @param {?} showValidation
         * @return {?}
         */
            function (formGroup, control, showValidation) {
                return !this.isFormControlValid(formGroup, control) && showValidation;
            };
        /**
         * Checks if this control is valid.
         *
         * @see ValidationService
         */
        /**
         * Checks if this control is valid.
         *
         * @see ValidationService
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
        TextareasComponent.prototype.isFormControlValid = /**
         * Checks if this control is valid.
         *
         * @see ValidationService
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
            function (formGroup, control) {
                return this.validationService.isFormControlValid(formGroup, control);
            };
        TextareasComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-textareas',
                        template: "<ng-container [formGroup]=\"group\">\n  <app-label\n             [forElement]=\"labelFor\">{{label.text}}\n  </app-label>\n  <ng-container *ngIf=\"validationError\">\n    <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"control\" id=\"{{control}}\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <textarea [class]=\"classes\"\n            [ngClass]=\"{'govuk-textarea--error':isControlInvalidAndShowValidation(group, control, showValidation) || isGroupInvalidAndShowValidation(group, showValidation)}\"\n            [rows]=\"rows\"\n            [id]=\"labelFor\"\n            [attr.aria-label]=\"labelFor\"\n            [formControlName]=\"control\"></textarea>\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        TextareasComponent.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        TextareasComponent.propDecorators = {
            group: [{ type: i0.Input }],
            idPrefix: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            labelFor: [{ type: i0.Input }],
            rows: [{ type: i0.Input }],
            classes: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            showValidation: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            validationError: [{ type: i0.Input }]
        };
        return TextareasComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonsComponent = (function () {
        function ButtonsComponent() {
            this.idPrefix = 'btn';
            this.name = 'btn';
        }
        /**
         * @return {?}
         */
        ButtonsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.isValid = this.group.status === 'INVALID';
                this.group.valueChanges.subscribe(function (value) {
                    _this.isValid = _this.group.status === 'INVALID';
                });
            };
        ButtonsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-buttons',
                        template: "<ng-container *ngIf=\"group\" [formGroup]=\"group\">\n    <input id=\"{{control + value}}\" [class]=\"classes\" [type]=\"typeBtn\" [formControlName]=\"control\" [value]=\"value\">\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        ButtonsComponent.ctorParameters = function () { return []; };
        ButtonsComponent.propDecorators = {
            idPrefix: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            group: [{ type: i0.Input }],
            classes: [{ type: i0.Input }],
            typeBtn: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return ButtonsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LabelComponent = (function () {
        function LabelComponent() {
        }
        LabelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-label',
                        template: "<label [attr.for]=\"forElement\"><ng-content></ng-content></label>\n"
                    },] },
        ];
        /** @nocollapse */
        LabelComponent.ctorParameters = function () { return []; };
        LabelComponent.propDecorators = {
            forElement: [{ type: i0.Input }]
        };
        return LabelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HiddenInputComponent = (function () {
        function HiddenInputComponent() {
        }
        /**
         * @return {?}
         */
        HiddenInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.componentClasses = 'govuk-input' + this.item.classes;
            };
        HiddenInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-hidden-input',
                        template: "<ng-container\n  [formGroup]=\"group\">\n    <input\n           [ngClass]=\"componentClasses\"\n           [formControlName]=\"item.control\"\n           [id]=\"item.control\"\n           [name]=\"item.control\"\n           [value]=\"value\"\n           type=\"hidden\">\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        HiddenInputComponent.ctorParameters = function () { return []; };
        HiddenInputComponent.propDecorators = {
            group: [{ type: i0.Input }],
            item: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return HiddenInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValidationHeaderComponent = (function () {
        function ValidationHeaderComponent(validationService) {
            this.validationService = validationService;
            // TODO : deprecate as not needed?
            this.idPrefix = 'ta';
            this.name = 'ta';
            // TODO : Move to constants file.
            this.FORM_CONTROL = 'formControl';
            this.FORM_GROUP = 'formGroup';
        }
        /**
         * Checks if this control is valid.
         *
         * // @see ValidationService
         * // @param control - 'informationNeeded'
         */
        /**
         * Checks if this control is valid.
         *
         * // \@see ValidationService
         * // \@param control - 'informationNeeded'
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
        ValidationHeaderComponent.prototype.isFormControlValid = /**
         * Checks if this control is valid.
         *
         * // \@see ValidationService
         * // \@param control - 'informationNeeded'
         * @param {?} formGroup
         * @param {?} control
         * @return {?}
         */
            function (formGroup, control) {
                return this.validationService.isFormControlValid(formGroup, control);
            };
        /**
         * isFormGroupInvalid
         *
         * // @param formGroup
         * // @param validationErrorId
         * // @return {boolean}
         */
        /**
         * isFormGroupInvalid
         *
         * // \@param formGroup
         * // \@param validationErrorId
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
        ValidationHeaderComponent.prototype.isFormGroupInvalid = /**
         * isFormGroupInvalid
         *
         * // \@param formGroup
         * // \@param validationErrorId
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
            function (formGroup, validationErrorId) {
                return this.validationService.isFormGroupInvalid(formGroup, validationErrorId);
            };
        /**
         * Checks if we should show a validation message for a form control, or the
         * form group.
         *
         * // @param {string} validationLevel - validation level can either be formGroup or formControl.
         * A formGroup level is validation that handles multiply form controls, when validating multiply components
         * at the same time, ie. when you wish to see if a checkbox is checked, from multiply checkboxes, you must
         * check this on a common ancestor of a set of controls. This common ancestor is always the Angular FormGroup.
         * formControl level is validation that handles a single form control.
         *
         * This abstration was based on how Angular 6's FormGroup and FormControl are abstract from each other,
         * after reading.
         *
         * // @param controlId
         * // @return {boolean}
         */
        /**
         * Checks if we should show a validation message for a form control, or the
         * form group.
         *
         * // \@param {string} validationLevel - validation level can either be formGroup or formControl.
         * A formGroup level is validation that handles multiply form controls, when validating multiply components
         * at the same time, ie. when you wish to see if a checkbox is checked, from multiply checkboxes, you must
         * check this on a common ancestor of a set of controls. This common ancestor is always the Angular FormGroup.
         * formControl level is validation that handles a single form control.
         *
         * This abstration was based on how Angular 6's FormGroup and FormControl are abstract from each other,
         * after reading.
         *
         * // \@param controlId
         * // \@return {boolean}
         * @param {?} validationLevel
         * @param {?} level
         * @return {?}
         */
        ValidationHeaderComponent.prototype.isValidationLevel = /**
         * Checks if we should show a validation message for a form control, or the
         * form group.
         *
         * // \@param {string} validationLevel - validation level can either be formGroup or formControl.
         * A formGroup level is validation that handles multiply form controls, when validating multiply components
         * at the same time, ie. when you wish to see if a checkbox is checked, from multiply checkboxes, you must
         * check this on a common ancestor of a set of controls. This common ancestor is always the Angular FormGroup.
         * formControl level is validation that handles a single form control.
         *
         * This abstration was based on how Angular 6's FormGroup and FormControl are abstract from each other,
         * after reading.
         *
         * // \@param controlId
         * // \@return {boolean}
         * @param {?} validationLevel
         * @param {?} level
         * @return {?}
         */
            function (validationLevel, level) {
                return validationLevel === level;
            };
        ValidationHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-validation-header',
                        template: "<div class=\"govuk-error-summary\" aria-labelledby=\"error-summary-title\" role=\"alert\" tabindex=\"-1\"\n     data-module=\"error-summary\">\n  <h2 class=\"govuk-error-summary__title\" id=\"error-summary-title\">\n    There is a problem\n  </h2>\n  <div class=\"govuk-error-summary__body\">\n    <ul class=\"govuk-list govuk-error-summary__list\">\n      <li *ngFor=\"let validationHeaderErrorMessage of validationHeaderErrorMessages\">\n        <ng-container *ngIf=\"isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_CONTROL) &&\n                                        !isFormControlValid(formGroup, validationHeaderErrorMessage.controlId)\">\n          <a routerLink=\"./\" fragment=\"{{validationHeaderErrorMessage.href}}\">{{validationHeaderErrorMessage.text}}</a>\n        </ng-container>\n        <ng-container\n          *ngIf=\"isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_GROUP) &&\n                                isFormGroupInvalid(formGroup, validationHeaderErrorMessage.formGroupValidationErrorId)\">\n          <a routerLink=\"./\" fragment=\"{{validationHeaderErrorMessage.href}}\">{{validationHeaderErrorMessage.text}}</a>\n        </ng-container>\n      </li>\n    </ul>\n  </div>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        ValidationHeaderComponent.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        ValidationHeaderComponent.propDecorators = {
            formGroup: [{ type: i0.Input }],
            controlId: [{ type: i0.Input }],
            idPrefix: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            validationHeaderErrorMessages: [{ type: i0.Input }]
        };
        return ValidationHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValidationErrorFormControlComponent = (function () {
        function ValidationErrorFormControlComponent(validationService) {
            this.validationService = validationService;
        }
        /**
         * Is Form Control Valid
         *
         * TODO: Unit
         *
         * // @see ValidationService
         * // @param {FormGroup} formGroup
         * // @param {string} controlId - ie. 'informationNeeded'
         * // @return {boolean}
         */
        /**
         * Is Form Control Valid
         *
         * TODO: Unit
         *
         * // \@see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} controlId - ie. 'informationNeeded'
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} controlId
         * @return {?}
         */
        ValidationErrorFormControlComponent.prototype.isFormControlValid = /**
         * Is Form Control Valid
         *
         * TODO: Unit
         *
         * // \@see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} controlId - ie. 'informationNeeded'
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} controlId
         * @return {?}
         */
            function (formGroup, controlId) {
                return this.validationService.isFormControlValid(formGroup, controlId);
            };
        ValidationErrorFormControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-validation-error-formcontrol',
                        template: "<ng-container [formGroup]=\"group\" *ngIf=\"!isFormControlValid(group, controlId)\" >\n    <span id=\"{{controlId}}\" class=\"govuk-error-message\" >\n        <ng-content></ng-content>\n    </span>\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        ValidationErrorFormControlComponent.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        ValidationErrorFormControlComponent.propDecorators = {
            group: [{ type: i0.Input }],
            controlId: [{ type: i0.Input }]
        };
        return ValidationErrorFormControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValidationErrorFormGroupComponent = (function () {
        function ValidationErrorFormGroupComponent(validationService) {
            this.validationService = validationService;
        }
        /**
         * Is Form Group Invalid
         *
         * TODO : Unit Test
         *
         * // @see ValidationService
         * // @param {FormGroup} formGroup
         * // @param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // @return {boolean}
         */
        /**
         * Is Form Group Invalid
         *
         * TODO : Unit Test
         *
         * // \@see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
        ValidationErrorFormGroupComponent.prototype.isFormGroupInvalid = /**
         * Is Form Group Invalid
         *
         * TODO : Unit Test
         *
         * // \@see ValidationService
         * // \@param {FormGroup} formGroup
         * // \@param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
         * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
         * need to pass this in once the Universal Form Builder is merged with Validation.
         * // \@return {boolean}
         * @param {?} formGroup
         * @param {?} validationErrorId
         * @return {?}
         */
            function (formGroup, validationErrorId) {
                return this.validationService.isFormGroupInvalid(formGroup, validationErrorId);
            };
        ValidationErrorFormGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-validation-error-formgroup',
                        template: "<ng-container [formGroup]=\"group\" *ngIf=\"isFormGroupInvalid(group, validationErrorId)\" >\n    <span id=\"{{validationErrorId}}\" class=\"govuk-error-message\">\n        <ng-content></ng-content>\n    </span>\n</ng-container>\n"
                    },] },
        ];
        /** @nocollapse */
        ValidationErrorFormGroupComponent.ctorParameters = function () {
            return [
                { type: ValidationService }
            ];
        };
        ValidationErrorFormGroupComponent.propDecorators = {
            group: [{ type: i0.Input }],
            validationErrorId: [{ type: i0.Input }]
        };
        return ValidationErrorFormGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        FromBuilderComponent,
        FieldsetComponent,
        ValidationErrorFormGroupComponent,
        FromBuilderComponent,
        FieldsetComponent,
        JuiFormElementsComponent,
        LegendComponent,
        HintComponent,
        DateComponent,
        InputsComponent,
        RadiobuttonComponent,
        CheckboxComponent,
        TextareasComponent,
        ButtonsComponent,
        LabelComponent,
        HiddenInputComponent,
        ValidationHeaderComponent,
        ValidationErrorFormControlComponent,
        HmctsFormBuilderComponent
    ];
    /** @type {?} */
    var SERVICES = [
        FormsService,
        ValidationService,
        i1.DatePipe
    ];
    var HmctsFormBuilderModule = (function () {
        function HmctsFormBuilderModule() {
        }
        HmctsFormBuilderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            forms.FormsModule,
                            router.RouterModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                        providers: __spread(SERVICES)
                    },] },
        ];
        return HmctsFormBuilderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.HmctsFormBuilderService = HmctsFormBuilderService;
    exports.HmctsFormBuilderComponent = HmctsFormBuilderComponent;
    exports.HmctsFormBuilderModule = HmctsFormBuilderModule;
    exports.FromBuilderComponent = FromBuilderComponent;
    exports.FieldsetComponent = FieldsetComponent;
    exports.JuiFormElementsComponent = JuiFormElementsComponent;
    exports.LegendComponent = LegendComponent;
    exports.HintComponent = HintComponent;
    exports.DateComponent = DateComponent;
    exports.InputsComponent = InputsComponent;
    exports.RadiobuttonComponent = RadiobuttonComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.TextareasComponent = TextareasComponent;
    exports.ButtonsComponent = ButtonsComponent;
    exports.LabelComponent = LabelComponent;
    exports.HiddenInputComponent = HiddenInputComponent;
    exports.ValidationHeaderComponent = ValidationHeaderComponent;
    exports.ValidationErrorFormControlComponent = ValidationErrorFormControlComponent;
    exports.ValidationErrorFormGroupComponent = ValidationErrorFormGroupComponent;
    exports.FormsService = FormsService;
    exports.ValidationService = ValidationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1ucG0tbW9kdWxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9obWN0cy1mb3JtLWJ1aWxkZXIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9obWN0cy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIixudWxsLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2Zvcm0tYnVpbGRlci9mcm9tLWJ1aWxkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvanVpLWZvcm0tZWxlbWVudHMvanVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvaGlkZGVuLWlucHV0L2hpZGRlbi1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWhlYWRlci92YWxpZGF0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2htY3RzLWhtY3RzLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBobWN0cy1mb3JtLWJ1aWxkZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybSwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdG9ycywgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtjb250cm9sc2lzVGV4dEFyZWFWYWxpZFdoZW5DaGVja2JveENoZWNrZWQsIGNvbnRyb2xzUmFkaW9Db25kaXRpb25hbE1vZGVsLCBGb3JtR3JvdXBWYWxpZGF0b3J9IGZyb20gJy4vZm9ybS1ncm91cC12YWxpZGF0aW9uLnR5cGVzY3JpcHQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG5cclxuICAvLyBGT1IgU0lOR0xFIENPTlRST0xTIC0gZm9ybUdyb3VwLmNvbnRyb2wgbGV2ZWwgdmFsaWRhdGlvblxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSB2YWxpZGF0b3JzIGNhbiBiZSBhZGRlZCB0byB0aGlzLlxyXG4gICAqXHJcbiAgICogVE9ETyA6IERlZmluZSBpbnRlcmZhY2UgZm9yIGFycmF5LlxyXG4gICAqIFRPRE8gOiBBZGQgYSBDdXN0b20gVmFsaWRhdG9yIGV4YW1wbGUuXHJcbiAgICpcclxuICAgKiBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9mb3JtLXZhbGlkYXRpb24jY3VzdG9tLXZhbGlkYXRvcnNcclxuICAgKi9cclxuICBuZ1ZhbGlkYXRvckZ1bmN0aW9uTWFwOiBBcnJheTxhbnk+ID0gW1xyXG4gICAge1xyXG4gICAgICBzaW1wbGVOYW1lOiAncmVxdWlyZWQnLFxyXG4gICAgICBuZ1ZhbGlkYXRvckZ1bmN0aW9uOiBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzaW1wbGVOYW1lOiAnZW1haWwnLFxyXG4gICAgICBuZ1ZhbGlkYXRvckZ1bmN0aW9uOiBWYWxpZGF0b3JzLmVtYWlsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgbWFwIG9mIGhvdyB3ZSd2ZSBtYXBwZWQgc2ltcGxlIG5hbWVzIHRvIE5nIFZhbGlkYXRvcnMsIGFuZCBpbiB0aGUgZnV0dXJlIGN1c3RvbSB2YWxpZGF0b3JzLlxyXG4gICAqXHJcbiAgICogVE9ETzogQ2hlY2sgcmV0dXJuIGluIFVuaXQgdGVzdC5cclxuICAgKlxyXG4gICAqIC8vIEByZXR1cm5BcnJheVxyXG4gICAqL1xyXG4gIGdldE5nVmFsaWRhdGlvbkZ1bmN0aW9uTWFwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmdWYWxpZGF0b3JGdW5jdGlvbk1hcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRha2VzIGluIGFuIGFycmF5IG9mIHNpbXBsZSB2YWxpZGF0aW9uIG5hbWVzLlxyXG4gICAqXHJcbiAgICogVGhlc2UgbmFtZXMgbWFwIHRvIE5nIFZhbGlkYXRpb24gZnVuY3Rpb25zLCBhbmQgY2FuIG1hcCB0byBtb3JlIGNvbXBsZXggY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLlxyXG4gICAqXHJcbiAgICogVGhpcyBhbGxvd3MgdXMgdG8gbGV2ZXJhZ2UgdGhlIHBvd2VyIG9mIE5nIFZhbGlkYXRpb24sIGFuZCBjdXN0b20gdmFsaWRhdGlvbiwgYXMgd2VsbCBhcyBnaXZpbmcgdXNcclxuICAgKiB0aGUgYWJpbGl0eSB0byBjcmVhdGUgcmV1c2FibGUgdmFsaWRhdG9ycywgdGhhdCBjYW4gYmUgdXNlZCB0aHJvdWdob3V0IG91ciBmb3Jtcy5cclxuICAgKlxyXG4gICAqIE5vdGU6IFZhbGlkYXRvcnMubWluTGVuZ3RoIHJlcXVpcmVzIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICAgKlxyXG4gICAqIFRPRE86IFVuaXQgdGVzdC5cclxuICAgKlxyXG4gICAqIEBzZWUgc3RhdGVfbWV0YVxyXG4gICAqIC8vIEBwYXJhbSB2YWxpZGF0b3JzIC0gaWUuIFsncmVxdWlyZWQnLCAnZW1haWwnXVxyXG4gICAqL1xyXG4gIGdldE5nVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+KTogYW55W10ge1xyXG5cclxuICAgIGNvbnN0IG5nVmFsaWRhdG9yczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yTmFtZSkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IG5nVmFsaWRhdG9yRnVuY3Rpb24gb2YgdGhpcy5nZXROZ1ZhbGlkYXRpb25GdW5jdGlvbk1hcCgpKSB7XHJcbiAgICAgICAgaWYgKG5nVmFsaWRhdG9yRnVuY3Rpb24uc2ltcGxlTmFtZSA9PT0gdmFsaWRhdG9yTmFtZSkge1xyXG4gICAgICAgICAgbmdWYWxpZGF0b3JzLnB1c2gobmdWYWxpZGF0b3JGdW5jdGlvbi5uZ1ZhbGlkYXRvckZ1bmN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBuZ1ZhbGlkYXRvcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdmFsaWRhdG9ycyBoYXZlIGJlZW4gc2V0IG9uIHRoZSBjb250cm9sLCBhbiBleGFtcGxlIG9mIGEgdmFsaWRhdG9yIGJlaW5nIHNldCBvbiBhIGNvbnRyb2wgaXM6XHJcbiAgICpcclxuICAgKiB7XHJcbiAgICAgKiAgY29udHJvbDogJ2luZm9ybWF0aW9uTmVlZGVkJyxcclxuICAgICAqICB2YWx1ZTogJ0luZm9ybWF0aW9uIHRleHQnLFxyXG4gICAgICogIHZhbGlkYXRvcnM6IFsncmVxdWlyZWQnXVxyXG4gICAgICogfVxyXG4gICAqXHJcbiAgICogVE9ETzogVW5pdCB0ZXN0LlxyXG4gICAqXHJcbiAgICogLy9AcGFyYW0ge0FycmF5fSB2YWxpZGF0b3JzIC0gWydyZXF1aXJlZCddXHJcbiAgICogLy9AcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGNvbnRyb2xIYXNWYWxpZGF0aW9uKHZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gdmFsaWRhdG9ycyAmJiB2YWxpZGF0b3JzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGNvbnRyb2wgaXMgdmFsaWQuXHJcbiAgICpcclxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiwgYmFzZWQgb24gaWYgdGhlIGNvbnRyb2wgd2hpY2ggaXMgcGFydFxyXG4gICAqIG9mIGEgZm9ybSBncm91cCBpcyB2YWxpZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBUT0RPOiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIHtTdHJpbmd9IGNvbnRyb2wgLSAnaW5mb3JtYXRpb25OZWVkZWQnXHJcbiAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgIHJldHVybiBmb3JtR3JvdXAuZ2V0KGNvbnRyb2wpLnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgLy8gRk9SIE1VTFRJUExZIENPTlRST0xTIC0gZm9ybUdyb3VwIGxldmVsIHZhbGlkYXRpb24uXHJcbiAgLyoqXHJcbiAgICogSXMgRm9ybSBHcm91cCBJbnZhbGlkXHJcbiAgICpcclxuICAgKiBDaGVja3MgaWYgYSB2YWxpZGF0aW9uIGVycm9yIGhhcyBiZWVuIHRocm93biBvbiB0aGUgcGFnZXMgQW5ndWxhciBGb3JtR3JvdXAuXHJcbiAgICpcclxuICAgKiBGb3JtR3JvdXAgaXMgYSB0aGUgcGFyZW50IG9mIEZvcm1Db250cm9scywgYW5kIHRoZXJlZm9yZSBhbmQgYWNjb3JkaW5nIHRvIHRoZSBBbmd1bGFyXHJcbiAgICogRG9jcyB0aGUgYmVzdCBwbGFjZSB0byB2YWxpZGF0ZSBhZ2FpbnN0IG11bHRpcGx5IGNvbnRyb2xzLCB0aGF0IGhhdmUgZGVwZW5kZW5jaWVzIHVwb24gb25lXHJcbiAgICogYW5vdGhlciBpcyBvbiB0aGUgRm9ybUdyb3VwIGxldmVsLlxyXG4gICAqXHJcbiAgICogQW4gZXhhbXBsZSBiZWluZzsgd2Ugc2hvdWxkIGNoZWNrIGlmIGEgdXNlciBoYXMgY2hlY2tlZCBvbmUgb2YgZWlnaHQgY2hlY2tib3hlcy5cclxuICAgKlxyXG4gICAqIFRPRE8gOiBVbml0IFRlc3RcclxuICAgKlxyXG4gICAqIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25FcnJvcklkIC0gaWUuICdyZWFzb25zQ29uc3RlbnRPcmRlck5vdEFwcHJvdmVkJyAtIFRoaXMgaXMgdGhlIHZhbGlkYXRpb24gaWRlbnRpZmllclxyXG4gICAqIHdlIGFzc2lnbiB0byBhIGdyb3VwIG9mIGZvcm0gY29udHJvbHMsIHdlIGFzc2lnbiB0aGlzIHdoZW4gd2UgY3VycmVudGx5IHNldFZhbGlkYXRvcnMoKSwgbm90ZSB0aGF0IHdlIHdpbGxcclxuICAgKiBuZWVkIHRvIHBhc3MgdGhpcyBpbiBvbmNlIHRoZSBVbml2ZXJzYWwgRm9ybSBCdWlsZGVyIGlzIG1lcmdlZCB3aXRoIFZhbGlkYXRpb24uXHJcbiAgICogLy8gQHJldHVybntib29sZWFufVxyXG4gICAqL1xyXG4gIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXA6IGFueSwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZvcm1Hcm91cC5lcnJvcnMgJiYgZm9ybUdyb3VwLmVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3JJZCkpIHtcclxuICAgICAgcmV0dXJuIGZvcm1Hcm91cC5lcnJvcnNbdmFsaWRhdGlvbkVycm9ySWRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpc0FueUNoZWNrYm94Q2hlY2tlZFxyXG4gICAqXHJcbiAgICogQ2hlY2tzIGlmIGFueSBvZiB0aGUgY2hlY2tib3ggY29udHJvbHMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gYXJlIGNoZWNrZWQgaWUuIGhhdmUgYSBib29sZWFuIHZhbHVlXHJcbiAgICogb2YgdHJ1ZS5cclxuICAgKlxyXG4gICAqIFRoaXMgaXMgZHVlIHRvIHRoZSBmYWN0IHRoYXQgd2UgbWlnaHQgaGF2ZSBtdWx0aXBseSBjaGVja2JveGVzIHdpdGhpbiB0aGUgdmlldywgYW5kIHRoZSB1c2VyIG5lZWRzIHRvXHJcbiAgICogc2VsZWN0IGF0IGxlYXN0IG9uZSBvZiB0aGVzZSBjaGVja2JveGVzIHRvIGhhdmUgZW50ZXJlZCBhIHZhbGlkIGlucHV0LlxyXG4gICAqXHJcbiAgICogTm90ZSB0aGF0IHdlIHZhbGlkYXRlIG9uIHRoZSBmb3JtR3JvdXAgbGV2ZWwsIGFuZCBub3QgdGhlIGNvbnRyb2wgbGV2ZWwgZm9yIHRoaXMgYXMgd2UgYXJlIGNvbmNlcm5lZCB3aXRoXHJcbiAgICogbXVsdGlwbGUgY29udHJvbHMgYW5kIHRoZSBOZyA2IHdheSBpcyB0byBoYXZlIHRoZSB2YWxpZGF0b3Igb24gYSBjb21tb24gYW5jZXN0b3Igb2YgY29udHJvbHM7IGluIHRoaXNcclxuICAgKiBjYXNlIG91ciBmb3JtR3JvdXAuXHJcbiAgICpcclxuICAgKiBJZiB0aGUgdXNlciBoYXMgY2hlY2tlZCBhIGNoZWNrZWQgYm94IHRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsIGFuZCB0aGVyZWZvcmUgbm8gdmFsaWRhdGlvbiBlcnJvciBpcyByZXR1cm5lZC5cclxuICAgKiBJZiB0aGUgdXNlciBoYXMgTk9UIGNoZWNrZWQgYSBjaGVja2JveCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yLlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uSWRlbnRpZmllciAtIEFuIGVycm9yIG5hbWUgYXNzaWduZWQgYnkgdGhlIGRldmVsb3BlciwgdGhpcyBuYW1lIGNhbiB0aGVuIGJlIHJlZmVycmVkXHJcbiAgICogdG8gZGlzcGxheSB0aGUgZXJyb3IgaW4gdGhlICB2aWV3LlxyXG4gICAqIC8vIEByZXR1cm57YW55fVxyXG4gICAqL1xyXG4gIGlzQW55Q2hlY2tib3hDaGVja2VkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjaGVja2JveGVzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKTogVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuICAgIGNvbnN0IGlzQW55Q2hlY2tib3hDaGVja2VkVmFsaWRhdGlvbkZuOiBWYWxpZGF0b3JGbiA9IChjb250cm9sczogRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cclxuICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiBjaGVja2JveGVzKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xzLmdldChjaGVja2JveCkudmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNBbnlDaGVja2JveENoZWNrZWRWYWxpZGF0aW9uRm47XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gQ29tbW9uIGZ1bmN0aW9uIGZvciB2YWxpZGF0b3JcclxuICAvLyBSZXR1cm5pbm5nIHRoZSB2YWxpZGF0aW9uSWRlbnRpZmllciB0cnVlIGlmIGludmFsaWQgYW5kIG51bGwgaWYgdmFsaWRcclxuXHJcbiAgaXNBbGxGaWVsZHNSZXF1aXJlZFZhbGlkYXRpb25Gbihjb250cm9sczogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyKXtcclxuICAgIGlmIChjb250cm9scyAhPT0gbnVsbCAmJiBmaWVsZHMgIT09IG51bGwpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpc0FsbEZpZWxkc1JlcXVpcmVkXHJcbiAgICpcclxuICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIGNvbnRyb2xzIGlzIG9iamVjdFxyXG4gICAqIC8vIEBwYXJhbSB2YWxpZGF0aW9uSWRlbnRpZmllclxyXG4gICAqIC8vIEByZXR1cm57YW55fVxyXG4gICAqL1xyXG5cclxuICBpc0FsbEZpZWxkc1JlcXVpcmVkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB8IG51bGwge1xyXG4gICAgY29uc3QgaXNBbGxGaWVsZHNSZXF1aXJlZFZhbGlkYXRpb25GbjogVmFsaWRhdG9yRm4gPSAoY29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNBbGxGaWVsZHNSZXF1aXJlZFZhbGlkYXRpb25Gbihjb250cm9scywgZmllbGRzLCB2YWxpZGF0aW9uSWRlbnRpZmllcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm47XHJcbiAgfVxyXG5cclxuICAvKiogQ29tbW9uIGZ1bmN0aW9uIGZvciBkYXRlIHZhbGlkYXRvclxyXG4gICAqIFJldHVybmlubmcgdGhlIHZhbGlkYXRpb25JZGVudGlmaWVyIHRydWUgaWYgaW52YWxpZCBhbmQgbnVsbCBpZiB2YWxpZFxyXG4gICAqXHJcbiAgICogeXl5eS9tbS9kZFxyXG4gICAqXHJcbiAgICovXHJcblxyXG5cclxuICBpc1ZhbGlkRGF0ZVZhbGlkYXRpb25Gbihjb250cm9sczogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyKXtcclxuXHJcbiAgICBpZiAoY29udHJvbHMgIT09IG51bGwgJiYgZmllbGRzICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZUFycmF5ID0gW107XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAvLyBGb3JtIGhhdmUgdmFsaWQgdmFsdWVzIGFuZCB3ZSBjYW4gY3JlYXRlIGRhdGVcclxuICAgICAgICAgIC8vIENoZWNrIGlzIGZvcm0gY29udHJvbHMgbWF0Y2hpbmcgdGhlIHJpZ2h0IGxlbmdoIGFuZCB0aGVuIGNyZWF0ZSBhcnJheSBjb250YWluZWQgZGF0ZVxyXG5cclxuICAgICAgICAgIGlmIChjb250cm9scy5nZXQoZmllbGQpLnZhbHVlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgIGRhdGVWYWx1ZUFycmF5LnB1c2goY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgIChjb250cm9scy5nZXQoZmllbGQpLnZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICBkYXRlVmFsdWVBcnJheS5wdXNoKGNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgYXJyYXkgaXMgcmVhZHkgYW5kIGNvbnZlcnQgdG8gc3RyaW5nXHJcblxyXG4gICAgICAgICAgaWYgKGRhdGVWYWx1ZUFycmF5Lmxlbmd0aCA9PT0gMyl7XHJcblxyXG4gICAgICAgICAgICAvL1JldHVybiBlcnJvciBpZiBub3QgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGF0ZVZhbHVlQXJyYXkpIHtcclxuICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBOdW1iZXIoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHVzZXIgZW50ZXJlZCBkYXkgYW5kIG1vbnRoIHRvIG51bWJlcnNcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXlbMV0gPSBOdW1iZXIoZGF0ZVZhbHVlQXJyYXlbMV0pO1xyXG4gICAgICAgICAgICBkYXRlVmFsdWVBcnJheVsyXSA9IE51bWJlcihkYXRlVmFsdWVBcnJheVsyXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZXJyb3IgaWYgdXNlciBlbnRlcmVkIG1vbnRocyBsZXNzIHRoYW4gMCBhbmQgbW9yZSB0aGFuIDEyXHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheVsxXSA8PSAwIHx8IGRhdGVWYWx1ZUFycmF5WzFdID49IDEyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBlcnJvciBpZiB1c2VyIGVudGVyZWQgbW9udGhzIGxlc3MgdGhhbiAwIGFuZCBtb3JlIHRoYW4gMzFcclxuICAgICAgICAgICAgaWYgKGRhdGVWYWx1ZUFycmF5WzJdIDw9IDAgfHwgZGF0ZVZhbHVlQXJyYXlbMl0gPj0gMzEpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEhlcmUgdmFsdWUgbWlnaHQgbWUgaW52YWxpZFxyXG5cclxuICAgICAgICAgICAgLy8gQWRkaW5nIHplcm9zIGluIGZyb250IGlmIGxlc3MgdGhhbiAxMFxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMV0gPCAxMCkgeyBkYXRlVmFsdWVBcnJheVsxXSA9IChcIjBcIiArIChkYXRlVmFsdWVBcnJheVsxXSkudG9TdHJpbmcoKS5zbGljZSgtMikpOyB9XHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheVsyXSA8IDEwKSB7IGRhdGVWYWx1ZUFycmF5WzJdID0gKFwiMFwiICsgKGRhdGVWYWx1ZUFycmF5WzJdKS50b1N0cmluZygpLnNsaWNlKC0yKSk7IH1cclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBwcm9wZXIgZGF0ZSBmb3JtYXQgYnkgY3JlYXRlIERhdGUgb2JqZWN0IGFuZCBjb252ZXJ0IGl0IGJhY2sgdG8gc3RyaW5nIGZvciBjb21wYXJpc29uIHdpdGggd2hhdCB0aGUgdXNlciBlbnRlcmVkXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZVZhbHVlQXJyYXkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tEYXRlU3RyID0gZGF0ZU9iai50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKS5yZXBsYWNlKC8tL2csIFwiLFwiKS5yZXBsYWNlKFwiVFwiLCBcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gbnVsbCBpZiB2YWxpZCBkYXRlXHJcbiAgICAgICAgICAgIGlmIChjaGVja0RhdGVTdHIgPT09IGRhdGVTdHIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZERhdGUoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZpZWxkczogQXJyYXk8c3RyaW5nPiwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbiAgICBjb25zdCBpc1ZhbGlkRGF0ZVZhbGlkYXRpb25GbjogVmFsaWRhdG9yRm4gPSAoY29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZERhdGVWYWxpZGF0aW9uRm4oY29udHJvbHMsIGZpZWxkcywgdmFsaWRhdGlvbklkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZERhdGVWYWxpZGF0aW9uRm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkXHJcbiAgICpcclxuICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIGNvbnRyb2xzIGlzIG9iamVjdFxyXG4gICAqIHsgY2hlY2tib3hDb250cm9sIDogc3RyaW5nLCB0ZXh0YXJlYUNvbnRyb2wgOiBzdHJpbmcgfVxyXG4gICAqIC8vIEBwYXJhbSB2YWxpZGF0aW9uSWRlbnRpZmllclxyXG4gICAqIC8vQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG5cclxuICBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sczogY29udHJvbHNpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkLCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGlzVGV4dEFyZWFWYWxpZFdoZW5DaGVja2JveENoZWNrZWQ6IFZhbGlkYXRvckZuID0gKGZvcm1Db250cm9sczogRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cclxuICAgICAgaWYgKCFmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLmNoZWNrYm94Q29udHJvbCkudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZvcm1Db250cm9scy5nZXQoY29udHJvbHMudGV4dGFyZWFDb250cm9sKS52YWx1ZSAmJiBmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnRleHRhcmVhQ29udHJvbCkudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNSYWRpb1ZhbGlkV2hlblNvbWVPcHRpb25TZWxlY3RlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiB7IGNoZWNrYm94Q29udHJvbCA6IHN0cmluZywgdGV4dGFyZWFDb250cm9sIDogc3RyaW5nIH1cclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvLyBAcmV0dXJuIHthbnl9XHJcbiAgICovXHJcblxyXG4gIGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2xzOiBhbnksIHZhbGlkYXRpb25JZGVudGlmaWVyOiBzdHJpbmcpe1xyXG5cclxuICAgIGNvbnN0IGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWQ6IFZhbGlkYXRvckZuID0gKGZvcm1Db250cm9sczogRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cclxuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgY29udHJvbHMuc2VsZWN0ZWRPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250cm9scy5nZXQoY29udHJvbHMucmFkaW9Db250cm9sKS52YWx1ZSAhPT0gbnVsbCAmJiBmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnJhZGlvQ29udHJvbCkudmFsdWUgIT09IG9wdGlvbi5zZWxlY3RlZE9wdGlvbikge1xyXG5cclxuICAgICAgICAgIC8vIERvIG5vdCB2YWxpZGF0ZSBjaGlsZCBpZiBwYXJlbnQgaXMgdmFsaWQgc29cclxuICAgICAgICAgIC8vIFJlc2V0IGNoaWxkIHZhbGlkYXRpb24gdG8gdmFsaWQgc3RhdGUgaGVyZVxyXG4gICAgICAgICAgLy8gQWRkIHdvcmQgXCJWYWxpZGF0aW9uRm5cIiB0byB0aGUgbmFtZSBvZiB2YWxpZGF0b3Igd2hlbiB5b3UgZXh0ZW5kIGNoaWxkIHZhbGlkYXRpb24gZnVuY3Rpb25zXHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZFZhbGlkYXRvci52YWxpZGF0b3JGdW5jKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgdGhpc1tvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdG9yRnVuYyArIFwiVmFsaWRhdGlvbkZuXCJdKG51bGwsIG51bGwsIG9wdGlvbi5jaGlsZFZhbGlkYXRvci52YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdG9yRnVuYyArIFwiVmFsaWRhdGlvbkZuXCJdKGZvcm1Hcm91cCwgb3B0aW9uLmNoaWxkVmFsaWRhdG9yLmNvbnRyb2xzLCBvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjcmVhdGVGb3JtR3JvdXBWYWxpZGF0b3JzXHJcbiAgICpcclxuICAgKiBGb3JtR3JvdXAgVmFsaWRhdG9ycyBhcmUgdXNlZCBmb3IgdmFsaWRhdGlvbiB0aGF0IGludm9sdmVzIG1vcmUgdGhhbiBvbmUgRm9ybUNvbnRyb2wuIGllLiBXaGVuIGEgY29udHJvbFxyXG4gICAqIGRlcGVuZHMgb24gYW5vdGhlciwgb3Igd2UgbmVlZCB0byB2YWxpZGF0ZSBhIGdyb3VwIG9mIGNvbnRyb2xzIHRvZ2V0aGVyLiBWYWxpZGF0aW9uIGZvciBtdWx0aXBseSBjb250cm9scyBpc1xyXG4gICAqIHJlcXVpcmVkIG9uIHRoZSBjb21tb24gYW5jZXN0b3IgYXMgcGVyIHRoZSBBbmd1bGFyIERvY3VtZW50YXRpb24uXHJcbiAgICpcclxuICAgKiBAc2VlIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Zvcm0tdmFsaWRhdGlvbiNhZGRpbmctdG8tcmVhY3RpdmUtZm9ybXMtMVxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIEFuZ3VsYXIgRm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFZhbGlkYXRvcnMgLSBbe1xyXG4gICAgICogICAgdmFsaWRhdG9yRnVuYzogJ2lzQW55Q2hlY2tib3hDaGVja2VkJyxcclxuICAgICAqICAgIHZhbGlkYXRpb25FcnJvcklkOiAncmVhc29uc0NvbnN0ZW50T3JkZXJOb3RBcHByb3ZlZCcsXHJcbiAgICAgKiAgICBjaGVja2JveGVzOiBbXHJcbiAgICAgKiAgICAgICAgJ3BhcnRpZXNOZWVkQXR0ZW5kJywgJ05vdEVub3VnaEluZm9ybWF0aW9uJywgJ29yZGVyTm90QXBwZWFyT2ZTMjVjYTE5NzMnLCAnZDgxJyxcclxuICAgICAqICAgICAgICAncGVuc2lvbkFubmV4JywgJ2FwcGxpY2FudFRha2VuQWR2aWNlJywgJ3Jlc3BvbmRlbnRUYWtlbkFkdmljZScsICdPdGhlcjInXHJcbiAgICAgKiAgICBdfV1cclxuICAgKi9cclxuICBjcmVhdGVGb3JtR3JvdXBWYWxpZGF0b3JzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtR3JvdXBWYWxpZGF0b3JzKSB7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1Hcm91cFZhbGlkYXRvcnMubWFwKGZvcm1Hcm91cFZhbGlkYXRvciA9PiB7XHJcblxyXG4gICAgICBjb25zdCBncm91cFZhbGlkYXRvcjogRm9ybUdyb3VwVmFsaWRhdG9yID0gZm9ybUdyb3VwVmFsaWRhdG9yO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yKGZvcm1Hcm91cCwgZ3JvdXBWYWxpZGF0b3IudmFsaWRhdG9yRnVuYywgZ3JvdXBWYWxpZGF0b3IuY29udHJvbHMsXHJcbiAgICAgICAgZ3JvdXBWYWxpZGF0b3IudmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjcmVhdGVGb3JtR3JvdXBWYWxpZGF0b3JcclxuICAgKlxyXG4gICAqIFlvdSdsbCBuZWVkIHRvIHBhc3MgaW4gdGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IHlvdSB3aXNoIHRvIHVzZS5cclxuICAgKlxyXG4gICAqIEBzZWUgc3RhdGVfbWV0YS5qc1xyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0b3JGdW5jIC0gJ2lzQW55Q2hlY2tib3hDaGVja2VkJ1xyXG4gICAqIC8vIEBwYXJhbSB7QXJyYXkgb3IgT2JqZWN0fSBjb250cm9scyAtIFsncGFydGllc05lZWRBdHRlbmQnLCAnTm90RW5vdWdoSW5mb3JtYXRpb24nXSBvciB7IGNoZWNrYm94OiAnY29udHJvbE5hbWUnLCB0ZXh0YXJlYTogJ2NvbnRyb2xOYW1lJyB9XHJcbiAgICogLy8gQHBhcmFtIHtTdHJpbmd9IHZhbGlkYXRpb25FcnJvcklkIC0gJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnXHJcbiAgICpcclxuICAgKiAvLyBAcmV0dXJuIHtWYWxpZGF0b3JGbn1cclxuICAgKi9cclxuICBjcmVhdGVGb3JtR3JvdXBWYWxpZGF0b3IoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIHZhbGlkYXRvckZ1bmM6IHN0cmluZywgY29udHJvbHM6IGFueSwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuXHJcbiAgICByZXR1cm4gdGhpc1t2YWxpZGF0b3JGdW5jXShmb3JtR3JvdXAsIGNvbnRyb2xzLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1zU2VydmljZSB7XHJcbiAgRm9ybUNvbnRyb2xzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGlvbiBvZiBGb3JtQ29udHJvbHMgZm9yIGEgRm9ybUdyb3VwLlxyXG4gICAqIFNvIGZpcnN0IHRoaW5nIGlzIGhvdyBkbyB3ZSBhZGQgVmFsaWRhdGlvbiB0byBhIEZvcm1Db250cm9sXHJcbiAgICpcclxuICAgKiBwcm9wIGNhbiBiZSBhIGZpZWxkc2V0LCBsZWdlbmQsIHRleHQsIGlkUHJlZml4LCBuYW1lLCBoZWFkZXIsIGNoZWNrYm94ZXMsIGlmIHdlXHJcbiAgICpcclxuICAgKiBIZXJlIGlzIHdoZXJlIHRoZSB2YWxpZGF0aW9uIGlzIGFwcGxpZWQgdG8gZWFjaCBvZiB0aGUgY29udHJvbHMgb2YgdGhlIGZvcm0sIGJhc2VkIG9uIHRoZSB2YWxpZGF0b3JzIHRoYXRcclxuICAgKiBoYXZlIGJlZW4gcGxhZWQgaW50byB0aGUgc3RhdGVfbWV0YS5qcy5cclxuICAgKlxyXG4gICAqIFRPRE86IE5hbWUgdGhpcyBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQsIGFzIGNyZWF0ZSBkb2Vzbid0IHJlYWxseSBleHBsYWluIHdoYXQgaXQgZG9lcyxcclxuICAgKiBhbHNvIHRoZXJlIGl0J3MgcXVpdGUgaGFyZCB0byB3b3JrIG91dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzb21lSnNvblxyXG4gICAqIEBwYXJhbSBzb21lRGF0YVxyXG4gICAqL1xyXG4gIGNyZWF0ZShzb21lSnNvbiwgc29tZURhdGEpIHtcclxuICAgIGlmICh0eXBlb2Ygc29tZUpzb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzb21lSnNvbikge1xyXG5cclxuICAgICAgICBpZiAocHJvcCA9PT0gJ2NvbnRyb2wnKSB7XHJcbiAgICAgICAgICBpZiAoc29tZUpzb24ucmFkaW9Hcm91cCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIFJhZGlvQnV0dG9uIExvZ2ljXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzb21lRGF0YSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByYWRpb0VsIG9mIHNvbWVKc29uLnJhZGlvR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYWRpb0VsLnZhbHVlID09PSBzb21lRGF0YVtzb21lSnNvbi5jb250cm9sXSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLkZvcm1Db250cm9sc1tzb21lSnNvbi5jb250cm9sXSA9IG5ldyBGb3JtQ29udHJvbChyYWRpb0VsLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250cm9sKG51bGwsIHNvbWVKc29uLmNvbnRyb2wsIHNvbWVKc29uLnZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLkZvcm1Db250cm9sc1tzb21lSnNvbi5jb250cm9sXSA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pIHtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2woc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybUNvbnRyb2woc29tZUpzb24udmFsdWUsIHNvbWVKc29uLmNvbnRyb2wsIHNvbWVKc29uLnZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlKHNvbWVKc29uW3Byb3BdLCBzb21lRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzb21lSnNvbiAhPT0gdW5kZWZpbmVkICYmIHNvbWVKc29uLmlzQXJyYXkpIHtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSAgb2Ygc29tZUpzb24pIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZShzb21lSnNvbltpdGVtXSwgc29tZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Db250cm9sYCBpbnN0YW5jZS5cclxuICAgKiBAcGFyYW0gY29udHJvbE5hbWUgLSAnaW5mb3JtYXRpb25OZWVkZWQnXHJcbiAgICogQHBhcmFtIGluaXRpYWxWYWx1ZSAtIGllLiB0ZXh0IGlmIGl0J3MgYSB0ZXh0YXJlYS5cclxuICAgKi9cclxuICBjcmVhdGVGb3JtQ29udHJvbChpbml0aWFsVmFsdWU6IGFueSwgY29udHJvbE5hbWU6IHN0cmluZywgdmFsaWRhdG9yczogQXJyYXk8c3RyaW5nPikge1xyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmNvbnRyb2xIYXNWYWxpZGF0aW9uKHZhbGlkYXRvcnMpKSB7XHJcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IG5ldyBGb3JtQ29udHJvbChpbml0aWFsVmFsdWUsIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuZ2V0TmdWYWxpZGF0b3JzKHZhbGlkYXRvcnMpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuRm9ybUNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IG5ldyBGb3JtQ29udHJvbChpbml0aWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lZm9ybUNvbnRyb2xzKHNvbWVKc29uOiBhbnksIHNvbWVEYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5Gb3JtQ29udHJvbHMgPSBbXTtcclxuICAgIHRoaXMuY3JlYXRlKHNvbWVKc29uLCBzb21lRGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5Gb3JtQ29udHJvbHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0Zvcm1zU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBGb3JtIEJ1aWxkZXIgV3JhcHBlclxyXG4gKiBDb21wb25lbnQgYWNjZXB0cyBwYWdlSXRlbXMgYW5kIHBhZ2VWYWx1ZXMgZm9yIEZyb20gQnVpbGRlciB0byBwcm9jZXNzXHJcbiAqIGFuZCBpdCBlbWl0cyBmb3JtIGRhdGEgdG8gaXQncyBwYXJlbnQgY29tcG9uZW50LlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tYnVpbGRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNQYWdlVmFsaWQgJiYgZm9ybURyYWZ0LmludmFsaWRcIj5cclxuICA8YXBwLXZhbGlkYXRpb24taGVhZGVyIFt2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlc109XCJ0aGlzLnBhZ2VJdGVtcy52YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlc1wiIFtmb3JtR3JvdXBdPVwiZm9ybURyYWZ0XCI+XHJcbiAgPC9hcHAtdmFsaWRhdGlvbi1oZWFkZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPGZvcm0gKm5nSWY9XCJwYWdlSXRlbXNcIiBbZm9ybUdyb3VwXT1cImZvcm1EcmFmdFwiIChuZ1N1Ym1pdCk9XCJvbkZvcm1TdWJtaXQoKVwiPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwieydnb3Z1ay1mb3JtLWdyb3VwJzp0cnVlLCAnZ292dWstZm9ybS1ncm91cC0tZXJyb3InIDogaXNQYWdlVmFsaWQgJiYgZm9ybURyYWZ0LmludmFsaWQgfVwiPlxyXG4gICAgPGgxIGNsYXNzPVwiZ292dWstaGVhZGluZy14bFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInBhZ2VJdGVtcy5jYXB0aW9uXCIgW2NsYXNzXT1cInBhZ2VJdGVtcy5jYXB0aW9uLmNsYXNzZXNcIj57eyBwYWdlSXRlbXMuY2FwdGlvbi50ZXh0IH19PC9zcGFuPlxyXG4gICAgICB7e3BhZ2VJdGVtcy5oZWFkZXJ9fVxyXG4gICAgPC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHBhZ2VJdGVtcy5ncm91cHNcIj5cclxuICAgICAgPGFwcC1maWVsZHNldCAqbmdJZj1cImdyb3VwLmZpZWxkc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstZmllbGRzZXQnXCJcclxuICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZm9ybURyYWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cImlzUGFnZVZhbGlkXCI+XHJcbiAgICAgIDwvYXBwLWZpZWxkc2V0PlxyXG4gICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFtncm91cF09XCJmb3JtRHJhZnRcIiBbdmFsaWRhdGVdPVwiaXNQYWdlVmFsaWRcIiBbZGF0YV09XCJncm91cFwiPjwvYXBwLWp1aS1mb3JtLWVsZW1lbnRzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyb21CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1zU2VydmljZTogRm9ybXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIEBJbnB1dCgpIHBhZ2VJdGVtczogYW55O1xyXG4gIEBJbnB1dCgpIHBhZ2VWYWx1ZXM6IGFueTtcclxuICBASW5wdXQoKSBpc1BhZ2VWYWxpZDogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgc3VibWl0UGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cclxuICBmb3JtRHJhZnQ6IEZvcm1Hcm91cDtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMucGFnZUl0ZW1zICYmIGNoYW5nZXMucGFnZUl0ZW1zLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm1EcmFmdCA9IG5ldyBGb3JtR3JvdXAodGhpcy5mb3Jtc1NlcnZpY2UuZGVmaW5lZm9ybUNvbnRyb2xzKHRoaXMucGFnZUl0ZW1zLCB0aGlzLnBhZ2VWYWx1ZXMpKTtcclxuICAgIHRoaXMuc2V0VmFsaWRhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdG9ycygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhZ2VJdGVtcykge1xyXG4gICAgICBjb25zdCBmb3JtR3JvdXBWYWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS5jcmVhdGVGb3JtR3JvdXBWYWxpZGF0b3JzKHRoaXMuZm9ybURyYWZ0LCB0aGlzLnBhZ2VJdGVtcy5mb3JtR3JvdXBWYWxpZGF0b3JzKTtcclxuICAgICAgdGhpcy5mb3JtRHJhZnQuc2V0VmFsaWRhdG9ycyhmb3JtR3JvdXBWYWxpZGF0b3JzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9ybVN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc3VibWl0UGFnZS5lbWl0KHRoaXMuZm9ybURyYWZ0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkc2V0JyxcclxuICB0ZW1wbGF0ZTogYDxmaWVsZHNldCBbYXR0ci52YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtjbGFzc109XCJjbGFzc2VzXCIgW2F0dHIuZGF0YV09XCJkYXRhXCIgW2F0dHIuZ3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxyXG4gICAgICAgIDxhcHAtanVpLWZvcm0tZWxlbWVudHMgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW2RhdGFdPVwiaXRlbVwiPjwvYXBwLWp1aS1mb3JtLWVsZW1lbnRzPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZmllbGRzZXQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkc2V0Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0ZTtcclxuICAgIEBJbnB1dCgpIGdyb3VwO1xyXG4gICAgQElucHV0KCkgZGF0YTogQXJyYXk8YW55PjtcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtanVpLWZvcm0tZWxlbWVudHMnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbYXR0ci52YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFthdHRyLmRhdGFdPVwiZGF0YVwiIFthdHRyLmdyb3VwXT1cImdyb3VwXCI+XHJcbiAgPCEtLUpVSSBGT1JNIGJ1aWxkZXIgY29tcG9uZW50IC0tPlxyXG4gIDxhcHAtbGVnZW5kICpuZ0lmPVwiZGF0YS5sZWdlbmRcIiBbY2xhc3Nlc109XCJkYXRhLmxlZ2VuZC5jbGFzc2VzXCI+XHJcbiAgICB7e2RhdGEubGVnZW5kLnRleHR9fVxyXG4gIDwvYXBwLWxlZ2VuZD5cclxuICA8YXBwLWhpbnQgKm5nSWY9XCJkYXRhLmhpbnRcIiBbY2xhc3Nlc109XCJkYXRhLmhpbnQuY2xhc3Nlc1wiPlxyXG4gICAge3tkYXRhLmhpbnQudGV4dH19XHJcbiAgPC9hcHAtaGludD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS52YWxpZGF0aW9uRXJyb3IgJiYgdmFsaWRhdGVcIj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAgW2dyb3VwXT1cImdyb3VwXCIgW3ZhbGlkYXRpb25FcnJvcklkXT1cImRhdGEudmFsaWRhdGlvbkVycm9yLmlkZW50aWZpZXJcIj5cclxuICAgICAge3tkYXRhLnZhbGlkYXRpb25FcnJvci52YWx1ZX19XHJcbiAgICA8L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8YXBwLWRhdGUgKm5nSWY9XCJkYXRhLmRhdGVcIlxyXG4gICAgICAgICAgICBbaWRdPVwiZGF0YS5kYXRlLmZvcm1OYW1lXCJcclxuICAgICAgICAgICAgW2RhdGFdPVwiZGF0YS5kYXRlXCJcclxuICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLmRhdGUudmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgPC9hcHAtZGF0ZT5cclxuICA8YXBwLWlucHV0cyAqbmdJZj1cImRhdGEuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtpdGVtXT1cImRhdGEuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLmlucHV0LnZhbGlkYXRpb25FcnJvclwiXHJcbiAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICBbaGludF09XCJkYXRhLmlucHV0LmhpbnRcIlxyXG4gICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5pbnB1dC5jb250cm9sXCI+PC9hcHAtaW5wdXRzPlxyXG4gIDxhcHAtcmFkaW9idXR0b24gKm5nSWY9XCJkYXRhLnJhZGlvc1wiIFtjbGFzc2VzXT1cIidnb3Z1ay1yYWRpb3MgJyArIGRhdGEucmFkaW9zLmNsYXNzZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cImRhdGEucmFkaW9zLnJhZGlvR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEucmFkaW9zLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgW2lkUHJlZml4XT1cImRhdGEucmFkaW9zLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbkVycm9yXT1cImRhdGEucmFkaW9zLnZhbGlkYXRpb25FcnJvclwiPlxyXG4gIDwvYXBwLXJhZGlvYnV0dG9uPlxyXG4gIDxkaXYgKm5nSWY9XCJkYXRhLmNoZWNrYm94XCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzXCI+XHJcbiAgICA8YXBwLWNoZWNrYm94IFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtpZFByZWZpeF09XCJkYXRhLmNoZWNrYm94LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBbaXRlbXNdPVwiZGF0YS5jaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1jaGVja2JveGVzX19pdGVtJ1wiXHJcbiAgICAgICAgICAgICAgICAgIFtsYWJlbENsYXNzZXNdPVwiJ2dvdnVrLWxhYmVsIGdvdnVrLWNoZWNrYm94ZXNfX2xhYmVsJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmNoZWNrYm94Lmdyb3VwcyAmJiBncm91cC5jb250cm9sc1tkYXRhLmNoZWNrYm94LmNvbnRyb2xdLnZhbHVlXCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19jb25kaXRpb25hbFwiXHJcbiAgICAgICAgICAgICBbbmdTdHlsZV0gPSBcInsgJ2JvcmRlci1sZWZ0JzogKHZhbGlkYXRlICYmIGdyb3VwLmludmFsaWQpID8gJzVweCBzb2xpZCAjYjEwZTFlJyA6ICcnIH1cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBzdWJncm91cCBvZiBkYXRhLmNoZWNrYm94Lmdyb3Vwc1wiPlxyXG4gICAgICAgICAgICA8YXBwLWZpZWxkc2V0ICpuZ0lmPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJzdWJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9hcHAtZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxhcHAtanVpLWZvcm0tZWxlbWVudHMgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW2RhdGFdPVwic3ViZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXBwLWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8YXBwLXRleHRhcmVhcyAqbmdJZj1cImRhdGEudGV4dGFyZWFcIiBbY2xhc3Nlc109XCInZ292dWstdGV4dGFyZWEnXCJcclxuICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS50ZXh0YXJlYS52YWxpZGF0aW9uRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiZGF0YS50ZXh0YXJlYS5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS50ZXh0YXJlYS5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEudGV4dGFyZWEuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgW3Jvd3NdPVwiNVwiPlxyXG4gIDwvYXBwLXRleHRhcmVhcz5cclxuICA8YXBwLWJ1dHRvbnMgKm5nSWY9XCJkYXRhLmJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1idXR0b24nXCJcclxuICAgICAgICAgICAgICAgW3R5cGVCdG5dPVwiZGF0YS5idXR0b24udHlwZVwiXHJcbiAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEuYnV0dG9uLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICBbdmFsdWVdPVwiZGF0YS5idXR0b24udmFsdWVcIj5cclxuICA8L2FwcC1idXR0b25zPlxyXG4gIDwhLS1KVUkgRk9STSBidWlsZGVyIGNvbXBvbmVudCAtLT5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEp1aUZvcm1FbGVtZW50c0NvbXBvbmVudHtcclxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIGRhdGE7XHJcbiAgQElucHV0KCkgdmFsaWRhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxlZ2VuZCcsXHJcbiAgdGVtcGxhdGU6IGA8bGVnZW5kIFtjbGFzc109XCInZ292dWstZmllbGRzZXRfX2xlZ2VuZCAnICsgY2xhc3Nlc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xlZ2VuZD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVnZW5kQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM6ICBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGludCcsXHJcbiAgdGVtcGxhdGU6IGA8c3BhbiBbY2xhc3NdPVwiY2xhc3Nlc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3NwYW4+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaW50Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kYXRlJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwICpuZ0lmPVwiZGF0YS52YWxpZGF0aW9uRXJyb3IgJiYgdmFsaWRhdGVcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbdmFsaWRhdGlvbkVycm9ySWRdPVwiZGF0YS52YWxpZGF0aW9uRXJyb3IuaWRlbnRpZmllclwiPlxyXG4gICAgICAgIHt7ZGF0YS52YWxpZGF0aW9uRXJyb3IudmFsdWV9fVxyXG4gICAgPC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dFwiIFtpZF09XCJpZFwiIFthdHRyLmRhdGFdPVwiZGF0YVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1kYXRlLWlucHV0X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YXBwLWlucHV0cyBbaXRlbV09XCJkYXRhLmRheS5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEuZGF5LmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLmRheS5pbnB1dC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJcIj48L2FwcC1pbnB1dHM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1kYXRlLWlucHV0X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YXBwLWlucHV0cyBbaXRlbV09XCJkYXRhLm1vbnRoLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS5tb250aC5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5tb250aC5pbnB1dC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJcIj48L2FwcC1pbnB1dHM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1kYXRlLWlucHV0X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YXBwLWlucHV0cyBbaXRlbV09XCJkYXRhLnllYXIuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLnllYXIuaW5wdXQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEueWVhci5pbnB1dC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJcIj48L2FwcC1pbnB1dHM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBpZDtcclxuICAgIEBJbnB1dCgpIGRhdGE7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0ZTtcclxuICAgIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9yO1xyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXRzJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gIDxhcHAtbGFiZWwgW2ZvckVsZW1lbnRdPVwibGFiZWxGb3JcIj57e2xhYmVsLnRleHR9fVxyXG4gIDwvYXBwLWxhYmVsPlxyXG4gIDxhcHAtaGludCAqbmdJZj1cImhpbnRcIiBbY2xhc3Nlc109XCJoaW50LmNsYXNzZXNcIj5cclxuICAgIHt7aGludC50ZXh0fX1cclxuICA8L2FwcC1oaW50PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWxpZGF0aW9uRXJyb3JcIj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJpdGVtLmNvbnRyb2xcIiBpZD1cInt7aXRlbS5jb250cm9sfX1cIj57e3ZhbGlkYXRpb25FcnJvci52YWx1ZX19PC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8aW5wdXQgW2NsYXNzXT1cIidnb3Z1ay1pbnB1dCAnICsgaXRlbS5jbGFzc2VzXCJcclxuICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICBbaWRdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgW25hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgW25nQ2xhc3NdPVwieydnb3Z1ay1pbnB1dC0tZXJyb3InOmlzQ29udHJvbEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihncm91cCwgaXRlbS5jb250cm9sLCBzaG93VmFsaWRhdGlvbil9XCJcclxuICAgICAgICAgdHlwZT1cInRleHRcIj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0c0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBpdGVtO1xyXG4gIEBJbnB1dCgpIGxhYmVsO1xyXG4gIEBJbnB1dCgpIGhpbnQ7XHJcbiAgQElucHV0KCkgbGFiZWxGb3I7XHJcbiAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9yO1xyXG4gIG5hbWU7XHJcbiAgaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaG93VmFsaWRhdGlvbkFuZElzQ29udHJvbFZhbGlkXHJcbiAgICpcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyByZXF1aXJlZCB0byBzaG93IGl0J3MgdmFsaWRhdGlvbiwgYW5kIHRoZSB1c2VycyBpbnB1dCBpcyBpbnZhbGlkLlxyXG4gICAqXHJcbiAgICogLy9AcGFyYW0gc2hvd1ZhbGlkYXRpb25cclxuICAgKiAvL0BwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvL0BwYXJhbSBjb250cm9sXHJcbiAgICogLy9AcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzQ29udHJvbEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nLCBzaG93VmFsaWRhdGlvbjogYm9vbGVhbikge1xyXG5cclxuICAgIHJldHVybiAhdGhpcy5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKSAmJiBzaG93VmFsaWRhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIGNvbnRyb2wgaXMgdmFsaWQuXHJcbiAgICpcclxuICAgKiAgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgKi9cclxuICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yYWRpb2J1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWxpZGF0aW9uRXJyb3JcIj5cclxuICAgICAgPGFwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25cIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbY29udHJvbElkXT1cImNvbnRyb2xcIj57e3ZhbGlkYXRpb25FcnJvci52YWx1ZX19PC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8ZGl2IFtjbGFzc109XCJjbGFzc2VzXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuZGV2aWRlclwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19kaXZpZGVyXCI+e3tkYXRhLmRldmlkZXJ9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhZGF0YS5kZXZpZGVyXCIgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZ292dWstcmFkaW9zX19pbnB1dFwiIGlkPVwie3tjb250cm9sICsgZGF0YS52YWx1ZX19XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sXCIgdHlwZT1cInJhZGlvXCIgW3ZhbHVlXT0gXCJkYXRhLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdvdnVrLWxhYmVsIGdvdnVrLXJhZGlvc19fbGFiZWxcIiBmb3I9XCJ7e2NvbnRyb2wgKyBkYXRhLnZhbHVlfX1cIj5cclxuICAgICAgICAgICAgICAgIHt7ZGF0YS50ZXh0fX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHVsICpuZ0lmPVwiZGF0YS5saXN0XCIgW2NsYXNzXT1cIidnb3Z1ay1saXN0JyArIGRhdGEubGlzdC5jbGFzc2VzXCI+XHJcbiAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGEubGlzdC50ZXh0XCI+e3sgaXRlbSB9fTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxhcHAtaGludCAqbmdJZj1cImRhdGEuaGludFwiIFtjbGFzc2VzXT1cImRhdGEuaGludC5jbGFzc2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7e2RhdGEuaGludC50ZXh0fX1cclxuICAgICAgICAgICAgPC9hcHAtaGludD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5ncm91cHMgJiYgZ3JvdXAudmFsdWVbY29udHJvbF09PT1kYXRhLnZhbHVlXCIgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2NvbmRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJncm91cCBvZiBkYXRhLmdyb3Vwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtZmllbGRzZXQgKm5nSWY9XCJzdWJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstZmllbGRzZXQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJzdWJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXBwLWZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtanVpLWZvcm0tZWxlbWVudHMgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW2RhdGFdPVwic3ViZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb2J1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXggPSAncmInO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICdyYic7XHJcbiAgICBASW5wdXQoKSBpdGVtcztcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgICBASW5wdXQoKSBjb250cm9sO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXI+XHJcbiAgICA8ZGl2ICAqbmdJZj1cImdyb3VwXCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pdGVtXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLWNoZWNrYm94ZXNfX2lucHV0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtcy5jb250cm9sXCIgaWQ9XCJ7e2l0ZW1zLmNvbnRyb2x9fVwiIHR5cGU9XCJjaGVja2JveFwiIFt2YWx1ZV09XCJpdGVtcy52YWx1ZVwiPlxyXG4gICAgICAgIDxhcHAtbGFiZWwgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiIFtmb3JFbGVtZW50XT1cIml0ZW1zLmNvbnRyb2xcIj57e2l0ZW1zLnRleHR9fTwvYXBwLWxhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXg7XHJcbiAgICBASW5wdXQoKSBuYW1lO1xyXG4gICAgQElucHV0KCkgaXRlbXM7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgbGFiZWxDbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10ZXh0YXJlYXMnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgPGFwcC1sYWJlbFxyXG4gICAgICAgICAgICAgW2ZvckVsZW1lbnRdPVwibGFiZWxGb3JcIj57e2xhYmVsLnRleHR9fVxyXG4gIDwvYXBwLWxhYmVsPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWxpZGF0aW9uRXJyb3JcIj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJjb250cm9sXCIgaWQ9XCJ7e2NvbnRyb2x9fVwiPnt7dmFsaWRhdGlvbkVycm9yLnZhbHVlfX08L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDx0ZXh0YXJlYSBbY2xhc3NdPVwiY2xhc3Nlc1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ292dWstdGV4dGFyZWEtLWVycm9yJzppc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIGNvbnRyb2wsIHNob3dWYWxpZGF0aW9uKSB8fCBpc0dyb3VwSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uKGdyb3VwLCBzaG93VmFsaWRhdGlvbil9XCJcclxuICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgICAgIFtpZF09XCJsYWJlbEZvclwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxGb3JcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xcIj48L3RleHRhcmVhPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG4vKipcclxuICogVGV4dGFyZWFzQ29tcG9uZW50XHJcbiAqXHJcbiAqIEZlYXR1cmVzOlxyXG4gKiBJZiB0aGlzIGNvbXBvbmVudCBpcyB0b2xkIHRvIHNob3cgaXQncyB2YWxpZGF0aW9uLCBhbmQgdGhlIGlucHV0IHRoZSB1c2VyIGhhcyBlbnRlcmVkIGlzIGludmFsaWQsXHJcbiAqIHRoZW4gd2Ugc2hvdWxkIGRpc3BsYXkgYSByZWQgYm94IGFyb3VuZCB0aGUgdGV4dCBhcmVhLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBpZFByZWZpeCA9ICd0YSc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICd0YSc7XHJcbiAgQElucHV0KCkgaWQgPSAndGEnO1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgpIHJvd3M7XHJcbiAgQElucHV0KCkgY2xhc3NlcztcclxuICBASW5wdXQoKSBjb250cm9sO1xyXG4gIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gIEBJbnB1dCgpIGxhYmVsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24gKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBzaG93VmFsaWRhdGlvbjogYm9vbGVhbikge1xyXG5cclxuICAgIGlmKGZvcm1Hcm91cC5lcnJvcnMgJiYgZm9ybUdyb3VwLmVycm9yc1t0aGlzLmNvbnRyb2xdICYmIHNob3dWYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaG93VmFsaWRhdGlvbkFuZElzQ29udHJvbFZhbGlkXHJcbiAgICpcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyByZXF1aXJlZCB0byBzaG93IGl0J3MgdmFsaWRhdGlvbiwgYW5kIHRoZSB1c2VycyBpbnB1dCBpcyBpbnZhbGlkLlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHNob3dWYWxpZGF0aW9uXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9sXHJcbiAgICogLy9AcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzQ29udHJvbEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nLCBzaG93VmFsaWRhdGlvbjogYm9vbGVhbikge1xyXG5cclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCkgJiYgc2hvd1ZhbGlkYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogQHNlZSBWYWxpZGF0aW9uU2VydmljZVxyXG4gICAqL1xyXG4gIGlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYnV0dG9ucycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXBcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8aW5wdXQgaWQ9XCJ7e2NvbnRyb2wgKyB2YWx1ZX19XCIgW2NsYXNzXT1cImNsYXNzZXNcIiBbdHlwZV09XCJ0eXBlQnRuXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sXCIgW3ZhbHVlXT1cInZhbHVlXCI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ2J0bic7XHJcbiAgICBASW5wdXQoKSBuYW1lID0gJ2J0bic7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgY2xhc3NlcztcclxuICAgIEBJbnB1dCgpIHR5cGVCdG47XHJcbiAgICBASW5wdXQoKSBjb250cm9sO1xyXG4gICAgQElucHV0KCkgdmFsdWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmdyb3VwLnN0YXR1cyA9PT0gJ0lOVkFMSUQnO1xyXG4gICAgICB0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZ3JvdXAuc3RhdHVzID09PSAnSU5WQUxJRCc7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbGFiZWwnLFxyXG4gIHRlbXBsYXRlOiBgPGxhYmVsIFthdHRyLmZvcl09XCJmb3JFbGVtZW50XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbGFiZWw+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmb3JFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpZGRlbi1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyXHJcbiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwiY29tcG9uZW50Q2xhc3Nlc1wiXHJcbiAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgIFtpZF09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgIFtuYW1lXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWRkZW5JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBpdGVtOiB7XHJcbiAgICAgIGNvbnRyb2w6IHN0cmluZztcclxuICAgICAgY2xhc3NlczogQXJyYXk8c3RyaW5nPlxyXG4gICAgfTtcclxuICAgIEBJbnB1dCgpIHZhbHVlO1xyXG4gICAgY29tcG9uZW50Q2xhc3Nlczogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5jb21wb25lbnRDbGFzc2VzID0gJ2dvdnVrLWlucHV0JyArIHRoaXMuaXRlbS5jbGFzc2VzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC12YWxpZGF0aW9uLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXJyb3Itc3VtbWFyeS10aXRsZVwiIHJvbGU9XCJhbGVydFwiIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgIGRhdGEtbW9kdWxlPVwiZXJyb3Itc3VtbWFyeVwiPlxyXG4gIDxoMiBjbGFzcz1cImdvdnVrLWVycm9yLXN1bW1hcnlfX3RpdGxlXCIgaWQ9XCJlcnJvci1zdW1tYXJ5LXRpdGxlXCI+XHJcbiAgICBUaGVyZSBpcyBhIHByb2JsZW1cclxuICA8L2gyPlxyXG4gIDxkaXYgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5X19ib2R5XCI+XHJcbiAgICA8dWwgY2xhc3M9XCJnb3Z1ay1saXN0IGdvdnVrLWVycm9yLXN1bW1hcnlfX2xpc3RcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlIG9mIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2VzXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudmFsaWRhdGlvbkxldmVsLCBGT1JNX0NPTlRST0wpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5jb250cm9sSWQpXCI+XHJcbiAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiLi9cIiBmcmFnbWVudD1cInt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5ocmVmfX1cIj57e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudGV4dH19PC9hPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uTGV2ZWwodmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS52YWxpZGF0aW9uTGV2ZWwsIEZPUk1fR1JPVVApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cCwgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5mb3JtR3JvdXBWYWxpZGF0aW9uRXJyb3JJZClcIj5cclxuICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIuL1wiIGZyYWdtZW50PVwie3t2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLmhyZWZ9fVwiPnt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS50ZXh0fX08L2E+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG4vKipcclxuICogVmFsaWRhdGlvbkhlYWRlckNvbXBvbmVudFxyXG4gKlxyXG4gKiBJZiB0aGUgY29udHJvbCB0aGF0IHRoaXMgZXJyb3IgbWVzc2FnZSBjb21wb25lbnQgbGlua3MgdG8gaXMgbm90IHZhbGlkIHdlXHJcbiAqIHNob3cgdGhlIEVycm9yIE1lc3NhZ2UsIHNlbnQgdGhyb3VnaCBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBjb250cm9sSWQ7XHJcblxyXG4gICAgLy8gVE9ETyA6IGRlcHJlY2F0ZSBhcyBub3QgbmVlZGVkP1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXggPSAndGEnO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICd0YSc7XHJcblxyXG4gICAgLy8gVE9ETyA6IE1vdmUgdG8gY29uc3RhbnRzIGZpbGUuXHJcbiAgICBGT1JNX0NPTlRST0wgPSAnZm9ybUNvbnRyb2wnO1xyXG4gICAgRk9STV9HUk9VUCA9ICdmb3JtR3JvdXAnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2lnbmF0dXJlIGZvciB2YWxpZGF0aW9uSGVhZGVyQ29udHJvbHMgdG8gYmUgdXNlZCBpbiBhIFVuaXQgVGVzdCBpczpcclxuICAgICAqXHJcbiAgICAgKiBbe1xyXG4gICAgICogIHZhbHVlOiAnRW50ZXIgd2hhdCBpbmZvcm1hdGlvbiBpcyBuZWVkZWQnLFxyXG4gICAgICogIGNvbnRyb2xJZDogJ2luZm9ybWF0aW9uTmVlZGVkJyxcclxuICAgICAqICBwYWdlTGluazogJyNsaW5rVG9UZXh0QXJlYSdcclxuICAgICAqIH0sXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgdmFsdWU6ICdTZWxlY3QgeWVzIGlmIHlvdSB3YW50IHRvIGluY2x1ZGUgYW4gYW5ub3RhdGVkIHZlcnNpb24gb2YgdGhlIGRyYWZ0IGNvbnNlbnQgb3JkZXInLFxyXG4gICAgICogIGNvbnRyb2xJZDogJ2luY2x1ZGVBbm5vdGF0ZWRWZXJzaW9uRHJhZnRDb25zT3JkZXInLFxyXG4gICAgICogIHBhZ2VMaW5rOiAnI2xpbmtUb1JhZGlvYnV0dG9ucydcclxuICAgICAqfV07XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2VzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAgICpcclxuICAgICAqIC8vIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgICAqIC8vIEBwYXJhbSBjb250cm9sIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzRm9ybUdyb3VwSW52YWxpZFxyXG4gICAgICpcclxuICAgICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgICAqIC8vIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JJZFxyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB3ZSBzaG91bGQgc2hvdyBhIHZhbGlkYXRpb24gbWVzc2FnZSBmb3IgYSBmb3JtIGNvbnRyb2wsIG9yIHRoZVxyXG4gICAgICogZm9ybSBncm91cC5cclxuICAgICAqXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbkxldmVsIC0gdmFsaWRhdGlvbiBsZXZlbCBjYW4gZWl0aGVyIGJlIGZvcm1Hcm91cCBvciBmb3JtQ29udHJvbC5cclxuICAgICAqIEEgZm9ybUdyb3VwIGxldmVsIGlzIHZhbGlkYXRpb24gdGhhdCBoYW5kbGVzIG11bHRpcGx5IGZvcm0gY29udHJvbHMsIHdoZW4gdmFsaWRhdGluZyBtdWx0aXBseSBjb21wb25lbnRzXHJcbiAgICAgKiBhdCB0aGUgc2FtZSB0aW1lLCBpZS4gd2hlbiB5b3Ugd2lzaCB0byBzZWUgaWYgYSBjaGVja2JveCBpcyBjaGVja2VkLCBmcm9tIG11bHRpcGx5IGNoZWNrYm94ZXMsIHlvdSBtdXN0XHJcbiAgICAgKiBjaGVjayB0aGlzIG9uIGEgY29tbW9uIGFuY2VzdG9yIG9mIGEgc2V0IG9mIGNvbnRyb2xzLiBUaGlzIGNvbW1vbiBhbmNlc3RvciBpcyBhbHdheXMgdGhlIEFuZ3VsYXIgRm9ybUdyb3VwLlxyXG4gICAgICogZm9ybUNvbnRyb2wgbGV2ZWwgaXMgdmFsaWRhdGlvbiB0aGF0IGhhbmRsZXMgYSBzaW5nbGUgZm9ybSBjb250cm9sLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgYWJzdHJhdGlvbiB3YXMgYmFzZWQgb24gaG93IEFuZ3VsYXIgNidzIEZvcm1Hcm91cCBhbmQgRm9ybUNvbnRyb2wgYXJlIGFic3RyYWN0IGZyb20gZWFjaCBvdGhlcixcclxuICAgICAqIGFmdGVyIHJlYWRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogLy8gQHBhcmFtIGNvbnRyb2xJZFxyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNWYWxpZGF0aW9uTGV2ZWwodmFsaWRhdGlvbkxldmVsOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkxldmVsID09PSBsZXZlbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJncm91cFwiICpuZ0lmPVwiIWlzRm9ybUNvbnRyb2xWYWxpZChncm91cCwgY29udHJvbElkKVwiID5cclxuICAgIDxzcGFuIGlkPVwie3tjb250cm9sSWR9fVwiIGNsYXNzPVwiZ292dWstZXJyb3ItbWVzc2FnZVwiID5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcblxyXG4vKipcclxuICogVmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnRcclxuICpcclxuICogV2Ugc2hvdyBhbiBlcnJvciBtZXNzYWdlIGlmIHRoZSBGb3JtQ29udHJvbCB0aGF0IHRoaXMgY29tcG9uZW50IGxpbmtzIHRvIHZpYSBjb250cm9sSWQgaXMgaW52YWxpZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JGb3JtQ29udHJvbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgY29udHJvbElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBGb3JtIENvbnRyb2wgVmFsaWRcclxuICAgICAqXHJcbiAgICAgKiBUT0RPOiBVbml0XHJcbiAgICAgKlxyXG4gICAgICogLy8gQHNlZSBWYWxpZGF0aW9uU2VydmljZVxyXG4gICAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAgICogLy8gQHBhcmFtIHtzdHJpbmd9IGNvbnRyb2xJZCAtIGllLiAnaW5mb3JtYXRpb25OZWVkZWQnXHJcbiAgICAgKiAvLyBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2xJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbElkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cImlzRm9ybUdyb3VwSW52YWxpZChncm91cCwgdmFsaWRhdGlvbkVycm9ySWQpXCIgPlxyXG4gICAgPHNwYW4gaWQ9XCJ7e3ZhbGlkYXRpb25FcnJvcklkfX1cIiBjbGFzcz1cImdvdnVrLWVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcblxyXG4vKipcclxuICogVmFsaWRhdGlvbiBFcnJvciBGb3JtR3JvdXAgQ29tcG9uZW50XHJcbiAqXHJcbiAqIFdlIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBpZiB0aGUgdmFsaWRhdGlvbiBlcnJvciBhc3NvY2lhdGVkIHdpdGggdGhlIEZvcm1Hcm91cCBpcyB0aHJvd24gYnkgdGhlIEZvcm1Hcm91cC5cclxuICpcclxuICogTm90ZSB0aGF0IHdlIGhhdmUgdmFsaWRhdGlvbiBvbiBib3RoIEZvcm1Hcm91cCBhbmQgRm9ybUNvbnRyb2wgbGV2ZWwuIEZvcm1Db250cm9sIGxldmVsIHRvIHZhbGlkYXRlIHNpbmdsZVxyXG4gKiBjb250cm9scywgRm9ybUdyb3VwIGxldmVsIHRvIHZhbGlkYXRlIG11bHRpcGx5IGNvbnRyb2xzLiBUaGlzIGlzIHRoZSBtZXRob2Qgc3VnZ2VzdGVkIGluIHRoZSBBbmd1bGFyIDYgZG9jdW1lbnRzLlxyXG4gKlxyXG4gKiBBbiBleGFtcGxlIG9mIG11bHRpcGx5IGNvbnRyb2xzLCB3aGVyZSB3ZSB3b3VsZCBsZXZlcmFnZSB0aGUgRm9ybUdyb3VwIHZhbGlkYXRpb24gd291bGQgYmU7IGNoZWNraW5nIGlmIG9uZVxyXG4gKiBDaGVja2JveCBpcyBjaGVja2VkLCBvdXQgYSBzZXQgb2YgbXVsdGlwbHkgQ2hlY2tib3hlcy5cclxuICpcclxuICogLy8gQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZm9ybS12YWxpZGF0aW9uI2FkZGluZy10by1yZWFjdGl2ZS1mb3Jtcy0xXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yRm9ybUdyb3VwQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3JJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgRm9ybSBHcm91cCBJbnZhbGlkXHJcbiAgICAgKlxyXG4gICAgICogVE9ETyA6IFVuaXQgVGVzdFxyXG4gICAgICpcclxuICAgICAqIC8vIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXBcclxuICAgICAqIC8vIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtIGllLiAncmVhc29uc0NvbnN0ZW50T3JkZXJOb3RBcHByb3ZlZCcgLSBUaGlzIGlzIHRoZSB2YWxpZGF0aW9uIGlkZW50aWZpZXJcclxuICAgICAqIHdlIGFzc2lnbiB0byBhIGdyb3VwIG9mIGZvcm0gY29udHJvbHMsIHdlIGFzc2lnbiB0aGlzIHdoZW4gd2UgY3VycmVudGx5IHNldFZhbGlkYXRvcnMoKSwgbm90ZSB0aGF0IHdlIHdpbGxcclxuICAgICAqIG5lZWQgdG8gcGFzcyB0aGlzIGluIG9uY2UgdGhlIFVuaXZlcnNhbCBGb3JtIEJ1aWxkZXIgaXMgbWVyZ2VkIHdpdGggVmFsaWRhdGlvbi5cclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZSwgRGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7SG1jdHNGb3JtQnVpbGRlckNvbXBvbmVudH0gZnJvbSAnLi9obWN0cy1mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGcm9tQnVpbGRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tYnVpbGRlci9mcm9tLWJ1aWxkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGaWVsZHNldENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkc2V0L2ZpZWxkc2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SnVpRm9ybUVsZW1lbnRzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvanVpLWZvcm0tZWxlbWVudHMvanVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtMZWdlbmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGludENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hpbnQvaGludC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RhdGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtJbnB1dHNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmFkaW9idXR0b25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NoZWNrYm94Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHtUZXh0YXJlYXNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYXMvdGV4dGFyZWFzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnV0dG9uc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xhYmVsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtIaWRkZW5JbnB1dENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hpZGRlbi1pbnB1dC9oaWRkZW4taW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1oZWFkZXIvdmFsaWRhdGlvbi1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JGb3JtQ29udHJvbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wvdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25FcnJvckZvcm1Hcm91cENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybXNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBGcm9tQnVpbGRlckNvbXBvbmVudCxcclxuICBGaWVsZHNldENvbXBvbmVudCxcclxuICBWYWxpZGF0aW9uRXJyb3JGb3JtR3JvdXBDb21wb25lbnQsXHJcbiAgRnJvbUJ1aWxkZXJDb21wb25lbnQsXHJcbiAgRmllbGRzZXRDb21wb25lbnQsXHJcbiAgSnVpRm9ybUVsZW1lbnRzQ29tcG9uZW50LFxyXG4gIExlZ2VuZENvbXBvbmVudCxcclxuICBIaW50Q29tcG9uZW50LFxyXG4gIERhdGVDb21wb25lbnQsXHJcbiAgSW5wdXRzQ29tcG9uZW50LFxyXG4gIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxyXG4gIENoZWNrYm94Q29tcG9uZW50LFxyXG4gIFRleHRhcmVhc0NvbXBvbmVudCxcclxuICBCdXR0b25zQ29tcG9uZW50LFxyXG4gIExhYmVsQ29tcG9uZW50LFxyXG4gIEhpZGRlbklucHV0Q29tcG9uZW50LFxyXG4gIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnQsXHJcbiAgVmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnQsXHJcbiAgSG1jdHNGb3JtQnVpbGRlckNvbXBvbmVudFxyXG5dO1xyXG5cclxuY29uc3QgU0VSVklDRVMgPSBbXHJcbiAgRm9ybXNTZXJ2aWNlLFxyXG4gIFZhbGlkYXRpb25TZXJ2aWNlLFxyXG4gIERhdGVQaXBlXHJcbl1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAuLi5TRVJWSUNFU1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhtY3RzRm9ybUJ1aWxkZXJNb2R1bGUge1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiVmFsaWRhdG9ycyIsInRzbGliXzEuX192YWx1ZXMiLCJEYXRlUGlwZSIsIkZvcm1Db250cm9sIiwiRXZlbnRFbWl0dGVyIiwiRm9ybUdyb3VwIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7c0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLDRDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSwwREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozt3Q0FWRDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esc0JBNEZ5QixDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO29CQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDM0M7U0FDSixDQUFDO0lBQ04sQ0FBQztBQUVELG9CQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFV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