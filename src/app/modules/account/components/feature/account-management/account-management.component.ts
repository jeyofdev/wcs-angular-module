import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../models/classes/user';
import { UserService } from '../../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrl: './account-management.component.css',
})
export class AccountManagementComponent {
    user$!: Observable<User>;

    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser(
            this.activatedRoute.snapshot.params['userId']
        );
    }

    goToHome() {
        this.router.navigate(['/admin/home']);
    }
}
