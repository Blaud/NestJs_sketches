import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
})
export class IndexPageComponent implements OnInit {

  testGet = 'loading';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/api', {responseType: 'text'}).subscribe(
      data => this.testGet = data,
      error => console.log('/api', error)
    );
  }

}
