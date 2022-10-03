import { Component } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxjsOperatorChains';
  ngOnInit(): void {
    from([10, 20, 40 , 41, 60])
  .pipe(
    map((num) => num * 2),
    filter((num) => num % 10 === 0),
  )
  .subscribe((vl) => console.log(vl));
  }
}


