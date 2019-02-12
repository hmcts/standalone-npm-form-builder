/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
/**
 * ValidationErrorFormControlComponent
 *
 * We show an error message if the FormControl that this component links to via controlId is invalid.
 */
export class ValidationErrorFormControlComponent {
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
if (false) {
    /** @type {?} */
    ValidationErrorFormControlComponent.prototype.group;
    /** @type {?} */
    ValidationErrorFormControlComponent.prototype.controlId;
    /** @type {?} */
    ValidationErrorFormControlComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFakY7Ozs7O0FBZUEsTUFBTTs7OztJQUlGLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0tBQ3ZEOzs7Ozs7Ozs7Ozs7OztJQVlELGtCQUFrQixDQUFDLFNBQW9CLEVBQUUsU0FBaUI7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDMUU7OztZQWxDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFOzs7OztDQUtiO2FBQ0E7Ozs7WUFWTyxpQkFBaUI7OztvQkFrQnBCLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCIhaXNGb3JtQ29udHJvbFZhbGlkKGdyb3VwLCBjb250cm9sSWQpXCIgPlxyXG4gICAgPHNwYW4gaWQ9XCJ7e2NvbnRyb2xJZH19XCIgY2xhc3M9XCJnb3Z1ay1lcnJvci1tZXNzYWdlXCIgPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0aW9uRXJyb3JGb3JtQ29udHJvbENvbXBvbmVudFxyXG4gKlxyXG4gKiBXZSBzaG93IGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlIEZvcm1Db250cm9sIHRoYXQgdGhpcyBjb21wb25lbnQgbGlua3MgdG8gdmlhIGNvbnRyb2xJZCBpcyBpbnZhbGlkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBjb250cm9sSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIEZvcm0gQ29udHJvbCBWYWxpZFxyXG4gICAgICpcclxuICAgICAqIFRPRE86IFVuaXRcclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gY29udHJvbElkIC0gaWUuICdpbmZvcm1hdGlvbk5lZWRlZCdcclxuICAgICAqIC8vIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbElkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sSWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==