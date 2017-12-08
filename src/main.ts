import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { hmrBootstrap } from './hmr';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}
const bootstrap = function() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (environment.hmr) {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap);
    } else {
        console.error('HMR配置没有生效，启动失败！');
    }
} else {
    bootstrap();
}
