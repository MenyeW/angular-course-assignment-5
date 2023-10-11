import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
  usersActivated: number = 0
  usersDeactivated: number = 0

  constructor(private counterService: CounterService) {
    this.counterService.userActivated.subscribe((id: number) => this.usersActivated++)
    this.counterService.userDeactivated.subscribe((id: number) => this.usersDeactivated++)
  }

}
