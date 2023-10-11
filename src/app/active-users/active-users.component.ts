import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = []

  constructor(public userService: UserService, public counterService: CounterService) { }

  onSetToInactive(id: number) {
    this.userService.inactiveUsers.push(this.userService.activeUsers.splice(id, 1)[0])
    this.counterService.userDeactivated.emit(id)
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers
  }
}
