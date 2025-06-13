import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutageService } from '../../services/outage.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outage-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './outage-list.component.html',
  styleUrl: './outage-list.component.scss'
})
export class OutageListComponent implements OnInit {
  outages: any[] = [];
  loading = true;
  error = '';

  constructor(private outageService: OutageService, private router: Router){}

  goToReport() {
  this.router.navigate(['/report']);
  }
  ngOnInit(){
    this.outageService.getAllOutages().subscribe({
      next: (data: any)=> {
        this.outages = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load outages';
        this.loading = false;
      },
    });
  }

  markResolved(id: number){
    this.outageService.resolve(id).subscribe(() => {
      this.outages = this.outages.map(o => 
        o.id === id ? { ...o, resolved: true } : o
      )
    })
  }

  deleteOutage(id: number){
    if(!confirm('Are you sure you want to delete this outage?')) return;

    this.outageService.delete(id).subscribe(() => {
      this.outages = this.outages.filter(o => o.id !== id)
    });
  }
}
