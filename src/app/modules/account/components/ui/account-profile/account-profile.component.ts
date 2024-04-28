import { Component, Input } from '@angular/core';
import { User } from '../../../../shared/models/classes/user';

@Component({
    selector: 'app-account-profile',
    templateUrl: './account-profile.component.html',
    styleUrl: './account-profile.component.css',
})
export class AccountProfileComponent {
    @Input() user!: User;
}
