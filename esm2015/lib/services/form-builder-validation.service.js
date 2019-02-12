/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ValidationService {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
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
     * // \@returnArray
     * @return {?}
     */
    getNgValidationFunctionMap() {
        return this.ngValidatorFunctionMap;
    }
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
    getNgValidators(validators) {
        /** @type {?} */
        const ngValidators = [];
        validators.forEach((validatorName) => {
            for (const ngValidatorFunction of this.getNgValidationFunctionMap()) {
                if (ngValidatorFunction.simpleName === validatorName) {
                    ngValidators.push(ngValidatorFunction.ngValidatorFunction);
                }
            }
        });
        return ngValidators;
    }
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
    controlHasValidation(validators) {
        return validators && validators.length > 0;
    }
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
    isFormControlValid(formGroup, control) {
        return formGroup.get(control).valid;
    }
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
    isFormGroupInvalid(formGroup, validationErrorId) {
        if (formGroup.errors && formGroup.errors.hasOwnProperty(validationErrorId)) {
            return formGroup.errors[validationErrorId];
        }
        else {
            return null;
        }
    }
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
    isAnyCheckboxChecked(formGroup, checkboxes, validationIdentifier) {
        /** @type {?} */
        const isAnyCheckboxCheckedValidationFn = (controls) => {
            for (const checkbox of checkboxes) {
                if (controls.get(checkbox).value === true) {
                    return null;
                }
            }
            return {
                [validationIdentifier]: true,
            };
        };
        return isAnyCheckboxCheckedValidationFn;
    }
    /**
     * @param {?} controls
     * @param {?} fields
     * @param {?} validationIdentifier
     * @return {?}
     */
    isAllFieldsRequiredValidationFn(controls, fields, validationIdentifier) {
        if (controls !== null && fields !== null) {
            for (const field of fields) {
                if (!controls.get(field).value) {
                    return {
                        [validationIdentifier]: true
                    };
                }
            }
        }
        return null;
    }
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
    isAllFieldsRequired(formGroup, fields, validationIdentifier) {
        /** @type {?} */
        const isAllFieldsRequiredValidationFn = (controls) => {
            return this.isAllFieldsRequiredValidationFn(controls, fields, validationIdentifier);
        };
        return isAllFieldsRequiredValidationFn;
    }
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
    isValidDateValidationFn(controls, fields, validationIdentifier) {
        if (controls !== null && fields !== null) {
            /** @type {?} */
            const dateValueArray = [];
            for (const field of fields) {
                if (!controls.get(field).value) {
                    return {
                        [validationIdentifier]: true
                    };
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
                        return {
                            [validationIdentifier]: true
                        };
                    }
                    // Check if array is ready and convert to string
                    if (dateValueArray.length === 3) {
                        //Return error if not numbers
                        for (const element of dateValueArray) {
                            if (element != Number(element)) {
                                return {
                                    [validationIdentifier]: true
                                };
                            }
                        }
                        // Convert user entered day and month to numbers
                        dateValueArray[1] = Number(dateValueArray[1]);
                        dateValueArray[2] = Number(dateValueArray[2]);
                        // Return error if user entered months less than 0 and more than 12
                        if (dateValueArray[1] <= 0 || dateValueArray[1] >= 12) {
                            return {
                                [validationIdentifier]: true
                            };
                        }
                        // Return error if user entered months less than 0 and more than 31
                        if (dateValueArray[2] <= 0 || dateValueArray[2] >= 31) {
                            return {
                                [validationIdentifier]: true
                            };
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
                        const dateStr = dateValueArray.toString();
                        /** @type {?} */
                        const dateObj = new Date(dateStr);
                        /** @type {?} */
                        const checkDateStr = dateObj.toISOString().slice(0, 10).replace(/-/g, ",").replace("T", " ");
                        // Return null if valid date
                        if (checkDateStr === dateStr) {
                            return null;
                        }
                        return {
                            [validationIdentifier]: true
                        };
                    }
                }
            }
        }
        return null;
    }
    /**
     * @param {?} formGroup
     * @param {?} fields
     * @param {?} validationIdentifier
     * @return {?}
     */
    isValidDate(formGroup, fields, validationIdentifier) {
        /** @type {?} */
        const isValidDateValidationFn = (controls) => {
            return this.isValidDateValidationFn(controls, fields, validationIdentifier);
        };
        return isValidDateValidationFn;
    }
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
    isTextAreaValidWhenCheckboxChecked(formGroup, controls, validationIdentifier) {
        /** @type {?} */
        const isTextAreaValidWhenCheckboxChecked = (formControls) => {
            if (!formControls.get(controls.checkboxControl).value) {
                return null;
            }
            if (formControls.get(controls.textareaControl).value && formControls.get(controls.textareaControl).value.length > 0) {
                return null;
            }
            return {
                [validationIdentifier]: true,
            };
        };
        return isTextAreaValidWhenCheckboxChecked;
    }
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
    isRadioValidWhenSomeOptionSelected(formGroup, controls, validationIdentifier) {
        /** @type {?} */
        const isRadioValidWhenSomeOptionSelected = (formControls) => {
            for (const option of controls.selectedOptions) {
                if (formControls.get(controls.radioControl).value !== null && formControls.get(controls.radioControl).value !== option.selectedOption) {
                    // Do not validate child if parent is valid so
                    // Reset child validation to valid state here
                    // Add word "ValidationFn" to the name of validator when you extend child validation functions
                    if (option.childValidator.validatorFunc) {
                        return this[option.childValidator.validatorFunc + "ValidationFn"](null, null, option.childValidator.validationErrorId);
                    }
                    return null;
                }
                else {
                    if (option.childValidator.validatorFunc) {
                        return this[option.childValidator.validatorFunc + "ValidationFn"](formGroup, option.childValidator.controls, option.childValidator.validationErrorId);
                    }
                }
            }
            return {
                [validationIdentifier]: true,
            };
        };
        return isRadioValidWhenSomeOptionSelected;
    }
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
    createFormGroupValidators(formGroup, formGroupValidators) {
        return formGroupValidators.map(formGroupValidator => {
            /** @type {?} */
            const groupValidator = formGroupValidator;
            return this.createFormGroupValidator(formGroup, groupValidator.validatorFunc, groupValidator.controls, groupValidator.validationErrorId);
        });
    }
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
    createFormGroupValidator(formGroup, validatorFunc, controls, validationErrorId) {
        return this[validatorFunc](formGroup, controls, validationErrorId);
    }
}
ValidationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ValidationService.ctorParameters = () => [
    { type: DatePipe }
];
/** @nocollapse */ ValidationService.ngInjectableDef = i0.defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.inject(i1.DatePipe)); }, token: ValidationService, providedIn: "root" });
if (false) {
    /**
     * Custom validators can be added to this.
     *
     * TODO : Define interface for array.
     * TODO : Add a Custom Validator example.
     *
     * @see https://angular.io/guide/form-validation#custom-validators
     * @type {?}
     */
    ValidationService.prototype.ngValidatorFunctionMap;
    /** @type {?} */
    ValidationService.prototype.datePipe;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxVQUFVLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFNekMsTUFBTTs7OztJQXVCSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7Ozs7Ozs7c0NBWkQ7WUFDbkM7Z0JBQ0UsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ3pDO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2FBQ3RDO1NBQ0Y7S0FJQTs7Ozs7Ozs7O0lBU0QsMEJBQTBCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7S0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRCxlQUFlLENBQUMsVUFBeUI7O1FBRXZDLE1BQU0sWUFBWSxHQUFlLEVBQUUsQ0FBQztRQUVwQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDbkMsR0FBRyxDQUFDLENBQUMsTUFBTSxtQkFBbUIsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFD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QUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ3ZKO2lCQUNGO2FBQ0Y7WUFFRCxNQUFNLENBQUM7Z0JBQ0wsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUk7YUFDN0IsQ0FBQztTQUVILENBQUM7UUFFRixNQUFNLENBQUMsa0NBQWtDLENBQUM7S0FDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkQseUJBQXlCLENBQUMsU0FBb0IsRUFBRSxtQkFBbUI7UUFFakUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFOztZQUVsRCxNQUFNLGNBQWMsR0FBdUIsa0JBQWtCLENBQUM7WUFFOUQsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsUUFBUSxFQUNuRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkQsd0JBQXdCLENBQUMsU0FBb0IsRUFBRSxhQUFxQixFQUFFLFFBQWEsRUFBRSxpQkFBeUI7UUFFNUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDcEU7OztZQTdhRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMTyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm0sIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Y29udHJvbHNpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkLCBjb250cm9sc1JhZGlvQ29uZGl0aW9uYWxNb2RlbCwgRm9ybUdyb3VwVmFsaWRhdG9yfSBmcm9tICcuL2Zvcm0tZ3JvdXAtdmFsaWRhdGlvbi50eXBlc2NyaXB0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgLy8gRk9SIFNJTkdMRSBDT05UUk9MUyAtIGZvcm1Hcm91cC5jb250cm9sIGxldmVsIHZhbGlkYXRpb25cclxuICAvKipcclxuICAgKiBDdXN0b20gdmFsaWRhdG9ycyBjYW4gYmUgYWRkZWQgdG8gdGhpcy5cclxuICAgKlxyXG4gICAqIFRPRE8gOiBEZWZpbmUgaW50ZXJmYWNlIGZvciBhcnJheS5cclxuICAgKiBUT0RPIDogQWRkIGEgQ3VzdG9tIFZhbGlkYXRvciBleGFtcGxlLlxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZm9ybS12YWxpZGF0aW9uI2N1c3RvbS12YWxpZGF0b3JzXHJcbiAgICovXHJcbiAgbmdWYWxpZGF0b3JGdW5jdGlvbk1hcDogQXJyYXk8YW55PiA9IFtcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ3JlcXVpcmVkJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ2VtYWlsJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5lbWFpbFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIG1hcCBvZiBob3cgd2UndmUgbWFwcGVkIHNpbXBsZSBuYW1lcyB0byBOZyBWYWxpZGF0b3JzLCBhbmQgaW4gdGhlIGZ1dHVyZSBjdXN0b20gdmFsaWRhdG9ycy5cclxuICAgKlxyXG4gICAqIFRPRE86IENoZWNrIHJldHVybiBpbiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiAvLyBAcmV0dXJuQXJyYXlcclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRpb25GdW5jdGlvbk1hcCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5nVmFsaWRhdG9yRnVuY3Rpb25NYXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlcyBpbiBhbiBhcnJheSBvZiBzaW1wbGUgdmFsaWRhdGlvbiBuYW1lcy5cclxuICAgKlxyXG4gICAqIFRoZXNlIG5hbWVzIG1hcCB0byBOZyBWYWxpZGF0aW9uIGZ1bmN0aW9ucywgYW5kIGNhbiBtYXAgdG8gbW9yZSBjb21wbGV4IGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy5cclxuICAgKlxyXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIGxldmVyYWdlIHRoZSBwb3dlciBvZiBOZyBWYWxpZGF0aW9uLCBhbmQgY3VzdG9tIHZhbGlkYXRpb24sIGFzIHdlbGwgYXMgZ2l2aW5nIHVzXHJcbiAgICogdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHJldXNhYmxlIHZhbGlkYXRvcnMsIHRoYXQgY2FuIGJlIHVzZWQgdGhyb3VnaG91dCBvdXIgZm9ybXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiBWYWxpZGF0b3JzLm1pbkxlbmd0aCByZXF1aXJlcyBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICpcclxuICAgKiBUT0RPOiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGFcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdG9ycyAtIGllLiBbJ3JlcXVpcmVkJywgJ2VtYWlsJ11cclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8c3RyaW5nPik6IGFueVtdIHtcclxuXHJcbiAgICBjb25zdCBuZ1ZhbGlkYXRvcnM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICB2YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvck5hbWUpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBuZ1ZhbGlkYXRvckZ1bmN0aW9uIG9mIHRoaXMuZ2V0TmdWYWxpZGF0aW9uRnVuY3Rpb25NYXAoKSkge1xyXG4gICAgICAgIGlmIChuZ1ZhbGlkYXRvckZ1bmN0aW9uLnNpbXBsZU5hbWUgPT09IHZhbGlkYXRvck5hbWUpIHtcclxuICAgICAgICAgIG5nVmFsaWRhdG9ycy5wdXNoKG5nVmFsaWRhdG9yRnVuY3Rpb24ubmdWYWxpZGF0b3JGdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmdWYWxpZGF0b3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZhbGlkYXRvcnMgaGF2ZSBiZWVuIHNldCBvbiB0aGUgY29udHJvbCwgYW4gZXhhbXBsZSBvZiBhIHZhbGlkYXRvciBiZWluZyBzZXQgb24gYSBjb250cm9sIGlzOlxyXG4gICAqXHJcbiAgICoge1xyXG4gICAgICogIGNvbnRyb2w6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgdmFsdWU6ICdJbmZvcm1hdGlvbiB0ZXh0JyxcclxuICAgICAqICB2YWxpZGF0b3JzOiBbJ3JlcXVpcmVkJ11cclxuICAgICAqIH1cclxuICAgKlxyXG4gICAqIFRPRE86IFVuaXQgdGVzdC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHtBcnJheX0gdmFsaWRhdG9ycyAtIFsncmVxdWlyZWQnXVxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMgJiYgdmFsaWRhdG9ycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogUmV0dXJucyBhIGJvb2xlYW4sIGJhc2VkIG9uIGlmIHRoZSBjb250cm9sIHdoaWNoIGlzIHBhcnRcclxuICAgKiBvZiBhIGZvcm0gZ3JvdXAgaXMgdmFsaWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogVE9ETzogVW5pdCB0ZXN0LlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSBjb250cm9sIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gZm9ybUdyb3VwLmdldChjb250cm9sKS52YWxpZDtcclxuICB9XHJcblxyXG4gIC8vIEZPUiBNVUxUSVBMWSBDT05UUk9MUyAtIGZvcm1Hcm91cCBsZXZlbCB2YWxpZGF0aW9uLlxyXG4gIC8qKlxyXG4gICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAqXHJcbiAgICogQ2hlY2tzIGlmIGEgdmFsaWRhdGlvbiBlcnJvciBoYXMgYmVlbiB0aHJvd24gb24gdGhlIHBhZ2VzIEFuZ3VsYXIgRm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIGlzIGEgdGhlIHBhcmVudCBvZiBGb3JtQ29udHJvbHMsIGFuZCB0aGVyZWZvcmUgYW5kIGFjY29yZGluZyB0byB0aGUgQW5ndWxhclxyXG4gICAqIERvY3MgdGhlIGJlc3QgcGxhY2UgdG8gdmFsaWRhdGUgYWdhaW5zdCBtdWx0aXBseSBjb250cm9scywgdGhhdCBoYXZlIGRlcGVuZGVuY2llcyB1cG9uIG9uZVxyXG4gICAqIGFub3RoZXIgaXMgb24gdGhlIEZvcm1Hcm91cCBsZXZlbC5cclxuICAgKlxyXG4gICAqIEFuIGV4YW1wbGUgYmVpbmc7IHdlIHNob3VsZCBjaGVjayBpZiBhIHVzZXIgaGFzIGNoZWNrZWQgb25lIG9mIGVpZ2h0IGNoZWNrYm94ZXMuXHJcbiAgICpcclxuICAgKiBUT0RPIDogVW5pdCBUZXN0XHJcbiAgICpcclxuICAgKiBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtIGllLiAncmVhc29uc0NvbnN0ZW50T3JkZXJOb3RBcHByb3ZlZCcgLSBUaGlzIGlzIHRoZSB2YWxpZGF0aW9uIGlkZW50aWZpZXJcclxuICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICogbmVlZCB0byBwYXNzIHRoaXMgaW4gb25jZSB0aGUgVW5pdmVyc2FsIEZvcm0gQnVpbGRlciBpcyBtZXJnZWQgd2l0aCBWYWxpZGF0aW9uLlxyXG4gICAqIC8vIEByZXR1cm57Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChmb3JtR3JvdXAuZXJyb3JzICYmIGZvcm1Hcm91cC5lcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9ySWQpKSB7XHJcbiAgICAgIHJldHVybiBmb3JtR3JvdXAuZXJyb3JzW3ZhbGlkYXRpb25FcnJvcklkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbnlDaGVja2JveENoZWNrZWRcclxuICAgKlxyXG4gICAqIENoZWNrcyBpZiBhbnkgb2YgdGhlIGNoZWNrYm94IGNvbnRyb2xzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZSBjaGVja2VkIGllLiBoYXZlIGEgYm9vbGVhbiB2YWx1ZVxyXG4gICAqIG9mIHRydWUuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHdlIG1pZ2h0IGhhdmUgbXVsdGlwbHkgY2hlY2tib3hlcyB3aXRoaW4gdGhlIHZpZXcsIGFuZCB0aGUgdXNlciBuZWVkcyB0b1xyXG4gICAqIHNlbGVjdCBhdCBsZWFzdCBvbmUgb2YgdGhlc2UgY2hlY2tib3hlcyB0byBoYXZlIGVudGVyZWQgYSB2YWxpZCBpbnB1dC5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB3ZSB2YWxpZGF0ZSBvbiB0aGUgZm9ybUdyb3VwIGxldmVsLCBhbmQgbm90IHRoZSBjb250cm9sIGxldmVsIGZvciB0aGlzIGFzIHdlIGFyZSBjb25jZXJuZWQgd2l0aFxyXG4gICAqIG11bHRpcGxlIGNvbnRyb2xzIGFuZCB0aGUgTmcgNiB3YXkgaXMgdG8gaGF2ZSB0aGUgdmFsaWRhdG9yIG9uIGEgY29tbW9uIGFuY2VzdG9yIG9mIGNvbnRyb2xzOyBpbiB0aGlzXHJcbiAgICogY2FzZSBvdXIgZm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIGNoZWNrZWQgYSBjaGVja2VkIGJveCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbCBhbmQgdGhlcmVmb3JlIG5vIHZhbGlkYXRpb24gZXJyb3IgaXMgcmV0dXJuZWQuXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIE5PVCBjaGVja2VkIGEgY2hlY2tib3ggdGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvci5cclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbklkZW50aWZpZXIgLSBBbiBlcnJvciBuYW1lIGFzc2lnbmVkIGJ5IHRoZSBkZXZlbG9wZXIsIHRoaXMgbmFtZSBjYW4gdGhlbiBiZSByZWZlcnJlZFxyXG4gICAqIHRvIGRpc3BsYXkgdGhlIGVycm9yIGluIHRoZSAgdmlldy5cclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuICBpc0FueUNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY2hlY2tib3hlczogQXJyYXk8c3RyaW5nPiwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbiAgICBjb25zdCBpc0FueUNoZWNrYm94Q2hlY2tlZFZhbGlkYXRpb25GbjogVmFsaWRhdG9yRm4gPSAoY29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG4gICAgICAgIGlmIChjb250cm9scy5nZXQoY2hlY2tib3gpLnZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzQW55Q2hlY2tib3hDaGVja2VkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIENvbW1vbiBmdW5jdGlvbiBmb3IgdmFsaWRhdG9yXHJcbiAgLy8gUmV0dXJuaW5uZyB0aGUgdmFsaWRhdGlvbklkZW50aWZpZXIgdHJ1ZSBpZiBpbnZhbGlkIGFuZCBudWxsIGlmIHZhbGlkXHJcblxyXG4gIGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcbiAgICBpZiAoY29udHJvbHMgIT09IG51bGwgJiYgZmllbGRzICE9PSBudWxsKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbGxGaWVsZHNSZXF1aXJlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNBbGxGaWVsZHNSZXF1aXJlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKTogVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuICAgIGNvbnN0IGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHMsIGZpZWxkcywgdmFsaWRhdGlvbklkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpc0FsbEZpZWxkc1JlcXVpcmVkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqIENvbW1vbiBmdW5jdGlvbiBmb3IgZGF0ZSB2YWxpZGF0b3JcclxuICAgKiBSZXR1cm5pbm5nIHRoZSB2YWxpZGF0aW9uSWRlbnRpZmllciB0cnVlIGlmIGludmFsaWQgYW5kIG51bGwgaWYgdmFsaWRcclxuICAgKlxyXG4gICAqIHl5eXkvbW0vZGRcclxuICAgKlxyXG4gICAqL1xyXG5cclxuXHJcbiAgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcblxyXG4gICAgaWYgKGNvbnRyb2xzICE9PSBudWxsICYmIGZpZWxkcyAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkYXRlVmFsdWVBcnJheSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgLy8gRm9ybSBoYXZlIHZhbGlkIHZhbHVlcyBhbmQgd2UgY2FuIGNyZWF0ZSBkYXRlXHJcbiAgICAgICAgICAvLyBDaGVjayBpcyBmb3JtIGNvbnRyb2xzIG1hdGNoaW5nIHRoZSByaWdodCBsZW5naCBhbmQgdGhlbiBjcmVhdGUgYXJyYXkgY29udGFpbmVkIGRhdGVcclxuXHJcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICBkYXRlVmFsdWVBcnJheS5wdXNoKGNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXkucHVzaChjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGlmIGFycmF5IGlzIHJlYWR5IGFuZCBjb252ZXJ0IHRvIHN0cmluZ1xyXG5cclxuICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheS5sZW5ndGggPT09IDMpe1xyXG5cclxuICAgICAgICAgICAgLy9SZXR1cm4gZXJyb3IgaWYgbm90IG51bWJlcnNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRhdGVWYWx1ZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gTnVtYmVyKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB1c2VyIGVudGVyZWQgZGF5IGFuZCBtb250aCB0byBudW1iZXJzXHJcbiAgICAgICAgICAgIGRhdGVWYWx1ZUFycmF5WzFdID0gTnVtYmVyKGRhdGVWYWx1ZUFycmF5WzFdKTtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXlbMl0gPSBOdW1iZXIoZGF0ZVZhbHVlQXJyYXlbMl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGVycm9yIGlmIHVzZXIgZW50ZXJlZCBtb250aHMgbGVzcyB0aGFuIDAgYW5kIG1vcmUgdGhhbiAxMlxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMV0gPD0gMCB8fCBkYXRlVmFsdWVBcnJheVsxXSA+PSAxMikge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZXJyb3IgaWYgdXNlciBlbnRlcmVkIG1vbnRocyBsZXNzIHRoYW4gMCBhbmQgbW9yZSB0aGFuIDMxXHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheVsyXSA8PSAwIHx8IGRhdGVWYWx1ZUFycmF5WzJdID49IDMxKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBIZXJlIHZhbHVlIG1pZ2h0IG1lIGludmFsaWRcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyB6ZXJvcyBpbiBmcm9udCBpZiBsZXNzIHRoYW4gMTBcclxuICAgICAgICAgICAgaWYgKGRhdGVWYWx1ZUFycmF5WzFdIDwgMTApIHsgZGF0ZVZhbHVlQXJyYXlbMV0gPSAoXCIwXCIgKyAoZGF0ZVZhbHVlQXJyYXlbMV0pLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTsgfVxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMl0gPCAxMCkgeyBkYXRlVmFsdWVBcnJheVsyXSA9IChcIjBcIiArIChkYXRlVmFsdWVBcnJheVsyXSkudG9TdHJpbmcoKS5zbGljZSgtMikpOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgcHJvcGVyIGRhdGUgZm9ybWF0IGJ5IGNyZWF0ZSBEYXRlIG9iamVjdCBhbmQgY29udmVydCBpdCBiYWNrIHRvIHN0cmluZyBmb3IgY29tcGFyaXNvbiB3aXRoIHdoYXQgdGhlIHVzZXIgZW50ZXJlZFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGVWYWx1ZUFycmF5LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRGF0ZVN0ciA9IGRhdGVPYmoudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCBcIixcIikucmVwbGFjZShcIlRcIiwgXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIG51bGwgaWYgdmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tEYXRlU3RyID09PSBkYXRlU3RyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWREYXRlKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB8IG51bGwge1xyXG4gICAgY29uc3QgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlVmFsaWRhdGlvbkZuKGNvbnRyb2xzLCBmaWVsZHMsIHZhbGlkYXRpb25JZGVudGlmaWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWREYXRlVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiB7IGNoZWNrYm94Q29udHJvbCA6IHN0cmluZywgdGV4dGFyZWFDb250cm9sIDogc3RyaW5nIH1cclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvL0ByZXR1cm4ge2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbHM6IGNvbnRyb2xzaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZCwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICBjb25zdCBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGlmICghZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5jaGVja2JveENvbnRyb2wpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnRleHRhcmVhQ29udHJvbCkudmFsdWUgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy50ZXh0YXJlYUNvbnRyb2wpLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0gY29udHJvbHMgaXMgb2JqZWN0XHJcbiAgICogeyBjaGVja2JveENvbnRyb2wgOiBzdHJpbmcsIHRleHRhcmVhQ29udHJvbCA6IHN0cmluZyB9XHJcbiAgICogLy8gQHBhcmFtIHZhbGlkYXRpb25JZGVudGlmaWVyXHJcbiAgICogLy8gQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG5cclxuICBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sczogYW55LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKXtcclxuXHJcbiAgICBjb25zdCBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbnRyb2xzLnNlbGVjdGVkT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnJhZGlvQ29udHJvbCkudmFsdWUgIT09IG51bGwgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5yYWRpb0NvbnRyb2wpLnZhbHVlICE9PSBvcHRpb24uc2VsZWN0ZWRPcHRpb24pIHtcclxuXHJcbiAgICAgICAgICAvLyBEbyBub3QgdmFsaWRhdGUgY2hpbGQgaWYgcGFyZW50IGlzIHZhbGlkIHNvXHJcbiAgICAgICAgICAvLyBSZXNldCBjaGlsZCB2YWxpZGF0aW9uIHRvIHZhbGlkIHN0YXRlIGhlcmVcclxuICAgICAgICAgIC8vIEFkZCB3b3JkIFwiVmFsaWRhdGlvbkZuXCIgdG8gdGhlIG5hbWUgb2YgdmFsaWRhdG9yIHdoZW4geW91IGV4dGVuZCBjaGlsZCB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdG9yRnVuYykge1xyXG4gICAgICAgICAgICByZXR1cm4gIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShudWxsLCBudWxsLCBvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZFZhbGlkYXRvci52YWxpZGF0b3JGdW5jKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShmb3JtR3JvdXAsIG9wdGlvbi5jaGlsZFZhbGlkYXRvci5jb250cm9scywgb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yc1xyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIFZhbGlkYXRvcnMgYXJlIHVzZWQgZm9yIHZhbGlkYXRpb24gdGhhdCBpbnZvbHZlcyBtb3JlIHRoYW4gb25lIEZvcm1Db250cm9sLiBpZS4gV2hlbiBhIGNvbnRyb2xcclxuICAgKiBkZXBlbmRzIG9uIGFub3RoZXIsIG9yIHdlIG5lZWQgdG8gdmFsaWRhdGUgYSBncm91cCBvZiBjb250cm9scyB0b2dldGhlci4gVmFsaWRhdGlvbiBmb3IgbXVsdGlwbHkgY29udHJvbHMgaXNcclxuICAgKiByZXF1aXJlZCBvbiB0aGUgY29tbW9uIGFuY2VzdG9yIGFzIHBlciB0aGUgQW5ndWxhciBEb2N1bWVudGF0aW9uLlxyXG4gICAqXHJcbiAgICogQHNlZSBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9mb3JtLXZhbGlkYXRpb24jYWRkaW5nLXRvLXJlYWN0aXZlLWZvcm1zLTFcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBBbmd1bGFyIEZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBWYWxpZGF0b3JzIC0gW3tcclxuICAgICAqICAgIHZhbGlkYXRvckZ1bmM6ICdpc0FueUNoZWNrYm94Q2hlY2tlZCcsXHJcbiAgICAgKiAgICB2YWxpZGF0aW9uRXJyb3JJZDogJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnLFxyXG4gICAgICogICAgY2hlY2tib3hlczogW1xyXG4gICAgICogICAgICAgICdwYXJ0aWVzTmVlZEF0dGVuZCcsICdOb3RFbm91Z2hJbmZvcm1hdGlvbicsICdvcmRlck5vdEFwcGVhck9mUzI1Y2ExOTczJywgJ2Q4MScsXHJcbiAgICAgKiAgICAgICAgJ3BlbnNpb25Bbm5leCcsICdhcHBsaWNhbnRUYWtlbkFkdmljZScsICdyZXNwb25kZW50VGFrZW5BZHZpY2UnLCAnT3RoZXIyJ1xyXG4gICAgICogICAgXX1dXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUdyb3VwVmFsaWRhdG9ycykge1xyXG5cclxuICAgIHJldHVybiBmb3JtR3JvdXBWYWxpZGF0b3JzLm1hcChmb3JtR3JvdXBWYWxpZGF0b3IgPT4ge1xyXG5cclxuICAgICAgY29uc3QgZ3JvdXBWYWxpZGF0b3I6IEZvcm1Hcm91cFZhbGlkYXRvciA9IGZvcm1Hcm91cFZhbGlkYXRvcjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZvcm1Hcm91cFZhbGlkYXRvcihmb3JtR3JvdXAsIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMsIGdyb3VwVmFsaWRhdG9yLmNvbnRyb2xzLFxyXG4gICAgICAgIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yXHJcbiAgICpcclxuICAgKiBZb3UnbGwgbmVlZCB0byBwYXNzIGluIHRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCB5b3Ugd2lzaCB0byB1c2UuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGEuanNcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge1N0cmluZ30gdmFsaWRhdG9yRnVuYyAtICdpc0FueUNoZWNrYm94Q2hlY2tlZCdcclxuICAgKiAvLyBAcGFyYW0ge0FycmF5IG9yIE9iamVjdH0gY29udHJvbHMgLSBbJ3BhcnRpZXNOZWVkQXR0ZW5kJywgJ05vdEVub3VnaEluZm9ybWF0aW9uJ10gb3IgeyBjaGVja2JveDogJ2NvbnRyb2xOYW1lJywgdGV4dGFyZWE6ICdjb250cm9sTmFtZScgfVxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtICdyZWFzb25zQ29uc3RlbnRPcmRlck5vdEFwcHJvdmVkJ1xyXG4gICAqXHJcbiAgICogLy8gQHJldHVybiB7VmFsaWRhdG9yRm59XHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0b3JGdW5jOiBzdHJpbmcsIGNvbnRyb2xzOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbdmFsaWRhdG9yRnVuY10oZm9ybUdyb3VwLCBjb250cm9scywgdmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gIH1cclxufVxyXG4iXX0=