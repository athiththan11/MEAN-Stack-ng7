import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DevComponent } from './dev/dev.component';
import { CreateComponent } from './dev/create/create.component';

import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './dev/edit/edit.component';

@NgModule({
    declarations: [AppComponent, DevComponent, CreateComponent, EditComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
