/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from '../../services/form-builder.service';
import { ValidationService } from '../../services/form-builder-validation.service';
/**
 * Form Builder Wrapper
 * Component accepts pageItems and pageValues for From Builder to process
 * and it emits form data to it's parent component.
 */
var FromBuilderComponent = /** @class */ (function () {
    function FromBuilderComponent(formsService, validationService) {
        this.formsService = formsService;
        this.validationService = validationService;
        this.submitPage = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FromBuilderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["pageItems"] && changes["pageItems"].currentValue) {
            this.createForm();
        }
    };
    /**
     * @return {?}
     */
    FromBuilderComponent.prototype.createForm = /**
     * @return {?}
     */
    function () {
        this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));
        this.setValidators();
    };
    /**
     * @return {?}
     */
    FromBuilderComponent.prototype.setValidators = /**
     * @return {?}
     */
    function () {
        if (this.pageItems) {
            /** @type {?} */
            var formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, this.pageItems.formGroupValidators);
            this.formDraft.setValidators(formGroupValidators);
        }
    };
    /**
     * @return {?}
     */
    FromBuilderComponent.prototype.onFormSubmit = /**
     * @return {?}
     */
    function () {
        this.submitPage.emit(this.formDraft);
    };
    FromBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-form-builder',
                    template: "<ng-container *ngIf=\"isPageValid && formDraft.invalid\">\n  <app-validation-header [validationHeaderErrorMessages]=\"this.pageItems.validationHeaderErrorMessages\" [formGroup]=\"formDraft\">\n  </app-validation-header>\n</ng-container>\n\n<form *ngIf=\"pageItems\" [formGroup]=\"formDraft\" (ngSubmit)=\"onFormSubmit()\">\n  <div [ngClass]=\"{'govuk-form-group':true, 'govuk-form-group--error' : isPageValid && formDraft.invalid }\">\n    <h1 class=\"govuk-heading-xl\">\n      <span *ngIf=\"pageItems.caption\" [class]=\"pageItems.caption.classes\">{{ pageItems.caption.text }}</span>\n      {{pageItems.header}}\n    </h1>\n    <div class=\"govuk-form-group\" *ngFor=\"let group of pageItems.groups\">\n      <app-fieldset *ngIf=\"group.fieldset\"\n                    [classes]=\"'govuk-fieldset'\"\n                    [group]=\"formDraft\"\n                    [data]=\"group.fieldset\"\n                    [validate]=\"isPageValid\">\n      </app-fieldset>\n      <app-jui-form-elements [group]=\"formDraft\" [validate]=\"isPageValid\" [data]=\"group\"></app-jui-form-elements>\n    </div>\n  </div>\n</form>\n"
                },] },
    ];
    /** @nocollapse */
    FromBuilderComponent.ctorParameters = function () { return [
        { type: FormsService },
        { type: ValidationService }
    ]; };
    FromBuilderComponent.propDecorators = {
        pageItems: [{ type: Input }],
        pageValues: [{ type: Input }],
        isPageValid: [{ type: Input }],
        submitPage: [{ type: Output }]
    };
    return FromBuilderComponent;
}());
export { FromBuilderComponent };
if (false) {
    /** @type {?} */
    FromBuilderComponent.prototype.pageItems;
    /** @type {?} */
    FromBuilderComponent.prototype.pageValues;
    /** @type {?} */
    FromBuilderComponent.prototype.isPageValid;
    /** @type {?} */
    FromBuilderComponent.prototype.submitPage;
    /** @type {?} */
    FromBuilderComponent.prototype.formDraft;
    /** @type {?} */
    FromBuilderComponent.prototype.formsService;
    /** @type {?} */
    FromBuilderComponent.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Zvcm0tYnVpbGRlci9mcm9tLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7OztJQXFDL0UsOEJBQ1UsY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUI7MEJBS0osSUFBSSxZQUFZLEVBQWE7S0FMRjs7Ozs7SUFTbEQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8saUJBQWMsT0FBTyxjQUFXLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFDbkIsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNuRDtLQUNGOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3RDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnbUNBc0JYO2lCQUNBOzs7O2dCQWxDTyxZQUFZO2dCQUNaLGlCQUFpQjs7OzRCQXlDdEIsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7K0JBL0NUOztTQXNDYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGb3Jtc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm0tYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG4vKipcclxuICogRm9ybSBCdWlsZGVyIFdyYXBwZXJcclxuICogQ29tcG9uZW50IGFjY2VwdHMgcGFnZUl0ZW1zIGFuZCBwYWdlVmFsdWVzIGZvciBGcm9tIEJ1aWxkZXIgdG8gcHJvY2Vzc1xyXG4gKiBhbmQgaXQgZW1pdHMgZm9ybSBkYXRhIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudC5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWJ1aWxkZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkXCI+XHJcbiAgPGFwcC12YWxpZGF0aW9uLWhlYWRlciBbdmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNdPVwidGhpcy5wYWdlSXRlbXMudmFsaWRhdGlvbkhlYWRlckVycm9yTWVzc2FnZXNcIiBbZm9ybUdyb3VwXT1cImZvcm1EcmFmdFwiPlxyXG4gIDwvYXBwLXZhbGlkYXRpb24taGVhZGVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxmb3JtICpuZ0lmPVwicGFnZUl0ZW1zXCIgW2Zvcm1Hcm91cF09XCJmb3JtRHJhZnRcIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIj5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cInsnZ292dWstZm9ybS1ncm91cCc6dHJ1ZSwgJ2dvdnVrLWZvcm0tZ3JvdXAtLWVycm9yJyA6IGlzUGFnZVZhbGlkICYmIGZvcm1EcmFmdC5pbnZhbGlkIH1cIj5cclxuICAgIDxoMSBjbGFzcz1cImdvdnVrLWhlYWRpbmcteGxcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJwYWdlSXRlbXMuY2FwdGlvblwiIFtjbGFzc109XCJwYWdlSXRlbXMuY2FwdGlvbi5jbGFzc2VzXCI+e3sgcGFnZUl0ZW1zLmNhcHRpb24udGV4dCB9fTwvc3Bhbj5cclxuICAgICAge3twYWdlSXRlbXMuaGVhZGVyfX1cclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiICpuZ0Zvcj1cImxldCBncm91cCBvZiBwYWdlSXRlbXMuZ3JvdXBzXCI+XHJcbiAgICAgIDxhcHAtZmllbGRzZXQgKm5nSWY9XCJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImZvcm1EcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJpc1BhZ2VWYWxpZFwiPlxyXG4gICAgICA8L2FwcC1maWVsZHNldD5cclxuICAgICAgPGFwcC1qdWktZm9ybS1lbGVtZW50cyBbZ3JvdXBdPVwiZm9ybURyYWZ0XCIgW3ZhbGlkYXRlXT1cImlzUGFnZVZhbGlkXCIgW2RhdGFdPVwiZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9tQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3Jtc1NlcnZpY2U6IEZvcm1zU2VydmljZSxcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBASW5wdXQoKSBwYWdlSXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBwYWdlVmFsdWVzOiBhbnk7XHJcbiAgQElucHV0KCkgaXNQYWdlVmFsaWQ6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHN1Ym1pdFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHJcbiAgZm9ybURyYWZ0OiBGb3JtR3JvdXA7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnBhZ2VJdGVtcyAmJiBjaGFuZ2VzLnBhZ2VJdGVtcy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtRHJhZnQgPSBuZXcgRm9ybUdyb3VwKHRoaXMuZm9ybXNTZXJ2aWNlLmRlZmluZWZvcm1Db250cm9scyh0aGlzLnBhZ2VJdGVtcywgdGhpcy5wYWdlVmFsdWVzKSk7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIHNldFZhbGlkYXRvcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYWdlSXRlbXMpIHtcclxuICAgICAgY29uc3QgZm9ybUdyb3VwVmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UuY3JlYXRlRm9ybUdyb3VwVmFsaWRhdG9ycyh0aGlzLmZvcm1EcmFmdCwgdGhpcy5wYWdlSXRlbXMuZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICAgIHRoaXMuZm9ybURyYWZ0LnNldFZhbGlkYXRvcnMoZm9ybUdyb3VwVmFsaWRhdG9ycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvcm1TdWJtaXQoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdFBhZ2UuZW1pdCh0aGlzLmZvcm1EcmFmdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==