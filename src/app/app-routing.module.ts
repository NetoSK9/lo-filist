import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RelexComponent } from './views/relex/relex.component';
import { Router } from '@angular/router';

const routes: Routes=[
    {  path:'home',component: HomeComponent  },
    {  path:'relex',component: RelexComponent  }
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule {

      goToHome(router:Router):void{
        router.navigate(['/home']);
      }
      goToRelex(router:Router):void{
        router.navigate(['/relex']);
      }
 }