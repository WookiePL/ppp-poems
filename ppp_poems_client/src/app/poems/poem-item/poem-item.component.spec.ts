import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemItemComponent } from './poem-item.component';

describe('PoemItemComponent', () => {
  let component: PoemItemComponent;
  let fixture: ComponentFixture<PoemItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
