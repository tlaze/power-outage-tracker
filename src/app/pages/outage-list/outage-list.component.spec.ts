import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutageListComponent } from './outage-list.component';

describe('OutageListComponent', () => {
  let component: OutageListComponent;
  let fixture: ComponentFixture<OutageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
