/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class HiddenInputComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.componentClasses = 'govuk-input' + this.item.classes;
    }
}
HiddenInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-hidden-input',
                template: `<ng-container
  [formGroup]="group">
    <input
           [ngClass]="componentClasses"
           [formControlName]="item.control"
           [id]="item.control"
           [name]="item.control"
           [value]="value"
           type="hidden">
</ng-container>
`
            },] },
];
/** @nocollapse */
HiddenInputComponent.ctorParameters = () => [];
HiddenInputComponent.propDecorators = {
    group: [{ type: Input }],
    item: [{ type: Input }],
    value: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZGVuLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hpZGRlbi1pbnB1dC9oaWRkZW4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFpQnpDLE1BQU07SUFRRjtLQUNDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDM0Q7OztZQTFCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBVVg7YUFDQTs7Ozs7b0JBRUksS0FBSzttQkFDTCxLQUFLO29CQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGlkZGVuLWlucHV0JyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXJcclxuICBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgICAgICBbbmdDbGFzc109XCJjb21wb25lbnRDbGFzc2VzXCJcclxuICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgICAgW2lkXT1cIml0ZW0uY29udHJvbFwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiaXRlbS5jb250cm9sXCJcclxuICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGRlbklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIEBJbnB1dCgpIGl0ZW06IHtcclxuICAgICAgY29udHJvbDogc3RyaW5nO1xyXG4gICAgICBjbGFzc2VzOiBBcnJheTxzdHJpbmc+XHJcbiAgICB9O1xyXG4gICAgQElucHV0KCkgdmFsdWU7XHJcbiAgICBjb21wb25lbnRDbGFzc2VzOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudENsYXNzZXMgPSAnZ292dWstaW5wdXQnICsgdGhpcy5pdGVtLmNsYXNzZXM7XHJcbiAgICB9XHJcbn1cclxuIl19