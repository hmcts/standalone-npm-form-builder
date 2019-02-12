import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class ButtonsComponent implements OnInit {
    idPrefix: string;
    name: string;
    group: FormGroup;
    classes: any;
    typeBtn: any;
    control: any;
    value: any;
    constructor();
    isValid: boolean;
    ngOnInit(): void;
}
