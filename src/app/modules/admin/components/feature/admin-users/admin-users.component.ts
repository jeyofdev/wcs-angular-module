import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/models/classes/user';
import { UserService } from '../../../../shared/services/user.service';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrl: './admin-users.component.css',
})
export class AdminUsersComponent {
    users$!: Observable<User[]>;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.users$ = this.userService.getAll();
    }
}
