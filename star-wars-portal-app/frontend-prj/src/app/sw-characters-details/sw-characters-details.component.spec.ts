import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCharactersDetailsComponent } from './sw-characters-details.component';

describe('SwCharactersDetailsComponent', () => {
  let component: SwCharactersDetailsComponent;
  let fixture: ComponentFixture<SwCharactersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCharactersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCharactersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
