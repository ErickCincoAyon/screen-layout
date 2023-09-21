import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TitlePageService {

  public title = new BehaviorSubject<string | null>( null );

  public setTitle( title: string | null ): void {
    this.title.next( title );
  }

}