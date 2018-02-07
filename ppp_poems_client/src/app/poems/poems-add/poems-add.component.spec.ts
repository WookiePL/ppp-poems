import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemsAddComponent } from './poems-add.component';

describe('PoemsAddComponent', () => {
  let component: PoemsAddComponent;
  let fixture: ComponentFixture<PoemsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
