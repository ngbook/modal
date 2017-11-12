import { Component, OnInit, Input, Injector,
    ComponentFactoryResolver, ContentChild,
    ViewContainerRef, ViewChild, Output, EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Portal, ComponentPortal } from '@angular/cdk/portal';
import {
    trigger, state, style,
    animate, transition, keyframes
} from '@angular/animations';

import {
    TplHeaderComponent,
    TplBodyComponent,
    TplFooterComponent
} from './tpl-content';

// import { Router } from '@angular/router';
// import { PopupService } from './modal.service';
// import  { DomUtil }  from '../util/dom-handler.service';
// import { ModalModel } from './modal.model';

@Component({
    selector: 'ng-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [
        trigger('appear', [
            state('in', style({
                transform: 'translateY(0) scale(1)',
                opacity: 1
            })),
            transition(':enter', [
                animate('400ms ease-in', keyframes([
                    style({opacity: 0, transform: 'translateY(70%) scale(0.2)', offset: 0}),
                    style({opacity: 0.5, transform: 'translateY(-10%) scale(1.2)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateY(0) scale(1)', offset: 1.0})
                ]))
            ]),
            transition(':leave', [
                animate('400ms ease-in', keyframes([
                    style({opacity: 1, transform: 'translateY(0) scale(1)', offset: 0}),
                    style({opacity: 0.5, transform: 'translateY(-10%) scale(1.2)', offset: 0.6}),
                    style({opacity: 0, transform: 'translateY(70%) scale(0.2)', offset: 1.0})
                ]))
            ]),
        ]),
    ]
})
export class NgModalComponent implements OnInit {
    // @ViewChild(CdkPortal)
    // public cdkPortal: CdkPortal;
    @Input()
    content: Portal<any>;
    @ContentChild(TplBodyComponent)
    public bodyTpl: TplBodyComponent;

    @Input()
    public isOpen = true;
    @Output()
    public isOpenChange = new EventEmitter<boolean>();

    constructor() { }

    public ngOnInit() {
        if (this.bodyTpl) {
            this.content = new ComponentPortal(TplBodyComponent);
            // console.log(this.content);
        }
        // console.log(this.cdkPortal);
        // this.cdkPortal.attach();
    }
    public dismiss() {
        this.hide();
    }
    public stopBubble(event) {
        event.stopPropagation();
    }
    private hide() {
        this.isOpen = false;
        this.isOpenChange.emit(false);
    }
}
