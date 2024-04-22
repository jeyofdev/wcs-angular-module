import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserListComponent } from './components/ui/admin-user-list/admin-user-list.component';
import { AdminUsersComponent } from './components/feature/admin-users/admin-users.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AdminUserListComponent,
        AdminUsersComponent,
        AdminHomeComponent,
    ],
    imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
