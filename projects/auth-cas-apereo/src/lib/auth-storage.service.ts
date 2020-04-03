import { Injectable } from '@angular/core';
import { IssueEventService } from './issue-event.service';

const LOGIN_KEY = "loginCasUser"
const ATTRS_KEY = "attrsCasUser"
const TICKET_KEY = "ticketCasUser"

@Injectable()
export class AuthStorageService {

    constructor(private eventService: IssueEventService) { }

    saveLogin(login: string) {
        window.sessionStorage.setItem(LOGIN_KEY, login)
        this.eventService.emitChange('loaded');
    }

    getLogin(): string {
        return window.sessionStorage.getItem(LOGIN_KEY)
    }

    saveTicket(ticket: string) {
        window.sessionStorage.setItem(TICKET_KEY, ticket)
    }

    getTicket(): string {
        return window.sessionStorage.getItem(TICKET_KEY)
    }

    saveAttrs(attrs: object) {
        window.sessionStorage.setItem(ATTRS_KEY, JSON.stringify(attrs));        
    }

    getAttrs(): object {
        return JSON.parse(window.sessionStorage.getItem(ATTRS_KEY));
    }

    remove() {
        window.sessionStorage.removeItem(ATTRS_KEY)
        window.sessionStorage.removeItem(TICKET_KEY)
        window.sessionStorage.removeItem(LOGIN_KEY)
    }

}
