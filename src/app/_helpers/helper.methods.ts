import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable()
export class HelperMethods {
    public currentUser: User = null;

    constructor() {
    }

    public userHasClaim(claim: string): boolean {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.claims.includes(claim))
            return true;
        return false;
    }
}