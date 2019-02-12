/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var HiddenInputComponent = /** @class */ (function () {
    function HiddenInputComponent() {
    }
    /**
     * @return {?}
     */
    HiddenInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.componentClasses = 'govuk-input' + this.item.classes;
    };
    HiddenInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-hidden-input',
                    template: "<ng-container\n  [formGroup]=\"group\">\n    <input\n           [ngClass]=\"componentClasses\"\n           [formControlName]=\"item.control\"\n           [id]=\"item.control\"\n           [name]=\"item.control\"\n           [value]=\"value\"\n           type=\"hidden\">\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    HiddenInputComponent.ctorParameters = function () { return []; };
    HiddenInputComponent.propDecorators = {
        group: [{ type: Input }],
        item: [{ type: Input }],
        value: [{ type: Input }]
    };
    return HiddenInputComponent;
}());
export { HiddenInputComponent };
if (false) {
    /** @type {?} */
    HiddenInputComponent.prototype.group;
    /** @type {?} */
    HiddenInputComponent.prototype.item;
    /** @type {?} */
    HiddenInputComponent.prototype.value;
    /** @type {?} */
    HiddenInputComponent.prototype.componentClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZGVuLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hpZGRlbi1pbnB1dC9oaWRkZW4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBeUJyQztLQUNDOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUMzRDs7Z0JBMUJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsbVNBVVg7aUJBQ0E7Ozs7O3dCQUVJLEtBQUs7dUJBQ0wsS0FBSzt3QkFJTCxLQUFLOzsrQkF4QlY7O1NBa0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oaWRkZW4taW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lclxyXG4gIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbXBvbmVudENsYXNzZXNcIlxyXG4gICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbaWRdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbbmFtZV09XCJpdGVtLmNvbnRyb2xcIlxyXG4gICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgdHlwZT1cImhpZGRlblwiPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZGVuSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaXRlbToge1xyXG4gICAgICBjb250cm9sOiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM6IEFycmF5PHN0cmluZz5cclxuICAgIH07XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuICAgIGNvbXBvbmVudENsYXNzZXM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50Q2xhc3NlcyA9ICdnb3Z1ay1pbnB1dCcgKyB0aGlzLml0ZW0uY2xhc3NlcztcclxuICAgIH1cclxufVxyXG4iXX0=