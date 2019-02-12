/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export class InputsComponent {
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
if (false) {
    /** @type {?} */
    InputsComponent.prototype.group;
    /** @type {?} */
    InputsComponent.prototype.item;
    /** @type {?} */
    InputsComponent.prototype.label;
    /** @type {?} */
    InputsComponent.prototype.hint;
    /** @type {?} */
    InputsComponent.prototype.labelFor;
    /** @type {?} */
    InputsComponent.prototype.showValidation;
    /** @type {?} */
    InputsComponent.prototype.validationError;
    /** @type {?} */
    InputsComponent.prototype.name;
    /** @type {?} */
    InputsComponent.prototype.id;
    /** @type {?} */
    InputsComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFzQmpGLE1BQU07Ozs7SUFXSixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtLQUN2RDs7Ozs7Ozs7Ozs7Ozs7O0lBWUQsaUNBQWlDLENBQUMsU0FBb0IsRUFBRSxPQUFlLEVBQUUsY0FBdUI7UUFFOUYsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxjQUFjLENBQUM7S0FDdkU7Ozs7Ozs7OztJQU9ELGtCQUFrQixDQUFDLFNBQW9CLEVBQUUsT0FBZTtRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN0RTs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JYO2FBQ0E7Ozs7WUFyQk8saUJBQWlCOzs7b0JBdUJ0QixLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0cycsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICA8YXBwLWxhYmVsIFtmb3JFbGVtZW50XT1cImxhYmVsRm9yXCI+e3tsYWJlbC50ZXh0fX1cclxuICA8L2FwcC1sYWJlbD5cclxuICA8YXBwLWhpbnQgKm5nSWY9XCJoaW50XCIgW2NsYXNzZXNdPVwiaGludC5jbGFzc2VzXCI+XHJcbiAgICB7e2hpbnQudGV4dH19XHJcbiAgPC9hcHAtaGludD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiaXRlbS5jb250cm9sXCIgaWQ9XCJ7e2l0ZW0uY29udHJvbH19XCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGlucHV0IFtjbGFzc109XCInZ292dWstaW5wdXQgJyArIGl0ZW0uY2xhc3Nlc1wiXHJcbiAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgW2lkXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuYW1lXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ292dWstaW5wdXQtLWVycm9yJzppc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZ3JvdXAsIGl0ZW0uY29udHJvbCwgc2hvd1ZhbGlkYXRpb24pfVwiXHJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dHNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgaXRlbTtcclxuICBASW5wdXQoKSBsYWJlbDtcclxuICBASW5wdXQoKSBoaW50O1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuICBuYW1lO1xyXG4gIGlkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2hvd1ZhbGlkYXRpb25BbmRJc0NvbnRyb2xWYWxpZFxyXG4gICAqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gc2hvdyBpdCdzIHZhbGlkYXRpb24sIGFuZCB0aGUgdXNlcnMgaW5wdXQgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIC8vQHBhcmFtIHNob3dWYWxpZGF0aW9uXHJcbiAgICogLy9AcGFyYW0gZm9ybUdyb3VwXHJcbiAgICogLy9AcGFyYW0gY29udHJvbFxyXG4gICAqIC8vQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc0NvbnRyb2xJbnZhbGlkQW5kU2hvd1ZhbGlkYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2w6IHN0cmluZywgc2hvd1ZhbGlkYXRpb246IGJvb2xlYW4pIHtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cCwgY29udHJvbCkgJiYgc2hvd1ZhbGlkYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBjb250cm9sIGlzIHZhbGlkLlxyXG4gICAqXHJcbiAgICogIFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgICovXHJcbiAgaXNGb3JtQ29udHJvbFZhbGlkKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmlzRm9ybUNvbnRyb2xWYWxpZChmb3JtR3JvdXAsIGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iXX0=