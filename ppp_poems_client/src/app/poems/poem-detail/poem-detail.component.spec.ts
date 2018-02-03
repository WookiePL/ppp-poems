import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemDetailComponent } from './poem-detail.component';

describe('PoemDetailComponent', () => {
  let component: PoemDetailComponent;
  let fixture: ComponentFixture<PoemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
