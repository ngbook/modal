
import {
    NgModule,
    Injector,
    ApplicationRef,
    ComponentFactoryResolver
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgButtonModule } from 'ngbook-kits';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModalComponent } from './modal.component';
import {
    TplHeaderComponent,
    TplBodyComponent,
    TplFooterComponent
} from './tpl-content';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgButtonModule,
        PortalModule,
        BrowserAnimationsModule,
    ],
    entryComponents: [
        TplHeaderComponent,
        TplBodyComponent,
        TplFooterComponent,
    ],
    exports: [
        NgModalComponent,
        TplBodyComponent,
    ],
    declarations: [
        NgModalComponent,
        TplHeaderComponent,
        TplBodyComponent,
        TplFooterComponent,
    ],
})
export class ModalModule {
    public static forRoot() {
        return {
            ngModule: ModalModule,
            // providers: [ PopupService ]
        };
    }

}

