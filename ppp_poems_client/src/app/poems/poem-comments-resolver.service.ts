import { Injectable } from '@angular/core';
import {PoemService} from "./poem.service";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IPoem, IComment} from "./poem";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PoemCommentsResolverService implements Resolve<IComment[]>{

  constructor(private poemService: PoemService, private _router:Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
        return this.poemService.getComments(+route.params['id'])
            .catch(error => {
                console.log(`Retrieval error: ${error.message}`);
                if(error.status === 401){
                    this._router.navigate(['/login']);
                }
                this._router.navigate(['/poems']);
                return Observable.of(null);
            })
    }

}
