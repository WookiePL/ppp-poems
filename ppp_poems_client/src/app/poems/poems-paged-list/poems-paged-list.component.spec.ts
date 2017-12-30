import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemsPagedListComponent } from './poems-paged-list.component';

describe('PoemsPagedListComponent', () => {
  let component: PoemsPagedListComponent;
  let fixture: ComponentFixture<PoemsPagedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemsPagedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemsPagedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
