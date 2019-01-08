import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDetailPage } from './planets-detail.page';

describe('PlanetsDetailPage', () => {
  let component: PlanetsDetailPage;
  let fixture: ComponentFixture<PlanetsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
