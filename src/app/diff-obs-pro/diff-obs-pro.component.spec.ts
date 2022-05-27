import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffObsProComponent } from './diff-obs-pro.component';

describe('DiffObsProComponent', () => {
  let component: DiffObsProComponent;
  let fixture: ComponentFixture<DiffObsProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffObsProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffObsProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
