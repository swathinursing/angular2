import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisterService {

    constructor(public httpSvc: Http) { }

    userRegistration(userInfo):Observable<any> {
     return this.httpSvc.post("http://localhost:4000/api/register"
     ,userInfo)
     .map((response)=>response.json())
    .catch((error)=>Observable.throw(error))
    }

}