import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-query-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-result.html',
  styleUrl: './query-result.css'
})
export class QueryResultComponent {
  queries: any[] = [];

  constructor(private router: Router, private formDataService: FormDataService) {
    this.queries = this.formDataService.getData();
  }

  goBack() {
    // We don't clear data here so we can accumulate entries
    this.router.navigate(['/']);
  }
}
