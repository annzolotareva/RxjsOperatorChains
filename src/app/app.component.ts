import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { catchError, concat, debounceTime, delayWhen, distinctUntilChanged, filter, finalize, from, map, mergeMap, Observable, of, pipe, retry, take, throwError, timer, toArray } from 'rxjs';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchField: string = '';
  
  @ViewChild('test', { static: true }) input: ElementRef | undefined; 


  title = 'RxjsOperatorChains';
  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {

    //first
    // fromEvent(this.input?.nativeElement, 'input')
    // .pipe(
    //   map(val =>  {
    //     return this.input?.nativeElement.value;
    //   }),
    //   filter((val) => {
    //     return val.length >= 2;
    //   }),
    //   debounceTime(1000),
    //   distinctUntilChanged()
    //   )
    //   .subscribe(console.log);

      
    

    //second
    const baseUrl = 'https://swapi.dev/api/people/';
    this.http.get(baseUrl)
    .pipe(
      mergeMap((elem: any) => elem.results),
      filter((res: any) => (res.films.length) > 4),
      catchError(err => of([])
      ))
       //filter((elem: any) => (elem.films.length) > 4)

     .subscribe({next: x => console.log(x),
      error: console.log}
      )
    // const baseUrl = 'https://jsonplaceholder.typicode.com/users?username=Bret';
    // const newUrl = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    // this.http.get(baseUrl)
    // .pipe(
    //  map( users => {
    //   const user = users[0];
    //   this.userName = user.userName;
    //   return user;
    //  }),
    //  mergeMap(user => newUrl)
    // )
    // .subscribe(console.log)



    //   const
    // })
    //   map((data: any) => {
    //     return data.results;
    //   }),
    //   mergeMap((array: any) => {
    //     console.log(array);
    //     return array;
    //     /*if (elem.birth_year != "unknown") {
    //       elem.birth_year = 'check';
    //       console.log('updated', elem);
    //       return elem;
    //     } else {
    //       return elem;
    //     }*/
    //   }),
    //     catchError(err => {
    //       throw 'error in source. Details: ' + err;
    //     }),
    // )
      
    //     // if (res.results.birth_year === "unknown") {
    //     //   catchError((err = 'Not all people have a birth year!') => {
    //     //     console.log(err);
    //     //     return res;
    //     //   })
    //     //}
    
    //   // retry(2), 
    //   // filter((res: any) => {
    //   //   console.log(res.results.birth_year)
    //   //   return res.results.birth_year != "unknown"
    //   // })
    // .subscribe({
    //   next: x => console.log(x),
    //   error: err => console.log(err)
    // });

    
    // third
    // const newUrl = 'https://swapi.dev/api/vehicles/';
    // concat(this.http.get(newUrl)
    // .pipe(
    //   megreMap((res: any) => res.results.name),
    // ), of(["Nissan", "BMW", "Lada"]))
    // .subscribe(console.log)
  }
}



//mergeMap((res: any) => res.results),
//filter((res: any) => String(res.birth_year) == "unknown"),
// mergeMap((res: any) => res.results),
//       filter((res: any) => (res.films.length) > 4),