import { Component, Input } from '@angular/core';
import { User } from '../../../../../../models/classes/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css',
})
export class UserCardComponent {
    @Input() user!: User;
    @Input() showViewMoreBtn: boolean = false;

    constructor(private router: Router) {}

    viewMore() {
        this.router.navigate(['/account/', this.user.id]);
    }
}
