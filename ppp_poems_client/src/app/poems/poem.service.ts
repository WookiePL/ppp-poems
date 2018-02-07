import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IComment, IPoem} from "./poem";


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../shared/services/auth.service";
import {IRate} from "./rate";
import {RequestOptions} from "@angular/http";

@Injectable()
export class PoemService {
    constructor(private http: HttpClient, private _authService: AuthService) {
    }

    getPoems(): Observable<IPoem[]> {
        return this.http.get<IPoem[]>('/api/poems')
            .do(data => console.log('getPoems' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPoem(id: number): Observable<IPoem>{
        return this.http.get<IPoem>('/api/poem/' + id, {headers: this._authService.getAuthorizationRequestHeader()})
            .do(data => console.log('getPoem' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getComments(poem_id: number): Observable<IComment[]> {
        return this.http.get<IComment[]>('/api/comment/' + poem_id, {
            headers: this._authService.getAuthorizationRequestHeader()
        }).do(data => console.log('getComments' + JSON.stringify(data)))
          .catch(this.handleError);
    }

    submitComment(user: string, content: string, poem_id: number) : any {
        const body = new HttpParams()
            .set('user', user)
            .set('content', content)
            .set('poem_id', ''+poem_id)
            .set('date', new Date().toISOString().slice(0,10));
        return this.http.post('/api/comment/', body,{
            headers: this._authService.getAuthorizationRequestHeader()
        }).do(data => console.log('getComments' + JSON.stringify(data)))
          .catch(this.handleError);

    }

    addPoem(userName: string, title: string, description: string, content: string, author_id: number): Observable<IPoem> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.post<IPoem>('/api/poem/create', JSON.stringify({
            userName: userName,
            title: title,
            description: description,
            content: content,
            author_id: author_id
        }), {
            responseType: "json",
            headers: headers
        })
            .do(response => console.log('postPoem' + JSON.stringify(response)))
            .catch(this.handleError);
    }

    deletePost(poemId: number): Observable<IPoem>{
        return this.http.delete<IPoem>('/api/poem/' + poemId, {
            headers: this._authService.getAuthorizationRequestHeader()
        }).do(data => console.log('deletePoem' + JSON.stringify(data)))
          .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    ratePoem(poem_id: number, user: string, rating: number, updateOnly: boolean, rateId: number): Observable<IRate>{
        console.log(updateOnly);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        if( updateOnly === true){
            return this.http.patch<IRate>('/api/rate/'+rateId+'/', JSON.stringify({
                poem: poem_id,
                userName: user,
                rating: rating
            }), {
                responseType: "json",
                headers: headers
            })
                .do(response => console.log('postRate' + JSON.stringify(response)))
                .catch(this.handleError);
        }else{
            return this.http.post<IRate>('/api/rate/create', JSON.stringify({
                poem: poem_id,
                userName: user,
                rating: rating
            }), {
                responseType: "json",
                headers: headers
            })
                .do(response => console.log('postRate' + JSON.stringify(response)))
                .catch(this.handleError);

        }
    }
}
