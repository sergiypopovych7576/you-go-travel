import { NgModule } from '@angular/core';
import { BackgroundPositionDirective } from './background-position';

const DECLARATIONS = [
    BackgroundPositionDirective
];

@NgModule({
    declarations: [
        DECLARATIONS
    ],
    exports: [
        DECLARATIONS
    ]
})
export class DirectivesModule { }
