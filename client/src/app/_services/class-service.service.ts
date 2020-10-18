import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {
  genere: any;  
  constructor(private accountService: AccountService) { }  

  public getGenere(){
    this.accountService.currentUser$.subscribe(genere => this.genere = genere.gender);
    return this.genere;
  }  
}
