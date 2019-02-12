/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FieldsetComponent = /** @class */ (function () {
    function FieldsetComponent() {
    }
    FieldsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-fieldset',
                    template: "<fieldset [attr.validate]=\"validate\" [class]=\"classes\" [attr.data]=\"data\" [attr.group]=\"group\">\n    <ng-container *ngFor=\"let item of data\">\n        <app-jui-form-elements [validate]=\"validate\" [group]=\"group\" [data]=\"item\"></app-jui-form-elements>\n    </ng-container>\n    <ng-content></ng-content>\n</fieldset>\n"
                },] },
    ];
    FieldsetComponent.propDecorators = {
        classes: [{ type: Input }],
        validate: [{ type: Input }],
        group: [{ type: Input }],
        data: [{ type: Input }]
    };
    return FieldsetComponent;
}());
export { FieldsetComponent };
if (false) {
    /** @type {?} */
    FieldsetComponent.prototype.classes;
    /** @type {?} */
    FieldsetComponent.prototype.validate;
    /** @type {?} */
    FieldsetComponent.prototype.group;
    /** @type {?} */
    FieldsetComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Z0JBRTlDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLCtVQU1YO2lCQUNBOzs7MEJBRUksS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7NEJBaEJWOztTQVlhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1maWVsZHNldCcsXHJcbiAgdGVtcGxhdGU6IGA8ZmllbGRzZXQgW2F0dHIudmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFthdHRyLmRhdGFdPVwiZGF0YVwiIFthdHRyLmdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cclxuICAgICAgICA8YXBwLWp1aS1mb3JtLWVsZW1lbnRzIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFtncm91cF09XCJncm91cFwiIFtkYXRhXT1cIml0ZW1cIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2ZpZWxkc2V0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZHNldENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcbiAgICBASW5wdXQoKSBncm91cDtcclxuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT47XHJcbn1cclxuIl19