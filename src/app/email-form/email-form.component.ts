// src/app/email-form/email-form.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  to: any;
  subject: any;
  message: any;

  constructor(private http: HttpClient) {}

  sendEmail() {
    const emailData = {
      to: this.to,
      subject: this.subject,
      message: this.message,
    };

    this.http.post('http://localhost:3000/email', emailData).subscribe(
      () => {
        alert('Email sent successfully!');
        this.clearForm();
      },
      (error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
      }
    );
    console.log(emailData);
    
  }

  clearForm() {
    this.to = '';
    this.subject = '';
    this.message = '';
  }
}
