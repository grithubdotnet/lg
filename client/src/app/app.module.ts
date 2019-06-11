import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Application Modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FrontendModule } from './frontend/frontend.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
  RootComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,

    FrontendModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
