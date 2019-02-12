/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class RadiobuttonComponent {
    constructor() {
        this.idPrefix = 'rb';
        this.name = 'rb';
    }
}
RadiobuttonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-radiobutton',
                template: `<ng-container>
  <ng-container *ngIf="validationError">
      <app-validation-error-formcontrol *ngIf="showValidation" [group]="group" [controlId]="control">{{validationError.value}}</app-validation-error-formcontrol>
  </ng-container>
  <div [class]="classes" [formGroup]="group">
      <ng-container *ngFor="let data of items; let i = index">
        <div *ngIf="data.devider" class="govuk-radios__divider">{{data.devider}}</div>
        <div *ngIf="!data.devider" class="govuk-radios__item">
            <input class="govuk-radios__input" id="{{control + data.value}}" [formControlName]="control" type="radio" [value]= "data.value">
            <label class="govuk-label govuk-radios__label" for="{{control + data.value}}">
                {{data.text}}
            </label>
            <ul *ngIf="data.list" [class]="'govuk-list' + data.list.classes">
              <li *ngFor="let item of data.list.text">{{ item }}</li>
            </ul>
            <app-hint *ngIf="data.hint" [classes]="data.hint.classes">
                {{data.hint.text}}
            </app-hint>
        </div>
        <div class="govuk-form-group">
            <div *ngIf="data.groups && group.value[control]===data.value" class="govuk-radios__conditional">
                <ng-container *ngFor="let subgroup of data.groups">
                    <app-fieldset *ngIf="subgroup.fieldset"
                                  [classes]="'govuk-fieldset'"
                                  [group]="group"
                                  [data]="subgroup.fieldset"
                                  [validate]="validate"
                                  >
                    </app-fieldset>
                    <app-jui-form-elements [validate]="validate" [group]="group" [data]="subgroup"></app-jui-form-elements>
                </ng-container>
            </div>
        </div>
      </ng-container>
  </div>
</ng-container>
`
            },] },
];
/** @nocollapse */
RadiobuttonComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUEwQ3pDLE1BQU07SUFXRjt3QkFUb0IsSUFBSTtvQkFDUixJQUFJO0tBUUg7OztZQW5EcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NYO2FBQ0E7Ozs7O29CQUVJLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJhZGlvYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbGlkYXRpb25FcnJvclwiPlxyXG4gICAgICA8YXBwLXZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wgKm5nSWY9XCJzaG93VmFsaWRhdGlvblwiIFtncm91cF09XCJncm91cFwiIFtjb250cm9sSWRdPVwiY29udHJvbFwiPnt7dmFsaWRhdGlvbkVycm9yLnZhbHVlfX08L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgW2NsYXNzXT1cImNsYXNzZXNcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2YgaXRlbXM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5kZXZpZGVyXCIgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2RpdmlkZXJcIj57e2RhdGEuZGV2aWRlcn19PC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIiFkYXRhLmRldmlkZXJcIiBjbGFzcz1cImdvdnVrLXJhZGlvc19faXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJnb3Z1ay1yYWRpb3NfX2lucHV0XCIgaWQ9XCJ7e2NvbnRyb2wgKyBkYXRhLnZhbHVlfX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xcIiB0eXBlPVwicmFkaW9cIiBbdmFsdWVdPSBcImRhdGEudmFsdWVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZ292dWstbGFiZWwgZ292dWstcmFkaW9zX19sYWJlbFwiIGZvcj1cInt7Y29udHJvbCArIGRhdGEudmFsdWV9fVwiPlxyXG4gICAgICAgICAgICAgICAge3tkYXRhLnRleHR9fVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dWwgKm5nSWY9XCJkYXRhLmxpc3RcIiBbY2xhc3NdPVwiJ2dvdnVrLWxpc3QnICsgZGF0YS5saXN0LmNsYXNzZXNcIj5cclxuICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YS5saXN0LnRleHRcIj57eyBpdGVtIH19PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGFwcC1oaW50ICpuZ0lmPVwiZGF0YS5oaW50XCIgW2NsYXNzZXNdPVwiZGF0YS5oaW50LmNsYXNzZXNcIj5cclxuICAgICAgICAgICAgICAgIHt7ZGF0YS5oaW50LnRleHR9fVxyXG4gICAgICAgICAgICA8L2FwcC1oaW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmdyb3VwcyAmJiBncm91cC52YWx1ZVtjb250cm9sXT09PWRhdGEudmFsdWVcIiBjbGFzcz1cImdvdnVrLXJhZGlvc19fY29uZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Ymdyb3VwIG9mIGRhdGEuZ3JvdXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1maWVsZHNldCAqbmdJZj1cInN1Ymdyb3VwLmZpZWxkc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1maWVsZHNldCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cInN1Ymdyb3VwLmZpZWxkc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcHAtZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1qdWktZm9ybS1lbGVtZW50cyBbdmFsaWRhdGVdPVwidmFsaWRhdGVcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZGF0YV09XCJzdWJncm91cFwiPjwvYXBwLWp1aS1mb3JtLWVsZW1lbnRzPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvYnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBpZFByZWZpeCA9ICdyYic7XHJcbiAgICBASW5wdXQoKSBuYW1lID0gJ3JiJztcclxuICAgIEBJbnB1dCgpIGl0ZW1zO1xyXG4gICAgQElucHV0KCkgY2xhc3NlcztcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgICBASW5wdXQoKSB2YWxpZGF0ZTtcclxuICAgIEBJbnB1dCgpIHNob3dWYWxpZGF0aW9uO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGlvbkVycm9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==