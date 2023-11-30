import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { AppCompComponent } from './course-project/app-comp/app-comp.component';
import { DiffObsProComponent } from './diff-obs-pro/diff-obs-pro.component';
import { DirectivesComponent } from './directives/directives.component';
import { ObservableComponent } from './observable/observable.component';
import { PromisesComponent } from './promises/promises.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UsersComponent } from './databinding/users.component';
import { AppBindComponent } from './databinding/app-bind/app-bind.component';
import { AppAuthComponent } from './Authentication/app-auth/app-auth.component';
import { ZtestComponent } from './ztest/ztest.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { ChatComponent } from './chat/chat/chat.component';

const routes: Routes = [
	{path: '', component: AppAuthComponent},
	{path: 'authentication', component: AppAuthComponent},
	{path: 'signin', component: SignInComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'subjects', component: SubjectsComponent, canActivate: [AuthenticationGuard]},
	{path: 'promises', component: PromisesComponent, canActivate: [AuthenticationGuard]},
	{path: 'observable', component: ObservableComponent, canActivate: [AuthenticationGuard]},
	{path: 'obspro', component: DiffObsProComponent, canActivate: [AuthenticationGuard]},
	{path: 'async-await', component: AsyncAwaitComponent, canActivate: [AuthenticationGuard]},
	{path: 'data-binding', component: AppBindComponent, canActivate: [AuthenticationGuard]},
	{path: 'data-bindingExample', component: UsersComponent, canActivate: [AuthenticationGuard]},
	{path: 'directives', component: DirectivesComponent, canActivate: [AuthenticationGuard]},
	{path: 'course-project', component: AppCompComponent, canActivate: [AuthenticationGuard]},
	{path: 'test', component:ZtestComponent , canActivate: [AuthenticationGuard]},
	{path: 'chat/:userId', component:ChatComponent , canActivate: [AuthenticationGuard]},
	{path: '**', redirectTo: 'promises'}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
