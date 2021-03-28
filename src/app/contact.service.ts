import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(  private httpClient: HttpClient ) {}

  generateContacts(){
    return this.httpClient.get('http://localhost:3000/contact');
    
  }
  
  createContactAPI(endPoint){
    return this.httpClient.post('http://localhost:3000/contact', endPoint);
  }

  updateContactAPI(contactId, updatedContact){
    const endpointUrl = 'http://localhost:3000/contact/'+contactId;
    
    return this.httpClient.put(endpointUrl, updatedContact);
  }
  deleteContactAPI(contactId){
    const endpointUrl = 'http://localhost:3000/contact/'+contactId;
    return this.httpClient.delete(endpointUrl)
  }

}
