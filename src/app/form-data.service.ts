import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private queries: any[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const saved = localStorage.getItem('formQueries');
      if (saved) {
        this.queries = JSON.parse(saved);
      }
    }
  }

  addQuery(data: any) {
    this.queries.push(data);
    if (this.isBrowser) {
      localStorage.setItem('formQueries', JSON.stringify(this.queries));
    }
  }

  getData() {
    return this.queries;
  }

  clearData() {
    this.queries = [];
    if (this.isBrowser) {
      localStorage.removeItem('formQueries');
    }
  }
}
