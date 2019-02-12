/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class ButtonsComponent {
    constructor() {
        this.idPrefix = 'btn';
        this.name = 'btn';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isValid = this.group.status === 'INVALID';
        this.group.valueChanges.subscribe(value => {
            this.isValid = this.group.status === 'INVALID';
        });
    }
}
ButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-buttons',
                template: `<ng-container *ngIf="group" [formGroup]="group">
    <input id="{{control + value}}" [class]="classes" [type]="typeBtn" [formControlName]="control" [value]="value">
</ng-container>
`
            },] },
];
/** @nocollapse */
ButtonsComponent.ctorParameters = () => [];
ButtonsComponent.propDecorators = {
    idPrefix: [{ type: Input }],
    name: [{ type: Input }],
    group: [{ type: Input }],
    classes: [{ type: Input }],
    typeBtn: [{ type: Input }],
    control: [{ type: Input }],
    value: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFTekMsTUFBTTtJQVNGO3dCQVJvQixLQUFLO29CQUNULEtBQUs7S0FRcEI7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1NBQ2hELENBQUMsQ0FBQztLQUVKOzs7WUExQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7OztDQUdYO2FBQ0E7Ozs7O3VCQUVJLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1idXR0b25zJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJncm91cFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxpbnB1dCBpZD1cInt7Y29udHJvbCArIHZhbHVlfX1cIiBbY2xhc3NdPVwiY2xhc3Nlc1wiIFt0eXBlXT1cInR5cGVCdG5cIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xcIiBbdmFsdWVdPVwidmFsdWVcIj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXggPSAnYnRuJztcclxuICAgIEBJbnB1dCgpIG5hbWUgPSAnYnRuJztcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdHlwZUJ0bjtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZ3JvdXAuc3RhdHVzID09PSAnSU5WQUxJRCc7XHJcbiAgICAgIHRoaXMuZ3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5ncm91cC5zdGF0dXMgPT09ICdJTlZBTElEJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==