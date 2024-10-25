import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeriesListarComponent } from './series-listar.component';

describe('SeriesListarComponent', () => {
  let component: SeriesListarComponent;
  let fixture: ComponentFixture<SeriesListarComponent>;

  beforeEach(waitForAsync(() => {  
    TestBed.configureTestingModule({
      declarations: [ SeriesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
