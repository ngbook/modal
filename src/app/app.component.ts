import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    dialog: any;
    title = 'app';
    isOpen = false;
    isOpen2 = false;

    constructor(private dialogService: DialogService) { }

    ngOnInit() {
    }
    showModal() {
        this.isOpen = true;
    }
    showModal2() {
        this.isOpen2 = true;
    }
    showAlert() {
        const dialog = this.dialogService.alert('这是一个简单的提示框');
        dialog.setProperty('width', 500);
        dialog.onSure.subscribe((event) => {
            console.log(event);
        });
    }
    showConfirm() {
        const dialog = this.dialogService.confirm(
            '你确定你比我帅？', {
                closeTxt: '并没有',
                sureTxt: '当然了'
            });
        dialog.onSure.subscribe((event) => {
            this.dialogService.alert('这不可能');
        });
    }
    showPrompt() {
        const dialog = this.dialogService.prompt('请输入您最喜欢的电影：');
        dialog.onSure.subscribe((data) => {
            this.dialogService.alert('您喜欢的电影是：' + data.value);
        });
    }
}
