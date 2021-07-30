import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSharedComponentComponent } from './sample-shared-component.component';

describe('SampleSharedComponentComponent', () => {
  let component: SampleSharedComponentComponent;
  let fixture: ComponentFixture<SampleSharedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSharedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
