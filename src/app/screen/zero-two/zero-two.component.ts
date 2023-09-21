import { Component, OnDestroy } from '@angular/core';
import { TitlePageService } from 'src/app/services/title_page.service';

@Component({
  selector: 'app-zero-two',
  templateUrl: './zero-two.component.html',
  styleUrls: ['./zero-two.component.scss']
})
export class ZeroTwoComponent implements OnDestroy {

  public title: string = 'Zero Two Page';

  constructor(
    private readonly titlePageService: TitlePageService,
  ) {
    this.titlePageService.setTitle( this.title );
  }

  ngOnDestroy(): void {
    this.titlePageService.setTitle( null );
  }

}

