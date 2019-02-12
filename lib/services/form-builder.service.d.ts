import { ValidationService } from './form-builder-validation.service';
export declare class FormsService {
    private validationService;
    FormControls: any[];
    constructor(validationService: ValidationService);
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
    create(someJson: any, someData: any): void;
    /**
     * Creates a new `FormControl` instance.
     * @param controlName - 'informationNeeded'
     * @param initialValue - ie. text if it's a textarea.
     */
    createFormControl(initialValue: any, controlName: string, validators: Array<string>): void;
    defineformControls(someJson: any, someData: any): any;
}
