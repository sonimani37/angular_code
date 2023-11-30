import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtestComponent } from './ztest.component';

describe('ZtestComponent', () => {
  let component: ZtestComponent;
  let fixture: ComponentFixture<ZtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
