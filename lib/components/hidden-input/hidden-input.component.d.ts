import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class HiddenInputComponent implements OnInit {
    group: FormGroup;
    item: {
        control: string;
        classes: Array<string>;
    };
    value: any;
    componentClasses: string;
    constructor();
    ngOnInit(): void;
}
