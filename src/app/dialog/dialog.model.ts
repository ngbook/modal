import { ComponentRef, EventEmitter, Component } from '@angular/core';
import {
    DomPortalHost,
    ComponentPortal,
} from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';

/**
 * 用于记录一个dialog的信息
 */
export class DialogData<T> {
    public compRef: ComponentRef<T>;

    constructor(private portal: ComponentPortal<T>,
        public host: DomPortalHost,
        private data: DialogModelBase) {
    }

    public open() {
        // console.log('open...');
        this.host.attach(this.portal);
    }
    public close() {
        // console.log('close...');
        this.host.detach();
    }

    public get onSure() {
        return this.data.sure;
    }
    public get onClose() {
        return this.data.sure;
    }
    public setProperty(key, value) {
        if (!key || !value) {
            return;
        }
        this.data[key] = value;
    }
}

export abstract class DialogModelBase {
    sure: EventEmitter<any> = new EventEmitter();
    close: EventEmitter<any> = new EventEmitter();

    validFields = [
        'isOpen', 'overlayClosable', 'width',
        'height', 'sureTxt', 'minWidth'
    ];
    isOpen = true; // 组件一被创建就显示
    overlayClosable = false;

    width: number;
    height: number;
    minWidth: number;
    sureTxt = '确定';

    get baseStyle() {
        return {
            'width.px': this.width,
            'height.px': this.height,
            'min-width.px': this.minWidth,
        };
    }
}
