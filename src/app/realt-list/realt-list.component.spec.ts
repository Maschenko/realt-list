import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtListComponent } from './realt-list.component';

describe('RealtListComponent', () => {
  let component: RealtListComponent;
  let fixture: ComponentFixture<RealtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
