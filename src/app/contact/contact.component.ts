import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contactList : any;
  ngOnInit(): void {
    //this.contactList = this.contactService.generateContacts();
    this.contactService.generateContacts().subscribe(data =>{
      this.contactList = data ;
    });
  }
    success = false;

    
    addNewContact(contactform: NgForm){
    const cid =contactform.value.contactid;
    const cname = contactform.value.contactname;
    const newFormData = {id: cid, name: cname};
    this.contactService.createContactAPI(newFormData)
      .subscribe(data => {
        console.log(data);
        this.success = true;
      })
  }


  updatedContact(contactId){
    const newFormData = {id: contactId, name: 'Babu'};
    this.contactService.updateContactAPI(contactId, newFormData)
      .subscribe(data => {
        console.log(data);
        this.success = true;
      });
  }
  deleteContact(contactId){
    this.contactService.deleteContactAPI(contactId)
      .subscribe();

  }
}
