import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { AccountManagementComponent } from './components/feature/account-management/account-management.component';
import { AccountProfileComponent } from './components/ui/account-profile/account-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AccountHomeComponent,
        AccountManagementComponent,
        AccountProfileComponent,
    ],
    imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
