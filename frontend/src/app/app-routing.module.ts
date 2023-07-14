import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for the home page (no path specified)
  { path: 'search/:searchTerm', component: HomeComponent }, // Route for searching with a specific search term
  { path: 'tag/:tag', component: HomeComponent } // Route for filtering by a specific tag
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


