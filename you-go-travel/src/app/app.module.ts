import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SectionsModule } from './sections';
import { ComponentsModule } from './components';
import { DirectivesModule } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    SectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
