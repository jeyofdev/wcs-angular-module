import { Component, Input } from '@angular/core';
import { User } from '../../../../shared/models/classes/user';

@Component({
    selector: 'app-admin-user-list',
    templateUrl: './admin-user-list.component.html',
    styleUrl: './admin-user-list.component.css',
})
export class AdminUserListComponent {
    @Input() users!: User[];
}
