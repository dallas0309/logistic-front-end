import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { ProviderlistComponent } from './provider/providerlist/providerlist.component';
import { ProviderdetailComponent } from './provider/providerdetail/providerdetail.component';
import { ProvidereditComponent } from './provider/provideredit/provideredit.component';
import {ProvidercreateComponent} from './provider/providercreate/providercreate.component';
import {ContactcreateComponent} from './contact/contactcreate/contactcreate.component';
import {ContacteditComponent} from './contact/contactedit/contactedit.component';
import {NotecreateComponent} from './note/notecreate/notecreate.component';
import {NoteeditComponent} from './note/noteedit/noteedit.component';
import {SignupComponent} from './user/signup/signup.component';
import {CanDeactivateGuardService} from './can-deactivate-guard.service';
import {AuthenticationGuardService} from './authentication-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'provider/new', component: ProvidercreateComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider/:id', component: ProviderdetailComponent, canActivate: [AuthenticationGuardService]},
  { path: 'provider/:id/edit', component: ProvidereditComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider/:id/contact/new', component: ContactcreateComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider/:id/contact/:id2/edit', component: ContacteditComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider/:id/note/new', component: NotecreateComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider/:id/note/:id2/edit', component: NoteeditComponent,
    canActivate: [AuthenticationGuardService], canDeactivate: [CanDeactivateGuardService]},
  { path: 'provider',   component: ProviderlistComponent, canActivate: [AuthenticationGuardService],
    children: [
      { path: ':id', component: ProviderdetailComponent},
    ]},
  { path: '**',   component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProviderlistComponent,
                                  ProviderdetailComponent,
                                  ProvidercreateComponent,
                                  ProvidereditComponent,
                                  ContactcreateComponent,
                                  ContacteditComponent,
                                  NotecreateComponent,
                                  NoteeditComponent,
                                  UserComponent,
                                  SignupComponent,
                                  HomeComponent,
                                  PagenotfoundComponent];
