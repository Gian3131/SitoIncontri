import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ClassServiceService } from '../_services/class-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; 
  errori = false;
  user: User;
  genere: any;
  nome: any;
   
  constructor(public accountService : AccountService, private router: Router, public classService: ClassServiceService) { }

  ngOnInit(): void {
    
  }

  login()
  {
    this.accountService.login(this.model).subscribe(() => {   
      this.router.navigateByUrl('/members'); 
    }) 
  }  
  
  logout()
  {
    this.accountService.logout();    
    this.router.navigateByUrl('/')
  }      
}
