import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings/general-settings';
import { UsersRolesComponent } from './users-roles/users-roles';
import { AuditLogComponent } from './audit-log/audit-log';

const routes: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  { path: 'general', component: GeneralSettingsComponent },
  { path: 'users', component: UsersRolesComponent },
  { path: 'audit', component: AuditLogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
