import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';

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
import { UsersComponent } from './databinding/users.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CustomStyleDirective } from './custom-style.directive';
import { ServerComponent } from './course-project/server/server.component';
import { ServersComponent } from './course-project/servers/servers.component';
import { AppCompComponent } from './course-project/app-comp/app-comp.component';
import { HeaderCompComponent } from './course-project/header-comp/header-comp.component';
import { RecipesComponent } from './course-project/recipes/recipes.component';
import { RecipesListComponent } from './course-project/recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './course-project/recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './course-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './course-project/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailComponent } from './course-project/recipes/recipes-detail/recipes-detail.component';
import { AppBindComponent } from './databinding/app-bind/app-bind.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './databinding/server-element/server-element.component';
import { ZtestComponent } from './ztest/ztest.component';
import { JasmineKarmaTestComponent } from './jasmine-karma-test/jasmine-karma-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAuthComponent } from './Authentication/app-auth/app-auth.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { ChatComponent } from './chat/chat/chat.component';
// import { SignUpComponent } from './Authentication/sign-up/sign-up.component';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:7000', options: {} };


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
    UsersComponent,
    DirectivesComponent,
    CustomStyleDirective,
    ServerComponent,
    ServersComponent,
    AppCompComponent,
    HeaderCompComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesDetailComponent,
    AppBindComponent,
    CockpitComponent,
    ServerElementComponent,
    ZtestComponent,
    JasmineKarmaTestComponent,
    DashboardComponent,
    SignUpComponent,
    AppAuthComponent,
    SignInComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
