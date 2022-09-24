import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from "../components";
import { DirectivesModule } from "../directives";
import { CompaniesSectionComponent } from "./companies-section";
import { ContactSectionComponent } from "./contact-section";
import { FeaturesSectionComponent } from "./features-section";
import { FooterSectionComponent } from "./footer-section";
import { HeaderSectionComponent } from "./header-section";
import { HeroSectionComponent } from "./hero-section";
import { TestimonialSectionComponent } from "./testimonial-section";
import { TouresSectionComponent } from "./toures-section";

const EXPORTS = [
    TestimonialSectionComponent,
    HeroSectionComponent,
    HeaderSectionComponent,
    FeaturesSectionComponent,
    CompaniesSectionComponent,
    ContactSectionComponent,
    TouresSectionComponent,
    FooterSectionComponent
]

@NgModule({
    declarations: EXPORTS,
    exports: EXPORTS,
    imports: [
        BrowserModule,
        ComponentsModule,
        DirectivesModule
    ],
})
export class SectionsModule { }
