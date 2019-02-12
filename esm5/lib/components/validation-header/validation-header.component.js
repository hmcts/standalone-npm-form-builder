/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
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
export { ValidationHeaderComponent };
if (false) {
    /** @type {?} */
    ValidationHeaderComponent.prototype.formGroup;
    /** @type {?} */
    ValidationHeaderComponent.prototype.controlId;
    /** @type {?} */
    ValidationHeaderComponent.prototype.idPrefix;
    /** @type {?} */
    ValidationHeaderComponent.prototype.name;
    /** @type {?} */
    ValidationHeaderComponent.prototype.FORM_CONTROL;
    /** @type {?} */
    ValidationHeaderComponent.prototype.FORM_GROUP;
    /**
     * Signature for validationHeaderControls to be used in a Unit Test is:
     *
     * [{
     *  value: 'Enter what information is needed',
     *  controlId: 'informationNeeded',
     *  pageLink: '#linkToTextArea'
     * },
     * {
     *  value: 'Select yes if you want to include an annotated version of the draft consent order',
     *  controlId: 'includeAnnotatedVersionDraftConsOrder',
     *  pageLink: '#linkToRadiobuttons'
     * }];
     * @type {?}
     */
    ValidationHeaderComponent.prototype.validationHeaderErrorMessages;
    /** @type {?} */
    ValidationHeaderComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1oZWFkZXIvdmFsaWRhdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7O0lBNkQ3RSxtQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7O3dCQXZCcEMsSUFBSTtvQkFDUixJQUFJOzs0QkFHTCxhQUFhOzBCQUNmLFdBQVc7S0FtQnZCO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7Ozs7SUFDSCxzREFBa0I7Ozs7Ozs7OztJQUFsQixVQUFtQixTQUFvQixFQUFFLE9BQWU7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDeEU7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7O0lBQ0gsc0RBQWtCOzs7Ozs7Ozs7O0lBQWxCLFVBQW1CLFNBQW9CLEVBQUUsaUJBQXlCO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDbEY7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gscURBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWpCLFVBQWtCLGVBQXVCLEVBQUUsS0FBYTtRQUNwRCxNQUFNLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQztLQUNwQzs7Z0JBdkdKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsdXVDQXFCYjtpQkFDQTs7OztnQkExQk8saUJBQWlCOzs7NEJBa0NwQixLQUFLOzRCQUNMLEtBQUs7MkJBR0wsS0FBSzt1QkFDTCxLQUFLO2dEQW9CTCxLQUFLOztvQ0E3RFY7O1NBbUNhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC12YWxpZGF0aW9uLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXJyb3Itc3VtbWFyeS10aXRsZVwiIHJvbGU9XCJhbGVydFwiIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgIGRhdGEtbW9kdWxlPVwiZXJyb3Itc3VtbWFyeVwiPlxyXG4gIDxoMiBjbGFzcz1cImdvdnVrLWVycm9yLXN1bW1hcnlfX3RpdGxlXCIgaWQ9XCJlcnJvci1zdW1tYXJ5LXRpdGxlXCI+XHJcbiAgICBUaGVyZSBpcyBhIHByb2JsZW1cclxuICA8L2gyPlxyXG4gIDxkaXYgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5X19ib2R5XCI+XHJcbiAgICA8dWwgY2xhc3M9XCJnb3Z1ay1saXN0IGdvdnVrLWVycm9yLXN1bW1hcnlfX2xpc3RcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlIG9mIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2VzXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudmFsaWRhdGlvbkxldmVsLCBGT1JNX0NPTlRST0wpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5jb250cm9sSWQpXCI+XHJcbiAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiLi9cIiBmcmFnbWVudD1cInt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5ocmVmfX1cIj57e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudGV4dH19PC9hPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uTGV2ZWwodmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS52YWxpZGF0aW9uTGV2ZWwsIEZPUk1fR1JPVVApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cCwgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5mb3JtR3JvdXBWYWxpZGF0aW9uRXJyb3JJZClcIj5cclxuICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIuL1wiIGZyYWdtZW50PVwie3t2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLmhyZWZ9fVwiPnt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS50ZXh0fX08L2E+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG4vKipcclxuICogVmFsaWRhdGlvbkhlYWRlckNvbXBvbmVudFxyXG4gKlxyXG4gKiBJZiB0aGUgY29udHJvbCB0aGF0IHRoaXMgZXJyb3IgbWVzc2FnZSBjb21wb25lbnQgbGlua3MgdG8gaXMgbm90IHZhbGlkIHdlXHJcbiAqIHNob3cgdGhlIEVycm9yIE1lc3NhZ2UsIHNlbnQgdGhyb3VnaCBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBjb250cm9sSWQ7XHJcblxyXG4gICAgLy8gVE9ETyA6IGRlcHJlY2F0ZSBhcyBub3QgbmVlZGVkP1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXggPSAndGEnO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICd0YSc7XHJcblxyXG4gICAgLy8gVE9ETyA6IE1vdmUgdG8gY29uc3RhbnRzIGZpbGUuXHJcbiAgICBGT1JNX0NPTlRST0wgPSAnZm9ybUNvbnRyb2wnO1xyXG4gICAgRk9STV9HUk9VUCA9ICdmb3JtR3JvdXAnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2lnbmF0dXJlIGZvciB2YWxpZGF0aW9uSGVhZGVyQ29udHJvbHMgdG8gYmUgdXNlZCBpbiBhIFVuaXQgVGVzdCBpczpcclxuICAgICAqXHJcbiAgICAgKiBbe1xyXG4gICAgICogIHZhbHVlOiAnRW50ZXIgd2hhdCBpbmZvcm1hdGlvbiBpcyBuZWVkZWQnLFxyXG4gICAgICogIGNvbnRyb2xJZDogJ2luZm9ybWF0aW9uTmVlZGVkJyxcclxuICAgICAqICBwYWdlTGluazogJyNsaW5rVG9UZXh0QXJlYSdcclxuICAgICAqIH0sXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgdmFsdWU6ICdTZWxlY3QgeWVzIGlmIHlvdSB3YW50IHRvIGluY2x1ZGUgYW4gYW5ub3RhdGVkIHZlcnNpb24gb2YgdGhlIGRyYWZ0IGNvbnNlbnQgb3JkZXInLFxyXG4gICAgICogIGNvbnRyb2xJZDogJ2luY2x1ZGVBbm5vdGF0ZWRWZXJzaW9uRHJhZnRDb25zT3JkZXInLFxyXG4gICAgICogIHBhZ2VMaW5rOiAnI2xpbmtUb1JhZGlvYnV0dG9ucydcclxuICAgICAqfV07XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2VzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAgICpcclxuICAgICAqIC8vIEBzZWUgVmFsaWRhdGlvblNlcnZpY2VcclxuICAgICAqIC8vIEBwYXJhbSBjb250cm9sIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzRm9ybUdyb3VwSW52YWxpZFxyXG4gICAgICpcclxuICAgICAqIC8vIEBwYXJhbSBmb3JtR3JvdXBcclxuICAgICAqIC8vIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JJZFxyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB3ZSBzaG91bGQgc2hvdyBhIHZhbGlkYXRpb24gbWVzc2FnZSBmb3IgYSBmb3JtIGNvbnRyb2wsIG9yIHRoZVxyXG4gICAgICogZm9ybSBncm91cC5cclxuICAgICAqXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbkxldmVsIC0gdmFsaWRhdGlvbiBsZXZlbCBjYW4gZWl0aGVyIGJlIGZvcm1Hcm91cCBvciBmb3JtQ29udHJvbC5cclxuICAgICAqIEEgZm9ybUdyb3VwIGxldmVsIGlzIHZhbGlkYXRpb24gdGhhdCBoYW5kbGVzIG11bHRpcGx5IGZvcm0gY29udHJvbHMsIHdoZW4gdmFsaWRhdGluZyBtdWx0aXBseSBjb21wb25lbnRzXHJcbiAgICAgKiBhdCB0aGUgc2FtZSB0aW1lLCBpZS4gd2hlbiB5b3Ugd2lzaCB0byBzZWUgaWYgYSBjaGVja2JveCBpcyBjaGVja2VkLCBmcm9tIG11bHRpcGx5IGNoZWNrYm94ZXMsIHlvdSBtdXN0XHJcbiAgICAgKiBjaGVjayB0aGlzIG9uIGEgY29tbW9uIGFuY2VzdG9yIG9mIGEgc2V0IG9mIGNvbnRyb2xzLiBUaGlzIGNvbW1vbiBhbmNlc3RvciBpcyBhbHdheXMgdGhlIEFuZ3VsYXIgRm9ybUdyb3VwLlxyXG4gICAgICogZm9ybUNvbnRyb2wgbGV2ZWwgaXMgdmFsaWRhdGlvbiB0aGF0IGhhbmRsZXMgYSBzaW5nbGUgZm9ybSBjb250cm9sLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgYWJzdHJhdGlvbiB3YXMgYmFzZWQgb24gaG93IEFuZ3VsYXIgNidzIEZvcm1Hcm91cCBhbmQgRm9ybUNvbnRyb2wgYXJlIGFic3RyYWN0IGZyb20gZWFjaCBvdGhlcixcclxuICAgICAqIGFmdGVyIHJlYWRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogLy8gQHBhcmFtIGNvbnRyb2xJZFxyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNWYWxpZGF0aW9uTGV2ZWwodmFsaWRhdGlvbkxldmVsOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkxldmVsID09PSBsZXZlbDtcclxuICAgIH1cclxufVxyXG4iXX0=