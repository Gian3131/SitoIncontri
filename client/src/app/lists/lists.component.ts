import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { MembersService } from 'src/app/_services/members.service';
import { ClassServiceService } from '../_services/class-service.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {  
  members: Partial<Member[]>;
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 18;
  pagination : Pagination;  
  

  constructor(private memberService: MembersService, public classService: ClassServiceService) {}

  ngOnInit(): void {
    this.loadLikes();      
  }

  loadLikes(){
    this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(response => {
      this.members = response.result;      
      this.pagination = response.pagination;
    })
  }
  pageChanged(event: any)
  {
    this.pageNumber = event.page;
    this.loadLikes();
  }   
}
