import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesDetailsComponent } from './batteries-details.component';

describe('BatteriesDetailsComponent', () => {
  let component: BatteriesDetailsComponent;
  let fixture: ComponentFixture<BatteriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
