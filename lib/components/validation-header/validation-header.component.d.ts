import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/form-builder-validation.service';
export declare class ValidationHeaderComponent {
    private validationService;
    formGroup: FormGroup;
    controlId: any;
    idPrefix: string;
    name: string;
    FORM_CONTROL: string;
    FORM_GROUP: string;
    /**
     * Signature for validationHeaderControls to be used in a Unit Test is:
     *
     * [{
     *  value: 'Enter what information is needed',
     *  controlId: 'informationNeeded',
     *  pageLink: '#linkToTextArea'
     * },
     * {
     *  value: 'Select yes if you want to include an annotated version of the draft consent order',
     *  controlId: 'includeAnnotatedVersionDraftConsOrder',
     *  pageLink: '#linkToRadiobuttons'
     *}];
     */
    validationHeaderErrorMessages: any;
    constructor(validationService: ValidationService);
    /**
     * Checks if this control is valid.
     *
     * // @see ValidationService
     * // @param control - 'informationNeeded'
     */
    isFormControlValid(formGroup: FormGroup, control: string): boolean;
    /**
     * isFormGroupInvalid
     *
     * // @param formGroup
     * // @param validationErrorId
     * // @return {boolean}
     */
    isFormGroupInvalid(formGroup: FormGroup, validationErrorId: string): boolean;
    /**
     * Checks if we should show a validation message for a form control, or the
     * form group.
     *
     * // @param {string} validationLevel - validation level can either be formGroup or formControl.
     * A formGroup level is validation that handles multiply form controls, when validating multiply components
     * at the same time, ie. when you wish to see if a checkbox is checked, from multiply checkboxes, you must
     * check this on a common ancestor of a set of controls. This common ancestor is always the Angular FormGroup.
     * formControl level is validation that handles a single form control.
     *
     * This abstration was based on how Angular 6's FormGroup and FormControl are abstract from each other,
     * after reading.
     *
     * // @param controlId
     * // @return {boolean}
     */
    isValidationLevel(validationLevel: string, level: string): boolean;
}
