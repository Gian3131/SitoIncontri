import { Message } from 'src/app/_models/message';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';
import { MembersService } from 'src/app/_services/members.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-message',
  templateUrl: './member-message.component.html',
  styleUrls: ['./member-message.component.css']
})
export class MemberMessageComponent implements OnInit {

  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {   
    
  }

  sendMessage(){
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {      
      this.messageForm.reset();
    })
  }

  

}
