import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';




const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
