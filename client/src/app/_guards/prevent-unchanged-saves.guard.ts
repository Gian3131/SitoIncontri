import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';

@Injectable({
  providedIn: 'root'
})
export class PreventUnchangedSavesGuard implements CanDeactivate<unknown> {

  constructor(private confirmService: ConfirmService) {}

  canDeactivate(
    component: MemberEditComponent): Observable<boolean> | boolean {
      if(component.editForm.dirty){
        return this.confirmService.confirm('Modifiche non salvate','Sono presenti modifiche non salvate. se esci ora, ogni dato non salvato verrà perso.');
      }      
    return true;
  }  
}
