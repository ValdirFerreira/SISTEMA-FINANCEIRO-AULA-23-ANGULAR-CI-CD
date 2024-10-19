import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { LoaderInterceptor, HTTPStatus } from './app/interceptor/loader.interceptor';
import { AuthGuard } from './app/pages/guards/auth-guard.service';

const RxJS = [LoaderInterceptor, HTTPStatus];




bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule),
        AuthGuard,
        RxJS,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
