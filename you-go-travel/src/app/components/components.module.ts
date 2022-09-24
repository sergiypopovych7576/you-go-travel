import { NgModule } from "@angular/core";
import { LineComponent } from "./line";
import { MatIconModule } from '@angular/material/icon';
import { FeatureComponent } from "./feature";
import { InputComponent } from "./input";
import { ButtonComponent } from "./button";
import { BrowserModule } from "@angular/platform-browser";

const DECLARATIONS = [
    LineComponent,
    FeatureComponent,
    InputComponent,
    ButtonComponent
];

const IMPORTS = [
    BrowserModule,
    MatIconModule
];

const EXPORTS = [
    DECLARATIONS,
    IMPORTS
];

@NgModule({
    declarations: DECLARATIONS,
    exports: EXPORTS,
    imports: IMPORTS,
})
export class ComponentsModule { }
