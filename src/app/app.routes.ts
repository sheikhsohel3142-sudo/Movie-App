import { Routes } from '@angular/router';
import { Page } from './page/page';

export const routes: Routes = [
    
  { path: '', component: Page },      // main search page
  { path: 'list/:query', component: Page }


];
