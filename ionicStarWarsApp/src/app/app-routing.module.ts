import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'people-detail', loadChildren: './pages/people-detail/people-detail.module#PeopleDetailPageModule' },
  { path: 'planets-detail', loadChildren: './pages/planets-detail/planets-detail.module#PlanetsDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
