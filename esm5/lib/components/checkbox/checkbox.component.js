/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-checkbox',
                    template: "<ng-container>\n    <div  *ngIf=\"group\" class=\"govuk-checkboxes__item\" [formGroup]=\"group\">\n        <input class=\"govuk-checkboxes__input\" [formControlName]=\"items.control\" id=\"{{items.control}}\" type=\"checkbox\" [value]=\"items.value\">\n        <app-label [class]=\"labelClasses\" [forElement]=\"items.control\">{{items.text}}</app-label>\n    </div>\n    <ng-content></ng-content>\n</ng-container>\n"
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        group: [{ type: Input }],
        idPrefix: [{ type: Input }],
        name: [{ type: Input }],
        items: [{ type: Input }],
        classes: [{ type: Input }],
        labelClasses: [{ type: Input }],
        validate: [{ type: Input }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.group;
    /** @type {?} */
    CheckboxComponent.prototype.idPrefix;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.items;
    /** @type {?} */
    CheckboxComponent.prototype.classes;
    /** @type {?} */
    CheckboxComponent.prototype.labelClasses;
    /** @type {?} */
    CheckboxComponent.prototype.validate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0lBc0JyQztLQUNDOztnQkFyQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsa2FBT2I7aUJBQ0E7Ozs7O3dCQUVJLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7OzRCQXJCVjs7U0FjYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXI+XHJcbiAgICA8ZGl2ICAqbmdJZj1cImdyb3VwXCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19pdGVtXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImdvdnVrLWNoZWNrYm94ZXNfX2lucHV0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtcy5jb250cm9sXCIgaWQ9XCJ7e2l0ZW1zLmNvbnRyb2x9fVwiIHR5cGU9XCJjaGVja2JveFwiIFt2YWx1ZV09XCJpdGVtcy52YWx1ZVwiPlxyXG4gICAgICAgIDxhcHAtbGFiZWwgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiIFtmb3JFbGVtZW50XT1cIml0ZW1zLmNvbnRyb2xcIj57e2l0ZW1zLnRleHR9fTwvYXBwLWxhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgaWRQcmVmaXg7XHJcbiAgICBASW5wdXQoKSBuYW1lO1xyXG4gICAgQElucHV0KCkgaXRlbXM7XHJcbiAgICBASW5wdXQoKSBjbGFzc2VzO1xyXG4gICAgQElucHV0KCkgbGFiZWxDbGFzc2VzO1xyXG4gICAgQElucHV0KCkgdmFsaWRhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==