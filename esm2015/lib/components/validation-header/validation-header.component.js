/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
/**
 * ValidationHeaderComponent
 *
 * If the control that this error message component links to is not valid we
 * show the Error Message, sent through from the parent component.
 */
export class ValidationHeaderComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1oZWFkZXIvdmFsaWRhdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFakY7Ozs7OztBQStCQSxNQUFNOzs7O0lBNEJGLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1COzt3QkF2QnBDLElBQUk7b0JBQ1IsSUFBSTs7NEJBR0wsYUFBYTswQkFDZixXQUFXO0tBbUJ2Qjs7Ozs7Ozs7OztJQVFELGtCQUFrQixDQUFDLFNBQW9CLEVBQUUsT0FBZTtRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN4RTs7Ozs7Ozs7Ozs7SUFTRCxrQkFBa0IsQ0FBQyxTQUFvQixFQUFFLGlCQUF5QjtRQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCRCxpQkFBaUIsQ0FBQyxlQUF1QixFQUFFLEtBQWE7UUFDcEQsTUFBTSxDQUFDLGVBQWUsS0FBSyxLQUFLLENBQUM7S0FDcEM7OztZQXZHSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQmI7YUFDQTs7OztZQTFCTyxpQkFBaUI7Ozt3QkFrQ3BCLEtBQUs7d0JBQ0wsS0FBSzt1QkFHTCxLQUFLO21CQUNMLEtBQUs7NENBb0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdmFsaWRhdGlvbi1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeVwiIGFyaWEtbGFiZWxsZWRieT1cImVycm9yLXN1bW1hcnktdGl0bGVcIiByb2xlPVwiYWxlcnRcIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICBkYXRhLW1vZHVsZT1cImVycm9yLXN1bW1hcnlcIj5cclxuICA8aDIgY2xhc3M9XCJnb3Z1ay1lcnJvci1zdW1tYXJ5X190aXRsZVwiIGlkPVwiZXJyb3Itc3VtbWFyeS10aXRsZVwiPlxyXG4gICAgVGhlcmUgaXMgYSBwcm9ibGVtXHJcbiAgPC9oMj5cclxuICA8ZGl2IGNsYXNzPVwiZ292dWstZXJyb3Itc3VtbWFyeV9fYm9keVwiPlxyXG4gICAgPHVsIGNsYXNzPVwiZ292dWstbGlzdCBnb3Z1ay1lcnJvci1zdW1tYXJ5X19saXN0XCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZSBvZiB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZhbGlkYXRpb25MZXZlbCh2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnZhbGlkYXRpb25MZXZlbCwgRk9STV9DT05UUk9MKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuY29udHJvbElkKVwiPlxyXG4gICAgICAgICAgPGEgcm91dGVyTGluaz1cIi4vXCIgZnJhZ21lbnQ9XCJ7e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuaHJlZn19XCI+e3t2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlLnRleHR9fTwvYT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudmFsaWRhdGlvbkxldmVsLCBGT1JNX0dST1VQKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXAsIHZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UuZm9ybUdyb3VwVmFsaWRhdGlvbkVycm9ySWQpXCI+XHJcbiAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiLi9cIiBmcmFnbWVudD1cInt7dmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZS5ocmVmfX1cIj57e3ZhbGlkYXRpb25IZWFkZXJFcnJvck1lc3NhZ2UudGV4dH19PC9hPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuLyoqXHJcbiAqIFZhbGlkYXRpb25IZWFkZXJDb21wb25lbnRcclxuICpcclxuICogSWYgdGhlIGNvbnRyb2wgdGhhdCB0aGlzIGVycm9yIG1lc3NhZ2UgY29tcG9uZW50IGxpbmtzIHRvIGlzIG5vdCB2YWxpZCB3ZVxyXG4gKiBzaG93IHRoZSBFcnJvciBNZXNzYWdlLCBzZW50IHRocm91Z2ggZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgY29udHJvbElkO1xyXG5cclxuICAgIC8vIFRPRE8gOiBkZXByZWNhdGUgYXMgbm90IG5lZWRlZD9cclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3RhJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAndGEnO1xyXG5cclxuICAgIC8vIFRPRE8gOiBNb3ZlIHRvIGNvbnN0YW50cyBmaWxlLlxyXG4gICAgRk9STV9DT05UUk9MID0gJ2Zvcm1Db250cm9sJztcclxuICAgIEZPUk1fR1JPVVAgPSAnZm9ybUdyb3VwJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpZ25hdHVyZSBmb3IgdmFsaWRhdGlvbkhlYWRlckNvbnRyb2xzIHRvIGJlIHVzZWQgaW4gYSBVbml0IFRlc3QgaXM6XHJcbiAgICAgKlxyXG4gICAgICogW3tcclxuICAgICAqICB2YWx1ZTogJ0VudGVyIHdoYXQgaW5mb3JtYXRpb24gaXMgbmVlZGVkJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmZvcm1hdGlvbk5lZWRlZCcsXHJcbiAgICAgKiAgcGFnZUxpbms6ICcjbGlua1RvVGV4dEFyZWEnXHJcbiAgICAgKiB9LFxyXG4gICAgICoge1xyXG4gICAgICogIHZhbHVlOiAnU2VsZWN0IHllcyBpZiB5b3Ugd2FudCB0byBpbmNsdWRlIGFuIGFubm90YXRlZCB2ZXJzaW9uIG9mIHRoZSBkcmFmdCBjb25zZW50IG9yZGVyJyxcclxuICAgICAqICBjb250cm9sSWQ6ICdpbmNsdWRlQW5ub3RhdGVkVmVyc2lvbkRyYWZ0Q29uc09yZGVyJyxcclxuICAgICAqICBwYWdlTGluazogJyNsaW5rVG9SYWRpb2J1dHRvbnMnXHJcbiAgICAgKn1dO1xyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uSGVhZGVyRXJyb3JNZXNzYWdlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgY29udHJvbCBpcyB2YWxpZC5cclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0gY29udHJvbCAtICdpbmZvcm1hdGlvbk5lZWRlZCdcclxuICAgICAqL1xyXG4gICAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpc0Zvcm1Hcm91cEludmFsaWRcclxuICAgICAqXHJcbiAgICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0gdmFsaWRhdGlvbkVycm9ySWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRm9ybUdyb3VwSW52YWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgdmFsaWRhdGlvbkVycm9ySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgd2Ugc2hvdWxkIHNob3cgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgZm9yIGEgZm9ybSBjb250cm9sLCBvciB0aGVcclxuICAgICAqIGZvcm0gZ3JvdXAuXHJcbiAgICAgKlxyXG4gICAgICogLy8gQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25MZXZlbCAtIHZhbGlkYXRpb24gbGV2ZWwgY2FuIGVpdGhlciBiZSBmb3JtR3JvdXAgb3IgZm9ybUNvbnRyb2wuXHJcbiAgICAgKiBBIGZvcm1Hcm91cCBsZXZlbCBpcyB2YWxpZGF0aW9uIHRoYXQgaGFuZGxlcyBtdWx0aXBseSBmb3JtIGNvbnRyb2xzLCB3aGVuIHZhbGlkYXRpbmcgbXVsdGlwbHkgY29tcG9uZW50c1xyXG4gICAgICogYXQgdGhlIHNhbWUgdGltZSwgaWUuIHdoZW4geW91IHdpc2ggdG8gc2VlIGlmIGEgY2hlY2tib3ggaXMgY2hlY2tlZCwgZnJvbSBtdWx0aXBseSBjaGVja2JveGVzLCB5b3UgbXVzdFxyXG4gICAgICogY2hlY2sgdGhpcyBvbiBhIGNvbW1vbiBhbmNlc3RvciBvZiBhIHNldCBvZiBjb250cm9scy4gVGhpcyBjb21tb24gYW5jZXN0b3IgaXMgYWx3YXlzIHRoZSBBbmd1bGFyIEZvcm1Hcm91cC5cclxuICAgICAqIGZvcm1Db250cm9sIGxldmVsIGlzIHZhbGlkYXRpb24gdGhhdCBoYW5kbGVzIGEgc2luZ2xlIGZvcm0gY29udHJvbC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGFic3RyYXRpb24gd2FzIGJhc2VkIG9uIGhvdyBBbmd1bGFyIDYncyBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGFyZSBhYnN0cmFjdCBmcm9tIGVhY2ggb3RoZXIsXHJcbiAgICAgKiBhZnRlciByZWFkaW5nLlxyXG4gICAgICpcclxuICAgICAqIC8vIEBwYXJhbSBjb250cm9sSWRcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzVmFsaWRhdGlvbkxldmVsKHZhbGlkYXRpb25MZXZlbDogc3RyaW5nLCBsZXZlbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25MZXZlbCA9PT0gbGV2ZWw7XHJcbiAgICB9XHJcbn1cclxuIl19