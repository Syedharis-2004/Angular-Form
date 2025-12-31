import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private queries: any[] = [];

  addQuery(data: any) {
    this.queries.push(data);
  }

  getData() {
    return this.queries;
  }

  clearData() {
    this.queries = [];
  }
}
