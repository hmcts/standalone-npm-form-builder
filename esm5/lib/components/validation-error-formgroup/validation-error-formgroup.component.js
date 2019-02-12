/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
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
export { ValidationErrorFormGroupComponent };
if (false) {
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.group;
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.validationErrorId;
    /** @type {?} */
    ValidationErrorFormGroupComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAvdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7O0lBNkI3RSwyQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7S0FDdkQ7SUFFRDs7Ozs7Ozs7Ozs7T0FXRzs7Ozs7Ozs7Ozs7Ozs7OztJQUNILDhEQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0lBQWxCLFVBQW1CLFNBQW9CLEVBQUUsaUJBQXlCO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDbEY7O2dCQTVDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLHdPQUtiO2lCQUNBOzs7O2dCQVZPLGlCQUFpQjs7O3dCQTBCcEIsS0FBSztvQ0FDTCxLQUFLOzs0Q0E3QlY7O1NBMkJhLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJncm91cFwiICpuZ0lmPVwiaXNGb3JtR3JvdXBJbnZhbGlkKGdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZClcIiA+XHJcbiAgICA8c3BhbiBpZD1cInt7dmFsaWRhdGlvbkVycm9ySWR9fVwiIGNsYXNzPVwiZ292dWstZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0aW9uIEVycm9yIEZvcm1Hcm91cCBDb21wb25lbnRcclxuICpcclxuICogV2Ugc2hvdyBhbiBlcnJvciBtZXNzYWdlIGlmIHRoZSB2YWxpZGF0aW9uIGVycm9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgRm9ybUdyb3VwIGlzIHRocm93biBieSB0aGUgRm9ybUdyb3VwLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2UgaGF2ZSB2YWxpZGF0aW9uIG9uIGJvdGggRm9ybUdyb3VwIGFuZCBGb3JtQ29udHJvbCBsZXZlbC4gRm9ybUNvbnRyb2wgbGV2ZWwgdG8gdmFsaWRhdGUgc2luZ2xlXHJcbiAqIGNvbnRyb2xzLCBGb3JtR3JvdXAgbGV2ZWwgdG8gdmFsaWRhdGUgbXVsdGlwbHkgY29udHJvbHMuIFRoaXMgaXMgdGhlIG1ldGhvZCBzdWdnZXN0ZWQgaW4gdGhlIEFuZ3VsYXIgNiBkb2N1bWVudHMuXHJcbiAqXHJcbiAqIEFuIGV4YW1wbGUgb2YgbXVsdGlwbHkgY29udHJvbHMsIHdoZXJlIHdlIHdvdWxkIGxldmVyYWdlIHRoZSBGb3JtR3JvdXAgdmFsaWRhdGlvbiB3b3VsZCBiZTsgY2hlY2tpbmcgaWYgb25lXHJcbiAqIENoZWNrYm94IGlzIGNoZWNrZWQsIG91dCBhIHNldCBvZiBtdWx0aXBseSBDaGVja2JveGVzLlxyXG4gKlxyXG4gKiAvLyBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9mb3JtLXZhbGlkYXRpb24jYWRkaW5nLXRvLXJlYWN0aXZlLWZvcm1zLTFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JGb3JtR3JvdXBDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcklkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBGb3JtIEdyb3VwIEludmFsaWRcclxuICAgICAqXHJcbiAgICAgKiBUT0RPIDogVW5pdCBUZXN0XHJcbiAgICAgKlxyXG4gICAgICogLy8gQHNlZSBWYWxpZGF0aW9uU2VydmljZVxyXG4gICAgICogLy8gQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cFxyXG4gICAgICogLy8gQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25FcnJvcklkIC0gaWUuICdyZWFzb25zQ29uc3RlbnRPcmRlck5vdEFwcHJvdmVkJyAtIFRoaXMgaXMgdGhlIHZhbGlkYXRpb24gaWRlbnRpZmllclxyXG4gICAgICogd2UgYXNzaWduIHRvIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scywgd2UgYXNzaWduIHRoaXMgd2hlbiB3ZSBjdXJyZW50bHkgc2V0VmFsaWRhdG9ycygpLCBub3RlIHRoYXQgd2Ugd2lsbFxyXG4gICAgICogbmVlZCB0byBwYXNzIHRoaXMgaW4gb25jZSB0aGUgVW5pdmVyc2FsIEZvcm0gQnVpbGRlciBpcyBtZXJnZWQgd2l0aCBWYWxpZGF0aW9uLlxyXG4gICAgICogLy8gQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCB2YWxpZGF0aW9uRXJyb3JJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuaXNGb3JtR3JvdXBJbnZhbGlkKGZvcm1Hcm91cCwgdmFsaWRhdGlvbkVycm9ySWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==