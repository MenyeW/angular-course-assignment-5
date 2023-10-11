import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = []

  constructor(public userService: UserService, public counterService: CounterService) { }

  onSetToActive(id: number) {
    this.userService.activeUsers.push(this.userService.inactiveUsers.splice(id, 1)[0])
    this.counterService.userActivated.emit(id)
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }
}
