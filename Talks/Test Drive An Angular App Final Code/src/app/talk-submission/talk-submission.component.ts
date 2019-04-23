import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';

@Component({
  selector: 'app-talk-submission',
  templateUrl: './talk-submission.component.html',
  styleUrls: ['./talk-submission.component.css']
})
export class TalkSubmissionComponent implements OnInit {
  form: FormGroup;
  successfulSubmission: boolean;

  constructor(private submissionsService: SubmissionService) {
    this.setForm();
  }

  ngOnInit() {
  }

  setForm() {
    this.form = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'submissionTitle': new FormControl('', Validators.required),
      'abstract': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const form = this.form.value;
    const submission: Submission = new Submission(form.firstName, form.lastName, form.email, form.submissionTitle, form.abstract);
    this.submissionsService.postSubmission(submission).subscribe(response => {
      if (response) {
        this.successfulSubmission = true;
      }
    });
  }
}
