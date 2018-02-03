import { Injectable } from '@angular/core';
import {PoemService} from "./poem.service";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IPoem} from "./poem";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PoemDetailResolverService implements Resolve<IPoem>{

  constructor(private poemService: PoemService, private _router:Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPoem> | Promise<IPoem> | IPoem {
        return this.poemService.getPoem(+route.params['id'])
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
