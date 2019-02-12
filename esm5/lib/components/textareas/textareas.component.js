/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
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
export { TextareasComponent };
if (false) {
    /** @type {?} */
    TextareasComponent.prototype.group;
    /** @type {?} */
    TextareasComponent.prototype.idPrefix;
    /** @type {?} */
    TextareasComponent.prototype.name;
    /** @type {?} */
    TextareasComponent.prototype.id;
    /** @type {?} */
    TextareasComponent.prototype.labelFor;
    /** @type {?} */
    TextareasComponent.prototype.rows;
    /** @type {?} */
    TextareasComponent.prototype.classes;
    /** @type {?} */
    TextareasComponent.prototype.control;
    /** @type {?} */
    TextareasComponent.prototype.showValidation;
    /** @type {?} */
    TextareasComponent.prototype.label;
    /** @type {?} */
    TextareasComponent.prototype.items;
    /** @type {?} */
    TextareasComponent.prototype.validationError;
    /** @type {?} */
    TextareasComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHRhcmVhcy90ZXh0YXJlYXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7O0lBeUMvRSw0QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7d0JBWnBDLElBQUk7b0JBQ1IsSUFBSTtrQkFDTixJQUFJO0tBV2pCOzs7Ozs7SUFFRCw0REFBK0I7Ozs7O0lBQS9CLFVBQWlDLFNBQW9CLEVBQUUsY0FBdUI7UUFFNUUsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FFZDtJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsOERBQWlDOzs7Ozs7Ozs7Ozs7OztJQUFqQyxVQUFrQyxTQUFvQixFQUFFLE9BQWUsRUFBRSxjQUF1QjtRQUc5RixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQztLQUN2RTtJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNILCtDQUFrQjs7Ozs7Ozs7SUFBbEIsVUFBbUIsU0FBb0IsRUFBRSxPQUFlO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3RFOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsd3ZCQWNYO2lCQUNBOzs7O2dCQW5CTyxpQkFBaUI7Ozt3QkE0QnRCLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztrQ0FDTCxLQUFLOzs2QkF6Q1I7O1NBNkJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10ZXh0YXJlYXMnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgPGFwcC1sYWJlbFxyXG4gICAgICAgICAgICAgW2ZvckVsZW1lbnRdPVwibGFiZWxGb3JcIj57e2xhYmVsLnRleHR9fVxyXG4gIDwvYXBwLWxhYmVsPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWxpZGF0aW9uRXJyb3JcIj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJjb250cm9sXCIgaWQ9XCJ7e2NvbnRyb2x9fVwiPnt7dmFsaWRhdGlvbkVycm9yLnZhbHVlfX08L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDx0ZXh0YXJlYSBbY2xhc3NdPVwiY2xhc3Nlc1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ292dWstdGV4dGFyZWEtLWVycm9yJzppc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIGNvbnRyb2wsIHNob3dWYWxpZGF0aW9uKSB8fCBpc0dyb3VwSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uKGdyb3VwLCBzaG93VmFsaWRhdGlvbil9XCJcclxuICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgICAgIFtpZF09XCJsYWJlbEZvclwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxGb3JcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xcIj48L3RleHRhcmVhPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG4vKipcclxuICogVGV4dGFyZWFzQ29tcG9uZW50XHJcbiAqXHJcbiAqIEZlYXR1cmVzOlxyXG4gKiBJZiB0aGlzIGNvbXBvbmVudCBpcyB0b2xkIHRvIHNob3cgaXQncyB2YWxpZGF0aW9uLCBhbmQgdGhlIGlucHV0IHRoZSB1c2VyIGhhcyBlbnRlcmVkIGlzIGludmFsaWQsXHJcbiAqIHRoZW4gd2Ugc2hvdWxkIGRpc3BsYXkgYSByZWQgYm94IGFyb3VuZCB0aGUgdGV4dCBhcmVhLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBpZFByZWZpeCA9ICd0YSc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICd0YSc7XHJcbiAgQElucHV0KCkgaWQgPSAndGEnO1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgpIHJvd3M7XHJcbiAgQElucHV0KCkgY2xhc3NlcztcclxuICBASW5wdXQoKSBjb250cm9sO1xyXG4gIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gIEBJbnB1dCgpIGxhYmVsO1xyXG4gIEBJbnB1dCgpIGl0ZW1zO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24gKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBzaG93VmFsaWRhdGlvbjogYm9vbGVhbikge1xyXG5cclxuICAgIGlmKGZvcm1Hcm91cC5lcnJvcnMgJiYgZm9ybUdyb3VwLmVycm9yc1t0aGlzLmNvbnRyb2xdICYmIHNob3dWYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaG93VmFsaWRhdGlvbkFuZElzQ29udHJvbFZhbGlkXHJcbiAgICpcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyByZXF1aXJlZCB0byBzaG93IGl0J3MgdmFsaWRhdGlvbiwgYW5kIHRoZSB1c2VycyBpbnB1dCBpcyBpbnZhbGlkLlxyXG4gICAqXHJcbiAgICogLy8gQHBhcmFtIHNob3dWYWxpZGF0aW9uXHJcbiAgICogLy8gQHBhcmFtIGZvcm1Hcm91cFxyXG4gICAqIC8vIEBwYXJhbSBjb250cm9sXHJcbiAgICogLy9AcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzQ29udHJvbEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nLCBzaG93VmFsaWRhdGlvbjogYm9vbGVhbikge1xyXG5cclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCkgJiYgc2hvd1ZhbGlkYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogQHNlZSBWYWxpZGF0aW9uU2VydmljZVxyXG4gICAqL1xyXG4gIGlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uU2VydmljZS5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKTtcclxuICB9XHJcbn1cclxuIl19