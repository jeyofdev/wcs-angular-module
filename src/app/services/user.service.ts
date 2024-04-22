import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/classes/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(
            'https://jsonplaceholder.typicode.com/users'
        );
    }

    getUser(userId: number): Observable<User> {
        return this.httpClient.get<User>(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }
}
