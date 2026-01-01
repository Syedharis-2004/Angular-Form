import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private queries: any[] = [];
  // private isBrowser: boolean; // Not needed if we don't use localStorage

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    // this.isBrowser = isPlatformBrowser(platformId);
    // localStorage logic removed
  }

  addQuery(data: any) {
    this.queries.push(data);
    // localStorage logic removed
  }

  getData() {
    return this.queries;
  }

  clearData() {
    this.queries = [];
  }
}
