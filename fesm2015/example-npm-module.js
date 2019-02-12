import { Injectable, Component, NgModule, EventEmitter, Input, Output, defineInjectable, inject } from '@angular/core';
import { Validators, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HmctsFormBuilderService {
    constructor() { }
}
HmctsFormBuilderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
HmctsFormBuilderService.ctorParameters = () => [];
/** @nocollapse */ HmctsFormBuilderService.ngInjectableDef = defineInjectable({ factory: function HmctsFormBuilderService_Factory() { return new HmctsFormBuilderService(); }, token: HmctsFormBuilderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HmctsFormBuilderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HmctsFormBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'hmcts-hmcts-form-builder',
                template: `
    <p>
      hmcts-form-builder works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
HmctsFormBuilderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValidationService {
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
/** @nocollapse */ ValidationService.ngInjectableDef = defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(inject(DatePipe)); }, token: ValidationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormsService {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
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
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    create(someJson, someData) {
        if (typeof someJson === 'object') {
            for (const prop in someJson) {
                if (prop === 'control') {
                    if (someJson.radioGroup !== undefined) {
                        // RadioButton Logic
                        if (Object.keys(someData).length !== 0) {
                            for (const radioEl of someJson.radioGroup) {
                                if (radioEl.value === someData[someJson.control]) {
                                    this.FormControls[someJson.control] = new FormControl(radioEl.value);
                                    break;
                                }
                                else {
                                    this.createFormControl(null, someJson.control, someJson.validators);
                                }
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
            for (const item of someJson) {
                this.create(someJson[item], someData);
            }
        }
    }
    /**
     * Creates a new `FormControl` instance.
     * @param {?} initialValue - ie. text if it's a textarea.
     * @param {?} controlName - 'informationNeeded'
     * @param {?} validators
     * @return {?}
     */
    createFormControl(initialValue, controlName, validators) {
        if (this.validationService.controlHasValidation(validators)) {
            this.FormControls[controlName] = new FormControl(initialValue, this.validationService.getNgValidators(validators));
            return;
        }
        this.FormControls[controlName] = new FormControl(initialValue);
    }
    /**
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    defineformControls(someJson, someData) {
        this.FormControls = [];
        this.create(someJson, someData);
        return this.FormControls;
    }
}
FormsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
FormsService.ctorParameters = () => [
    { type: ValidationService }
];
/** @nocollapse */ FormsService.ngInjectableDef = defineInjectable({ factory: function FormsService_Factory() { return new FormsService(inject(ValidationService)); }, token: FormsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Form Builder Wrapper
 * Component accepts pageItems and pageValues for From Builder to process
 * and it emits form data to it's parent component.
 */
class FromBuilderComponent {
    /**
     * @param {?} formsService
     * @param {?} validationService
     */
    constructor(formsService, validationService) {
        this.formsService = formsService;
        this.validationService = validationService;
        this.submitPage = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["pageItems"] && changes["pageItems"].currentValue) {
            this.createForm();
        }
    }
    /**
     * @return {?}
     */
    createForm() {
        this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));
        this.setValidators();
    }
    /**
     * @return {?}
     */
    setValidators() {
        if (this.pageItems) {
            /** @type {?} */
            const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, this.pageItems.formGroupValidators);
            this.formDraft.setValidators(formGroupValidators);
        }
    }
    /**
     * @return {?}
     */
    onFormSubmit() {
        this.submitPage.emit(this.formDraft);
    }
}
FromBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form-builder',
                template: `<ng-container *ngIf="isPageValid && formDraft.invalid">
  <app-validation-header [validationHeaderErrorMessages]="this.pageItems.validationHeaderErrorMessages" [formGroup]="formDraft">
  </app-validation-header>
</ng-container>

<form *ngIf="pageItems" [formGroup]="formDraft" (ngSubmit)="onFormSubmit()">
  <div [ngClass]="{'govuk-form-group':true, 'govuk-form-group--error' : isPageValid && formDraft.invalid }">
    <h1 class="govuk-heading-xl">
      <span *ngIf="pageItems.caption" [class]="pageItems.caption.classes">{{ pageItems.caption.text }}</span>
      {{pageItems.header}}
    </h1>
    <div class="govuk-form-group" *ngFor="let group of pageItems.groups">
      <app-fieldset *ngIf="group.fieldset"
                    [classes]="'govuk-fieldset'"
                    [group]="formDraft"
                    [data]="group.fieldset"
                    [validate]="isPageValid">
      </app-fieldset>
      <app-jui-form-elements [group]="formDraft" [validate]="isPageValid" [data]="group"></app-jui-form-elements>
    </div>
  </div>
</form>
`
            },] },
];
/** @nocollapse */
FromBuilderComponent.ctorParameters = () => [
    { type: FormsService },
    { type: ValidationService }
];
FromBuilderComponent.propDecorators = {
    pageItems: [{ type: Input }],
    pageValues: [{ type: Input }],
    isPageValid: [{ type: Input }],
    submitPage: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FieldsetComponent {
}
FieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-fieldset',
                template: `<fieldset [attr.validate]="validate" [class]="classes" [attr.data]="data" [attr.group]="group">
    <ng-container *ngFor="let item of data">
        <app-jui-form-elements [validate]="validate" [group]="group" [data]="item"></app-jui-form-elements>
    </ng-container>
    <ng-content></ng-content>
</fieldset>
`
            },] },
];
FieldsetComponent.propDecorators = {
    classes: [{ type: Input }],
    validate: [{ type: Input }],
    group: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JuiFormElementsComponent {
}
JuiFormElementsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jui-form-elements',
                template: `<div [attr.validate]="validate" [attr.data]="data" [attr.group]="group">
  <!--JUI FORM builder component -->
  <app-legend *ngIf="data.legend" [classes]="data.legend.classes">
    {{data.legend.text}}
  </app-legend>
  <app-hint *ngIf="data.hint" [classes]="data.hint.classes">
    {{data.hint.text}}
  </app-hint>
  <ng-container *ngIf="data.validationError && validate">
    <app-validation-error-formgroup [group]="group" [validationErrorId]="data.validationError.identifier">
      {{data.validationError.value}}
    </app-validation-error-formgroup>
  </ng-container>
  <app-date *ngIf="data.date"
            [id]="data.date.formName"
            [data]="data.date"
            [group]="group"
            [validate]="validate"
            [validationError]="data.date.validationError">
  </app-date>
  <app-inputs *ngIf="data.input"
              [item]="data.input"
              [showValidation]="validate"
              [validationError]="data.input.validationError"
              [group]="group"
              [hint]="data.input.hint"
              [label]="data.input.label"
              [labelFor]="data.input.control"></app-inputs>
  <app-radiobutton *ngIf="data.radios" [classes]="'govuk-radios ' + data.radios.classes"
                   [items]="data.radios.radioGroup"
                   [group]="group"
                   [control]="data.radios.control"
                   [idPrefix]="data.radios.control"
                   [validate]="validate"
                   [showValidation]="validate"
                   [validationError]="data.radios.validationError">
  </app-radiobutton>
  <div *ngIf="data.checkbox" class="govuk-checkboxes">
    <app-checkbox [group]="group"
                  [validate]="validate"
                  [idPrefix]="data.checkbox.control"
                  [items]="data.checkbox"
                  [classes]="'govuk-checkboxes__item'"
                  [labelClasses]="'govuk-label govuk-checkboxes__label'">
      <div class="govuk-form-group">
        <div *ngIf="data.checkbox.groups && group.controls[data.checkbox.control].value" class="govuk-checkboxes__conditional"
             [ngStyle] = "{ 'border-left': (validate && group.invalid) ? '5px solid #b10e1e' : '' }">
          <ng-container  *ngFor="let subgroup of data.checkbox.groups">
            <app-fieldset *ngIf="subgroup.fieldset"
                          [validate]="validate"
                          [classes]="'govuk-fieldset'"
                          [group]="group"
                          [data]="subgroup.fieldset"
            >
            </app-fieldset>
            <app-jui-form-elements [validate]="validate" [group]="group" [data]="subgroup"></app-jui-form-elements>
          </ng-container>
        </div>
      </div>
    </app-checkbox>
  </div>

  <app-textareas *ngIf="data.textarea" [classes]="'govuk-textarea'"
                 [showValidation]="validate"
                 [validationError]="data.textarea.validationError"
                 [group]="group"
                 [control]="data.textarea.control"
                 [label]="data.textarea.label"
                 [labelFor]="data.textarea.control"
                 [rows]="5">
  </app-textareas>
  <app-buttons *ngIf="data.button"
               [classes]="'govuk-button'"
               [typeBtn]="data.button.type"
               [group]="group"
               [control]="data.button.control"
               [value]="data.button.value">
  </app-buttons>
  <!--JUI FORM builder component -->
</div>
`
            },] },
];
JuiFormElementsComponent.propDecorators = {
    group: [{ type: Input }],
    data: [{ type: Input }],
    validate: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LegendComponent {
}
LegendComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-legend',
                template: `<legend [class]="'govuk-fieldset__legend ' + classes">
    <ng-content></ng-content>
</legend>
`
            },] },
];
LegendComponent.propDecorators = {
    classes: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HintComponent {
}
HintComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hint',
                template: `<span [class]="classes">
    <ng-content></ng-content>
</span>
`,
                styles: [``]
            },] },
];
HintComponent.propDecorators = {
    classes: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateComponent {
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-date',
                template: `<ng-container>
    <app-validation-error-formgroup *ngIf="data.validationError && validate" [group]="group" [validationErrorId]="data.validationError.identifier">
        {{data.validationError.value}}
    </app-validation-error-formgroup>
    <div class="govuk-date-input" [id]="id" [attr.data]="data">
        <div class="govuk-date-input__item">
            <div class="govuk-form-group">
                <app-inputs [item]="data.day.input"
                            [group]="group"
                            [label]="data.day.input.label"
                            [labelFor]="data.day.input.control"
                            [showValidation]=""></app-inputs>
            </div>
        </div>
        <div class="govuk-date-input__item">
            <div class="govuk-form-group">
                <app-inputs [item]="data.month.input"
                            [group]="group"
                            [label]="data.month.input.label"
                            [labelFor]="data.month.input.control"
                            [showValidation]=""></app-inputs>
            </div>
        </div>
        <div class="govuk-date-input__item">
            <div class="govuk-form-group">
                <app-inputs [item]="data.year.input"
                            [group]="group"
                            [label]="data.year.input.label"
                            [labelFor]="data.year.input.control"
                            [showValidation]=""></app-inputs>
            </div>
        </div>
    </div>
</ng-container>
`
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputsComponent {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }
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
    isControlInvalidAndShowValidation(formGroup, control, showValidation) {
        return !this.isFormControlValid(formGroup, control) && showValidation;
    }
    /**
     * Checks if this control is valid.
     *
     *  ValidationService
     * @param {?} formGroup
     * @param {?} control
     * @return {?}
     */
    isFormControlValid(formGroup, control) {
        return this.validationService.isFormControlValid(formGroup, control);
    }
}
InputsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-inputs',
                template: `<ng-container [formGroup]="group">
  <app-label [forElement]="labelFor">{{label.text}}
  </app-label>
  <app-hint *ngIf="hint" [classes]="hint.classes">
    {{hint.text}}
  </app-hint>
  <ng-container *ngIf="validationError">
    <app-validation-error-formcontrol *ngIf="showValidation" [group]="group" [controlId]="item.control" id="{{item.control}}">{{validationError.value}}</app-validation-error-formcontrol>
  </ng-container>
  <input [class]="'govuk-input ' + item.classes"
         [formControlName]="item.control"
         [id]="item.control"
         [name]="item.control"
         [ngClass]="{'govuk-input--error':isControlInvalidAndShowValidation(group, item.control, showValidation)}"
         type="text">
</ng-container>
`
            },] },
];
/** @nocollapse */
InputsComponent.ctorParameters = () => [
    { type: ValidationService }
];
InputsComponent.propDecorators = {
    group: [{ type: Input }],
    item: [{ type: Input }],
    label: [{ type: Input }],
    hint: [{ type: Input }],
    labelFor: [{ type: Input }],
    showValidation: [{ type: Input }],
    validationError: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RadiobuttonComponent {
    constructor() {
        this.idPrefix = 'rb';
        this.name = 'rb';
    }
}
RadiobuttonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-radiobutton',
                template: `<ng-container>
  <ng-container *ngIf="validationError">
      <app-validation-error-formcontrol *ngIf="showValidation" [group]="group" [controlId]="control">{{validationError.value}}</app-validation-error-formcontrol>
  </ng-container>
  <div [class]="classes" [formGroup]="group">
      <ng-container *ngFor="let data of items; let i = index">
        <div *ngIf="data.devider" class="govuk-radios__divider">{{data.devider}}</div>
        <div *ngIf="!data.devider" class="govuk-radios__item">
            <input class="govuk-radios__input" id="{{control + data.value}}" [formControlName]="control" type="radio" [value]= "data.value">
            <label class="govuk-label govuk-radios__label" for="{{control + data.value}}">
                {{data.text}}
            </label>
            <ul *ngIf="data.list" [class]="'govuk-list' + data.list.classes">
              <li *ngFor="let item of data.list.text">{{ item }}</li>
            </ul>
            <app-hint *ngIf="data.hint" [classes]="data.hint.classes">
                {{data.hint.text}}
            </app-hint>
        </div>
        <div class="govuk-form-group">
            <div *ngIf="data.groups && group.value[control]===data.value" class="govuk-radios__conditional">
                <ng-container *ngFor="let subgroup of data.groups">
                    <app-fieldset *ngIf="subgroup.fieldset"
                                  [classes]="'govuk-fieldset'"
                                  [group]="group"
                                  [data]="subgroup.fieldset"
                                  [validate]="validate"
                                  >
                    </app-fieldset>
                    <app-jui-form-elements [validate]="validate" [group]="group" [data]="subgroup"></app-jui-form-elements>
                </ng-container>
            </div>
        </div>
      </ng-container>
  </div>
</ng-container>
`
            },] },
];
/** @nocollapse */
RadiobuttonComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-checkbox',
                template: `<ng-container>
    <div  *ngIf="group" class="govuk-checkboxes__item" [formGroup]="group">
        <input class="govuk-checkboxes__input" [formControlName]="items.control" id="{{items.control}}" type="checkbox" [value]="items.value">
        <app-label [class]="labelClasses" [forElement]="items.control">{{items.text}}</app-label>
    </div>
    <ng-content></ng-content>
</ng-container>
`
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    group: [{ type: Input }],
    idPrefix: [{ type: Input }],
    name: [{ type: Input }],
    items: [{ type: Input }],
    classes: [{ type: Input }],
    labelClasses: [{ type: Input }],
    validate: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * TextareasComponent
 *
 * Features:
 * If this component is told to show it's validation, and the input the user has entered is invalid,
 * then we should display a red box around the text area.
 */
class TextareasComponent {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
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
    isGroupInvalidAndShowValidation(formGroup, showValidation) {
        if (formGroup.errors && formGroup.errors[this.control] && showValidation) {
            return true;
        }
        return false;
    }
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
    isControlInvalidAndShowValidation(formGroup, control, showValidation) {
        return !this.isFormControlValid(formGroup, control) && showValidation;
    }
    /**
     * Checks if this control is valid.
     *
     * @see ValidationService
     * @param {?} formGroup
     * @param {?} control
     * @return {?}
     */
    isFormControlValid(formGroup, control) {
        return this.validationService.isFormControlValid(formGroup, control);
    }
}
TextareasComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-textareas',
                template: `<ng-container [formGroup]="group">
  <app-label
             [forElement]="labelFor">{{label.text}}
  </app-label>
  <ng-container *ngIf="validationError">
    <app-validation-error-formcontrol *ngIf="showValidation" [group]="group" [controlId]="control" id="{{control}}">{{validationError.value}}</app-validation-error-formcontrol>
  </ng-container>
  <textarea [class]="classes"
            [ngClass]="{'govuk-textarea--error':isControlInvalidAndShowValidation(group, control, showValidation) || isGroupInvalidAndShowValidation(group, showValidation)}"
            [rows]="rows"
            [id]="labelFor"
            [attr.aria-label]="labelFor"
            [formControlName]="control"></textarea>
</ng-container>
`
            },] },
];
/** @nocollapse */
TextareasComponent.ctorParameters = () => [
    { type: ValidationService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonsComponent {
    constructor() {
        this.idPrefix = 'btn';
        this.name = 'btn';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isValid = this.group.status === 'INVALID';
        this.group.valueChanges.subscribe(value => {
            this.isValid = this.group.status === 'INVALID';
        });
    }
}
ButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-buttons',
                template: `<ng-container *ngIf="group" [formGroup]="group">
    <input id="{{control + value}}" [class]="classes" [type]="typeBtn" [formControlName]="control" [value]="value">
</ng-container>
`
            },] },
];
/** @nocollapse */
ButtonsComponent.ctorParameters = () => [];
ButtonsComponent.propDecorators = {
    idPrefix: [{ type: Input }],
    name: [{ type: Input }],
    group: [{ type: Input }],
    classes: [{ type: Input }],
    typeBtn: [{ type: Input }],
    control: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LabelComponent {
    constructor() { }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-label',
                template: `<label [attr.for]="forElement"><ng-content></ng-content></label>
`
            },] },
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [];
LabelComponent.propDecorators = {
    forElement: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HiddenInputComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.componentClasses = 'govuk-input' + this.item.classes;
    }
}
HiddenInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hidden-input',
                template: `<ng-container
  [formGroup]="group">
    <input
           [ngClass]="componentClasses"
           [formControlName]="item.control"
           [id]="item.control"
           [name]="item.control"
           [value]="value"
           type="hidden">
</ng-container>
`
            },] },
];
/** @nocollapse */
HiddenInputComponent.ctorParameters = () => [];
HiddenInputComponent.propDecorators = {
    group: [{ type: Input }],
    item: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * ValidationHeaderComponent
 *
 * If the control that this error message component links to is not valid we
 * show the Error Message, sent through from the parent component.
 */
class ValidationHeaderComponent {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
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
     * // \@see ValidationService
     * // \@param control - 'informationNeeded'
     * @param {?} formGroup
     * @param {?} control
     * @return {?}
     */
    isFormControlValid(formGroup, control) {
        return this.validationService.isFormControlValid(formGroup, control);
    }
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
    isFormGroupInvalid(formGroup, validationErrorId) {
        return this.validationService.isFormGroupInvalid(formGroup, validationErrorId);
    }
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
    isValidationLevel(validationLevel, level) {
        return validationLevel === level;
    }
}
ValidationHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-validation-header',
                template: `<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1"
     data-module="error-summary">
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="govuk-error-summary__body">
    <ul class="govuk-list govuk-error-summary__list">
      <li *ngFor="let validationHeaderErrorMessage of validationHeaderErrorMessages">
        <ng-container *ngIf="isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_CONTROL) &&
                                        !isFormControlValid(formGroup, validationHeaderErrorMessage.controlId)">
          <a routerLink="./" fragment="{{validationHeaderErrorMessage.href}}">{{validationHeaderErrorMessage.text}}</a>
        </ng-container>
        <ng-container
          *ngIf="isValidationLevel(validationHeaderErrorMessage.validationLevel, FORM_GROUP) &&
                                isFormGroupInvalid(formGroup, validationHeaderErrorMessage.formGroupValidationErrorId)">
          <a routerLink="./" fragment="{{validationHeaderErrorMessage.href}}">{{validationHeaderErrorMessage.text}}</a>
        </ng-container>
      </li>
    </ul>
  </div>
</div>
`
            },] },
];
/** @nocollapse */
ValidationHeaderComponent.ctorParameters = () => [
    { type: ValidationService }
];
ValidationHeaderComponent.propDecorators = {
    formGroup: [{ type: Input }],
    controlId: [{ type: Input }],
    idPrefix: [{ type: Input }],
    name: [{ type: Input }],
    validationHeaderErrorMessages: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * ValidationErrorFormControlComponent
 *
 * We show an error message if the FormControl that this component links to via controlId is invalid.
 */
class ValidationErrorFormControlComponent {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }
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
    isFormControlValid(formGroup, controlId) {
        return this.validationService.isFormControlValid(formGroup, controlId);
    }
}
ValidationErrorFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-validation-error-formcontrol',
                template: `<ng-container [formGroup]="group" *ngIf="!isFormControlValid(group, controlId)" >
    <span id="{{controlId}}" class="govuk-error-message" >
        <ng-content></ng-content>
    </span>
</ng-container>
`
            },] },
];
/** @nocollapse */
ValidationErrorFormControlComponent.ctorParameters = () => [
    { type: ValidationService }
];
ValidationErrorFormControlComponent.propDecorators = {
    group: [{ type: Input }],
    controlId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Validation Error FormGroup Component
 *
 * We show an error message if the validation error associated with the FormGroup is thrown by the FormGroup.
 *
 * Note that we have validation on both FormGroup and FormControl level. FormControl level to validate single
 * controls, FormGroup level to validate multiply controls. This is the method suggested in the Angular 6 documents.
 *
 * An example of multiply controls, where we would leverage the FormGroup validation would be; checking if one
 * Checkbox is checked, out a set of multiply Checkboxes.
 *
 * // @see https://angular.io/guide/form-validation#adding-to-reactive-forms-1
 */
class ValidationErrorFormGroupComponent {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }
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
    isFormGroupInvalid(formGroup, validationErrorId) {
        return this.validationService.isFormGroupInvalid(formGroup, validationErrorId);
    }
}
ValidationErrorFormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-validation-error-formgroup',
                template: `<ng-container [formGroup]="group" *ngIf="isFormGroupInvalid(group, validationErrorId)" >
    <span id="{{validationErrorId}}" class="govuk-error-message">
        <ng-content></ng-content>
    </span>
</ng-container>
`
            },] },
];
/** @nocollapse */
ValidationErrorFormGroupComponent.ctorParameters = () => [
    { type: ValidationService }
];
ValidationErrorFormGroupComponent.propDecorators = {
    group: [{ type: Input }],
    validationErrorId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
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
const SERVICES = [
    FormsService,
    ValidationService,
    DatePipe
];
class HmctsFormBuilderModule {
}
HmctsFormBuilderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    ReactiveFormsModule
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
                providers: [
                    ...SERVICES
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HmctsFormBuilderService, HmctsFormBuilderComponent, HmctsFormBuilderModule, FromBuilderComponent, FieldsetComponent, JuiFormElementsComponent, LegendComponent, HintComponent, DateComponent, InputsComponent, RadiobuttonComponent, CheckboxComponent, TextareasComponent, ButtonsComponent, LabelComponent, HiddenInputComponent, ValidationHeaderComponent, ValidationErrorFormControlComponent, ValidationErrorFormGroupComponent, FormsService, ValidationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1ucG0tbW9kdWxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2Zvcm0tYnVpbGRlci9mcm9tLWJ1aWxkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvanVpLWZvcm0tZWxlbWVudHMvanVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlL2xpYi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvaGlkZGVuLWlucHV0L2hpZGRlbi1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWhlYWRlci92YWxpZGF0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS9saWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvbGliL2htY3RzLWZvcm0tYnVpbGRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2htY3RzLWhtY3RzLWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBobWN0cy1mb3JtLWJ1aWxkZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEZvcm0sIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Y29udHJvbHNpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkLCBjb250cm9sc1JhZGlvQ29uZGl0aW9uYWxNb2RlbCwgRm9ybUdyb3VwVmFsaWRhdG9yfSBmcm9tICcuL2Zvcm0tZ3JvdXAtdmFsaWRhdGlvbi50eXBlc2NyaXB0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgLy8gRk9SIFNJTkdMRSBDT05UUk9MUyAtIGZvcm1Hcm91cC5jb250cm9sIGxldmVsIHZhbGlkYXRpb25cclxuICAvKipcclxuICAgKiBDdXN0b20gdmFsaWRhdG9ycyBjYW4gYmUgYWRkZWQgdG8gdGhpcy5cclxuICAgKlxyXG4gICAqIFRPRE8gOiBEZWZpbmUgaW50ZXJmYWNlIGZvciBhcnJheS5cclxuICAgKiBUT0RPIDogQWRkIGEgQ3VzdG9tIFZhbGlkYXRvciBleGFtcGxlLlxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZm9ybS12YWxpZGF0aW9uI2N1c3RvbS12YWxpZGF0b3JzXHJcbiAgICovXHJcbiAgbmdWYWxpZGF0b3JGdW5jdGlvbk1hcDogQXJyYXk8YW55PiA9IFtcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ3JlcXVpcmVkJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2ltcGxlTmFtZTogJ2VtYWlsJyxcclxuICAgICAgbmdWYWxpZGF0b3JGdW5jdGlvbjogVmFsaWRhdG9ycy5lbWFpbFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIG1hcCBvZiBob3cgd2UndmUgbWFwcGVkIHNpbXBsZSBuYW1lcyB0byBOZyBWYWxpZGF0b3JzLCBhbmQgaW4gdGhlIGZ1dHVyZSBjdXN0b20gdmFsaWRhdG9ycy5cclxuICAgKlxyXG4gICAqIFRPRE86IENoZWNrIHJldHVybiBpbiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiAvLyBAcmV0dXJuQXJyYXlcclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRpb25GdW5jdGlvbk1hcCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5nVmFsaWRhdG9yRnVuY3Rpb25NYXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlcyBpbiBhbiBhcnJheSBvZiBzaW1wbGUgdmFsaWRhdGlvbiBuYW1lcy5cclxuICAgKlxyXG4gICAqIFRoZXNlIG5hbWVzIG1hcCB0byBOZyBWYWxpZGF0aW9uIGZ1bmN0aW9ucywgYW5kIGNhbiBtYXAgdG8gbW9yZSBjb21wbGV4IGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy5cclxuICAgKlxyXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIGxldmVyYWdlIHRoZSBwb3dlciBvZiBOZyBWYWxpZGF0aW9uLCBhbmQgY3VzdG9tIHZhbGlkYXRpb24sIGFzIHdlbGwgYXMgZ2l2aW5nIHVzXHJcbiAgICogdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHJldXNhYmxlIHZhbGlkYXRvcnMsIHRoYXQgY2FuIGJlIHVzZWQgdGhyb3VnaG91dCBvdXIgZm9ybXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiBWYWxpZGF0b3JzLm1pbkxlbmd0aCByZXF1aXJlcyBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICpcclxuICAgKiBUT0RPOiBVbml0IHRlc3QuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGFcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdG9ycyAtIGllLiBbJ3JlcXVpcmVkJywgJ2VtYWlsJ11cclxuICAgKi9cclxuICBnZXROZ1ZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8c3RyaW5nPik6IGFueVtdIHtcclxuXHJcbiAgICBjb25zdCBuZ1ZhbGlkYXRvcnM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICB2YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvck5hbWUpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBuZ1ZhbGlkYXRvckZ1bmN0aW9uIG9mIHRoaXMuZ2V0TmdWYWxpZGF0aW9uRnVuY3Rpb25NYXAoKSkge1xyXG4gICAgICAgIGlmIChuZ1ZhbGlkYXRvckZ1bmN0aW9uLnNpbXBsZU5hbWUgPT09IHZhbGlkYXRvck5hbWUpIHtcclxuICAgICAgICAgIG5nVmFsaWRhdG9ycy5wdXNoKG5nVmFsaWRhdG9yRnVuY3Rpb24ubmdWYWxpZGF0b3JGdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmdWYWxpZGF0b3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZhbGlkYXRvcnMgaGF2ZSBiZWVuIHNldCBvbiB0aGUgY29udHJvbCwgYW4gZXhhbXBsZSBvZiBhIHZhbGlkYXRvciBiZWluZyBzZXQgb24gYSBjb250cm9sIGlzOlxyXG4gICAqXHJcbiAgICoge1xyXG4gICAgICogIGNvbnRyb2w6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgdmFsdWU6ICdJbmZvcm1hdGlvbiB0ZXh0JyxcclxuICAgICAqICB2YWxpZGF0b3JzOiBbJ3JlcXVpcmVkJ11cclxuICAgICAqIH1cclxuICAgKlxyXG4gICAqIFRPRE86IFVuaXQgdGVzdC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHtBcnJheX0gdmFsaWRhdG9ycyAtIFsncmVxdWlyZWQnXVxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMgJiYgdmFsaWRhdG9ycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogUmV0dXJucyBhIGJvb2xlYW4sIGJhc2VkIG9uIGlmIHRoZSBjb250cm9sIHdoaWNoIGlzIHBhcnRcclxuICAgKiBvZiBhIGZvcm0gZ3JvdXAgaXMgdmFsaWQgb3Igbm90LlxyXG4gICAqXHJcbiAgICogVE9ETzogVW5pdCB0ZXN0LlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSBjb250cm9sIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gZm9ybUdyb3VwLmdldChjb250cm9sKS52YWxpZDtcclxuICB9XHJcblxyXG4gIC8vIEZPUiBNVUxUSVBMWSBDT05UUk9MUyAtIGZvcm1Hcm91cCBsZXZlbCB2YWxpZGF0aW9uLlxyXG4gIC8qKlxyXG4gICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAqXHJcbiAgICogQ2hlY2tzIGlmIGEgdmFsaWRhdGlvbiBlcnJvciBoYXMgYmVlbiB0aHJvd24gb24gdGhlIHBhZ2VzIEFuZ3VsYXIgRm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIGlzIGEgdGhlIHBhcmVudCBvZiBGb3JtQ29udHJvbHMsIGFuZCB0aGVyZWZvcmUgYW5kIGFjY29yZGluZyB0byB0aGUgQW5ndWxhclxyXG4gICAqIERvY3MgdGhlIGJlc3QgcGxhY2UgdG8gdmFsaWRhdGUgYWdhaW5zdCBtdWx0aXBseSBjb250cm9scywgdGhhdCBoYXZlIGRlcGVuZGVuY2llcyB1cG9uIG9uZVxyXG4gICAqIGFub3RoZXIgaXMgb24gdGhlIEZvcm1Hcm91cCBsZXZlbC5cclxuICAgKlxyXG4gICAqIEFuIGV4YW1wbGUgYmVpbmc7IHdlIHNob3VsZCBjaGVjayBpZiBhIHVzZXIgaGFzIGNoZWNrZWQgb25lIG9mIGVpZ2h0IGNoZWNrYm94ZXMuXHJcbiAgICpcclxuICAgKiBUT0RPIDogVW5pdCBUZXN0XHJcbiAgICpcclxuICAgKiBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSB7c3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtIGllLiAncmVhc29uc0NvbnN0ZW50T3JkZXJOb3RBcHByb3ZlZCcgLSBUaGlzIGlzIHRoZSB2YWxpZGF0aW9uIGlkZW50aWZpZXJcclxuICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICogbmVlZCB0byBwYXNzIHRoaXMgaW4gb25jZSB0aGUgVW5pdmVyc2FsIEZvcm0gQnVpbGRlciBpcyBtZXJnZWQgd2l0aCBWYWxpZGF0aW9uLlxyXG4gICAqIC8vIEByZXR1cm57Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChmb3JtR3JvdXAuZXJyb3JzICYmIGZvcm1Hcm91cC5lcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9ySWQpKSB7XHJcbiAgICAgIHJldHVybiBmb3JtR3JvdXAuZXJyb3JzW3ZhbGlkYXRpb25FcnJvcklkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbnlDaGVja2JveENoZWNrZWRcclxuICAgKlxyXG4gICAqIENoZWNrcyBpZiBhbnkgb2YgdGhlIGNoZWNrYm94IGNvbnRyb2xzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZSBjaGVja2VkIGllLiBoYXZlIGEgYm9vbGVhbiB2YWx1ZVxyXG4gICAqIG9mIHRydWUuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHdlIG1pZ2h0IGhhdmUgbXVsdGlwbHkgY2hlY2tib3hlcyB3aXRoaW4gdGhlIHZpZXcsIGFuZCB0aGUgdXNlciBuZWVkcyB0b1xyXG4gICAqIHNlbGVjdCBhdCBsZWFzdCBvbmUgb2YgdGhlc2UgY2hlY2tib3hlcyB0byBoYXZlIGVudGVyZWQgYSB2YWxpZCBpbnB1dC5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB3ZSB2YWxpZGF0ZSBvbiB0aGUgZm9ybUdyb3VwIGxldmVsLCBhbmQgbm90IHRoZSBjb250cm9sIGxldmVsIGZvciB0aGlzIGFzIHdlIGFyZSBjb25jZXJuZWQgd2l0aFxyXG4gICAqIG11bHRpcGxlIGNvbnRyb2xzIGFuZCB0aGUgTmcgNiB3YXkgaXMgdG8gaGF2ZSB0aGUgdmFsaWRhdG9yIG9uIGEgY29tbW9uIGFuY2VzdG9yIG9mIGNvbnRyb2xzOyBpbiB0aGlzXHJcbiAgICogY2FzZSBvdXIgZm9ybUdyb3VwLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIGNoZWNrZWQgYSBjaGVja2VkIGJveCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbCBhbmQgdGhlcmVmb3JlIG5vIHZhbGlkYXRpb24gZXJyb3IgaXMgcmV0dXJuZWQuXHJcbiAgICogSWYgdGhlIHVzZXIgaGFzIE5PVCBjaGVja2VkIGEgY2hlY2tib3ggdGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvci5cclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbklkZW50aWZpZXIgLSBBbiBlcnJvciBuYW1lIGFzc2lnbmVkIGJ5IHRoZSBkZXZlbG9wZXIsIHRoaXMgbmFtZSBjYW4gdGhlbiBiZSByZWZlcnJlZFxyXG4gICAqIHRvIGRpc3BsYXkgdGhlIGVycm9yIGluIHRoZSAgdmlldy5cclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuICBpc0FueUNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY2hlY2tib3hlczogQXJyYXk8c3RyaW5nPiwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbiAgICBjb25zdCBpc0FueUNoZWNrYm94Q2hlY2tlZFZhbGlkYXRpb25GbjogVmFsaWRhdG9yRm4gPSAoY29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG4gICAgICAgIGlmIChjb250cm9scy5nZXQoY2hlY2tib3gpLnZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzQW55Q2hlY2tib3hDaGVja2VkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIENvbW1vbiBmdW5jdGlvbiBmb3IgdmFsaWRhdG9yXHJcbiAgLy8gUmV0dXJuaW5uZyB0aGUgdmFsaWRhdGlvbklkZW50aWZpZXIgdHJ1ZSBpZiBpbnZhbGlkIGFuZCBudWxsIGlmIHZhbGlkXHJcblxyXG4gIGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcbiAgICBpZiAoY29udHJvbHMgIT09IG51bGwgJiYgZmllbGRzICE9PSBudWxsKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNBbGxGaWVsZHNSZXF1aXJlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvLyBAcmV0dXJue2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNBbGxGaWVsZHNSZXF1aXJlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKTogVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuICAgIGNvbnN0IGlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzQWxsRmllbGRzUmVxdWlyZWRWYWxpZGF0aW9uRm4oY29udHJvbHMsIGZpZWxkcywgdmFsaWRhdGlvbklkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpc0FsbEZpZWxkc1JlcXVpcmVkVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqIENvbW1vbiBmdW5jdGlvbiBmb3IgZGF0ZSB2YWxpZGF0b3JcclxuICAgKiBSZXR1cm5pbm5nIHRoZSB2YWxpZGF0aW9uSWRlbnRpZmllciB0cnVlIGlmIGludmFsaWQgYW5kIG51bGwgaWYgdmFsaWRcclxuICAgKlxyXG4gICAqIHl5eXkvbW0vZGRcclxuICAgKlxyXG4gICAqL1xyXG5cclxuXHJcbiAgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm4oY29udHJvbHM6IEZvcm1Hcm91cCwgZmllbGRzOiBBcnJheTxzdHJpbmc+LCB2YWxpZGF0aW9uSWRlbnRpZmllcil7XHJcblxyXG4gICAgaWYgKGNvbnRyb2xzICE9PSBudWxsICYmIGZpZWxkcyAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkYXRlVmFsdWVBcnJheSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgLy8gRm9ybSBoYXZlIHZhbGlkIHZhbHVlcyBhbmQgd2UgY2FuIGNyZWF0ZSBkYXRlXHJcbiAgICAgICAgICAvLyBDaGVjayBpcyBmb3JtIGNvbnRyb2xzIG1hdGNoaW5nIHRoZSByaWdodCBsZW5naCBhbmQgdGhlbiBjcmVhdGUgYXJyYXkgY29udGFpbmVkIGRhdGVcclxuXHJcbiAgICAgICAgICBpZiAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICBkYXRlVmFsdWVBcnJheS5wdXNoKGNvbnRyb2xzLmdldChmaWVsZCkudmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICAoY29udHJvbHMuZ2V0KGZpZWxkKS52YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXkucHVzaChjb250cm9scy5nZXQoZmllbGQpLnZhbHVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGlmIGFycmF5IGlzIHJlYWR5IGFuZCBjb252ZXJ0IHRvIHN0cmluZ1xyXG5cclxuICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheS5sZW5ndGggPT09IDMpe1xyXG5cclxuICAgICAgICAgICAgLy9SZXR1cm4gZXJyb3IgaWYgbm90IG51bWJlcnNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRhdGVWYWx1ZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gTnVtYmVyKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCB1c2VyIGVudGVyZWQgZGF5IGFuZCBtb250aCB0byBudW1iZXJzXHJcbiAgICAgICAgICAgIGRhdGVWYWx1ZUFycmF5WzFdID0gTnVtYmVyKGRhdGVWYWx1ZUFycmF5WzFdKTtcclxuICAgICAgICAgICAgZGF0ZVZhbHVlQXJyYXlbMl0gPSBOdW1iZXIoZGF0ZVZhbHVlQXJyYXlbMl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIGVycm9yIGlmIHVzZXIgZW50ZXJlZCBtb250aHMgbGVzcyB0aGFuIDAgYW5kIG1vcmUgdGhhbiAxMlxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMV0gPD0gMCB8fCBkYXRlVmFsdWVBcnJheVsxXSA+PSAxMikge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gZXJyb3IgaWYgdXNlciBlbnRlcmVkIG1vbnRocyBsZXNzIHRoYW4gMCBhbmQgbW9yZSB0aGFuIDMxXHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsdWVBcnJheVsyXSA8PSAwIHx8IGRhdGVWYWx1ZUFycmF5WzJdID49IDMxKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uSWRlbnRpZmllcl06IHRydWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBIZXJlIHZhbHVlIG1pZ2h0IG1lIGludmFsaWRcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyB6ZXJvcyBpbiBmcm9udCBpZiBsZXNzIHRoYW4gMTBcclxuICAgICAgICAgICAgaWYgKGRhdGVWYWx1ZUFycmF5WzFdIDwgMTApIHsgZGF0ZVZhbHVlQXJyYXlbMV0gPSAoXCIwXCIgKyAoZGF0ZVZhbHVlQXJyYXlbMV0pLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTsgfVxyXG4gICAgICAgICAgICBpZiAoZGF0ZVZhbHVlQXJyYXlbMl0gPCAxMCkgeyBkYXRlVmFsdWVBcnJheVsyXSA9IChcIjBcIiArIChkYXRlVmFsdWVBcnJheVsyXSkudG9TdHJpbmcoKS5zbGljZSgtMikpOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgcHJvcGVyIGRhdGUgZm9ybWF0IGJ5IGNyZWF0ZSBEYXRlIG9iamVjdCBhbmQgY29udmVydCBpdCBiYWNrIHRvIHN0cmluZyBmb3IgY29tcGFyaXNvbiB3aXRoIHdoYXQgdGhlIHVzZXIgZW50ZXJlZFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGVWYWx1ZUFycmF5LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRGF0ZVN0ciA9IGRhdGVPYmoudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCBcIixcIikucmVwbGFjZShcIlRcIiwgXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV0dXJuIG51bGwgaWYgdmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tEYXRlU3RyID09PSBkYXRlU3RyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWREYXRlKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmaWVsZHM6IEFycmF5PHN0cmluZz4sIHZhbGlkYXRpb25JZGVudGlmaWVyOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB8IG51bGwge1xyXG4gICAgY29uc3QgaXNWYWxpZERhdGVWYWxpZGF0aW9uRm46IFZhbGlkYXRvckZuID0gKGNvbnRyb2xzOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlVmFsaWRhdGlvbkZuKGNvbnRyb2xzLCBmaWVsZHMsIHZhbGlkYXRpb25JZGVudGlmaWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWREYXRlVmFsaWRhdGlvbkZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZFxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9scyBpcyBvYmplY3RcclxuICAgKiB7IGNoZWNrYm94Q29udHJvbCA6IHN0cmluZywgdGV4dGFyZWFDb250cm9sIDogc3RyaW5nIH1cclxuICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbklkZW50aWZpZXJcclxuICAgKiAvL0ByZXR1cm4ge2FueX1cclxuICAgKi9cclxuXHJcbiAgaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbHM6IGNvbnRyb2xzaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZCwgdmFsaWRhdGlvbklkZW50aWZpZXI6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICBjb25zdCBpc1RleHRBcmVhVmFsaWRXaGVuQ2hlY2tib3hDaGVja2VkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGlmICghZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5jaGVja2JveENvbnRyb2wpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnRleHRhcmVhQ29udHJvbCkudmFsdWUgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy50ZXh0YXJlYUNvbnRyb2wpLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbdmFsaWRhdGlvbklkZW50aWZpZXJdOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNUZXh0QXJlYVZhbGlkV2hlbkNoZWNrYm94Q2hlY2tlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlzUmFkaW9WYWxpZFdoZW5Tb21lT3B0aW9uU2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0gY29udHJvbHMgaXMgb2JqZWN0XHJcbiAgICogeyBjaGVja2JveENvbnRyb2wgOiBzdHJpbmcsIHRleHRhcmVhQ29udHJvbCA6IHN0cmluZyB9XHJcbiAgICogLy8gQHBhcmFtIHZhbGlkYXRpb25JZGVudGlmaWVyXHJcbiAgICogLy8gQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG5cclxuICBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sczogYW55LCB2YWxpZGF0aW9uSWRlbnRpZmllcjogc3RyaW5nKXtcclxuXHJcbiAgICBjb25zdCBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkOiBWYWxpZGF0b3JGbiA9IChmb3JtQ29udHJvbHM6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbnRyb2xzLnNlbGVjdGVkT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChmb3JtQ29udHJvbHMuZ2V0KGNvbnRyb2xzLnJhZGlvQ29udHJvbCkudmFsdWUgIT09IG51bGwgJiYgZm9ybUNvbnRyb2xzLmdldChjb250cm9scy5yYWRpb0NvbnRyb2wpLnZhbHVlICE9PSBvcHRpb24uc2VsZWN0ZWRPcHRpb24pIHtcclxuXHJcbiAgICAgICAgICAvLyBEbyBub3QgdmFsaWRhdGUgY2hpbGQgaWYgcGFyZW50IGlzIHZhbGlkIHNvXHJcbiAgICAgICAgICAvLyBSZXNldCBjaGlsZCB2YWxpZGF0aW9uIHRvIHZhbGlkIHN0YXRlIGhlcmVcclxuICAgICAgICAgIC8vIEFkZCB3b3JkIFwiVmFsaWRhdGlvbkZuXCIgdG8gdGhlIG5hbWUgb2YgdmFsaWRhdG9yIHdoZW4geW91IGV4dGVuZCBjaGlsZCB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdG9yRnVuYykge1xyXG4gICAgICAgICAgICByZXR1cm4gIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShudWxsLCBudWxsLCBvcHRpb24uY2hpbGRWYWxpZGF0b3IudmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZFZhbGlkYXRvci52YWxpZGF0b3JGdW5jKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMgKyBcIlZhbGlkYXRpb25GblwiXShmb3JtR3JvdXAsIG9wdGlvbi5jaGlsZFZhbGlkYXRvci5jb250cm9scywgb3B0aW9uLmNoaWxkVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW3ZhbGlkYXRpb25JZGVudGlmaWVyXTogdHJ1ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBpc1JhZGlvVmFsaWRXaGVuU29tZU9wdGlvblNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yc1xyXG4gICAqXHJcbiAgICogRm9ybUdyb3VwIFZhbGlkYXRvcnMgYXJlIHVzZWQgZm9yIHZhbGlkYXRpb24gdGhhdCBpbnZvbHZlcyBtb3JlIHRoYW4gb25lIEZvcm1Db250cm9sLiBpZS4gV2hlbiBhIGNvbnRyb2xcclxuICAgKiBkZXBlbmRzIG9uIGFub3RoZXIsIG9yIHdlIG5lZWQgdG8gdmFsaWRhdGUgYSBncm91cCBvZiBjb250cm9scyB0b2dldGhlci4gVmFsaWRhdGlvbiBmb3IgbXVsdGlwbHkgY29udHJvbHMgaXNcclxuICAgKiByZXF1aXJlZCBvbiB0aGUgY29tbW9uIGFuY2VzdG9yIGFzIHBlciB0aGUgQW5ndWxhciBEb2N1bWVudGF0aW9uLlxyXG4gICAqXHJcbiAgICogQHNlZSBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9mb3JtLXZhbGlkYXRpb24jYWRkaW5nLXRvLXJlYWN0aXZlLWZvcm1zLTFcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBBbmd1bGFyIEZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBWYWxpZGF0b3JzIC0gW3tcclxuICAgICAqICAgIHZhbGlkYXRvckZ1bmM6ICdpc0FueUNoZWNrYm94Q2hlY2tlZCcsXHJcbiAgICAgKiAgICB2YWxpZGF0aW9uRXJyb3JJZDogJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnLFxyXG4gICAgICogICAgY2hlY2tib3hlczogW1xyXG4gICAgICogICAgICAgICdwYXJ0aWVzTmVlZEF0dGVuZCcsICdOb3RFbm91Z2hJbmZvcm1hdGlvbicsICdvcmRlck5vdEFwcGVhck9mUzI1Y2ExOTczJywgJ2Q4MScsXHJcbiAgICAgKiAgICAgICAgJ3BlbnNpb25Bbm5leCcsICdhcHBsaWNhbnRUYWtlbkFkdmljZScsICdyZXNwb25kZW50VGFrZW5BZHZpY2UnLCAnT3RoZXIyJ1xyXG4gICAgICogICAgXX1dXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUdyb3VwVmFsaWRhdG9ycykge1xyXG5cclxuICAgIHJldHVybiBmb3JtR3JvdXBWYWxpZGF0b3JzLm1hcChmb3JtR3JvdXBWYWxpZGF0b3IgPT4ge1xyXG5cclxuICAgICAgY29uc3QgZ3JvdXBWYWxpZGF0b3I6IEZvcm1Hcm91cFZhbGlkYXRvciA9IGZvcm1Hcm91cFZhbGlkYXRvcjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZvcm1Hcm91cFZhbGlkYXRvcihmb3JtR3JvdXAsIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRvckZ1bmMsIGdyb3VwVmFsaWRhdG9yLmNvbnRyb2xzLFxyXG4gICAgICAgIGdyb3VwVmFsaWRhdG9yLnZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yXHJcbiAgICpcclxuICAgKiBZb3UnbGwgbmVlZCB0byBwYXNzIGluIHRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCB5b3Ugd2lzaCB0byB1c2UuXHJcbiAgICpcclxuICAgKiBAc2VlIHN0YXRlX21ldGEuanNcclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0ge1N0cmluZ30gdmFsaWRhdG9yRnVuYyAtICdpc0FueUNoZWNrYm94Q2hlY2tlZCdcclxuICAgKiAvLyBAcGFyYW0ge0FycmF5IG9yIE9iamVjdH0gY29udHJvbHMgLSBbJ3BhcnRpZXNOZWVkQXR0ZW5kJywgJ05vdEVub3VnaEluZm9ybWF0aW9uJ10gb3IgeyBjaGVja2JveDogJ2NvbnRyb2xOYW1lJywgdGV4dGFyZWE6ICdjb250cm9sTmFtZScgfVxyXG4gICAqIC8vIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0aW9uRXJyb3JJZCAtICdyZWFzb25zQ29uc3RlbnRPcmRlck5vdEFwcHJvdmVkJ1xyXG4gICAqXHJcbiAgICogLy8gQHJldHVybiB7VmFsaWRhdG9yRm59XHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9yKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0b3JGdW5jOiBzdHJpbmcsIGNvbnRyb2xzOiBhbnksIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbdmFsaWRhdG9yRnVuY10oZm9ybUdyb3VwLCBjb250cm9scywgdmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2Uge1xyXG4gIEZvcm1Db250cm9scyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRpb24gb2YgRm9ybUNvbnRyb2xzIGZvciBhIEZvcm1Hcm91cC5cclxuICAgKiBTbyBmaXJzdCB0aGluZyBpcyBob3cgZG8gd2UgYWRkIFZhbGlkYXRpb24gdG8gYSBGb3JtQ29udHJvbFxyXG4gICAqXHJcbiAgICogcHJvcCBjYW4gYmUgYSBmaWVsZHNldCwgbGVnZW5kLCB0ZXh0LCBpZFByZWZpeCwgbmFtZSwgaGVhZGVyLCBjaGVja2JveGVzLCBpZiB3ZVxyXG4gICAqXHJcbiAgICogSGVyZSBpcyB3aGVyZSB0aGUgdmFsaWRhdGlvbiBpcyBhcHBsaWVkIHRvIGVhY2ggb2YgdGhlIGNvbnRyb2xzIG9mIHRoZSBmb3JtLCBiYXNlZCBvbiB0aGUgdmFsaWRhdG9ycyB0aGF0XHJcbiAgICogaGF2ZSBiZWVuIHBsYWVkIGludG8gdGhlIHN0YXRlX21ldGEuanMuXHJcbiAgICpcclxuICAgKiBUT0RPOiBOYW1lIHRoaXMgc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50LCBhcyBjcmVhdGUgZG9lc24ndCByZWFsbHkgZXhwbGFpbiB3aGF0IGl0IGRvZXMsXHJcbiAgICogYWxzbyB0aGVyZSBpdCdzIHF1aXRlIGhhcmQgdG8gd29yayBvdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc29tZUpzb25cclxuICAgKiBAcGFyYW0gc29tZURhdGFcclxuICAgKi9cclxuICBjcmVhdGUoc29tZUpzb24sIHNvbWVEYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvbWVKc29uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc29tZUpzb24pIHtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09ICdjb250cm9sJykge1xyXG4gICAgICAgICAgaWYgKHNvbWVKc29uLnJhZGlvR3JvdXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBSYWRpb0J1dHRvbiBMb2dpY1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc29tZURhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmFkaW9FbCBvZiBzb21lSnNvbi5yYWRpb0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9FbC52YWx1ZSA9PT0gc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2wocmFkaW9FbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udHJvbChudWxsLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuRm9ybUNvbnRyb2xzW3NvbWVKc29uLmNvbnRyb2xdID0gbmV3IEZvcm1Db250cm9sKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250cm9sKHNvbWVKc29uLnZhbHVlLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZShzb21lSnNvbltwcm9wXSwgc29tZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc29tZUpzb24gIT09IHVuZGVmaW5lZCAmJiBzb21lSnNvbi5pc0FycmF5KSB7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gIG9mIHNvbWVKc29uKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoc29tZUpzb25baXRlbV0sIHNvbWVEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXHJcbiAgICogQHBhcmFtIGNvbnRyb2xOYW1lIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpZS4gdGV4dCBpZiBpdCdzIGEgdGV4dGFyZWEuXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlOiBhbnksIGNvbnRyb2xOYW1lOiBzdHJpbmcsIHZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS5jb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzKSkge1xyXG4gICAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldE5nVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlZmluZWZvcm1Db250cm9scyhzb21lSnNvbjogYW55LCBzb21lRGF0YTogYW55KTogYW55IHtcclxuICAgIHRoaXMuRm9ybUNvbnRyb2xzID0gW107XHJcbiAgICB0aGlzLmNyZWF0ZShzb21lSnNvbiwgc29tZURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuRm9ybUNvbnRyb2xzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGb3Jtc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRm9ybSBCdWlsZGVyIFdyYXBwZXJcclxuICogQ29tcG9uZW50IGFjY2VwdHMgcGFnZUl0ZW1zIGFuZCBwYWdlVmFsdWVzIGZvciBGcm9tIEJ1aWxkZXIgdG8gcHJvY2Vzc1xyXG4gKiBhbmQgaXQgZW1pdHMgZm9ybSBkYXRhIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWJ1aWxkZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkXCI+XHJcbiAgPGFwcC12YWxpZGF0aW9uLWhlYWRlciBbdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNdPVwidGhpcy5wYWdlSXRlbXMudmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNcIiBbZm9ybUdyb3VwXT1cImZvcm1EcmFmdFwiPlxyXG4gIDwvYXBwLXZhbGlkYXRpb24taGVhZGVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxmb3JtICpuZ0lmPVwicGFnZUl0ZW1zXCIgW2Zvcm1Hcm91cF09XCJmb3JtRHJhZnRcIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIj5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cInsnZ292dWstZm9ybS1ncm91cCc6dHJ1ZSwgJ2dvdnVrLWZvcm0tZ3JvdXAtLWVycm9yJyA6IGlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkIH1cIj5cclxuICAgIDxoMSBjbGFzcz1cImdvdnVrLWhlYWRpbmcteGxcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJwYWdlSXRlbXMuY2FwdGlvblwiIFtjbGFzc109XCJwYWdlSXRlbXMuY2FwdGlvbi5jbGFzc2VzXCI+e3sgcGFnZUl0ZW1zLmNhcHRpb24udGV4dCB9fTwvc3Bhbj5cclxuICAgICAge3twYWdlSXRlbXMuaGVhZGVyfX1cclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiICpuZ0Zvcj1cImxldCBncm91cCBvZiBwYWdlSXRlbXMuZ3JvdXBzXCI+XHJcbiAgICAgIDxhcHAtZmllbGRzZXQgKm5nSWY9XCJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImZvcm1EcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJpc1BhZ2VWYWxpZFwiPlxyXG4gICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgPGFwcC1qdWktZm9ybS1lbGVtZW50cyBbZ3JvdXBdPVwiZm9ybURyYWZ0XCIgW3ZhbGlkYXRlXT1cImlzUGFnZVZhbGlkXCIgW2RhdGFdPVwiZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9tQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3Jtc1NlcnZpY2U6IEZvcm1zU2VydmljZSxcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBASW5wdXQoKSBwYWdlSXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBwYWdlVmFsdWVzOiBhbnk7XHJcbiAgQElucHV0KCkgaXNQYWdlVmFsaWQ6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHN1Ym1pdFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHJcbiAgZm9ybURyYWZ0OiBGb3JtR3JvdXA7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnBhZ2VJdGVtcyAmJiBjaGFuZ2VzLnBhZ2VJdGVtcy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtRHJhZnQgPSBuZXcgRm9ybUdyb3VwKHRoaXMuZm9ybXNTZXJ2aWNlLmRlZmluZWZvcm1Db250cm9scyh0aGlzLnBhZ2VJdGVtcywgdGhpcy5wYWdlVmFsdWVzKSk7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRvcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYWdlSXRlbXMpIHtcclxuICAgICAgY29uc3QgZm9ybUdyb3VwVmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyh0aGlzLmZvcm1EcmFmdCwgdGhpcy5wYWdlSXRlbXMuZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICAgIHRoaXMuZm9ybURyYWZ0LnNldFZhbGlkYXRvcnMoZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvcm1TdWJtaXQoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdFBhZ2UuZW1pdCh0aGlzLmZvcm1EcmFmdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1maWVsZHNldCcsXHJcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgW2F0dHIudmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFthdHRyLmRhdGFdPVwiZGF0YVwiIFthdHRyLmdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cclxuICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cIml0ZW1cIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2ZpZWxkc2V0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZHNldENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBncm91cDtcclxuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT47XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWp1aS1mb3JtLWVsZW1lbnRzJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2F0dHIudmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbYXR0ci5kYXRhXT1cImRhdGFcIiBbYXR0ci5ncm91cF09XCJncm91cFwiPlxyXG4gIDwhLS1KVUkgRk9STSBidWlsZGVyIGNvbXBvbmVudCAtLT5cclxuICA8YXBwLWxlZ2VuZCAqbmdJZj1cImRhdGEubGVnZW5kXCIgW2NsYXNzZXNdPVwiZGF0YS5sZWdlbmQuY2xhc3Nlc1wiPlxyXG4gICAge3tkYXRhLmxlZ2VuZC50ZXh0fX1cclxuICA8L2FwcC1sZWdlbmQ+XHJcbiAgPGFwcC1oaW50ICpuZ0lmPVwiZGF0YS5oaW50XCIgW2NsYXNzZXNdPVwiZGF0YS5oaW50LmNsYXNzZXNcIj5cclxuICAgIHt7ZGF0YS5oaW50LnRleHR9fVxyXG4gIDwvYXBwLWhpbnQ+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEudmFsaWRhdGlvbkVycm9yICYmIHZhbGlkYXRlXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwIFtncm91cF09XCJncm91cFwiIFt2YWxpZGF0aW9uRXJyb3JJZF09XCJkYXRhLnZhbGlkYXRpb25FcnJvci5pZGVudGlmaWVyXCI+XHJcbiAgICAgIHt7ZGF0YS52YWxpZGF0aW9uRXJyb3IudmFsdWV9fVxyXG4gICAgPC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGFwcC1kYXRlICpuZ0lmPVwiZGF0YS5kYXRlXCJcclxuICAgICAgICAgICAgW2lkXT1cImRhdGEuZGF0ZS5mb3JtTmFtZVwiXHJcbiAgICAgICAgICAgIFtkYXRhXT1cImRhdGEuZGF0ZVwiXHJcbiAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS5kYXRlLnZhbGlkYXRpb25FcnJvclwiPlxyXG4gIDwvYXBwLWRhdGU+XHJcbiAgPGFwcC1pbnB1dHMgKm5nSWY9XCJkYXRhLmlucHV0XCJcclxuICAgICAgICAgICAgICBbaXRlbV09XCJkYXRhLmlucHV0XCJcclxuICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS5pbnB1dC52YWxpZGF0aW9uRXJyb3JcIlxyXG4gICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgW2hpbnRdPVwiZGF0YS5pbnB1dC5oaW50XCJcclxuICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEuaW5wdXQuY29udHJvbFwiPjwvYXBwLWlucHV0cz5cclxuICA8YXBwLXJhZGlvYnV0dG9uICpuZ0lmPVwiZGF0YS5yYWRpb3NcIiBbY2xhc3Nlc109XCInZ292dWstcmFkaW9zICcgKyBkYXRhLnJhZGlvcy5jbGFzc2VzXCJcclxuICAgICAgICAgICAgICAgICAgIFtpdGVtc109XCJkYXRhLnJhZGlvcy5yYWRpb0dyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICBbY29udHJvbF09XCJkYXRhLnJhZGlvcy5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIFtpZFByZWZpeF09XCJkYXRhLnJhZGlvcy5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLnJhZGlvcy52YWxpZGF0aW9uRXJyb3JcIj5cclxuICA8L2FwcC1yYWRpb2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwiZGF0YS5jaGVja2JveFwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc1wiPlxyXG4gICAgPGFwcC1jaGVja2JveCBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbaWRQcmVmaXhdPVwiZGF0YS5jaGVja2JveC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cImRhdGEuY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstY2hlY2tib3hlc19faXRlbSdcIlxyXG4gICAgICAgICAgICAgICAgICBbbGFiZWxDbGFzc2VzXT1cIidnb3Z1ay1sYWJlbCBnb3Z1ay1jaGVja2JveGVzX19sYWJlbCdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5jaGVja2JveC5ncm91cHMgJiYgZ3JvdXAuY29udHJvbHNbZGF0YS5jaGVja2JveC5jb250cm9sXS52YWx1ZVwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19fY29uZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgW25nU3R5bGVdID0gXCJ7ICdib3JkZXItbGVmdCc6ICh2YWxpZGF0ZSAmJiBncm91cC5pbnZhbGlkKSA/ICc1cHggc29saWQgI2IxMGUxZScgOiAnJyB9XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgc3ViZ3JvdXAgb2YgZGF0YS5jaGVja2JveC5ncm91cHNcIj5cclxuICAgICAgICAgICAgPGFwcC1maWVsZHNldCAqbmdJZj1cInN1Ymdyb3VwLmZpZWxkc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1maWVsZHNldCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvYXBwLWZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cInN1Ymdyb3VwXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FwcC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGFwcC10ZXh0YXJlYXMgKm5nSWY9XCJkYXRhLnRleHRhcmVhXCIgW2NsYXNzZXNdPVwiJ2dvdnVrLXRleHRhcmVhJ1wiXHJcbiAgICAgICAgICAgICAgICAgW3Nob3dWYWxpZGF0aW9uXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbkVycm9yXT1cImRhdGEudGV4dGFyZWEudmFsaWRhdGlvbkVycm9yXCJcclxuICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEudGV4dGFyZWEuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEudGV4dGFyZWEubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLnRleHRhcmVhLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgIFtyb3dzXT1cIjVcIj5cclxuICA8L2FwcC10ZXh0YXJlYXM+XHJcbiAgPGFwcC1idXR0b25zICpuZ0lmPVwiZGF0YS5idXR0b25cIlxyXG4gICAgICAgICAgICAgICBbY2xhc3Nlc109XCInZ292dWstYnV0dG9uJ1wiXHJcbiAgICAgICAgICAgICAgIFt0eXBlQnRuXT1cImRhdGEuYnV0dG9uLnR5cGVcIlxyXG4gICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICBbY29udHJvbF09XCJkYXRhLmJ1dHRvbi5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cImRhdGEuYnV0dG9uLnZhbHVlXCI+XHJcbiAgPC9hcHAtYnV0dG9ucz5cclxuICA8IS0tSlVJIEZPUk0gYnVpbGRlciBjb21wb25lbnQgLS0+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKdWlGb3JtRWxlbWVudHNDb21wb25lbnR7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBkYXRhO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sZWdlbmQnLFxyXG4gIHRlbXBsYXRlOiBgPGxlZ2VuZCBbY2xhc3NdPVwiJ2dvdnVrLWZpZWxkc2V0X19sZWdlbmQgJyArIGNsYXNzZXNcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9sZWdlbmQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzOiAgc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhpbnQnLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gW2NsYXNzXT1cImNsYXNzZXNcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9zcGFuPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGludENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gICAgPGFwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cCAqbmdJZj1cImRhdGEudmFsaWRhdGlvbkVycm9yICYmIHZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW3ZhbGlkYXRpb25FcnJvcklkXT1cImRhdGEudmFsaWRhdGlvbkVycm9yLmlkZW50aWZpZXJcIj5cclxuICAgICAgICB7e2RhdGEudmFsaWRhdGlvbkVycm9yLnZhbHVlfX1cclxuICAgIDwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwPlxyXG4gICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRcIiBbaWRdPVwiaWRcIiBbYXR0ci5kYXRhXT1cImRhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5kYXkuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLmRheS5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5kYXkuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5tb250aC5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEubW9udGguaW5wdXQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEubW9udGguaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS55ZWFyLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS55ZWFyLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLnllYXIuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWQ7XHJcbiAgICBASW5wdXQoKSBkYXRhO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0cycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICA8YXBwLWxhYmVsIFtmb3JFbGVtZW50XT1cImxhYmVsRm9yXCI+e3tsYWJlbC50ZXh0fX1cclxuICA8L2FwcC1sYWJlbD5cclxuICA8YXBwLWhpbnQgKm5nSWY9XCJoaW50XCIgW2NsYXNzZXNdPVwiaGludC5jbGFzc2VzXCI+XHJcbiAgICB7e2hpbnQudGV4dH19XHJcbiAgPC9hcHAtaGludD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiaXRlbS5jb250cm9sXCIgaWQ9XCJ7e2l0ZW0uY29udHJvbH19XCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGlucHV0IFtjbGFzc109XCInZ292dWstaW5wdXQgJyArIGl0ZW0uY2xhc3Nlc1wiXHJcbiAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgW2lkXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuYW1lXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ292dWstaW5wdXQtLWVycm9yJzppc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIGl0ZW0uY29udHJvbCwgc2hvd1ZhbGlkYXRpb24pfVwiXHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dHNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaXRlbTtcclxuICBASW5wdXQoKSBsYWJlbDtcclxuICBASW5wdXQoKSBoaW50O1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuICBuYW1lO1xyXG4gIGlkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hvd1ZhbGlkYXRpb25BbmRJc0NvbnRyb2xWYWxpZFxyXG4gICAqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgdXNlcnMgaW5wdXQgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHNob3dWYWxpZGF0aW9uXHJcbiAgICogLy9AcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy9AcGFyYW0gY29udHJvbFxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZywgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCkgJiYgc2hvd1ZhbGlkYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmFkaW9idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJjb250cm9sXCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmRldmlkZXJcIiBjbGFzcz1cImdvdnVrLXJhZGlvc19fZGl2aWRlclwiPnt7ZGF0YS5kZXZpZGVyfX08L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEuZGV2aWRlclwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLXJhZGlvc19faW5wdXRcIiBpZD1cInt7Y29udHJvbCArIGRhdGEudmFsdWV9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiIHR5cGU9XCJyYWRpb1wiIFt2YWx1ZV09IFwiZGF0YS52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1yYWRpb3NfX2xhYmVsXCIgZm9yPVwie3tjb250cm9sICsgZGF0YS52YWx1ZX19XCI+XHJcbiAgICAgICAgICAgICAgICB7e2RhdGEudGV4dH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx1bCAqbmdJZj1cImRhdGEubGlzdFwiIFtjbGFzc109XCInZ292dWstbGlzdCcgKyBkYXRhLmxpc3QuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhLmxpc3QudGV4dFwiPnt7IGl0ZW0gfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YXBwLWhpbnQgKm5nSWY9XCJkYXRhLmhpbnRcIiBbY2xhc3Nlc109XCJkYXRhLmhpbnQuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tkYXRhLmhpbnQudGV4dH19XHJcbiAgICAgICAgICAgIDwvYXBwLWhpbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuZ3JvdXBzICYmIGdyb3VwLnZhbHVlW2NvbnRyb2xdPT09ZGF0YS52YWx1ZVwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19jb25kaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViZ3JvdXAgb2YgZGF0YS5ncm91cHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWZpZWxkc2V0ICpuZ0lmPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cInN1Ymdyb3VwXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3JiJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAncmInO1xyXG4gICAgQElucHV0KCkgaXRlbXM7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgY29udHJvbDtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG4gICAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gICAgPGRpdiAgKm5nSWY9XCJncm91cFwiIGNsYXNzPVwiZ292dWstY2hlY2tib3hlc19faXRlbVwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pbnB1dFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbXMuY29udHJvbFwiIGlkPVwie3tpdGVtcy5jb250cm9sfX1cIiB0eXBlPVwiY2hlY2tib3hcIiBbdmFsdWVdPVwiaXRlbXMudmFsdWVcIj5cclxuICAgICAgICA8YXBwLWxhYmVsIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIiBbZm9yRWxlbWVudF09XCJpdGVtcy5jb250cm9sXCI+e3tpdGVtcy50ZXh0fX08L2FwcC1sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4O1xyXG4gICAgQElucHV0KCkgbmFtZTtcclxuICAgIEBJbnB1dCgpIGl0ZW1zO1xyXG4gICAgQElucHV0KCkgY2xhc3NlcztcclxuICAgIEBJbnB1dCgpIGxhYmVsQ2xhc3NlcztcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGV4dGFyZWFzJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gIDxhcHAtbGFiZWxcclxuICAgICAgICAgICAgIFtmb3JFbGVtZW50XT1cImxhYmVsRm9yXCI+e3tsYWJlbC50ZXh0fX1cclxuICA8L2FwcC1sYWJlbD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiY29udHJvbFwiIGlkPVwie3tjb250cm9sfX1cIj57e3ZhbGlkYXRpb25FcnJvci52YWx1ZX19PC9hcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8dGV4dGFyZWEgW2NsYXNzXT1cImNsYXNzZXNcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2dvdnVrLXRleHRhcmVhLS1lcnJvcic6aXNDb250cm9sSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uKGdyb3VwLCBjb250cm9sLCBzaG93VmFsaWRhdGlvbikgfHwgaXNHcm91cEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihncm91cCwgc2hvd1ZhbGlkYXRpb24pfVwiXHJcbiAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgICAgICBbaWRdPVwibGFiZWxGb3JcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxhYmVsRm9yXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sXCI+PC90ZXh0YXJlYT5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuLyoqXHJcbiAqIFRleHRhcmVhc0NvbXBvbmVudFxyXG4gKlxyXG4gKiBGZWF0dXJlczpcclxuICogSWYgdGhpcyBjb21wb25lbnQgaXMgdG9sZCB0byBzaG93IGl0J3MgdmFsaWRhdGlvbiwgYW5kIHRoZSBpbnB1dCB0aGUgdXNlciBoYXMgZW50ZXJlZCBpcyBpbnZhbGlkLFxyXG4gKiB0aGVuIHdlIHNob3VsZCBkaXNwbGF5IGEgcmVkIGJveCBhcm91bmQgdGhlIHRleHQgYXJlYS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYXNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaWRQcmVmaXggPSAndGEnO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAndGEnO1xyXG4gIEBJbnB1dCgpIGlkID0gJ3RhJztcclxuICBASW5wdXQoKSBsYWJlbEZvcjtcclxuICBASW5wdXQoKSByb3dzO1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgQElucHV0KCkgY29udHJvbDtcclxuICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICBASW5wdXQoKSBsYWJlbDtcclxuICBASW5wdXQoKSBpdGVtcztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uIChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcbiAgICBpZihmb3JtR3JvdXAuZXJyb3JzICYmIGZvcm1Hcm91cC5lcnJvcnNbdGhpcy5jb250cm9sXSAmJiBzaG93VmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hvd1ZhbGlkYXRpb25BbmRJc0NvbnRyb2xWYWxpZFxyXG4gICAqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgdXNlcnMgaW5wdXQgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIC8vIEBwYXJhbSBzaG93VmFsaWRhdGlvblxyXG4gICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgKiAvLyBAcGFyYW0gY29udHJvbFxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZywgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuICF0aGlzLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpICYmIHNob3dWYWxpZGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgY29udHJvbCBpcyB2YWxpZC5cclxuICAgKlxyXG4gICAqIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgKi9cclxuICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJ1dHRvbnMnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyb3VwXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPGlucHV0IGlkPVwie3tjb250cm9sICsgdmFsdWV9fVwiIFtjbGFzc109XCJjbGFzc2VzXCIgW3R5cGVdPVwidHlwZUJ0blwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiIFt2YWx1ZV09XCJ2YWx1ZVwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpZFByZWZpeCA9ICdidG4nO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICdidG4nO1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGNsYXNzZXM7XHJcbiAgICBASW5wdXQoKSB0eXBlQnRuO1xyXG4gICAgQElucHV0KCkgY29udHJvbDtcclxuICAgIEBJbnB1dCgpIHZhbHVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgaXNWYWxpZDogYm9vbGVhbjtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5ncm91cC5zdGF0dXMgPT09ICdJTlZBTElEJztcclxuICAgICAgdGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmdyb3VwLnN0YXR1cyA9PT0gJ0lOVkFMSUQnO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxhYmVsJyxcclxuICB0ZW1wbGF0ZTogYDxsYWJlbCBbYXR0ci5mb3JdPVwiZm9yRWxlbWVudFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2xhYmVsPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZm9yRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oaWRkZW4taW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lclxyXG4gIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbXBvbmVudENsYXNzZXNcIlxyXG4gICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbaWRdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbbmFtZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgdHlwZT1cImhpZGRlblwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZGVuSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaXRlbToge1xyXG4gICAgICBjb250cm9sOiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM6IEFycmF5PHN0cmluZz5cclxuICAgIH07XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuICAgIGNvbXBvbmVudENsYXNzZXM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50Q2xhc3NlcyA9ICdnb3Z1ay1pbnB1dCcgKyB0aGlzLml0ZW0uY2xhc3NlcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdmFsaWRhdGlvbi1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeVwiIGFyaWEtbGFiZWxsZWRieT1cImVycm9yLXN1bW1hcnktdGl0bGVcIiByb2xlPVwiYWxlcnRcIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICBkYXRhLW1vZHVsZT1cImVycm9yLXN1bW1hcnlcIj5cclxuICA8aDIgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5X190aXRsZVwiIGlkPVwiZXJyb3Itc3VtbWFyeS10aXRsZVwiPlxyXG4gICAgVGhlcmUgaXMgYSBwcm9ibGVtXHJcbiAgPC9oMj5cclxuICA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeV9fYm9keVwiPlxyXG4gICAgPHVsIGNsYXNzPVwiZ292dWstbGlzdCBnb3Z1ay1lcnJvci1zdW1tYXJ5X19saXN0XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZSBvZiB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZhbGlkYXRpb25MZXZlbCh2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnZhbGlkYXRpb25MZXZlbCwgRk9STV9DT05UUk9MKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuY29udHJvbElkKVwiPlxyXG4gICAgICAgICAgPGEgcm91dGVyTGluaz1cIi4vXCIgZnJhZ21lbnQ9XCJ7e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuaHJlZn19XCI+e3t2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnRleHR9fTwvYT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudmFsaWRhdGlvbkxldmVsLCBGT1JNX0dST1VQKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuZm9ybUdyb3VwVmFsaWRhdGlvbkVycm9ySWQpXCI+XHJcbiAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiLi9cIiBmcmFnbWVudD1cInt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5ocmVmfX1cIj57e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudGV4dH19PC9hPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuLyoqXHJcbiAqIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnRcclxuICpcclxuICogSWYgdGhlIGNvbnRyb2wgdGhhdCB0aGlzIGVycm9yIG1lc3NhZ2UgY29tcG9uZW50IGxpbmtzIHRvIGlzIG5vdCB2YWxpZCB3ZVxyXG4gKiBzaG93IHRoZSBFcnJvciBNZXNzYWdlLCBzZW50IHRocm91Z2ggZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgY29udHJvbElkO1xyXG5cclxuICAgIC8vIFRPRE8gOiBkZXByZWNhdGUgYXMgbm90IG5lZWRlZD9cclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3RhJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAndGEnO1xyXG5cclxuICAgIC8vIFRPRE8gOiBNb3ZlIHRvIGNvbnN0YW50cyBmaWxlLlxyXG4gICAgRk9STV9DT05UUk9MID0gJ2Zvcm1Db250cm9sJztcclxuICAgIEZPUk1fR1JPVVAgPSAnZm9ybUdyb3VwJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpZ25hdHVyZSBmb3IgdmFsaWRhdGlvbkhlYWRlckNvbnRyb2xzIHRvIGJlIHVzZWQgaW4gYSBVbml0IFRlc3QgaXM6XHJcbiAgICAgKlxyXG4gICAgICogW3tcclxuICAgICAqICB2YWx1ZTogJ0VudGVyIHdoYXQgaW5mb3JtYXRpb24gaXMgbmVlZGVkJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgcGFnZUxpbms6ICcjbGlua1RvVGV4dEFyZWEnXHJcbiAgICAgKiB9LFxyXG4gICAgICoge1xyXG4gICAgICogIHZhbHVlOiAnU2VsZWN0IHllcyBpZiB5b3Ugd2FudCB0byBpbmNsdWRlIGFuIGFubm90YXRlZCB2ZXJzaW9uIG9mIHRoZSBkcmFmdCBjb25zZW50IG9yZGVyJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmNsdWRlQW5ub3RhdGVkVmVyc2lvbkRyYWZ0Q29uc09yZGVyJyxcclxuICAgICAqICBwYWdlTGluazogJyNsaW5rVG9SYWRpb2J1dHRvbnMnXHJcbiAgICAgKn1dO1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgY29udHJvbCBpcyB2YWxpZC5cclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0gY29udHJvbCAtICdpbmZvcm1hdGlvbk5lZWRlZCdcclxuICAgICAqL1xyXG4gICAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpc0Zvcm1Hcm91cEludmFsaWRcclxuICAgICAqXHJcbiAgICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbkVycm9ySWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgd2Ugc2hvdWxkIHNob3cgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgZm9yIGEgZm9ybSBjb250cm9sLCBvciB0aGVcclxuICAgICAqIGZvcm0gZ3JvdXAuXHJcbiAgICAgKlxyXG4gICAgICogLy8gQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25MZXZlbCAtIHZhbGlkYXRpb24gbGV2ZWwgY2FuIGVpdGhlciBiZSBmb3JtR3JvdXAgb3IgZm9ybUNvbnRyb2wuXHJcbiAgICAgKiBBIGZvcm1Hcm91cCBsZXZlbCBpcyB2YWxpZGF0aW9uIHRoYXQgaGFuZGxlcyBtdWx0aXBseSBmb3JtIGNvbnRyb2xzLCB3aGVuIHZhbGlkYXRpbmcgbXVsdGlwbHkgY29tcG9uZW50c1xyXG4gICAgICogYXQgdGhlIHNhbWUgdGltZSwgaWUuIHdoZW4geW91IHdpc2ggdG8gc2VlIGlmIGEgY2hlY2tib3ggaXMgY2hlY2tlZCwgZnJvbSBtdWx0aXBseSBjaGVja2JveGVzLCB5b3UgbXVzdFxyXG4gICAgICogY2hlY2sgdGhpcyBvbiBhIGNvbW1vbiBhbmNlc3RvciBvZiBhIHNldCBvZiBjb250cm9scy4gVGhpcyBjb21tb24gYW5jZXN0b3IgaXMgYWx3YXlzIHRoZSBBbmd1bGFyIEZvcm1Hcm91cC5cclxuICAgICAqIGZvcm1Db250cm9sIGxldmVsIGlzIHZhbGlkYXRpb24gdGhhdCBoYW5kbGVzIGEgc2luZ2xlIGZvcm0gY29udHJvbC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGFic3RyYXRpb24gd2FzIGJhc2VkIG9uIGhvdyBBbmd1bGFyIDYncyBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGFyZSBhYnN0cmFjdCBmcm9tIGVhY2ggb3RoZXIsXHJcbiAgICAgKiBhZnRlciByZWFkaW5nLlxyXG4gICAgICpcclxuICAgICAqIC8vIEBwYXJhbSBjb250cm9sSWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25MZXZlbDogc3RyaW5nLCBsZXZlbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25MZXZlbCA9PT0gbGV2ZWw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cIiFpc0Zvcm1Db250cm9sVmFsaWQoZ3JvdXAsIGNvbnRyb2xJZClcIiA+XHJcbiAgICA8c3BhbiBpZD1cInt7Y29udHJvbElkfX1cIiBjbGFzcz1cImdvdnVrLWVycm9yLW1lc3NhZ2VcIiA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAqXHJcbiAqIFdlIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBpZiB0aGUgRm9ybUNvbnRyb2wgdGhhdCB0aGlzIGNvbXBvbmVudCBsaW5rcyB0byB2aWEgY29udHJvbElkIGlzIGludmFsaWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2xJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgRm9ybSBDb250cm9sIFZhbGlkXHJcbiAgICAgKlxyXG4gICAgICogVE9ETzogVW5pdFxyXG4gICAgICpcclxuICAgICAqIC8vIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgICAqIC8vIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXBcclxuICAgICAqIC8vIEBwYXJhbSB7c3RyaW5nfSBjb250cm9sSWQgLSBpZS4gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2xJZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCJpc0Zvcm1Hcm91cEludmFsaWQoZ3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKVwiID5cclxuICAgIDxzcGFuIGlkPVwie3t2YWxpZGF0aW9uRXJyb3JJZH19XCIgY2xhc3M9XCJnb3Z1ay1lcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb24gRXJyb3IgRm9ybUdyb3VwIENvbXBvbmVudFxyXG4gKlxyXG4gKiBXZSBzaG93IGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlIHZhbGlkYXRpb24gZXJyb3IgYXNzb2NpYXRlZCB3aXRoIHRoZSBGb3JtR3JvdXAgaXMgdGhyb3duIGJ5IHRoZSBGb3JtR3JvdXAuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3ZSBoYXZlIHZhbGlkYXRpb24gb24gYm90aCBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGxldmVsLiBGb3JtQ29udHJvbCBsZXZlbCB0byB2YWxpZGF0ZSBzaW5nbGVcclxuICogY29udHJvbHMsIEZvcm1Hcm91cCBsZXZlbCB0byB2YWxpZGF0ZSBtdWx0aXBseSBjb250cm9scy4gVGhpcyBpcyB0aGUgbWV0aG9kIHN1Z2dlc3RlZCBpbiB0aGUgQW5ndWxhciA2IGRvY3VtZW50cy5cclxuICpcclxuICogQW4gZXhhbXBsZSBvZiBtdWx0aXBseSBjb250cm9scywgd2hlcmUgd2Ugd291bGQgbGV2ZXJhZ2UgdGhlIEZvcm1Hcm91cCB2YWxpZGF0aW9uIHdvdWxkIGJlOyBjaGVja2luZyBpZiBvbmVcclxuICogQ2hlY2tib3ggaXMgY2hlY2tlZCwgb3V0IGEgc2V0IG9mIG11bHRpcGx5IENoZWNrYm94ZXMuXHJcbiAqXHJcbiAqIC8vIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Zvcm0tdmFsaWRhdGlvbiNhZGRpbmctdG8tcmVhY3RpdmUtZm9ybXMtMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckZvcm1Hcm91cENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9ySWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAgICpcclxuICAgICAqIFRPRE8gOiBVbml0IFRlc3RcclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbkVycm9ySWQgLSBpZS4gJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnIC0gVGhpcyBpcyB0aGUgdmFsaWRhdGlvbiBpZGVudGlmaWVyXHJcbiAgICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICAgKiBuZWVkIHRvIHBhc3MgdGhpcyBpbiBvbmNlIHRoZSBVbml2ZXJzYWwgRm9ybSBCdWlsZGVyIGlzIG1lcmdlZCB3aXRoIFZhbGlkYXRpb24uXHJcbiAgICAgKiAvLyBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0htY3RzRm9ybUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vaG1jdHMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RnJvbUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1aWxkZXIvZnJvbS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmllbGRzZXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHNldC9maWVsZHNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0p1aUZvcm1FbGVtZW50c0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2p1aS1mb3JtLWVsZW1lbnRzL2p1aS1mb3JtLWVsZW1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGVnZW5kQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hpbnRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5wdXRzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JhZGlvYnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDaGVja2JveENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGV4dGFyZWFzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0J1dHRvbnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYWJlbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGlkZGVuSW5wdXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaWRkZW4taW5wdXQvaGlkZGVuLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRpb24taGVhZGVyL3ZhbGlkYXRpb24taGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JGb3JtR3JvdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1zU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgRnJvbUJ1aWxkZXJDb21wb25lbnQsXHJcbiAgRmllbGRzZXRDb21wb25lbnQsXHJcbiAgVmFsaWRhdGlvbkVycm9yRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gIEZyb21CdWlsZGVyQ29tcG9uZW50LFxyXG4gIEZpZWxkc2V0Q29tcG9uZW50LFxyXG4gIEp1aUZvcm1FbGVtZW50c0NvbXBvbmVudCxcclxuICBMZWdlbmRDb21wb25lbnQsXHJcbiAgSGludENvbXBvbmVudCxcclxuICBEYXRlQ29tcG9uZW50LFxyXG4gIElucHV0c0NvbXBvbmVudCxcclxuICBSYWRpb2J1dHRvbkNvbXBvbmVudCxcclxuICBDaGVja2JveENvbXBvbmVudCxcclxuICBUZXh0YXJlYXNDb21wb25lbnQsXHJcbiAgQnV0dG9uc0NvbXBvbmVudCxcclxuICBMYWJlbENvbXBvbmVudCxcclxuICBIaWRkZW5JbnB1dENvbXBvbmVudCxcclxuICBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50LFxyXG4gIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnRcclxuXTtcclxuXHJcbmNvbnN0IFNFUlZJQ0VTID0gW1xyXG4gIEZvcm1zU2VydmljZSxcclxuICBWYWxpZGF0aW9uU2VydmljZSxcclxuICBEYXRlUGlwZVxyXG5dXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uU0VSVklDRVNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNWRDs7OztJQWdDRSxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7Ozs7Ozs7c0NBWkQ7WUFDbkM7Z0JBQ0UsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ3pDO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxLQUFLO2FBQ3RDO1NBQ0Y7S0FJQTs7Ozs7Ozs7O0lBU0QsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkQsZUFBZSxDQUFDLFVBQXlCOztR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