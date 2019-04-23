import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkSubmissionComponent } from './talk-submission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TalkSubmissionComponent', () => {
  let component: TalkSubmissionComponent;
  let fixture: ComponentFixture<TalkSubmissionComponent>;
  let submissionService: SubmissionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkSubmissionComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkSubmissionComponent);
    component = fixture.componentInstance;
    submissionService = fixture.debugElement.injector.get(SubmissionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collect submission data from form and second correct object to the backend', () => {
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.value = 'Matthew';
    fixture.debugElement.query(By.css('[id=firstName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.value = 'Knowles';
    fixture.debugElement.query(By.css('[id=lastName]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.value = 'Matthew@gmail.com';
    fixture.debugElement.query(By.css('[id=email]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.value = 'Test Drive Angular';
    fixture.debugElement.query(By.css('[id=submission-title]')).nativeElement.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.value = 'Many Tests';
    fixture.debugElement.query(By.css('[id=abstract]')).nativeElement.dispatchEvent(new Event('input'));
    spyOn(submissionService, 'postSubmission').and.returnValue(of({}));
    component.onSubmit();
    const expectedSubmission: Submission = new Submission('Matthew', 'Knowles', 'Matthew@gmail.com', 'Test Drive Angular', 'Many Tests');
    expect(submissionService.postSubmission).toHaveBeenCalledWith(expectedSubmission);
  });
});
