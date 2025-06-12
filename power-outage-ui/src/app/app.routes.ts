import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportOutageComponent } from './pages/report-outage/report-outage.component';
import { OutageListComponent } from './pages/outage-list/outage-list.component';

export const routes: Routes = [
    { path: 'report', component: ReportOutageComponent },
    { path: 'list', component: OutageListComponent },
    { path: '*', redirectTo: 'report' },
];