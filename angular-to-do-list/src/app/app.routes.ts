import { Routes } from '@angular/router';
import { listComponent } from './TDlist/tdList.component';
import { homeComponent } from './Home/home.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { 
        path: '',
        title: 'home',
        component: homeComponent,
    },
    { 
        path: 'list',
        title: 'todo list',
        component: listComponent,
    },
];
