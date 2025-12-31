import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form';
import { QueryResultComponent } from './query-result/query-result';

export const routes: Routes = [
  { path: '', component: ContactFormComponent },
  { path: 'query', component: QueryResultComponent }
];
