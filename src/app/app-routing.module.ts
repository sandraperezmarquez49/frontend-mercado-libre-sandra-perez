import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchesComponent } from './searches/searches.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // Default
    {path: '', redirectTo: '/', pathMatch: 'full'},
    //pages
    { path: '', component: HomeComponent },
    { path: 'items?search=', component: SearchesComponent },
    { path: 'items/:id', component: SearchDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
