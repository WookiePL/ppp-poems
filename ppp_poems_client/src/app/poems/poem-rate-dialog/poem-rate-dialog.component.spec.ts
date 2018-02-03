import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemRateDialogComponent } from './poem-rate-dialog.component';

describe('PoemRateDialogComponent', () => {
  let component: PoemRateDialogComponent;
  let fixture: ComponentFixture<PoemRateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemRateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
