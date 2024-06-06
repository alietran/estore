import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastOrderDetailComponent } from './past-order-detail.component';

describe('PastOrderDetailComponent', () => {
  let component: PastOrderDetailComponent;
  let fixture: ComponentFixture<PastOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastOrderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
