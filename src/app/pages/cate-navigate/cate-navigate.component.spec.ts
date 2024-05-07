import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateNavigateComponent } from './cate-navigate.component';

describe('CateNavigateComponent', () => {
  let component: CateNavigateComponent;
  let fixture: ComponentFixture<CateNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateNavigateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CateNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
