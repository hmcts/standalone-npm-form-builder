/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
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
export class ValidationErrorFormGroupComponent {
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
if (false) {
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.group;
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.validationErrorId;
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFakY7Ozs7Ozs7Ozs7Ozs7QUF1QkEsTUFBTTs7OztJQUlGLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0tBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7O0lBY0Qsa0JBQWtCLENBQUMsU0FBb0IsRUFBRSxpQkFBeUI7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztLQUNsRjs7O1lBNUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7O0NBS2I7YUFDQTs7OztZQVZPLGlCQUFpQjs7O29CQTBCcEIsS0FBSztnQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCJpc0Zvcm1Hcm91cEludmFsaWQoZ3JvdXAsIHZhbGlkYXRpb25FcnJvcklkKVwiID5cclxuICAgIDxzcGFuIGlkPVwie3t2YWxpZGF0aW9uRXJyb3JJZH19XCIgY2xhc3M9XCJnb3Z1ay1lcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRpb24gRXJyb3IgRm9ybUdyb3VwIENvbXBvbmVudFxyXG4gKlxyXG4gKiBXZSBzaG93IGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlIHZhbGlkYXRpb24gZXJyb3IgYXNzb2NpYXRlZCB3aXRoIHRoZSBGb3JtR3JvdXAgaXMgdGhyb3duIGJ5IHRoZSBGb3JtR3JvdXAuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3ZSBoYXZlIHZhbGlkYXRpb24gb24gYm90aCBGb3JtR3JvdXAgYW5kIEZvcm1Db250cm9sIGxldmVsLiBGb3JtQ29udHJvbCBsZXZlbCB0byB2YWxpZGF0ZSBzaW5nbGVcclxuICogY29udHJvbHMsIEZvcm1Hcm91cCBsZXZlbCB0byB2YWxpZGF0ZSBtdWx0aXBseSBjb250cm9scy4gVGhpcyBpcyB0aGUgbWV0aG9kIHN1Z2dlc3RlZCBpbiB0aGUgQW5ndWxhciA2IGRvY3VtZW50cy5cclxuICpcclxuICogQW4gZXhhbXBsZSBvZiBtdWx0aXBseSBjb250cm9scywgd2hlcmUgd2Ugd291bGQgbGV2ZXJhZ2UgdGhlIEZvcm1Hcm91cCB2YWxpZGF0aW9uIHdvdWxkIGJlOyBjaGVja2luZyBpZiBvbmVcclxuICogQ2hlY2tib3ggaXMgY2hlY2tlZCwgb3V0IGEgc2V0IG9mIG11bHRpcGx5IENoZWNrYm94ZXMuXHJcbiAqXHJcbiAqIC8vIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Zvcm0tdmFsaWRhdGlvbiNhZGRpbmctdG8tcmVhY3RpdmUtZm9ybXMtMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckZvcm1Hcm91cENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9ySWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIEZvcm0gR3JvdXAgSW52YWxpZFxyXG4gICAgICpcclxuICAgICAqIFRPRE8gOiBVbml0IFRlc3RcclxuICAgICAqXHJcbiAgICAgKiAvLyBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICAgKiAvLyBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwXHJcbiAgICAgKiAvLyBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbkVycm9ySWQgLSBpZS4gJ3JlYXNvbnNDb25zdGVudE9yZGVyTm90QXBwcm92ZWQnIC0gVGhpcyBpcyB0aGUgdmFsaWRhdGlvbiBpZGVudGlmaWVyXHJcbiAgICAgKiB3ZSBhc3NpZ24gdG8gYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzLCB3ZSBhc3NpZ24gdGhpcyB3aGVuIHdlIGN1cnJlbnRseSBzZXRWYWxpZGF0b3JzKCksIG5vdGUgdGhhdCB3ZSB3aWxsXHJcbiAgICAgKiBuZWVkIHRvIHBhc3MgdGhpcyBpbiBvbmNlIHRoZSBVbml2ZXJzYWwgRm9ybSBCdWlsZGVyIGlzIG1lcmdlZCB3aXRoIFZhbGlkYXRpb24uXHJcbiAgICAgKiAvLyBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIHZhbGlkYXRpb25FcnJvcklkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Hcm91cEludmFsaWQoZm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZCk7XHJcbiAgICB9XHJcbn1cclxuIl19