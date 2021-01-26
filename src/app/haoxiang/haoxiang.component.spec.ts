import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaoxiangComponent } from './haoxiang.component';

describe('HaoxiangComponent', () => {
  let component: HaoxiangComponent;
  let fixture: ComponentFixture<HaoxiangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaoxiangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaoxiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
