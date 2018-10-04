import {Component, OnInit} from '@angular/core';
import {NgFeaturesService} from './ng-features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  features: Array<object>;

  constructor(private ngFeatures: NgFeaturesService) {}

  ngOnInit(): void {
    this.features = this.ngFeatures.getFeatures();
  }
}
