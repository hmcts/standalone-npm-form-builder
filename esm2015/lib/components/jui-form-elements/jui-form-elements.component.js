/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class JuiFormElementsComponent {
}
JuiFormElementsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-jui-form-elements',
                template: `<div [attr.validate]="validate" [attr.data]="data" [attr.group]="group">
  <!--JUI FORM builder component -->
  <app-legend *ngIf="data.legend" [classes]="data.legend.classes">
    {{data.legend.text}}
  </app-legend>
  <app-hint *ngIf="data.hint" [classes]="data.hint.classes">
    {{data.hint.text}}
  </app-hint>
  <ng-container *ngIf="data.validationError && validate">
    <app-validation-error-formgroup [group]="group" [validationErrorId]="data.validationError.identifier">
      {{data.validationError.value}}
    </app-validation-error-formgroup>
  </ng-container>
  <app-date *ngIf="data.date"
            [id]="data.date.formName"
            [data]="data.date"
            [group]="group"
            [validate]="validate"
            [validationError]="data.date.validationError">
  </app-date>
  <app-inputs *ngIf="data.input"
              [item]="data.input"
              [showValidation]="validate"
              [validationError]="data.input.validationError"
              [group]="group"
              [hint]="data.input.hint"
              [label]="data.input.label"
              [labelFor]="data.input.control"></app-inputs>
  <app-radiobutton *ngIf="data.radios" [classes]="'govuk-radios ' + data.radios.classes"
                   [items]="data.radios.radioGroup"
                   [group]="group"
                   [control]="data.radios.control"
                   [idPrefix]="data.radios.control"
                   [validate]="validate"
                   [showValidation]="validate"
                   [validationError]="data.radios.validationError">
  </app-radiobutton>
  <div *ngIf="data.checkbox" class="govuk-checkboxes">
    <app-checkbox [group]="group"
                  [validate]="validate"
                  [idPrefix]="data.checkbox.control"
                  [items]="data.checkbox"
                  [classes]="'govuk-checkboxes__item'"
                  [labelClasses]="'govuk-label govuk-checkboxes__label'">
      <div class="govuk-form-group">
        <div *ngIf="data.checkbox.groups && group.controls[data.checkbox.control].value" class="govuk-checkboxes__conditional"
             [ngStyle] = "{ 'border-left': (validate && group.invalid) ? '5px solid #b10e1e' : '' }">
          <ng-container  *ngFor="let subgroup of data.checkbox.groups">
            <app-fieldset *ngIf="subgroup.fieldset"
                          [validate]="validate"
                          [classes]="'govuk-fieldset'"
                          [group]="group"
                          [data]="subgroup.fieldset"
            >
            </app-fieldset>
            <app-jui-form-elements [validate]="validate" [group]="group" [data]="subgroup"></app-jui-form-elements>
          </ng-container>
        </div>
      </div>
    </app-checkbox>
  </div>

  <app-textareas *ngIf="data.textarea" [classes]="'govuk-textarea'"
                 [showValidation]="validate"
                 [validationError]="data.textarea.validationError"
                 [group]="group"
                 [control]="data.textarea.control"
                 [label]="data.textarea.label"
                 [labelFor]="data.textarea.control"
                 [rows]="5">
  </app-textareas>
  <app-buttons *ngIf="data.button"
               [classes]="'govuk-button'"
               [typeBtn]="data.button.type"
               [group]="group"
               [control]="data.button.control"
               [value]="data.button.value">
  </app-buttons>
  <!--JUI FORM builder component -->
</div>
`
            },] },
];
JuiFormElementsComponent.propDecorators = {
    group: [{ type: Input }],
    data: [{ type: Input }],
    validate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    JuiFormElementsComponent.prototype.group;
    /** @type {?} */
    JuiFormElementsComponent.prototype.data;
    /** @type {?} */
    JuiFormElementsComponent.prototype.validate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXhhbXBsZS1ucG0tbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvanVpLWZvcm0tZWxlbWVudHMvanVpLWZvcm0tZWxlbWVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFzRnpDLE1BQU07OztZQXBGTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdGWDthQUNBOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtanVpLWZvcm0tZWxlbWVudHMnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbYXR0ci52YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiIFthdHRyLmRhdGFdPVwiZGF0YVwiIFthdHRyLmdyb3VwXT1cImdyb3VwXCI+XHJcbiAgPCEtLUpVSSBGT1JNIGJ1aWxkZXIgY29tcG9uZW50IC0tPlxyXG4gIDxhcHAtbGVnZW5kICpuZ0lmPVwiZGF0YS5sZWdlbmRcIiBbY2xhc3Nlc109XCJkYXRhLmxlZ2VuZC5jbGFzc2VzXCI+XHJcbiAgICB7e2RhdGEubGVnZW5kLnRleHR9fVxyXG4gIDwvYXBwLWxlZ2VuZD5cclxuICA8YXBwLWhpbnQgKm5nSWY9XCJkYXRhLmhpbnRcIiBbY2xhc3Nlc109XCJkYXRhLmhpbnQuY2xhc3Nlc1wiPlxyXG4gICAge3tkYXRhLmhpbnQudGV4dH19XHJcbiAgPC9hcHAtaGludD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS52YWxpZGF0aW9uRXJyb3IgJiYgdmFsaWRhdGVcIj5cclxuICAgIDxhcHAtdmFsaWRhdGlvbi1lcnJvci1mb3JtZ3JvdXAgW2dyb3VwXT1cImdyb3VwXCIgW3ZhbGlkYXRpb25FcnJvcklkXT1cImRhdGEudmFsaWRhdGlvbkVycm9yLmlkZW50aWZpZXJcIj5cclxuICAgICAge3tkYXRhLnZhbGlkYXRpb25FcnJvci52YWx1ZX19XHJcbiAgICA8L2FwcC12YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8YXBwLWRhdGUgKm5nSWY9XCJkYXRhLmRhdGVcIlxyXG4gICAgICAgICAgICBbaWRdPVwiZGF0YS5kYXRlLmZvcm1OYW1lXCJcclxuICAgICAgICAgICAgW2RhdGFdPVwiZGF0YS5kYXRlXCJcclxuICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLmRhdGUudmFsaWRhdGlvbkVycm9yXCI+XHJcbiAgPC9hcHAtZGF0ZT5cclxuICA8YXBwLWlucHV0cyAqbmdJZj1cImRhdGEuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtpdGVtXT1cImRhdGEuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3ZhbGlkYXRpb25FcnJvcl09XCJkYXRhLmlucHV0LnZhbGlkYXRpb25FcnJvclwiXHJcbiAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICBbaGludF09XCJkYXRhLmlucHV0LmhpbnRcIlxyXG4gICAgICAgICAgICAgIFtsYWJlbF09XCJkYXRhLmlucHV0LmxhYmVsXCJcclxuICAgICAgICAgICAgICBbbGFiZWxGb3JdPVwiZGF0YS5pbnB1dC5jb250cm9sXCI+PC9hcHAtaW5wdXRzPlxyXG4gIDxhcHAtcmFkaW9idXR0b24gKm5nSWY9XCJkYXRhLnJhZGlvc1wiIFtjbGFzc2VzXT1cIidnb3Z1ay1yYWRpb3MgJyArIGRhdGEucmFkaW9zLmNsYXNzZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cImRhdGEucmFkaW9zLnJhZGlvR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEucmFkaW9zLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgW2lkUHJlZml4XT1cImRhdGEucmFkaW9zLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtzaG93VmFsaWRhdGlvbl09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbdmFsaWRhdGlvbkVycm9yXT1cImRhdGEucmFkaW9zLnZhbGlkYXRpb25FcnJvclwiPlxyXG4gIDwvYXBwLXJhZGlvYnV0dG9uPlxyXG4gIDxkaXYgKm5nSWY9XCJkYXRhLmNoZWNrYm94XCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzXCI+XHJcbiAgICA8YXBwLWNoZWNrYm94IFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtpZFByZWZpeF09XCJkYXRhLmNoZWNrYm94LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBbaXRlbXNdPVwiZGF0YS5jaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1jaGVja2JveGVzX19pdGVtJ1wiXHJcbiAgICAgICAgICAgICAgICAgIFtsYWJlbENsYXNzZXNdPVwiJ2dvdnVrLWxhYmVsIGdvdnVrLWNoZWNrYm94ZXNfX2xhYmVsJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ292dWstZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhLmNoZWNrYm94Lmdyb3VwcyAmJiBncm91cC5jb250cm9sc1tkYXRhLmNoZWNrYm94LmNvbnRyb2xdLnZhbHVlXCIgY2xhc3M9XCJnb3Z1ay1jaGVja2JveGVzX19jb25kaXRpb25hbFwiXHJcbiAgICAgICAgICAgICBbbmdTdHlsZV0gPSBcInsgJ2JvcmRlci1sZWZ0JzogKHZhbGlkYXRlICYmIGdyb3VwLmludmFsaWQpID8gJzVweCBzb2xpZCAjYjEwZTFlJyA6ICcnIH1cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBzdWJncm91cCBvZiBkYXRhLmNoZWNrYm94Lmdyb3Vwc1wiPlxyXG4gICAgICAgICAgICA8YXBwLWZpZWxkc2V0ICpuZ0lmPVwic3ViZ3JvdXAuZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0ZV09XCJ2YWxpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ2dvdnVrLWZpZWxkc2V0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwXT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJzdWJncm91cC5maWVsZHNldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9hcHAtZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxhcHAtanVpLWZvcm0tZWxlbWVudHMgW3ZhbGlkYXRlXT1cInZhbGlkYXRlXCIgW2dyb3VwXT1cImdyb3VwXCIgW2RhdGFdPVwic3ViZ3JvdXBcIj48L2FwcC1qdWktZm9ybS1lbGVtZW50cz5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXBwLWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8YXBwLXRleHRhcmVhcyAqbmdJZj1cImRhdGEudGV4dGFyZWFcIiBbY2xhc3Nlc109XCInZ292dWstdGV4dGFyZWEnXCJcclxuICAgICAgICAgICAgICAgICBbc2hvd1ZhbGlkYXRpb25dPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgIFt2YWxpZGF0aW9uRXJyb3JdPVwiZGF0YS50ZXh0YXJlYS52YWxpZGF0aW9uRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiZGF0YS50ZXh0YXJlYS5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZGF0YS50ZXh0YXJlYS5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgW2xhYmVsRm9yXT1cImRhdGEudGV4dGFyZWEuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgW3Jvd3NdPVwiNVwiPlxyXG4gIDwvYXBwLXRleHRhcmVhcz5cclxuICA8YXBwLWJ1dHRvbnMgKm5nSWY9XCJkYXRhLmJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzc2VzXT1cIidnb3Z1ay1idXR0b24nXCJcclxuICAgICAgICAgICAgICAgW3R5cGVCdG5dPVwiZGF0YS5idXR0b24udHlwZVwiXHJcbiAgICAgICAgICAgICAgIFtncm91cF09XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgIFtjb250cm9sXT1cImRhdGEuYnV0dG9uLmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICBbdmFsdWVdPVwiZGF0YS5idXR0b24udmFsdWVcIj5cclxuICA8L2FwcC1idXR0b25zPlxyXG4gIDwhLS1KVUkgRk9STSBidWlsZGVyIGNvbXBvbmVudCAtLT5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEp1aUZvcm1FbGVtZW50c0NvbXBvbmVudHtcclxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIGRhdGE7XHJcbiAgQElucHV0KCkgdmFsaWRhdGU7XHJcbn1cclxuIl19