import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export declare class InputsComponent {
    private validationService;
    group: FormGroup;
    item: any;
    label: any;
    hint: any;
    labelFor: any;
    showValidation: any;
    validationError: any;
    name: any;
    id: any;
    constructor(validationService: ValidationService);
    /**
     * showValidationAndIsControlValid
     *
     * Return true if this component is required to show it's validation, and the users input is invalid.
     *
     * //@param showValidation
     * //@param formGroup
     * //@param control
     * //@return {boolean}
     */
    isControlInvalidAndShowValidation(formGroup: FormGroup, control: string, showValidation: boolean): boolean;
    /**
     * Checks if this control is valid.
     *
     *  ValidationService
     */
    isFormControlValid(formGroup: FormGroup, control: string): boolean;
}
