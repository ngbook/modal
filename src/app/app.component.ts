import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    isOpen = false;
    isOpen2 = false;

    showModal() {
        this.isOpen = true;
    }
    showModal2() {
        this.isOpen2 = true;
    }
}
