/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './form-builder-validation.service';
import * as i0 from "@angular/core";
import * as i1 from "./form-builder-validation.service";
var FormsService = /** @class */ (function () {
    function FormsService(validationService) {
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
     * @param someJson
     * @param someData
     */
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
    FormsService.prototype.create = /**
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
    function (someJson, someData) {
        if (typeof someJson === 'object') {
            for (var prop in someJson) {
                if (prop === 'control') {
                    if (someJson.radioGroup !== undefined) {
                        // RadioButton Logic
                        if (Object.keys(someData).length !== 0) {
                            try {
                                for (var _a = tslib_1.__values(someJson.radioGroup), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    var radioEl = _b.value;
                                    if (radioEl.value === someData[someJson.control]) {
                                        this.FormControls[someJson.control] = new FormControl(radioEl.value);
                                        break;
                                    }
                                    else {
                                        this.createFormControl(null, someJson.control, someJson.validators);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
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
            try {
                for (var someJson_1 = tslib_1.__values(someJson), someJson_1_1 = someJson_1.next(); !someJson_1_1.done; someJson_1_1 = someJson_1.next()) {
                    var item = someJson_1_1.value;
                    this.create(someJson[item], someData);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (someJson_1_1 && !someJson_1_1.done && (_d = someJson_1.return)) _d.call(someJson_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var e_1, _c, e_2, _d;
    };
    /**
     * Creates a new `FormControl` instance.
     * @param controlName - 'informationNeeded'
     * @param initialValue - ie. text if it's a textarea.
     */
    /**
     * Creates a new `FormControl` instance.
     * @param {?} initialValue - ie. text if it's a textarea.
     * @param {?} controlName - 'informationNeeded'
     * @param {?} validators
     * @return {?}
     */
    FormsService.prototype.createFormControl = /**
     * Creates a new `FormControl` instance.
     * @param {?} initialValue - ie. text if it's a textarea.
     * @param {?} controlName - 'informationNeeded'
     * @param {?} validators
     * @return {?}
     */
    function (initialValue, controlName, validators) {
        if (this.validationService.controlHasValidation(validators)) {
            this.FormControls[controlName] = new FormControl(initialValue, this.validationService.getNgValidators(validators));
            return;
        }
        this.FormControls[controlName] = new FormControl(initialValue);
    };
    /**
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    FormsService.prototype.defineformControls = /**
     * @param {?} someJson
     * @param {?} someData
     * @return {?}
     */
    function (someJson, someData) {
        this.FormControls = [];
        this.create(someJson, someData);
        return this.FormControls;
    };
    FormsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    FormsService.ctorParameters = function () { return [
        { type: ValidationService }
    ]; };
    /** @nocollapse */ FormsService.ngInjectableDef = i0.defineInjectable({ factory: function FormsService_Factory() { return new FormsService(i0.inject(i1.ValidationService)); }, token: FormsService, providedIn: "root" });
    return FormsService;
}());
export { FormsService };
if (false) {
    /** @type {?} */
    FormsService.prototype.FormControls;
    /** @type {?} */
    FormsService.prototype.validationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leGFtcGxlLW5wbS1tb2R1bGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7OztJQVFsRSxzQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7NEJBRnpDLEVBQUU7S0FHaEI7SUFFRDs7Ozs7Ozs7Ozs7Ozs7T0FjRzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCw2QkFBTTs7Ozs7Ozs7Ozs7Ozs7OztJQUFOLFVBQU8sUUFBUSxFQUFFLFFBQVE7UUFDdkIsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFNLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUU1QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzt3QkFFdEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0NBQ3ZDLEdBQUcsQ0FBQyxDQUFrQixJQUFBLEtBQUEsaUJBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQSxnQkFBQTtvQ0FBcEMsSUFBTSxPQUFPLFdBQUE7b0NBQ2hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDckUsS0FBSyxDQUFDO3FDQUNQO29DQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7cUNBQ3JFO2lDQUNGOzs7Ozs7Ozs7eUJBQ0Y7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzt5QkFDekQ7cUJBQ0Y7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBRS9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt5QkFDbkY7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQy9FO3FCQUNGO2lCQUNGO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztnQkFFL0MsR0FBRyxDQUFDLENBQWdCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUE7b0JBQXZCLElBQU0sSUFBSSxxQkFBQTtvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDdkM7Ozs7Ozs7OztTQUNGOztLQUNGO0lBSUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCx3Q0FBaUI7Ozs7Ozs7SUFBakIsVUFBa0IsWUFBaUIsRUFBRSxXQUFtQixFQUFFLFVBQXlCO1FBRWpGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25ILE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNoRTs7Ozs7O0lBRUQseUNBQWtCOzs7OztJQUFsQixVQUFtQixRQUFhLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Z0JBcEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSk8saUJBQWlCOzs7dUJBRnpCOztTQU9hLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4vZm9ybS1idWlsZGVyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2Uge1xyXG4gIEZvcm1Db250cm9scyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRpb24gb2YgRm9ybUNvbnRyb2xzIGZvciBhIEZvcm1Hcm91cC5cclxuICAgKiBTbyBmaXJzdCB0aGluZyBpcyBob3cgZG8gd2UgYWRkIFZhbGlkYXRpb24gdG8gYSBGb3JtQ29udHJvbFxyXG4gICAqXHJcbiAgICogcHJvcCBjYW4gYmUgYSBmaWVsZHNldCwgbGVnZW5kLCB0ZXh0LCBpZFByZWZpeCwgbmFtZSwgaGVhZGVyLCBjaGVja2JveGVzLCBpZiB3ZVxyXG4gICAqXHJcbiAgICogSGVyZSBpcyB3aGVyZSB0aGUgdmFsaWRhdGlvbiBpcyBhcHBsaWVkIHRvIGVhY2ggb2YgdGhlIGNvbnRyb2xzIG9mIHRoZSBmb3JtLCBiYXNlZCBvbiB0aGUgdmFsaWRhdG9ycyB0aGF0XHJcbiAgICogaGF2ZSBiZWVuIHBsYWVkIGludG8gdGhlIHN0YXRlX21ldGEuanMuXHJcbiAgICpcclxuICAgKiBUT0RPOiBOYW1lIHRoaXMgc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50LCBhcyBjcmVhdGUgZG9lc24ndCByZWFsbHkgZXhwbGFpbiB3aGF0IGl0IGRvZXMsXHJcbiAgICogYWxzbyB0aGVyZSBpdCdzIHF1aXRlIGhhcmQgdG8gd29yayBvdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc29tZUpzb25cclxuICAgKiBAcGFyYW0gc29tZURhdGFcclxuICAgKi9cclxuICBjcmVhdGUoc29tZUpzb24sIHNvbWVEYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvbWVKc29uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc29tZUpzb24pIHtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09ICdjb250cm9sJykge1xyXG4gICAgICAgICAgaWYgKHNvbWVKc29uLnJhZGlvR3JvdXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBSYWRpb0J1dHRvbiBMb2dpY1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc29tZURhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmFkaW9FbCBvZiBzb21lSnNvbi5yYWRpb0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9FbC52YWx1ZSA9PT0gc29tZURhdGFbc29tZUpzb24uY29udHJvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2wocmFkaW9FbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtQ29udHJvbChudWxsLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5Gb3JtQ29udHJvbHNbc29tZUpzb24uY29udHJvbF0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKSB7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuRm9ybUNvbnRyb2xzW3NvbWVKc29uLmNvbnRyb2xdID0gbmV3IEZvcm1Db250cm9sKHNvbWVEYXRhW3NvbWVKc29uLmNvbnRyb2xdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1Db250cm9sKHNvbWVKc29uLnZhbHVlLCBzb21lSnNvbi5jb250cm9sLCBzb21lSnNvbi52YWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZShzb21lSnNvbltwcm9wXSwgc29tZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc29tZUpzb24gIT09IHVuZGVmaW5lZCAmJiBzb21lSnNvbi5pc0FycmF5KSB7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gIG9mIHNvbWVKc29uKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoc29tZUpzb25baXRlbV0sIHNvbWVEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXHJcbiAgICogQHBhcmFtIGNvbnRyb2xOYW1lIC0gJ2luZm9ybWF0aW9uTmVlZGVkJ1xyXG4gICAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpZS4gdGV4dCBpZiBpdCdzIGEgdGV4dGFyZWEuXHJcbiAgICovXHJcbiAgY3JlYXRlRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlOiBhbnksIGNvbnRyb2xOYW1lOiBzdHJpbmcsIHZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4pIHtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS5jb250cm9sSGFzVmFsaWRhdGlvbih2YWxpZGF0b3JzKSkge1xyXG4gICAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmdldE5nVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkZvcm1Db250cm9sc1tjb250cm9sTmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGRlZmluZWZvcm1Db250cm9scyhzb21lSnNvbjogYW55LCBzb21lRGF0YTogYW55KTogYW55IHtcclxuICAgIHRoaXMuRm9ybUNvbnRyb2xzID0gW107XHJcbiAgICB0aGlzLmNyZWF0ZShzb21lSnNvbiwgc29tZURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuRm9ybUNvbnRyb2xzO1xyXG4gIH1cclxufVxyXG4iXX0=