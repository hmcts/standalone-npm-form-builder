/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HmctsFormBuilderComponent } from './hmcts-form-builder.component';
import { FromBuilderComponent } from './components/form-builder/from-builder.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { JuiFormElementsComponent } from './components/jui-form-elements/jui-form-elements.component';
import { LegendComponent } from './components/legend/legend.component';
import { HintComponent } from './components/hint/hint.component';
import { DateComponent } from './components/date/date.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextareasComponent } from './components/textareas/textareas.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LabelComponent } from './components/label/label.component';
import { HiddenInputComponent } from './components/hidden-input/hidden-input.component';
import { ValidationHeaderComponent } from './components/validation-header/validation-header.component';
import { ValidationErrorFormControlComponent } from './components/validation-error-formcontrol/validation-error-formcontrol.component';
import { ValidationErrorFormGroupComponent } from './components/validation-error-formgroup/validation-error-formgroup.component';
import { FormsService } from './services/form-builder.service';
import { ValidationService } from './services/form-builder-validation.service';
import { RouterModule } from '@angular/router';
/** @type {?} */
var COMPONENTS = [
    FromBuilderComponent,
    FieldsetComponent,
    ValidationErrorFormGroupComponent,
    FromBuilderComponent,
    FieldsetComponent,
    JuiFormElementsComponent,
    LegendComponent,
    HintComponent,
    DateComponent,
    InputsComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareasComponent,
    ButtonsComponent,
    LabelComponent,
    HiddenInputComponent,
    ValidationHeaderComponent,
    ValidationErrorFormControlComponent,
    HmctsFormBuilderComponent
];
/** @type {?} */
var SERVICES = [
    FormsService,
    ValidationService,
    DatePipe
];
var HmctsFormBuilderModule = /** @class */ (function () {
    function HmctsFormBuilderModule() {
    }
    HmctsFormBuilderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        ReactiveFormsModule
                    ],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                    providers: tslib_1.__spread(SERVICES)
                },] },
    ];
    return HmctsFormBuilderModule;
}());
export { HmctsFormBuilderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1jdHMtZm9ybS1idWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbnBtLW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9obWN0cy1mb3JtLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyxtQ0FBbUMsRUFBQyxNQUFNLGtGQUFrRixDQUFDO0FBQ3JJLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDhFQUE4RSxDQUFDO0FBQy9ILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRzdDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLHlCQUF5QjtDQUMxQixDQUFDOztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixRQUFRO0NBQ1QsQ0FBQTs7Ozs7Z0JBRUEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksbUJBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLG1CQUFNLFVBQVUsQ0FBQztvQkFDeEIsU0FBUyxtQkFDSixRQUFRLENBQ1o7aUJBQ0Y7O2lDQWpFRDs7U0FrRWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0htY3RzRm9ybUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vaG1jdHMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RnJvbUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1aWxkZXIvZnJvbS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmllbGRzZXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHNldC9maWVsZHNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0p1aUZvcm1FbGVtZW50c0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2p1aS1mb3JtLWVsZW1lbnRzL2p1aS1mb3JtLWVsZW1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGVnZW5kQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hpbnRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5wdXRzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JhZGlvYnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDaGVja2JveENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGV4dGFyZWFzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWFzL3RleHRhcmVhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0J1dHRvbnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYWJlbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGlkZGVuSW5wdXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9oaWRkZW4taW5wdXQvaGlkZGVuLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRpb24taGVhZGVyL3ZhbGlkYXRpb24taGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkVycm9yRm9ybUNvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1jb250cm9sL3ZhbGlkYXRpb24tZXJyb3ItZm9ybWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JGb3JtR3JvdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC92YWxpZGF0aW9uLWVycm9yLWZvcm1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1zU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLWJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgRnJvbUJ1aWxkZXJDb21wb25lbnQsXHJcbiAgRmllbGRzZXRDb21wb25lbnQsXHJcbiAgVmFsaWRhdGlvbkVycm9yRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gIEZyb21CdWlsZGVyQ29tcG9uZW50LFxyXG4gIEZpZWxkc2V0Q29tcG9uZW50LFxyXG4gIEp1aUZvcm1FbGVtZW50c0NvbXBvbmVudCxcclxuICBMZWdlbmRDb21wb25lbnQsXHJcbiAgSGludENvbXBvbmVudCxcclxuICBEYXRlQ29tcG9uZW50LFxyXG4gIElucHV0c0NvbXBvbmVudCxcclxuICBSYWRpb2J1dHRvbkNvbXBvbmVudCxcclxuICBDaGVja2JveENvbXBvbmVudCxcclxuICBUZXh0YXJlYXNDb21wb25lbnQsXHJcbiAgQnV0dG9uc0NvbXBvbmVudCxcclxuICBMYWJlbENvbXBvbmVudCxcclxuICBIaWRkZW5JbnB1dENvbXBvbmVudCxcclxuICBWYWxpZGF0aW9uSGVhZGVyQ29tcG9uZW50LFxyXG4gIFZhbGlkYXRpb25FcnJvckZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gIEhtY3RzRm9ybUJ1aWxkZXJDb21wb25lbnRcclxuXTtcclxuXHJcbmNvbnN0IFNFUlZJQ0VTID0gW1xyXG4gIEZvcm1zU2VydmljZSxcclxuICBWYWxpZGF0aW9uU2VydmljZSxcclxuICBEYXRlUGlwZVxyXG5dXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uU0VSVklDRVNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIbWN0c0Zvcm1CdWlsZGVyTW9kdWxlIHtcclxufVxyXG4iXX0=