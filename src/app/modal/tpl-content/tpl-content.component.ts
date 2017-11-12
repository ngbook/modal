import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-modal-header',
    template: `
        <div class="ng-model-header">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./tpl-content.component.scss'],
})
export class TplHeaderComponent {
    constructor() { }
}

@Component({
    selector: 'ng-modal-body',
    template: `
        <div class="ng-model-body">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./tpl-content.component.scss'],
})
export class TplBodyComponent {
    constructor() { }
}

@Component({
    selector: 'ng-modal-footer',
    template: `
        <div class="ng-model-footer">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./tpl-content.component.scss'],
})
export class TplFooterComponent {
    constructor() { }
}
