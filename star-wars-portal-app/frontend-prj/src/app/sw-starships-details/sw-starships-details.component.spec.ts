import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwStarshipsDetailsComponent } from './sw-starships-details.component';

describe('SwStarshipsDetailsComponent', () => {
  let component: SwStarshipsDetailsComponent;
  let fixture: ComponentFixture<SwStarshipsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwStarshipsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwStarshipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
