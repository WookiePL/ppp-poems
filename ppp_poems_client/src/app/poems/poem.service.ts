import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IPoem} from "./poem";


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class PoemService {
    constructor(private http: Http) {
    }

    // getPoems(): Observable<IPoem[]> {
    //     return this.http.get('/api/poems')
    //         .map(this.extractData)
    //         .do(data => console.log('getPoems' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    //
    // private extractData(response: Response) {
    //     let body = response.json();
    //     return body.data || {};
    // }
    //
    // private handleError(error: Response): Observable<any> {
    //     // in a real world app, we may send the server to some remote logging infrastructure
    //     // instead of just logging it to the console
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }
}
