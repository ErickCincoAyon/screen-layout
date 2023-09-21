import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  sidebarAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginLeft: '-200px' },
          { marginLeft: '0px' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginLeft: '0px' },
          { marginLeft: '-200px' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  toggleAnimation( 
    element: HTMLDivElement, 
    action: string, 
    property: string, 
    firstValue: string, 
    secondValue: string, 
    duration: number 
  ): void {

    if( action === 'show' ) {

      element.animate([
          { [property]: firstValue },
          { [property]: secondValue }
      ], {
          duration,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });

    } else if ( action === 'hide' ) {

        element.animate([
          { [property]: secondValue },
          { [property]: firstValue }
        ], {
          duration,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });

    }
  }
}
