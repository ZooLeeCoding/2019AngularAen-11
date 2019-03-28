import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ObservableExampleService {

  myObservable = of('alma', 'körte', 'ananász')

  myObserver = {
    next: x => console.log("Az Observer értéket kapott: ", x),
    error: err => console.log("Observer hiba!!!", err),
    complete: () => console.log("Az Observer végzett")
  }

  fruitSeller(observer) {
    observer.next("alma");
    observer.next("körte");
    observer.next("ananász");
    observer.error("banán");
    observer.complete();
  }

  constructor() { }

  callObserver() {
    //this.myObservable.subscribe(this.myObserver);

    const gyumolcs = new Observable(this.fruitSeller);
    gyumolcs.subscribe(this.myObserver);
  }


}
