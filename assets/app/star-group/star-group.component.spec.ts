import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarGroupComponent } from './star-group.component';

describe('StarGroupComponent', () => {
  let component: StarGroupComponent;
  let fixture: ComponentFixture<StarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
