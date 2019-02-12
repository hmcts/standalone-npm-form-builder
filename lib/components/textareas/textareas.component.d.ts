import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export declare class TextareasComponent {
    private validationService;
    group: FormGroup;
    idPrefix: string;
    name: string;
    id: string;
    labelFor: any;
    rows: any;
    classes: any;
    control: any;
    showValidation: any;
    label: any;
    items: any;
    validationError: any;
    constructor(validationService: ValidationService);
    isGroupInvalidAndShowValidation(formGroup: FormGroup, showValidation: boolean): boolean;
    /**
     * showValidationAndIsControlValid
     *
     * Return true if this component is required to show it's validation, and the users input is invalid.
     *
     * // @param showValidation
     * // @param formGroup
     * // @param control
     * //@return {boolean}
     */
    isControlInvalidAndShowValidation(formGroup: FormGroup, control: string, showValidation: boolean): boolean;
    /**
     * Checks if this control is valid.
     *
     * @see ValidationService
     */
    isFormControlValid(formGroup: FormGroup, control: string): boolean;
}
