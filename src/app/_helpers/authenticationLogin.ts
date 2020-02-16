import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { JSONServerService } from '../services/jsonserver.service';
import { User } from "../Shared/user";
import { USER } from "../Shared/users";

//let users = USER;
//let users = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', username: 'test', password: 'test' }];

let users: User[] = null;
let observableUserResponse: Observable<HttpResponse<any>> = null;
@Injectable()
export class AuthenticationLoginInterceptor implements HttpInterceptor {

    constructor(private _jsonServerService: JSONServerService) { }
    

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        var jsonServerService = this._jsonServerService;
        // wrap in delayed observable to simulate server api call
        return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                   { 
                    jsonServerService.getUsers().subscribe(
                        (usersHttpResponse: any) => {
                            users = usersHttpResponse;
                            observableUserResponse = authenticate()
                            //return temp;
                        },
                        err => { console.log(err) }
                    );

                    return observableUserResponse;
                        alert('gfhdjs');
                   }
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                username: user.username,
                name: user.name,
                role: user.role,
                token: 'fake-jwt-token'
            })
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }
    }

}

export const AuthenticationBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationLoginInterceptor,
    multi: true
};