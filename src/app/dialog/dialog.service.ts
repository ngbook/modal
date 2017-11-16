import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef, ReflectiveInjector,
    Injector, Inject,
} from '@angular/core';
import {
    DomPortalHost,
    ComponentPortal,
    ComponentType,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { NgAlertComponent, AlertData } from './alert/alert.component';
import { NgConfirmComponent, ConfirmData } from './confirm/confirm.component';
import { NgPromptComponent, PromptData } from './prompt/prompt.component';
import { DialogData } from './dialog.model';

@Injectable()
export class DialogService {
    // private modalVector = [] as Array<DialogData<any>>;

    constructor(
        @Inject(DOCUMENT) private document,
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {
    }

    alert(content: string, title = '提示', opts?: any) {
        const data = new AlertData();
        data.title = title;
        data.content = content;
        if (opts) {
            // 只允许validFields里定义的一些key
            data.validFields.forEach((key) => {
                if (opts[key]) {
                    data[key] = opts[key];
                }
            });
        }
        const injector = this.resolveInputs([{
            provide: AlertData, useValue: data
        }]);
        const portal = new ComponentPortal(NgAlertComponent);
        const host = this.genHost(injector);
        const dialog = new DialogData<NgAlertComponent>(portal, host, data);
        setTimeout(() => {
            dialog.open();
        });
        // this.modalVector.push(dialog);
        return dialog;
    }

    confirm(content: string, opts?: any) {
        const data = new ConfirmData();
        data.content = content;
        if (opts) {
            // 只允许validFields里定义的一些key
            data.validFields.forEach((key) => {
                if (opts[key]) {
                    data[key] = opts[key];
                }
            });
        }
        const injector = this.resolveInputs([{
            provide: ConfirmData, useValue: data
        }]);
        const portal = new ComponentPortal(NgConfirmComponent);
        const host = this.genHost(injector);
        const dialog = new DialogData<NgConfirmComponent>(
            portal, host, data);
        setTimeout(() => {
            dialog.open();
        });
        return dialog;
    }

    prompt(content: string, opts?: any) {
        const data = new PromptData();
        data.content = content;
        if (opts) {
            // 只允许validFields里定义的一些key
            data.validFields.forEach((key) => {
                if (opts[key]) {
                    data[key] = opts[key];
                }
            });
        }
        const injector = this.resolveInputs([{
            provide: PromptData, useValue: data
        }]);
        const portal = new ComponentPortal(NgPromptComponent);
        const host = this.genHost(injector);
        const dialog = new DialogData<NgPromptComponent>(
            portal, host, data);
        setTimeout(() => {
            dialog.open();
        });
        return dialog;
    }

    private genHost(injector?: Injector) {
        if (!injector) {
            injector = this.injector;
        }
        return new DomPortalHost(
            this.document.body,
            this.componentFactoryResolver,
            this.appRef,
            injector);
    }

    private resolveInputs(provides) {
        const resolved = ReflectiveInjector.resolve(provides);
        return ReflectiveInjector.fromResolvedProviders(
            resolved, this.injector);
    }
}
