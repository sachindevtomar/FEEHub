import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Shared/user'
import 'rxjs/add/operator/map';

@Injectable()
export class JSONServerService {
    private _usersUrl = "http://localhost:3000/users";
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private _http: HttpClient) { 
        //this.getIssueCount();
     }

    public getUsers() : Observable<any> {
        return this._http.get(this._usersUrl);
    }

     private count;
    // public getIssueCount() {
    //     this.getUsers().subscribe(
    //         (issues: any) => this.count = issues[issues.length - 1]._id,
    //     );
    // }

    public addIssue(formValue: any) {
        let newissue = {
            "_id": ++this.count,
            "description": formValue.desc,
            "severity": formValue.severity,
            "status": formValue.stat,
            "created": formValue.created,
            "resolved": formValue.resolved
        }
        console.log(JSON.stringify(newissue._id));
        return this._http.post(this._usersUrl + '/addIssue', newissue, this.httpOptions);
    }

    public updateIssue(updatedIssue: any) {
        let editURL = `${this._usersUrl + '/editIssue'}/${updatedIssue._id}`;
        return this._http.put(editURL, updatedIssue, this.httpOptions);
    }

    public deleteIssue(_id) {
        let deleteIssueURL = `${this._usersUrl + '/deleteIssue'}/${_id}`;
        return this._http.delete(deleteIssueURL);
    }
}