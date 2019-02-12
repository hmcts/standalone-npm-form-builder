/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './form-builder-validation.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-builder-validation.service";
export class FormsService {
    /**
     * @param {?} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
        this.FormControls = [];
    }
    /**
     * Creation of FormControls for a FormGroup.
     * So first thing is how do we add Validation to a FormControl
     *
     * prop can be a fieldset, legend, text, idPrefix, name, header, checkboxes, if we
     *
     * Here is where the validation is applied to each of the controls of the form, based on the validators that
     * have been plaed into the state_meta.js.
     *
     * TODO: Name this something totally different, as create doesn't really explain what it does,
     * also there it's quite hard to work out.
     *
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    create(someJson, someData) {
        if (typeof someJson === 'object') {
            for (const prop in someJson) {
                if (prop === 'control') {
                    if (someJson.radioGroup !== undefined) {
                        // RadioButton Logic
                        if (Object.keys(someData).length !== 0) {
                            for (const radioEl of someJson.radioGroup) {
                                if (radioEl.value === someData[someJson.control]) {
                                    this.FormControls[someJson.control] = new FormControl(radioEl.value);
                                    break;
                                }
                                else {
                                    this.createFormControl(null, someJson.control, someJson.validators);
                                }
                            }
                        }
                        else {
                            this.FormControls[someJson.control] = new FormControl();
                        }
                    }
                    else {
                        if (someData[someJson.control]) {
                            this.FormControls[someJson.control] = new FormControl(someData[someJson.control]);
                        }
                        else {
                            this.createFormControl(someJson.value, someJson.control, someJson.validators);
                        }
                    }
                }
                this.create(someJson[prop], someData);
            }
        }
        if (someJson !== undefined && someJson.isArray) {
            for (const item of someJson) {
                this.create(someJson[item], someData);
            }
        }
    }
    /**
     * Creates a new `FormControl` instance.
     * @param {?} initialValue - ie. text if it's a textarea.
     * @param {?} controlName - 'informationNeeded'
     * @param {?} validators
     * @return {?}
     */
    createFormControl(initialValue, controlName, validators) {
        if (this.validationService.controlHasValidation(validators)) {
            this.FormControls[controlName] = new FormControl(initialValue, this.validationService.getNgValidators(validators));
            return;
        }
        this.FormControls[controlName] = new FormControl(initialValue);
    }
    /**
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    defineformControls(someJson, someData) {
        this.FormControls = [];
        this.create(someJson, someData);
        return this.FormControls;
    }
}
FormsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
FormsService.ctorParameters = () => [
    { type: ValidationService }
];
/** @nocollapse */ FormsService.ngInjectableDef = i0.defineInjectable({ factory: function FormsService_Factory() { return new FormsService(i0.inject(i1.ValidationService)); }, token: FormsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FormsService.prototype.FormControls;
    /** @type {?} */
    FormsService.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7QUFLcEUsTUFBTTs7OztJQUdKLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1COzRCQUZ6QyxFQUFFO0tBR2hCOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRCxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVE7UUFDdkIsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUU1QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzt3QkFFdEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsR0FBRyxDQUFDLENBQUMsTUFBTSxPQUFPLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0NBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDckUsS0FBSyxDQUFDO2lDQUNQO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7aUNBQ3JFOzZCQUNGO3lCQUNGO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7eUJBQ3pEO3FCQUNGO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUUvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ25GO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUMvRTtxQkFDRjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUUvQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2QztTQUNGO0tBQ0Y7Ozs7Ozs7O0lBU0QsaUJBQWlCLENBQUMsWUFBaUIsRUFBRSxXQUFtQixFQUFFLFVBQXlCO1FBRWpGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25ILE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNoRTs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsUUFBYSxFQUFFLFFBQWE7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7OztZQXBGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKTyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2Uge1xyXG4gIEZvcm1Db250cm9scyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRpb24gb2YgRm9ybUNvbnRyb2xzIGZvciBhIEZvcm1Hcm91cC5cclxuICAgKiBTbyBmaXJzdCB0aGluZyBpcyBob3cgZG8gd2UgYWRkIFZhbGlkYXRpb24gdG8gYSBGb3JtQ29udHJvbFxyXG4gICAqXHJcbiAgICogcHJvcCBjYW4gYmUgYSBmaWVsZHNldCwgbGVnZW5kLCB0ZXh0LCBpZFByZWZpeCwgbmFtZSwgaGVhZGVyLCBjaGVja2JveGVzLCBpZiB3ZVxyXG4gICAqXHJcbiAgICogSGVyZSBpcyB3aGVyZSB0aGUgdmFsaWRhdGlvbiBpcyBhcHBsaWVkIHRvIGVhY2ggb2YgdGhlIGNvbnRyb2xzIG9mIHRoZSBmb3JtLCBiYXNlZCBvbiB0aGUgdmFsaWRhdG9ycyB0aGF0XHJcbiAgICogaGF2ZSBiZWVuIHBsYWVkIGludG8gdGhlIHN0YXRlX21ldGEuanMuXHJcbiAgICpcclxuICAgKiBUT0RPOiBOYW1lIHRoaXMgc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50LCBhcyBjcmVhdGUgZG9lc24ndCByZWFsbHkgZXhwbGFpbiB3aGF0IGl0IGRvZXMsXHJcbiAgICogYWxzbyB0aGVyZSBpdCdzIHF1aXRlIGhhcmQgdG8gd29yayBvdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc29tZUpzb25cclxuICAgKiBAcGFyYW0gc29tZURhdGFcclxuICAgKi9cclxuICBjcmVhdGUoc29tZUpzb24sIHNvbWVEYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvbWVKc29uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc29tZUpzb24pIHtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09ICdjb250cm9sJykge1xyXG4gICAgICAgICAgaWYgKHNvbWVKc29uLnJhZGlvR3JvdXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBSYWRpb0J1dHRvbiBMb2dpY1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc29tZURhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmFkaW9FbCBvZiBzb21lSnNvbi5yYWRpb0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9FbC52YWx1ZSA9PT0gc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2wocmFkaW9FbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udHJvbChudWxsLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuRm9ybUNvbnRyb2xzW3NvbWVKc29uLmNvbnRyb2xdID0gbmV3IEZvcm1Db250cm9sKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250cm9sKHNvbWVKc29uLnZhbHVlLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZShzb21lSnNvbltwcm9wXSwgc29tZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc29tZUpzb24gIT09IHVuZGVmaW5lZCAmJiBzb21lSnNvbi5pc0FycmF5KSB7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gIG9mIHNvbWVKc29uKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoc29tZUpzb25baXRlbV0sIHNvbWVEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXHJcbiAgICogQHBhcmFtIGNvbnRyb2xOYW1lIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpZS4gdGV4dCBpZiBpdCdzIGEgdGV4dGFyZWEuXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlOiBhbnksIGNvbnRyb2xOYW1lOiBzdHJpbmcsIHZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS5jb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzKSkge1xyXG4gICAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldE5nVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlZmluZWZvcm1Db250cm9scyhzb21lSnNvbjogYW55LCBzb21lRGF0YTogYW55KTogYW55IHtcclxuICAgIHRoaXMuRm9ybUNvbnRyb2xzID0gW107XHJcbiAgICB0aGlzLmNyZWF0ZShzb21lSnNvbiwgc29tZURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuRm9ybUNvbnRyb2xzO1xyXG4gIH1cclxufVxyXG4iXX0=