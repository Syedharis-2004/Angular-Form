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
    if (this.formData.fullName && this.formData.email && this.formData.message) {
      this.formDataService.addQuery({ ...this.formData });
      console.log('Form Saved!', this.formData);
      alert('Thank you! Your query has been submitted.');
      
      // Reset form
      this.formData = {
        fullName: '',
        email: '',
        message: '',
      };
    } else {
      alert('Please fill out all fields.');
    }
  }

  navigateToQuery() {
    this.router.navigate(['/query']);
  }
}
