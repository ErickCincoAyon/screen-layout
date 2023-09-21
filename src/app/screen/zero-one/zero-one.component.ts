import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitlePageService } from 'src/app/services/title_page.service';

@Component({
  selector: 'app-zero-one',
  templateUrl: './zero-one.component.html',
  styleUrls: ['./zero-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ZeroOneComponent implements OnDestroy {

   /**
   * * layout information
   * @param sprints
   * @type Array of strings
   */
   public sprints: string[] = [
    'Sprint 1', 
    'Sprint 2', 
    'Sprint 3',
    'Sprint 4',
  ];

  /**
   * * layout information
   * @param statusTypes
   * @type Array of strings
   */
  public statusTypes: string[] = [
    'Activo', 
    'Inactivo', 
    'En Progeso',
    'Pendiente',
  ];

  /**
   * * layout information
   * @param responsibles
   * @type Array of strings
   */
  public responsibles: string[] = [
    'User Angular', 
    'User .NET', 
    'User Test',
    'User NestJS',
  ];

  public taskCompleteValue: number = 36;
  public title: string = 'Zero One Page';
  public loginForm = this.fb.group({
    historyStatus: [ '', [ Validators.required ]],
    taskStatus: [ '', [ Validators.required ]],
    responsible: [ '', [ Validators.required ]],
  });
  public sprintForm = this.fb.group({
    sprint: [ '', [ Validators.required ]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly titlePageService: TitlePageService,
    
  ) {
    this.titlePageService.setTitle( this.title );
  }

  ngOnDestroy(): void {
    this.titlePageService.setTitle( null );
  }

  sendForm(): void {
    
    if( this.loginForm.invalid ) return;
    
    console.log( this.loginForm.getRawValue() );
  }

  sendSprint(): void {

    if( this.sprintForm.invalid ) return;
    
    console.log( this.sprintForm.getRawValue() );
  }

}
