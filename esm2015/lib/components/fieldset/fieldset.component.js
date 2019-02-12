/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FieldsetComponent {
}
FieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-fieldset',
                template: `<fieldset [attr.validate]="validate" [class]="classes" [attr.data]="data" [attr.group]="group">
    <ng-container *ngFor="let item of data">
        <app-jui-form-elements [validate]="validate" [group]="group" [data]="item"></app-jui-form-elements>
    </ng-container>
    <ng-content></ng-content>
</fieldset>
`
            },] },
];
FieldsetComponent.propDecorators = {
    classes: [{ type: Input }],
    validate: [{ type: Input }],
    group: [{ type: Input }],
    data: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGRzZXQvZmllbGRzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVkvQyxNQUFNOzs7WUFWTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7O0NBTVg7YUFDQTs7O3NCQUVJLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZmllbGRzZXQnLFxyXG4gIHRlbXBsYXRlOiBgPGZpZWxkc2V0IFthdHRyLnZhbGlkYXRlXT1cInZhbGlkYXRlXCIgW2NsYXNzXT1cImNsYXNzZXNcIiBbYXR0ci5kYXRhXT1cImRhdGFcIiBbYXR0ci5ncm91cF09XCJncm91cFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCI+XHJcbiAgICAgICAgPGFwcC1qdWktZm9ybS1lbGVtZW50cyBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZGF0YV09XCJpdGVtXCI+PC9hcHAtanVpLWZvcm0tZWxlbWVudHM+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9maWVsZHNldD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRzZXRDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgY2xhc3NlcztcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRlO1xyXG4gICAgQElucHV0KCkgZ3JvdXA7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+O1xyXG59XHJcbiJdfQ==