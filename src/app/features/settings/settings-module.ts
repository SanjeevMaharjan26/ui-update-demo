import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { SettingsRoutingModule } from './settings-routing-module';
import { GeneralSettingsComponent } from './general-settings/general-settings';
import { UsersRolesComponent } from './users-roles/users-roles';
import { AuditLogComponent } from './audit-log/audit-log';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog';

@NgModule({
  declarations: [GeneralSettingsComponent, UsersRolesComponent, AuditLogComponent, UserAddDialogComponent],
  imports: [SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
