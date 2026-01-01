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

  onSubmit(form: any) {
    console.log('onSubmit called', form);
    if (form.valid) {
      this.formDataService.addQuery({ ...this.formData });
      console.log('Form Saved!', this.formData);
      alert('Thank you! Your query has been submitted.');
      
      // Reset form
      form.resetForm();
      this.formData = {
        fullName: '',
        email: '',
        message: '',
      };
    } else {
      // Mark all controls as touched to trigger error messages
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      alert('Please correct the errors in the form.');
    }
  }

  navigateToQuery() {
    this.router.navigate(['/query']);
  }
}
