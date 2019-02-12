import { Injectable, Component, EventEmitter, Input, Output, defineInjectable, NgModule, inject } from '@angular/core';
import { __spread, __values } from 'tslib';
import { Validators, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HmctsFormBuilderService = /** @class */ (function () {
    function HmctsFormBuilderService() {
    }
    HmctsFormBuilderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    HmctsFormBuilderService.ctorParameters = function () { return []; };
    /** @nocollapse */ HmctsFormBuilderService.ngInjectableDef = defineInjectable({ factory: function HmctsFormBuilderService_Factory() { return new HmctsFormBuilderService(); }, token: HmctsFormBuilderService, providedIn: "root" });
    return HmctsFormBuilderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HmctsFormBuilderComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'hmcts-hmcts-form-builder',
                    template: "\n    <p>\n      hmcts-form-builder works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    HmctsFormBuilderComponent.ctorParameters = function () { return []; };
    return HmctsFormBuilderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidationService = /** @class */ (function () {
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
                ngValidatorFunction: Validators.required
            },
            {
                simpleName: 'email',
                ngValidatorFunction: Validators.email
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (checkboxes_1_1 && !checkboxes_1_1.done && (_a = checkboxes_1.return)) _a.call(checkboxes_1);
                }
                finally { if (e_2) throw e_2.error; }
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
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (fields_1_1 && !fields_1_1.done && (_b = fields_1.return)) _b.call(fields_1);
                }
                finally { if (e_3) throw e_3.error; }
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
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (dateValueArray_1_1 && !dateValueArray_1_1.done && (_d = dateValueArray_1.return)) _d.call(dateValueArray_1);
                                }
                                finally { if (e_4) throw e_4.error; }
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
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (fields_2_1 && !fields_2_1.done && (_h = fields_2.return)) _h.call(fields_2);
                }
                finally { if (e_5) throw e_5.error; }
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
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_6) throw e_6.error; }
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return [
        { type: DatePipe }
    ]; };
    /** @nocollapse */ ValidationService.ngInjectableDef = defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(inject(DatePipe)); }, token: ValidationService, providedIn: "root" });
    return ValidationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormsService = /** @class */ (function () {
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
                                        this.FormControls[someJson.control] = new FormControl(radioEl.value);
                                        break;
                                    }
                                    else {
                                        this.createFormControl(null, someJson.control, someJson.validators);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        else {
                            this.FormControls[someJson.control] = new FormControl();
                        }
                    }
                    else {
                        if (someData[someJson.control]) {
                            this.FormControls[someJson.control] = new FormControl(someData[someJson.control]);
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (someJson_1_1 && !someJson_1_1.done && (_d = someJson_1.return)) _d.call(someJson_1);
                }
                finally { if (e_2) throw e_2.error; }
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
            this.FormControls[controlName] = new FormControl(initialValue, this.validationService.getNgValidators(validators));
            return;
        }
        this.FormControls[controlName] = new FormControl(initialValue);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    FormsService.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    /** @nocollapse */ FormsService.ngInjectableDef = defineInjectable({ factory: function FormsService_Factory() { return new FormsService(inject(ValidationService)); }, token: FormsService, providedIn: "root" });
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
var FromBuilderComponent = /** @class */ (function () {
    function FromBuilderComponent(formsService, validationService) {
        this.formsService = formsService;
        this.validationService = validationService;
        this.submitPage = new EventEmitter();
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
        this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));
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
        { type: Component, args: [{
                    selector: 'app-form-builder',
                    template: "<ng-container *ngIf=\"isPageValid && formDraft.invalid\">\n  <app-validation-header [validationHeaderErrorMessages]=\"this.pageItems.validationHeaderErrorMessages\" [formGroup]=\"formDraft\">\n  </app-validation-header>\n</ng-container>\n\n<form *ngIf=\"pageItems\" [formGroup]=\"formDraft\" (ngSubmit)=\"onFormSubmit()\">\n  <div [ngClass]=\"{'govuk-form-group':true, 'govuk-form-group--error' : isPageValid && formDraft.invalid }\">\n    <h1 class=\"govuk-heading-xl\">\n      <span *ngIf=\"pageItems.caption\" [class]=\"pageItems.caption.classes\">{{ pageItems.caption.text }}</span>\n      {{pageItems.header}}\n    </h1>\n    <div class=\"govuk-form-group\" *ngFor=\"let group of pageItems.groups\">\n      <app-fieldset *ngIf=\"group.fieldset\"\n                    [classes]=\"'govuk-fieldset'\"\n                    [group]=\"formDraft\"\n                    [data]=\"group.fieldset\"\n                    [validate]=\"isPageValid\">\n      </app-fieldset>\n      <app-jui-form-elements [group]=\"formDraft\" [validate]=\"isPageValid\" [data]=\"group\"></app-jui-form-elements>\n    </div>\n  </div>\n</form>\n"
                },] },
    ];
    /** @nocollapse */
    FromBuilderComponent.ctorParameters = function () { return [
        { type: FormsService },
        { type: ValidationService }
    ]; };
    FromBuilderComponent.propDecorators = {
        pageItems: [{ type: Input }],
        pageValues: [{ type: Input }],
        isPageValid: [{ type: Input }],
        submitPage: [{ type: Output }]
    };
    return FromBuilderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FieldsetComponent = /** @class */ (function () {
    function FieldsetComponent() {
    }
    FieldsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-fieldset',
                    template: "<fieldset [attr.validate]=\"validate\" [class]=\"classes\" [attr.data]=\"data\" [attr.group]=\"group\">\n    <ng-container *ngFor=\"let item of data\">\n        <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"item\"></app-jui-form-elements>\n    </ng-container>\n    <ng-content></ng-content>\n</fieldset>\n"
                },] },
    ];
    FieldsetComponent.propDecorators = {
        classes: [{ type: Input }],
        validate: [{ type: Input }],
        group: [{ type: Input }],
        data: [{ type: Input }]
    };
    return FieldsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JuiFormElementsComponent = /** @class */ (function () {
    function JuiFormElementsComponent() {
    }
    JuiFormElementsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-jui-form-elements',
                    template: "<div [attr.validate]=\"validate\" [attr.data]=\"data\" [attr.group]=\"group\">\n  <!--JUI FORM builder component -->\n  <app-legend *ngIf=\"data.legend\" [classes]=\"data.legend.classes\">\n    {{data.legend.text}}\n  </app-legend>\n  <app-hint *ngIf=\"data.hint\" [classes]=\"data.hint.classes\">\n    {{data.hint.text}}\n  </app-hint>\n  <ng-container *ngIf=\"data.validationError && validate\">\n    <app-validation-error-formgroup [group]=\"group\" [validationErrorId]=\"data.validationError.identifier\">\n      {{data.validationError.value}}\n    </app-validation-error-formgroup>\n  </ng-container>\n  <app-date *ngIf=\"data.date\"\n            [id]=\"data.date.formName\"\n            [data]=\"data.date\"\n            [group]=\"group\"\n            [validate]=\"validate\"\n            [validationError]=\"data.date.validationError\">\n  </app-date>\n  <app-inputs *ngIf=\"data.input\"\n              [item]=\"data.input\"\n              [showValidation]=\"validate\"\n              [validationError]=\"data.input.validationError\"\n              [group]=\"group\"\n              [hint]=\"data.input.hint\"\n              [label]=\"data.input.label\"\n              [labelFor]=\"data.input.control\"></app-inputs>\n  <app-radiobutton *ngIf=\"data.radios\" [classes]=\"'govuk-radios ' + data.radios.classes\"\n                   [items]=\"data.radios.radioGroup\"\n                   [group]=\"group\"\n                   [control]=\"data.radios.control\"\n                   [idPrefix]=\"data.radios.control\"\n                   [validate]=\"validate\"\n                   [showValidation]=\"validate\"\n                   [validationError]=\"data.radios.validationError\">\n  </app-radiobutton>\n  <div *ngIf=\"data.checkbox\" class=\"govuk-checkboxes\">\n    <app-checkbox [group]=\"group\"\n                  [validate]=\"validate\"\n                  [idPrefix]=\"data.checkbox.control\"\n                  [items]=\"data.checkbox\"\n                  [classes]=\"'govuk-checkboxes__item'\"\n                  [labelClasses]=\"'govuk-label govuk-checkboxes__label'\">\n      <div class=\"govuk-form-group\">\n        <div *ngIf=\"data.checkbox.groups && group.controls[data.checkbox.control].value\" class=\"govuk-checkboxes__conditional\"\n             [ngStyle] = \"{ 'border-left': (validate && group.invalid) ? '5px solid #b10e1e' : '' }\">\n          <ng-container  *ngFor=\"let subgroup of data.checkbox.groups\">\n            <app-fieldset *ngIf=\"subgroup.fieldset\"\n                          [validate]=\"validate\"\n                          [classes]=\"'govuk-fieldset'\"\n                          [group]=\"group\"\n                          [data]=\"subgroup.fieldset\"\n            >\n            </app-fieldset>\n            <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"subgroup\"></app-jui-form-elements>\n          </ng-container>\n        </div>\n      </div>\n    </app-checkbox>\n  </div>\n\n  <app-textareas *ngIf=\"data.textarea\" [classes]=\"'govuk-textarea'\"\n                 [showValidation]=\"validate\"\n                 [validationError]=\"data.textarea.validationError\"\n                 [group]=\"group\"\n                 [control]=\"data.textarea.control\"\n                 [label]=\"data.textarea.label\"\n                 [labelFor]=\"data.textarea.control\"\n                 [rows]=\"5\">\n  </app-textareas>\n  <app-buttons *ngIf=\"data.button\"\n               [classes]=\"'govuk-button'\"\n               [typeBtn]=\"data.button.type\"\n               [group]=\"group\"\n               [control]=\"data.button.control\"\n               [value]=\"data.button.value\">\n  </app-buttons>\n  <!--JUI FORM builder component -->\n</div>\n"
                },] },
    ];
    JuiFormElementsComponent.propDecorators = {
        group: [{ type: Input }],
        data: [{ type: Input }],
        validate: [{ type: Input }]
    };
    return JuiFormElementsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
    }
    LegendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-legend',
                    template: "<legend [class]=\"'govuk-fieldset__legend ' + classes\">\n    <ng-content></ng-content>\n</legend>\n"
                },] },
    ];
    LegendComponent.propDecorators = {
        classes: [{ type: Input }]
    };
    return LegendComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HintComponent = /** @class */ (function () {
    function HintComponent() {
    }
    HintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-hint',
                    template: "<span [class]=\"classes\">\n    <ng-content></ng-content>\n</span>\n",
                    styles: [""]
                },] },
    ];
    HintComponent.propDecorators = {
        classes: [{ type: Input }]
    };
    return HintComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-date',
                    template: "<ng-container>\n    <app-validation-error-formgroup *ngIf=\"data.validationError && validate\" [group]=\"group\" [validationErrorId]=\"data.validationError.identifier\">\n        {{data.validationError.value}}\n    </app-validation-error-formgroup>\n    <div class=\"govuk-date-input\" [id]=\"id\" [attr.data]=\"data\">\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.day.input\"\n                            [group]=\"group\"\n                            [label]=\"data.day.input.label\"\n                            [labelFor]=\"data.day.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.month.input\"\n                            [group]=\"group\"\n                            [label]=\"data.month.input.label\"\n                            [labelFor]=\"data.month.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.year.input\"\n                            [group]=\"group\"\n                            [label]=\"data.year.input.label\"\n                            [labelFor]=\"data.year.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n    </div>\n</ng-container>\n"
                },] },
    ];
    DateComponent.propDecorators = {
        group: [{ type: Input }],
        id: [{ type: Input }],
        data: [{ type: Input }],
        validate: [{ type: Input }],
        showValidation: [{ type: Input }],
        validationError: [{ type: Input }]
    };
    return DateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputsComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-inputs',
                    template: "<ng-container [formGroup]=\"group\">\n  <app-label [forElement]=\"labelFor\">{{label.text}}\n  </app-label>\n  <app-hint *ngIf=\"hint\" [classes]=\"hint.classes\">\n    {{hint.text}}\n  </app-hint>\n  <ng-container *ngIf=\"validationError\">\n    <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"item.control\" id=\"{{item.control}}\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <input [class]=\"'govuk-input ' + item.classes\"\n         [formControlName]=\"item.control\"\n         [id]=\"item.control\"\n         [name]=\"item.control\"\n         [ngClass]=\"{'govuk-input--error':isControlInvalidAndShowValidation(group, item.control, showValidation)}\"\n         type=\"text\">\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    InputsComponent.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    InputsComponent.propDecorators = {
        group: [{ type: Input }],
        item: [{ type: Input }],
        label: [{ type: Input }],
        hint: [{ type: Input }],
        labelFor: [{ type: Input }],
        showValidation: [{ type: Input }],
        validationError: [{ type: Input }]
    };
    return InputsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
        this.idPrefix = 'rb';
        this.name = 'rb';
    }
    RadiobuttonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-radiobutton',
                    template: "<ng-container>\n  <ng-container *ngIf=\"validationError\">\n      <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"control\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <div [class]=\"classes\" [formGroup]=\"group\">\n      <ng-container *ngFor=\"let data of items; let i = index\">\n        <div *ngIf=\"data.devider\" class=\"govuk-radios__divider\">{{data.devider}}</div>\n        <div *ngIf=\"!data.devider\" class=\"govuk-radios__item\">\n            <input class=\"govuk-radios__input\" id=\"{{control + data.value}}\" [formControlName]=\"control\" type=\"radio\" [value]= \"data.value\">\n            <label class=\"govuk-label govuk-radios__label\" for=\"{{control + data.value}}\">\n                {{data.text}}\n            </label>\n            <ul *ngIf=\"data.list\" [class]=\"'govuk-list' + data.list.classes\">\n              <li *ngFor=\"let item of data.list.text\">{{ item }}</li>\n            </ul>\n            <app-hint *ngIf=\"data.hint\" [classes]=\"data.hint.classes\">\n                {{data.hint.text}}\n            </app-hint>\n        </div>\n        <div class=\"govuk-form-group\">\n            <div *ngIf=\"data.groups && group.value[control]===data.value\" class=\"govuk-radios__conditional\">\n                <ng-container *ngFor=\"let subgroup of data.groups\">\n                    <app-fieldset *ngIf=\"subgroup.fieldset\"\n                                  [classes]=\"'govuk-fieldset'\"\n                                  [group]=\"group\"\n                                  [data]=\"subgroup.fieldset\"\n                                  [validate]=\"validate\"\n                                  >\n                    </app-fieldset>\n                    <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"subgroup\"></app-jui-form-elements>\n                </ng-container>\n            </div>\n        </div>\n      </ng-container>\n  </div>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    RadiobuttonComponent.ctorParameters = function () { return []; };
    RadiobuttonComponent.propDecorators = {
        group: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        items: [{ type: Input }],
        classes: [{ type: Input }],
        control: [{ type: Input }],
        validate: [{ type: Input }],
        showValidation: [{ type: Input }],
        validationError: [{ type: Input }]
    };
    return RadiobuttonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-checkbox',
                    template: "<ng-container>\n    <div  *ngIf=\"group\" class=\"govuk-checkboxes__item\" [formGroup]=\"group\">\n        <input class=\"govuk-checkboxes__input\" [formControlName]=\"items.control\" id=\"{{items.control}}\" type=\"checkbox\" [value]=\"items.value\">\n        <app-label [class]=\"labelClasses\" [forElement]=\"items.control\">{{items.text}}</app-label>\n    </div>\n    <ng-content></ng-content>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        group: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        items: [{ type: Input }],
        classes: [{ type: Input }],
        labelClasses: [{ type: Input }],
        validate: [{ type: Input }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextareasComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-textareas',
                    template: "<ng-container [formGroup]=\"group\">\n  <app-label\n             [forElement]=\"labelFor\">{{label.text}}\n  </app-label>\n  <ng-container *ngIf=\"validationError\">\n    <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"control\" id=\"{{control}}\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <textarea [class]=\"classes\"\n            [ngClass]=\"{'govuk-textarea--error':isControlInvalidAndShowValidation(group, control, showValidation) || isGroupInvalidAndShowValidation(group, showValidation)}\"\n            [rows]=\"rows\"\n            [id]=\"labelFor\"\n            [attr.aria-label]=\"labelFor\"\n            [formControlName]=\"control\"></textarea>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    TextareasComponent.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    TextareasComponent.propDecorators = {
        group: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }],
        labelFor: [{ type: Input }],
        rows: [{ type: Input }],
        classes: [{ type: Input }],
        control: [{ type: Input }],
        showValidation: [{ type: Input }],
        label: [{ type: Input }],
        items: [{ type: Input }],
        validationError: [{ type: Input }]
    };
    return TextareasComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonsComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-buttons',
                    template: "<ng-container *ngIf=\"group\" [formGroup]=\"group\">\n    <input id=\"{{control + value}}\" [class]=\"classes\" [type]=\"typeBtn\" [formControlName]=\"control\" [value]=\"value\">\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    ButtonsComponent.ctorParameters = function () { return []; };
    ButtonsComponent.propDecorators = {
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        group: [{ type: Input }],
        classes: [{ type: Input }],
        typeBtn: [{ type: Input }],
        control: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ButtonsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    LabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-label',
                    template: "<label [attr.for]=\"forElement\"><ng-content></ng-content></label>\n"
                },] },
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return []; };
    LabelComponent.propDecorators = {
        forElement: [{ type: Input }]
    };
    return LabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HiddenInputComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-hidden-input',
                    template: "<ng-container\n  [formGroup]=\"group\">\n    <input\n           [ngClass]=\"componentClasses\"\n           [formControlName]=\"item.control\"\n           [id]=\"item.control\"\n           [name]=\"item.control\"\n           [value]=\"value\"\n           type=\"hidden\">\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    HiddenInputComponent.ctorParameters = function () { return []; };
    HiddenInputComponent.propDecorators = {
        group: [{ type: Input }],
        item: [{ type: Input }],
        value: [{ type: Input }]
    };
    return HiddenInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidationHeaderComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-validation-header',
                    template: "<div class=\"govuk-error-summary\" aria-labelledby=\"error-summary-title\" role=\"alert\" tabindex=\"-1\"\n     data-module=\"error-summary\">\n  <h2 class=\"govuk-error-summary__title\" id=\"error-summary-title\">\n    There is a problem\n  </h2>\n  <div class=\"govuk-error-summary__body\">\n    <ul class=\"govuk-list govuk-error-summary__list\">\n      <li *ngFor=\"let validationHeaderErrorMessage of validationHeaderErrorMessages\">\n        <ng-container *ngIf=\"isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_CONTROL) &&\n                                        !isFormControlValid(formGroup, validationHeaderErrorMessage.controlId)\">\n          <a routerLink=\"./\" fragment=\"{{validationHeaderErrorMessage.href}}\">{{validationHeaderErrorMessage.text}}</a>\n        </ng-container>\n        <ng-container\n          *ngIf=\"isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_GROUP) &&\n                                isFormGroupInvalid(formGroup, validationHeaderErrorMessage.formGroupValidationErrorId)\">\n          <a routerLink=\"./\" fragment=\"{{validationHeaderErrorMessage.href}}\">{{validationHeaderErrorMessage.text}}</a>\n        </ng-container>\n      </li>\n    </ul>\n  </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ValidationHeaderComponent.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    ValidationHeaderComponent.propDecorators = {
        formGroup: [{ type: Input }],
        controlId: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        validationHeaderErrorMessages: [{ type: Input }]
    };
    return ValidationHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidationErrorFormControlComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-validation-error-formcontrol',
                    template: "<ng-container [formGroup]=\"group\" *ngIf=\"!isFormControlValid(group, controlId)\" >\n    <span id=\"{{controlId}}\" class=\"govuk-error-message\" >\n        <ng-content></ng-content>\n    </span>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    ValidationErrorFormControlComponent.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    ValidationErrorFormControlComponent.propDecorators = {
        group: [{ type: Input }],
        controlId: [{ type: Input }]
    };
    return ValidationErrorFormControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidationErrorFormGroupComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-validation-error-formgroup',
                    template: "<ng-container [formGroup]=\"group\" *ngIf=\"isFormGroupInvalid(group, validationErrorId)\" >\n    <span id=\"{{validationErrorId}}\" class=\"govuk-error-message\">\n        <ng-content></ng-content>\n    </span>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    ValidationErrorFormGroupComponent.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    ValidationErrorFormGroupComponent.propDecorators = {
        group: [{ type: Input }],
        validationErrorId: [{ type: Input }]
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
    DatePipe
];
var HmctsFormBuilderModule = /** @class */ (function () {
    function HmctsFormBuilderModule() {
    }
    HmctsFormBuilderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        ReactiveFormsModule
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

export { HmctsFormBuilderService, HmctsFormBuilderComponent, HmctsFormBuilderModule, FromBuilderComponent, FieldsetComponent, JuiFormElementsComponent, LegendComponent, HintComponent, DateComponent, InputsComponent, RadiobuttonComponent, CheckboxComponent, TextareasComponent, ButtonsComponent, LabelComponent, HiddenInputComponent, ValidationHeaderComponent, ValidationErrorFormControlComponent, ValidationErrorFormGroupComponent, FormsService, ValidationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1ucG0tbW9kdWxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2Zvcm0tYnVpbGRlci9mcm9tLWJ1aWxkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvanVpLWZvcm0tZWxlbWVudHMvanVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvaGlkZGVuLWlucHV0L2hpZGRlbi1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWhlYWRlci92YWxpZGF0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2htY3RzLWhtY3RzLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBobWN0cy1mb3JtLWJ1aWxkZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm0sIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Y29udHJvbHNpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkLCBjb250cm9sc1JhZGlvQ29uZGl0aW9uYWxNb2RlbCwgRm9ybUdyb3VwVmFsaWRhdG9yfSBmcm9tICcuL2Zvcm0tZ3JvdXAtdmFsaWRhdGlvbi50eXBlc2NyaXB0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgLy8gRk9SIFNJTkdMRSBDT05UUk9MUyAtIGZvcm1Hcm91cC5jb250cm9sIGxldmVsIHZhbGlkYXRpb25cclxuICAvKipcclxuICAgKiBDdXN0b20gdmFsaWRhdG9ycyBjYW4gYmUgYWRkZWQgdG8gdGhpcy5cclxuICAgKlxyXG4gICAqIFRPRE8gOiBEZWZpbmUgaW50ZXJmYWNlIGZvciBhcnJheS5cclxuICAgKiBUT0RPIDogQWRkIGEgQ3VzdG9tIFZhbGlkYXRvciBleGFtcGxlLlxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZm9ybS12YWxpZGF0aW9uI2N1c3RvbS12YWxpZGF0b3JzXHJcbiAgICovXHJcbiAgbmdWYWxpZGF0b3JGdW5jdGlvbk1hcDogQXJyYXk8YW55PiA9IFtcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ3JlcXVpcmVkJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ2VtYWlsJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5lbWFpbFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIG1hcCBvZiBob3cgd2UndmUgbWFwcGVkIHNpbXBsZSBuYW1lcyB0byBOZyBWYWxpZGF0b3JzLCBhbmQgaW4gdGhlIGZ1dHVyZSBjdXN0b20gdmFsaWRhdG9ycy5cclxuICAgKlxyXG4gICAqIFRPRE86IENoZWNrIHJldHVybiBpbiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiAvLyBAcmV0dXJuQXJyYXlcclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRpb25GdW5jdGlvbk1hcCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5nVmFsaWRhdG9yRnVuY3Rpb25NYXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlcyBpbiBhbiBhcnJheSBvZiBzaW1wbGUgdmFsaWRhdGlvbiBuYW1lcy5cclxuICAgKlxyXG4gICAqIFRoZXNlIG5hbWVzIG1hcCB0byBOZyBWYWxpZGF0aW9uIGZ1bmN0aW9ucywgYW5kIGNhbiBtYXAgdG8gbW9yZSBjb21wbGV4IGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy5cclxuICAgKlxyXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIGxldmVyYWdlIHRoZSBwb3dlciBvZiBOZyBWYWxpZGF0aW9uLCBhbmQgY3VzdG9tIHZhbGlkYXRpb24sIGFzIHdlbGwgYXMgZ2l2aW5nIHVzXHJcbiAgICogdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHJldXNhYmxlIHZhbGlkYXRvcnMsIHRoYXQgY2FuIGJlIHVzZWQgdGhyb3VnaG91dCBvdXIgZm9ybXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiBWYWxpZGF0b3JzLm1pbkxlbmd0aCByZXF1aXJlcyBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICpcclxuICAgKiBUT0RPOiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGFcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdG9ycyAtIGllLiBbJ3JlcXVpcmVkJywgJ2VtYWlsJ11cclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8c3RyaW5nPik6IGFueVtdIHtcclxuXHJcbiAgICBjb25zdCBuZ1ZhbGlkYXRvcnM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICB2YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvck5hbWUpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBuZ1ZhbGlkYXRvckZ1bmN0aW9uIG9mIHRoaXMuZ2V0TmdWYWxpZGF0aW9uRnVuY3Rpb25NYXAoKSkge1xyXG4gICAgICAgIGlmIChuZ1ZhbGlkYXRvckZ1bmN0aW9uLnNpbXBsZU5hbWUgPT09IHZhbGlkYXRvck5hbWUpIHtcclxuICAgICAgICAgIG5nVmFsaWRhdG9ycy5wdXNoKG5nVmFsaWRhdG9yRnVuY3Rpb24ubmdWYWxpZGF0b3JGdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmdWYWxpZGF0b3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZhbGlkYXRvcnMgaGF2ZSBiZWVuIHNldCBvbiB0aGUgY29udHJvbCwgYW4gZXhhbXBsZSBvZiBhIHZhbGlkYXRvciBiZWluZyBzZXQgb24gYSBjb250cm9sIGlzOlxyXG4gICAqXHJcbiAgICoge1xyXG4gICAgICogIGNvbnRyb2w6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgdmFsdWU6ICdJbmZvcm1hdGlvbiB0ZXh0JyxcclxuICAgICAqICB2YWxpZGF0b3JzOiBbJ3JlcXVpcmVkJ11cclxuICAgICAqIH1cclxuICAgKlxyXG4gICAqIFRPRE86IFVuaXQgdGVzdC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHtBcnJheX0gdmFsaWRhdG9ycyAtIFsncmVxdWlyZWQnXVxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMgJiYgdmFsaWRhdG9ycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogUmV0dXJucyBhIGJvb2xlYW4sIGJhc2VkIG9uIGlmIHRoZSBjb250cm9sIHdoaWNoIGlzIHBhcnRcclxuICAgKiBvZiBhIGZvcm0gZ3JvdXAgaXMgdmFsaWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogVE9ETzogVW5pdCB0ZXN0LlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSBjb250cm9sIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gZm9ybUdyb3VwLmdldChjb250cm9sKS52YWxpZDtcclxuICB9XHJcblxyXG4gIC8vIEZPUiBNVUxUSVBMWSBDT05UUk9MUyAtIGZvcm1Hcm91cCBsZXZlbCB2YWxpZGF0aW9uLlxyXG4gIC8qKlxyXG4gICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAqXHJcbiAgICogQ2hlY2tzIGlmIGEgdmFsaWRhdGlvbiBlcnJvciBoYXMgYmVlbiB0aHJvd24gb24gdGhlIHBhZ2VzIEFuZ3VsYXIgRm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIGlzIGEgdGhlIHBhcmVudCBvZiBGb3JtQ29udHJvbHMsIGFuZCB0aGVyZWZvcmUgYW5kIGFjY29yZGluZyB0byB0aGUgQW5ndWxhclxyXG4gICAqIERvY3MgdGhlIGJlc3QgcGxhY2UgdG8gdmFsaWRhdGUgYWdhaW5zdCBtdWx0aXBseSBjb250cm9scywgdGhhdCBoYXZlIGRlcGVuZGVuY2llcyB1cG9uIG9uZVxyXG4gICAqIGFub3RoZXIgaXMgb24gdGhlIEZvcm1Hcm91cCBsZXZlbC5cclxuICAgKlxyXG4gICAqIEFuIGV4YW1wbGUgYmVpbmc7IHdlIHNob3VsZCBjaGVjayBpZiBhIHVzZXIgaGFzIGNoZWNrZWQgb25lIG9mIGVpZ2h0IGNoZWNrYm94ZXMuXHJcbiAgICpcclxuICAgKiBUT0RPIDogVW5pdCBUZXN0XHJcbiAgICpcclxuICAgKiBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtIGllLiAncmVhc29uc0NvbnN0ZW50T3JkZXJOb3RBcHByb3ZlZCcgLSBUaGlzIGlzIHRoZSB2YWxpZGF0aW9uIGlkZW50aWZpZXJcclxuICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICogbmVlZCB0byBwYXNzIHRoaXMgaW4gb25jZSB0aGUgVW5pdmVyc2FsIEZvcm0gQnVpbGRlciBpcyBtZXJnZWQgd2l0aCBWYWxpZGF0aW9uLlxyXG4gICAqIC8vIEByZXR1cm57Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChmb3JtR3JvdXAuZXJyb3JzICYmIGZvcm1Hcm91cC5lcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9ySWQpKSB7XHJcbiAgICAgIHJldHVybiBmb3JtR3JvdXAuZXJyb3JzW3ZhbGlkYXRpb25FcnJvcklkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbnlDaGVja2JveENoZWNrZWRcclxuICAgKlxyXG4gICAqIENoZWNrcyBpZiBhbnkgb2YgdGhlIGNoZWNrYm94IGNvbnRyb2xzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZSBjaGVja2VkIGllLiBoYXZlIGEgYm9vbGVhbiB2YWx1ZVxyXG4gICAqIG9mIHRydWUuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHdlIG1pZ2h0IGhhdmUgbXVsdGlwbHkgY2hlY2tib3hlcyB3aXRoaW4gdGhlIHZpZXcsIGFuZCB0aGUgdXNlciBuZWVkcyB0b1xyXG4gICAqIHNlbGVjdCBhdCBsZWFzdCBvbmUgb2YgdGhlc2UgY2hlY2tib3hlcyB0byBoYXZlIGVudGVyZWQgYSB2YWxpZCBpbnB1dC5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB3ZSB2YWxpZGF0ZSBvbiB0aGUgZm9ybUdyb3VwIGxldmVsLCBhbmQgbm90IHRoZSBjb250cm9sIGxldmVsIGZvciB0aGlzIGFzIHdlIGFyZSBjb25jZXJuZWQgd2l0aFxyXG4gICAqIG11bHRpcGxlIGNvbnRyb2xzIGFuZCB0aGUgTmcgNiB3YXkgaXMgdG8gaGF2ZSB0aGUgdmFsaWRhdG9yIG9uIGEgY29tbW9uIGFuY2VzdG9yIG9mIGNvbnRyb2xzOyBpbiB0aGlzXHJcbiAgICogY2FzZSBvdXIgZm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIGNoZWNrZWQgYSBjaGVja2VkIGJveCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbCBhbmQgdGhlcmVmb3JlIG5vIHZhbGlkYXRpb24gZXJyb3IgaXMgcmV0dXJuZWQuXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIE5PVCBjaGVja2VkIGEgY2hlY2tib3ggdGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvci5cclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbklkZW50aWZpZXIgLSBBbiBlcnJvciBuYW1lIGFzc2lnbmVkIGJ5IHRoZSBkZXZlbG9wZXIsIHRoaXMgbmFtZSBjYW4gdGhlbiBiZSByZWZlcnJlZFxyXG4gICAqIHRvIGRpc3BsYXkgdGhlIGVycm9yIGluIHRoZSAgdmlldy5cclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuICBpc0FueUNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY2hlY2tib3hlczogQXJyYXk8c3RyaW5nPiwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbiAgICBjb25zdCBpc0FueUNoZWNrYm94Q2hlY2tlZFZhbGlkYXRpb25GbjogVmFsaWRhdG9yRm4gPSAoY29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG4gICAgICAgIGlmIChjb250cm9scy5nZXQoY2hlY2tib3gpLnZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzQW55Q2hlY2tib3hDaGVja2VkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIENvbW1vbiBmdW5jdGlvbiBmb3IgdmFsaWRhdG9yXHJcbiAgLy8gUmV0dXJuaW5uZyB0aGUgdmFsaWRhdGlvbklkZW50aWZpZXIgdHJ1ZSBpZiBpbnZhbGlkIGFuZCBudWxsIGlmIHZhbGlkXHJcblxyXG4gIGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcbiAgICBpZiAoY29udHJvbHMgIT09IG51bGwgJiYgZmllbGRzICE9PSBudWxsKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbGxGaWVsZHNSZXF1aXJlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNBbGxGaWVsZHNSZXF1aXJlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKTogVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuICAgIGNvbnN0IGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHMsIGZpZWxkcywgdmFsaWRhdGlvbklkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpc0FsbEZpZWxkc1JlcXVpcmVkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqIENvbW1vbiBmdW5jdGlvbiBmb3IgZGF0ZSB2YWxpZGF0b3JcclxuICAgKiBSZXR1cm5pbm5nIHRoZSB2YWxpZGF0aW9uSWRlbnRpZmllciB0cnVlIGlmIGludmFsaWQgYW5kIG51bGwgaWYgdmFsaWRcclxuICAgKlxyXG4gICAqIHl5eXkvbW0vZGRcclxuICAgKlxyXG4gICAqL1xyXG5cclxuXHJcbiAgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcblxyXG4gICAgaWYgKGNvbnRyb2xzICE9PSBudWxsICYmIGZpZWxkcyAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkYXRlVmFsdWVBcnJheSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgLy8gRm9ybSBoYXZlIHZhbGlkIHZhbHVlcyBhbmQgd2UgY2FuIGNyZWF0ZSBkYXRlXHJcbiAgICAgICAgICAvLyBDaGVjayBpcyBmb3JtIGNvbnRyb2xzIG1hdGNoaW5nIHRoZSByaWdodCBsZW5naCBhbmQgdGhlbiBjcmVhdGUgYXJyYXkgY29udGFpbmVkIGRhdGVcclxuXHJcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICBkYXRlVmFsdWVBcnJheS5wdXNoKGNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXkucHVzaChjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGlmIGFycmF5IGlzIHJlYWR5IGFuZCBjb252ZXJ0IHRvIHN0cmluZ1xyXG5cclxuICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheS5sZW5ndGggPT09IDMpe1xyXG5cclxuICAgICAgICAgICAgLy9SZXR1cm4gZXJyb3IgaWYgbm90IG51bWJlcnNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRhdGVWYWx1ZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gTnVtYmVyKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB1c2VyIGVudGVyZWQgZGF5IGFuZCBtb250aCB0byBudW1iZXJzXHJcbiAgICAgICAgICAgIGRhdGVWYWx1ZUFycmF5WzFdID0gTnVtYmVyKGRhdGVWYWx1ZUFycmF5WzFdKTtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXlbMl0gPSBOdW1iZXIoZGF0ZVZhbHVlQXJyYXlbMl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGVycm9yIGlmIHVzZXIgZW50ZXJlZCBtb250aHMgbGVzcyB0aGFuIDAgYW5kIG1vcmUgdGhhbiAxMlxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMV0gPD0gMCB8fCBkYXRlVmFsdWVBcnJheVsxXSA+PSAxMikge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZXJyb3IgaWYgdXNlciBlbnRlcmVkIG1vbnRocyBsZXNzIHRoYW4gMCBhbmQgbW9yZSB0aGFuIDMxXHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheVsyXSA8PSAwIHx8IGRhdGVWYWx1ZUFycmF5WzJdID49IDMxKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBIZXJlIHZhbHVlIG1pZ2h0IG1lIGludmFsaWRcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyB6ZXJvcyBpbiBmcm9udCBpZiBsZXNzIHRoYW4gMTBcclxuICAgICAgICAgICAgaWYgKGRhdGVWYWx1ZUFycmF5WzFdIDwgMTApIHsgZGF0ZVZhbHVlQXJyYXlbMV0gPSAoXCIwXCIgKyAoZGF0ZVZhbHVlQXJyYXlbMV0pLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTsgfVxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMl0gPCAxMCkgeyBkYXRlVmFsdWVBcnJheVsyXSA9IChcIjBcIiArIChkYXRlVmFsdWVBcnJheVsyXSkudG9TdHJpbmcoKS5zbGljZSgtMikpOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgcHJvcGVyIGRhdGUgZm9ybWF0IGJ5IGNyZWF0ZSBEYXRlIG9iamVjdCBhbmQgY29udmVydCBpdCBiYWNrIHRvIHN0cmluZyBmb3IgY29tcGFyaXNvbiB3aXRoIHdoYXQgdGhlIHVzZXIgZW50ZXJlZFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGVWYWx1ZUFycmF5LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRGF0ZVN0ciA9IGRhdGVPYmoudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCBcIixcIikucmVwbGFjZShcIlRcIiwgXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIG51bGwgaWYgdmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tEYXRlU3RyID09PSBkYXRlU3RyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWREYXRlKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB8IG51bGwge1xyXG4gICAgY29uc3QgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlVmFsaWRhdGlvbkZuKGNvbnRyb2xzLCBmaWVsZHMsIHZhbGlkYXRpb25JZGVudGlmaWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWREYXRlVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiB7IGNoZWNrYm94Q29udHJvbCA6IHN0cmluZywgdGV4dGFyZWFDb250cm9sIDogc3RyaW5nIH1cclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvL0ByZXR1cm4ge2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbHM6IGNvbnRyb2xzaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZCwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICBjb25zdCBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGlmICghZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5jaGVja2JveENvbnRyb2wpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnRleHRhcmVhQ29udHJvbCkudmFsdWUgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy50ZXh0YXJlYUNvbnRyb2wpLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0gY29udHJvbHMgaXMgb2JqZWN0XHJcbiAgICogeyBjaGVja2JveENvbnRyb2wgOiBzdHJpbmcsIHRleHRhcmVhQ29udHJvbCA6IHN0cmluZyB9XHJcbiAgICogLy8gQHBhcmFtIHZhbGlkYXRpb25JZGVudGlmaWVyXHJcbiAgICogLy8gQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG5cclxuICBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sczogYW55LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKXtcclxuXHJcbiAgICBjb25zdCBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbnRyb2xzLnNlbGVjdGVkT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnJhZGlvQ29udHJvbCkudmFsdWUgIT09IG51bGwgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5yYWRpb0NvbnRyb2wpLnZhbHVlICE9PSBvcHRpb24uc2VsZWN0ZWRPcHRpb24pIHtcclxuXHJcbiAgICAgICAgICAvLyBEbyBub3QgdmFsaWRhdGUgY2hpbGQgaWYgcGFyZW50IGlzIHZhbGlkIHNvXHJcbiAgICAgICAgICAvLyBSZXNldCBjaGlsZCB2YWxpZGF0aW9uIHRvIHZhbGlkIHN0YXRlIGhlcmVcclxuICAgICAgICAgIC8vIEFkZCB3b3JkIFwiVmFsaWRhdGlvbkZuXCIgdG8gdGhlIG5hbWUgb2YgdmFsaWRhdG9yIHdoZW4geW91IGV4dGVuZCBjaGlsZCB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdG9yRnVuYykge1xyXG4gICAgICAgICAgICByZXR1cm4gIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShudWxsLCBudWxsLCBvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZFZhbGlkYXRvci52YWxpZGF0b3JGdW5jKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShmb3JtR3JvdXAsIG9wdGlvbi5jaGlsZFZhbGlkYXRvci5jb250cm9scywgb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yc1xyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIFZhbGlkYXRvcnMgYXJlIHVzZWQgZm9yIHZhbGlkYXRpb24gdGhhdCBpbnZvbHZlcyBtb3JlIHRoYW4gb25lIEZvcm1Db250cm9sLiBpZS4gV2hlbiBhIGNvbnRyb2xcclxuICAgKiBkZXBlbmRzIG9uIGFub3RoZXIsIG9yIHdlIG5lZWQgdG8gdmFsaWRhdGUgYSBncm91cCBvZiBjb250cm9scyB0b2dldGhlci4gVmFsaWRhdGlvbiBmb3IgbXVsdGlwbHkgY29udHJvbHMgaXNcclxuICAgKiByZXF1aXJlZCBvbiB0aGUgY29tbW9uIGFuY2VzdG9yIGFzIHBlciB0aGUgQW5ndWxhciBEb2N1bWVudGF0aW9uLlxyXG4gICAqXHJcbiAgICogQHNlZSBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9mb3JtLXZhbGlkYXRpb24jYWRkaW5nLXRvLXJlYWN0aXZlLWZvcm1zLTFcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBBbmd1bGFyIEZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBWYWxpZGF0b3JzIC0gW3tcclxuICAgICAqICAgIHZhbGlkYXRvckZ1bmM6ICdpc0FueUNoZWNrYm94Q2hlY2tlZCcsXHJcbiAgICAgKiAgICB2YWxpZGF0aW9uRXJyb3JJZDogJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnLFxyXG4gICAgICogICAgY2hlY2tib3hlczogW1xyXG4gICAgICogICAgICAgICdwYXJ0aWVzTmVlZEF0dGVuZCcsICdOb3RFbm91Z2hJbmZvcm1hdGlvbicsICdvcmRlck5vdEFwcGVhck9mUzI1Y2ExOTczJywgJ2Q4MScsXHJcbiAgICAgKiAgICAgICAgJ3BlbnNpb25Bbm5leCcsICdhcHBsaWNhbnRUYWtlbkFkdmljZScsICdyZXNwb25kZW50VGFrZW5BZHZpY2UnLCAnT3RoZXIyJ1xyXG4gICAgICogICAgXX1dXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUdyb3VwVmFsaWRhdG9ycykge1xyXG5cclxuICAgIHJldHVybiBmb3JtR3JvdXBWYWxpZGF0b3JzLm1hcChmb3JtR3JvdXBWYWxpZGF0b3IgPT4ge1xyXG5cclxuICAgICAgY29uc3QgZ3JvdXBWYWxpZGF0b3I6IEZvcm1Hcm91cFZhbGlkYXRvciA9IGZvcm1Hcm91cFZhbGlkYXRvcjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZvcm1Hcm91cFZhbGlkYXRvcihmb3JtR3JvdXAsIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMsIGdyb3VwVmFsaWRhdG9yLmNvbnRyb2xzLFxyXG4gICAgICAgIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yXHJcbiAgICpcclxuICAgKiBZb3UnbGwgbmVlZCB0byBwYXNzIGluIHRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCB5b3Ugd2lzaCB0byB1c2UuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGEuanNcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge1N0cmluZ30gdmFsaWRhdG9yRnVuYyAtICdpc0FueUNoZWNrYm94Q2hlY2tlZCdcclxuICAgKiAvLyBAcGFyYW0ge0FycmF5IG9yIE9iamVjdH0gY29udHJvbHMgLSBbJ3BhcnRpZXNOZWVkQXR0ZW5kJywgJ05vdEVub3VnaEluZm9ybWF0aW9uJ10gb3IgeyBjaGVja2JveDogJ2NvbnRyb2xOYW1lJywgdGV4dGFyZWE6ICdjb250cm9sTmFtZScgfVxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtICdyZWFzb25zQ29uc3RlbnRPcmRlck5vdEFwcHJvdmVkJ1xyXG4gICAqXHJcbiAgICogLy8gQHJldHVybiB7VmFsaWRhdG9yRm59XHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0b3JGdW5jOiBzdHJpbmcsIGNvbnRyb2xzOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbdmFsaWRhdG9yRnVuY10oZm9ybUdyb3VwLCBjb250cm9scywgdmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2Uge1xyXG4gIEZvcm1Db250cm9scyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRpb24gb2YgRm9ybUNvbnRyb2xzIGZvciBhIEZvcm1Hcm91cC5cclxuICAgKiBTbyBmaXJzdCB0aGluZyBpcyBob3cgZG8gd2UgYWRkIFZhbGlkYXRpb24gdG8gYSBGb3JtQ29udHJvbFxyXG4gICAqXHJcbiAgICogcHJvcCBjYW4gYmUgYSBmaWVsZHNldCwgbGVnZW5kLCB0ZXh0LCBpZFByZWZpeCwgbmFtZSwgaGVhZGVyLCBjaGVja2JveGVzLCBpZiB3ZVxyXG4gICAqXHJcbiAgICogSGVyZSBpcyB3aGVyZSB0aGUgdmFsaWRhdGlvbiBpcyBhcHBsaWVkIHRvIGVhY2ggb2YgdGhlIGNvbnRyb2xzIG9mIHRoZSBmb3JtLCBiYXNlZCBvbiB0aGUgdmFsaWRhdG9ycyB0aGF0XHJcbiAgICogaGF2ZSBiZWVuIHBsYWVkIGludG8gdGhlIHN0YXRlX21ldGEuanMuXHJcbiAgICpcclxuICAgKiBUT0RPOiBOYW1lIHRoaXMgc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50LCBhcyBjcmVhdGUgZG9lc24ndCByZWFsbHkgZXhwbGFpbiB3aGF0IGl0IGRvZXMsXHJcbiAgICogYWxzbyB0aGVyZSBpdCdzIHF1aXRlIGhhcmQgdG8gd29yayBvdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc29tZUpzb25cclxuICAgKiBAcGFyYW0gc29tZURhdGFcclxuICAgKi9cclxuICBjcmVhdGUoc29tZUpzb24sIHNvbWVEYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvbWVKc29uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc29tZUpzb24pIHtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09ICdjb250cm9sJykge1xyXG4gICAgICAgICAgaWYgKHNvbWVKc29uLnJhZGlvR3JvdXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBSYWRpb0J1dHRvbiBMb2dpY1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc29tZURhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmFkaW9FbCBvZiBzb21lSnNvbi5yYWRpb0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9FbC52YWx1ZSA9PT0gc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2wocmFkaW9FbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udHJvbChudWxsLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuRm9ybUNvbnRyb2xzW3NvbWVKc29uLmNvbnRyb2xdID0gbmV3IEZvcm1Db250cm9sKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250cm9sKHNvbWVKc29uLnZhbHVlLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZShzb21lSnNvbltwcm9wXSwgc29tZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc29tZUpzb24gIT09IHVuZGVmaW5lZCAmJiBzb21lSnNvbi5pc0FycmF5KSB7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gIG9mIHNvbWVKc29uKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoc29tZUpzb25baXRlbV0sIHNvbWVEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXHJcbiAgICogQHBhcmFtIGNvbnRyb2xOYW1lIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpZS4gdGV4dCBpZiBpdCdzIGEgdGV4dGFyZWEuXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlOiBhbnksIGNvbnRyb2xOYW1lOiBzdHJpbmcsIHZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS5jb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzKSkge1xyXG4gICAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldE5nVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlZmluZWZvcm1Db250cm9scyhzb21lSnNvbjogYW55LCBzb21lRGF0YTogYW55KTogYW55IHtcclxuICAgIHRoaXMuRm9ybUNvbnRyb2xzID0gW107XHJcbiAgICB0aGlzLmNyZWF0ZShzb21lSnNvbiwgc29tZURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuRm9ybUNvbnRyb2xzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGb3Jtc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRm9ybSBCdWlsZGVyIFdyYXBwZXJcclxuICogQ29tcG9uZW50IGFjY2VwdHMgcGFnZUl0ZW1zIGFuZCBwYWdlVmFsdWVzIGZvciBGcm9tIEJ1aWxkZXIgdG8gcHJvY2Vzc1xyXG4gKiBhbmQgaXQgZW1pdHMgZm9ybSBkYXRhIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWJ1aWxkZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkXCI+XHJcbiAgPGFwcC12YWxpZGF0aW9uLWhlYWRlciBbdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNdPVwidGhpcy5wYWdlSXRlbXMudmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNcIiBbZm9ybUdyb3VwXT1cImZvcm1EcmFmdFwiPlxyXG4gIDwvYXBwLXZhbGlkYXRpb24taGVhZGVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxmb3JtICpuZ0lmPVwicGFnZUl0ZW1zXCIgW2Zvcm1Hcm91cF09XCJmb3JtRHJhZnRcIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIj5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cInsnZ292dWstZm9ybS1ncm91cCc6dHJ1ZSwgJ2dvdnVrLWZvcm0tZ3JvdXAtLWVycm9yJyA6IGlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkIH1cIj5cclxuICAgIDxoMSBjbGFzcz1cImdvdnVrLWhlYWRpbmcteGxcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJwYWdlSXRlbXMuY2FwdGlvblwiIFtjbGFzc109XCJwYWdlSXRlbXMuY2FwdGlvbi5jbGFzc2VzXCI+e3sgcGFnZUl0ZW1zLmNhcHRpb24udGV4dCB9fTwvc3Bhbj5cclxuICAgICAge3twYWdlSXRlbXMuaGVhZGVyfX1cclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiICpuZ0Zvcj1cImxldCBncm91cCBvZiBwYWdlSXRlbXMuZ3JvdXBzXCI+XHJcbiAgICAgIDxhcHAtZmllbGRzZXQgKm5nSWY9XCJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImZvcm1EcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJpc1BhZ2VWYWxpZFwiPlxyXG4gICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgPGFwcC1qdWktZm9ybS1lbGVtZW50cyBbZ3JvdXBdPVwiZm9ybURyYWZ0XCIgW3ZhbGlkYXRlXT1cImlzUGFnZVZhbGlkXCIgW2RhdGFdPVwiZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9tQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3Jtc1NlcnZpY2U6IEZvcm1zU2VydmljZSxcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBASW5wdXQoKSBwYWdlSXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBwYWdlVmFsdWVzOiBhbnk7XHJcbiAgQElucHV0KCkgaXNQYWdlVmFsaWQ6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHN1Ym1pdFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHJcbiAgZm9ybURyYWZ0OiBGb3JtR3JvdXA7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnBhZ2VJdGVtcyAmJiBjaGFuZ2VzLnBhZ2VJdGVtcy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtRHJhZnQgPSBuZXcgRm9ybUdyb3VwKHRoaXMuZm9ybXNTZXJ2aWNlLmRlZmluZWZvcm1Db250cm9scyh0aGlzLnBhZ2VJdGVtcywgdGhpcy5wYWdlVmFsdWVzKSk7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRvcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYWdlSXRlbXMpIHtcclxuICAgICAgY29uc3QgZm9ybUdyb3VwVmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyh0aGlzLmZvcm1EcmFmdCwgdGhpcy5wYWdlSXRlbXMuZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICAgIHRoaXMuZm9ybURyYWZ0LnNldFZhbGlkYXRvcnMoZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvcm1TdWJtaXQoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdFBhZ2UuZW1pdCh0aGlzLmZvcm1EcmFmdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1maWVsZHNldCcsXHJcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgW2F0dHIudmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFthdHRyLmRhdGFdPVwiZGF0YVwiIFthdHRyLmdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cclxuICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cIml0ZW1cIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2ZpZWxkc2V0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZHNldENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBncm91cDtcclxuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT47XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWp1aS1mb3JtLWVsZW1lbnRzJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2F0dHIudmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbYXR0ci5kYXRhXT1cImRhdGFcIiBbYXR0ci5ncm91cF09XCJncm91cFwiPlxyXG4gIDwhLS1KVUkgRk9STSBidWlsZGVyIGNvbXBvbmVudCAtLT5cclxuICA8YXBwLWxlZ2VuZCAqbmdJZj1cImRhdGEubGVnZW5kXCIgW2NsYXNzZXNdPVwiZGF0YS5sZWdlbmQuY2xhc3Nlc1wiPlxyXG4gICAge3tkYXRhLmxlZ2VuZC50ZXh0fX1cclxuICA8L2FwcC1sZWdlbmQ+XHJcbiAgPGFwcC1oaW50ICpuZ0lmPVwiZGF0YS5oaW50XCIgW2NsYXNzZXNdPVwiZGF0YS5oaW50LmNsYXNzZXNcIj5cclxuICAgIHt7ZGF0YS5oaW50LnRleHR9fVxyXG4gIDwvYXBwLWhpbnQ+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEudmFsaWRhdGlvbkVycm9yICYmIHZhbGlkYXRlXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwIFtncm91cF09XCJncm91cFwiIFt2YWxpZGF0aW9uRXJyb3JJZF09XCJkYXRhLnZhbGlkYXRpb25FcnJvci5pZGVudGlmaWVyXCI+XHJcbiAgICAgIHt7ZGF0YS52YWxpZGF0aW9uRXJyb3IudmFsdWV9fVxyXG4gICAgPC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGFwcC1kYXRlICpuZ0lmPVwiZGF0YS5kYXRlXCJcclxuICAgICAgICAgICAgW2lkXT1cImRhdGEuZGF0ZS5mb3JtTmFtZVwiXHJcbiAgICAgICAgICAgIFtkYXRhXT1cImRhdGEuZGF0ZVwiXHJcbiAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS5kYXRlLnZhbGlkYXRpb25FcnJvclwiPlxyXG4gIDwvYXBwLWRhdGU+XHJcbiAgPGFwcC1pbnB1dHMgKm5nSWY9XCJkYXRhLmlucHV0XCJcclxuICAgICAgICAgICAgICBbaXRlbV09XCJkYXRhLmlucHV0XCJcclxuICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS5pbnB1dC52YWxpZGF0aW9uRXJyb3JcIlxyXG4gICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgW2hpbnRdPVwiZGF0YS5pbnB1dC5oaW50XCJcclxuICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEuaW5wdXQuY29udHJvbFwiPjwvYXBwLWlucHV0cz5cclxuICA8YXBwLXJhZGlvYnV0dG9uICpuZ0lmPVwiZGF0YS5yYWRpb3NcIiBbY2xhc3Nlc109XCInZ292dWstcmFkaW9zICcgKyBkYXRhLnJhZGlvcy5jbGFzc2VzXCJcclxuICAgICAgICAgICAgICAgICAgIFtpdGVtc109XCJkYXRhLnJhZGlvcy5yYWRpb0dyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICBbY29udHJvbF09XCJkYXRhLnJhZGlvcy5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIFtpZFByZWZpeF09XCJkYXRhLnJhZGlvcy5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLnJhZGlvcy52YWxpZGF0aW9uRXJyb3JcIj5cclxuICA8L2FwcC1yYWRpb2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwiZGF0YS5jaGVja2JveFwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc1wiPlxyXG4gICAgPGFwcC1jaGVja2JveCBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbaWRQcmVmaXhdPVwiZGF0YS5jaGVja2JveC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cImRhdGEuY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstY2hlY2tib3hlc19faXRlbSdcIlxyXG4gICAgICAgICAgICAgICAgICBbbGFiZWxDbGFzc2VzXT1cIidnb3Z1ay1sYWJlbCBnb3Z1ay1jaGVja2JveGVzX19sYWJlbCdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5jaGVja2JveC5ncm91cHMgJiYgZ3JvdXAuY29udHJvbHNbZGF0YS5jaGVja2JveC5jb250cm9sXS52YWx1ZVwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19fY29uZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgW25nU3R5bGVdID0gXCJ7ICdib3JkZXItbGVmdCc6ICh2YWxpZGF0ZSAmJiBncm91cC5pbnZhbGlkKSA/ICc1cHggc29saWQgI2IxMGUxZScgOiAnJyB9XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgc3ViZ3JvdXAgb2YgZGF0YS5jaGVja2JveC5ncm91cHNcIj5cclxuICAgICAgICAgICAgPGFwcC1maWVsZHNldCAqbmdJZj1cInN1Ymdyb3VwLmZpZWxkc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1maWVsZHNldCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvYXBwLWZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cInN1Ymdyb3VwXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FwcC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGFwcC10ZXh0YXJlYXMgKm5nSWY9XCJkYXRhLnRleHRhcmVhXCIgW2NsYXNzZXNdPVwiJ2dvdnVrLXRleHRhcmVhJ1wiXHJcbiAgICAgICAgICAgICAgICAgW3Nob3dWYWxpZGF0aW9uXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbkVycm9yXT1cImRhdGEudGV4dGFyZWEudmFsaWRhdGlvbkVycm9yXCJcclxuICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEudGV4dGFyZWEuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEudGV4dGFyZWEubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLnRleHRhcmVhLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgIFtyb3dzXT1cIjVcIj5cclxuICA8L2FwcC10ZXh0YXJlYXM+XHJcbiAgPGFwcC1idXR0b25zICpuZ0lmPVwiZGF0YS5idXR0b25cIlxyXG4gICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstYnV0dG9uJ1wiXHJcbiAgICAgICAgICAgICAgIFt0eXBlQnRuXT1cImRhdGEuYnV0dG9uLnR5cGVcIlxyXG4gICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICBbY29udHJvbF09XCJkYXRhLmJ1dHRvbi5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cImRhdGEuYnV0dG9uLnZhbHVlXCI+XHJcbiAgPC9hcHAtYnV0dG9ucz5cclxuICA8IS0tSlVJIEZPUk0gYnVpbGRlciBjb21wb25lbnQgLS0+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKdWlGb3JtRWxlbWVudHNDb21wb25lbnR7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBkYXRhO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sZWdlbmQnLFxyXG4gIHRlbXBsYXRlOiBgPGxlZ2VuZCBbY2xhc3NdPVwiJ2dvdnVrLWZpZWxkc2V0X19sZWdlbmQgJyArIGNsYXNzZXNcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9sZWdlbmQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzOiAgc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpbnQnLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gW2NsYXNzXT1cImNsYXNzZXNcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9zcGFuPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGludENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gICAgPGFwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cCAqbmdJZj1cImRhdGEudmFsaWRhdGlvbkVycm9yICYmIHZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW3ZhbGlkYXRpb25FcnJvcklkXT1cImRhdGEudmFsaWRhdGlvbkVycm9yLmlkZW50aWZpZXJcIj5cclxuICAgICAgICB7e2RhdGEudmFsaWRhdGlvbkVycm9yLnZhbHVlfX1cclxuICAgIDwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwPlxyXG4gICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRcIiBbaWRdPVwiaWRcIiBbYXR0ci5kYXRhXT1cImRhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5kYXkuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLmRheS5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5kYXkuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5tb250aC5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEubW9udGguaW5wdXQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEubW9udGguaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS55ZWFyLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS55ZWFyLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLnllYXIuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWQ7XHJcbiAgICBASW5wdXQoKSBkYXRhO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0cycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICA8YXBwLWxhYmVsIFtmb3JFbGVtZW50XT1cImxhYmVsRm9yXCI+e3tsYWJlbC50ZXh0fX1cclxuICA8L2FwcC1sYWJlbD5cclxuICA8YXBwLWhpbnQgKm5nSWY9XCJoaW50XCIgW2NsYXNzZXNdPVwiaGludC5jbGFzc2VzXCI+XHJcbiAgICB7e2hpbnQudGV4dH19XHJcbiAgPC9hcHAtaGludD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiaXRlbS5jb250cm9sXCIgaWQ9XCJ7e2l0ZW0uY29udHJvbH19XCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGlucHV0IFtjbGFzc109XCInZ292dWstaW5wdXQgJyArIGl0ZW0uY2xhc3Nlc1wiXHJcbiAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgW2lkXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuYW1lXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ292dWstaW5wdXQtLWVycm9yJzppc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIGl0ZW0uY29udHJvbCwgc2hvd1ZhbGlkYXRpb24pfVwiXHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dHNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaXRlbTtcclxuICBASW5wdXQoKSBsYWJlbDtcclxuICBASW5wdXQoKSBoaW50O1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuICBuYW1lO1xyXG4gIGlkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hvd1ZhbGlkYXRpb25BbmRJc0NvbnRyb2xWYWxpZFxyXG4gICAqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgdXNlcnMgaW5wdXQgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHNob3dWYWxpZGF0aW9uXHJcbiAgICogLy9AcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy9AcGFyYW0gY29udHJvbFxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZywgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCkgJiYgc2hvd1ZhbGlkYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmFkaW9idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJjb250cm9sXCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmRldmlkZXJcIiBjbGFzcz1cImdvdnVrLXJhZGlvc19fZGl2aWRlclwiPnt7ZGF0YS5kZXZpZGVyfX08L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEuZGV2aWRlclwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLXJhZGlvc19faW5wdXRcIiBpZD1cInt7Y29udHJvbCArIGRhdGEudmFsdWV9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiIHR5cGU9XCJyYWRpb1wiIFt2YWx1ZV09IFwiZGF0YS52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1yYWRpb3NfX2xhYmVsXCIgZm9yPVwie3tjb250cm9sICsgZGF0YS52YWx1ZX19XCI+XHJcbiAgICAgICAgICAgICAgICB7e2RhdGEudGV4dH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx1bCAqbmdJZj1cImRhdGEubGlzdFwiIFtjbGFzc109XCInZ292dWstbGlzdCcgKyBkYXRhLmxpc3QuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhLmxpc3QudGV4dFwiPnt7IGl0ZW0gfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YXBwLWhpbnQgKm5nSWY9XCJkYXRhLmhpbnRcIiBbY2xhc3Nlc109XCJkYXRhLmhpbnQuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tkYXRhLmhpbnQudGV4dH19XHJcbiAgICAgICAgICAgIDwvYXBwLWhpbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuZ3JvdXBzICYmIGdyb3VwLnZhbHVlW2NvbnRyb2xdPT09ZGF0YS52YWx1ZVwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19jb25kaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViZ3JvdXAgb2YgZGF0YS5ncm91cHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWZpZWxkc2V0ICpuZ0lmPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cInN1Ymdyb3VwXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3JiJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAncmInO1xyXG4gICAgQElucHV0KCkgaXRlbXM7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgY29udHJvbDtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG4gICAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gICAgPGRpdiAgKm5nSWY9XCJncm91cFwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faXRlbVwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pbnB1dFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbXMuY29udHJvbFwiIGlkPVwie3tpdGVtcy5jb250cm9sfX1cIiB0eXBlPVwiY2hlY2tib3hcIiBbdmFsdWVdPVwiaXRlbXMudmFsdWVcIj5cclxuICAgICAgICA8YXBwLWxhYmVsIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIiBbZm9yRWxlbWVudF09XCJpdGVtcy5jb250cm9sXCI+e3tpdGVtcy50ZXh0fX08L2FwcC1sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4O1xyXG4gICAgQElucHV0KCkgbmFtZTtcclxuICAgIEBJbnB1dCgpIGl0ZW1zO1xyXG4gICAgQElucHV0KCkgY2xhc3NlcztcclxuICAgIEBJbnB1dCgpIGxhYmVsQ2xhc3NlcztcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGV4dGFyZWFzJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gIDxhcHAtbGFiZWxcclxuICAgICAgICAgICAgIFtmb3JFbGVtZW50XT1cImxhYmVsRm9yXCI+e3tsYWJlbC50ZXh0fX1cclxuICA8L2FwcC1sYWJlbD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiY29udHJvbFwiIGlkPVwie3tjb250cm9sfX1cIj57e3ZhbGlkYXRpb25FcnJvci52YWx1ZX19PC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8dGV4dGFyZWEgW2NsYXNzXT1cImNsYXNzZXNcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2dvdnVrLXRleHRhcmVhLS1lcnJvcic6aXNDb250cm9sSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uKGdyb3VwLCBjb250cm9sLCBzaG93VmFsaWRhdGlvbikgfHwgaXNHcm91cEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihncm91cCwgc2hvd1ZhbGlkYXRpb24pfVwiXHJcbiAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgICAgICBbaWRdPVwibGFiZWxGb3JcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsRm9yXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sXCI+PC90ZXh0YXJlYT5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuLyoqXHJcbiAqIFRleHRhcmVhc0NvbXBvbmVudFxyXG4gKlxyXG4gKiBGZWF0dXJlczpcclxuICogSWYgdGhpcyBjb21wb25lbnQgaXMgdG9sZCB0byBzaG93IGl0J3MgdmFsaWRhdGlvbiwgYW5kIHRoZSBpbnB1dCB0aGUgdXNlciBoYXMgZW50ZXJlZCBpcyBpbnZhbGlkLFxyXG4gKiB0aGVuIHdlIHNob3VsZCBkaXNwbGF5IGEgcmVkIGJveCBhcm91bmQgdGhlIHRleHQgYXJlYS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYXNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaWRQcmVmaXggPSAndGEnO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAndGEnO1xyXG4gIEBJbnB1dCgpIGlkID0gJ3RhJztcclxuICBASW5wdXQoKSBsYWJlbEZvcjtcclxuICBASW5wdXQoKSByb3dzO1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgQElucHV0KCkgY29udHJvbDtcclxuICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICBASW5wdXQoKSBsYWJlbDtcclxuICBASW5wdXQoKSBpdGVtcztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uIChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcbiAgICBpZihmb3JtR3JvdXAuZXJyb3JzICYmIGZvcm1Hcm91cC5lcnJvcnNbdGhpcy5jb250cm9sXSAmJiBzaG93VmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hvd1ZhbGlkYXRpb25BbmRJc0NvbnRyb2xWYWxpZFxyXG4gICAqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgdXNlcnMgaW5wdXQgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBzaG93VmFsaWRhdGlvblxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0gY29udHJvbFxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZywgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuICF0aGlzLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpICYmIHNob3dWYWxpZGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgY29udHJvbCBpcyB2YWxpZC5cclxuICAgKlxyXG4gICAqIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgKi9cclxuICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJ1dHRvbnMnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyb3VwXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPGlucHV0IGlkPVwie3tjb250cm9sICsgdmFsdWV9fVwiIFtjbGFzc109XCJjbGFzc2VzXCIgW3R5cGVdPVwidHlwZUJ0blwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiIFt2YWx1ZV09XCJ2YWx1ZVwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpZFByZWZpeCA9ICdidG4nO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICdidG4nO1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgICBASW5wdXQoKSB0eXBlQnRuO1xyXG4gICAgQElucHV0KCkgY29udHJvbDtcclxuICAgIEBJbnB1dCgpIHZhbHVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgaXNWYWxpZDogYm9vbGVhbjtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5ncm91cC5zdGF0dXMgPT09ICdJTlZBTElEJztcclxuICAgICAgdGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmdyb3VwLnN0YXR1cyA9PT0gJ0lOVkFMSUQnO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxhYmVsJyxcclxuICB0ZW1wbGF0ZTogYDxsYWJlbCBbYXR0ci5mb3JdPVwiZm9yRWxlbWVudFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2xhYmVsPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZm9yRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oaWRkZW4taW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lclxyXG4gIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbXBvbmVudENsYXNzZXNcIlxyXG4gICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbaWRdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbbmFtZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgdHlwZT1cImhpZGRlblwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZGVuSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaXRlbToge1xyXG4gICAgICBjb250cm9sOiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM6IEFycmF5PHN0cmluZz5cclxuICAgIH07XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuICAgIGNvbXBvbmVudENsYXNzZXM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50Q2xhc3NlcyA9ICdnb3Z1ay1pbnB1dCcgKyB0aGlzLml0ZW0uY2xhc3NlcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdmFsaWRhdGlvbi1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeVwiIGFyaWEtbGFiZWxsZWRieT1cImVycm9yLXN1bW1hcnktdGl0bGVcIiByb2xlPVwiYWxlcnRcIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICBkYXRhLW1vZHVsZT1cImVycm9yLXN1bW1hcnlcIj5cclxuICA8aDIgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5X190aXRsZVwiIGlkPVwiZXJyb3Itc3VtbWFyeS10aXRsZVwiPlxyXG4gICAgVGhlcmUgaXMgYSBwcm9ibGVtXHJcbiAgPC9oMj5cclxuICA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeV9fYm9keVwiPlxyXG4gICAgPHVsIGNsYXNzPVwiZ292dWstbGlzdCBnb3Z1ay1lcnJvci1zdW1tYXJ5X19saXN0XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZSBvZiB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZhbGlkYXRpb25MZXZlbCh2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnZhbGlkYXRpb25MZXZlbCwgRk9STV9DT05UUk9MKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuY29udHJvbElkKVwiPlxyXG4gICAgICAgICAgPGEgcm91dGVyTGluaz1cIi4vXCIgZnJhZ21lbnQ9XCJ7e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuaHJlZn19XCI+e3t2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnRleHR9fTwvYT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudmFsaWRhdGlvbkxldmVsLCBGT1JNX0dST1VQKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuZm9ybUdyb3VwVmFsaWRhdGlvbkVycm9ySWQpXCI+XHJcbiAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiLi9cIiBmcmFnbWVudD1cInt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5ocmVmfX1cIj57e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudGV4dH19PC9hPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuLyoqXHJcbiAqIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnRcclxuICpcclxuICogSWYgdGhlIGNvbnRyb2wgdGhhdCB0aGlzIGVycm9yIG1lc3NhZ2UgY29tcG9uZW50IGxpbmtzIHRvIGlzIG5vdCB2YWxpZCB3ZVxyXG4gKiBzaG93IHRoZSBFcnJvciBNZXNzYWdlLCBzZW50IHRocm91Z2ggZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgY29udHJvbElkO1xyXG5cclxuICAgIC8vIFRPRE8gOiBkZXByZWNhdGUgYXMgbm90IG5lZWRlZD9cclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3RhJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAndGEnO1xyXG5cclxuICAgIC8vIFRPRE8gOiBNb3ZlIHRvIGNvbnN0YW50cyBmaWxlLlxyXG4gICAgRk9STV9DT05UUk9MID0gJ2Zvcm1Db250cm9sJztcclxuICAgIEZPUk1fR1JPVVAgPSAnZm9ybUdyb3VwJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpZ25hdHVyZSBmb3IgdmFsaWRhdGlvbkhlYWRlckNvbnRyb2xzIHRvIGJlIHVzZWQgaW4gYSBVbml0IFRlc3QgaXM6XHJcbiAgICAgKlxyXG4gICAgICogW3tcclxuICAgICAqICB2YWx1ZTogJ0VudGVyIHdoYXQgaW5mb3JtYXRpb24gaXMgbmVlZGVkJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgcGFnZUxpbms6ICcjbGlua1RvVGV4dEFyZWEnXHJcbiAgICAgKiB9LFxyXG4gICAgICoge1xyXG4gICAgICogIHZhbHVlOiAnU2VsZWN0IHllcyBpZiB5b3Ugd2FudCB0byBpbmNsdWRlIGFuIGFubm90YXRlZCB2ZXJzaW9uIG9mIHRoZSBkcmFmdCBjb25zZW50IG9yZGVyJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmNsdWRlQW5ub3RhdGVkVmVyc2lvbkRyYWZ0Q29uc09yZGVyJyxcclxuICAgICAqICBwYWdlTGluazogJyNsaW5rVG9SYWRpb2J1dHRvbnMnXHJcbiAgICAgKn1dO1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgY29udHJvbCBpcyB2YWxpZC5cclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0gY29udHJvbCAtICdpbmZvcm1hdGlvbk5lZWRlZCdcclxuICAgICAqL1xyXG4gICAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpc0Zvcm1Hcm91cEludmFsaWRcclxuICAgICAqXHJcbiAgICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbkVycm9ySWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgd2Ugc2hvdWxkIHNob3cgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgZm9yIGEgZm9ybSBjb250cm9sLCBvciB0aGVcclxuICAgICAqIGZvcm0gZ3JvdXAuXHJcbiAgICAgKlxyXG4gICAgICogLy8gQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25MZXZlbCAtIHZhbGlkYXRpb24gbGV2ZWwgY2FuIGVpdGhlciBiZSBmb3JtR3JvdXAgb3IgZm9ybUNvbnRyb2wuXHJcbiAgICAgKiBBIGZvcm1Hcm91cCBsZXZlbCBpcyB2YWxpZGF0aW9uIHRoYXQgaGFuZGxlcyBtdWx0aXBseSBmb3JtIGNvbnRyb2xzLCB3aGVuIHZhbGlkYXRpbmcgbXVsdGlwbHkgY29tcG9uZW50c1xyXG4gICAgICogYXQgdGhlIHNhbWUgdGltZSwgaWUuIHdoZW4geW91IHdpc2ggdG8gc2VlIGlmIGEgY2hlY2tib3ggaXMgY2hlY2tlZCwgZnJvbSBtdWx0aXBseSBjaGVja2JveGVzLCB5b3UgbXVzdFxyXG4gICAgICogY2hlY2sgdGhpcyBvbiBhIGNvbW1vbiBhbmNlc3RvciBvZiBhIHNldCBvZiBjb250cm9scy4gVGhpcyBjb21tb24gYW5jZXN0b3IgaXMgYWx3YXlzIHRoZSBBbmd1bGFyIEZvcm1Hcm91cC5cclxuICAgICAqIGZvcm1Db250cm9sIGxldmVsIGlzIHZhbGlkYXRpb24gdGhhdCBoYW5kbGVzIGEgc2luZ2xlIGZvcm0gY29udHJvbC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGFic3RyYXRpb24gd2FzIGJhc2VkIG9uIGhvdyBBbmd1bGFyIDYncyBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGFyZSBhYnN0cmFjdCBmcm9tIGVhY2ggb3RoZXIsXHJcbiAgICAgKiBhZnRlciByZWFkaW5nLlxyXG4gICAgICpcclxuICAgICAqIC8vIEBwYXJhbSBjb250cm9sSWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25MZXZlbDogc3RyaW5nLCBsZXZlbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25MZXZlbCA9PT0gbGV2ZWw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cIiFpc0Zvcm1Db250cm9sVmFsaWQoZ3JvdXAsIGNvbnRyb2xJZClcIiA+XHJcbiAgICA8c3BhbiBpZD1cInt7Y29udHJvbElkfX1cIiBjbGFzcz1cImdvdnVrLWVycm9yLW1lc3NhZ2VcIiA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAqXHJcbiAqIFdlIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBpZiB0aGUgRm9ybUNvbnRyb2wgdGhhdCB0aGlzIGNvbXBvbmVudCBsaW5rcyB0byB2aWEgY29udHJvbElkIGlzIGludmFsaWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2xJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgRm9ybSBDb250cm9sIFZhbGlkXHJcbiAgICAgKlxyXG4gICAgICogVE9ETzogVW5pdFxyXG4gICAgICpcclxuICAgICAqIC8vIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXBcclxuICAgICAqIC8vIEBwYXJhbSB7c3RyaW5nfSBjb250cm9sSWQgLSBpZS4gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2xJZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCJpc0Zvcm1Hcm91cEludmFsaWQoZ3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKVwiID5cclxuICAgIDxzcGFuIGlkPVwie3t2YWxpZGF0aW9uRXJyb3JJZH19XCIgY2xhc3M9XCJnb3Z1ay1lcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb24gRXJyb3IgRm9ybUdyb3VwIENvbXBvbmVudFxyXG4gKlxyXG4gKiBXZSBzaG93IGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlIHZhbGlkYXRpb24gZXJyb3IgYXNzb2NpYXRlZCB3aXRoIHRoZSBGb3JtR3JvdXAgaXMgdGhyb3duIGJ5IHRoZSBGb3JtR3JvdXAuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3ZSBoYXZlIHZhbGlkYXRpb24gb24gYm90aCBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGxldmVsLiBGb3JtQ29udHJvbCBsZXZlbCB0byB2YWxpZGF0ZSBzaW5nbGVcclxuICogY29udHJvbHMsIEZvcm1Hcm91cCBsZXZlbCB0byB2YWxpZGF0ZSBtdWx0aXBseSBjb250cm9scy4gVGhpcyBpcyB0aGUgbWV0aG9kIHN1Z2dlc3RlZCBpbiB0aGUgQW5ndWxhciA2IGRvY3VtZW50cy5cclxuICpcclxuICogQW4gZXhhbXBsZSBvZiBtdWx0aXBseSBjb250cm9scywgd2hlcmUgd2Ugd291bGQgbGV2ZXJhZ2UgdGhlIEZvcm1Hcm91cCB2YWxpZGF0aW9uIHdvdWxkIGJlOyBjaGVja2luZyBpZiBvbmVcclxuICogQ2hlY2tib3ggaXMgY2hlY2tlZCwgb3V0IGEgc2V0IG9mIG11bHRpcGx5IENoZWNrYm94ZXMuXHJcbiAqXHJcbiAqIC8vIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Zvcm0tdmFsaWRhdGlvbiNhZGRpbmctdG8tcmVhY3RpdmUtZm9ybXMtMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckZvcm1Hcm91cENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9ySWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAgICpcclxuICAgICAqIFRPRE8gOiBVbml0IFRlc3RcclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbkVycm9ySWQgLSBpZS4gJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnIC0gVGhpcyBpcyB0aGUgdmFsaWRhdGlvbiBpZGVudGlmaWVyXHJcbiAgICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICAgKiBuZWVkIHRvIHBhc3MgdGhpcyBpbiBvbmNlIHRoZSBVbml2ZXJzYWwgRm9ybSBCdWlsZGVyIGlzIG1lcmdlZCB3aXRoIFZhbGlkYXRpb24uXHJcbiAgICAgKiAvLyBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0htY3RzRm9ybUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vaG1jdHMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RnJvbUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1aWxkZXIvZnJvbS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmllbGRzZXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHNldC9maWVsZHNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0p1aUZvcm1FbGVtZW50c0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2p1aS1mb3JtLWVsZW1lbnRzL2p1aS1mb3JtLWVsZW1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGVnZW5kQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hpbnRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5wdXRzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JhZGlvYnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDaGVja2JveENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGV4dGFyZWFzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0J1dHRvbnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYWJlbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGlkZGVuSW5wdXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaWRkZW4taW5wdXQvaGlkZGVuLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRpb24taGVhZGVyL3ZhbGlkYXRpb24taGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JGb3JtR3JvdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1zU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgRnJvbUJ1aWxkZXJDb21wb25lbnQsXHJcbiAgRmllbGRzZXRDb21wb25lbnQsXHJcbiAgVmFsaWRhdGlvbkVycm9yRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gIEZyb21CdWlsZGVyQ29tcG9uZW50LFxyXG4gIEZpZWxkc2V0Q29tcG9uZW50LFxyXG4gIEp1aUZvcm1FbGVtZW50c0NvbXBvbmVudCxcclxuICBMZWdlbmRDb21wb25lbnQsXHJcbiAgSGludENvbXBvbmVudCxcclxuICBEYXRlQ29tcG9uZW50LFxyXG4gIElucHV0c0NvbXBvbmVudCxcclxuICBSYWRpb2J1dHRvbkNvbXBvbmVudCxcclxuICBDaGVja2JveENvbXBvbmVudCxcclxuICBUZXh0YXJlYXNDb21wb25lbnQsXHJcbiAgQnV0dG9uc0NvbXBvbmVudCxcclxuICBMYWJlbENvbXBvbmVudCxcclxuICBIaWRkZW5JbnB1dENvbXBvbmVudCxcclxuICBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50LFxyXG4gIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnRcclxuXTtcclxuXHJcbmNvbnN0IFNFUlZJQ0VTID0gW1xyXG4gIEZvcm1zU2VydmljZSxcclxuICBWYWxpZGF0aW9uU2VydmljZSxcclxuICBEYXRlUGlwZVxyXG5dXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uU0VSVklDRVNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztrQ0FKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsNENBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsMERBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7b0NBVkQ7Ozs7Ozs7O0lDZ0NFLDJCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7Ozs7Ozs7c0NBWkQ7WUFDbkM7Z0JBQ0UsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ3pDO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2FBQ3RDO1NBQ0Y7S0FJQTs7Ozs7Ozs7Ozs7Ozs7OztJQVNELHNEQUEwQjs7Ozs7Ozs7SUFBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0Is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