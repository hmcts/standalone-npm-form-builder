/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-date',
                    template: "<ng-container>\n    <app-validation-error-formgroup *ngIf=\"data.validationError && validate\" [group]=\"group\" [validationErrorId]=\"data.validationError.identifier\">\n        {{data.validationError.value}}\n    </app-validation-error-formgroup>\n    <div class=\"govuk-date-input\" [id]=\"id\" [attr.data]=\"data\">\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.day.input\"\n                            [group]=\"group\"\n                            [label]=\"data.day.input.label\"\n                            [labelFor]=\"data.day.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.month.input\"\n                            [group]=\"group\"\n                            [label]=\"data.month.input.label\"\n                            [labelFor]=\"data.month.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n        <div class=\"govuk-date-input__item\">\n            <div class=\"govuk-form-group\">\n                <app-inputs [item]=\"data.year.input\"\n                            [group]=\"group\"\n                            [label]=\"data.year.input.label\"\n                            [labelFor]=\"data.year.input.control\"\n                            [showValidation]=\"\"></app-inputs>\n            </div>\n        </div>\n    </div>\n</ng-container>\n"
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
    return DateComponent;
}());
export { DateComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O2dCQUUxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSx1bURBa0NYO2lCQUNBOzs7d0JBRUksS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7O3dCQS9DVjs7U0F5Q2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyPlxyXG4gICAgPGFwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cCAqbmdJZj1cImRhdGEudmFsaWRhdGlvbkVycm9yICYmIHZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW3ZhbGlkYXRpb25FcnJvcklkXT1cImRhdGEudmFsaWRhdGlvbkVycm9yLmlkZW50aWZpZXJcIj5cclxuICAgICAgICB7e2RhdGEudmFsaWRhdGlvbkVycm9yLnZhbHVlfX1cclxuICAgIDwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWdyb3VwPlxyXG4gICAgPGRpdiBjbGFzcz1cImdvdnVrLWRhdGUtaW5wdXRcIiBbaWRdPVwiaWRcIiBbYXR0ci5kYXRhXT1cImRhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5kYXkuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLmRheS5pbnB1dC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5kYXkuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS5tb250aC5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cImRhdGEubW9udGguaW5wdXQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEubW9udGguaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZGF0ZS1pbnB1dF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1pbnB1dHMgW2l0ZW1dPVwiZGF0YS55ZWFyLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS55ZWFyLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEZvcl09XCJkYXRhLnllYXIuaW5wdXQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwiXCI+PC9hcHAtaW5wdXRzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWQ7XHJcbiAgICBASW5wdXQoKSBkYXRhO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBzaG93VmFsaWRhdGlvbjtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcjtcclxuXHJcbn1cclxuIl19