import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestPage1Component } from './pages/test-page1/test-page1.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testpage1', component: TestPage1Component },
];
