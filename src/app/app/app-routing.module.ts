import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { DiffObsProComponent } from './diff-obs-pro/diff-obs-pro.component';
import { ObservableComponent } from './observable/observable.component';
import { PromisesComponent } from './promises/promises.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
	{path: '', component: SubjectsComponent},
	{path: 'subject', component: SubjectsComponent},
	{path: 'promises', component: PromisesComponent},
	{path: 'observable', component: ObservableComponent},
	{path: 'obspro', component: DiffObsProComponent},
	{path: 'async-await', component: AsyncAwaitComponent},
	{path: '**', redirectTo: 'promises'}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
