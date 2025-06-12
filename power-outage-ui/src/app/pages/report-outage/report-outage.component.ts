import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OutageService } from '../../services/outage.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-report-outage',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './report-outage.component.html',
  styleUrl: './report-outage.component.scss'
})
export class ReportOutageComponent {
  outageForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private outageService: OutageService){
    this.outageForm = this.fb.group({
      location: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if(this.outageForm.invalid) return;

    this.outageService.create(this.outageForm.value).subscribe({
      next: () => {
        this.successMessage = 'Outage Reported Successfully!';
        this.outageForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Something went wrong'
      }
    })
  }

}
