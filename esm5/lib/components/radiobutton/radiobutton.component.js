/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
        this.idPrefix = 'rb';
        this.name = 'rb';
    }
    RadiobuttonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-radiobutton',
                    template: "<ng-container>\n  <ng-container *ngIf=\"validationError\">\n      <app-validation-error-formcontrol *ngIf=\"showValidation\" [group]=\"group\" [controlId]=\"control\">{{validationError.value}}</app-validation-error-formcontrol>\n  </ng-container>\n  <div [class]=\"classes\" [formGroup]=\"group\">\n      <ng-container *ngFor=\"let data of items; let i = index\">\n        <div *ngIf=\"data.devider\" class=\"govuk-radios__divider\">{{data.devider}}</div>\n        <div *ngIf=\"!data.devider\" class=\"govuk-radios__item\">\n            <input class=\"govuk-radios__input\" id=\"{{control + data.value}}\" [formControlName]=\"control\" type=\"radio\" [value]= \"data.value\">\n            <label class=\"govuk-label govuk-radios__label\" for=\"{{control + data.value}}\">\n                {{data.text}}\n            </label>\n            <ul *ngIf=\"data.list\" [class]=\"'govuk-list' + data.list.classes\">\n              <li *ngFor=\"let item of data.list.text\">{{ item }}</li>\n            </ul>\n            <app-hint *ngIf=\"data.hint\" [classes]=\"data.hint.classes\">\n                {{data.hint.text}}\n            </app-hint>\n        </div>\n        <div class=\"govuk-form-group\">\n            <div *ngIf=\"data.groups && group.value[control]===data.value\" class=\"govuk-radios__conditional\">\n                <ng-container *ngFor=\"let subgroup of data.groups\">\n                    <app-fieldset *ngIf=\"subgroup.fieldset\"\n                                  [classes]=\"'govuk-fieldset'\"\n                                  [group]=\"group\"\n                                  [data]=\"subgroup.fieldset\"\n                                  [validate]=\"validate\"\n                                  >\n                    </app-fieldset>\n                    <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"subgroup\"></app-jui-form-elements>\n                </ng-container>\n            </div>\n        </div>\n      </ng-container>\n  </div>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    RadiobuttonComponent.ctorParameters = function () { return []; };
    RadiobuttonComponent.propDecorators = {
        group: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        items: [{ type: Input }],
        classes: [{ type: Input }],
        control: [{ type: Input }],
        validate: [{ type: Input }],
        showValidation: [{ type: Input }],
        validationError: [{ type: Input }]
    };
    return RadiobuttonComponent;
}());
export { RadiobuttonComponent };
if (false) {
    /** @type {?} */
    RadiobuttonComponent.prototype.group;
    /** @type {?} */
    RadiobuttonComponent.prototype.idPrefix;
    /** @type {?} */
    RadiobuttonComponent.prototype.name;
    /** @type {?} */
    RadiobuttonComponent.prototype.items;
    /** @type {?} */
    RadiobuttonComponent.prototype.classes;
    /** @type {?} */
    RadiobuttonComponent.prototype.control;
    /** @type {?} */
    RadiobuttonComponent.prototype.validate;
    /** @type {?} */
    RadiobuttonComponent.prototype.showValidation;
    /** @type {?} */
    RadiobuttonComponent.prototype.validationError;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBcURyQzt3QkFUb0IsSUFBSTtvQkFDUixJQUFJO0tBUUg7O2dCQW5EcEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw0OURBb0NYO2lCQUNBOzs7Ozt3QkFFSSxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7K0JBcERWOztTQTJDYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmFkaW9idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtY29udHJvbCAqbmdJZj1cInNob3dWYWxpZGF0aW9uXCIgW2dyb3VwXT1cImdyb3VwXCIgW2NvbnRyb2xJZF09XCJjb250cm9sXCI+e3t2YWxpZGF0aW9uRXJyb3IudmFsdWV9fTwvYXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmRldmlkZXJcIiBjbGFzcz1cImdvdnVrLXJhZGlvc19fZGl2aWRlclwiPnt7ZGF0YS5kZXZpZGVyfX08L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWRhdGEuZGV2aWRlclwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLXJhZGlvc19faW5wdXRcIiBpZD1cInt7Y29udHJvbCArIGRhdGEudmFsdWV9fVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbFwiIHR5cGU9XCJyYWRpb1wiIFt2YWx1ZV09IFwiZGF0YS52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnb3Z1ay1sYWJlbCBnb3Z1ay1yYWRpb3NfX2xhYmVsXCIgZm9yPVwie3tjb250cm9sICsgZGF0YS52YWx1ZX19XCI+XHJcbiAgICAgICAgICAgICAgICB7e2RhdGEudGV4dH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx1bCAqbmdJZj1cImRhdGEubGlzdFwiIFtjbGFzc109XCInZ292dWstbGlzdCcgKyBkYXRhLmxpc3QuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhLmxpc3QudGV4dFwiPnt7IGl0ZW0gfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YXBwLWhpbnQgKm5nSWY9XCJkYXRhLmhpbnRcIiBbY2xhc3Nlc109XCJkYXRhLmhpbnQuY2xhc3Nlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tkYXRhLmhpbnQudGV4dH19XHJcbiAgICAgICAgICAgIDwvYXBwLWhpbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGEuZ3JvdXBzICYmIGdyb3VwLnZhbHVlW2NvbnRyb2xdPT09ZGF0YS52YWx1ZVwiIGNsYXNzPVwiZ292dWstcmFkaW9zX19jb25kaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViZ3JvdXAgb2YgZGF0YS5ncm91cHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWZpZWxkc2V0ICpuZ0lmPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cInN1Ymdyb3VwXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGlkUHJlZml4ID0gJ3JiJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAncmInO1xyXG4gICAgQElucHV0KCkgaXRlbXM7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgY29udHJvbDtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG4gICAgQElucHV0KCkgc2hvd1ZhbGlkYXRpb247XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0aW9uRXJyb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19