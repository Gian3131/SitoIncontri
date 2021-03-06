import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/userParams';
import { ClassServiceService } from 'src/app/_services/class-service.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;  
  genderList = [{value:'male', display: 'Singoli'},{value:'female', display:'Singole'}];   

  constructor(private memberService: MembersService, public classService: ClassServiceService) { 
    this.userParams = this.memberService.getUserParams();    
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(response =>{
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  resetFilters(){
    this.userParams = this.memberService.resetsUserParams();
    this.loadMembers();
  }
  pageChanged(event:any){
    this.userParams.pageNumber = event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }
}
