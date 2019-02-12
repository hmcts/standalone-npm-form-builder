/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DateComponent {
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
if (false) {
    /** @type {?} */
    DateComponent.prototype.group;
    /** @type {?} */
    DateComponent.prototype.id;
    /** @type {?} */
    DateComponent.prototype.data;
    /** @type {?} */
    DateComponent.prototype.validate;
    /** @type {?} */
    DateComponent.prototype.showValidation;
    /** @type {?} */
    DateComponent.prototype.validationError;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF3QzNDLE1BQU07OztZQXRDTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDWDthQUNBOzs7b0JBRUksS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRhdGUnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lcj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAgKm5nSWY9XCJkYXRhLnZhbGlkYXRpb25FcnJvciAmJiB2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFt2YWxpZGF0aW9uRXJyb3JJZF09XCJkYXRhLnZhbGlkYXRpb25FcnJvci5pZGVudGlmaWVyXCI+XHJcbiAgICAgICAge3tkYXRhLnZhbGlkYXRpb25FcnJvci52YWx1ZX19XHJcbiAgICA8L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cD5cclxuICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1kYXRlLWlucHV0XCIgW2lkXT1cImlkXCIgW2F0dHIuZGF0YV09XCJkYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtaW5wdXRzIFtpdGVtXT1cImRhdGEuZGF5LmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS5kYXkuaW5wdXQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEuZGF5LmlucHV0LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dWYWxpZGF0aW9uXT1cIlwiPjwvYXBwLWlucHV0cz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtaW5wdXRzIFtpdGVtXT1cImRhdGEubW9udGguaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLm1vbnRoLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLm1vbnRoLmlucHV0LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dWYWxpZGF0aW9uXT1cIlwiPjwvYXBwLWlucHV0cz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtaW5wdXRzIFtpdGVtXT1cImRhdGEueWVhci5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEueWVhci5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS55ZWFyLmlucHV0LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dWYWxpZGF0aW9uXT1cIlwiPjwvYXBwLWlucHV0cz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkO1xyXG4gICAgQElucHV0KCkgZGF0YTtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG4gICAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG59XHJcbiJdfQ==