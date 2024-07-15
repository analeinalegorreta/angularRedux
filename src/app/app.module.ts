import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductEffects } from './shared/Store/Effects/product.effects';
import { productReducers } from './shared/Store/Selectors/product.selector';
import { provideHttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(productReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DataTablesModule,
    
  ],
  providers: [
    provideHttpClient(),
     NgbModal,
     NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
