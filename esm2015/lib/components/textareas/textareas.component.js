/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
/**
 * TextareasComponent
 *
 * Features:
 * If this component is told to show it's validation, and the input the user has entered is invalid,
 * then we should display a red box around the text area.
 */
export class TextareasComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHRhcmVhcy90ZXh0YXJlYXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFakY7Ozs7Ozs7QUF5QkEsTUFBTTs7OztJQWNKLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO3dCQVpwQyxJQUFJO29CQUNSLElBQUk7a0JBQ04sSUFBSTtLQVdqQjs7Ozs7O0lBRUQsK0JBQStCLENBQUUsU0FBb0IsRUFBRSxjQUF1QjtRQUU1RSxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUVkOzs7Ozs7Ozs7Ozs7Ozs7SUFZRCxpQ0FBaUMsQ0FBQyxTQUFvQixFQUFFLE9BQWUsRUFBRSxjQUF1QjtRQUc5RixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQztLQUN2RTs7Ozs7Ozs7O0lBT0Qsa0JBQWtCLENBQUMsU0FBb0IsRUFBRSxPQUFlO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3RFOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0NBY1g7YUFDQTs7OztZQW5CTyxpQkFBaUI7OztvQkE0QnRCLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRleHRhcmVhcycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICA8YXBwLWxhYmVsXHJcbiAgICAgICAgICAgICBbZm9yRWxlbWVudF09XCJsYWJlbEZvclwiPnt7bGFiZWwudGV4dH19XHJcbiAgPC9hcHAtbGFiZWw+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbGlkYXRpb25FcnJvclwiPlxyXG4gICAgPGFwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25cIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbY29udHJvbElkXT1cImNvbnRyb2xcIiBpZD1cInt7Y29udHJvbH19XCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHRleHRhcmVhIFtjbGFzc109XCJjbGFzc2VzXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydnb3Z1ay10ZXh0YXJlYS0tZXJyb3InOmlzQ29udHJvbEludmFsaWRBbmRTaG93VmFsaWRhdGlvbihncm91cCwgY29udHJvbCwgc2hvd1ZhbGlkYXRpb24pIHx8IGlzR3JvdXBJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIHNob3dWYWxpZGF0aW9uKX1cIlxyXG4gICAgICAgICAgICBbcm93c109XCJyb3dzXCJcclxuICAgICAgICAgICAgW2lkXT1cImxhYmVsRm9yXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbEZvclwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiPjwvdGV4dGFyZWE+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbi8qKlxyXG4gKiBUZXh0YXJlYXNDb21wb25lbnRcclxuICpcclxuICogRmVhdHVyZXM6XHJcbiAqIElmIHRoaXMgY29tcG9uZW50IGlzIHRvbGQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgaW5wdXQgdGhlIHVzZXIgaGFzIGVudGVyZWQgaXMgaW52YWxpZCxcclxuICogdGhlbiB3ZSBzaG91bGQgZGlzcGxheSBhIHJlZCBib3ggYXJvdW5kIHRoZSB0ZXh0IGFyZWEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3RhJztcclxuICBASW5wdXQoKSBuYW1lID0gJ3RhJztcclxuICBASW5wdXQoKSBpZCA9ICd0YSc7XHJcbiAgQElucHV0KCkgbGFiZWxGb3I7XHJcbiAgQElucHV0KCkgcm93cztcclxuICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgQElucHV0KCkgbGFiZWw7XHJcbiAgQElucHV0KCkgaXRlbXM7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaXNHcm91cEludmFsaWRBbmRTaG93VmFsaWRhdGlvbiAoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIHNob3dWYWxpZGF0aW9uOiBib29sZWFuKSB7XHJcblxyXG4gICAgaWYoZm9ybUdyb3VwLmVycm9ycyAmJiBmb3JtR3JvdXAuZXJyb3JzW3RoaXMuY29udHJvbF0gJiYgc2hvd1ZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNob3dWYWxpZGF0aW9uQW5kSXNDb250cm9sVmFsaWRcclxuICAgKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIHJlcXVpcmVkIHRvIHNob3cgaXQncyB2YWxpZGF0aW9uLCBhbmQgdGhlIHVzZXJzIGlucHV0IGlzIGludmFsaWQuXHJcbiAgICpcclxuICAgKiAvLyBAcGFyYW0gc2hvd1ZhbGlkYXRpb25cclxuICAgKiAvLyBAcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy8gQHBhcmFtIGNvbnRyb2xcclxuICAgKiAvL0ByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNDb250cm9sSW52YWxpZEFuZFNob3dWYWxpZGF0aW9uKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcsIHNob3dWYWxpZGF0aW9uOiBib29sZWFuKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAhdGhpcy5pc0Zvcm1Db250cm9sVmFsaWQoZm9ybUdyb3VwLCBjb250cm9sKSAmJiBzaG93VmFsaWRhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIGNvbnRyb2wgaXMgdmFsaWQuXHJcbiAgICpcclxuICAgKiBAc2VlIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iXX0=