import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    userActivated = new EventEmitter<number>()
    userDeactivated = new EventEmitter<number>()
}