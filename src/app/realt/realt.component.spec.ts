import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtComponent } from './realt.component';

describe('RealtComponent', () => {
  let component: RealtComponent;
  let fixture: ComponentFixture<RealtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
