import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export declare class ValidationErrorFormGroupComponent {
    private validationService;
    group: FormGroup;
    validationErrorId: any;
    constructor(validationService: ValidationService);
    /**
     * Is Form Group Invalid
     *
     * TODO : Unit Test
     *
     * // @see ValidationService
     * // @param {FormGroup} formGroup
     * // @param {string} validationErrorId - ie. 'reasonsConstentOrderNotApproved' - This is the validation identifier
     * we assign to a group of form controls, we assign this when we currently setValidators(), note that we will
     * need to pass this in once the Universal Form Builder is merged with Validation.
     * // @return {boolean}
     */
    isFormGroupInvalid(formGroup: FormGroup, validationErrorId: string): boolean;
}
