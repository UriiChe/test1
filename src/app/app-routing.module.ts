import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: 'dropdown', component: DropdownComponent },
  { path: 'page', component: PageComponent },
  { path: '', redirectTo: '/page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
