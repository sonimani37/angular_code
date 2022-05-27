import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiffObsProComponent } from './diff-obs-pro/diff-obs-pro.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { Sub1Component } from './subs/sub1/sub1.component';
import { Sub2Component } from './subs/sub2/sub2.component';
import { Sub3Component } from './subs/sub3/sub3.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromisesComponent } from './promises/promises.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
// import { Sub3Component } from './subs/sub3/sub3.component';

@NgModule({
  declarations: [
    AppComponent,
    DiffObsProComponent,
    ObservableComponent,
    SubjectsComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    HeaderComponent,
    PromisesComponent,
    AsyncAwaitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
