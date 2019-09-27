import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProviderlistComponent } from './provider/providerlist/providerlist.component';
import { ProviderdetailComponent } from './provider/providerdetail/providerdetail.component';
import { ProvidereditComponent } from './provider/provideredit/provideredit.component';
import {AppRoutingModule} from './app-routing.module';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {ProviderService} from './provider.service';
import {StorageService} from './storage.service';
import { ProvidercreateComponent } from './provider/providercreate/providercreate.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { NoteComponent } from './note/note.component';
import { ContactlistComponent } from './contact/contactlist/contactlist.component';
import { NotelistComponent } from './note/notelist/notelist.component';
import { ContacteditComponent } from './contact/contactedit/contactedit.component';
import { ContactcreateComponent } from './contact/contactcreate/contactcreate.component';
import { NotecreateComponent } from './note/notecreate/notecreate.component';
import { NoteeditComponent } from './note/noteedit/noteedit.component';
import { NotedeleteComponent } from './note/notedelete/notedelete.component';
import { ContactdeleteComponent } from './contact/contactdelete/contactdelete.component';
import { SignupComponent } from './user/signup/signup.component';
import {ContactService} from './contact.service';
import {NoteService} from './note.service';
import {CanDeactivateGuardService} from './can-deactivate-guard.service';
import {DialogService} from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProviderlistComponent,
    ProviderdetailComponent,
    ProvidereditComponent,
    UserComponent,
    ProvidercreateComponent,
    NavComponent,
    ContactComponent,
    NoteComponent,
    ContactlistComponent,
    NotelistComponent,
    ContacteditComponent,
    ContactcreateComponent,
    NotecreateComponent,
    NoteeditComponent,
    NotedeleteComponent,
    ContactdeleteComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ProviderService,
    StorageService,
    ContactService,
    NoteService,
    CanDeactivateGuardService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
