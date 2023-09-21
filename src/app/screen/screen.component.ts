import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AnimateService } from '../services/animate.service';
import { TitlePageService } from '../services/title_page.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  public openSidebar: boolean = false;
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;
  @ViewChild('btnSidebar', { static: false }) btnSidebar!: ElementRef;
  public title: string = 'Home';
  public suscribeTitle: string | null = null;

  constructor(
    private readonly animateService: AnimateService,
    private readonly titlePageService: TitlePageService,
  ) { }

  ngOnInit(): void {
    this.titlePageService.title
      .subscribe( e => this.suscribeTitle = e );
  }
  
  toggleSidebar( action: boolean ): void {
    this.openSidebar = action;
    const sidebar = this.sidebar.nativeElement;
    const button = this.btnSidebar.nativeElement;

    switch ( true ) {
      case action:
        this.animateService
          .toggleAnimation( 
            sidebar, 'show', 
            'marginLeft', '-200px', 
            '0px', 200 
          );
        this.animateService
          .toggleAnimation( 
            button, 'show', 
            'marginLeft', '15px', 
            '215px', 200 
          );
        return;
      
      case !action:
        this.animateService
          .toggleAnimation( 
            sidebar, 'hide', 
            'marginLeft', '-200px', 
            '0px', 200 
          );
        this.animateService
          .toggleAnimation( 
            button, 'hide', 
            'marginLeft', '15px', 
            '215px', 200 
          );
        return;

      default:
        return;
    }
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {

    if ( this.openSidebar ) {
      this.toggleSidebar( false );
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    
    if ( this.openSidebar ) {
      this.toggleSidebar( false );
    }
  }
}
