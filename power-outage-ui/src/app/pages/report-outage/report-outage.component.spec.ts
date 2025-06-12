import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOutageComponent } from './report-outage.component';

describe('ReportOutageComponent', () => {
  let component: ReportOutageComponent;
  let fixture: ComponentFixture<ReportOutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportOutageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
