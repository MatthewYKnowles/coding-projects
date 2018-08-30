import { Injectable } from '@angular/core';

@Injectable()
export class NgFeaturesService {

  constructor() { }

  getFeatures() {
    return [
      { 'name': 'Components' },
      { 'name': 'Services' },
      { 'name': 'Directives' },
      { 'name': 'Pipes' }
    ]
  }
}
