import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export declare class ValidationErrorFormControlComponent {
    private validationService;
    group: FormGroup;
    controlId: any;
    constructor(validationService: ValidationService);
    /**
     * Is Form Control Valid
     *
     * TODO: Unit
     *
     * // @see ValidationService
     * // @param {FormGroup} formGroup
     * // @param {string} controlId - ie. 'informationNeeded'
     * // @return {boolean}
     */
    isFormControlValid(formGroup: FormGroup, controlId: string): boolean;
}
