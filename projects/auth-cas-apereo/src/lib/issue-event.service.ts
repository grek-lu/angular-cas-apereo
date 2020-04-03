import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class  IssueEventService {

    private emitChangeSource = new Subject<any>();

    constructor() { }

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(change: string) {
        this.emitChangeSource.next(change);
    }

}
