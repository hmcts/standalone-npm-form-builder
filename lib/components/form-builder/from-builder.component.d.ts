import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from '../../services/form-builder.service';
import { ValidationService } from '../../services/form-builder-validation.service';
/**
 * Form Builder Wrapper
 * Component accepts pageItems and pageValues for From Builder to process
 * and it emits form data to it's parent component.
 */
export declare class FromBuilderComponent implements OnChanges {
    private formsService;
    private validationService;
    constructor(formsService: FormsService, validationService: ValidationService);
    pageItems: any;
    pageValues: any;
    isPageValid: boolean;
    submitPage: EventEmitter<FormGroup>;
    formDraft: FormGroup;
    ngOnChanges(changes: SimpleChanges): void;
    createForm(): void;
    setValidators(): void;
    onFormSubmit(): void;
}
