import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserManager, WebStorageStateStore } from 'oidc-client';
import { FactoryProvider } from '@angular/core';

import { AppComponent } from './app.component';

const settings = { /* ... */ };

const userManager = new UserManager(settings);

export function getUserManager() {
  return userManager;
}

export const UserManagerProvider: FactoryProvider = {
  provide: UserManager,
  useFactory: getUserManager
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserManagerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
