import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactFormComponent {
  formData = {
    fullName: '',
    email: '',
    message: '',
  };

  constructor(private router: Router, private formDataService: FormDataService) {}

  onSubmit() {
    console.log('Form Submitted!', this.formData);
    alert('Thank you for contacting us!');
  }

  navigateToQuery() {
    if (!this.formData.fullName || !this.formData.email || !this.formData.message) {
      alert('Please fill out all fields before viewing the query.');
      return;
    }
    
    this.formDataService.addQuery({ ...this.formData });
    this.router.navigate(['/query']);
  }
}
