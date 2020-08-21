import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Lead }    from './Lead';

import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'lead-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LeadFormComponent {

  constructor(private http: Http) {}

  private model = new Lead('', '','', '');
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  onSubmit(): Promise<Lead> {
    return this.http
      .post("http://localhost:3000/kimpossible", JSON.stringify(this.model), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
}
