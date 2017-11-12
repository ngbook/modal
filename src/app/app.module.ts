import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgButtonModule } from 'ngbook-kits';

import { AppComponent } from './app.component';
import { ModalModule } from './modal';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
    ],
    entryComponents: [
        TestComponent,
    ],
    imports: [
        BrowserModule,
        ModalModule,
        NgButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
