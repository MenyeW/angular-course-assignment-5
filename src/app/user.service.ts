import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {
    activeUsers: string[] = []
    inactiveUsers: string[] = []

    userActivated = new EventEmitter<any>()
    userDeactivated = new EventEmitter<any>()

    constructor() {
        this.activeUsers = ['Max', 'Anna'];
        this.inactiveUsers = ['Chris', 'Manu'];
    }
}