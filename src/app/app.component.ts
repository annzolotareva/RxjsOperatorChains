import { Component, ViewChild, ElementRef } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: string = '';
  
  @ViewChild('test', { static: true }) input: ElementRef | undefined; 


  title = 'RxjsOperatorChains';


  ngOnInit(): void {
    fromEvent(this.input?.nativeElement, 'input')
    .pipe(
      map(val => this.input?.nativeElement.value))
      .subscribe(console.log);
    
    //const baseUrl = 'https://swapi.dev/api/people';
    //this.http.get(baseUrl)
    //.pipe()


    from([10, 20, 40 , 41, 60])
  .pipe(
    map((num) => num * 2),
    filter((num) => num % 10 === 0),
    
  )
  .subscribe((vl) => console.log(vl));
  }
}


