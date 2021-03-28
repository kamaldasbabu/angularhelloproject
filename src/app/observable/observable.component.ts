import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data: Observable<any>;
  constructor( ) { }
  ngOnInit(): void {
    new Observable(observer => {
      setTimeout(()=>{
        observer.next('Startinig...');
      }, 4000),
      setTimeout(()=>{
        observer.next('Running...');
      }, 8000),
      setTimeout(()=>{
        observer.next('Complete...');
      }, 12000);

    }).subscribe(data=>{
      this.orderStatus = data;
    });
  }

}



// setTimeout(()=>{
//   observer.next('ready to shift..')
// }, 8000);

// setTimeout(()=>{
//   observer.next('out for delivary...')
// }, 12000);

// setTimeout(()=>{
//   observer.next('Delivared item(s)...')
// }, 16000);

