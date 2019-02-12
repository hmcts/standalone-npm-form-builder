/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.idPrefix = 'btn';
        this.name = 'btn';
    }
    /**
     * @return {?}
     */
    ButtonsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isValid = this.group.status === 'INVALID';
        this.group.valueChanges.subscribe(function (value) {
            _this.isValid = _this.group.status === 'INVALID';
        });
    };
    ButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-buttons',
                    template: "<ng-container *ngIf=\"group\" [formGroup]=\"group\">\n    <input id=\"{{control + value}}\" [class]=\"classes\" [type]=\"typeBtn\" [formControlName]=\"control\" [value]=\"value\">\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    ButtonsComponent.ctorParameters = function () { return []; };
    ButtonsComponent.propDecorators = {
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        group: [{ type: Input }],
        classes: [{ type: Input }],
        typeBtn: [{ type: Input }],
        control: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ButtonsComponent;
}());
export { ButtonsComponent };
if (false) {
    /** @type {?} */
    ButtonsComponent.prototype.idPrefix;
    /** @type {?} */
    ButtonsComponent.prototype.name;
    /** @type {?} */
    ButtonsComponent.prototype.group;
    /** @type {?} */
    ButtonsComponent.prototype.classes;
    /** @type {?} */
    ButtonsComponent.prototype.typeBtn;
    /** @type {?} */
    ButtonsComponent.prototype.control;
    /** @type {?} */
    ButtonsComponent.prototype.value;
    /** @type {?} */
    ButtonsComponent.prototype.isValid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBa0JyQzt3QkFSb0IsS0FBSztvQkFDVCxLQUFLO0tBUXBCOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFMQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1NBQ2hELENBQUMsQ0FBQztLQUVKOztnQkExQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsd01BR1g7aUJBQ0E7Ozs7OzJCQUVJLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7OzJCQWpCVjs7U0FVYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1idXR0b25zJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJncm91cFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxpbnB1dCBpZD1cInt7Y29udHJvbCArIHZhbHVlfX1cIiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFt0eXBlXT1cInR5cGVCdG5cIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xcIiBbdmFsdWVdPVwidmFsdWVcIj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXggPSAnYnRuJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAnYnRuJztcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdHlwZUJ0bjtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZ3JvdXAuc3RhdHVzID09PSAnSU5WQUxJRCc7XHJcbiAgICAgIHRoaXMuZ3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5ncm91cC5zdGF0dXMgPT09ICdJTlZBTElEJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==