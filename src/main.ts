import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.log(err));
  


=======
  .catch(err => console.log(err));
>>>>>>> a7f8d1febec157813bff419295e7ddbd99208450
